import Telnyx from 'telnyx';
import { Endpoint, asTextContentResult, ToolCallResult } from './tools/types';
import { zodToJsonSchema } from 'zod-to-json-schema';
import { z } from 'zod';
import { Cabidela } from '@cloudflare/cabidela';

function zodToInputSchema(schema: z.ZodSchema) {
  const convertSchema = zodToJsonSchema as unknown as (schema: unknown) => Record<string, unknown>;
  return {
    type: 'object' as const,
    ...convertSchema(schema),
  };
}

function rejectUndocumentedObjectFields(schema: unknown): unknown {
  if (Array.isArray(schema)) {
    return schema.map(rejectUndocumentedObjectFields);
  }
  if (schema === null || typeof schema !== 'object') {
    return schema;
  }

  const source = schema as Record<string, unknown>;
  const strictSchema = Object.fromEntries(
    Object.entries(source).map(([key, value]) => [key, rejectUndocumentedObjectFields(value)]),
  );
  if (source['type'] === 'object' && !Object.prototype.hasOwnProperty.call(source, 'additionalProperties')) {
    strictSchema['additionalProperties'] = false;
  }
  return strictSchema;
}

/**
 * A list of tools that expose all the endpoints in the API dynamically.
 *
 * Instead of exposing every endpoint as it's own tool, which uses up too many tokens for LLMs to use at once,
 * we expose a single tool that can be used to search for endpoints by name, resource, operation, or tag, and then
 * a generic endpoint that can be used to invoke any endpoint with the provided arguments.
 *
 * @param endpoints - The endpoints to include in the list.
 */
