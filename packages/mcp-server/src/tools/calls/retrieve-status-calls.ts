// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'calls',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/calls/{call_control_id}',
  operationId: 'RetrieveCallStatus',
};

export const tool: Tool = {
  name: 'retrieve_status_calls',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns the status of a call (data is available 10 minutes after call ended).\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'Retrieve Call Status Response',\n  properties: {\n    data: {\n      type: 'object',\n      title: 'Call',\n      properties: {\n        call_control_id: {\n          type: 'string',\n          description: 'Unique identifier and token for controlling the call.'\n        },\n        call_leg_id: {\n          type: 'string',\n          description: 'ID that is unique to the call and can be used to correlate webhook events'\n        },\n        call_session_id: {\n          type: 'string',\n          description: 'ID that is unique to the call session and can be used to correlate webhook events. Call session is a group of related call legs that logically belong to the same phone call, e.g. an inbound and outbound leg of a transferred call'\n        },\n        is_alive: {\n          type: 'boolean',\n          description: 'Indicates whether the call is alive or not. For Dial command it will always be `false` (dialing is asynchronous).'\n        },\n        record_type: {\n          type: 'string',\n          enum: [            'call'\n          ]\n        },\n        call_duration: {\n          type: 'integer',\n          description: 'Indicates the duration of the call in seconds'\n        },\n        client_state: {\n          type: 'string',\n          description: 'State received from a command.'\n        },\n        end_time: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the call ended. Only present when the call is not alive'\n        },\n        start_time: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the call started'\n        }\n      },\n      required: [        'call_control_id',\n        'call_leg_id',\n        'call_session_id',\n        'is_alive',\n        'record_type'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      call_control_id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['call_control_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { call_control_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.calls.retrieveStatus(call_control_id)),
  );
};

export default { metadata, tool, handler };
