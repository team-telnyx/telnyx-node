// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'texml.accounts.calls.siprec',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/texml/Accounts/{account_sid}/Calls/{call_sid}/Siprec/{siprec_sid}.json',
  operationId: 'UpdateTeXMLSiprecSession',
};

export const tool: Tool = {
  name: 'siprec_sid_json_calls_accounts_texml_siprec',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdates siprec session identified by siprec_sid.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/siprec_siprec_sid_json_response',\n  $defs: {\n    siprec_siprec_sid_json_response: {\n      type: 'object',\n      title: 'Update Siprec Session Response',\n      properties: {\n        account_sid: {\n          type: 'string',\n          description: 'The id of the account the resource belongs to.'\n        },\n        call_sid: {\n          type: 'string',\n          description: 'The id of the call the resource belongs to.'\n        },\n        date_updated: {\n          type: 'string',\n          description: 'The date and time the siprec session was last updated.'\n        },\n        error_code: {\n          type: 'string',\n          description: 'The error code of the siprec session.'\n        },\n        sid: {\n          type: 'string',\n          description: 'The SID of the siprec session.'\n        },\n        status: {\n          type: 'string',\n          description: 'The status of the siprec session.',\n          enum: [            'in-progress',\n            'stopped'\n          ]\n        },\n        uri: {\n          type: 'string',\n          description: 'The URI of the siprec session.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_sid: {
        type: 'string',
      },
      call_sid: {
        type: 'string',
      },
      siprec_sid: {
        type: 'string',
      },
      Status: {
        type: 'string',
        description: 'The new status of the resource. Specifying `stopped` will end the siprec session.',
        enum: ['stopped'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_sid', 'call_sid', 'siprec_sid'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { siprec_sid, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.texml.accounts.calls.siprec.siprecSidJson(siprec_sid, body)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
