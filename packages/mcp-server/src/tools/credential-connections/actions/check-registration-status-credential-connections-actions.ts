// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'credential_connections.actions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/credential_connections/{id}/actions/check_registration_status',
  operationId: 'CheckRegistrationStatus',
};

export const tool: Tool = {
  name: 'check_registration_status_credential_connections_actions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nChecks the registration_status for a credential connection, (`registration_status`) as well as the timestamp for the last SIP registration event (`registration_status_updated_at`)\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/action_check_registration_status_response',\n  $defs: {\n    action_check_registration_status_response: {\n      type: 'object',\n      title: 'Registration Status Response',\n      properties: {\n        data: {\n          type: 'object',\n          title: 'Registration Status',\n          properties: {\n            ip_address: {\n              type: 'string',\n              description: 'The ip used during the SIP connection'\n            },\n            last_registration: {\n              type: 'string',\n              description: 'ISO 8601 formatted date indicating when the resource was last updated.'\n            },\n            port: {\n              type: 'integer',\n              description: 'The port of the SIP connection'\n            },\n            record_type: {\n              type: 'string',\n              description: 'Identifies the type of the resource.'\n            },\n            sip_username: {\n              type: 'string',\n              description: 'The user name of the SIP connection'\n            },\n            status: {\n              type: 'string',\n              description: 'The current registration status of your SIP connection',\n              enum: [                'Not Applicable',\n                'Not Registered',\n                'Failed',\n                'Expired',\n                'Registered',\n                'Unregistered'\n              ]\n            },\n            transport: {\n              type: 'string',\n              description: 'The protocol of the SIP connection'\n            },\n            user_agent: {\n              type: 'string',\n              description: 'The user agent of the SIP connection'\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
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
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.credentialConnections.actions.checkRegistrationStatus(id)),
    );
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
