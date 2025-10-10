// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'texml.accounts.conferences.participants',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/texml/Accounts/{account_sid}/Conferences/{conference_sid}/Participants',
  operationId: 'GetTexmlConferenceParticipants',
};

export const tool: Tool = {
  name: 'retrieve_participants_conferences_accounts_texml_participants',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists conference participants\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/participant_retrieve_participants_response',\n  $defs: {\n    participant_retrieve_participants_response: {\n      type: 'object',\n      title: 'Multiple participant resources',\n      properties: {\n        end: {\n          type: 'integer',\n          description: 'The number of the last element on the page, zero-indexed.'\n        },\n        first_page_uri: {\n          type: 'string',\n          description: '/v2/texml/Accounts/61bf923e-5e4d-4595-a110-56190ea18a1b/Conferences/6dc6cc1a-1ba1-4351-86b8-4c22c95cd98f/Participants.json?page=0&pagesize=20'\n        },\n        next_page_uri: {\n          type: 'string',\n          description: '/v2/texml/Accounts/61bf923e-5e4d-4595-a110-56190ea18a1b/Conferences/6dc6cc1a-1ba1-4351-86b8-4c22c95cd98f/Participants.json?Page=1&PageSize=1&PageToken=MTY4AjgyNDkwNzIxMQ'\n        },\n        page: {\n          type: 'integer',\n          description: 'Current page number, zero-indexed.'\n        },\n        page_size: {\n          type: 'integer',\n          description: 'The number of items on the page'\n        },\n        participants: {\n          type: 'array',\n          items: {\n            type: 'object',\n            title: 'Participant resource',\n            properties: {\n              account_sid: {\n                type: 'string',\n                description: 'The id of the account the resource belongs to.'\n              },\n              api_version: {\n                type: 'string',\n                description: 'The version of the API that was used to make the request.'\n              },\n              call_sid: {\n                type: 'string',\n                description: 'The identifier of this participant\\'s call.'\n              },\n              call_sid_legacy: {\n                type: 'string',\n                description: 'The identifier of this participant\\'s call.'\n              },\n              coaching: {\n                type: 'boolean',\n                description: 'Whether the participant is coaching another call.'\n              },\n              coaching_call_sid: {\n                type: 'string',\n                description: 'The identifier of the coached participant\\'s call.'\n              },\n              coaching_call_sid_legacy: {\n                type: 'string',\n                description: 'The identifier of the coached participant\\'s call.'\n              },\n              date_created: {\n                type: 'string',\n                description: 'The timestamp of when the resource was created.'\n              },\n              date_updated: {\n                type: 'string',\n                description: 'The timestamp of when the resource was last updated.'\n              },\n              end_conference_on_exit: {\n                type: 'boolean',\n                description: 'Whether the conference ends when the participant leaves.'\n              },\n              hold: {\n                type: 'boolean',\n                description: 'Whether the participant is on hold.'\n              },\n              muted: {\n                type: 'boolean',\n                description: 'Whether the participant is muted.'\n              },\n              status: {\n                type: 'string',\n                description: 'The status of the participant\\'s call in the conference.',\n                enum: [                  'connecting',\n                  'connected',\n                  'completed'\n                ]\n              },\n              uri: {\n                type: 'string',\n                description: 'The relative URI for this participant.'\n              }\n            }\n          }\n        },\n        start: {\n          type: 'integer',\n          description: 'The number of the first element on the page, zero-indexed.'\n        },\n        uri: {\n          type: 'string',\n          description: 'The URI of the current page.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_sid: {
        type: 'string',
      },
      conference_sid: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_sid', 'conference_sid'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { conference_sid, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(
      jq_filter,
      await client.texml.accounts.conferences.participants.retrieveParticipants(conference_sid, body),
    ),
  );
};

export default { metadata, tool, handler };
