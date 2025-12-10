// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'ai.assistants',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/ai/assistants/import',
  operationId: 'import_assistants_public_assistants_import_post',
};

export const tool: Tool = {
  name: 'import_ai_assistants',
  description:
    'Import assistants from external providers. Any assistant that has already been imported will be overwritten with its latest version from the importing provider.',
  inputSchema: {
    type: 'object',
    properties: {
      api_key_ref: {
        type: 'string',
        description:
          'Integration secret pointer that refers to the API key for the external provider. This should be an identifier for an integration secret created via /v2/integration_secrets.',
      },
      provider: {
        type: 'string',
        description: 'The external provider to import assistants from.',
        enum: ['elevenlabs', 'vapi', 'retell'],
      },
    },
    required: ['api_key_ref', 'provider'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  try {
    return asTextContentResult(await client.ai.assistants.import(body));
  } catch (error) {
    if (error instanceof Telnyx.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
