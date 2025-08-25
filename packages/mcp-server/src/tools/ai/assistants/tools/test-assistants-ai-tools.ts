// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'ai.assistants.tools',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/ai/assistants/{assistant_id}/tools/{tool_id}/test',
  operationId: 'test_assistant_tool_public_assistants__assistant_id__tools__tool_id__test_post',
};

export const tool: Tool = {
  name: 'test_assistants_ai_tools',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTest a webhook tool for an assistant\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'TestWebhookToolResponseData',\n  description: 'Response model for webhook tool test results',\n  properties: {\n    data: {\n      type: 'object',\n      title: 'TestWebhookToolResponse',\n      description: 'Response model for webhook tool test results',\n      properties: {\n        content_type: {\n          type: 'string',\n          title: 'Content Type'\n        },\n        request: {\n          type: 'object',\n          title: 'Request',\n          additionalProperties: true\n        },\n        response: {\n          type: 'string',\n          title: 'Response'\n        },\n        status_code: {\n          type: 'integer',\n          title: 'Status Code'\n        },\n        success: {\n          type: 'boolean',\n          title: 'Success'\n        }\n      },\n      required: [        'content_type',\n        'request',\n        'response',\n        'status_code',\n        'success'\n      ]\n    }\n  },\n  required: [    'data'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      assistant_id: {
        type: 'string',
        title: 'Assistant Id',
      },
      tool_id: {
        type: 'string',
        title: 'Tool Id',
      },
      arguments: {
        type: 'object',
        title: 'Arguments',
        description: 'Key-value arguments to use for the webhook test',
        additionalProperties: true,
      },
      dynamic_variables: {
        type: 'object',
        title: 'Dynamic Variables',
        description: 'Key-value dynamic variables to use for the webhook test',
        additionalProperties: true,
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['assistant_id', 'tool_id'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { tool_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.ai.assistants.tools.test(tool_id, body)),
  );
};

export default { metadata, tool, handler };
