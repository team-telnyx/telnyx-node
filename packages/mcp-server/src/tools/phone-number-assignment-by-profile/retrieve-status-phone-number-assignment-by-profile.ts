// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'phone_number_assignment_by_profile',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/10dlc/phoneNumberAssignmentByProfile/{taskId}',
  operationId: 'GetAssignmentTaskStatus',
};

export const tool: Tool = {
  name: 'retrieve_status_phone_number_assignment_by_profile',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCheck the status of the task associated with assigning all phone numbers on a messaging profile to a campaign by `taskId`.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/phone_number_assignment_by_profile_retrieve_status_response',\n  $defs: {\n    phone_number_assignment_by_profile_retrieve_status_response: {\n      type: 'object',\n      title: 'AssignmentTaskStatusResponse',\n      properties: {\n        status: {\n          type: 'string',\n          title: 'TaskStatus',\n          description: 'An enumeration.',\n          enum: [            'pending',\n            'processing',\n            'completed',\n            'failed'\n          ]\n        },\n        taskId: {\n          type: 'string',\n          title: 'Taskid'\n        },\n        createdAt: {\n          type: 'string',\n          title: 'Createdat',\n          format: 'date-time'\n        },\n        updatedAt: {\n          type: 'string',\n          title: 'Updatedat',\n          format: 'date-time'\n        }\n      },\n      required: [        'status',\n        'taskId'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      taskId: {
        type: 'string',
        title: 'Taskid',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['taskId'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { taskId, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.phoneNumberAssignmentByProfile.retrieveStatus(taskId)),
    );
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
