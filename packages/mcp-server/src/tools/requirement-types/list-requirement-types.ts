// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'requirement_types',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/requirement_types',
  operationId: 'ListRequirementTypes',
};

export const tool: Tool = {
  name: 'list_requirement_types',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList all requirement types ordered by created_at descending\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/doc_reqs_requirement_type'\n      }\n    },\n    meta: {\n      $ref: '#/$defs/pagination_meta'\n    }\n  },\n  $defs: {\n    doc_reqs_requirement_type: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifies the associated document'\n        },\n        acceptance_criteria: {\n          type: 'object',\n          description: 'Specifies objective criteria for acceptance',\n          properties: {\n            acceptable_characters: {\n              type: 'string',\n              description: 'Specifies the allowed characters as a string'\n            },\n            acceptable_values: {\n              type: 'array',\n              description: 'Specifies the list of strictly possible values for the requirement. Ignored when empty',\n              items: {\n                type: 'string'\n              }\n            },\n            locality_limit: {\n              type: 'string',\n              description: 'Specifies geography-based acceptance criteria'\n            },\n            max_length: {\n              type: 'integer',\n              description: 'Maximum length allowed for the value'\n            },\n            min_length: {\n              type: 'integer',\n              description: 'Minimum length allowed for the value'\n            },\n            time_limit: {\n              type: 'string',\n              description: 'Specifies time-based acceptance criteria'\n            }\n          }\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date-time indicating when the resource was created.'\n        },\n        description: {\n          type: 'string',\n          description: 'Describes the requirement type'\n        },\n        example: {\n          type: 'string',\n          description: 'Provides one or more examples of acceptable documents'\n        },\n        name: {\n          type: 'string',\n          description: 'A short descriptive name for this requirement_type'\n        },\n        record_type: {\n          type: 'string',\n          description: 'Identifies the type of the resource'\n        },\n        type: {\n          type: 'string',\n          description: 'Defines the type of this requirement type',\n          enum: [            'document',\n            'address',\n            'textual'\n          ]\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date-time indicating when the resource was last updated.'\n        }\n      }\n    },\n    pagination_meta: {\n      type: 'object',\n      properties: {\n        page_number: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        total_pages: {\n          type: 'integer'\n        },\n        total_results: {\n          type: 'integer'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      filter: {
        type: 'object',
        description:
          'Consolidated filter parameter for requirement types (deepObject style). Originally: filter[name]',
        properties: {
          name: {
            type: 'object',
            properties: {
              contains: {
                type: 'string',
                description: 'Filters requirement types to those whose name contains a certain string.',
              },
            },
          },
        },
      },
      sort: {
        type: 'array',
        description:
          'Consolidated sort parameter for requirement types (deepObject style). Originally: sort[]',
        items: {
          type: 'string',
          enum: ['name', 'created_at', 'updated_at', '-name', '-created_at', '-updated_at'],
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.requirementTypes.list(body)));
};

export default { metadata, tool, handler };
