// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'texml.accounts.conferences.participants',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/texml/Accounts/{account_sid}/Conferences/{conference_sid}/Participants',
  operationId: 'DialTexmlConferenceParticipant',
};

export const tool: Tool = {
  name: 'participants_conferences_accounts_texml_participants',
  description: 'Dials a new conference participant',
  inputSchema: {
    type: 'object',
    properties: {
      account_sid: {
        type: 'string',
      },
      conference_sid: {
        type: 'string',
      },
      AmdStatusCallback: {
        type: 'string',
        description: 'The URL the result of answering machine detection will be sent to.',
      },
      AmdStatusCallbackMethod: {
        type: 'string',
        description: 'HTTP request type used for `AmdStatusCallback`. Defaults to `POST`.',
        enum: ['GET', 'POST'],
      },
      Beep: {
        type: 'string',
        description:
          'Whether to play a notification beep to the conference when the participant enters and exits.',
        enum: ['true', 'false', 'onEnter', 'onExit'],
      },
      CallerId: {
        type: 'string',
        description:
          'To be used as the caller id name (SIP From Display Name) presented to the destination (`To` number). The string should have a maximum of 128 characters, containing only letters, numbers, spaces, and `-_~!.+` special characters. If ommited, the display name will be the same as the number in the `From` field.',
      },
      CallSidToCoach: {
        type: 'string',
        description:
          'The SID of the participant who is being coached. The participant being coached is the only participant who can hear the participant who is coaching.',
      },
      CancelPlaybackOnDetectMessageEnd: {
        type: 'boolean',
        description: 'Whether to cancel ongoing playback on `greeting ended` detection. Defaults to `true`.',
      },
      CancelPlaybackOnMachineDetection: {
        type: 'boolean',
        description: 'Whether to cancel ongoing playback on `machine` detection. Defaults to `true`.',
      },
      Coaching: {
        type: 'boolean',
        description:
          'Whether the participant is coaching another call. When `true`, `CallSidToCoach` has to be given.',
      },
      ConferenceRecord: {
        type: 'string',
        description:
          'Whether to record the conference the participant is joining. Defualts to `do-not-record`. The boolean values `true` and `false` are synonymous with `record-from-start` and `do-not-record` respectively.',
        enum: ['true', 'false', 'record-from-start', 'do-not-record'],
      },
      ConferenceRecordingStatusCallback: {
        type: 'string',
        description: 'The URL the conference recording callbacks will be sent to.',
      },
      ConferenceRecordingStatusCallbackEvent: {
        type: 'string',
        description:
          "The changes to the conference recording's state that should generate a call to `RecoridngStatusCallback`. Can be: `in-progress`, `completed` and `absent`. Separate multiple values with a space. Defaults to `completed`. `failed` and `absent` are synonymous.",
      },
      ConferenceRecordingStatusCallbackMethod: {
        type: 'string',
        description: 'HTTP request type used for `ConferenceRecordingStatusCallback`. Defaults to `POST`.',
        enum: ['GET', 'POST'],
      },
      ConferenceRecordingTimeout: {
        type: 'integer',
        description:
          'The number of seconds that Telnyx will wait for the recording to be stopped if silence is detected. The timer only starts when the speech is detected. Please note that the transcription is used to detect silence and the related charge will be applied. The minimum value is 0. The default value is 0 (infinite)',
      },
      ConferenceStatusCallback: {
        type: 'string',
        description: 'The URL the conference callbacks will be sent to.',
      },
      ConferenceStatusCallbackEvent: {
        type: 'string',
        description:
          "The changes to the conference's state that should generate a call to `ConferenceStatusCallback`. Can be: `start`, `end`, `join` and `leave`. Separate multiple values with a space. By default no callbacks are sent.",
      },
      ConferenceStatusCallbackMethod: {
        type: 'string',
        description: 'HTTP request type used for `ConferenceStatusCallback`. Defaults to `POST`.',
        enum: ['GET', 'POST'],
      },
      ConferenceTrim: {
        type: 'string',
        description:
          'Whether to trim any leading and trailing silence from the conference recording. Defaults to `trim-silence`.',
        enum: ['trim-silence', 'do-not-trim'],
      },
      CustomHeaders: {
        type: 'array',
        description:
          "Custom HTTP headers to be sent with the call. Each header should be an object with 'name' and 'value' properties.",
        items: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
              description: 'The name of the custom header',
            },
            value: {
              type: 'string',
              description: 'The value of the custom header',
            },
          },
          required: ['name', 'value'],
        },
      },
      EarlyMedia: {
        type: 'boolean',
        description:
          'Whether participant shall be bridged to conference before the participant answers (from early media if available). Defaults to `false`.',
      },
      EndConferenceOnExit: {
        type: 'boolean',
        description: 'Whether to end the conference when the participant leaves. Defaults to `false`.',
      },
      From: {
        type: 'string',
        description:
          'The phone number of the party that initiated the call. Phone numbers are formatted with a `+` and country code.',
      },
      MachineDetection: {
        type: 'string',
        description:
          'Whether to detect if a human or an answering machine picked up the call. Use `Enable` if you would like to ne notified as soon as the called party is identified. Use `DetectMessageEnd`, if you would like to leave a message on an answering machine.',
        enum: ['Enable', 'DetectMessageEnd'],
      },
      MachineDetectionSilenceTimeout: {
        type: 'integer',
        description:
          'If initial silence duration is greater than this value, consider it a machine. Ignored when `premium` detection is used.',
      },
      MachineDetectionSpeechEndThreshold: {
        type: 'integer',
        description:
          'Silence duration threshold after a greeting message or voice for it be considered human. Ignored when `premium` detection is used.',
      },
      MachineDetectionSpeechThreshold: {
        type: 'integer',
        description:
          'Maximum threshold of a human greeting. If greeting longer than this value, considered machine. Ignored when `premium` detection is used.',
      },
      MachineDetectionTimeout: {
        type: 'integer',
        description:
          'How long answering machine detection should go on for before sending an `Unknown` result. Given in milliseconds.',
      },
      MaxParticipants: {
        type: 'integer',
        description:
          'The maximum number of participants in the conference. Can be a positive integer from 2 to 800. The default value is 250.',
      },
      Muted: {
        type: 'boolean',
        description: 'Whether the participant should be muted.',
      },
      PreferredCodecs: {
        type: 'string',
        description: 'The list of comma-separated codecs to be offered on a call.',
      },
      Record: {
        type: 'boolean',
        description: "Whether to record the entire participant's call leg. Defaults to `false`.",
      },
      RecordingChannels: {
        type: 'string',
        description: 'The number of channels in the final recording. Defaults to `mono`.',
        enum: ['mono', 'dual'],
      },
      RecordingStatusCallback: {
        type: 'string',
        description: 'The URL the recording callbacks will be sent to.',
      },
      RecordingStatusCallbackEvent: {
        type: 'string',
        description:
          "The changes to the recording's state that should generate a call to `RecoridngStatusCallback`. Can be: `in-progress`, `completed` and `absent`. Separate multiple values with a space. Defaults to `completed`.",
      },
      RecordingStatusCallbackMethod: {
        type: 'string',
        description: 'HTTP request type used for `RecordingStatusCallback`. Defaults to `POST`.',
        enum: ['GET', 'POST'],
      },
      RecordingTrack: {
        type: 'string',
        description: 'The audio track to record for the call. The default is `both`.',
        enum: ['inbound', 'outbound', 'both'],
      },
      SipAuthPassword: {
        type: 'string',
        description: 'The password to use for SIP authentication.',
      },
      SipAuthUsername: {
        type: 'string',
        description: 'The username to use for SIP authentication.',
      },
      StartConferenceOnEnter: {
        type: 'boolean',
        description: 'Whether to start the conference when the participant enters. Defaults to `true`.',
      },
      StatusCallback: {
        type: 'string',
        description: 'URL destination for Telnyx to send status callback events to for the call.',
      },
      StatusCallbackEvent: {
        type: 'string',
        description:
          "The changes to the call's state that should generate a call to `StatusCallback`. Can be: `initiated`, `ringing`, `answered`, and `completed`. Separate multiple values with a space. The default value is `completed`.",
      },
      StatusCallbackMethod: {
        type: 'string',
        description: 'HTTP request type used for `StatusCallback`.',
        enum: ['GET', 'POST'],
      },
      TimeLimit: {
        type: 'integer',
        description: 'The maximum duration of the call in seconds.',
      },
      timeout_seconds: {
        type: 'integer',
        description:
          'The number of seconds that we should allow the phone to ring before assuming there is no answer. Can be an integer between 5 and 120, inclusive. The default value is 30.',
      },
      To: {
        type: 'string',
        description:
          'The phone number of the called party. Phone numbers are formatted with a `+` and country code.',
      },
      Trim: {
        type: 'string',
        description:
          'Whether to trim any leading and trailing silence from the recording. Defaults to `trim-silence`.',
        enum: ['trim-silence', 'do-not-trim'],
      },
      WaitUrl: {
        type: 'string',
        description:
          'The URL to call for an audio file to play while the participant is waiting for the conference to start.',
      },
    },
    required: ['account_sid', 'conference_sid'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { conference_sid, ...body } = args as any;
  return asTextContentResult(
    await client.texml.accounts.conferences.participants.participants(conference_sid, body),
  );
};

export default { metadata, tool, handler };
