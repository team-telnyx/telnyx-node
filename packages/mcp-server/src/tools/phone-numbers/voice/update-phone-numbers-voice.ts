// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'phone_numbers.voice',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/phone_numbers/{id}/voice',
  operationId: 'UpdatePhoneNumberVoiceSettings',
};

export const tool: Tool = {
  name: 'update_phone_numbers_voice',
  description: 'Update a phone number with voice settings',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      call_forwarding: {
        $ref: '#/$defs/call_forwarding',
      },
      call_recording: {
        $ref: '#/$defs/call_recording',
      },
      caller_id_name_enabled: {
        type: 'boolean',
        description: 'Controls whether the caller ID name is enabled for this phone number.',
      },
      cnam_listing: {
        $ref: '#/$defs/cnam_listing',
      },
      inbound_call_screening: {
        type: 'string',
        description:
          'The inbound_call_screening setting is a phone number configuration option variable that allows users to configure their settings to block or flag fraudulent calls. It can be set to disabled, reject_calls, or flag_calls. This feature has an additional per-number monthly cost associated with it.',
        enum: ['disabled', 'reject_calls', 'flag_calls'],
      },
      media_features: {
        $ref: '#/$defs/media_features',
      },
      tech_prefix_enabled: {
        type: 'boolean',
        description: 'Controls whether a tech prefix is enabled for this phone number.',
      },
      translated_number: {
        type: 'string',
        description:
          'This field allows you to rewrite the destination number of an inbound call before the call is routed to you. The value of this field may be any alphanumeric value, and the value will replace the number originally dialed.',
      },
      usage_payment_method: {
        type: 'string',
        description: 'Controls whether a number is billed per minute or uses your concurrent channels.',
        enum: ['pay-per-minute', 'channel'],
      },
    },
    required: ['id'],
    $defs: {
      call_forwarding: {
        type: 'object',
        description: 'The call forwarding settings for a phone number.',
        properties: {
          call_forwarding_enabled: {
            type: 'boolean',
            description:
              'Indicates if call forwarding will be enabled for this number if forwards_to and forwarding_type are filled in. Defaults to true for backwards compatibility with APIV1 use of numbers endpoints.',
          },
          forwarding_type: {
            type: 'string',
            description: "Call forwarding type. 'forwards_to' must be set for this to have an effect.",
            enum: ['always', 'on-failure'],
          },
          forwards_to: {
            type: 'string',
            description:
              'The phone number to which inbound calls to this number are forwarded. Inbound calls will not be forwarded if this field is left blank. If set, must be a +E.164-formatted phone number.',
          },
        },
      },
      call_recording: {
        type: 'object',
        description: 'The call recording settings for a phone number.',
        properties: {
          inbound_call_recording_channels: {
            type: 'string',
            description:
              "When using 'dual' channels, final audio file will be stereo recorded with the first leg on channel A, and the rest on channel B.",
            enum: ['single', 'dual'],
          },
          inbound_call_recording_enabled: {
            type: 'boolean',
            description: 'When enabled, any inbound call to this number will be recorded.',
          },
          inbound_call_recording_format: {
            type: 'string',
            description: 'The audio file format for calls being recorded.',
            enum: ['wav', 'mp3'],
          },
        },
      },
      cnam_listing: {
        type: 'object',
        description: 'The CNAM listing settings for a phone number.',
        properties: {
          cnam_listing_details: {
            type: 'string',
            description:
              'The CNAM listing details for this number. Must be alphanumeric characters or spaces with a maximum length of 15. Requires cnam_listing_enabled to also be set to true.',
          },
          cnam_listing_enabled: {
            type: 'boolean',
            description:
              'Enables CNAM listings for this number. Requires cnam_listing_details to also be set.',
          },
        },
      },
      media_features: {
        type: 'object',
        description: 'The media features settings for a phone number.',
        properties: {
          accept_any_rtp_packets_enabled: {
            type: 'boolean',
            description:
              'When enabled, Telnyx will accept RTP packets from any customer-side IP address and port, not just those to which Telnyx is sending RTP.',
          },
          rtp_auto_adjust_enabled: {
            type: 'boolean',
            description:
              'When RTP Auto-Adjust is enabled, the destination RTP address port will be automatically changed to match the source of the incoming RTP packets.',
          },
          t38_fax_gateway_enabled: {
            type: 'boolean',
            description:
              'Controls whether Telnyx will accept a T.38 re-INVITE for this phone number. Note that Telnyx will not send a T.38 re-INVITE; this option only controls whether one will be accepted.',
          },
        },
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.phoneNumbers.voice.update(id, body));
};

export default { metadata, tool, handler };
