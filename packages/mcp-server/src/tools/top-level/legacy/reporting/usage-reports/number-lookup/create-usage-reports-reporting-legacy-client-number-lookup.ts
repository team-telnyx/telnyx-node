// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: '$client.legacy.reporting.usage_reports.number_lookup',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/legacy/reporting/usage_reports/number_lookup',
  operationId: 'submitTelcoDataUsageReport',
};

export const tool: Tool = {
  name: 'create_usage_reports_reporting_legacy_client_number_lookup',
  description: 'Submit a new telco data usage report',
  inputSchema: {
    type: 'object',
    properties: {
      aggregationType: {
        type: 'string',
        description: 'Type of aggregation for the report',
        enum: ['ALL', 'BY_ORGANIZATION_MEMBER'],
      },
      endDate: {
        type: 'string',
        description: 'End date for the usage report',
        format: 'date',
      },
      managedAccounts: {
        type: 'array',
        description: 'List of managed accounts to include in the report',
        items: {
          type: 'string',
        },
      },
      startDate: {
        type: 'string',
        description: 'Start date for the usage report',
        format: 'date',
      },
    },
    required: [],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.client.legacy.reporting.usageReports.numberLookup.create(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
