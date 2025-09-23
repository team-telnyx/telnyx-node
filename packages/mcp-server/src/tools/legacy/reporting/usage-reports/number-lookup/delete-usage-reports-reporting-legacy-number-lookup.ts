// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'legacy.reporting.usage_reports.number_lookup',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/legacy/reporting/usage_reports/number_lookup/{id}',
  operationId: 'deleteTelcoDataUsageReport',
};

export const tool: Tool = {
  name: 'delete_usage_reports_reporting_legacy_number_lookup',
  description: 'Delete a specific telco data usage report by its ID',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
    },
    required: ['id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  const response = await client.legacy.reporting.usageReports.numberLookup.delete(id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
