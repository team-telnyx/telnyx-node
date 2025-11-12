// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'ai.assistants.tests.test_suites.runs',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/ai/assistants/tests/test-suites/{suite_name}/runs',
  operationId: 'get_test_suite_runs_for_test_public_assistants_tests_test_suites__suite_name__runs_get',
};

export const tool: Tool = {
  name: 'list_test_suites_tests_assistants_ai_runs',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves paginated history of test runs for a specific test suite with filtering options\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/paginated_test_run_list',\n  $defs: {\n    paginated_test_run_list: {\n      type: 'object',\n      title: 'PaginatedTestRunList',\n      description: 'Paginated list of test runs with metadata.\\n\\nReturns test run execution results with pagination support for\\nhandling large numbers of test executions.',\n      properties: {\n        data: {\n          type: 'array',\n          title: 'Data',\n          description: 'Array of test run objects for the current page.',\n          items: {\n            $ref: '#/$defs/test_run_response'\n          }\n        },\n        meta: {\n          $ref: '#/$defs/meta'\n        }\n      },\n      required: [        'data',\n        'meta'\n      ]\n    },\n    test_run_response: {\n      type: 'object',\n      title: 'TestRunResponse',\n      description: 'Response model containing test run execution details and results.\\n\\nProvides comprehensive information about a test execution including\\nstatus, timing, logs, and detailed evaluation results.',\n      properties: {\n        created_at: {\n          type: 'string',\n          title: 'Created At',\n          description: 'Timestamp when the test run was created and queued.',\n          format: 'date-time'\n        },\n        run_id: {\n          type: 'string',\n          title: 'Run Id',\n          description: 'Unique identifier for this specific test run execution.'\n        },\n        status: {\n          $ref: '#/$defs/test_status'\n        },\n        test_id: {\n          type: 'string',\n          title: 'Test Id',\n          description: 'Identifier of the assistant test that was executed.'\n        },\n        triggered_by: {\n          type: 'string',\n          title: 'Triggered By',\n          description: 'How this test run was initiated (manual, scheduled, or API).'\n        },\n        completed_at: {\n          type: 'string',\n          title: 'Completed At',\n          description: 'Timestamp when the test run finished execution.',\n          format: 'date-time'\n        },\n        conversation_id: {\n          type: 'string',\n          title: 'Conversation Id',\n          description: 'Identifier of the conversation created during test execution.'\n        },\n        conversation_insights_id: {\n          type: 'string',\n          title: 'Conversation Insights Id',\n          description: 'Identifier for conversation analysis and insights data.'\n        },\n        detail_status: {\n          type: 'array',\n          title: 'Detail Status',\n          description: 'Detailed evaluation results for each rubric criteria. Name is name of the criteria from the rubric and status is the result of the evaluation. This list will have a result for every criteria in the rubric section.',\n          items: {\n            type: 'object',\n            title: 'TestRunDetailResult',\n            properties: {\n              name: {\n                type: 'string',\n                title: 'Name'\n              },\n              status: {\n                $ref: '#/$defs/test_status'\n              }\n            },\n            required: [              'name',\n              'status'\n            ]\n          }\n        },\n        logs: {\n          type: 'string',\n          title: 'Logs',\n          description: 'Detailed execution logs and debug information.'\n        },\n        test_suite_run_id: {\n          type: 'string',\n          title: 'Test Suite Run Id',\n          description: 'Identifier linking this run to a test suite execution batch.'\n        },\n        updated_at: {\n          type: 'string',\n          title: 'Updated At',\n          description: 'Timestamp of the last update to this test run.',\n          format: 'date-time'\n        }\n      },\n      required: [        'created_at',\n        'run_id',\n        'status',\n        'test_id',\n        'triggered_by'\n      ]\n    },\n    test_status: {\n      type: 'string',\n      title: 'TestStatus',\n      description: 'Represents the lifecycle of a test:\\n  - \\'pending\\': Test is waiting to be executed.\\n  - \\'starting\\': Test execution is initializing.\\n  - \\'running\\': Test is currently executing.\\n  - \\'passed\\': Test completed successfully.\\n  - \\'failed\\': Test executed but did not pass.\\n  - \\'error\\': An error occurred during test execution.',\n      enum: [        'pending',\n        'starting',\n        'running',\n        'passed',\n        'failed',\n        'error'\n      ]\n    },\n    meta: {\n      type: 'object',\n      title: 'Meta',\n      properties: {\n        page_number: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        total_pages: {\n          type: 'integer'\n        },\n        total_results: {\n          type: 'integer'\n        }\n      },\n      required: [        'page_number',\n        'page_size',\n        'total_pages',\n        'total_results'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      suite_name: {
        type: 'string',
        title: 'Suite Name',
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
            description: 'Number of test runs to return per page (1-100)',
          },
        },
      },
      status: {
        type: 'string',
        title: 'Status',
        description: 'Filter runs by execution status (pending, running, completed, failed, timeout)',
      },
      test_suite_run_id: {
        type: 'string',
        title: 'Test Suite Run Id',
        description: 'Filter runs by specific suite execution batch ID',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['suite_name'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { suite_name, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.ai.assistants.tests.testSuites.runs.list(suite_name, body)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
