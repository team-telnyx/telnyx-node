// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'calls.actions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/calls/{call_control_id}/actions/streaming_start',
  operationId: 'StartCallStreaming',
};

export const tool: Tool = {
  name: 'start_streaming_calls_actions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nStart streaming the media from a call to a specific WebSocket address or Dialogflow connection in near-realtime. Audio will be delivered as base64-encoded RTP payload (raw audio), wrapped in JSON payloads.\n\nPlease find more details about media streaming messages specification under the [link](https://developers.telnyx.com/docs/voice/programmable-voice/media-streaming).\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'Call Control Command Response',\n  properties: {\n    data: {\n      $ref: '#/$defs/call_control_command_result'\n    }\n  },\n  $defs: {\n    call_control_command_result: {\n      type: 'object',\n      title: 'Call Control Command Result',\n      properties: {\n        result: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      call_control_id: {
        type: 'string',
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
      dialogflow_config: {
        $ref: '#/$defs/dialogflow_config',
      },
      enable_dialogflow: {
        type: 'boolean',
        description: 'Enables Dialogflow for the current call. The default value is false.',
      },
      stream_bidirectional_codec: {
        $ref: '#/$defs/stream_bidirectional_codec',
      },
      stream_bidirectional_mode: {
        $ref: '#/$defs/stream_bidirectional_mode',
      },
      stream_bidirectional_target_legs: {
        $ref: '#/$defs/stream_bidirectional_target_legs',
      },
      stream_codec: {
        $ref: '#/$defs/stream_codec',
      },
      stream_track: {
        type: 'string',
        description: 'Specifies which track should be streamed.',
        enum: ['inbound_track', 'outbound_track', 'both_tracks'],
      },
      stream_url: {
        type: 'string',
        description: 'The destination WebSocket address where the stream is going to be delivered.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['call_control_id'],
    $defs: {
      dialogflow_config: {
        type: 'object',
        title: 'Dialogflow Config',
        properties: {
          analyze_sentiment: {
            type: 'boolean',
            description: 'Enable sentiment analysis from Dialogflow.',
          },
          partial_automated_agent_reply: {
            type: 'boolean',
            description: 'Enable partial automated agent reply from Dialogflow.',
          },
        },
      },
      stream_bidirectional_codec: {
        type: 'string',
        title: 'Bidirectional Stream Codec',
        description:
          'Indicates codec for bidirectional streaming RTP payloads. Used only with stream_bidirectional_mode=rtp. Case sensitive.',
        enum: ['PCMU', 'PCMA', 'G722', 'OPUS', 'AMR-WB'],
      },
      stream_bidirectional_mode: {
        type: 'string',
        title: 'Bidirectional Stream Mode',
        description: 'Configures method of bidirectional streaming (mp3, rtp).',
        enum: ['mp3', 'rtp'],
      },
      stream_bidirectional_target_legs: {
        type: 'string',
        title: 'Bidirectional Stream Target Legs',
        description: 'Specifies which call legs should receive the bidirectional stream audio.',
        enum: ['both', 'self', 'opposite'],
      },
      stream_codec: {
        type: 'string',
        title: 'Stream Codec',
        description:
          "Specifies the codec to be used for the streamed audio. When set to 'default' or when transcoding is not possible, the codec from the call will be used. Currently, transcoding is only supported between PCMU and PCMA codecs.",
        enum: ['PCMA', 'PCMU', 'default'],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { call_control_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.calls.actions.startStreaming(call_control_id, body)),
  );
};

export default { metadata, tool, handler };
