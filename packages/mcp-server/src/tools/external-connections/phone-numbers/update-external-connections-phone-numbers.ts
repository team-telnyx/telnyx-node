// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'external_connections.phone_numbers',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/external_connections/{id}/phone_numbers/{phone_number_id}',
  operationId: 'UpdateExternalConnectionPhoneNumber',
};

export const tool: Tool = {
  name: 'update_external_connections_phone_numbers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nAsynchronously update settings of the phone number associated with the given external connection.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/phone_number_update_response',\n  $defs: {\n    phone_number_update_response: {\n      type: 'object',\n      title: 'Get External Connection Phone Number Response',\n      properties: {\n        data: {\n          $ref: '#/$defs/external_connection_phone_number'\n        }\n      }\n    },\n    external_connection_phone_number: {\n      type: 'object',\n      title: 'Phone number details with relation to an external connection',\n      properties: {\n        acquired_capabilities: {\n          type: 'array',\n          items: {\n            type: 'string',\n            description: 'The capabilities that are available for this phone number on Microsoft Teams.',\n            enum: [              'FirstPartyAppAssignment',\n              'InboundCalling',\n              'Office365',\n              'OutboundCalling',\n              'UserAssignment'\n            ]\n          }\n        },\n        civic_address_id: {\n          type: 'string',\n          description: 'Identifies the civic address assigned to the phone number.'\n        },\n        displayed_country_code: {\n          type: 'string',\n          description: 'The iso country code that will be displayed to the user when they receive a call from this phone number.'\n        },\n        location_id: {\n          type: 'string',\n          description: 'Identifies the location assigned to the phone number.'\n        },\n        number_id: {\n          type: 'string',\n          description: 'Phone number ID from the Telnyx API.'\n        },\n        telephone_number: {\n          type: 'string',\n          description: 'Phone number in E164 format.'\n        },\n        ticket_id: {\n          type: 'string',\n          title: 'UUID',\n          description: 'Uniquely identifies the resource.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      phone_number_id: {
        type: 'string',
      },
      location_id: {
        type: 'string',
        description: 'Identifies the location to assign the phone number to.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id', 'phone_number_id'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { phone_number_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.externalConnections.phoneNumbers.update(phone_number_id, body)),
  );
};

export default { metadata, tool, handler };
