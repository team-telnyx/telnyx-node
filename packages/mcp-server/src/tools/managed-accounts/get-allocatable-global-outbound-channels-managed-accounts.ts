// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'managed_accounts',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/managed_accounts/allocatable_global_outbound_channels',
  operationId: 'ListAllocatableGlobalOutboundChannels',
};

export const tool: Tool = {
  name: 'get_allocatable_global_outbound_channels_managed_accounts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nDisplay information about allocatable global outbound channels for the current user. Only usable by account managers.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'object',\n      title: 'Managed Accounts Global Outbound Channels',\n      properties: {\n        allocatable_global_outbound_channels: {\n          type: 'integer',\n          description: 'The total amount of allocatable global outbound channels available to the authenticated manager. Will be 0 if the feature is not enabled for their account.'\n        },\n        managed_account_allow_custom_pricing: {\n          type: 'boolean',\n          description: 'Boolean value that indicates if the managed account is able to have custom pricing set for it or not. If false, uses the pricing of the manager account. Defaults to false. This value may be changed, but there may be time lag between when the value is changed and pricing changes take effect.'\n        },\n        record_type: {\n          type: 'string',\n          description: 'The type of the data contained in this record.'\n        },\n        total_global_channels_allocated: {\n          type: 'integer',\n          description: 'The total number of allocatable global outbound channels currently allocated across all managed accounts for the authenticated user. This includes any amount of channels allocated by default at managed account creation time. Will be 0 if the feature is not enabled for their account.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.managedAccounts.getAllocatableGlobalOutboundChannels()),
  );
};

export default { metadata, tool, handler };
