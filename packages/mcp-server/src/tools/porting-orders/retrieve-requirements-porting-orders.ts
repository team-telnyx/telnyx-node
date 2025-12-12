// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'porting_orders',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/porting_orders/{id}/requirements',
  operationId: 'ListPortingOrderRequirements',
};

export const tool: Tool = {
  name: 'retrieve_requirements_porting_orders',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns a list of all requirements based on country/number type for this porting order.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/porting_order_retrieve_requirements_response'\n      }\n    },\n    meta: {\n      $ref: '#/$defs/pagination_meta'\n    }\n  },\n  $defs: {\n    porting_order_retrieve_requirements_response: {\n      type: 'object',\n      properties: {\n        field_type: {\n          type: 'string',\n          description: 'Type of value expected on field_value field',\n          enum: [            'document',\n            'textual'\n          ]\n        },\n        field_value: {\n          type: 'string',\n          description: 'Identifies the document that satisfies this requirement'\n        },\n        record_type: {\n          type: 'string',\n          description: 'Identifies the type of the resource.'\n        },\n        requirement_status: {\n          type: 'string',\n          description: 'Status of the requirement'\n        },\n        requirement_type: {\n          type: 'object',\n          description: 'Identifies the requirement type that meets this requirement',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'Identifies the requirement type'\n            },\n            acceptance_criteria: {\n              type: 'object',\n              description: 'The acceptance criteria for the requirement type',\n              additionalProperties: true\n            },\n            description: {\n              type: 'string',\n              description: 'A description of the requirement type'\n            },\n            example: {\n              type: 'string',\n              description: 'An example of the requirement type'\n            },\n            name: {\n              type: 'string',\n              description: 'The name of the requirement type'\n            },\n            type: {\n              type: 'string',\n              description: 'The type of the requirement type'\n            }\n          }\n        }\n      }\n    },\n    pagination_meta: {\n      type: 'object',\n      properties: {\n        page_number: {\n          type: 'integer'\n        },\n        total_pages: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        total_results: {\n          type: 'integer'\n        }\n      },\n      required: [        'page_number',\n        'total_pages'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
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
  const response = await client.portingOrders.retrieveRequirements(id, body).asResponse();
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
