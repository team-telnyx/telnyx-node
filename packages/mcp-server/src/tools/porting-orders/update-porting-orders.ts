// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'porting_orders',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/porting_orders/{id}',
  operationId: 'UpdatePortingOrder',
};

export const tool: Tool = {
  name: 'update_porting_orders',
  description:
    'Edits the details of an existing porting order.\n\nAny or all of a porting orders attributes may be included in the resource object included in a PATCH request.\n\nIf a request does not include all of the attributes for a resource, the system will interpret the missing attributes as if they were included with their current values. To explicitly set something to null, it must be included in the request with a null value.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      activation_settings: {
        type: 'object',
        properties: {
          foc_datetime_requested: {
            type: 'string',
            description: 'ISO 8601 formatted Date/Time requested for the FOC date',
            format: 'date-time',
          },
        },
      },
      customer_reference: {
        type: 'string',
      },
      documents: {
        $ref: '#/$defs/porting_order_documents',
      },
      end_user: {
        $ref: '#/$defs/porting_order_end_user',
      },
      messaging: {
        type: 'object',
        properties: {
          enable_messaging: {
            type: 'boolean',
            description:
              'Indicates whether Telnyx will port messaging capabilities from the losing carrier. If false, any messaging capabilities will stay with their current provider.',
          },
        },
      },
      misc: {
        $ref: '#/$defs/porting_order_misc',
      },
      phone_number_configuration: {
        $ref: '#/$defs/porting_order_phone_number_configuration',
      },
      requirement_group_id: {
        type: 'string',
        description:
          'If present, we will read the current values from the specified Requirement Group into the Documents and Requirements for this Porting Order. Note that any future changes in the Requirement Group would have no impact on this Porting Order. We will return an error if a specified Requirement Group conflicts with documents or requirements in the same request.',
      },
      requirements: {
        type: 'array',
        description: 'List of requirements for porting numbers. ',
        items: {
          type: 'object',
          description: 'Specifies a value for a requirement on the Porting Order.',
          properties: {
            field_value: {
              type: 'string',
              description:
                'identifies the document or provides the text value that satisfies this requirement',
            },
            requirement_type_id: {
              type: 'string',
              description: 'Identifies the requirement type that the `field_value` fulfills',
            },
          },
          required: ['field_value', 'requirement_type_id'],
        },
      },
      user_feedback: {
        $ref: '#/$defs/porting_order_user_feedback',
      },
      webhook_url: {
        type: 'string',
      },
    },
    required: ['id'],
    $defs: {
      porting_order_documents: {
        type: 'object',
        description: 'Can be specified directly or via the `requirement_group_id` parameter.',
        properties: {
          invoice: {
            type: 'string',
            description: 'Returned ID of the submitted Invoice via the Documents endpoint',
          },
          loa: {
            type: 'string',
            description: 'Returned ID of the submitted LOA via the Documents endpoint',
          },
        },
      },
      porting_order_end_user: {
        type: 'object',
        properties: {
          admin: {
            $ref: '#/$defs/porting_order_end_user_admin',
          },
          location: {
            $ref: '#/$defs/porting_order_end_user_location',
          },
        },
      },
      porting_order_end_user_admin: {
        type: 'object',
        properties: {
          account_number: {
            type: 'string',
            description: "The authorized person's account number with the current service provider",
          },
          auth_person_name: {
            type: 'string',
            description: 'Name of person authorizing the porting order',
          },
          billing_phone_number: {
            type: 'string',
            description: 'Billing phone number associated with these phone numbers',
          },
          business_identifier: {
            type: 'string',
            description: 'European business identification number. Applicable only in the European Union',
          },
          entity_name: {
            type: 'string',
            description: 'Person Name or Company name requesting the port',
          },
          pin_passcode: {
            type: 'string',
            description: 'PIN/passcode possibly required by the old service provider for extra verification',
          },
          tax_identifier: {
            type: 'string',
            description: 'European tax identification number. Applicable only in the European Union',
          },
        },
      },
      porting_order_end_user_location: {
        type: 'object',
        properties: {
          administrative_area: {
            type: 'string',
            description: 'State, province, or similar of billing address',
          },
          country_code: {
            type: 'string',
            description: 'ISO3166-1 alpha-2 country code of billing address',
          },
          extended_address: {
            type: 'string',
            description: 'Second line of billing address',
          },
          locality: {
            type: 'string',
            description: 'City or municipality of billing address',
          },
          postal_code: {
            type: 'string',
            description: 'Postal Code of billing address',
          },
          street_address: {
            type: 'string',
            description: 'First line of billing address',
          },
        },
      },
      porting_order_misc: {
        type: 'object',
        properties: {
          new_billing_phone_number: {
            type: 'string',
            description:
              'New billing phone number for the remaining numbers. Used in case the current billing phone number is being ported to Telnyx. This will be set on your account with your current service provider and should be one of the numbers remaining on that account.',
          },
          remaining_numbers_action: {
            type: 'string',
            description:
              "Remaining numbers can be either kept with their current service provider or disconnected. 'new_billing_telephone_number' is required when 'remaining_numbers_action' is 'keep'.",
            enum: ['keep', 'disconnect'],
          },
          type: {
            $ref: '#/$defs/porting_order_type',
          },
        },
      },
      porting_order_type: {
        type: 'string',
        description:
          "A port can be either 'full' or 'partial'. When type is 'full' the other attributes should be omitted.",
        enum: ['full', 'partial'],
      },
      porting_order_phone_number_configuration: {
        type: 'object',
        properties: {
          billing_group_id: {
            type: 'string',
            description: 'identifies the billing group to set on the numbers when ported',
          },
          connection_id: {
            type: 'string',
            description: 'identifies the connection to set on the numbers when ported',
          },
          emergency_address_id: {
            type: 'string',
            description: 'identifies the emergency address to set on the numbers when ported',
          },
          messaging_profile_id: {
            type: 'string',
            description: 'identifies the messaging profile to set on the numbers when ported',
          },
          tags: {
            type: 'array',
            items: {
              type: 'string',
              description: 'Tag to set on the numbers when ported',
            },
          },
        },
      },
      porting_order_user_feedback: {
        type: 'object',
        properties: {
          user_comment: {
            type: 'string',
            description: 'A comment related to the customer rating.',
          },
          user_rating: {
            type: 'integer',
            description:
              'Once an order is ported, cancellation is requested or the request is cancelled, the user may rate their experience',
          },
        },
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.portingOrders.update(id, body));
};

export default { metadata, tool, handler };
