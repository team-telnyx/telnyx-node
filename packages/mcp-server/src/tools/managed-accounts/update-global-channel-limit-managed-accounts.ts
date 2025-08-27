// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'managed_accounts',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/managed_accounts/{id}/update_global_channel_limit',
  operationId: 'UpdateManagedAccountGlobalChannelLimit',
};

export const tool: Tool = {
  name: 'update_global_channel_limit_managed_accounts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate the amount of allocatable global outbound channels allocated to a specific managed account.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'object',\n      title: 'Global Outbound Channels Details for a Managed Account',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The user ID of the managed account.'\n        },\n        channel_limit: {\n          type: 'integer',\n          description: 'Integer value that indicates the number of allocatable global outbound channels that are allocated to the managed account. If the value is 0 then the account will have no usable channels and will not be able to perform outbound calling.'\n        },\n        email: {\n          type: 'string',\n          description: 'The email of the managed account.'\n        },\n        manager_account_id: {\n          type: 'string',\n          description: 'The user ID of the manager of the account.'\n        },\n        record_type: {\n          type: 'string',\n          description: 'The name of the type of data in the response.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      channel_limit: {
        type: 'integer',
        description:
          'Integer value that indicates the number of allocatable global outbound channels that should be allocated to the managed account. Must be 0 or more. If the value is 0 then the account will have no usable channels and will not be able to perform outbound calling.',
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
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.managedAccounts.updateGlobalChannelLimit(id, body)),
  );
};

export default { metadata, tool, handler };
