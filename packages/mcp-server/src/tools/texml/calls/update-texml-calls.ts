// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'texml.calls',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/texml/calls/{call_sid}/update',
  operationId: 'DeprecatedUpdateTexmlCall',
};

export const tool: Tool = {
  name: 'update_texml_calls',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate TeXML call. Please note that the keys present in the payload MUST BE formatted in CamelCase as specified in the example.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/call_update_response',\n  $defs: {\n    call_update_response: {\n      type: 'object',\n      title: 'TeXML REST Command Response',\n      properties: {\n        data: {\n          type: 'object',\n          title: 'TeXml REST Update Command Result',\n          properties: {\n            sid: {\n              type: 'string'\n            },\n            status: {\n              type: 'string'\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      call_sid: {
        type: 'string',
      },
      FallbackMethod: {
        type: 'string',
        description: 'HTTP request type used for `FallbackUrl`.',
        enum: ['GET', 'POST'],
      },
      FallbackUrl: {
        type: 'string',
        description:
          'A failover URL for which Telnyx will retrieve the TeXML call instructions if the Url is not responding.',
      },
      Method: {
        type: 'string',
        description: 'HTTP request type used for `Url`.',
        enum: ['GET', 'POST'],
      },
      Status: {
        type: 'string',
        description: 'The value to set the call status to. Setting the status to completed ends the call.',
      },
      StatusCallback: {
        type: 'string',
        description: 'URL destination for Telnyx to send status callback events to for the call.',
      },
      StatusCallbackMethod: {
        type: 'string',
        description: 'HTTP request type used for `StatusCallback`.',
        enum: ['GET', 'POST'],
      },
      Texml: {
        type: 'string',
        description: 'TeXML to replace the current one with.',
      },
      Url: {
        type: 'string',
        description:
          'The URL where TeXML will make a request to retrieve a new set of TeXML instructions to continue the call flow.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['call_sid'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { call_sid, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.texml.calls.update(call_sid, body)));
};

export default { metadata, tool, handler };
