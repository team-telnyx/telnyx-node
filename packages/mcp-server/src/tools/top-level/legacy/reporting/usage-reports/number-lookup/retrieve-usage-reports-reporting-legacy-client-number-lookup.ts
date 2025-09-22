// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: '$client.legacy.reporting.usage_reports.number_lookup',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/legacy/reporting/usage_reports/number_lookup/{id}',
  operationId: 'getTelcoDataUsageReport',
};

export const tool: Tool = {
  name: 'retrieve_usage_reports_reporting_legacy_client_number_lookup',
  description: 'Retrieve a specific telco data usage report by its ID',
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
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  const response = await client.client.legacy.reporting.usageReports.numberLookup.retrieve(id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
