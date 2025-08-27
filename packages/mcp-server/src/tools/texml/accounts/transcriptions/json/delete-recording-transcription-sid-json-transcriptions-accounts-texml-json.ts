// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'texml.accounts.transcriptions.json',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/texml/Accounts/{account_sid}/Transcriptions/{recording_transcription_sid}.json',
  operationId: 'DeleteTeXMLRecordingTranscription',
};

export const tool: Tool = {
  name: 'delete_recording_transcription_sid_json_transcriptions_accounts_texml_json',
  description: 'Permanently deletes a recording transcription.',
  inputSchema: {
    type: 'object',
    properties: {
      account_sid: {
        type: 'string',
      },
      recording_transcription_sid: {
        type: 'string',
      },
    },
    required: ['account_sid', 'recording_transcription_sid'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { recording_transcription_sid, ...body } = args as any;
  const response = await client.texml.accounts.transcriptions.json
    .deleteRecordingTranscriptionSidJson(recording_transcription_sid, body)
    .asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
