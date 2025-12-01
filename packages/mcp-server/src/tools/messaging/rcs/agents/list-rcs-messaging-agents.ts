// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'messaging.rcs.agents',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/messaging/rcs/agents',
};

export const tool: Tool = {
  name: 'list_rcs_messaging_agents',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList all RCS agents\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/agent_list_response',\n  $defs: {\n    agent_list_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/rcs_agent'\n          }\n        },\n        meta: {\n          $ref: '#/$defs/pagination_meta'\n        }\n      }\n    },\n    rcs_agent: {\n      type: 'object',\n      properties: {\n        agent_id: {\n          type: 'string',\n          description: 'RCS Agent ID'\n        },\n        agent_name: {\n          type: 'string',\n          description: 'Human readable agent name'\n        },\n        created_at: {\n          type: 'string',\n          description: 'Date and time when the resource was created',\n          format: 'date-time'\n        },\n        enabled: {\n          type: 'boolean',\n          description: 'Specifies whether the agent is enabled'\n        },\n        profile_id: {\n          type: 'string',\n          description: 'Messaging profile ID associated with the RCS Agent'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'Date and time when the resource was updated',\n          format: 'date-time'\n        },\n        user_id: {\n          type: 'string',\n          description: 'User ID associated with the RCS Agent'\n        },\n        webhook_failover_url: {\n          type: 'string',\n          description: 'Failover URL to receive RCS events'\n        },\n        webhook_url: {\n          type: 'string',\n          description: 'URL to receive RCS events'\n        }\n      }\n    },\n    pagination_meta: {\n      type: 'object',\n      properties: {\n        page_number: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        total_pages: {\n          type: 'integer'\n        },\n        total_results: {\n          type: 'integer'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
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
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.messaging.rcs.agents.list(body)));
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
