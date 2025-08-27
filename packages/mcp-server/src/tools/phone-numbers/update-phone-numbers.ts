// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'phone_numbers',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/phone_numbers/{id}',
  operationId: 'UpdatePhoneNumber',
};

export const tool: Tool = {
  name: 'update_phone_numbers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate a phone number\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'Phone Number Response',\n  properties: {\n    data: {\n      $ref: '#/$defs/phone_number_detailed'\n    }\n  },\n  $defs: {\n    phone_number_detailed: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifies the resource.'\n        },\n        billing_group_id: {\n          type: 'string',\n          description: 'Identifies the billing group associated with the phone number.'\n        },\n        call_forwarding_enabled: {\n          type: 'boolean',\n          description: 'Indicates if call forwarding will be enabled for this number if forwards_to and forwarding_type are filled in. Defaults to true for backwards compatibility with APIV1 use of numbers endpoints.'\n        },\n        call_recording_enabled: {\n          type: 'boolean',\n          description: 'Indicates whether call recording is enabled for this number.'\n        },\n        caller_id_name_enabled: {\n          type: 'boolean',\n          description: 'Indicates whether caller ID is enabled for this number.'\n        },\n        cnam_listing_enabled: {\n          type: 'boolean',\n          description: 'Indicates whether a CNAM listing is enabled for this number.'\n        },\n        connection_id: {\n          type: 'string',\n          description: 'Identifies the connection associated with the phone number.'\n        },\n        connection_name: {\n          type: 'string',\n          description: 'The user-assigned name of the connection to be associated with this phone number.'\n        },\n        country_iso_alpha2: {\n          type: 'string',\n          description: 'The ISO 3166-1 alpha-2 country code of the phone number.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the resource was created.'\n        },\n        customer_reference: {\n          type: 'string',\n          description: 'A customer reference string for customer look ups.'\n        },\n        emergency_address_id: {\n          type: 'string',\n          description: 'Identifies the emergency address associated with the phone number.'\n        },\n        emergency_enabled: {\n          type: 'boolean',\n          description: 'Indicates whether emergency services are enabled for this number.'\n        },\n        emergency_status: {\n          type: 'string',\n          description: 'Indicates the status of the provisioning of emergency services for the phone number. This field contains information about activity that may be ongoing for a number where it either is being provisioned or deprovisioned but is not yet enabled/disabled.',\n          enum: [            'active',\n            'deprovisioning',\n            'disabled',\n            'provisioning',\n            'provisioning-failed'\n          ]\n        },\n        external_pin: {\n          type: 'string',\n          description: 'If someone attempts to port your phone number away from Telnyx and your phone number has an external PIN set, Telnyx will attempt to verify that you provided the correct external PIN to the winning carrier. Note that not all carriers cooperate with this security mechanism.'\n        },\n        inbound_call_screening: {\n          type: 'string',\n          description: 'The inbound_call_screening setting is a phone number configuration option variable that allows users to configure their settings to block or flag fraudulent calls. It can be set to disabled, reject_calls, or flag_calls. This feature has an additional per-number monthly cost associated with it.',\n          enum: [            'disabled',\n            'reject_calls',\n            'flag_calls'\n          ]\n        },\n        messaging_profile_id: {\n          type: 'string',\n          description: 'Identifies the messaging profile associated with the phone number.'\n        },\n        messaging_profile_name: {\n          type: 'string',\n          description: 'The name of the messaging profile associated with the phone number.'\n        },\n        phone_number: {\n          type: 'string',\n          description: 'The +E.164-formatted phone number associated with this record.'\n        },\n        phone_number_type: {\n          type: 'string',\n          description: 'The phone number\\'s type.\\nNote: For numbers purchased prior to July 2023 or when fetching a number\\'s details immediately after a purchase completes, the legacy values `tollfree`, `shortcode` or `longcode` may be returned instead.',\n          enum: [            'local',\n            'toll_free',\n            'mobile',\n            'national',\n            'shared_cost',\n            'landline',\n            'tollfree',\n            'shortcode',\n            'longcode'\n          ]\n        },\n        purchased_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the resource was purchased.'\n        },\n        record_type: {\n          type: 'string',\n          description: 'Identifies the type of the resource.'\n        },\n        source_type: {\n          type: 'string',\n          description: 'Indicates if the phone number was purchased or ported in. For some numbers this information may not be available.',\n          enum: [            'number_order',\n            'port_request'\n          ]\n        },\n        status: {\n          type: 'string',\n          description: 'The phone number\\'s current status.',\n          enum: [            'purchase-pending',\n            'purchase-failed',\n            'port-pending',\n            'port-failed',\n            'active',\n            'deleted',\n            'emergency-only',\n            'ported-out',\n            'port-out-pending',\n            'requirement-info-pending',\n            'requirement-info-under-review',\n            'requirement-info-exception',\n            'provision-pending'\n          ]\n        },\n        t38_fax_gateway_enabled: {\n          type: 'boolean',\n          description: 'Indicates whether T38 Fax Gateway for inbound calls to this number.'\n        },\n        tags: {\n          type: 'array',\n          description: 'A list of user-assigned tags to help manage the phone number.',\n          items: {\n            type: 'string'\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      billing_group_id: {
        type: 'string',
        description: 'Identifies the billing group associated with the phone number.',
      },
      connection_id: {
        type: 'string',
        description: 'Identifies the connection associated with the phone number.',
      },
      customer_reference: {
        type: 'string',
        description: 'A customer reference string for customer look ups.',
      },
      external_pin: {
        type: 'string',
        description:
          'If someone attempts to port your phone number away from Telnyx and your phone number has an external PIN set, we will attempt to verify that you provided the correct external PIN to the winning carrier. Note that not all carriers cooperate with this security mechanism.',
      },
      hd_voice_enabled: {
        type: 'boolean',
        description: 'Indicates whether HD voice is enabled for this number.',
      },
      tags: {
        type: 'array',
        description: 'A list of user-assigned tags to help organize phone numbers.',
        items: {
          type: 'string',
        },
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
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.phoneNumbers.update(id, body)));
};

export default { metadata, tool, handler };
