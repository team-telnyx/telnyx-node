// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'texml.accounts.calls.recordings_json',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/texml/Accounts/{account_sid}/Calls/{call_sid}/Recordings.json',
  operationId: 'FetchTeXMLCallRecordings',
};

export const tool: Tool = {
  name: 'retrieve_recordings_json_calls_accounts_texml_recordings_json',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns recordings for a call identified by call_sid.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'Multiple recording resources',\n  properties: {\n    end: {\n      type: 'integer',\n      description: 'The number of the last element on the page, zero-indexed.'\n    },\n    first_page_uri: {\n      type: 'string',\n      description: 'Relative uri to the first page of the query results'\n    },\n    next_page_uri: {\n      type: 'string',\n      description: 'Relative uri to the next page of the query results'\n    },\n    page: {\n      type: 'integer',\n      description: 'Current page number, zero-indexed.'\n    },\n    page_size: {\n      type: 'integer',\n      description: 'The number of items on the page'\n    },\n    previous_page_uri: {\n      type: 'string',\n      description: 'Relative uri to the previous page of the query results'\n    },\n    recordings: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/texml_get_call_recording_response_body'\n      }\n    },\n    start: {\n      type: 'integer',\n      description: 'The number of the first element on the page, zero-indexed.'\n    },\n    uri: {\n      type: 'string',\n      description: 'The URI of the current page.'\n    }\n  },\n  $defs: {\n    texml_get_call_recording_response_body: {\n      type: 'object',\n      title: 'Texml Get Call Recording Response Body',\n      properties: {\n        account_sid: {\n          type: 'string'\n        },\n        call_sid: {\n          type: 'string'\n        },\n        channels: {\n          type: 'string',\n          enum: [            1,\n            2\n          ]\n        },\n        conference_sid: {\n          type: 'string'\n        },\n        date_created: {\n          type: 'string',\n          format: 'date-time'\n        },\n        date_updated: {\n          type: 'string',\n          format: 'date-time'\n        },\n        duration: {\n          type: 'string',\n          description: 'The duration of this recording, given in seconds.'\n        },\n        error_code: {\n          type: 'string'\n        },\n        media_url: {\n          type: 'string'\n        },\n        sid: {\n          type: 'string',\n          description: 'Identifier of a resource.'\n        },\n        source: {\n          type: 'string',\n          description: 'Defines how the recording was created.',\n          enum: [            'StartCallRecordingAPI',\n            'StartConferenceRecordingAPI',\n            'OutboundAPI',\n            'DialVerb',\n            'Conference',\n            'RecordVerb',\n            'Trunking'\n          ]\n        },\n        start_time: {\n          type: 'string',\n          format: 'date-time'\n        },\n        status: {\n          type: 'string',\n          enum: [            'in-progress',\n            'completed',\n            'paused',\n            'stopped'\n          ]\n        },\n        subresources_uris: {\n          $ref: '#/$defs/texml_recording_subresources_uris'\n        },\n        uri: {\n          type: 'string',\n          description: 'The relative URI for this recording resource.'\n        }\n      }\n    },\n    texml_recording_subresources_uris: {\n      type: 'object',\n      title: 'Texml recording subresources uris',\n      description: 'Subresources details for a recording if available.',\n      properties: {\n        transcriptions: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_sid: {
        type: 'string',
      },
      call_sid: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_sid', 'call_sid'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { call_sid, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(
      jq_filter,
      await client.texml.accounts.calls.recordingsJson.retrieveRecordingsJson(call_sid, body),
    ),
  );
};

export default { metadata, tool, handler };
