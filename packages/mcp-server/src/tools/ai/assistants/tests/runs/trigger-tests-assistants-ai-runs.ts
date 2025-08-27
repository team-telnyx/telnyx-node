// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'ai.assistants.tests.runs',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/ai/assistants/tests/{test_id}/runs',
  operationId: 'trigger_test_run_public_assistants_tests__test_id__runs_post',
};

export const tool: Tool = {
  name: 'trigger_tests_assistants_ai_runs',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nInitiates immediate execution of a specific assistant test\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/test_run_response',\n  $defs: {\n    test_run_response: {\n      type: 'object',\n      title: 'TestRunResponse',\n      description: 'Response model containing test run execution details and results.\\n\\nProvides comprehensive information about a test execution including\\nstatus, timing, logs, and detailed evaluation results.',\n      properties: {\n        created_at: {\n          type: 'string',\n          title: 'Created At',\n          description: 'Timestamp when the test run was created and queued.',\n          format: 'date-time'\n        },\n        run_id: {\n          type: 'string',\n          title: 'Run Id',\n          description: 'Unique identifier for this specific test run execution.'\n        },\n        status: {\n          $ref: '#/$defs/test_status'\n        },\n        test_id: {\n          type: 'string',\n          title: 'Test Id',\n          description: 'Identifier of the assistant test that was executed.'\n        },\n        triggered_by: {\n          type: 'string',\n          title: 'Triggered By',\n          description: 'How this test run was initiated (manual, scheduled, or API).'\n        },\n        completed_at: {\n          type: 'string',\n          title: 'Completed At',\n          description: 'Timestamp when the test run finished execution.',\n          format: 'date-time'\n        },\n        conversation_id: {\n          type: 'string',\n          title: 'Conversation Id',\n          description: 'Identifier of the conversation created during test execution.'\n        },\n        conversation_insights_id: {\n          type: 'string',\n          title: 'Conversation Insights Id',\n          description: 'Identifier for conversation analysis and insights data.'\n        },\n        detail_status: {\n          type: 'array',\n          title: 'Detail Status',\n          description: 'Detailed evaluation results for each rubric criteria. Name is name of the criteria from the rubric and status is the result of the evaluation. This list will have a result for every criteria in the rubric section.',\n          items: {\n            type: 'object',\n            title: 'TestRunDetailResult',\n            properties: {\n              name: {\n                type: 'string',\n                title: 'Name'\n              },\n              status: {\n                $ref: '#/$defs/test_status'\n              }\n            },\n            required: [              'name',\n              'status'\n            ]\n          }\n        },\n        logs: {\n          type: 'string',\n          title: 'Logs',\n          description: 'Detailed execution logs and debug information.'\n        },\n        test_suite_run_id: {\n          type: 'string',\n          title: 'Test Suite Run Id',\n          description: 'Identifier linking this run to a test suite execution batch.'\n        },\n        updated_at: {\n          type: 'string',\n          title: 'Updated At',\n          description: 'Timestamp of the last update to this test run.',\n          format: 'date-time'\n        }\n      },\n      required: [        'created_at',\n        'run_id',\n        'status',\n        'test_id',\n        'triggered_by'\n      ]\n    },\n    test_status: {\n      type: 'string',\n      title: 'TestStatus',\n      description: 'Represents the lifecycle of a test:\\n  - \\'pending\\': Test is waiting to be executed.\\n  - \\'starting\\': Test execution is initializing.\\n  - \\'running\\': Test is currently executing.\\n  - \\'passed\\': Test completed successfully.\\n  - \\'failed\\': Test executed but did not pass.\\n  - \\'error\\': An error occurred during test execution.',\n      enum: [        'pending',\n        'starting',\n        'running',\n        'passed',\n        'failed',\n        'error'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      test_id: {
        type: 'string',
        title: 'Test Id',
      },
      destination_version_id: {
        type: 'string',
        title: 'Destination Version Id',
        description:
          'Optional assistant version ID to use for this test run. If provided, the version must exist or a 400 error will be returned. If not provided, test will run on main version',
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
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { test_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.ai.assistants.tests.runs.trigger(test_id, body)),
  );
};

export default { metadata, tool, handler };
