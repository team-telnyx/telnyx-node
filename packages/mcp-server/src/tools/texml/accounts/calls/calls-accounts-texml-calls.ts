// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'texml.accounts.calls',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/texml/Accounts/{account_sid}/Calls',
  operationId: 'InitiateTexmlCall',
};

export const tool: Tool = {
  name: 'calls_accounts_texml_calls',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nInitiate an outbound TeXML call. Telnyx will request TeXML from the XML Request URL configured for the connection in the Mission Control Portal.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/call_calls_response',\n  $defs: {\n    call_calls_response: {\n      type: 'object',\n      title: 'Initaite TeXML Call Result',\n      properties: {\n        from: {\n          type: 'string'\n        },\n        status: {\n          type: 'string'\n        },\n        to: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_sid: {
        type: 'string',
      },
      ApplicationSid: {
        type: 'string',
        description: 'The ID of the TeXML Application.',
      },
      From: {
        type: 'string',
        description:
          'The phone number of the party that initiated the call. Phone numbers are formatted with a `+` and country code.',
      },
      To: {
        type: 'string',
        description:
          'The phone number of the called party. Phone numbers are formatted with a `+` and country code.',
      },
      AsyncAmd: {
        type: 'boolean',
        description:
          'Select whether to perform answering machine detection in the background. By default execution is blocked until Answering Machine Detection is completed.',
      },
      AsyncAmdStatusCallback: {
        type: 'string',
        description: 'URL destination for Telnyx to send AMD callback events to for the call.',
      },
      AsyncAmdStatusCallbackMethod: {
        type: 'string',
        description:
          'HTTP request type used for `AsyncAmdStatusCallback`. The default value is inherited from TeXML Application setting.',
        enum: ['GET', 'POST'],
      },
      CallerId: {
        type: 'string',
        description:
          'To be used as the caller id name (SIP From Display Name) presented to the destination (`To` number). The string should have a maximum of 128 characters, containing only letters, numbers, spaces, and `-_~!.+` special characters. If ommited, the display name will be the same as the number in the `From` field.',
      },
      CancelPlaybackOnDetectMessageEnd: {
        type: 'boolean',
        description: 'Whether to cancel ongoing playback on `greeting ended` detection. Defaults to `true`.',
      },
      CancelPlaybackOnMachineDetection: {
        type: 'boolean',
        description: 'Whether to cancel ongoing playback on `machine` detection. Defaults to `true`.',
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
      DetectionMode: {
        type: 'string',
        description: 'Allows you to chose between Premium and Standard detections.',
        enum: ['Premium', 'Regular'],
      },
      FallbackUrl: {
        type: 'string',
        description:
          'A failover URL for which Telnyx will retrieve the TeXML call instructions if the `Url` is not responding.',
      },
      MachineDetection: {
        type: 'string',
        description: 'Enables Answering Machine Detection.',
        enum: ['Enable', 'Disable', 'DetectMessageEnd'],
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
        description: 'Maximum timeout threshold in milliseconds for overall detection.',
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
      RecordingTimeout: {
        type: 'integer',
        description:
          'The number of seconds that Telnyx will wait for the recording to be stopped if silence is detected. The timer only starts when the speech is detected. Please note that the transcription is used to detect silence and the related charge will be applied. The minimum value is 0. The default value is 0 (infinite)',
      },
      RecordingTrack: {
        type: 'string',
        description: 'The audio track to record for the call. The default is `both`.',
        enum: ['inbound', 'outbound', 'both'],
      },
      SendRecordingUrl: {
        type: 'boolean',
        description: 'Whether to send RecordingUrl in webhooks.',
      },
      SipAuthPassword: {
        type: 'string',
        description: 'The password to use for SIP authentication.',
      },
      SipAuthUsername: {
        type: 'string',
        description: 'The username to use for SIP authentication.',
      },
      SipRegion: {
        type: 'string',
        description: 'Defines the SIP region to be used for the call.',
        enum: ['US', 'Europe', 'Canada', 'Australia', 'Middle East'],
      },
      StatusCallback: {
        type: 'string',
        description: 'URL destination for Telnyx to send status callback events to for the call.',
      },
      StatusCallbackEvent: {
        type: 'string',
        description:
          'The call events for which Telnyx should send a webhook. Multiple events can be defined when separated by a space.',
        enum: ['initiated', 'ringing', 'answered', 'completed'],
      },
      StatusCallbackMethod: {
        type: 'string',
        description: 'HTTP request type used for `StatusCallback`.',
        enum: ['GET', 'POST'],
      },
      SuperviseCallSid: {
        type: 'string',
        description:
          'The call control ID of the existing call to supervise. When provided, the created leg will be added to the specified call in supervising mode. Status callbacks and action callbacks will NOT be sent for the supervising leg.',
      },
      SupervisingRole: {
        type: 'string',
        description:
          'The supervising role for the new leg. Determines the audio behavior: barge (hear both sides), whisper (only hear supervisor), monitor (hear both sides but supervisor muted). Default: barge',
        enum: ['barge', 'whisper', 'monitor'],
      },
      Trim: {
        type: 'string',
        description:
          'Whether to trim any leading and trailing silence from the recording. Defaults to `trim-silence`.',
        enum: ['trim-silence', 'do-not-trim'],
      },
      Url: {
        type: 'string',
        description: 'The URL from which Telnyx will retrieve the TeXML call instructions.',
      },
      UrlMethod: {
        type: 'string',
        description:
          'HTTP request type used for `Url`. The default value is inherited from TeXML Application setting.',
        enum: ['GET', 'POST'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_sid', 'ApplicationSid', 'From', 'To'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { account_sid, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.texml.accounts.calls.calls(account_sid, body)),
    );
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
