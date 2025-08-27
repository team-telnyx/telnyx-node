// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'calls.actions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/calls/{call_control_id}/actions/transfer',
  operationId: 'TransferCall',
};

export const tool: Tool = {
  name: 'transfer_calls_actions',
  description:
    'Transfer a call to a new destination. If the transfer is unsuccessful, a `call.hangup` webhook for the other call (Leg B) will be sent indicating that the transfer could not be completed. The original call will remain active and may be issued additional commands, potentially transfering the call to an alternate destination.\n\n**Expected Webhooks (see [callback schema](https://developers.telnyx.com/api/call-control/transfer-call#callbacks) below):**\n\n- `call.initiated`\n- `call.bridged` to Leg B\n- `call.answered` or `call.hangup`\n- `call.machine.detection.ended` if `answering_machine_detection` was requested\n- `call.machine.greeting.ended` if `answering_machine_detection` was requested to detect the end of machine greeting\n- `call.machine.premium.detection.ended` if `answering_machine_detection=premium` was requested\n- `call.machine.premium.greeting.ended` if `answering_machine_detection=premium` was requested and a beep was detected\n',
  inputSchema: {
    type: 'object',
    properties: {
      call_control_id: {
        type: 'string',
      },
      to: {
        type: 'string',
        description: 'The DID or SIP URI to dial out to.',
      },
      answering_machine_detection: {
        type: 'string',
        description:
          "Enables Answering Machine Detection. When a call is answered, Telnyx runs real-time detection to determine if it was picked up by a human or a machine and sends an `call.machine.detection.ended` webhook with the analysis result. If 'greeting_end' or 'detect_words' is used and a 'machine' is detected, you will receive another 'call.machine.greeting.ended' webhook when the answering machine greeting ends with a beep or silence. If `detect_beep` is used, you will only receive 'call.machine.greeting.ended' if a beep is detected.",
        enum: ['premium', 'detect', 'detect_beep', 'detect_words', 'greeting_end', 'disabled'],
      },
      answering_machine_detection_config: {
        type: 'object',
        description: "Optional configuration parameters to modify 'answering_machine_detection' performance.",
        properties: {
          after_greeting_silence_millis: {
            type: 'integer',
            description:
              'Silence duration threshold after a greeting message or voice for it be considered human.',
          },
          between_words_silence_millis: {
            type: 'integer',
            description: 'Maximum threshold for silence between words.',
          },
          greeting_duration_millis: {
            type: 'integer',
            description:
              'Maximum threshold of a human greeting. If greeting longer than this value, considered machine.',
          },
          greeting_silence_duration_millis: {
            type: 'integer',
            description:
              'If machine already detected, maximum threshold for silence between words. If exceeded, the greeting is considered ended.',
          },
          greeting_total_analysis_time_millis: {
            type: 'integer',
            description:
              'If machine already detected, maximum timeout threshold to determine the end of the machine greeting.',
          },
          initial_silence_millis: {
            type: 'integer',
            description: 'If initial silence duration is greater than this value, consider it a machine.',
          },
          maximum_number_of_words: {
            type: 'integer',
            description: 'If number of detected words is greater than this value, consder it a machine.',
          },
          maximum_word_length_millis: {
            type: 'integer',
            description: 'If a single word lasts longer than this threshold, consider it a machine.',
          },
          silence_threshold: {
            type: 'integer',
            description: 'Minimum noise threshold for any analysis.',
          },
          total_analysis_time_millis: {
            type: 'integer',
            description: 'Maximum timeout threshold for overall detection.',
          },
        },
      },
      audio_url: {
        type: 'string',
        description:
          'The URL of a file to be played back when the transfer destination answers before bridging the call. The URL can point to either a WAV or MP3 file. media_name and audio_url cannot be used together in one request.',
      },
      client_state: {
        type: 'string',
        description:
          'Use this field to add state to every subsequent webhook. It must be a valid Base-64 encoded string.',
      },
      command_id: {
        type: 'string',
        description:
          'Use this field to avoid duplicate commands. Telnyx will ignore any command with the same `command_id` for the same `call_control_id`.',
      },
      custom_headers: {
        type: 'array',
        description: 'Custom headers to be added to the SIP INVITE.',
        items: {
          $ref: '#/$defs/custom_sip_header',
        },
      },
      early_media: {
        type: 'boolean',
        description: 'If set to false, early media will not be passed to the originating leg.',
      },
      from: {
        type: 'string',
        description:
          'The `from` number to be used as the caller id presented to the destination (`to` number). The number should be in +E164 format. This attribute will default to the `to` number of the original call if omitted.',
      },
      from_display_name: {
        type: 'string',
        description:
          'The `from_display_name` string to be used as the caller id name (SIP From Display Name) presented to the destination (`to` number). The string should have a maximum of 128 characters, containing only letters, numbers, spaces, and -_~!.+ special characters. If ommited, the display name will be the same as the number in the `from` field.',
      },
      media_encryption: {
        type: 'string',
        description: 'Defines whether media should be encrypted on the new call leg.',
        enum: ['disabled', 'SRTP', 'DTLS'],
      },
      media_name: {
        type: 'string',
        description:
          'The media_name of a file to be played back when the transfer destination answers before bridging the call. The media_name must point to a file previously uploaded to api.telnyx.com/v2/media by the same user/organization. The file must either be a WAV or MP3 file.',
      },
      mute_dtmf: {
        type: 'string',
        description:
          'When enabled, DTMF tones are not passed to the call participant. The webhooks containing the DTMF information will be sent.',
        enum: ['none', 'both', 'self', 'opposite'],
      },
      park_after_unbridge: {
        type: 'string',
        description:
          'Specifies behavior after the bridge ends (i.e. the opposite leg either hangs up or is transferred). If supplied with the value `self`, the current leg will be parked after unbridge. If not set, the default behavior is to hang up the leg.',
      },
      sip_auth_password: {
        type: 'string',
        description: 'SIP Authentication password used for SIP challenges.',
      },
      sip_auth_username: {
        type: 'string',
        description: 'SIP Authentication username used for SIP challenges.',
      },
      sip_headers: {
        type: 'array',
        description:
          'SIP headers to be added to the SIP INVITE. Currently only User-to-User header is supported.',
        items: {
          $ref: '#/$defs/sip_header',
        },
      },
      sip_transport_protocol: {
        type: 'string',
        description: 'Defines SIP transport protocol to be used on the call.',
        enum: ['UDP', 'TCP', 'TLS'],
      },
      sound_modifications: {
        $ref: '#/$defs/sound_modifications',
      },
      target_leg_client_state: {
        type: 'string',
        description:
          'Use this field to add state to every subsequent webhook for the new leg. It must be a valid Base-64 encoded string.',
      },
      time_limit_secs: {
        type: 'integer',
        description:
          'Sets the maximum duration of a Call Control Leg in seconds. If the time limit is reached, the call will hangup and a `call.hangup` webhook with a `hangup_cause` of `time_limit` will be sent. For example, by setting a time limit of 120 seconds, a Call Leg will be automatically terminated two minutes after being answered. The default time limit is 14400 seconds or 4 hours and this is also the maximum allowed call length.',
      },
      timeout_secs: {
        type: 'integer',
        description:
          'The number of seconds that Telnyx will wait for the call to be answered by the destination to which it is being transferred. If the timeout is reached before an answer is received, the call will hangup and a `call.hangup` webhook with a `hangup_cause` of `timeout` will be sent. Minimum value is 5 seconds. Maximum value is 600 seconds.',
      },
      webhook_url: {
        type: 'string',
        description:
          'Use this field to override the URL for which Telnyx will send subsequent webhooks to for this call.',
      },
      webhook_url_method: {
        type: 'string',
        description: 'HTTP request type used for `webhook_url`.',
        enum: ['POST', 'GET'],
      },
    },
    required: ['call_control_id', 'to'],
    $defs: {
      custom_sip_header: {
        type: 'object',
        title: 'Custom SIP Header',
        properties: {
          name: {
            type: 'string',
            description: 'The name of the header to add.',
          },
          value: {
            type: 'string',
            description: 'The value of the header.',
          },
        },
        required: ['name', 'value'],
      },
      sip_header: {
        type: 'object',
        title: 'SIP Header',
        properties: {
          name: {
            type: 'string',
            description: 'The name of the header to add.',
            enum: ['User-to-User'],
          },
          value: {
            type: 'string',
            description: 'The value of the header.',
          },
        },
        required: ['name', 'value'],
      },
      sound_modifications: {
        type: 'object',
        title: 'Sound modifications',
        description: 'Use this field to modify sound effects, for example adjust the pitch.',
        properties: {
          octaves: {
            type: 'number',
            description: 'Adjust the pitch in octaves, values should be between -1 and 1, default 0',
          },
          pitch: {
            type: 'number',
            description: 'Set the pitch directly, value should be > 0, default 1 (lower = lower tone)',
          },
          semitone: {
            type: 'number',
            description: 'Adjust the pitch in semitones, values should be between -14 and 14, default 0',
          },
          track: {
            type: 'string',
            description:
              'The track to which the sound modifications will be applied. Accepted values are `inbound` or `outbound`',
          },
        },
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { call_control_id, ...body } = args as any;
  return asTextContentResult(await client.calls.actions.transfer(call_control_id, body));
};

export default { metadata, tool, handler };
