// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'conferences',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/conferences/{id}',
  operationId: 'RetrieveConference',
};

export const tool: Tool = {
  name: 'retrieve_conferences',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve an existing conference\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'Conference Response',\n  properties: {\n    data: {\n      $ref: '#/$defs/conference'\n    }\n  },\n  $defs: {\n    conference: {\n      type: 'object',\n      title: 'Conference',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Uniquely identifies the conference'\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date of when the conference was created'\n        },\n        expires_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date of when the conference will expire'\n        },\n        name: {\n          type: 'string',\n          description: 'Name of the conference'\n        },\n        record_type: {\n          type: 'string',\n          enum: [            'conference'\n          ]\n        },\n        connection_id: {\n          type: 'string',\n          description: 'Identifies the connection associated with the conference'\n        },\n        end_reason: {\n          type: 'string',\n          description: 'Reason why the conference ended',\n          enum: [            'all_left',\n            'ended_via_api',\n            'host_left',\n            'time_exceeded'\n          ]\n        },\n        ended_by: {\n          type: 'object',\n          description: 'IDs related to who ended the conference. It is expected for them to all be there or all be null',\n          properties: {\n            call_control_id: {\n              type: 'string',\n              description: 'Call Control ID which ended the conference'\n            },\n            call_session_id: {\n              type: 'string',\n              description: 'Call Session ID which ended the conference'\n            }\n          }\n        },\n        region: {\n          type: 'string',\n          description: 'Region where the conference is hosted'\n        },\n        status: {\n          type: 'string',\n          description: 'Status of the conference',\n          enum: [            'init',\n            'in_progress',\n            'completed'\n          ]\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date of when the conference was last updated'\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'expires_at',\n        'name',\n        'record_type'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.conferences.retrieve(id)));
};

export default { metadata, tool, handler };
