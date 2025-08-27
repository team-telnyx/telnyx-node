// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'outbound_voice_profiles',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/outbound_voice_profiles/{id}',
  operationId: 'UpdateOutboundVoiceProfile',
};

export const tool: Tool = {
  name: 'update_outbound_voice_profiles',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdates an existing outbound voice profile.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'Outbound Voice Profile Response',\n  properties: {\n    data: {\n      $ref: '#/$defs/outbound_voice_profile'\n    }\n  },\n  $defs: {\n    outbound_voice_profile: {\n      type: 'object',\n      title: 'Outbound Voice Profile',\n      properties: {\n        name: {\n          type: 'string',\n          description: 'A user-supplied name to help with organization.'\n        },\n        id: {\n          type: 'string',\n          description: 'Identifies the resource.'\n        },\n        billing_group_id: {\n          type: 'string',\n          description: 'The ID of the billing group associated with the outbound proflile. Defaults to null (for no group assigned).'\n        },\n        call_recording: {\n          $ref: '#/$defs/outbound_call_recording'\n        },\n        concurrent_call_limit: {\n          type: 'integer',\n          description: 'Must be no more than your global concurrent call limit. Null means no limit.'\n        },\n        connections_count: {\n          type: 'integer',\n          description: 'Amount of connections associated with this outbound voice profile.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date-time indicating when the resource was created.'\n        },\n        daily_spend_limit: {\n          type: 'string',\n          description: 'The maximum amount of usage charges, in USD, you want Telnyx to allow on this outbound voice profile in a day before disallowing new calls.'\n        },\n        daily_spend_limit_enabled: {\n          type: 'boolean',\n          description: 'Specifies whether to enforce the daily_spend_limit on this outbound voice profile.'\n        },\n        enabled: {\n          type: 'boolean',\n          description: 'Specifies whether the outbound voice profile can be used. Disabled profiles will result in outbound calls being blocked for the associated Connections.'\n        },\n        max_destination_rate: {\n          type: 'number',\n          description: 'Maximum rate (price per minute) for a Destination to be allowed when making outbound calls.'\n        },\n        record_type: {\n          type: 'string',\n          description: 'Identifies the type of the resource.'\n        },\n        service_plan: {\n          $ref: '#/$defs/service_plan'\n        },\n        tags: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        },\n        traffic_type: {\n          $ref: '#/$defs/traffic_type'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date-time indicating when the resource was updated.'\n        },\n        usage_payment_method: {\n          $ref: '#/$defs/usage_payment_method'\n        },\n        whitelisted_destinations: {\n          type: 'array',\n          description: 'The list of destinations you want to be able to call using this outbound voice profile formatted in alpha2.',\n          items: {\n            type: 'string'\n          }\n        }\n      },\n      required: [        'name'\n      ]\n    },\n    outbound_call_recording: {\n      type: 'object',\n      properties: {\n        call_recording_caller_phone_numbers: {\n          type: 'array',\n          description: 'When call_recording_type is \\'by_caller_phone_number\\', only outbound calls using one of these numbers will be recorded. Numbers must be specified in E164 format.',\n          items: {\n            type: 'string'\n          }\n        },\n        call_recording_channels: {\n          type: 'string',\n          description: 'When using \\'dual\\' channels, the final audio file will be a stereo recording with the first leg on channel A, and the rest on channel B.',\n          enum: [            'single',\n            'dual'\n          ]\n        },\n        call_recording_format: {\n          type: 'string',\n          description: 'The audio file format for calls being recorded.',\n          enum: [            'wav',\n            'mp3'\n          ]\n        },\n        call_recording_type: {\n          type: 'string',\n          description: 'Specifies which calls are recorded.',\n          enum: [            'all',\n            'none',\n            'by_caller_phone_number'\n          ]\n        }\n      }\n    },\n    service_plan: {\n      type: 'string',\n      description: 'Indicates the coverage of the termination regions.',\n      enum: [        'global'\n      ]\n    },\n    traffic_type: {\n      type: 'string',\n      description: 'Specifies the type of traffic allowed in this profile.',\n      enum: [        'conversational'\n      ]\n    },\n    usage_payment_method: {\n      type: 'string',\n      description: 'Setting for how costs for outbound profile are calculated.',\n      enum: [        'rate-deck'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id', 'name'],
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
  const { id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.outboundVoiceProfiles.update(id, body)),
  );
};

export default { metadata, tool, handler };
