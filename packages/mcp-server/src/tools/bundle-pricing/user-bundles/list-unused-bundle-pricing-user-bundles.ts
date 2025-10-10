// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'bundle_pricing.user_bundles',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/bundle_pricing/user_bundles/unused',
  operationId: 'GetUnusedUserBundles',
};

export const tool: Tool = {
  name: 'list_unused_bundle_pricing_user_bundles',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns all user bundles that aren't in use.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/user_bundle_list_unused_response',\n  $defs: {\n    user_bundle_list_unused_response: {\n      type: 'object',\n      title: 'UnusedUserBundlesResponse',\n      properties: {\n        data: {\n          type: 'array',\n          title: 'Data',\n          items: {\n            type: 'object',\n            title: 'UnusedUserBundlesSchema',\n            properties: {\n              billing_bundle: {\n                $ref: '#/$defs/billing_bundle_summary'\n              },\n              user_bundle_ids: {\n                type: 'array',\n                title: 'User Bundle Ids',\n                description: 'List of user bundle IDs for given bundle.',\n                items: {\n                  type: 'string'\n                }\n              }\n            },\n            required: [              'billing_bundle',\n              'user_bundle_ids'\n            ]\n          }\n        }\n      },\n      required: [        'data'\n      ]\n    },\n    billing_bundle_summary: {\n      type: 'object',\n      title: 'BillingBundleSummary',\n      properties: {\n        id: {\n          type: 'string',\n          title: 'Id',\n          description: 'Bundle\\'s ID, this is used to identify the bundle in the API.'\n        },\n        cost_code: {\n          type: 'string',\n          title: 'Cost Code',\n          description: 'Bundle\\'s cost code, this is used to identify the bundle in the billing system.'\n        },\n        created_at: {\n          type: 'string',\n          title: 'Created At',\n          description: 'Date the bundle was created.',\n          format: 'date'\n        },\n        is_public: {\n          type: 'boolean',\n          title: 'Is Public',\n          description: 'Available to all customers or only to specific customers.'\n        },\n        name: {\n          type: 'string',\n          title: 'Name',\n          description: 'Bundle\\'s name, this is used to identify the bundle in the UI.'\n        },\n        currency: {\n          type: 'string',\n          title: 'Currency',\n          description: 'Bundle\\'s currency code.'\n        },\n        mrc_price: {\n          type: 'number',\n          title: 'Mrc Price',\n          description: 'Monthly recurring charge price.'\n        },\n        slug: {\n          type: 'string',\n          title: 'Slug',\n          description: 'Slugified version of the bundle\\'s name.'\n        },\n        specs: {\n          type: 'array',\n          title: 'Specs',\n          items: {\n            type: 'string'\n          }\n        }\n      },\n      required: [        'id',\n        'cost_code',\n        'created_at',\n        'is_public',\n        'name'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      filter: {
        type: 'object',
        description:
          'Consolidated filter parameter (deepObject style). Supports filtering by country_iso and resource. Examples: filter[country_iso]=US or filter[resource]=+15617819942',
        properties: {
          country_iso: {
            type: 'array',
            title: 'Filter[Country Iso]',
            description: 'Filter by country code.',
            items: {
              type: 'string',
            },
          },
          resource: {
            type: 'array',
            title: 'Filter[Resource]',
            description: 'Filter by resource.',
            items: {
              type: 'string',
              description: 'Filter by resource.',
            },
          },
        },
      },
      authorization_bearer: {
        type: 'string',
        description: 'Authenticates the request with your Telnyx API V2 KEY',
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
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.bundlePricing.userBundles.listUnused(body)),
  );
};

export default { metadata, tool, handler };
