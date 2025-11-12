// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'mobile_push_credentials',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/mobile_push_credentials/{push_credential_id}',
  operationId: 'GetPushCredentialById',
};

export const tool: Tool = {
  name: 'retrieve_mobile_push_credentials',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves mobile push credential based on the given `push_credential_id`\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/push_credential_response',\n  $defs: {\n    push_credential_response: {\n      type: 'object',\n      description: 'Success response with details about a push credential',\n      properties: {\n        data: {\n          $ref: '#/$defs/push_credential'\n        }\n      }\n    },\n    push_credential: {\n      type: 'object',\n      title: 'Successful response with details about a push credential',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier of a push credential'\n        },\n        alias: {\n          type: 'string',\n          description: 'Alias to uniquely identify a credential'\n        },\n        certificate: {\n          type: 'string',\n          description: 'Apple certificate for sending push notifications. For iOS only'\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 timestamp when the room was created',\n          format: 'date-time'\n        },\n        private_key: {\n          type: 'string',\n          description: 'Apple private key for a given certificate for sending push notifications. For iOS only'\n        },\n        project_account_json_file: {\n          type: 'object',\n          description: 'Google server key for sending push notifications. For Android only',\n          additionalProperties: true\n        },\n        record_type: {\n          type: 'string'\n        },\n        type: {\n          type: 'string',\n          description: 'Type of mobile push credential. Either <code>ios</code> or <code>android</code>'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 timestamp when the room was updated.',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'alias',\n        'certificate',\n        'created_at',\n        'private_key',\n        'project_account_json_file',\n        'record_type',\n        'type',\n        'updated_at'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      push_credential_id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['push_credential_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { push_credential_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.mobilePushCredentials.retrieve(push_credential_id)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
