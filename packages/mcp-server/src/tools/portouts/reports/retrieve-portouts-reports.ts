// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'portouts.reports',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/portouts/reports/{id}',
  operationId: 'GetPortoutReport',
};

export const tool: Tool = {
  name: 'retrieve_portouts_reports',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve a specific report generated.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      $ref: '#/$defs/portout_report'\n    }\n  },\n  $defs: {\n    portout_report: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Uniquely identifies the report.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the resource was created.',\n          format: 'date-time'\n        },\n        document_id: {\n          type: 'string',\n          description: 'Identifies the document that was uploaded when report was generated. This field is only populated when the report is under completed status.'\n        },\n        params: {\n          $ref: '#/$defs/export_portouts_csv_report'\n        },\n        record_type: {\n          type: 'string',\n          description: 'Identifies the type of the resource.'\n        },\n        report_type: {\n          type: 'string',\n          description: 'Identifies the type of report',\n          enum: [            'export_portouts_csv'\n          ]\n        },\n        status: {\n          type: 'string',\n          description: 'The current status of the report generation.',\n          enum: [            'pending',\n            'completed'\n          ]\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the resource was updated.',\n          format: 'date-time'\n        }\n      }\n    },\n    export_portouts_csv_report: {\n      type: 'object',\n      description: 'The parameters for generating a port-outs CSV report.',\n      properties: {\n        filters: {\n          type: 'object',\n          description: 'The filters to apply to the export port-out CSV report.',\n          properties: {\n            created_at__gt: {\n              type: 'string',\n              description: 'The date and time the port-out was created after.',\n              format: 'date-time'\n            },\n            created_at__lt: {\n              type: 'string',\n              description: 'The date and time the port-out was created before.',\n              format: 'date-time'\n            },\n            customer_reference__in: {\n              type: 'array',\n              description: 'The customer reference of the port-outs to include in the report.',\n              items: {\n                type: 'string'\n              }\n            },\n            end_user_name: {\n              type: 'string',\n              description: 'The end user name of the port-outs to include in the report.'\n            },\n            phone_numbers__overlaps: {\n              type: 'array',\n              description: 'A list of phone numbers that the port-outs phone numbers must overlap with.',\n              items: {\n                type: 'string'\n              }\n            },\n            status__in: {\n              type: 'array',\n              description: 'The status of the port-outs to include in the report.',\n              items: {\n                type: 'string',\n                enum: [                  'pending',\n                  'authorized',\n                  'ported',\n                  'rejected',\n                  'rejected-pending',\n                  'canceled'\n                ]\n              }\n            }\n          }\n        }\n      },\n      required: [        'filters'\n      ]\n    }\n  }\n}\n```",
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.portouts.reports.retrieve(id)));
};

export default { metadata, tool, handler };
