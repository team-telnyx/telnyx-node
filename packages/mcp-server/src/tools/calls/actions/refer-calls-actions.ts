// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'calls.actions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/calls/{call_control_id}/actions/refer',
  operationId: 'ReferCall',
};

export const tool: Tool = {
  name: 'refer_calls_actions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nInitiate a SIP Refer on a Call Control call. You can initiate a SIP Refer at any point in the duration of a call.\n\n**Expected Webhooks:**\n\n- `call.refer.started`\n- `call.refer.completed`\n- `call.refer.failed`\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/action_refer_response',\n  $defs: {\n    action_refer_response: {\n      type: 'object',\n      title: 'Call Control Command Response',\n      properties: {\n        data: {\n          $ref: '#/$defs/call_control_command_result'\n        }\n      }\n    },\n    call_control_command_result: {\n      type: 'object',\n      title: 'Call Control Command Result',\n      properties: {\n        result: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      call_control_id: {
        type: 'string',
      },
      sip_address: {
        type: 'string',
        description: 'The SIP URI to which the call will be referred to.',
      },
      client_state: {
        type: 'string',
        description:
          'Use this field to add state to every subsequent webhook. It must be a valid Base-64 encoded string.',
      },
      command_id: {
        type: 'string',
        description:
          'Use this field to avoid execution of duplicate commands. Telnyx will ignore subsequent commands with the same `command_id` as one that has already been executed.',
      },
      custom_headers: {
        type: 'array',
        description: 'Custom headers to be added to the SIP INVITE.',
        items: {
          $ref: '#/$defs/custom_sip_header',
        },
      },
      sip_auth_password: {
        type: 'string',
        description: 'SIP Authentication password used for SIP challenges.',
      },
      sip_auth_username: {
        type: 'string',
        description: 'SIP Authentication username used for SIP challenges.',
      },
      sip_headers: {
        type: 'array',
        description:
          'SIP headers to be added to the request. Currently only User-to-User header is supported.',
        items: {
          $ref: '#/$defs/sip_header',
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['call_control_id', 'sip_address'],
    $defs: {
      custom_sip_header: {
        type: 'object',
        title: 'Custom SIP Header',
        properties: {
          name: {
            type: 'string',
            description: 'The name of the header to add.',
          },
          value: {
            type: 'string',
            description: 'The value of the header.',
          },
        },
        required: ['name', 'value'],
      },
      sip_header: {
        type: 'object',
        title: 'SIP Header',
        properties: {
          name: {
            type: 'string',
            description: 'The name of the header to add.',
            enum: ['User-to-User'],
          },
          value: {
            type: 'string',
            description: 'The value of the header.',
          },
        },
        required: ['name', 'value'],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { call_control_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.calls.actions.refer(call_control_id, body)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
