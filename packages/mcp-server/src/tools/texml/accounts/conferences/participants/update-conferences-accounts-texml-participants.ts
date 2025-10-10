// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'texml.accounts.conferences.participants',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath:
    '/texml/Accounts/{account_sid}/Conferences/{conference_sid}/Participants/{call_sid_or_participant_label}',
  operationId: 'UpdateTexmlConferenceParticipant',
};

export const tool: Tool = {
  name: 'update_conferences_accounts_texml_participants',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdates a conference participant\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/participant_update_response',\n  $defs: {\n    participant_update_response: {\n      type: 'object',\n      title: 'Participant resource',\n      properties: {\n        account_sid: {\n          type: 'string',\n          description: 'The id of the account the resource belongs to.'\n        },\n        api_version: {\n          type: 'string',\n          description: 'The version of the API that was used to make the request.'\n        },\n        call_sid: {\n          type: 'string',\n          description: 'The identifier of this participant\\'s call.'\n        },\n        call_sid_legacy: {\n          type: 'string',\n          description: 'The identifier of this participant\\'s call.'\n        },\n        coaching: {\n          type: 'boolean',\n          description: 'Whether the participant is coaching another call.'\n        },\n        coaching_call_sid: {\n          type: 'string',\n          description: 'The identifier of the coached participant\\'s call.'\n        },\n        coaching_call_sid_legacy: {\n          type: 'string',\n          description: 'The identifier of the coached participant\\'s call.'\n        },\n        date_created: {\n          type: 'string',\n          description: 'The timestamp of when the resource was created.'\n        },\n        date_updated: {\n          type: 'string',\n          description: 'The timestamp of when the resource was last updated.'\n        },\n        end_conference_on_exit: {\n          type: 'boolean',\n          description: 'Whether the conference ends when the participant leaves.'\n        },\n        hold: {\n          type: 'boolean',\n          description: 'Whether the participant is on hold.'\n        },\n        muted: {\n          type: 'boolean',\n          description: 'Whether the participant is muted.'\n        },\n        status: {\n          type: 'string',\n          description: 'The status of the participant\\'s call in the conference.',\n          enum: [            'connecting',\n            'connected',\n            'completed'\n          ]\n        },\n        uri: {\n          type: 'string',\n          description: 'The relative URI for this participant.'\n        }\n      }\n    }\n  }\n}\n```",
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
      AnnounceMethod: {
        type: 'string',
        description: 'The HTTP method used to call the `AnnounceUrl`. Defaults to `POST`.',
        enum: ['GET', 'POST'],
      },
      AnnounceUrl: {
        type: 'string',
        description:
          'The URL to call to announce something to the participant. The URL may return an MP3 fileo a WAV file, or a TwiML document that contains `<Play>`, `<Say>`, `<Pause>`, or `<Redirect>` verbs.',
      },
      BeepOnExit: {
        type: 'boolean',
        description: 'Whether to play a notification beep to the conference when the participant exits.',
      },
      CallSidToCoach: {
        type: 'string',
        description:
          'The SID of the participant who is being coached. The participant being coached is the only participant who can hear the participant who is coaching.',
      },
      Coaching: {
        type: 'boolean',
        description:
          'Whether the participant is coaching another call. When `true`, `CallSidToCoach` has to be given.',
      },
      EndConferenceOnExit: {
        type: 'boolean',
        description: 'Whether to end the conference when the participant leaves.',
      },
      Hold: {
        type: 'boolean',
        description: 'Whether the participant should be on hold.',
      },
      HoldMethod: {
        type: 'string',
        description: 'The HTTP method to use when calling the `HoldUrl`.',
        enum: ['GET', 'POST'],
      },
      HoldUrl: {
        type: 'string',
        description:
          'The URL to be called using the `HoldMethod` for music that plays when the participant is on hold. The URL may return an MP3 file, a WAV file, or a TwiML document that contains `<Play>`, `<Say>`, `<Pause>`, or `<Redirect>` verbs.',
      },
      Muted: {
        type: 'boolean',
        description: 'Whether the participant should be muted.',
      },
      WaitUrl: {
        type: 'string',
        description:
          'The URL to call for an audio file to play while the participant is waiting for the conference to start.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_sid', 'conference_sid', 'call_sid_or_participant_label'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { call_sid_or_participant_label, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(
      jq_filter,
      await client.texml.accounts.conferences.participants.update(call_sid_or_participant_label, body),
    ),
  );
};

export default { metadata, tool, handler };
