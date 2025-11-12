// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'fqdns',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/fqdns',
  operationId: 'CreateFqdn',
};

export const tool: Tool = {
  name: 'create_fqdns',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a new FQDN object.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/fqdn_create_response',\n  $defs: {\n    fqdn_create_response: {\n      type: 'object',\n      title: 'FQDN Response',\n      properties: {\n        data: {\n          $ref: '#/$defs/fqdn'\n        }\n      }\n    },\n    fqdn: {\n      type: 'object',\n      title: 'Fqdn',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifies the resource.'\n        },\n        connection_id: {\n          type: 'string',\n          description: 'ID of the FQDN connection to which this FQDN is attached.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the resource was created.'\n        },\n        dns_record_type: {\n          type: 'string',\n          description: 'The DNS record type for the FQDN. For cases where a port is not set, the DNS record type must be \\'srv\\'. For cases where a port is set, the DNS record type must be \\'a\\'. If the DNS record type is \\'a\\' and a port is not specified, 5060 will be used.'\n        },\n        fqdn: {\n          type: 'string',\n          description: 'FQDN represented by this resource.'\n        },\n        port: {\n          type: 'integer',\n          description: 'Port to use when connecting to this FQDN.'\n        },\n        record_type: {\n          type: 'string',\n          description: 'Identifies the type of the resource.'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the resource was updated.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      connection_id: {
        type: 'string',
        description: 'ID of the FQDN connection to which this IP should be attached.',
      },
      dns_record_type: {
        type: 'string',
        description:
          "The DNS record type for the FQDN. For cases where a port is not set, the DNS record type must be 'srv'. For cases where a port is set, the DNS record type must be 'a'. If the DNS record type is 'a' and a port is not specified, 5060 will be used.",
      },
      fqdn: {
        type: 'string',
        description: 'FQDN represented by this resource.',
      },
      port: {
        type: 'integer',
        description: 'Port to use when connecting to this FQDN.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['connection_id', 'dns_record_type', 'fqdn'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.fqdns.create(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
