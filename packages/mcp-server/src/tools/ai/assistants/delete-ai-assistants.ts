// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'ai.assistants',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/ai/assistants/{assistant_id}',
  operationId: 'delete_assistant_public_assistants__assistant_id__delete',
};

export const tool: Tool = {
  name: 'delete_ai_assistants',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nDelete an AI Assistant by `assistant_id`.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'AssistantDeletedResponse',\n  description: 'Aligns with the OpenAI API:\\nhttps://platform.openai.com/docs/api-reference/assistants/deleteAssistant',\n  properties: {\n    id: {\n      type: 'string',\n      title: 'Id'\n    },\n    deleted: {\n      type: 'boolean',\n      title: 'Deleted'\n    },\n    object: {\n      type: 'string',\n      title: 'Object'\n    }\n  },\n  required: [    'id',\n    'deleted',\n    'object'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      assistant_id: {
        type: 'string',
        title: 'Assistant Id',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['assistant_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { assistant_id, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.ai.assistants.delete(assistant_id)));
};

export default { metadata, tool, handler };
