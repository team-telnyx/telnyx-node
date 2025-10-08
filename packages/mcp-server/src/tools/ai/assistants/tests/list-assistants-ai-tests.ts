// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'ai.assistants.tests',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/ai/assistants/tests',
  operationId: 'get_assistant_tests_public_assistants_tests_get',
};

export const tool: Tool = {
  name: 'list_assistants_ai_tests',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves a paginated list of assistant tests with optional filtering capabilities\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/test_list_response',\n  $defs: {\n    test_list_response: {\n      type: 'object',\n      title: 'PaginatedAssistantTestList',\n      description: 'Paginated list of assistant tests with metadata.\\n\\nReturns a subset of tests based on pagination parameters along with\\nmetadata for implementing pagination controls in the UI.',\n      properties: {\n        data: {\n          type: 'array',\n          title: 'Data',\n          description: 'Array of assistant test objects for the current page.',\n          items: {\n            $ref: '#/$defs/assistant_test'\n          }\n        },\n        meta: {\n          $ref: '#/$defs/meta'\n        }\n      },\n      required: [        'data',\n        'meta'\n      ]\n    },\n    assistant_test: {\n      type: 'object',\n      title: 'AssistantTestResponse',\n      description: 'Response model containing complete assistant test information.\\n\\nReturns all test configuration details including evaluation criteria,\\nscheduling, and metadata. Used when retrieving individual tests or\\nafter creating/updating tests.',\n      properties: {\n        created_at: {\n          type: 'string',\n          title: 'Created At',\n          description: 'Timestamp when the test was created.',\n          format: 'date-time'\n        },\n        name: {\n          type: 'string',\n          title: 'Name',\n          description: 'Human-readable name of the test.'\n        },\n        rubric: {\n          type: 'array',\n          title: 'Rubric',\n          description: 'Evaluation criteria used to assess test performance.',\n          items: {\n            type: 'object',\n            properties: {\n              criteria: {\n                type: 'string',\n                description: 'Specific guidance on how to assess the assistant’s performance for this rubric item.'\n              },\n              name: {\n                type: 'string',\n                description: 'Label for the evaluation criterion, e.g., Empathy, Accuracy, Clarity.'\n              }\n            },\n            required: [              'criteria',\n              'name'\n            ]\n          }\n        },\n        telnyx_conversation_channel: {\n          $ref: '#/$defs/telnyx_conversation_channel'\n        },\n        test_id: {\n          type: 'string',\n          title: 'Test Id',\n          description: 'Unique identifier for the assistant test.'\n        },\n        description: {\n          type: 'string',\n          title: 'Description',\n          description: 'Detailed description of the test\\'s purpose and scope.'\n        },\n        destination: {\n          type: 'string',\n          title: 'Destination',\n          description: 'Target destination for test conversations.'\n        },\n        instructions: {\n          type: 'string',\n          title: 'Instructions',\n          description: 'Detailed test scenario instructions and objectives.'\n        },\n        max_duration_seconds: {\n          type: 'integer',\n          title: 'Max Duration Seconds',\n          description: 'Maximum allowed duration for test execution in seconds.'\n        },\n        test_suite: {\n          type: 'string',\n          title: 'Test Suite',\n          description: 'Test suite grouping for organizational purposes.'\n        }\n      },\n      required: [        'created_at',\n        'name',\n        'rubric',\n        'telnyx_conversation_channel',\n        'test_id'\n      ]\n    },\n    telnyx_conversation_channel: {\n      type: 'string',\n      title: 'TelnyxConversationChannel',\n      enum: [        'phone_call',\n        'web_call',\n        'sms_chat',\n        'web_chat'\n      ]\n    },\n    meta: {\n      type: 'object',\n      title: 'Meta',\n      properties: {\n        page_number: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        total_pages: {\n          type: 'integer'\n        },\n        total_results: {\n          type: 'integer'\n        }\n      },\n      required: [        'page_number',\n        'page_size',\n        'total_pages',\n        'total_results'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      destination: {
        type: 'string',
        title: 'Destination',
        description: 'Filter tests by destination (phone number, webhook URL, etc.)',
      },
      page: {
        type: 'object',
        description: 'Consolidated page parameter (deepObject style). Originally: page[size], page[number]',
        properties: {
          number: {
            type: 'integer',
            title: 'Page[Number]',
            description: 'Page number to retrieve (1-based indexing)',
          },
          size: {
            type: 'integer',
            title: 'Page[Size]',
            description: 'Number of tests to return per page (1-100)',
          },
        },
      },
      telnyx_conversation_channel: {
        type: 'string',
        title: 'Telnyx Conversation Channel',
        description: "Filter tests by communication channel (e.g., 'web_chat', 'sms')",
      },
      test_suite: {
        type: 'string',
        title: 'Test Suite',
        description: 'Filter tests by test suite name',
      },
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
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.ai.assistants.tests.list(body)));
};

export default { metadata, tool, handler };
