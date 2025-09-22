// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: '$client.legacy.reporting.usage_reports.number_lookup',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/legacy/reporting/usage_reports/number_lookup',
  operationId: 'getTelcoDataUsageReports',
};

export const tool: Tool = {
  name: 'list_usage_reports_reporting_legacy_client_number_lookup',
  description: 'Retrieve a paginated list of telco data usage reports',
  inputSchema: {
    type: 'object',
    properties: {
      page: {
        type: 'integer',
      },
      per_page: {
        type: 'integer',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.client.legacy.reporting.usageReports.numberLookup.list(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
