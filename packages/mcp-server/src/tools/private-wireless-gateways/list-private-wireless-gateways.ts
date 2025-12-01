// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'private_wireless_gateways',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/private_wireless_gateways',
  operationId: 'GetPrivateWirelessGateways',
};

export const tool: Tool = {
  name: 'list_private_wireless_gateways',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet all Private Wireless Gateways belonging to the user.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/private_wireless_gateway_list_response',\n  $defs: {\n    private_wireless_gateway_list_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/private_wireless_gateway'\n          }\n        },\n        meta: {\n          $ref: '#/$defs/pagination_meta'\n        }\n      }\n    },\n    private_wireless_gateway: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifies the resource.'\n        },\n        assigned_resources: {\n          type: 'array',\n          description: 'A list of the resources that have been assigned to the Private Wireless Gateway.',\n          items: {\n            $ref: '#/$defs/pwg_assigned_resources_summary'\n          }\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date-time indicating when the resource was created.'\n        },\n        ip_range: {\n          type: 'string',\n          description: 'IP block used to assign IPs to the SIM cards in the Private Wireless Gateway.'\n        },\n        name: {\n          type: 'string',\n          description: 'The private wireless gateway name.'\n        },\n        network_id: {\n          type: 'string',\n          description: 'The identification of the related network resource.'\n        },\n        record_type: {\n          type: 'string'\n        },\n        region_code: {\n          type: 'string',\n          description: 'The name of the region where the Private Wireless Gateway is deployed.'\n        },\n        status: {\n          $ref: '#/$defs/private_wireless_gateway_status'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date-time indicating when the resource was updated.'\n        }\n      }\n    },\n    pwg_assigned_resources_summary: {\n      type: 'object',\n      description: 'The summary of the resource that have been assigned to the Private Wireless Gateway.',\n      properties: {\n        count: {\n          type: 'integer',\n          description: 'The current count of a resource type assigned to the Private Wireless Gateway.'\n        },\n        record_type: {\n          type: 'string',\n          description: 'The type of the resource assigned to the Private Wireless Gateway.'\n        }\n      }\n    },\n    private_wireless_gateway_status: {\n      type: 'object',\n      description: 'The current status or failure details of the Private Wireless Gateway.',\n      properties: {\n        error_code: {\n          type: 'string',\n          description: 'This attribute is an [error code](https://developers.telnyx.com/api/errors) related to the failure reason.'\n        },\n        error_description: {\n          type: 'string',\n          description: 'This attribute provides a human-readable explanation of why a failure happened.'\n        },\n        value: {\n          type: 'string',\n          description: 'The current status or failure details of the Private Wireless Gateway. <ul>\\n <li><code>provisioning</code> - the Private Wireless Gateway is being provisioned.</li>\\n <li><code>provisioned</code> - the Private Wireless Gateway was provisioned and able to receive connections.</li>\\n <li><code>failed</code> - the provisioning had failed for a reason and it requires an intervention.</li>\\n <li><code>decommissioning</code> - the Private Wireless Gateway is being removed from the network.</li>\\n </ul>\\n Transitioning between the provisioning and provisioned states may take some time.',\n          enum: [            'provisioning',\n            'provisioned',\n            'failed',\n            'decommissioning'\n          ]\n        }\n      }\n    },\n    pagination_meta: {\n      type: 'object',\n      properties: {\n        page_number: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        total_pages: {\n          type: 'integer'\n        },\n        total_results: {\n          type: 'integer'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      'filter[created_at]': {
        type: 'string',
        description: 'Private Wireless Gateway resource creation date.',
      },
      'filter[ip_range]': {
        type: 'string',
        description: 'The IP address range of the Private Wireless Gateway.',
      },
      'filter[name]': {
        type: 'string',
        description: 'The name of the Private Wireless Gateway.',
      },
      'filter[region_code]': {
        type: 'string',
        description: 'The name of the region where the Private Wireless Gateway is deployed.',
      },
      'filter[updated_at]': {
        type: 'string',
        description: 'When the Private Wireless Gateway was last updated.',
      },
      'page[number]': {
        type: 'integer',
        description: 'The page number to load.',
      },
      'page[size]': {
        type: 'integer',
        description: 'The size of the page.',
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
    return asTextContentResult(await maybeFilter(jq_filter, await client.privateWirelessGateways.list(body)));
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
