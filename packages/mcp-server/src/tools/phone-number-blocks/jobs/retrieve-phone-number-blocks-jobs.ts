// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'phone_number_blocks.jobs',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/phone_number_blocks/jobs/{id}',
  operationId: 'GetPhoneNumberBlocksJob',
};

export const tool: Tool = {
  name: 'retrieve_phone_number_blocks_jobs',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves a phone number blocks job\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/job_retrieve_response',\n  $defs: {\n    job_retrieve_response: {\n      type: 'object',\n      title: 'Phone Number Blocks Job',\n      properties: {\n        data: {\n          $ref: '#/$defs/job'\n        }\n      }\n    },\n    job: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifies the resource.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the resource was created.'\n        },\n        etc: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the estimated time of completion of the background job.',\n          format: 'date-time'\n        },\n        failed_operations: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'The phone number\\'s ID'\n              },\n              errors: {\n                type: 'array',\n                items: {\n                  type: 'object',\n                  properties: {\n                    code: {\n                      type: 'string'\n                    },\n                    title: {\n                      type: 'string'\n                    },\n                    detail: {\n                      type: 'string'\n                    },\n                    meta: {\n                      type: 'object',\n                      properties: {\n                        url: {\n                          type: 'string',\n                          description: 'URL with additional information on the error.'\n                        }\n                      }\n                    },\n                    source: {\n                      type: 'object',\n                      properties: {\n                        parameter: {\n                          type: 'string',\n                          description: 'Indicates which query parameter caused the error.'\n                        },\n                        pointer: {\n                          type: 'string',\n                          description: 'JSON pointer (RFC6901) to the offending entity.'\n                        }\n                      }\n                    }\n                  },\n                  required: [                    'code',\n                    'title'\n                  ]\n                }\n              },\n              phone_number: {\n                type: 'string',\n                description: 'The phone number in e164 format.'\n              }\n            }\n          }\n        },\n        record_type: {\n          type: 'string',\n          description: 'Identifies the type of the resource.'\n        },\n        status: {\n          type: 'string',\n          description: 'Indicates the completion status of the background operation.',\n          enum: [            'pending',\n            'in_progress',\n            'completed',\n            'failed'\n          ]\n        },\n        successful_operations: {\n          type: 'array',\n          items: {\n            type: 'object',\n            description: 'The phone numbers successfully updated.',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'The phone number\\'s ID'\n              },\n              phone_number: {\n                type: 'string',\n                description: 'The phone number in e164 format.'\n              }\n            }\n          }\n        },\n        type: {\n          type: 'string',\n          description: 'Identifies the type of the background job.',\n          enum: [            'delete_phone_number_block'\n          ]\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the resource was updated.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.phoneNumberBlocks.jobs.retrieve(id)));
};

export default { metadata, tool, handler };
