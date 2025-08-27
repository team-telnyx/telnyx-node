// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'ai.assistants.tests',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/ai/assistants/tests',
  operationId: 'create_assistant_test_public_assistants_tests_post',
};

export const tool: Tool = {
  name: 'create_assistants_ai_tests',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates a comprehensive test configuration for evaluating AI assistant performance\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/assistant_test',\n  $defs: {\n    assistant_test: {\n      type: 'object',\n      title: 'AssistantTestResponse',\n      description: 'Response model containing complete assistant test information.\\n\\nReturns all test configuration details including evaluation criteria,\\nscheduling, and metadata. Used when retrieving individual tests or\\nafter creating/updating tests.',\n      properties: {\n        created_at: {\n          type: 'string',\n          title: 'Created At',\n          description: 'Timestamp when the test was created.',\n          format: 'date-time'\n        },\n        name: {\n          type: 'string',\n          title: 'Name',\n          description: 'Human-readable name of the test.'\n        },\n        rubric: {\n          type: 'array',\n          title: 'Rubric',\n          description: 'Evaluation criteria used to assess test performance.',\n          items: {\n            type: 'object',\n            properties: {\n              criteria: {\n                type: 'string',\n                description: 'Specific guidance on how to assess the assistant’s performance for this rubric item.'\n              },\n              name: {\n                type: 'string',\n                description: 'Label for the evaluation criterion, e.g., Empathy, Accuracy, Clarity.'\n              }\n            },\n            required: [              'criteria',\n              'name'\n            ]\n          }\n        },\n        telnyx_conversation_channel: {\n          $ref: '#/$defs/telnyx_conversation_channel'\n        },\n        test_id: {\n          type: 'string',\n          title: 'Test Id',\n          description: 'Unique identifier for the assistant test.'\n        },\n        description: {\n          type: 'string',\n          title: 'Description',\n          description: 'Detailed description of the test\\'s purpose and scope.'\n        },\n        destination: {\n          type: 'string',\n          title: 'Destination',\n          description: 'Target destination for test conversations.'\n        },\n        instructions: {\n          type: 'string',\n          title: 'Instructions',\n          description: 'Detailed test scenario instructions and objectives.'\n        },\n        max_duration_seconds: {\n          type: 'integer',\n          title: 'Max Duration Seconds',\n          description: 'Maximum allowed duration for test execution in seconds.'\n        },\n        test_suite: {\n          type: 'string',\n          title: 'Test Suite',\n          description: 'Test suite grouping for organizational purposes.'\n        }\n      },\n      required: [        'created_at',\n        'name',\n        'rubric',\n        'telnyx_conversation_channel',\n        'test_id'\n      ]\n    },\n    telnyx_conversation_channel: {\n      type: 'string',\n      title: 'TelnyxConversationChannel',\n      enum: [        'phone_call',\n        'web_call',\n        'sms_chat',\n        'web_chat'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      destination: {
        type: 'string',
        title: 'Destination',
        description:
          'The target destination for the test conversation. Format depends on the channel: phone number for SMS/voice, webhook URL for web chat, etc.',
      },
      instructions: {
        type: 'string',
        title: 'Instructions',
        description:
          'Detailed instructions that define the test scenario and what the assistant should accomplish. This guides the test execution and evaluation.',
      },
      name: {
        type: 'string',
        title: 'Name',
        description:
          'A descriptive name for the assistant test. This will be used to identify the test in the UI and reports.',
      },
      rubric: {
        type: 'array',
        title: 'Rubric',
        description:
          "Evaluation criteria used to assess the assistant's performance. Each rubric item contains a name and specific criteria for evaluation.",
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
      description: {
        type: 'string',
        title: 'Description',
        description:
          "Optional detailed description of what this test evaluates and its purpose. Helps team members understand the test's objectives.",
      },
      max_duration_seconds: {
        type: 'integer',
        title: 'Max Duration Seconds',
        description:
          'Maximum duration in seconds that the test conversation should run before timing out. If not specified, uses system default timeout.',
      },
      telnyx_conversation_channel: {
        $ref: '#/$defs/telnyx_conversation_channel',
      },
      test_suite: {
        type: 'string',
        title: 'Test Suite',
        description:
          'Optional test suite name to group related tests together. Useful for organizing tests by feature, team, or release cycle.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['destination', 'instructions', 'name', 'rubric'],
    $defs: {
      telnyx_conversation_channel: {
        type: 'string',
        title: 'TelnyxConversationChannel',
        enum: ['phone_call', 'web_call', 'sms_chat', 'web_chat'],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.ai.assistants.tests.create(body)));
};

export default { metadata, tool, handler };
