// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'telephony_credentials',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/telephony_credentials',
  operationId: 'FindTelephonyCredentials',
};

export const tool: Tool = {
  name: 'list_telephony_credentials',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList all On-demand Credentials.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'Get All Telephony Credential Response',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/telephony_credential'\n      }\n    },\n    meta: {\n      $ref: '#/$defs/pagination_meta'\n    }\n  },\n  $defs: {\n    telephony_credential: {\n      type: 'object',\n      title: 'On-demand Credential',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifies the resource.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO-8601 formatted date indicating when the resource was created.'\n        },\n        expired: {\n          type: 'boolean',\n          description: 'Defaults to false'\n        },\n        expires_at: {\n          type: 'string',\n          description: 'ISO-8601 formatted date indicating when the resource will expire.'\n        },\n        name: {\n          type: 'string'\n        },\n        record_type: {\n          type: 'string',\n          description: 'Identifies the type of the resource.'\n        },\n        resource_id: {\n          type: 'string',\n          description: 'Identifies the resource this credential is associated with.'\n        },\n        sip_password: {\n          type: 'string',\n          description: 'The randomly generated SIP password for the credential.'\n        },\n        sip_username: {\n          type: 'string',\n          description: 'The randomly generated SIP username for the credential.'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO-8601 formatted date indicating when the resource was updated.'\n        }\n      }\n    },\n    pagination_meta: {\n      type: 'object',\n      properties: {\n        page_number: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        total_pages: {\n          type: 'integer'\n        },\n        total_results: {\n          type: 'integer'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      filter: {
        type: 'object',
        description:
          'Consolidated filter parameter (deepObject style). Originally: filter[tag], filter[name], filter[status], filter[resource_id], filter[sip_username]',
        properties: {
          name: {
            type: 'string',
            description: 'Filter by name',
          },
          resource_id: {
            type: 'string',
            description: 'Filter by resource_id',
          },
          sip_username: {
            type: 'string',
            description: 'Filter by sip_username',
          },
          status: {
            type: 'string',
            description: 'Filter by status',
          },
          tag: {
            type: 'string',
            description: 'Filter by tag',
          },
        },
      },
      page: {
        type: 'object',
        description: 'Consolidated page parameter (deepObject style). Originally: page[number], page[size]',
        properties: {
          number: {
            type: 'integer',
            description: 'The page number to load',
          },
          size: {
            type: 'integer',
            description: 'The size of the page',
          },
        },
      },
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
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.telephonyCredentials.list(body)));
};

export default { metadata, tool, handler };
