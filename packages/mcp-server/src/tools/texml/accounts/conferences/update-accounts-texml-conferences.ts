// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'texml.accounts.conferences',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/texml/Accounts/{account_sid}/Conferences/{conference_sid}',
  operationId: 'UpdateTexmlConference',
};

export const tool: Tool = {
  name: 'update_accounts_texml_conferences',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdates a conference resource.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/conference_update_response',\n  $defs: {\n    conference_update_response: {\n      type: 'object',\n      title: 'Conference resource',\n      properties: {\n        account_sid: {\n          type: 'string',\n          description: 'The id of the account the resource belongs to.'\n        },\n        api_version: {\n          type: 'string',\n          description: 'The version of the API that was used to make the request.'\n        },\n        call_sid_ending_conference: {\n          type: 'string',\n          description: 'Caller ID, if present.'\n        },\n        date_created: {\n          type: 'string',\n          description: 'The timestamp of when the resource was created.'\n        },\n        date_updated: {\n          type: 'string',\n          description: 'The timestamp of when the resource was last updated.'\n        },\n        friendly_name: {\n          type: 'string',\n          description: 'A string that you assigned to describe this conference room.'\n        },\n        reason_conference_ended: {\n          type: 'string',\n          description: 'The reason why a conference ended. When a conference is in progress, will be null.',\n          enum: [            'participant-with-end-conference-on-exit-left',\n            'last-participant-left',\n            'conference-ended-via-api',\n            'time-exceeded'\n          ]\n        },\n        region: {\n          type: 'string',\n          description: 'A string representing the region where the conference is hosted.'\n        },\n        sid: {\n          type: 'string',\n          description: 'The unique identifier of the conference.'\n        },\n        status: {\n          type: 'string',\n          description: 'The status of this conference.',\n          enum: [            'init',\n            'in-progress',\n            'completed'\n          ]\n        },\n        subresource_uris: {\n          type: 'object',\n          description: 'A list of related resources identified by their relative URIs.',\n          additionalProperties: true\n        },\n        uri: {\n          type: 'string',\n          description: 'The relative URI for this conference.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_sid: {
        type: 'string',
      },
      conference_sid: {
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
          'The URL we should call to announce something into the conference. The URL may return an MP3 file, a WAV file, or a TwiML document that contains `<Play>`, `<Say>`, `<Pause>`, or `<Redirect>` verbs.',
      },
      Status: {
        type: 'string',
        description:
          'The new status of the resource. Specifying `completed` will end the conference and hang up all participants.',
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
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { conference_sid, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.texml.accounts.conferences.update(conference_sid, body)),
    );
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
