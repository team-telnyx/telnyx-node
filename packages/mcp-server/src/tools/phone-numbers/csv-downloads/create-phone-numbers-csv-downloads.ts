// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'phone_numbers.csv_downloads',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/phone_numbers/csv_downloads',
  operationId: 'CreateCsvDownload',
};

export const tool: Tool = {
  name: 'create_phone_numbers_csv_downloads',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a CSV download\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'CSV Download Response',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/csv_download'\n      }\n    }\n  },\n  $defs: {\n    csv_download: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifies the resource.'\n        },\n        record_type: {\n          type: 'string',\n          description: 'Identifies the type of the resource.'\n        },\n        status: {\n          type: 'string',\n          description: 'Indicates the completion level of the CSV report. Only complete CSV download requests will be able to be retrieved.',\n          enum: [            'pending',\n            'complete',\n            'failed',\n            'expired'\n          ]\n        },\n        url: {\n          type: 'string',\n          description: 'The URL at which the CSV file can be retrieved.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      csv_format: {
        type: 'string',
        description:
          "Which format to use when generating the CSV file. The default for backwards compatibility is 'V1'",
        enum: ['V1', 'V2'],
      },
      filter: {
        type: 'object',
        description:
          'Consolidated filter parameter (deepObject style). Originally: filter[has_bundle], filter[tag], filter[connection_id], filter[phone_number], filter[status], filter[voice.connection_name], filter[voice.usage_payment_method], filter[billing_group_id], filter[emergency_address_id], filter[customer_reference]',
        properties: {
          billing_group_id: {
            type: 'string',
            description:
              "Filter by the billing_group_id associated with phone numbers. To filter to only phone numbers that have no billing group associated them, set the value of this filter to the string 'null'.",
          },
          connection_id: {
            type: 'string',
            description: 'Filter by connection_id.',
          },
          customer_reference: {
            type: 'string',
            description: 'Filter numbers via the customer_reference set.',
          },
          emergency_address_id: {
            type: 'string',
            description:
              "Filter by the emergency_address_id associated with phone numbers. To filter only phone numbers that have no emergency address associated with them, set the value of this filter to the string 'null'.",
          },
          has_bundle: {
            type: 'string',
            description: 'Filter by phone number that have bundles.',
          },
          phone_number: {
            type: 'string',
            description:
              'Filter by phone number. Requires at least three digits.\n             Non-numerical characters will result in no values being returned.',
          },
          status: {
            type: 'string',
            description: 'Filter by phone number status.',
            enum: [
              'purchase-pending',
              'purchase-failed',
              'port-pending',
              'active',
              'deleted',
              'port-failed',
              'emergency-only',
              'ported-out',
              'port-out-pending',
            ],
          },
          tag: {
            type: 'string',
            description: 'Filter by phone number tags.',
          },
          'voice.connection_name': {
            type: 'object',
            description: 'Filter by voice connection name pattern matching.',
            properties: {
              contains: {
                type: 'string',
                description: 'Filter contains connection name. Requires at least three characters.',
              },
              ends_with: {
                type: 'string',
                description: 'Filter ends with connection name. Requires at least three characters.',
              },
              eq: {
                type: 'string',
                description: 'Filter by connection name.',
              },
              starts_with: {
                type: 'string',
                description: 'Filter starts with connection name. Requires at least three characters.',
              },
            },
          },
          'voice.usage_payment_method': {
            type: 'string',
            description: 'Filter by usage_payment_method.',
            enum: ['pay-per-minute', 'channel'],
          },
        },
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
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.phoneNumbers.csvDownloads.create(body)),
  );
};

export default { metadata, tool, handler };
