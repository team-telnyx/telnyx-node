// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'texml.accounts',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/texml/Accounts/{account_sid}/Transcriptions.json',
  operationId: 'GetTeXMLRecordingTranscriptions',
};

export const tool: Tool = {
  name: 'retrieve_transcriptions_json_texml_accounts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns multiple recording transcription resources for an account.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/account_retrieve_transcriptions_json_response',\n  $defs: {\n    account_retrieve_transcriptions_json_response: {\n      type: 'object',\n      title: 'List Recording Transcriptions Response',\n      properties: {\n        end: {\n          type: 'integer',\n          description: 'The number of the last element on the page, zero-indexed'\n        },\n        first_page_uri: {\n          type: 'string',\n          description: 'Relative uri to the first page of the query results'\n        },\n        next_page_uri: {\n          type: 'string',\n          description: 'Relative uri to the next page of the query results'\n        },\n        page: {\n          type: 'integer',\n          description: 'Current page number, zero-indexed.'\n        },\n        page_size: {\n          type: 'integer',\n          description: 'The number of items on the page'\n        },\n        previous_page_uri: {\n          type: 'string',\n          description: 'Relative uri to the previous page of the query results'\n        },\n        start: {\n          type: 'integer',\n          description: 'The number of the first element on the page, zero-indexed.'\n        },\n        transcriptions: {\n          type: 'array',\n          items: {\n            type: 'object',\n            title: 'Texml Get Call Recording Transcription Response Body',\n            properties: {\n              account_sid: {\n                type: 'string'\n              },\n              api_version: {\n                type: 'string',\n                description: 'The version of the API that was used to make the request.'\n              },\n              call_sid: {\n                type: 'string'\n              },\n              date_created: {\n                type: 'string',\n                format: 'date-time'\n              },\n              date_updated: {\n                type: 'string',\n                format: 'date-time'\n              },\n              duration: {\n                type: 'string',\n                description: 'The duration of this recording, given in seconds.'\n              },\n              recording_sid: {\n                type: 'string',\n                description: 'Identifier of a resource.'\n              },\n              sid: {\n                type: 'string',\n                description: 'Identifier of a resource.'\n              },\n              status: {\n                type: 'string',\n                description: 'The status of the recording transcriptions. The transcription text will be available only when the status is completed.',\n                enum: [                  'in-progress',\n                  'completed'\n                ]\n              },\n              transcription_text: {\n                type: 'string',\n                description: 'The recording\\'s transcribed text'\n              },\n              uri: {\n                type: 'string',\n                description: 'The relative URI for the recording transcription resource.'\n              }\n            }\n          }\n        },\n        uri: {\n          type: 'string',\n          description: 'The URI of the current page.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_sid: {
        type: 'string',
      },
      PageSize: {
        type: 'integer',
        description: 'The number of records to be displayed on a page',
      },
      PageToken: {
        type: 'string',
        description: 'Used to request the next page of results.',
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
      await maybeFilter(jq_filter, await client.texml.accounts.retrieveTranscriptionsJson(account_sid, body)),
    );
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
