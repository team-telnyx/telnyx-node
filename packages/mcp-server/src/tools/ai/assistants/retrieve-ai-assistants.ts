// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'ai.assistants',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/ai/assistants/{assistant_id}',
  operationId: 'get_assistant_public_assistants__assistant_id__get',
};

export const tool: Tool = {
  name: 'retrieve_ai_assistants',
  description: 'Retrieve an AI Assistant configuration by `assistant_id`.',
  inputSchema: {
    type: 'object',
    properties: {
      assistant_id: {
        type: 'string',
        title: 'Assistant Id',
      },
      call_control_id: {
        type: 'string',
        title: 'Call Control Id',
      },
      fetch_dynamic_variables_from_webhook: {
        type: 'boolean',
        title: 'Fetch Dynamic Variables From Webhook',
      },
      from: {
        type: 'string',
        title: 'From',
      },
      to: {
        type: 'string',
        title: 'To',
      },
    },
    required: ['assistant_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { assistant_id, ...body } = args as any;
  try {
    return asTextContentResult(await client.ai.assistants.retrieve(assistant_id, body));
  } catch (error) {
    if (error instanceof Telnyx.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
