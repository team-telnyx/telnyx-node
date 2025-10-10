// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'siprec_connectors',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/siprec_connectors/{connector_name}',
  operationId: 'updateSiprecConnector',
};

export const tool: Tool = {
  name: 'update_siprec_connectors',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdates a stored SIPREC connector configuration.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/siprec_connector_update_response',\n  $defs: {\n    siprec_connector_update_response: {\n      type: 'object',\n      title: 'SIPREC Connector Response',\n      properties: {\n        data: {\n          type: 'object',\n          title: 'SIPREC Connector',\n          properties: {\n            app_subdomain: {\n              type: 'string',\n              description: 'Subdomain to route calls when using Telnyx SRS (optional).'\n            },\n            created_at: {\n              type: 'string',\n              description: 'ISO 8601 formatted date/time of creation.'\n            },\n            host: {\n              type: 'string',\n              description: 'Hostname/IPv4 address of the SIPREC SRS.'\n            },\n            name: {\n              type: 'string',\n              description: 'Name for the SIPREC connector resource.'\n            },\n            port: {\n              type: 'integer',\n              description: 'Port for the SIPREC SRS.'\n            },\n            record_type: {\n              type: 'string'\n            },\n            updated_at: {\n              type: 'string',\n              description: 'ISO 8601 formatted date/time of last update.'\n            }\n          }\n        }\n      },\n      required: [        'data'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      connector_name: {
        type: 'string',
      },
      host: {
        type: 'string',
        description: 'Hostname/IPv4 address of the SIPREC SRS.',
      },
      name: {
        type: 'string',
        description: 'Name for the SIPREC connector resource.',
      },
      port: {
        type: 'integer',
        description: 'Port for the SIPREC SRS.',
      },
      app_subdomain: {
        type: 'string',
        description: 'Subdomain to route the call when using Telnyx SRS (optional for non-Telnyx SRS).',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['connector_name', 'host', 'name', 'port'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { connector_name, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.siprecConnectors.update(connector_name, body)),
  );
};

export default { metadata, tool, handler };
