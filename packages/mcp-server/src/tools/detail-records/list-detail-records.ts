// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'detail_records',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/detail_records',
  operationId: 'SearchDetailRecords',
};

export const tool: Tool = {
  name: 'list_detail_records',
  description: 'Search for any detail record across the Telnyx Platform',
  inputSchema: {
    type: 'object',
    properties: {
      filter: {
        type: 'object',
        description:
          'Filter records on a given record attribute and value. <br/>Example: filter[status]=delivered. <br/>Required: filter[record_type] must be specified.',
        properties: {
          record_type: {
            type: 'string',
            description: 'Filter by the given record type.',
            enum: [
              'ai-voice-assistant',
              'amd',
              'call-control',
              'conference',
              'conference-participant',
              'embedding',
              'fax',
              'inference',
              'inference-speech-to-text',
              'media_storage',
              'media-streaming',
              'messaging',
              'noise-suppression',
              'recording',
              'sip-trunking',
              'siprec-client',
              'stt',
              'tts',
              'verify',
              'webrtc',
              'wireless',
            ],
          },
          date_range: {
            type: 'string',
            description:
              'Filter by the given user-friendly date range. You can specify one of the following enum values, or a dynamic one using this format: last_N_days.',
            enum: [
              'yesterday',
              'today',
              'tomorrow',
              'last_week',
              'this_week',
              'next_week',
              'last_month',
              'this_month',
              'next_month',
            ],
          },
        },
        required: ['record_type'],
      },
      'page[number]': {
        type: 'integer',
      },
      'page[size]': {
        type: 'integer',
      },
      sort: {
        type: 'array',
        description: 'Specifies the sort order for results. <br/>Example: sort=-created_at',
        items: {
          type: 'string',
        },
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
  const response = await client.detailRecords.list(body).asResponse();
  try {
    return asTextContentResult(await response.json());
  } catch (error) {
    if (error instanceof Telnyx.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
