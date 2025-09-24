// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'legacy.reporting.batch_detail_records.voice',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/legacy/reporting/batch_detail_records/voice/fields',
  operationId: 'getCdrsAvailableFields',
};

export const tool: Tool = {
  name: 'retrieve_fields_batch_detail_records_reporting_legacy_voice',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves all available fields that can be used in CDR reports\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'Available CDR report fields grouped by category',\n  properties: {\n    Billing: {\n      type: 'array',\n      description: 'Cost and billing related information',\n      items: {\n        type: 'string'\n      }\n    },\n    'Interaction Data': {\n      type: 'array',\n      description: 'Fields related to call interaction and basic call information',\n      items: {\n        type: 'string'\n      }\n    },\n    'Number Information': {\n      type: 'array',\n      description: 'Geographic and routing information for phone numbers',\n      items: {\n        type: 'string'\n      }\n    },\n    'Telephony Data': {\n      type: 'array',\n      description: 'Technical telephony and call control information',\n      items: {\n        type: 'string'\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.legacy.reporting.batchDetailRecords.voice.retrieveFields()),
  );
};

export default { metadata, tool, handler };
