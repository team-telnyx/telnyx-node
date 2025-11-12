// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'porting.loa_configurations',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/porting/loa_configurations/{id}',
  operationId: 'UpdateLoaConfiguration',
};

export const tool: Tool = {
  name: 'update_porting_loa_configurations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate a specific LOA configuration.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/loa_configuration_update_response',\n  $defs: {\n    loa_configuration_update_response: {\n      type: 'object',\n      properties: {\n        data: {\n          $ref: '#/$defs/porting_loa_configuration'\n        }\n      }\n    },\n    porting_loa_configuration: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Uniquely identifies the LOA configuration.'\n        },\n        address: {\n          type: 'object',\n          description: 'The address of the company.',\n          properties: {\n            city: {\n              type: 'string',\n              description: 'The locality of the company'\n            },\n            country_code: {\n              type: 'string',\n              description: 'The country code of the company'\n            },\n            extended_address: {\n              type: 'string',\n              description: 'The extended address of the company'\n            },\n            state: {\n              type: 'string',\n              description: 'The administrative area of the company'\n            },\n            street_address: {\n              type: 'string',\n              description: 'The street address of the company'\n            },\n            zip_code: {\n              type: 'string',\n              description: 'The postal code of the company'\n            }\n          }\n        },\n        company_name: {\n          type: 'string',\n          description: 'The name of the company'\n        },\n        contact: {\n          type: 'object',\n          description: 'The contact information of the company.',\n          properties: {\n            email: {\n              type: 'string',\n              description: 'The email address of the contact'\n            },\n            phone_number: {\n              type: 'string',\n              description: 'The phone number of the contact'\n            }\n          }\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the resource was created.',\n          format: 'date-time'\n        },\n        logo: {\n          type: 'object',\n          description: 'The logo to be used in the LOA.',\n          properties: {\n            content_type: {\n              type: 'string',\n              description: 'The content type of the logo.',\n              enum: [                'image/png'\n              ]\n            },\n            document_id: {\n              type: 'string',\n              description: 'Identifies the document that contains the logo.'\n            }\n          }\n        },\n        name: {\n          type: 'string',\n          description: 'The name of the LOA configuration'\n        },\n        organization_id: {\n          type: 'string',\n          description: 'The organization that owns the LOA configuration'\n        },\n        record_type: {\n          type: 'string',\n          description: 'Identifies the type of the resource.'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the resource was updated.',\n          format: 'date-time'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      address: {
        type: 'object',
        description: 'The address of the company.',
        properties: {
          city: {
            type: 'string',
            description: 'The locality of the company',
          },
          country_code: {
            type: 'string',
            description: 'The country code of the company',
          },
          state: {
            type: 'string',
            description: 'The administrative area of the company',
          },
          street_address: {
            type: 'string',
            description: 'The street address of the company',
          },
          zip_code: {
            type: 'string',
            description: 'The postal code of the company',
          },
          extended_address: {
            type: 'string',
            description: 'The extended address of the company',
          },
        },
        required: ['city', 'country_code', 'state', 'street_address', 'zip_code'],
      },
      company_name: {
        type: 'string',
        description: 'The name of the company',
      },
      contact: {
        type: 'object',
        description: 'The contact information of the company.',
        properties: {
          email: {
            type: 'string',
            description: 'The email address of the contact',
          },
          phone_number: {
            type: 'string',
            description: 'The phone number of the contact',
          },
        },
        required: ['email', 'phone_number'],
      },
      logo: {
        type: 'object',
        description: 'The logo of the LOA configuration',
        properties: {
          document_id: {
            type: 'string',
            description: 'The document identification',
          },
        },
        required: ['document_id'],
      },
      name: {
        type: 'string',
        description: 'The name of the LOA configuration',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id', 'address', 'company_name', 'contact', 'logo', 'name'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.porting.loaConfigurations.update(id, body)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
