// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'mobile_phone_numbers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/mobile_phone_numbers/{id}',
  operationId: 'retrieveMobilePhoneNumber',
};

export const tool: Tool = {
  name: 'retrieve_mobile_phone_numbers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve a Mobile Phone Number\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/mobile_phone_number_retrieve_response',\n  $defs: {\n    mobile_phone_number_retrieve_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'Identifies the resource.'\n            },\n            call_forwarding: {\n              type: 'object',\n              properties: {\n                call_forwarding_enabled: {\n                  type: 'boolean'\n                },\n                forwarding_type: {\n                  type: 'string',\n                  enum: [                    'always',\n                    'on-failure'\n                  ]\n                },\n                forwards_to: {\n                  type: 'string'\n                }\n              }\n            },\n            call_recording: {\n              type: 'object',\n              properties: {\n                inbound_call_recording_channels: {\n                  type: 'string',\n                  enum: [                    'single',\n                    'dual'\n                  ]\n                },\n                inbound_call_recording_enabled: {\n                  type: 'boolean'\n                },\n                inbound_call_recording_format: {\n                  type: 'string',\n                  enum: [                    'wav',\n                    'mp3'\n                  ]\n                }\n              }\n            },\n            caller_id_name_enabled: {\n              type: 'boolean',\n              description: 'Indicates if caller ID name is enabled.'\n            },\n            cnam_listing: {\n              type: 'object',\n              properties: {\n                cnam_listing_details: {\n                  type: 'string'\n                },\n                cnam_listing_enabled: {\n                  type: 'boolean'\n                }\n              }\n            },\n            connection_id: {\n              type: 'string',\n              description: 'The ID of the connection associated with this number.'\n            },\n            connection_name: {\n              type: 'string',\n              description: 'The name of the connection.'\n            },\n            connection_type: {\n              type: 'string',\n              description: 'The type of the connection.'\n            },\n            country_iso_alpha2: {\n              type: 'string',\n              description: 'The ISO 3166-1 alpha-2 country code of the number.'\n            },\n            created_at: {\n              type: 'string',\n              description: 'ISO 8601 formatted date indicating when the resource was created.',\n              format: 'date-time'\n            },\n            customer_reference: {\n              type: 'string',\n              description: 'A customer reference string.'\n            },\n            inbound: {\n              type: 'object',\n              properties: {\n                interception_app_id: {\n                  type: 'string',\n                  description: 'The ID of the app that will intercept inbound calls.'\n                },\n                interception_app_name: {\n                  type: 'string',\n                  description: 'The name of the app that will intercept inbound calls.'\n                }\n              }\n            },\n            inbound_call_screening: {\n              type: 'string',\n              description: 'The inbound call screening setting.',\n              enum: [                'disabled',\n                'reject_calls',\n                'flag_calls'\n              ]\n            },\n            mobile_voice_enabled: {\n              type: 'boolean',\n              description: 'Indicates if mobile voice is enabled.'\n            },\n            noise_suppression: {\n              type: 'string',\n              description: 'The noise suppression setting.',\n              enum: [                'inbound',\n                'outbound',\n                'both',\n                'disabled'\n              ]\n            },\n            outbound: {\n              type: 'object',\n              properties: {\n                interception_app_id: {\n                  type: 'string',\n                  description: 'The ID of the app that will intercept outbound calls.'\n                },\n                interception_app_name: {\n                  type: 'string',\n                  description: 'The name of the app that will intercept outbound calls.'\n                }\n              }\n            },\n            phone_number: {\n              type: 'string',\n              description: 'The +E.164-formatted phone number.'\n            },\n            record_type: {\n              type: 'string',\n              description: 'Identifies the type of the resource.'\n            },\n            sim_card_id: {\n              type: 'string',\n              description: 'The ID of the SIM card associated with this number.'\n            },\n            status: {\n              type: 'string',\n              description: 'The status of the phone number.'\n            },\n            tags: {\n              type: 'array',\n              description: 'A list of tags associated with the number.',\n              items: {\n                type: 'string'\n              }\n            },\n            updated_at: {\n              type: 'string',\n              description: 'ISO 8601 formatted date indicating when the resource was last updated.',\n              format: 'date-time'\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
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
    return asTextContentResult(await maybeFilter(jq_filter, await client.mobilePhoneNumbers.retrieve(id)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
