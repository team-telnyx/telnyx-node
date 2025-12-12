// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'requirements',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/requirements',
  operationId: 'ListRequirements',
};

export const tool: Tool = {
  name: 'list_requirements',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList all requirements with filtering, sorting, and pagination\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/requirement_list_response'\n      }\n    },\n    meta: {\n      $ref: '#/$defs/pagination_meta'\n    }\n  },\n  $defs: {\n    requirement_list_response: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifies the associated document'\n        },\n        action: {\n          type: 'string',\n          description: 'Indicates whether this requirement applies to branded_calling, ordering, porting, or both ordering and porting',\n          enum: [            'both',\n            'branded_calling',\n            'ordering',\n            'porting'\n          ]\n        },\n        country_code: {\n          type: 'string',\n          description: 'The 2-character (ISO 3166-1 alpha-2) country code where this requirement applies'\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date-time indicating when the resource was created.'\n        },\n        locality: {\n          type: 'string',\n          description: 'The locality where this requirement applies'\n        },\n        phone_number_type: {\n          type: 'string',\n          description: 'Indicates the phone_number_type this requirement applies to. Leave blank if this requirement applies to all number_types.',\n          enum: [            'local',\n            'national',\n            'toll_free'\n          ]\n        },\n        record_type: {\n          type: 'string',\n          description: 'Identifies the type of the resource.'\n        },\n        requirements_types: {\n          type: 'array',\n          description: 'Lists the requirement types necessary to fulfill this requirement',\n          items: {\n            $ref: '#/$defs/doc_reqs_requirement_type'\n          }\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date-time indicating when the resource was last updated.'\n        }\n      }\n    },\n    doc_reqs_requirement_type: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifies the associated document'\n        },\n        acceptance_criteria: {\n          type: 'object',\n          description: 'Specifies objective criteria for acceptance',\n          properties: {\n            acceptable_characters: {\n              type: 'string',\n              description: 'Specifies the allowed characters as a string'\n            },\n            acceptable_values: {\n              type: 'array',\n              description: 'Specifies the list of strictly possible values for the requirement. Ignored when empty',\n              items: {\n                type: 'string'\n              }\n            },\n            locality_limit: {\n              type: 'string',\n              description: 'Specifies geography-based acceptance criteria'\n            },\n            max_length: {\n              type: 'integer',\n              description: 'Maximum length allowed for the value'\n            },\n            min_length: {\n              type: 'integer',\n              description: 'Minimum length allowed for the value'\n            },\n            time_limit: {\n              type: 'string',\n              description: 'Specifies time-based acceptance criteria'\n            }\n          }\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date-time indicating when the resource was created.'\n        },\n        description: {\n          type: 'string',\n          description: 'Describes the requirement type'\n        },\n        example: {\n          type: 'string',\n          description: 'Provides one or more examples of acceptable documents'\n        },\n        name: {\n          type: 'string',\n          description: 'A short descriptive name for this requirement_type'\n        },\n        record_type: {\n          type: 'string',\n          description: 'Identifies the type of the resource'\n        },\n        type: {\n          type: 'string',\n          description: 'Defines the type of this requirement type',\n          enum: [            'document',\n            'address',\n            'textual'\n          ]\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date-time indicating when the resource was last updated.'\n        }\n      }\n    },\n    pagination_meta: {\n      type: 'object',\n      properties: {\n        page_number: {\n          type: 'integer'\n        },\n        total_pages: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        total_results: {\n          type: 'integer'\n        }\n      },\n      required: [        'page_number',\n        'total_pages'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      filter: {
        type: 'object',
        description:
          'Consolidated filter parameter for requirements (deepObject style). Originally: filter[country_code], filter[phone_number_type], filter[action]',
        properties: {
          action: {
            type: 'string',
            description: 'Filters requirements to those applying to a specific action.',
            enum: ['branded_calling', 'ordering', 'porting'],
          },
          country_code: {
            type: 'string',
            description:
              'Filters results to those applying to a 2-character (ISO 3166-1 alpha-2) country code',
          },
          phone_number_type: {
            type: 'string',
            description: 'Filters results to those applying to a specific phone_number_type',
            enum: ['local', 'national', 'toll_free'],
          },
        },
      },
      page: {
        type: 'object',
        description: 'Consolidated page parameter (deepObject style). Originally: page[size], page[number]',
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
      sort: {
        type: 'array',
        description: 'Consolidated sort parameter for requirements (deepObject style). Originally: sort[]',
        items: {
          type: 'string',
          enum: [
            'created_at',
            'updated_at',
            'country_code',
            'phone_number_type',
            '-created_at',
            '-updated_at',
            '-country_code',
            '-phone_number_type',
          ],
        },
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
  const response = await client.requirements.list(body).asResponse();
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
