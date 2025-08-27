// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'texml.accounts.conferences.participants',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath:
    '/texml/Accounts/{account_sid}/Conferences/{conference_sid}/Participants/{call_sid_or_participant_label}',
  operationId: 'DeleteTexmlConferenceParticipant',
};

export const tool: Tool = {
  name: 'delete_conferences_accounts_texml_participants',
  description: 'Deletes a conference participant',
  inputSchema: {
    type: 'object',
    properties: {
      account_sid: {
        type: 'string',
      },
      conference_sid: {
        type: 'string',
      },
      call_sid_or_participant_label: {
        type: 'string',
      },
    },
    required: ['account_sid', 'conference_sid', 'call_sid_or_participant_label'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { call_sid_or_participant_label, ...body } = args as any;
  const response = await client.texml.accounts.conferences.participants
    .delete(call_sid_or_participant_label, body)
    .asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
