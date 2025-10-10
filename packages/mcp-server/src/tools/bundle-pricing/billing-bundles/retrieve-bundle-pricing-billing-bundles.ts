// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'bundle_pricing.billing_bundles',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/bundle_pricing/billing_bundles/{bundle_id}',
  operationId: 'GetBillingBundleById',
};

export const tool: Tool = {
  name: 'retrieve_bundle_pricing_billing_bundles',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a single bundle by ID.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/billing_bundle_retrieve_response',\n  $defs: {\n    billing_bundle_retrieve_response: {\n      type: 'object',\n      title: 'BillingBundleResponse',\n      properties: {\n        data: {\n          type: 'object',\n          title: 'BillingBundleSchema',\n          properties: {\n            id: {\n              type: 'string',\n              title: 'Id',\n              description: 'Bundle\\'s ID, this is used to identify the bundle in the API.'\n            },\n            active: {\n              type: 'boolean',\n              title: 'Active',\n              description: 'If that bundle is active or not.'\n            },\n            bundle_limits: {\n              type: 'array',\n              title: 'Bundle Limits',\n              items: {\n                type: 'object',\n                title: 'BundleLimitSchema',\n                properties: {\n                  id: {\n                    type: 'string',\n                    title: 'Id'\n                  },\n                  created_at: {\n                    type: 'string',\n                    title: 'Created At',\n                    format: 'date'\n                  },\n                  metric: {\n                    type: 'string',\n                    title: 'Metric'\n                  },\n                  service: {\n                    type: 'string',\n                    title: 'Service'\n                  },\n                  updated_at: {\n                    type: 'string',\n                    title: 'Updated At',\n                    format: 'date'\n                  },\n                  billing_service: {\n                    type: 'string',\n                    title: 'Billing Service'\n                  },\n                  country: {\n                    type: 'string',\n                    title: 'Country',\n                    description: 'Use country_iso instead'\n                  },\n                  country_code: {\n                    type: 'integer',\n                    title: 'Country Code'\n                  },\n                  country_iso: {\n                    type: 'string',\n                    title: 'Country Iso'\n                  },\n                  direction: {\n                    type: 'string',\n                    title: 'BundleLimitDirection',\n                    description: 'An enumeration.',\n                    enum: [                      'inbound',\n                      'outbound'\n                    ]\n                  },\n                  limit: {\n                    type: 'integer',\n                    title: 'Limit'\n                  },\n                  rate: {\n                    type: 'string',\n                    title: 'Rate'\n                  },\n                  types: {\n                    type: 'array',\n                    title: 'Types',\n                    items: {\n                      type: 'string'\n                    }\n                  }\n                },\n                required: [                  'id',\n                  'created_at',\n                  'metric',\n                  'service',\n                  'updated_at'\n                ]\n              }\n            },\n            cost_code: {\n              type: 'string',\n              title: 'Cost Code',\n              description: 'Bundle\\'s cost code, this is used to identify the bundle in the billing system.'\n            },\n            created_at: {\n              type: 'string',\n              title: 'Created At',\n              description: 'Date the bundle was created.',\n              format: 'date'\n            },\n            is_public: {\n              type: 'boolean',\n              title: 'Is Public',\n              description: 'Available to all customers or only to specific customers.'\n            },\n            name: {\n              type: 'string',\n              title: 'Name',\n              description: 'Bundle\\'s name, this is used to identify the bundle in the UI.'\n            },\n            slug: {\n              type: 'string',\n              title: 'Slug',\n              description: 'Slugified version of the bundle\\'s name.'\n            }\n          },\n          required: [            'id',\n            'active',\n            'bundle_limits',\n            'cost_code',\n            'created_at',\n            'is_public',\n            'name'\n          ]\n        }\n      },\n      required: [        'data'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      bundle_id: {
        type: 'string',
        title: 'Bundle Id',
        description: "Billing bundle's ID, this is used to identify the billing bundle in the API.",
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
    required: ['bundle_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { bundle_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.bundlePricing.billingBundles.retrieve(bundle_id, body)),
  );
};

export default { metadata, tool, handler };
