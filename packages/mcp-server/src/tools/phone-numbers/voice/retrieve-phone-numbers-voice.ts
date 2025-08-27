// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'phone_numbers.voice',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/phone_numbers/{id}/voice',
  operationId: 'GetPhoneNumberVoiceSettings',
};

export const tool: Tool = {
  name: 'retrieve_phone_numbers_voice',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve a phone number with voice settings\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'Retrieve Phone Number Voice Response',\n  properties: {\n    data: {\n      $ref: '#/$defs/phone_number_with_voice_settings'\n    }\n  },\n  $defs: {\n    phone_number_with_voice_settings: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifies the type of resource.'\n        },\n        call_forwarding: {\n          $ref: '#/$defs/call_forwarding'\n        },\n        call_recording: {\n          $ref: '#/$defs/call_recording'\n        },\n        cnam_listing: {\n          $ref: '#/$defs/cnam_listing'\n        },\n        connection_id: {\n          type: 'string',\n          description: 'Identifies the connection associated with this phone number.'\n        },\n        customer_reference: {\n          type: 'string',\n          description: 'A customer reference string for customer look ups.'\n        },\n        emergency: {\n          type: 'object',\n          description: 'The emergency services settings for a phone number.',\n          properties: {\n            emergency_address_id: {\n              type: 'string',\n              description: 'Identifies the address to be used with emergency services.'\n            },\n            emergency_enabled: {\n              type: 'boolean',\n              description: 'Allows you to enable or disable emergency services on the phone number. In order to enable emergency services, you must also set an emergency_address_id.'\n            },\n            emergency_status: {\n              type: 'string',\n              description: 'Represents the state of the number regarding emergency activation.',\n              enum: [                'disabled',\n                'active',\n                'provisioning',\n                'deprovisioning',\n                'provisioning-failed'\n              ]\n            }\n          }\n        },\n        inbound_call_screening: {\n          type: 'string',\n          description: 'The inbound_call_screening setting is a phone number configuration option variable that allows users to configure their settings to block or flag fraudulent calls. It can be set to disabled, reject_calls, or flag_calls. This feature has an additional per-number monthly cost associated with it.',\n          enum: [            'disabled',\n            'reject_calls',\n            'flag_calls'\n          ]\n        },\n        media_features: {\n          $ref: '#/$defs/media_features'\n        },\n        phone_number: {\n          type: 'string',\n          description: 'The phone number in +E164 format.'\n        },\n        record_type: {\n          type: 'string',\n          description: 'Identifies the type of the resource.'\n        },\n        tech_prefix_enabled: {\n          type: 'boolean',\n          description: 'Controls whether a tech prefix is enabled for this phone number.'\n        },\n        translated_number: {\n          type: 'string',\n          description: 'This field allows you to rewrite the destination number of an inbound call before the call is routed to you. The value of this field may be any alphanumeric value, and the value will replace the number originally dialed.'\n        },\n        usage_payment_method: {\n          type: 'string',\n          description: 'Controls whether a number is billed per minute or uses your concurrent channels.',\n          enum: [            'pay-per-minute',\n            'channel'\n          ]\n        }\n      }\n    },\n    call_forwarding: {\n      type: 'object',\n      description: 'The call forwarding settings for a phone number.',\n      properties: {\n        call_forwarding_enabled: {\n          type: 'boolean',\n          description: 'Indicates if call forwarding will be enabled for this number if forwards_to and forwarding_type are filled in. Defaults to true for backwards compatibility with APIV1 use of numbers endpoints.'\n        },\n        forwarding_type: {\n          type: 'string',\n          description: 'Call forwarding type. \\'forwards_to\\' must be set for this to have an effect.',\n          enum: [            'always',\n            'on-failure'\n          ]\n        },\n        forwards_to: {\n          type: 'string',\n          description: 'The phone number to which inbound calls to this number are forwarded. Inbound calls will not be forwarded if this field is left blank. If set, must be a +E.164-formatted phone number.'\n        }\n      }\n    },\n    call_recording: {\n      type: 'object',\n      description: 'The call recording settings for a phone number.',\n      properties: {\n        inbound_call_recording_channels: {\n          type: 'string',\n          description: 'When using \\'dual\\' channels, final audio file will be stereo recorded with the first leg on channel A, and the rest on channel B.',\n          enum: [            'single',\n            'dual'\n          ]\n        },\n        inbound_call_recording_enabled: {\n          type: 'boolean',\n          description: 'When enabled, any inbound call to this number will be recorded.'\n        },\n        inbound_call_recording_format: {\n          type: 'string',\n          description: 'The audio file format for calls being recorded.',\n          enum: [            'wav',\n            'mp3'\n          ]\n        }\n      }\n    },\n    cnam_listing: {\n      type: 'object',\n      description: 'The CNAM listing settings for a phone number.',\n      properties: {\n        cnam_listing_details: {\n          type: 'string',\n          description: 'The CNAM listing details for this number. Must be alphanumeric characters or spaces with a maximum length of 15. Requires cnam_listing_enabled to also be set to true.'\n        },\n        cnam_listing_enabled: {\n          type: 'boolean',\n          description: 'Enables CNAM listings for this number. Requires cnam_listing_details to also be set.'\n        }\n      }\n    },\n    media_features: {\n      type: 'object',\n      description: 'The media features settings for a phone number.',\n      properties: {\n        accept_any_rtp_packets_enabled: {\n          type: 'boolean',\n          description: 'When enabled, Telnyx will accept RTP packets from any customer-side IP address and port, not just those to which Telnyx is sending RTP.'\n        },\n        rtp_auto_adjust_enabled: {\n          type: 'boolean',\n          description: 'When RTP Auto-Adjust is enabled, the destination RTP address port will be automatically changed to match the source of the incoming RTP packets.'\n        },\n        t38_fax_gateway_enabled: {\n          type: 'boolean',\n          description: 'Controls whether Telnyx will accept a T.38 re-INVITE for this phone number. Note that Telnyx will not send a T.38 re-INVITE; this option only controls whether one will be accepted.'\n        }\n      }\n    }\n  }\n}\n```",
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.phoneNumbers.voice.retrieve(id)));
};

export default { metadata, tool, handler };
