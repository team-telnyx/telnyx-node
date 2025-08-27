// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'ledger_billing_group_reports',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/ledger_billing_group_reports/{id}',
  operationId: 'GetBillingGroupReport',
};

export const tool: Tool = {
  name: 'retrieve_ledger_billing_group_reports',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a ledger billing group report\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      $ref: '#/$defs/ledger_billing_group_report'\n    }\n  },\n  $defs: {\n    ledger_billing_group_report: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifies the type of resource.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the resource was created.',\n          format: 'date-time'\n        },\n        organization_id: {\n          type: 'string',\n          description: 'Uniquely identifies the organization that owns the resource.'\n        },\n        record_type: {\n          type: 'string',\n          description: 'Identifies the type of the resource.',\n          enum: [            'ledger_billing_group_report'\n          ]\n        },\n        report_url: {\n          type: 'string',\n          description: 'External url of the ledger billing group report, if the status is complete'\n        },\n        status: {\n          type: 'string',\n          description: 'Status of the ledger billing group report',\n          enum: [            'pending',\n            'complete',\n            'failed',\n            'deleted'\n          ]\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the resource was updated.',\n          format: 'date-time'\n        }\n      }\n    }\n  }\n}\n```",
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
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.ledgerBillingGroupReports.retrieve(id)),
  );
};

export default { metadata, tool, handler };
