// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'ai',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/ai/models',
  operationId: 'get_models_public_models_get',
};

export const tool: Tool = {
  name: 'retrieve_models_ai',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThis endpoint returns a list of Open Source and OpenAI models that are available for use. <br /><br /> **Note**: Model `id`'s will be in the form `{source}/{model_name}`. For example `openai/gpt-4` or `mistralai/Mistral-7B-Instruct-v0.1` consistent with HuggingFace naming conventions.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/ai_retrieve_models_response',\n  $defs: {\n    ai_retrieve_models_response: {\n      type: 'object',\n      title: 'ModelsResponse',\n      properties: {\n        data: {\n          type: 'array',\n          title: 'Data',\n          items: {\n            type: 'object',\n            title: 'ModelMetadata',\n            properties: {\n              id: {\n                type: 'string',\n                title: 'Id'\n              },\n              created: {\n                type: 'integer',\n                title: 'Created'\n              },\n              owned_by: {\n                type: 'string',\n                title: 'Owned By'\n              },\n              object: {\n                type: 'string',\n                title: 'Object'\n              }\n            },\n            required: [              'id',\n              'created',\n              'owned_by'\n            ]\n          }\n        },\n        object: {\n          type: 'string',\n          title: 'Object'\n        }\n      },\n      required: [        'data'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.ai.retrieveModels()));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
