// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'porting.reports',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/porting/reports/{id}',
  operationId: 'GetPortingReport',
};

export const tool: Tool = {
  name: 'retrieve_porting_reports',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve a specific report generated.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/report_retrieve_response',\n  $defs: {\n    report_retrieve_response: {\n      type: 'object',\n      properties: {\n        data: {\n          $ref: '#/$defs/porting_report'\n        }\n      }\n    },\n    porting_report: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Uniquely identifies the report.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the resource was created.',\n          format: 'date-time'\n        },\n        document_id: {\n          type: 'string',\n          description: 'Identifies the document that was uploaded when report was generated. This field is only populated when the report is under completed status.'\n        },\n        params: {\n          $ref: '#/$defs/export_porting_orders_csv_report'\n        },\n        record_type: {\n          type: 'string',\n          description: 'Identifies the type of the resource.'\n        },\n        report_type: {\n          type: 'string',\n          description: 'Identifies the type of report',\n          enum: [            'export_porting_orders_csv'\n          ]\n        },\n        status: {\n          type: 'string',\n          description: 'The current status of the report generation.',\n          enum: [            'pending',\n            'completed'\n          ]\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the resource was updated.',\n          format: 'date-time'\n        }\n      }\n    },\n    export_porting_orders_csv_report: {\n      type: 'object',\n      description: 'The parameters for generating a porting orders CSV report.',\n      properties: {\n        filters: {\n          type: 'object',\n          description: 'The filters to apply to the export porting order CSV report.',\n          properties: {\n            created_at__gt: {\n              type: 'string',\n              description: 'The date and time the porting order was created after.',\n              format: 'date-time'\n            },\n            created_at__lt: {\n              type: 'string',\n              description: 'The date and time the porting order was created before.',\n              format: 'date-time'\n            },\n            customer_reference__in: {\n              type: 'array',\n              description: 'The customer reference of the porting orders to include in the report.',\n              items: {\n                type: 'string'\n              }\n            },\n            status__in: {\n              type: 'array',\n              description: 'The status of the porting orders to include in the report.',\n              items: {\n                type: 'string',\n                enum: [                  'draft',\n                  'in-process',\n                  'submitted',\n                  'exception',\n                  'foc-date-confirmed',\n                  'cancel-pending',\n                  'ported',\n                  'cancelled'\n                ]\n              }\n            }\n          }\n        }\n      },\n      required: [        'filters'\n      ]\n    }\n  }\n}\n```",
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.porting.reports.retrieve(id)));
};

export default { metadata, tool, handler };
