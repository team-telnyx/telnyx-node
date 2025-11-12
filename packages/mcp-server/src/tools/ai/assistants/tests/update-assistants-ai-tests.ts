// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'ai.assistants.tests',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/ai/assistants/tests/{test_id}',
  operationId: 'update_assistant_test_public_assistants_tests__test_id__put',
};

export const tool: Tool = {
  name: 'update_assistants_ai_tests',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdates an existing assistant test configuration with new settings\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/assistant_test',\n  $defs: {\n    assistant_test: {\n      type: 'object',\n      title: 'AssistantTestResponse',\n      description: 'Response model containing complete assistant test information.\\n\\nReturns all test configuration details including evaluation criteria,\\nscheduling, and metadata. Used when retrieving individual tests or\\nafter creating/updating tests.',\n      properties: {\n        created_at: {\n          type: 'string',\n          title: 'Created At',\n          description: 'Timestamp when the test was created.',\n          format: 'date-time'\n        },\n        name: {\n          type: 'string',\n          title: 'Name',\n          description: 'Human-readable name of the test.'\n        },\n        rubric: {\n          type: 'array',\n          title: 'Rubric',\n          description: 'Evaluation criteria used to assess test performance.',\n          items: {\n            type: 'object',\n            properties: {\n              criteria: {\n                type: 'string',\n                description: 'Specific guidance on how to assess the assistant’s performance for this rubric item.'\n              },\n              name: {\n                type: 'string',\n                description: 'Label for the evaluation criterion, e.g., Empathy, Accuracy, Clarity.'\n              }\n            },\n            required: [              'criteria',\n              'name'\n            ]\n          }\n        },\n        telnyx_conversation_channel: {\n          $ref: '#/$defs/telnyx_conversation_channel'\n        },\n        test_id: {\n          type: 'string',\n          title: 'Test Id',\n          description: 'Unique identifier for the assistant test.'\n        },\n        description: {\n          type: 'string',\n          title: 'Description',\n          description: 'Detailed description of the test\\'s purpose and scope.'\n        },\n        destination: {\n          type: 'string',\n          title: 'Destination',\n          description: 'Target destination for test conversations.'\n        },\n        instructions: {\n          type: 'string',\n          title: 'Instructions',\n          description: 'Detailed test scenario instructions and objectives.'\n        },\n        max_duration_seconds: {\n          type: 'integer',\n          title: 'Max Duration Seconds',\n          description: 'Maximum allowed duration for test execution in seconds.'\n        },\n        test_suite: {\n          type: 'string',\n          title: 'Test Suite',\n          description: 'Test suite grouping for organizational purposes.'\n        }\n      },\n      required: [        'created_at',\n        'name',\n        'rubric',\n        'telnyx_conversation_channel',\n        'test_id'\n      ]\n    },\n    telnyx_conversation_channel: {\n      type: 'string',\n      title: 'TelnyxConversationChannel',\n      enum: [        'phone_call',\n        'web_call',\n        'sms_chat',\n        'web_chat'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      test_id: {
        type: 'string',
        title: 'Test Id',
      },
      description: {
        type: 'string',
        title: 'Description',
        description: "Updated description of the test's purpose and evaluation criteria.",
      },
      destination: {
        type: 'string',
        title: 'Destination',
        description: 'Updated target destination for test conversations.',
      },
      instructions: {
        type: 'string',
        title: 'Instructions',
        description: 'Updated test scenario instructions and objectives.',
      },
      max_duration_seconds: {
        type: 'integer',
        title: 'Max Duration Seconds',
        description: 'Updated maximum test duration in seconds.',
      },
      name: {
        type: 'string',
        title: 'Name',
        description: 'Updated name for the assistant test. Must be unique and descriptive.',
      },
      rubric: {
        type: 'array',
        title: 'Rubric',
        description: 'Updated evaluation criteria for assessing assistant performance.',
        items: {
          type: 'object',
          properties: {
            criteria: {
              type: 'string',
              description:
                'Specific guidance on how to assess the assistant’s performance for this rubric item.',
            },
            name: {
              type: 'string',
              description: 'Label for the evaluation criterion, e.g., Empathy, Accuracy, Clarity.',
            },
          },
          required: ['criteria', 'name'],
        },
      },
      telnyx_conversation_channel: {
        $ref: '#/$defs/telnyx_conversation_channel',
      },
      test_suite: {
        type: 'string',
        title: 'Test Suite',
        description: 'Updated test suite assignment for better organization.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['test_id'],
    $defs: {
      telnyx_conversation_channel: {
        type: 'string',
        title: 'TelnyxConversationChannel',
        enum: ['phone_call', 'web_call', 'sms_chat', 'web_chat'],
      },
    },
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { test_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.ai.assistants.tests.update(test_id, body)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
