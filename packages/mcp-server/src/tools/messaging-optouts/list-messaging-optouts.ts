// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'messaging_optouts',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/messaging_optouts',
  operationId: 'ListOptOuts',
};

export const tool: Tool = {
  name: 'list_messaging_optouts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve a list of opt-out blocks.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/messaging_optout_list_response'\n      }\n    },\n    meta: {\n      $ref: '#/$defs/messaging_pagination_meta'\n    }\n  },\n  $defs: {\n    messaging_optout_list_response: {\n      type: 'object',\n      properties: {\n        created_at: {\n          type: 'string',\n          description: 'The timestamp when the opt-out was created',\n          format: 'date-time'\n        },\n        from: {\n          type: 'string',\n          description: 'Sending address (+E.164 formatted phone number, alphanumeric sender ID, or short code).'\n        },\n        keyword: {\n          type: 'string',\n          description: 'The keyword that triggered the opt-out.'\n        },\n        messaging_profile_id: {\n          type: 'string',\n          description: 'Unique identifier for a messaging profile.'\n        },\n        to: {\n          type: 'string',\n          description: 'Receiving address (+E.164 formatted phone number or short code).'\n        }\n      }\n    },\n    messaging_pagination_meta: {\n      type: 'object',\n      properties: {\n        page_number: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        total_pages: {\n          type: 'integer'\n        },\n        total_results: {\n          type: 'integer'\n        }\n      },\n      required: [        'page_number',\n        'page_size',\n        'total_pages',\n        'total_results'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      created_at: {
        type: 'object',
        description:
          'Consolidated created_at parameter (deepObject style). Originally: created_at[gte], created_at[lte]',
        properties: {
          gte: {
            type: 'string',
            description: 'Filter opt-outs created after this date (ISO-8601 format)',
            format: 'date-time',
          },
          lte: {
            type: 'string',
            description: 'Filter opt-outs created before this date (ISO-8601 format)',
            format: 'date-time',
          },
        },
      },
      filter: {
        type: 'object',
        description:
          'Consolidated filter parameter (deepObject style). Originally: filter[messaging_profile_id], filter[from]',
        properties: {
          from: {
            type: 'string',
            description:
              'The sending address (+E.164 formatted phone number, alphanumeric sender ID, or short code) to retrieve opt-outs for',
          },
          messaging_profile_id: {
            type: 'string',
            description: 'The ID of the messaging profile to retrieve opt-outs for',
          },
        },
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
      redaction_enabled: {
        type: 'string',
        description: 'If receiving address (+E.164 formatted phone number) should be redacted',
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
  const response = await client.messagingOptouts.list(body).asResponse();
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
