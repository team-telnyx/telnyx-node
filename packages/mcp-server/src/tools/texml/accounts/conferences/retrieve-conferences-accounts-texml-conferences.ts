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
  httpPath: '/texml/Accounts/{account_sid}/Conferences',
  operationId: 'GetTexmlConferences',
};

export const tool: Tool = {
  name: 'retrieve_conferences_accounts_texml_conferences',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists conference resources.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/conference_retrieve_conferences_response',\n  $defs: {\n    conference_retrieve_conferences_response: {\n      type: 'object',\n      title: 'Multiple conference resources',\n      properties: {\n        conferences: {\n          type: 'array',\n          items: {\n            type: 'object',\n            title: 'Conference resource',\n            properties: {\n              account_sid: {\n                type: 'string',\n                description: 'The id of the account the resource belongs to.'\n              },\n              api_version: {\n                type: 'string',\n                description: 'The version of the API that was used to make the request.'\n              },\n              call_sid_ending_conference: {\n                type: 'string',\n                description: 'Caller ID, if present.'\n              },\n              date_created: {\n                type: 'string',\n                description: 'The timestamp of when the resource was created.'\n              },\n              date_updated: {\n                type: 'string',\n                description: 'The timestamp of when the resource was last updated.'\n              },\n              friendly_name: {\n                type: 'string',\n                description: 'A string that you assigned to describe this conference room.'\n              },\n              reason_conference_ended: {\n                type: 'string',\n                description: 'The reason why a conference ended. When a conference is in progress, will be null.',\n                enum: [                  'participant-with-end-conference-on-exit-left',\n                  'last-participant-left',\n                  'conference-ended-via-api',\n                  'time-exceeded'\n                ]\n              },\n              region: {\n                type: 'string',\n                description: 'A string representing the region where the conference is hosted.'\n              },\n              sid: {\n                type: 'string',\n                description: 'The unique identifier of the conference.'\n              },\n              status: {\n                type: 'string',\n                description: 'The status of this conference.',\n                enum: [                  'init',\n                  'in-progress',\n                  'completed'\n                ]\n              },\n              subresource_uris: {\n                type: 'object',\n                description: 'A list of related resources identified by their relative URIs.',\n                additionalProperties: true\n              },\n              uri: {\n                type: 'string',\n                description: 'The relative URI for this conference.'\n              }\n            }\n          }\n        },\n        end: {\n          type: 'integer',\n          description: 'The number of the last element on the page, zero-indexed.'\n        },\n        first_page_uri: {\n          type: 'string',\n          description: '/v2/texml/Accounts/61bf923e-5e4d-4595-a110-56190ea18a1b/Conferences.json?Page=0&PageSize=1'\n        },\n        next_page_uri: {\n          type: 'string',\n          description: '/v2/texml/Accounts/61bf923e-5e4d-4595-a110-56190ea18a1b/Conferences.json?Page=1&PageSize=1&PageToken=MTY4AjgyNDkwNzIxMQ'\n        },\n        page: {\n          type: 'integer',\n          description: 'Current page number, zero-indexed.'\n        },\n        page_size: {\n          type: 'integer',\n          description: 'The number of items on the page'\n        },\n        start: {\n          type: 'integer',\n          description: 'The number of the first element on the page, zero-indexed.'\n        },\n        uri: {\n          type: 'string',\n          description: 'The URI of the current page.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_sid: {
        type: 'string',
      },
      DateCreated: {
        type: 'string',
        description:
          'Filters conferences by the creation date. Expected format is YYYY-MM-DD. Also accepts inequality operators, e.g. DateCreated>=2023-05-22.',
      },
      DateUpdated: {
        type: 'string',
        description:
          'Filters conferences by the time they were last updated. Expected format is YYYY-MM-DD. Also accepts inequality operators, e.g. DateUpdated>=2023-05-22.',
      },
      FriendlyName: {
        type: 'string',
        description: 'Filters conferences by their friendly name.',
      },
      Page: {
        type: 'integer',
        description:
          'The number of the page to be displayed, zero-indexed, should be used in conjuction with PageToken.',
      },
      PageSize: {
        type: 'integer',
        description: 'The number of records to be displayed on a page',
      },
      PageToken: {
        type: 'string',
        description: 'Used to request the next page of results.',
      },
      Status: {
        type: 'string',
        description: 'Filters conferences by status.',
        enum: ['init', 'in-progress', 'completed'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_sid'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { account_sid, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(
        jq_filter,
        await client.texml.accounts.conferences.retrieveConferences(account_sid, body),
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
