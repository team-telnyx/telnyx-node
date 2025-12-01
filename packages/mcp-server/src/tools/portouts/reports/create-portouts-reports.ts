// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'portouts.reports',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/portouts/reports',
  operationId: 'CreatePortoutReport',
};

export const tool: Tool = {
  name: 'create_portouts_reports',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGenerate reports about port-out operations.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/report_create_response',\n  $defs: {\n    report_create_response: {\n      type: 'object',\n      properties: {\n        data: {\n          $ref: '#/$defs/portout_report'\n        }\n      }\n    },\n    portout_report: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Uniquely identifies the report.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the resource was created.',\n          format: 'date-time'\n        },\n        document_id: {\n          type: 'string',\n          description: 'Identifies the document that was uploaded when report was generated. This field is only populated when the report is under completed status.'\n        },\n        params: {\n          $ref: '#/$defs/export_portouts_csv_report'\n        },\n        record_type: {\n          type: 'string',\n          description: 'Identifies the type of the resource.'\n        },\n        report_type: {\n          type: 'string',\n          description: 'Identifies the type of report',\n          enum: [            'export_portouts_csv'\n          ]\n        },\n        status: {\n          type: 'string',\n          description: 'The current status of the report generation.',\n          enum: [            'pending',\n            'completed'\n          ]\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the resource was updated.',\n          format: 'date-time'\n        }\n      }\n    },\n    export_portouts_csv_report: {\n      type: 'object',\n      description: 'The parameters for generating a port-outs CSV report.',\n      properties: {\n        filters: {\n          type: 'object',\n          description: 'The filters to apply to the export port-out CSV report.',\n          properties: {\n            created_at__gt: {\n              type: 'string',\n              description: 'The date and time the port-out was created after.',\n              format: 'date-time'\n            },\n            created_at__lt: {\n              type: 'string',\n              description: 'The date and time the port-out was created before.',\n              format: 'date-time'\n            },\n            customer_reference__in: {\n              type: 'array',\n              description: 'The customer reference of the port-outs to include in the report.',\n              items: {\n                type: 'string'\n              }\n            },\n            end_user_name: {\n              type: 'string',\n              description: 'The end user name of the port-outs to include in the report.'\n            },\n            phone_numbers__overlaps: {\n              type: 'array',\n              description: 'A list of phone numbers that the port-outs phone numbers must overlap with.',\n              items: {\n                type: 'string'\n              }\n            },\n            status__in: {\n              type: 'array',\n              description: 'The status of the port-outs to include in the report.',\n              items: {\n                type: 'string',\n                enum: [                  'pending',\n                  'authorized',\n                  'ported',\n                  'rejected',\n                  'rejected-pending',\n                  'canceled'\n                ]\n              }\n            }\n          }\n        }\n      },\n      required: [        'filters'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      params: {
        $ref: '#/$defs/export_portouts_csv_report',
      },
      report_type: {
        type: 'string',
        description: 'Identifies the type of report',
        enum: ['export_portouts_csv'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['params', 'report_type'],
    $defs: {
      export_portouts_csv_report: {
        type: 'object',
        description: 'The parameters for generating a port-outs CSV report.',
        properties: {
          filters: {
            type: 'object',
            description: 'The filters to apply to the export port-out CSV report.',
            properties: {
              created_at__gt: {
                type: 'string',
                description: 'The date and time the port-out was created after.',
                format: 'date-time',
              },
              created_at__lt: {
                type: 'string',
                description: 'The date and time the port-out was created before.',
                format: 'date-time',
              },
              customer_reference__in: {
                type: 'array',
                description: 'The customer reference of the port-outs to include in the report.',
                items: {
                  type: 'string',
                },
              },
              end_user_name: {
                type: 'string',
                description: 'The end user name of the port-outs to include in the report.',
              },
              phone_numbers__overlaps: {
                type: 'array',
                description: 'A list of phone numbers that the port-outs phone numbers must overlap with.',
                items: {
                  type: 'string',
                },
              },
              status__in: {
                type: 'array',
                description: 'The status of the port-outs to include in the report.',
                items: {
                  type: 'string',
                  enum: ['pending', 'authorized', 'ported', 'rejected', 'rejected-pending', 'canceled'],
                },
              },
            },
          },
        },
        required: ['filters'],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.portouts.reports.create(body)));
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
