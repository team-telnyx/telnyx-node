// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'ai.assistants.versions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/ai/assistants/{assistant_id}/versions/{version_id}',
  operationId: 'get_assistant_version_public_assistants__assistant_id__versions__version_id__get',
};

export const tool: Tool = {
  name: 'retrieve_assistants_ai_versions',
  description: 'Retrieves a specific version of an assistant by assistant_id and version_id',
  inputSchema: {
    type: 'object',
    properties: {
      assistant_id: {
        type: 'string',
        title: 'Assistant Id',
      },
      version_id: {
        type: 'string',
        title: 'Version Id',
      },
      include_mcp_servers: {
        type: 'boolean',
      },
    },
    required: ['assistant_id', 'version_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { version_id, ...body } = args as any;
  try {
    return asTextContentResult(await client.ai.assistants.versions.retrieve(version_id, body));
  } catch (error) {
    if (error instanceof Telnyx.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
