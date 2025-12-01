// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'global_ip_health_checks',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/global_ip_health_checks',
  operationId: 'CreateGlobalIpHealthCheck',
};

export const tool: Tool = {
  name: 'create_global_ip_health_checks',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a Global IP health check.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/global_ip_health_check_create_response',\n  $defs: {\n    global_ip_health_check_create_response: {\n      type: 'object',\n      properties: {\n        data: {\n          allOf: [            {\n              $ref: '#/$defs/record'\n            }\n          ]\n        }\n      }\n    },\n    record: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifies the resource.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date-time indicating when the resource was created.'\n        },\n        record_type: {\n          type: 'string',\n          description: 'Identifies the type of the resource.'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date-time indicating when the resource was updated.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      global_ip_id: {
        type: 'string',
        description: 'Global IP ID.',
      },
      health_check_params: {
        type: 'object',
        description: 'A Global IP health check params.',
        additionalProperties: true,
      },
      health_check_type: {
        type: 'string',
        description: 'The Global IP health check type.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.globalIPHealthChecks.create(body)));
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
