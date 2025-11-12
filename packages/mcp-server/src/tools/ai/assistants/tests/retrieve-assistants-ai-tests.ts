// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'ai.assistants.tests',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/ai/assistants/tests/{test_id}',
  operationId: 'get_assistant_test_public_assistants_tests__test_id__get',
};

export const tool: Tool = {
  name: 'retrieve_assistants_ai_tests',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves detailed information about a specific assistant test\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/assistant_test',\n  $defs: {\n    assistant_test: {\n      type: 'object',\n      title: 'AssistantTestResponse',\n      description: 'Response model containing complete assistant test information.\\n\\nReturns all test configuration details including evaluation criteria,\\nscheduling, and metadata. Used when retrieving individual tests or\\nafter creating/updating tests.',\n      properties: {\n        created_at: {\n          type: 'string',\n          title: 'Created At',\n          description: 'Timestamp when the test was created.',\n          format: 'date-time'\n        },\n        name: {\n          type: 'string',\n          title: 'Name',\n          description: 'Human-readable name of the test.'\n        },\n        rubric: {\n          type: 'array',\n          title: 'Rubric',\n          description: 'Evaluation criteria used to assess test performance.',\n          items: {\n            type: 'object',\n            properties: {\n              criteria: {\n                type: 'string',\n                description: 'Specific guidance on how to assess the assistant’s performance for this rubric item.'\n              },\n              name: {\n                type: 'string',\n                description: 'Label for the evaluation criterion, e.g., Empathy, Accuracy, Clarity.'\n              }\n            },\n            required: [              'criteria',\n              'name'\n            ]\n          }\n        },\n        telnyx_conversation_channel: {\n          $ref: '#/$defs/telnyx_conversation_channel'\n        },\n        test_id: {\n          type: 'string',\n          title: 'Test Id',\n          description: 'Unique identifier for the assistant test.'\n        },\n        description: {\n          type: 'string',\n          title: 'Description',\n          description: 'Detailed description of the test\\'s purpose and scope.'\n        },\n        destination: {\n          type: 'string',\n          title: 'Destination',\n          description: 'Target destination for test conversations.'\n        },\n        instructions: {\n          type: 'string',\n          title: 'Instructions',\n          description: 'Detailed test scenario instructions and objectives.'\n        },\n        max_duration_seconds: {\n          type: 'integer',\n          title: 'Max Duration Seconds',\n          description: 'Maximum allowed duration for test execution in seconds.'\n        },\n        test_suite: {\n          type: 'string',\n          title: 'Test Suite',\n          description: 'Test suite grouping for organizational purposes.'\n        }\n      },\n      required: [        'created_at',\n        'name',\n        'rubric',\n        'telnyx_conversation_channel',\n        'test_id'\n      ]\n    },\n    telnyx_conversation_channel: {\n      type: 'string',\n      title: 'TelnyxConversationChannel',\n      enum: [        'phone_call',\n        'web_call',\n        'sms_chat',\n        'web_chat'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      test_id: {
        type: 'string',
        title: 'Test Id',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['test_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { test_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.ai.assistants.tests.retrieve(test_id)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
