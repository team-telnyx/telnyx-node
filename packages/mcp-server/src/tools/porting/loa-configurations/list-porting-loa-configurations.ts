// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'porting.loa_configurations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/porting/loa_configurations',
  operationId: 'ListLoaConfigurations',
};

export const tool: Tool = {
  name: 'list_porting_loa_configurations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList the LOA configurations.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/porting_loa_configuration'\n      }\n    },\n    meta: {\n      $ref: '#/$defs/pagination_meta'\n    }\n  },\n  $defs: {\n    porting_loa_configuration: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Uniquely identifies the LOA configuration.'\n        },\n        address: {\n          type: 'object',\n          description: 'The address of the company.',\n          properties: {\n            city: {\n              type: 'string',\n              description: 'The locality of the company'\n            },\n            country_code: {\n              type: 'string',\n              description: 'The country code of the company'\n            },\n            extended_address: {\n              type: 'string',\n              description: 'The extended address of the company'\n            },\n            state: {\n              type: 'string',\n              description: 'The administrative area of the company'\n            },\n            street_address: {\n              type: 'string',\n              description: 'The street address of the company'\n            },\n            zip_code: {\n              type: 'string',\n              description: 'The postal code of the company'\n            }\n          }\n        },\n        company_name: {\n          type: 'string',\n          description: 'The name of the company'\n        },\n        contact: {\n          type: 'object',\n          description: 'The contact information of the company.',\n          properties: {\n            email: {\n              type: 'string',\n              description: 'The email address of the contact'\n            },\n            phone_number: {\n              type: 'string',\n              description: 'The phone number of the contact'\n            }\n          }\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the resource was created.',\n          format: 'date-time'\n        },\n        logo: {\n          type: 'object',\n          description: 'The logo to be used in the LOA.',\n          properties: {\n            content_type: {\n              type: 'string',\n              description: 'The content type of the logo.',\n              enum: [                'image/png'\n              ]\n            },\n            document_id: {\n              type: 'string',\n              description: 'Identifies the document that contains the logo.'\n            }\n          }\n        },\n        name: {\n          type: 'string',\n          description: 'The name of the LOA configuration'\n        },\n        organization_id: {\n          type: 'string',\n          description: 'The organization that owns the LOA configuration'\n        },\n        record_type: {\n          type: 'string',\n          description: 'Identifies the type of the resource.'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the resource was updated.',\n          format: 'date-time'\n        }\n      }\n    },\n    pagination_meta: {\n      type: 'object',\n      properties: {\n        page_number: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        total_pages: {\n          type: 'integer'\n        },\n        total_results: {\n          type: 'integer'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
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
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.porting.loaConfigurations.list(body)));
};

export default { metadata, tool, handler };
