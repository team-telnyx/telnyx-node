// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'portouts',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/portouts/{id}/{status}',
  operationId: 'UpdatePortoutStatus',
};

export const tool: Tool = {
  name: 'update_status_portouts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nAuthorize or reject portout request\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      $ref: '#/$defs/portout_details'\n    }\n  },\n  $defs: {\n    portout_details: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        already_ported: {\n          type: 'boolean',\n          description: 'Is true when the number is already ported'\n        },\n        authorized_name: {\n          type: 'string',\n          description: 'Name of person authorizing the porting order'\n        },\n        carrier_name: {\n          type: 'string',\n          description: 'Carrier the number will be ported out to'\n        },\n        city: {\n          type: 'string',\n          description: 'City or municipality of billing address'\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date of when the portout was created'\n        },\n        current_carrier: {\n          type: 'string',\n          description: 'The current carrier'\n        },\n        end_user_name: {\n          type: 'string',\n          description: 'Person name or company name requesting the port'\n        },\n        foc_date: {\n          type: 'string',\n          description: 'ISO 8601 formatted Date/Time of the FOC date'\n        },\n        host_messaging: {\n          type: 'boolean',\n          description: 'Indicates whether messaging services should be maintained with Telnyx after the port out completes'\n        },\n        inserted_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date of when the portout was created'\n        },\n        lsr: {\n          type: 'array',\n          description: 'The Local Service Request',\n          items: {\n            type: 'string',\n            description: 'A link to the Local Service Request'\n          }\n        },\n        phone_numbers: {\n          type: 'array',\n          description: 'Phone numbers associated with this portout',\n          items: {\n            type: 'string',\n            description: 'E164 formatted phone number'\n          }\n        },\n        pon: {\n          type: 'string',\n          description: 'Port order number assigned by the carrier the number will be ported out to'\n        },\n        reason: {\n          type: 'string',\n          description: 'The reason why the order is being rejected by the user. If the order is authorized, this field can be left null'\n        },\n        record_type: {\n          type: 'string',\n          description: 'Identifies the type of the resource.'\n        },\n        rejection_code: {\n          type: 'integer',\n          description: 'The rejection code for one of the valid rejections to reject a port out order'\n        },\n        requested_foc_date: {\n          type: 'string',\n          description: 'ISO 8601 formatted Date/Time of the user requested FOC date'\n        },\n        service_address: {\n          type: 'string',\n          description: 'First line of billing address (street address)'\n        },\n        spid: {\n          type: 'string',\n          description: 'New service provider spid'\n        },\n        state: {\n          type: 'string',\n          description: 'State, province, or similar of billing address'\n        },\n        status: {\n          type: 'string',\n          description: 'Status of portout request',\n          enum: [            'pending',\n            'authorized',\n            'ported',\n            'rejected',\n            'rejected-pending',\n            'canceled'\n          ]\n        },\n        support_key: {\n          type: 'string',\n          description: 'A key to reference this port out request when contacting Telnyx customer support'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date of when the portout was last updated'\n        },\n        user_id: {\n          type: 'string',\n          description: 'Identifies the user (or organization) who requested the port out'\n        },\n        vendor: {\n          type: 'string',\n          description: 'Telnyx partner providing network coverage'\n        },\n        zip: {\n          type: 'string',\n          description: 'Postal Code of billing address'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      status: {
        type: 'string',
        enum: ['authorized', 'rejected-pending'],
      },
      reason: {
        type: 'string',
        description: 'Provide a reason if rejecting the port out request',
      },
      host_messaging: {
        type: 'boolean',
        description:
          'Indicates whether messaging services should be maintained with Telnyx after the port out completes',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id', 'status', 'reason'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { status, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.portouts.updateStatus(status, body)));
};

export default { metadata, tool, handler };
