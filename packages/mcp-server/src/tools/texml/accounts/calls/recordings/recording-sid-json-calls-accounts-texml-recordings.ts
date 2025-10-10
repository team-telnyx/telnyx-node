// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'texml.accounts.calls.recordings',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/texml/Accounts/{account_sid}/Calls/{call_sid}/Recordings/{recording_sid}.json',
  operationId: 'UpdateTeXMLCallRecording',
};

export const tool: Tool = {
  name: 'recording_sid_json_calls_accounts_texml_recordings',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdates recording resource for particular call.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/recording_recording_sid_json_response',\n  $defs: {\n    recording_recording_sid_json_response: {\n      type: 'object',\n      title: 'Texml Create Call Recording Response Body',\n      properties: {\n        account_sid: {\n          type: 'string'\n        },\n        call_sid: {\n          type: 'string'\n        },\n        channels: {\n          type: 'string',\n          enum: [            1,\n            2\n          ]\n        },\n        conference_sid: {\n          type: 'string'\n        },\n        date_created: {\n          type: 'string',\n          format: 'date-time'\n        },\n        date_updated: {\n          type: 'string',\n          format: 'date-time'\n        },\n        duration: {\n          type: 'string',\n          description: 'The duration of this recording, given in seconds.'\n        },\n        error_code: {\n          type: 'string'\n        },\n        price: {\n          type: 'string',\n          description: 'The price of this recording, the currency is specified in the price_unit field. '\n        },\n        price_unit: {\n          type: 'string',\n          description: 'The unit in which the price is given.'\n        },\n        sid: {\n          type: 'string',\n          description: 'Identifier of a resource.'\n        },\n        source: {\n          type: 'string',\n          description: 'Defines how the recording was created.',\n          enum: [            'StartCallRecordingAPI',\n            'StartConferenceRecordingAPI',\n            'OutboundAPI',\n            'DialVerb',\n            'Conference',\n            'RecordVerb',\n            'Trunking'\n          ]\n        },\n        start_time: {\n          type: 'string',\n          format: 'date-time'\n        },\n        track: {\n          type: 'string',\n          description: 'The audio track to record for the call. The default is `both`.',\n          enum: [            'inbound',\n            'outbound',\n            'both'\n          ]\n        },\n        uri: {\n          type: 'string',\n          description: 'The relative URI for this recording resource.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_sid: {
        type: 'string',
      },
      call_sid: {
        type: 'string',
      },
      recording_sid: {
        type: 'string',
      },
      Status: {
        type: 'string',
        enum: ['in-progress', 'paused', 'stopped'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_sid', 'call_sid', 'recording_sid'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { recording_sid, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(
      jq_filter,
      await client.texml.accounts.calls.recordings.recordingSidJson(recording_sid, body),
    ),
  );
};

export default { metadata, tool, handler };
