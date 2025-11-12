// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'phone_numbers.messaging',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/phone_numbers/{id}/messaging',
  operationId: 'GetPhoneNumberMessagingSettings',
};

export const tool: Tool = {
  name: 'retrieve_phone_numbers_messaging',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve a phone number with messaging settings\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/messaging_retrieve_response',\n  $defs: {\n    messaging_retrieve_response: {\n      type: 'object',\n      title: 'Retrieve Messaging Settings Response',\n      properties: {\n        data: {\n          $ref: '#/$defs/phone_number_with_messaging_settings'\n        }\n      }\n    },\n    phone_number_with_messaging_settings: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifies the type of resource.'\n        },\n        country_code: {\n          type: 'string',\n          description: 'ISO 3166-1 alpha-2 country code.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the resource was created.',\n          format: 'date-time'\n        },\n        eligible_messaging_products: {\n          type: 'array',\n          description: 'The messaging products that this number can be registered to use',\n          items: {\n            type: 'string'\n          }\n        },\n        features: {\n          type: 'object',\n          properties: {\n            mms: {\n              $ref: '#/$defs/messaging_feature_set'\n            },\n            sms: {\n              $ref: '#/$defs/messaging_feature_set'\n            }\n          }\n        },\n        health: {\n          $ref: '#/$defs/number_health_metrics'\n        },\n        messaging_product: {\n          type: 'string',\n          description: 'The messaging product that the number is registered to use'\n        },\n        messaging_profile_id: {\n          type: 'string',\n          description: 'Unique identifier for a messaging profile.'\n        },\n        phone_number: {\n          type: 'string',\n          description: '+E.164 formatted phone number.'\n        },\n        record_type: {\n          type: 'string',\n          description: 'Identifies the type of the resource.',\n          enum: [            'messaging_phone_number',\n            'messaging_settings'\n          ]\n        },\n        traffic_type: {\n          type: 'string',\n          description: 'The messaging traffic or use case for which the number is currently configured.'\n        },\n        type: {\n          type: 'string',\n          description: 'The type of the phone number',\n          enum: [            'long-code',\n            'toll-free',\n            'short-code',\n            'longcode',\n            'tollfree',\n            'shortcode'\n          ]\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the resource was updated.',\n          format: 'date-time'\n        }\n      }\n    },\n    messaging_feature_set: {\n      type: 'object',\n      description: 'The set of features available for a specific messaging use case (SMS or MMS). Features\\ncan vary depending on the characteristics the phone number, as well as its current\\nproduct configuration.\\n',\n      properties: {\n        domestic_two_way: {\n          type: 'boolean',\n          description: 'Send messages to and receive messages from numbers in the same country.'\n        },\n        international_inbound: {\n          type: 'boolean',\n          description: 'Receive messages from numbers in other countries.'\n        },\n        international_outbound: {\n          type: 'boolean',\n          description: 'Send messages to numbers in other countries.'\n        }\n      },\n      required: [        'domestic_two_way',\n        'international_inbound',\n        'international_outbound'\n      ]\n    },\n    number_health_metrics: {\n      type: 'object',\n      description: 'High level health metrics about the number and it\\'s messaging sending patterns.\\n',\n      properties: {\n        inbound_outbound_ratio: {\n          type: 'number',\n          description: 'The ratio of messages received to the number of messages sent.'\n        },\n        message_count: {\n          type: 'integer',\n          description: 'The number of messages analyzed for the health metrics.'\n        },\n        spam_ratio: {\n          type: 'number',\n          description: 'The ratio of messages blocked for spam to the number of messages attempted.'\n        },\n        success_ratio: {\n          type: 'number',\n          description: 'The ratio of messages sucessfully delivered to the number of messages attempted.'\n        }\n      },\n      required: [        'inbound_outbound_ratio',\n        'message_count',\n        'spam_ratio',\n        'success_ratio'\n      ]\n    }\n  }\n}\n```",
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
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.phoneNumbers.messaging.retrieve(id)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
