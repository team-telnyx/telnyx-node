// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'texml.accounts.calls',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/texml/Accounts/{account_sid}/Calls/{call_sid}/Siprec.json',
  operationId: 'StartTeXMLSiprecSession',
};

export const tool: Tool = {
  name: 'siprec_json_accounts_texml_calls',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nStarts siprec session with specified parameters for call idientified by call_sid.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'Create Siprec Session Response',\n  properties: {\n    account_sid: {\n      type: 'string',\n      description: 'The id of the account the resource belongs to.'\n    },\n    call_sid: {\n      type: 'string',\n      description: 'The id of the call the resource belongs to.'\n    },\n    date_created: {\n      type: 'string',\n      description: 'The date and time the siprec session was created.'\n    },\n    date_updated: {\n      type: 'string',\n      description: 'The date and time the siprec session was last updated.'\n    },\n    error_code: {\n      type: 'string',\n      description: 'The error code of the siprec session.'\n    },\n    sid: {\n      type: 'string',\n      description: 'The SID of the siprec session.'\n    },\n    start_time: {\n      type: 'string',\n      description: 'The date and time the siprec session was started.'\n    },\n    status: {\n      type: 'string',\n      description: 'The status of the siprec session.',\n      enum: [        'in-progress',\n        'stopped'\n      ]\n    },\n    track: {\n      type: 'string',\n      description: 'The track used for the siprec session.',\n      enum: [        'both_tracks',\n        'inbound_track',\n        'outbound_track'\n      ]\n    },\n    uri: {\n      type: 'string',\n      description: 'The URI of the siprec session.'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_sid: {
        type: 'string',
      },
      call_sid: {
        type: 'string',
      },
      ConnectorName: {
        type: 'string',
        description: 'The name of the connector to use for the SIPREC session.',
      },
      IncludeMetadataCustomHeaders: {
        type: 'string',
        description:
          'When set, custom parameters will be added as metadata (recording.session.ExtensionParameters). Otherwise, they’ll be added to sip headers.',
        enum: [true, false],
      },
      Name: {
        type: 'string',
        description:
          'Name of the SIPREC session. May be used to stop the SIPREC session from TeXML instruction.',
      },
      Secure: {
        type: 'string',
        description:
          'Controls whether to encrypt media sent to your SRS using SRTP and TLS. When set you need to configure SRS port in your connector to 5061.',
        enum: [true, false],
      },
      SessionTimeoutSecs: {
        type: 'integer',
        description:
          'Sets `Session-Expires` header to the INVITE. A reinvite is sent every half the value set. Usefull for session keep alive. Minimum value is 90, set to 0 to disable.',
      },
      SipTransport: {
        type: 'string',
        description: 'Specifies SIP transport protocol.',
        enum: ['udp', 'tcp', 'tls'],
      },
      StatusCallback: {
        type: 'string',
        description: 'URL destination for Telnyx to send status callback events to for the siprec session.',
      },
      StatusCallbackMethod: {
        type: 'string',
        description: 'HTTP request type used for `StatusCallback`.',
        enum: ['GET', 'POST'],
      },
      Track: {
        type: 'string',
        description:
          'The track to be used for siprec session. Can be `both_tracks`, `inbound_track` or `outbound_track`. Defaults to `both_tracks`.',
        enum: ['both_tracks', 'inbound_track', 'outbound_track'],
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
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { call_sid, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.texml.accounts.calls.siprecJson(call_sid, body)),
  );
};

export default { metadata, tool, handler };
