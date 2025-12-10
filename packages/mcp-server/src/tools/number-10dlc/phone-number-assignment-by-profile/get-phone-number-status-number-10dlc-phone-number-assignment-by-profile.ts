// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'number_10dlc.phone_number_assignment_by_profile',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/10dlc/phoneNumberAssignmentByProfile/{taskId}/phoneNumbers',
  operationId: 'GetPhoneNumberStatus',
};

export const tool: Tool = {
  name: 'get_phone_number_status_number_10dlc_phone_number_assignment_by_profile',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCheck the status of the individual phone number/campaign assignments associated with the supplied `taskId`.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/phone_number_assignment_by_profile_get_phone_number_status_response',\n  $defs: {\n    phone_number_assignment_by_profile_get_phone_number_status_response: {\n      type: 'object',\n      title: 'PhoneNumberStatusResponsePaginated',\n      properties: {\n        records: {\n          type: 'array',\n          title: 'Records',\n          items: {\n            type: 'object',\n            title: 'ProfileAssignmentPhoneNumbers',\n            properties: {\n              phoneNumber: {\n                type: 'string',\n                title: 'Phonenumber',\n                description: 'The phone number that the status is being checked for.'\n              },\n              status: {\n                type: 'string',\n                title: 'Status',\n                description: 'The status of the associated phone number assignment.'\n              },\n              taskId: {\n                type: 'string',\n                title: 'Taskid',\n                description: 'The ID of the task associated with the phone number.'\n              }\n            },\n            required: [              'phoneNumber',\n              'status',\n              'taskId'\n            ]\n          }\n        }\n      },\n      required: [        'records'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      taskId: {
        type: 'string',
        title: 'Taskid',
      },
      page: {
        type: 'integer',
        title: 'Page',
      },
      recordsPerPage: {
        type: 'integer',
        title: 'Recordsperpage',
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
      await maybeFilter(
        jq_filter,
        await client.number10dlc.phoneNumberAssignmentByProfile.getPhoneNumberStatus(taskId, body),
      ),
    );
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
