// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'texml.accounts.recordings.json',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/texml/Accounts/{account_sid}/Recordings/{recording_sid}.json',
  operationId: 'DeleteTeXMLCallRecording',
};

export const tool: Tool = {
  name: 'delete_recording_sid_json_recordings_accounts_texml_json',
  description: 'Deletes recording resource identified by recording id.',
  inputSchema: {
    type: 'object',
    properties: {
      account_sid: {
        type: 'string',
      },
      recording_sid: {
        type: 'string',
      },
    },
    required: ['account_sid', 'recording_sid'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { recording_sid, ...body } = args as any;
  const response = await client.texml.accounts.recordings.json
    .deleteRecordingSidJson(recording_sid, body)
    .asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
