// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'bundle_pricing.user_bundles',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/bundle_pricing/user_bundles/bulk',
  operationId: 'CreateUserBundlesBulk',
};

export const tool: Tool = {
  name: 'create_bundle_pricing_user_bundles',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates multiple user bundles for the user.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/user_bundle_create_response',\n  $defs: {\n    user_bundle_create_response: {\n      type: 'object',\n      title: 'CreatedUserBundlesResponse',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/user_bundle'\n          }\n        }\n      },\n      required: [        'data'\n      ]\n    },\n    user_bundle: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'User bundle\\'s ID, this is used to identify the user bundle in the API.'\n        },\n        active: {\n          type: 'boolean',\n          description: 'Status of the user bundle.'\n        },\n        billing_bundle: {\n          $ref: '#/$defs/billing_bundle_summary'\n        },\n        created_at: {\n          type: 'string',\n          description: 'Date the user bundle was created.',\n          format: 'date'\n        },\n        resources: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/user_bundle_resource'\n          }\n        },\n        user_id: {\n          type: 'string',\n          description: 'The customer\\'s ID that owns this user bundle.'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'Date the user bundle was last updated.',\n          format: 'date'\n        }\n      },\n      required: [        'id',\n        'active',\n        'billing_bundle',\n        'created_at',\n        'resources',\n        'user_id'\n      ]\n    },\n    billing_bundle_summary: {\n      type: 'object',\n      title: 'BillingBundleSummary',\n      properties: {\n        id: {\n          type: 'string',\n          title: 'Id',\n          description: 'Bundle\\'s ID, this is used to identify the bundle in the API.'\n        },\n        cost_code: {\n          type: 'string',\n          title: 'Cost Code',\n          description: 'Bundle\\'s cost code, this is used to identify the bundle in the billing system.'\n        },\n        created_at: {\n          type: 'string',\n          title: 'Created At',\n          description: 'Date the bundle was created.',\n          format: 'date'\n        },\n        is_public: {\n          type: 'boolean',\n          title: 'Is Public',\n          description: 'Available to all customers or only to specific customers.'\n        },\n        name: {\n          type: 'string',\n          title: 'Name',\n          description: 'Bundle\\'s name, this is used to identify the bundle in the UI.'\n        },\n        currency: {\n          type: 'string',\n          title: 'Currency',\n          description: 'Bundle\\'s currency code.'\n        },\n        mrc_price: {\n          type: 'number',\n          title: 'Mrc Price',\n          description: 'Monthly recurring charge price.'\n        },\n        slug: {\n          type: 'string',\n          title: 'Slug',\n          description: 'Slugified version of the bundle\\'s name.'\n        },\n        specs: {\n          type: 'array',\n          title: 'Specs',\n          items: {\n            type: 'string'\n          }\n        }\n      },\n      required: [        'id',\n        'cost_code',\n        'created_at',\n        'is_public',\n        'name'\n      ]\n    },\n    user_bundle_resource: {\n      type: 'object',\n      title: 'UserBundleResourceSchema',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Resource\\'s ID.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'Date the resource was created.',\n          format: 'date'\n        },\n        resource: {\n          type: 'string',\n          description: 'The resource itself (usually a phone number).'\n        },\n        resource_type: {\n          type: 'string',\n          description: 'The type of the resource (usually \\'number\\').'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'Date the resource was last updated.',\n          format: 'date'\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'resource',\n        'resource_type'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      idempotency_key: {
        type: 'string',
        description:
          'Idempotency key for the request. Can be any UUID, but should always be unique for each request.',
      },
      items: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            billing_bundle_id: {
              type: 'string',
              description: 'Quantity of user bundles to order.',
            },
            quantity: {
              type: 'integer',
              description: 'Quantity of user bundles to order.',
            },
          },
          required: ['billing_bundle_id', 'quantity'],
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
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.bundlePricing.userBundles.create(body)),
  );
};

export default { metadata, tool, handler };
