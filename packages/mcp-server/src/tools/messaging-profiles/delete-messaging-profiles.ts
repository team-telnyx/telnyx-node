// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'messaging_profiles',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/messaging_profiles/{id}',
  operationId: 'DeleteMessagingProfile',
};

export const tool: Tool = {
  name: 'delete_messaging_profiles',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nDelete a messaging profile\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'Messaging Profile Response',\n  properties: {\n    data: {\n      $ref: '#/$defs/messaging_profile'\n    }\n  },\n  $defs: {\n    messaging_profile: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifies the type of resource.'\n        },\n        alpha_sender: {\n          type: 'string',\n          description: 'The alphanumeric sender ID to use when sending to destinations that require an alphanumeric sender ID.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the resource was created.',\n          format: 'date-time'\n        },\n        daily_spend_limit: {\n          type: 'string',\n          description: 'The maximum amount of money (in USD) that can be spent by this profile before midnight UTC.'\n        },\n        daily_spend_limit_enabled: {\n          type: 'boolean',\n          description: 'Whether to enforce the value configured by `daily_spend_limit`.'\n        },\n        enabled: {\n          type: 'boolean',\n          description: 'Specifies whether the messaging profile is enabled or not.'\n        },\n        mms_fall_back_to_sms: {\n          type: 'boolean',\n          description: 'enables SMS fallback for MMS messages.'\n        },\n        mms_transcoding: {\n          type: 'boolean',\n          description: 'enables automated resizing of MMS media.'\n        },\n        mobile_only: {\n          type: 'boolean',\n          description: 'Send messages only to mobile phone numbers.'\n        },\n        name: {\n          type: 'string',\n          description: 'A user friendly name for the messaging profile.'\n        },\n        number_pool_settings: {\n          $ref: '#/$defs/number_pool_settings'\n        },\n        record_type: {\n          type: 'string',\n          description: 'Identifies the type of the resource.',\n          enum: [            'messaging_profile'\n          ]\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the resource was updated.',\n          format: 'date-time'\n        },\n        url_shortener_settings: {\n          $ref: '#/$defs/url_shortener_settings'\n        },\n        v1_secret: {\n          type: 'string',\n          description: 'Secret used to authenticate with v1 endpoints.'\n        },\n        webhook_api_version: {\n          type: 'string',\n          description: 'Determines which webhook format will be used, Telnyx API v1, v2, or a legacy 2010-04-01 format.',\n          enum: [            '1',\n            '2',\n            '2010-04-01'\n          ]\n        },\n        webhook_failover_url: {\n          type: 'string',\n          description: 'The failover URL where webhooks related to this messaging profile will be sent if sending to the primary URL fails.'\n        },\n        webhook_url: {\n          type: 'string',\n          description: 'The URL where webhooks related to this messaging profile will be sent.'\n        },\n        whitelisted_destinations: {\n          type: 'array',\n          description: 'Destinations to which the messaging profile is allowed to send. The elements in the list must be valid ISO 3166-1 alpha-2 country codes. If set to `[\"*\"]`, all destinations will be allowed.',\n          items: {\n            type: 'string',\n            description: 'ISO 3166-1 alpha-2 country code.'\n          }\n        }\n      }\n    },\n    number_pool_settings: {\n      type: 'object',\n      description: 'Number Pool allows you to send messages from a pool of numbers of different types, assigning\\nweights to each type. The pool consists of all the long code and toll free numbers\\nassigned to the messaging profile.\\n\\nTo disable this feature, set the object field to `null`.\\n',\n      properties: {\n        long_code_weight: {\n          type: 'number',\n          description: 'Defines the probability weight for a Long Code number to be selected when sending a message.\\nThe higher the weight the higher the probability. The sum of the weights for all number types\\ndoes not necessarily need to add to 100.  Weight must be a non-negative number, and when equal\\nto zero it will remove the number type from the pool.\\n'\n        },\n        skip_unhealthy: {\n          type: 'boolean',\n          description: 'If set to true all unhealthy numbers will be automatically excluded from the pool.\\nHealth metrics per number are calculated on a regular basis, taking into account the deliverability\\nrate and the amount of messages marked as spam by upstream carriers.\\nNumbers with a deliverability rate below 25% or spam ratio over 75% will be considered unhealthy.\\n'\n        },\n        toll_free_weight: {\n          type: 'number',\n          description: 'Defines the probability weight for a Toll Free number to be selected when sending a message.\\nThe higher the weight the higher the probability. The sum of the weights for all number types\\ndoes not necessarily need to add to 100. Weight must be a non-negative number, and when equal\\nto zero it will remove the number type from the pool.\\n'\n        },\n        geomatch: {\n          type: 'boolean',\n          description: 'If set to true, Number Pool will try to choose a sending number with the same area code as the destination\\nnumber. If there are no such numbers available, a nunber with a different area code will be chosen. Currently\\nonly NANP numbers are supported.\\n'\n        },\n        sticky_sender: {\n          type: 'boolean',\n          description: 'If set to true, Number Pool will try to choose the same sending number for all messages to a particular\\nrecipient. If the sending number becomes unhealthy and `skip_unhealthy` is set to true, a new\\nnumber will be chosen.\\n'\n        }\n      },\n      required: [        'long_code_weight',\n        'skip_unhealthy',\n        'toll_free_weight'\n      ]\n    },\n    url_shortener_settings: {\n      type: 'object',\n      description: 'The URL shortener feature allows automatic replacement of URLs that were generated using\\na public URL shortener service. Some examples include bit.do, bit.ly, goo.gl, ht.ly,\\nis.gd, ow.ly, rebrand.ly, t.co, tiny.cc, and tinyurl.com. Such URLs are replaced with\\nwith links generated by Telnyx. The use of custom links can improve branding and message\\ndeliverability.\\n\\nTo disable this feature, set the object field to `null`.\\n',\n      properties: {\n        domain: {\n          type: 'string',\n          description: 'One of the domains provided by the Telnyx URL shortener service.\\n'\n        },\n        prefix: {\n          type: 'string',\n          description: 'Optional prefix that can be used to identify your brand, and will appear in the Telnyx generated URLs after the domain name.\\n'\n        },\n        replace_blacklist_only: {\n          type: 'boolean',\n          description: 'Use the link replacement tool only for links that are specifically blacklisted by Telnyx.\\n'\n        },\n        send_webhooks: {\n          type: 'boolean',\n          description: 'Receive webhooks for when your replaced links are clicked. Webhooks are sent to the webhooks on the messaging profile.\\n'\n        }\n      },\n      required: [        'domain'\n      ]\n    }\n  }\n}\n```",
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.messagingProfiles.delete(id)));
};

export default { metadata, tool, handler };
