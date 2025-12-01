// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'ai.assistants.tests.test_suites',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/ai/assistants/tests/test-suites',
  operationId: 'fetch_test_suites_public_assistants_tests_test_suites_get',
};

export const tool: Tool = {
  name: 'list_tests_assistants_ai_test_suites',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves a list of all distinct test suite names available to the current user\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/test_suite_list_response',\n  $defs: {\n    test_suite_list_response: {\n      type: 'object',\n      title: 'TestSuitesResponse',\n      description: 'Response containing all available test suite names.\\n\\nReturns a list of distinct test suite names that can be used for\\nfiltering and organizing tests.',\n      properties: {\n        data: {\n          type: 'array',\n          title: 'Data',\n          description: 'Array of unique test suite names available to the user.',\n          items: {\n            type: 'string'\n          }\n        }\n      },\n      required: [        'data'\n      ]\n    }\n  }\n}\n```",
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
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.ai.assistants.tests.testSuites.list()),
    );
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
