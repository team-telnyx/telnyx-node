// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'texml.accounts.transcriptions.json',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/texml/Accounts/{account_sid}/Transcriptions/{recording_transcription_sid}.json',
  operationId: 'GetTeXMLRecordingTranscription',
};

export const tool: Tool = {
  name: 'retrieve_recording_transcription_sid_json_transcriptions_accounts_texml_json',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns the recording transcription resource identified by its ID.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/json_retrieve_recording_transcription_sid_json_response',\n  $defs: {\n    json_retrieve_recording_transcription_sid_json_response: {\n      type: 'object',\n      title: 'Recording Transcription Response',\n      properties: {\n        account_sid: {\n          type: 'string'\n        },\n        api_version: {\n          type: 'string',\n          description: 'The version of the API that was used to make the request.'\n        },\n        call_sid: {\n          type: 'string'\n        },\n        date_created: {\n          type: 'string',\n          format: 'date-time'\n        },\n        date_updated: {\n          type: 'string',\n          format: 'date-time'\n        },\n        duration: {\n          type: 'string',\n          description: 'The duration of this recording, given in seconds.'\n        },\n        recording_sid: {\n          type: 'string',\n          description: 'Identifier of a resource.'\n        },\n        sid: {\n          type: 'string',\n          description: 'Identifier of a resource.'\n        },\n        status: {\n          type: 'string',\n          description: 'The status of the recording transcriptions. The transcription text will be available only when the status is completed.',\n          enum: [            'in-progress',\n            'completed'\n          ]\n        },\n        transcription_text: {\n          type: 'string',\n          description: 'The recording\\'s transcribed text'\n        },\n        uri: {\n          type: 'string',\n          description: 'The relative URI for the recording transcription resource.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_sid: {
        type: 'string',
      },
      recording_transcription_sid: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_sid', 'recording_transcription_sid'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { recording_transcription_sid, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(
        jq_filter,
        await client.texml.accounts.transcriptions.json.retrieveRecordingTranscriptionSidJson(
          recording_transcription_sid,
          body,
        ),
      ),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
