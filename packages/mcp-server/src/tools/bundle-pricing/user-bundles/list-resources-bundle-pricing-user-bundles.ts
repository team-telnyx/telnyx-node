// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'bundle_pricing.user_bundles',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/bundle_pricing/user_bundles/{user_bundle_id}/resources',
  operationId: 'GetUserBundleResources',
};

export const tool: Tool = {
  name: 'list_resources_bundle_pricing_user_bundles',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves the resources of a user bundle by its ID.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/user_bundle_list_resources_response',\n  $defs: {\n    user_bundle_list_resources_response: {\n      type: 'object',\n      title: 'UserBundleResourcesResponse',\n      properties: {\n        data: {\n          type: 'array',\n          title: 'Data',\n          items: {\n            $ref: '#/$defs/user_bundle_resource'\n          }\n        }\n      },\n      required: [        'data'\n      ]\n    },\n    user_bundle_resource: {\n      type: 'object',\n      title: 'UserBundleResourceSchema',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Resource\\'s ID.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'Date the resource was created.',\n          format: 'date'\n        },\n        resource: {\n          type: 'string',\n          description: 'The resource itself (usually a phone number).'\n        },\n        resource_type: {\n          type: 'string',\n          description: 'The type of the resource (usually \\'number\\').'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'Date the resource was last updated.',\n          format: 'date'\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'resource',\n        'resource_type'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      user_bundle_id: {
        type: 'string',
        title: 'User Bundle Id',
        description: "User bundle's ID, this is used to identify the user bundle in the API.",
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
    required: ['user_bundle_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { user_bundle_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(
        jq_filter,
        await client.bundlePricing.userBundles.listResources(user_bundle_id, body),
      ),
    );
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
