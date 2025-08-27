// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'calls.actions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/calls/{call_control_id}/actions/siprec_start',
  operationId: 'StartSiprecSession',
};

export const tool: Tool = {
  name: 'start_siprec_calls_actions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nStart siprec session to configured in SIPREC connector SRS. \n\n**Expected Webhooks:**\n\n- `siprec.started`\n- `siprec.stopped`\n- `siprec.failed`\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'Call Control Command Response',\n  properties: {\n    data: {\n      $ref: '#/$defs/call_control_command_result'\n    }\n  },\n  $defs: {\n    call_control_command_result: {\n      type: 'object',\n      title: 'Call Control Command Result',\n      properties: {\n        result: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      call_control_id: {
        type: 'string',
      },
      client_state: {
        type: 'string',
        description:
          'Use this field to add state to every subsequent webhook. It must be a valid Base-64 encoded string.',
      },
      connector_name: {
        type: 'string',
        description: 'Name of configured SIPREC connector to be used.',
      },
      include_metadata_custom_headers: {
        type: 'string',
        description:
          'When set, custom parameters will be added as metadata (recording.session.ExtensionParameters). Otherwise, they’ll be added to sip headers.',
        enum: [true, false],
      },
      secure: {
        type: 'string',
        description:
          'Controls whether to encrypt media sent to your SRS using SRTP and TLS. When set you need to configure SRS port in your connector to 5061.',
        enum: [true, false],
      },
      session_timeout_secs: {
        type: 'integer',
        description:
          'Sets `Session-Expires` header to the INVITE. A reinvite is sent every half the value set. Usefull for session keep alive. Minimum value is 90, set to 0 to disable.',
      },
      sip_transport: {
        type: 'string',
        description: 'Specifies SIP transport protocol.',
        enum: ['udp', 'tcp', 'tls'],
      },
      siprec_track: {
        type: 'string',
        description: 'Specifies which track should be sent on siprec session.',
        enum: ['inbound_track', 'outbound_track', 'both_tracks'],
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
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { call_control_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.calls.actions.startSiprec(call_control_id, body)),
  );
};

export default { metadata, tool, handler };
