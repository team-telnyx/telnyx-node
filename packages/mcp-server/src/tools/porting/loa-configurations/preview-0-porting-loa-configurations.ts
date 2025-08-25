// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'porting.loa_configurations',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/porting/loa_configuration/preview',
  operationId: 'PreviewLoaConfigurationParams',
};

export const tool: Tool = {
  name: 'preview_0_porting_loa_configurations',
  description: 'Preview the LOA template that would be generated without need to create LOA configuration.',
  inputSchema: {
    type: 'object',
    properties: {
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
    },
    required: ['address', 'company_name', 'contact', 'logo', 'name'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asBinaryContentResult(await client.porting.loaConfigurations.preview0(body));
};

export default { metadata, tool, handler };
