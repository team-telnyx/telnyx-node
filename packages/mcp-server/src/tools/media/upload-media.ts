// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'media',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/media',
  operationId: 'CreateMediaStorage',
};

export const tool: Tool = {
  name: 'upload_media',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpload media file to Telnyx so it can be used with other Telnyx services\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/media_upload_response',\n  $defs: {\n    media_upload_response: {\n      type: 'object',\n      title: 'Media resource response',\n      properties: {\n        data: {\n          $ref: '#/$defs/media_resource'\n        }\n      }\n    },\n    media_resource: {\n      type: 'object',\n      title: 'Media Resource',\n      properties: {\n        content_type: {\n          type: 'string',\n          description: 'Content type of the file'\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date of when the media resource was created'\n        },\n        expires_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date of when the media resource will expire and be deleted.'\n        },\n        media_name: {\n          type: 'string',\n          description: 'Uniquely identifies a media resource.'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date of when the media resource was last updated'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      media_url: {
        type: 'string',
        description:
          'The URL where the media to be stored in Telnyx network is currently hosted. The maximum allowed size is 20 MB.',
      },
      media_name: {
        type: 'string',
        description: 'The unique identifier of a file.',
      },
      ttl_secs: {
        type: 'integer',
        description:
          'The number of seconds after which the media resource will be deleted, defaults to 2 days. The maximum allowed vale is 630720000, which translates to 20 years.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['media_url'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.media.upload(body)));
};

export default { metadata, tool, handler };
