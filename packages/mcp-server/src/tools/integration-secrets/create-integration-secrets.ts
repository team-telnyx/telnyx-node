// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'integration_secrets',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/integration_secrets',
  operationId: 'create_integration_secret',
};

export const tool: Tool = {
  name: 'create_integration_secrets',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a new secret with an associated identifier that can be used to securely integrate with other services.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/integration_secret_create_response',\n  $defs: {\n    integration_secret_create_response: {\n      type: 'object',\n      title: 'IntegrationSecretCreatedResponse',\n      properties: {\n        data: {\n          $ref: '#/$defs/integration_secret'\n        }\n      },\n      required: [        'data'\n      ]\n    },\n    integration_secret: {\n      type: 'object',\n      title: 'IntegrationSecret',\n      properties: {\n        id: {\n          type: 'string',\n          title: 'Id'\n        },\n        created_at: {\n          type: 'string',\n          title: 'Created At',\n          format: 'date-time'\n        },\n        identifier: {\n          type: 'string',\n          title: 'Identifier'\n        },\n        record_type: {\n          type: 'string',\n          title: 'Record Type'\n        },\n        updated_at: {\n          type: 'string',\n          title: 'Updated At',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'identifier',\n        'record_type'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      identifier: {
        type: 'string',
        title: 'Identifier',
        description: 'The unique identifier of the secret.',
      },
      type: {
        type: 'string',
        title: 'Type',
        description: 'The type of secret.',
        enum: ['bearer', 'basic'],
      },
      token: {
        type: 'string',
        title: 'Token',
        description: 'The token for the secret. Required for bearer type secrets, ignored otherwise.',
      },
      password: {
        type: 'string',
        title: 'Password',
        description: 'The password for the secret. Required for basic type secrets, ignored otherwise.',
      },
      username: {
        type: 'string',
        title: 'Username',
        description: 'The username for the secret. Required for basic type secrets, ignored otherwise.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['identifier', 'type'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.integrationSecrets.create(body)));
};

export default { metadata, tool, handler };
