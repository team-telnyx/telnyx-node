// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'messaging_profiles',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/messaging_profiles/{id}/short_codes',
  operationId: 'ListProfileShortCodes',
};

export const tool: Tool = {
  name: 'list_short_codes_messaging_profiles',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList short codes associated with a messaging profile\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/messaging_profile_list_short_codes_response',\n  $defs: {\n    messaging_profile_list_short_codes_response: {\n      type: 'object',\n      title: 'List Messaging Profile Short Codes Response',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/short_code'\n          }\n        },\n        meta: {\n          $ref: '#/$defs/pagination_meta'\n        }\n      }\n    },\n    short_code: {\n      type: 'object',\n      properties: {\n        messaging_profile_id: {\n          type: 'string',\n          description: 'Unique identifier for a messaging profile.'\n        },\n        id: {\n          type: 'string',\n          description: 'Identifies the type of resource.'\n        },\n        country_code: {\n          type: 'string',\n          description: 'ISO 3166-1 alpha-2 country code.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the resource was created.',\n          format: 'date-time'\n        },\n        record_type: {\n          type: 'string',\n          description: 'Identifies the type of the resource.',\n          enum: [            'short_code'\n          ]\n        },\n        short_code: {\n          type: 'string',\n          description: 'Short digit sequence used to address messages.'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the resource was updated.',\n          format: 'date-time'\n        }\n      },\n      required: [        'messaging_profile_id'\n      ]\n    },\n    pagination_meta: {\n      type: 'object',\n      properties: {\n        page_number: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        total_pages: {\n          type: 'integer'\n        },\n        total_results: {\n          type: 'integer'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      page: {
        type: 'object',
        description: 'Consolidated page parameter (deepObject style). Originally: page[number], page[size]',
        properties: {
          number: {
            type: 'integer',
            description: 'The page number to load',
          },
          size: {
            type: 'integer',
            description: 'The size of the page',
          },
        },
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
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.messagingProfiles.listShortCodes(id, body)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
