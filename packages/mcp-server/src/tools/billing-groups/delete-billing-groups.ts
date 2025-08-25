// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'billing_groups',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/billing_groups/{id}',
  operationId: 'DeleteBillingGroup',
};

export const tool: Tool = {
  name: 'delete_billing_groups',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nDelete a billing group\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      $ref: '#/$defs/billing_group'\n    }\n  },\n  $defs: {\n    billing_group: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifies the type of resource.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the resource was created.',\n          format: 'date-time'\n        },\n        deleted_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the resource was removed.',\n          format: 'date-time'\n        },\n        name: {\n          type: 'string',\n          description: 'A user-specified name for the billing group'\n        },\n        organization_id: {\n          type: 'string',\n          description: 'Identifies the organization that owns the resource.'\n        },\n        record_type: {\n          type: 'string',\n          description: 'Identifies the type of the resource.',\n          enum: [            'billing_group'\n          ]\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the resource was updated.',\n          format: 'date-time'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.billingGroups.delete(id)));
};

export default { metadata, tool, handler };
