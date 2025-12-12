// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'mobile_push_credentials',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/mobile_push_credentials',
  operationId: 'CreatePushCredential',
};

export const tool: Tool = {
  name: 'create_mobile_push_credentials',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates a new mobile push credential\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/push_credential_response',\n  $defs: {\n    push_credential_response: {\n      type: 'object',\n      description: 'Success response with details about a push credential',\n      properties: {\n        data: {\n          $ref: '#/$defs/push_credential'\n        }\n      }\n    },\n    push_credential: {\n      type: 'object',\n      title: 'Successful response with details about a push credential',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier of a push credential'\n        },\n        alias: {\n          type: 'string',\n          description: 'Alias to uniquely identify a credential'\n        },\n        certificate: {\n          type: 'string',\n          description: 'Apple certificate for sending push notifications. For iOS only'\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 timestamp when the room was created',\n          format: 'date-time'\n        },\n        private_key: {\n          type: 'string',\n          description: 'Apple private key for a given certificate for sending push notifications. For iOS only'\n        },\n        project_account_json_file: {\n          type: 'object',\n          description: 'Google server key for sending push notifications. For Android only',\n          additionalProperties: true\n        },\n        record_type: {\n          type: 'string'\n        },\n        type: {\n          type: 'string',\n          description: 'Type of mobile push credential. Either <code>ios</code> or <code>android</code>'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 timestamp when the room was updated.',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'alias',\n        'certificate',\n        'created_at',\n        'private_key',\n        'project_account_json_file',\n        'record_type',\n        'type',\n        'updated_at'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      createMobilePushCredentialRequest: {
        anyOf: [
          {
            type: 'object',
            title: 'Create iOS push credential request',
            properties: {
              alias: {
                type: 'string',
                description: 'Alias to uniquely identify the credential',
              },
              certificate: {
                type: 'string',
                description: 'Certificate as received from APNs',
              },
              private_key: {
                type: 'string',
                description: 'Corresponding private key to the certificate as received from APNs',
              },
              type: {
                type: 'string',
                description: 'Type of mobile push credential. Should be <code>ios</code> here',
                enum: ['ios'],
              },
            },
            required: ['alias', 'certificate', 'private_key', 'type'],
          },
          {
            type: 'object',
            title: 'Create Android Push Credential Request',
            properties: {
              alias: {
                type: 'string',
                description: 'Alias to uniquely identify the credential',
              },
              project_account_json_file: {
                type: 'object',
                description: 'Private key file in JSON format',
                additionalProperties: true,
              },
              type: {
                type: 'string',
                description: 'Type of mobile push credential. Should be <code>android</code> here',
                enum: ['android'],
              },
            },
            required: ['alias', 'project_account_json_file', 'type'],
          },
        ],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['createMobilePushCredentialRequest'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.mobilePushCredentials.create(body)));
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
