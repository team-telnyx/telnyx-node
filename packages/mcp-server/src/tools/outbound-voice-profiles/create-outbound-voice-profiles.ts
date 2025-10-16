// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'outbound_voice_profiles',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/outbound_voice_profiles',
  operationId: 'CreateVoiceProfile',
};

export const tool: Tool = {
  name: 'create_outbound_voice_profiles',
  description: 'Create an outbound voice profile.',
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        description: 'A user-supplied name to help with organization.',
      },
      billing_group_id: {
        type: 'string',
        description:
          'The ID of the billing group associated with the outbound proflile. Defaults to null (for no group assigned).',
      },
      call_recording: {
        $ref: '#/$defs/outbound_call_recording',
      },
      calling_window: {
        type: 'object',
        description:
          '(BETA) Specifies the time window and call limits for calls made using this outbound voice profile. Note that all times are UTC in 24-hour clock time.',
        properties: {
          calls_per_cld: {
            type: 'integer',
            description:
              '(BETA) The maximum number of calls that can be initiated to a single called party (CLD) within the calling window. A null value means no limit.',
          },
          end_time: {
            type: 'string',
            description:
              '(BETA) The UTC time of day (in HH:MM format, 24-hour clock) when calls are no longer allowed to start.',
            format: 'time',
          },
          start_time: {
            type: 'string',
            description:
              '(BETA) The UTC time of day (in HH:MM format, 24-hour clock) when calls are allowed to start.',
            format: 'time',
          },
        },
      },
      concurrent_call_limit: {
        type: 'integer',
        description: 'Must be no more than your global concurrent call limit. Null means no limit.',
      },
      daily_spend_limit: {
        type: 'string',
        description:
          'The maximum amount of usage charges, in USD, you want Telnyx to allow on this outbound voice profile in a day before disallowing new calls.',
      },
      daily_spend_limit_enabled: {
        type: 'boolean',
        description: 'Specifies whether to enforce the daily_spend_limit on this outbound voice profile.',
      },
      enabled: {
        type: 'boolean',
        description:
          'Specifies whether the outbound voice profile can be used. Disabled profiles will result in outbound calls being blocked for the associated Connections.',
      },
      max_destination_rate: {
        type: 'number',
        description:
          'Maximum rate (price per minute) for a Destination to be allowed when making outbound calls.',
      },
      service_plan: {
        $ref: '#/$defs/service_plan',
      },
      tags: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      traffic_type: {
        $ref: '#/$defs/traffic_type',
      },
      usage_payment_method: {
        $ref: '#/$defs/usage_payment_method',
      },
      whitelisted_destinations: {
        type: 'array',
        description:
          'The list of destinations you want to be able to call using this outbound voice profile formatted in alpha2.',
        items: {
          type: 'string',
        },
      },
    },
    required: ['name'],
    $defs: {
      outbound_call_recording: {
        type: 'object',
        properties: {
          call_recording_caller_phone_numbers: {
            type: 'array',
            description:
              "When call_recording_type is 'by_caller_phone_number', only outbound calls using one of these numbers will be recorded. Numbers must be specified in E164 format.",
            items: {
              type: 'string',
            },
          },
          call_recording_channels: {
            type: 'string',
            description:
              "When using 'dual' channels, the final audio file will be a stereo recording with the first leg on channel A, and the rest on channel B.",
            enum: ['single', 'dual'],
          },
          call_recording_format: {
            type: 'string',
            description: 'The audio file format for calls being recorded.',
            enum: ['wav', 'mp3'],
          },
          call_recording_type: {
            type: 'string',
            description: 'Specifies which calls are recorded.',
            enum: ['all', 'none', 'by_caller_phone_number'],
          },
        },
      },
      service_plan: {
        type: 'string',
        description: 'Indicates the coverage of the termination regions.',
        enum: ['global'],
      },
      traffic_type: {
        type: 'string',
        description: 'Specifies the type of traffic allowed in this profile.',
        enum: ['conversational'],
      },
      usage_payment_method: {
        type: 'string',
        description: 'Setting for how costs for outbound profile are calculated.',
        enum: ['rate-deck'],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.outboundVoiceProfiles.create(body));
};

export default { metadata, tool, handler };
