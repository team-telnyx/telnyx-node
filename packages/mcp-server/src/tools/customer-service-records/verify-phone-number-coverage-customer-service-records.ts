// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'customer_service_records',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/customer_service_records/phone_number_coverages',
  operationId: 'VerifyPhoneNumberCoverage',
};

export const tool: Tool = {
  name: 'verify_phone_number_coverage_customer_service_records',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nVerify the coverage for a list of phone numbers.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          additional_data_required: {\n            type: 'array',\n            description: 'Additional data required to perform CSR for the phone number. Only returned if `has_csr_coverage` is true.',\n            items: {\n              type: 'string',\n              enum: [                'name',\n                'authorized_person_name',\n                'account_number',\n                'customer_code',\n                'pin',\n                'address_line_1',\n                'city',\n                'state',\n                'zip_code',\n                'billing_phone_number'\n              ]\n            }\n          },\n          has_csr_coverage: {\n            type: 'boolean',\n            description: 'Indicates whether the phone number is covered or not.'\n          },\n          phone_number: {\n            type: 'string',\n            description: 'The phone number that is being verified.'\n          },\n          reason: {\n            type: 'string',\n            description: 'The reason why the phone number is not covered. Only returned if `has_csr_coverage` is false.'\n          },\n          record_type: {\n            type: 'string',\n            description: 'Identifies the type of the resource.'\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      phone_numbers: {
        type: 'array',
        description: 'The phone numbers list to be verified.',
        items: {
          type: 'string',
          description: 'A valid US phone number in E164 format.',
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['phone_numbers'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.customerServiceRecords.verifyPhoneNumberCoverage(body)),
  );
};

export default { metadata, tool, handler };
