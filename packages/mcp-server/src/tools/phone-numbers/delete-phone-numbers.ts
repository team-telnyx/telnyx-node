// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'phone_numbers',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/phone_numbers/{id}',
  operationId: 'DeletePhoneNumber',
};

export const tool: Tool = {
  name: 'delete_phone_numbers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nDelete a phone number\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/phone_number_delete_response',\n  $defs: {\n    phone_number_delete_response: {\n      type: 'object',\n      title: 'Phone Number Response',\n      properties: {\n        data: {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'Identifies the resource.'\n            },\n            billing_group_id: {\n              type: 'string',\n              description: 'Identifies the billing group associated with the phone number.'\n            },\n            call_forwarding_enabled: {\n              type: 'boolean',\n              description: 'Indicates if call forwarding will be enabled for this number if forwards_to and forwarding_type are filled in. Defaults to true for backwards compatibility with APIV1 use of numbers endpoints.'\n            },\n            call_recording_enabled: {\n              type: 'boolean',\n              description: 'Indicates whether call recording is enabled for this number.'\n            },\n            caller_id_name_enabled: {\n              type: 'boolean',\n              description: 'Indicates whether caller ID is enabled for this number.'\n            },\n            cnam_listing_enabled: {\n              type: 'boolean',\n              description: 'Indicates whether a CNAM listing is enabled for this number.'\n            },\n            connection_id: {\n              type: 'string',\n              description: 'Identifies the connection associated with the phone number.'\n            },\n            connection_name: {\n              type: 'string',\n              description: 'The user-assigned name of the connection to be associated with this phone number.'\n            },\n            created_at: {\n              type: 'string',\n              description: 'ISO 8601 formatted date indicating when the time it took to activate after the purchase.'\n            },\n            customer_reference: {\n              type: 'string',\n              description: 'A customer reference string for customer look ups.'\n            },\n            deletion_lock_enabled: {\n              type: 'boolean',\n              description: 'Indicates whether deletion lock is enabled for this number. When enabled, this prevents the phone number from being deleted via the API or Telnyx portal.'\n            },\n            emergency_address_id: {\n              type: 'string',\n              description: 'Identifies the emergency address associated with the phone number.'\n            },\n            emergency_enabled: {\n              type: 'boolean',\n              description: 'Indicates whether emergency services are enabled for this number.'\n            },\n            external_pin: {\n              type: 'string',\n              description: 'If someone attempts to port your phone number away from Telnyx and your phone number has an external PIN set, Telnyx will attempt to verify that you provided the correct external PIN to the winning carrier. Note that not all carriers cooperate with this security mechanism.'\n            },\n            messaging_profile_id: {\n              type: 'string',\n              description: 'Identifies the messaging profile associated with the phone number.'\n            },\n            messaging_profile_name: {\n              type: 'string',\n              description: 'The name of the messaging profile associated with the phone number.'\n            },\n            phone_number: {\n              type: 'string',\n              description: 'The +E.164-formatted phone number associated with this record.'\n            },\n            phone_number_type: {\n              type: 'string',\n              description: 'The phone number\\'s type.',\n              enum: [                'local',\n                'toll_free',\n                'mobile',\n                'national',\n                'shared_cost',\n                'landline'\n              ]\n            },\n            purchased_at: {\n              type: 'string',\n              description: 'ISO 8601 formatted date indicating the time the request was made to purchase the number.'\n            },\n            record_type: {\n              type: 'string',\n              description: 'Identifies the type of the resource.'\n            },\n            status: {\n              type: 'string',\n              description: 'The phone number\\'s current status.',\n              enum: [                'purchase-pending',\n                'purchase-failed',\n                'port-pending',\n                'port-failed',\n                'active',\n                'deleted',\n                'emergency-only',\n                'ported-out',\n                'port-out-pending'\n              ]\n            },\n            t38_fax_gateway_enabled: {\n              type: 'boolean',\n              description: 'Indicates whether T38 Fax Gateway for inbound calls to this number.'\n            },\n            tags: {\n              type: 'array',\n              description: 'A list of user-assigned tags to help manage the phone number.',\n              items: {\n                type: 'string'\n              }\n            },\n            updated_at: {\n              type: 'string',\n              description: 'ISO 8601 formatted date indicating when the resource was updated.'\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
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
    idempotentHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.phoneNumbers.delete(id)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
