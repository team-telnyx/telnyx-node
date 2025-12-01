// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'phone_numbers.jobs',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/phone_numbers/jobs/update_phone_numbers',
  operationId: 'CreateUpdatePhoneNumbersJob',
};

export const tool: Tool = {
  name: 'update_batch_phone_numbers_jobs',
  description:
    'Creates a new background job to update a batch of numbers. At most one thousand numbers can be updated per API call. At least one of the updateable fields must be submitted. IMPORTANT: You must either specify filters (using the filter parameters) or specific phone numbers (using the phone_numbers parameter in the request body). If you specify filters, ALL phone numbers that match the given filters (up to 1000 at a time) will be updated. If you want to update only specific numbers, you must use the phone_numbers parameter in the request body. When using the phone_numbers parameter, ensure you follow the correct format as shown in the example (either phone number IDs or phone numbers in E164 format).',
  inputSchema: {
    type: 'object',
    properties: {
      phone_numbers: {
        type: 'array',
        description:
          "Array of phone number ids and/or phone numbers in E164 format to update. This parameter is required if no filter parameters are provided. If you want to update specific numbers rather than all numbers matching a filter, you must use this parameter. Each item must be either a valid phone number ID or a phone number in E164 format (e.g., '+13127367254').",
        items: {
          type: 'string',
        },
      },
      filter: {
        type: 'object',
        description:
          'Consolidated filter parameter (deepObject style). Originally: filter[has_bundle], filter[tag], filter[connection_id], filter[phone_number], filter[status], filter[voice.connection_name], filter[voice.usage_payment_method], filter[billing_group_id], filter[emergency_address_id], filter[customer_reference]',
        properties: {
          billing_group_id: {
            type: 'string',
            description:
              "Filter by the billing_group_id associated with phone numbers. To filter to only phone numbers that have no billing group associated them, set the value of this filter to the string 'null'.",
          },
          connection_id: {
            type: 'string',
            description: 'Filter by connection_id.',
          },
          customer_reference: {
            type: 'string',
            description: 'Filter numbers via the customer_reference set.',
          },
          emergency_address_id: {
            type: 'string',
            description:
              "Filter by the emergency_address_id associated with phone numbers. To filter only phone numbers that have no emergency address associated with them, set the value of this filter to the string 'null'.",
          },
          has_bundle: {
            type: 'string',
            description: 'Filter by phone number that have bundles.',
          },
          phone_number: {
            type: 'string',
            description:
              'Filter by phone number. Requires at least three digits.\n             Non-numerical characters will result in no values being returned.',
          },
          status: {
            type: 'string',
            description: 'Filter by phone number status.',
            enum: [
              'purchase-pending',
              'purchase-failed',
              'port-pending',
              'active',
              'deleted',
              'port-failed',
              'emergency-only',
              'ported-out',
              'port-out-pending',
            ],
          },
          tag: {
            type: 'string',
            description: 'Filter by phone number tags.',
          },
          'voice.connection_name': {
            type: 'object',
            description: 'Filter by voice connection name pattern matching.',
            properties: {
              contains: {
                type: 'string',
                description: 'Filter contains connection name. Requires at least three characters.',
              },
              ends_with: {
                type: 'string',
                description: 'Filter ends with connection name. Requires at least three characters.',
              },
              eq: {
                type: 'string',
                description: 'Filter by connection name.',
              },
              starts_with: {
                type: 'string',
                description: 'Filter starts with connection name. Requires at least three characters.',
              },
            },
          },
          'voice.usage_payment_method': {
            type: 'string',
            description: 'Filter by usage_payment_method.',
            enum: ['pay-per-minute', 'channel'],
          },
        },
      },
      billing_group_id: {
        type: 'string',
        description: 'Identifies the billing group associated with the phone number.',
      },
      connection_id: {
        type: 'string',
        description: 'Identifies the connection associated with the phone number.',
      },
      customer_reference: {
        type: 'string',
        description: 'A customer reference string for customer look ups.',
      },
      deletion_lock_enabled: {
        type: 'boolean',
        description:
          'Indicates whether to enable or disable the deletion lock on each phone number. When enabled, this prevents the phone number from being deleted via the API or Telnyx portal.',
      },
      external_pin: {
        type: 'string',
        description:
          'If someone attempts to port your phone number away from Telnyx and your phone number has an external PIN set, we will attempt to verify that you provided the correct external PIN to the winning carrier. Note that not all carriers cooperate with this security mechanism.',
      },
      hd_voice_enabled: {
        type: 'boolean',
        description:
          'Indicates whether to enable or disable HD Voice on each phone number. HD Voice is a paid feature and may not be available for all phone numbers, more details about it can be found in the Telnyx support documentation.',
      },
      tags: {
        type: 'array',
        description: 'A list of user-assigned tags to help organize phone numbers.',
        items: {
          type: 'string',
        },
      },
      voice: {
        $ref: '#/$defs/update_voice_settings',
      },
    },
    required: ['phone_numbers'],
    $defs: {
      update_voice_settings: {
        type: 'object',
        properties: {
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
      },
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
  const body = args as any;
  try {
    return asTextContentResult(await client.phoneNumbers.jobs.updateBatch(body));
  } catch (error) {
    if (error instanceof Telnyx.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
