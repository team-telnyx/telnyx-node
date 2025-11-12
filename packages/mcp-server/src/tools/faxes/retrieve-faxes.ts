// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'faxes',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/faxes/{id}',
  operationId: 'ViewFax',
};

export const tool: Tool = {
  name: 'retrieve_faxes',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nView a fax\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/fax_retrieve_response',\n  $defs: {\n    fax_retrieve_response: {\n      type: 'object',\n      title: 'Get Fax Response',\n      properties: {\n        data: {\n          $ref: '#/$defs/fax'\n        }\n      }\n    },\n    fax: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifies the type of resource.'\n        },\n        client_state: {\n          type: 'string',\n          description: 'State received from a command.'\n        },\n        connection_id: {\n          type: 'string',\n          description: 'The ID of the connection used to send the fax.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 timestamp when resource was created',\n          format: 'date-time'\n        },\n        direction: {\n          type: 'string',\n          description: 'The direction of the fax.',\n          enum: [            'inbound',\n            'outbound'\n          ]\n        },\n        from: {\n          type: 'string',\n          description: 'The phone number, in E.164 format, the fax will be sent from.'\n        },\n        from_display_name: {\n          type: 'string',\n          description: 'The string used as the caller id name (SIP From Display Name) presented to the destination (`to` number).'\n        },\n        media_name: {\n          type: 'string',\n          description: 'The media_name used for the fax\\'s media. Must point to a file previously uploaded to api.telnyx.com/v2/media by the same user/organization. media_name and media_url/contents can\\'t be submitted together.'\n        },\n        media_url: {\n          type: 'string',\n          description: 'The URL (or list of URLs) to the PDF used for the fax\\'s media. media_url and media_name/contents can\\'t be submitted together.'\n        },\n        preview_url: {\n          type: 'string',\n          description: 'If `store_preview` was set to `true`, this is a link to temporary location. Link expires after 10 minutes.'\n        },\n        quality: {\n          type: 'string',\n          description: 'The quality of the fax. The `ultra` settings provides the highest quality available, but also present longer fax processing times. `ultra_light` is best suited for images, wihle `ultra_dark` is best suited for text.',\n          enum: [            'normal',\n            'high',\n            'very_high',\n            'ultra_light',\n            'ultra_dark'\n          ]\n        },\n        record_type: {\n          type: 'string',\n          description: 'Identifies the type of the resource.',\n          enum: [            'fax'\n          ]\n        },\n        status: {\n          type: 'string',\n          description: 'Status of the fax',\n          enum: [            'queued',\n            'media.processed',\n            'originated',\n            'sending',\n            'delivered',\n            'failed',\n            'initiated',\n            'receiving',\n            'media.processing',\n            'received'\n          ]\n        },\n        store_media: {\n          type: 'boolean',\n          description: 'Should fax media be stored on temporary URL. It does not support media_name.'\n        },\n        stored_media_url: {\n          type: 'string',\n          description: 'If store_media was set to true, this is a link to temporary location. Link expires after 10 minutes.'\n        },\n        to: {\n          type: 'string',\n          description: 'The phone number, in E.164 format, the fax will be sent to or SIP URI'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 timestamp when resource was updated',\n          format: 'date-time'\n        },\n        webhook_failover_url: {\n          type: 'string',\n          description: 'Optional failover URL that will receive fax webhooks if webhook_url doesn\\'t return a 2XX response'\n        },\n        webhook_url: {\n          type: 'string',\n          description: 'URL that will receive fax webhooks'\n        }\n      }\n    }\n  }\n}\n```",
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
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.faxes.retrieve(id)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