export function dynamicTools(endpoints: Endpoint[]): Endpoint[] {
  const readEndpoints = endpoints.filter((endpoint) => endpoint.metadata.operation === 'read');
  const writeEndpoints = endpoints.filter((endpoint) => endpoint.metadata.operation === 'write');
  const listEndpointsSchema = z.object({
    search_query: z
      .string()
      .optional()
      .describe(
        'An optional search query to filter the endpoints by. Provide a partial name, resource, operation, or tag to filter the endpoints returned.',
      ),
  });

  const listEndpointsTool = {
    metadata: {
      resource: 'dynamic_tools',
      operation: 'read' as const,
      tags: [],
    },
    tool: {
      name: 'list_api_endpoints',
      title: 'List Telnyx API endpoints',
      description:
        'List or search the supported Telnyx API endpoint catalog. Results identify each endpoint as read or write and name the matching invocation tool. API reference: https://developers.telnyx.com/api/.',
      inputSchema: zodToInputSchema(listEndpointsSchema),
      annotations: {
        title: 'List Telnyx API endpoints',
        readOnlyHint: true,
        destructiveHint: false,
        idempotentHint: true,
        openWorldHint: false,
      },
    },
    handler: async (client: Telnyx, args: Record<string, unknown> | undefined): Promise<ToolCallResult> => {
      const query = args && listEndpointsSchema.parse(args).search_query?.trim();

      const filteredEndpoints =
        query && query.length > 0 ?
          endpoints.filter((endpoint) => {
            const fieldsToMatch = [
              endpoint.tool.name,
              endpoint.tool.description,
              endpoint.metadata.resource,
              endpoint.metadata.operation,
              ...endpoint.metadata.tags,
            ];
            return fieldsToMatch.some((field) => field && field.toLowerCase().includes(query.toLowerCase()));
          })
        : endpoints;

      return asTextContentResult({
        tools: filteredEndpoints.map(({ tool, metadata }) => ({
          name: tool.name,
          description: tool.description,
          resource: metadata.resource,
          operation: metadata.operation,
          invocation_tool: metadata.operation === 'read' ? 'read_api_endpoint' : 'invoke_api_endpoint',
          tags: metadata.tags,
        })),
      });
    },
  };

  const getEndpointSchema = z.object({
    endpoint: z.string().describe('The name of the endpoint to get the schema for.'),
  });
  const getEndpointTool = {
    metadata: {
      resource: 'dynamic_tools',
      operation: 'read' as const,
      tags: [],
    },
    tool: {
      name: 'get_api_endpoint_schema',
      title: 'Get Telnyx API endpoint schema',
      description:
        'Get the exact input schema and safety metadata for a supported Telnyx API endpoint. Use `read_api_endpoint` for catalog entries marked read and `invoke_api_endpoint` for entries marked write. API reference: https://developers.telnyx.com/api/.',
      inputSchema: zodToInputSchema(getEndpointSchema),
      annotations: {
        title: 'Get Telnyx API endpoint schema',
        readOnlyHint: true,
        destructiveHint: false,
        idempotentHint: true,
        openWorldHint: false,
      },
    },
    handler: async (client: Telnyx, args: Record<string, unknown> | undefined) => {
      if (!args) {
        throw new Error('No endpoint provided');
      }
      const endpointName = getEndpointSchema.parse(args).endpoint;

      const endpoint = endpoints.find((e) => e.tool.name === endpointName);
      if (!endpoint) {
        throw new Error(`Endpoint ${endpointName} not found`);
      }
      return asTextContentResult({
        ...endpoint.tool,
        inputSchema: rejectUndocumentedObjectFields(endpoint.tool.inputSchema),
      });
    },
  };

  const invokeEndpointSchema = z.object({
    endpoint_name: z.string().describe('The name of the endpoint to invoke.'),
    args: z
      .record(z.string(), z.any())
      .describe(
        'The arguments to pass to the endpoint. This must match the schema returned by the `get_api_endpoint_schema` tool.',
      ),
  });

  const invokeEndpoint = async (
    allowedEndpoints: Endpoint[],
    args: Record<string, unknown> | undefined,
    client: Telnyx,
  ): Promise<ToolCallResult> => {
    if (!args) {
      throw new Error('No endpoint provided');
    }
    const { success, data, error } = invokeEndpointSchema.safeParse(args);
    if (!success) {
      throw new Error(`Invalid arguments for endpoint. ${error?.format()}`);
    }
    const { endpoint_name, args: endpointArgs } = data;

    const endpoint = allowedEndpoints.find((candidate) => candidate.tool.name === endpoint_name);
    if (!endpoint) {
      const catalogEndpoint = endpoints.find((candidate) => candidate.tool.name === endpoint_name);
      if (catalogEndpoint) {
        const requiredTool =
          catalogEndpoint.metadata.operation === 'read' ? 'read_api_endpoint' : 'invoke_api_endpoint';
        throw new Error(
          `Endpoint ${endpoint_name} is a ${catalogEndpoint.metadata.operation} endpoint and cannot be called with this tool. Use \`${requiredTool}\` instead.`,
        );
      }
      throw new Error(
        `Endpoint ${endpoint_name} not found. Use the \`list_api_endpoints\` tool to get the list of available endpoints.`,
      );
    }

    try {
      // Try to validate the arguments for a better error message
      const strictInputSchema = rejectUndocumentedObjectFields(endpoint.tool.inputSchema);
      const cabidela = new Cabidela(strictInputSchema, { fullErrors: true });
      cabidela.validate(endpointArgs);
    } catch (error) {
      throw new Error(`Invalid arguments for endpoint ${endpoint_name}:\n${error}`);
    }

    return await endpoint.handler(client, endpointArgs);
  };

  const readEndpointTool = {
    metadata: {
      resource: 'dynamic_tools',
      operation: 'read' as const,
      tags: [],
    },
    tool: {
      name: 'read_api_endpoint',
      title: 'Read from a Telnyx API endpoint',
      description:
        'Call one read-only endpoint selected from `list_api_endpoints`. This tool rejects every endpoint marked write. Get the endpoint schema first. API reference: https://developers.telnyx.com/api/.',
      inputSchema: zodToInputSchema(invokeEndpointSchema),
      annotations: {
        title: 'Read from a Telnyx API endpoint',
        readOnlyHint: true,
        destructiveHint: false,
        idempotentHint: true,
        openWorldHint: true,
      },
    },
    handler: async (client: Telnyx, args: Record<string, unknown> | undefined): Promise<ToolCallResult> =>
      invokeEndpoint(readEndpoints, args, client),
  };

  const invokeEndpointTool = {
    metadata: {
      resource: 'dynamic_tools',
      operation: 'write' as const,
      tags: [],
    },
    tool: {
      name: 'invoke_api_endpoint',
      title: 'Invoke a Telnyx API write endpoint',
      description:
        'Call one state-changing endpoint selected from `list_api_endpoints`. This tool rejects every endpoint marked read. Operations can create, update, delete, send, place calls, or otherwise affect the Telnyx account or external recipients. Get the endpoint schema first. API reference: https://developers.telnyx.com/api/.',
      inputSchema: zodToInputSchema(invokeEndpointSchema),
      annotations: {
        title: 'Invoke a Telnyx API write endpoint',
        readOnlyHint: false,
        destructiveHint: true,
        idempotentHint: false,
        openWorldHint: true,
      },
    },
    handler: async (client: Telnyx, args: Record<string, unknown> | undefined): Promise<ToolCallResult> =>
      invokeEndpoint(writeEndpoints, args, client),
  };

  return [getEndpointTool, listEndpointsTool, readEndpointTool, invokeEndpointTool];
}
