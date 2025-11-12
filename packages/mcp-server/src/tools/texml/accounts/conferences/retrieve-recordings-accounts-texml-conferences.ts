// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'texml.accounts.conferences',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/texml/Accounts/{account_sid}/Conferences/{conference_sid}/Recordings',
  operationId: 'GetTexmlConferenceRecordings',
};

export const tool: Tool = {
  name: 'retrieve_recordings_accounts_texml_conferences',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists conference recordings\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/conference_retrieve_recordings_response',\n  $defs: {\n    conference_retrieve_recordings_response: {\n      type: 'object',\n      title: 'Multiple conference recording resources',\n      properties: {\n        end: {\n          type: 'integer',\n          description: 'The number of the last element on the page, zero-indexed.'\n        },\n        first_page_uri: {\n          type: 'string',\n          description: '/v2/texml/Accounts/61bf923e-5e4d-4595-a110-56190ea18a1b/Conferences/6dc6cc1a-1ba1-4351-86b8-4c22c95cd98f/Recordings.json?page=0&pagesize=20'\n        },\n        next_page_uri: {\n          type: 'string',\n          description: '/v2/texml/Accounts/61bf923e-5e4d-4595-a110-56190ea18a1b/Conferences/6dc6cc1a-1ba1-4351-86b8-4c22c95cd98f/Recordings.json?Page=1&PageSize=1&PageToken=MTY4AjgyNDkwNzIxMQ'\n        },\n        page: {\n          type: 'integer',\n          description: 'Current page number, zero-indexed.'\n        },\n        page_size: {\n          type: 'integer',\n          description: 'The number of items on the page'\n        },\n        recordings: {\n          type: 'array',\n          items: {\n            type: 'object',\n            title: 'Conference recording resource',\n            properties: {\n              account_sid: {\n                type: 'string',\n                description: 'The id of the account the resource belongs to.'\n              },\n              call_sid: {\n                type: 'string',\n                description: 'The identifier of the related participant\\'s call.'\n              },\n              channels: {\n                type: 'integer',\n                description: 'The number of channels in the recording.'\n              },\n              conference_sid: {\n                type: 'string',\n                description: 'The identifier of the related conference.'\n              },\n              date_created: {\n                type: 'string',\n                description: 'The timestamp of when the resource was created.'\n              },\n              date_updated: {\n                type: 'string',\n                description: 'The timestamp of when the resource was last updated.'\n              },\n              duration: {\n                type: 'integer',\n                description: 'Duratin of the recording in seconds.'\n              },\n              error_code: {\n                type: 'string',\n                description: 'The recording error, if any.'\n              },\n              media_url: {\n                type: 'string',\n                description: 'The URL to use to download the recording.'\n              },\n              sid: {\n                type: 'string',\n                description: 'The unique identifier of the recording.'\n              },\n              source: {\n                type: 'string',\n                description: 'How the recording was started.',\n                enum: [                  'DialVerb',\n                  'Conference',\n                  'OutboundAPI',\n                  'Trunking',\n                  'RecordVerb',\n                  'StartCallRecordingAPI',\n                  'StartConferenceRecordingAPI'\n                ]\n              },\n              start_time: {\n                type: 'string',\n                description: 'The timestamp of when the recording was started.'\n              },\n              status: {\n                type: 'string',\n                description: 'The status of the recording.',\n                enum: [                  'processing',\n                  'absent',\n                  'completed',\n                  'deleted'\n                ]\n              },\n              subresource_uris: {\n                type: 'object',\n                description: 'A list of related resources identified by their relative URIs.',\n                additionalProperties: true\n              },\n              uri: {\n                type: 'string',\n                description: 'The relative URI for this recording.'\n              }\n            }\n          }\n        },\n        start: {\n          type: 'integer',\n          description: 'The number of the first element on the page, zero-indexed.'\n        },\n        uri: {\n          type: 'string',\n          description: 'The URI of the current page.'\n        }\n      }\n    }\n  }\n}\n```",
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
  try {
    return asTextContentResult(
      await maybeFilter(
        jq_filter,
        await client.texml.accounts.conferences.retrieveRecordings(conference_sid, body),
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
