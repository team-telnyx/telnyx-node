// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'messaging_profiles',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/messaging_profiles',
  operationId: 'CreateMessagingProfile',
};

export const tool: Tool = {
  name: 'create_messaging_profiles',
  description: 'Create a messaging profile',
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        description: 'A user friendly name for the messaging profile.',
      },
      whitelisted_destinations: {
        type: 'array',
        description:
          'Destinations to which the messaging profile is allowed to send. The elements in the list must be valid ISO 3166-1 alpha-2 country codes. If set to `["*"]` all destinations will be allowed.',
        items: {
          type: 'string',
          description: 'ISO 3166-1 alpha-2 country code.',
        },
      },
      alpha_sender: {
        type: 'string',
        description:
          'The alphanumeric sender ID to use when sending to destinations that require an alphanumeric sender ID.',
      },
      daily_spend_limit: {
        type: 'string',
        description:
          'The maximum amount of money (in USD) that can be spent by this profile before midnight UTC.',
      },
      daily_spend_limit_enabled: {
        type: 'boolean',
        description: 'Whether to enforce the value configured by `daily_spend_limit`.',
      },
      enabled: {
        type: 'boolean',
        description: 'Specifies whether the messaging profile is enabled or not.',
      },
      mms_fall_back_to_sms: {
        type: 'boolean',
        description: 'enables SMS fallback for MMS messages.',
      },
      mms_transcoding: {
        type: 'boolean',
        description: 'enables automated resizing of MMS media.',
      },
      number_pool_settings: {
        $ref: '#/$defs/number_pool_settings',
      },
      url_shortener_settings: {
        $ref: '#/$defs/url_shortener_settings',
      },
      webhook_api_version: {
        type: 'string',
        description:
          'Determines which webhook format will be used, Telnyx API v1, v2, or a legacy 2010-04-01 format.',
        enum: ['1', '2', '2010-04-01'],
      },
      webhook_failover_url: {
        type: 'string',
        description:
          'The failover URL where webhooks related to this messaging profile will be sent if sending to the primary URL fails.',
      },
      webhook_url: {
        type: 'string',
        description: 'The URL where webhooks related to this messaging profile will be sent.',
      },
    },
    required: ['name', 'whitelisted_destinations'],
    $defs: {
      number_pool_settings: {
        type: 'object',
        description:
          'Number Pool allows you to send messages from a pool of numbers of different types, assigning\nweights to each type. The pool consists of all the long code and toll free numbers\nassigned to the messaging profile.\n\nTo disable this feature, set the object field to `null`.\n',
        properties: {
          long_code_weight: {
            type: 'number',
            description:
              'Defines the probability weight for a Long Code number to be selected when sending a message.\nThe higher the weight the higher the probability. The sum of the weights for all number types\ndoes not necessarily need to add to 100.  Weight must be a non-negative number, and when equal\nto zero it will remove the number type from the pool.\n',
          },
          skip_unhealthy: {
            type: 'boolean',
            description:
              'If set to true all unhealthy numbers will be automatically excluded from the pool.\nHealth metrics per number are calculated on a regular basis, taking into account the deliverability\nrate and the amount of messages marked as spam by upstream carriers.\nNumbers with a deliverability rate below 25% or spam ratio over 75% will be considered unhealthy.\n',
          },
          toll_free_weight: {
            type: 'number',
            description:
              'Defines the probability weight for a Toll Free number to be selected when sending a message.\nThe higher the weight the higher the probability. The sum of the weights for all number types\ndoes not necessarily need to add to 100. Weight must be a non-negative number, and when equal\nto zero it will remove the number type from the pool.\n',
          },
          geomatch: {
            type: 'boolean',
            description:
              'If set to true, Number Pool will try to choose a sending number with the same area code as the destination\nnumber. If there are no such numbers available, a nunber with a different area code will be chosen. Currently\nonly NANP numbers are supported.\n',
          },
          sticky_sender: {
            type: 'boolean',
            description:
              'If set to true, Number Pool will try to choose the same sending number for all messages to a particular\nrecipient. If the sending number becomes unhealthy and `skip_unhealthy` is set to true, a new\nnumber will be chosen.\n',
          },
        },
        required: ['long_code_weight', 'skip_unhealthy', 'toll_free_weight'],
      },
      url_shortener_settings: {
        type: 'object',
        description:
          'The URL shortener feature allows automatic replacement of URLs that were generated using\na public URL shortener service. Some examples include bit.do, bit.ly, goo.gl, ht.ly,\nis.gd, ow.ly, rebrand.ly, t.co, tiny.cc, and tinyurl.com. Such URLs are replaced with\nwith links generated by Telnyx. The use of custom links can improve branding and message\ndeliverability.\n\nTo disable this feature, set the object field to `null`.\n',
        properties: {
          domain: {
            type: 'string',
            description: 'One of the domains provided by the Telnyx URL shortener service.\n',
          },
          prefix: {
            type: 'string',
            description:
              'Optional prefix that can be used to identify your brand, and will appear in the Telnyx generated URLs after the domain name.\n',
          },
          replace_blacklist_only: {
            type: 'boolean',
            description:
              'Use the link replacement tool only for links that are specifically blacklisted by Telnyx.\n',
          },
          send_webhooks: {
            type: 'boolean',
            description:
              'Receive webhooks for when your replaced links are clicked. Webhooks are sent to the webhooks on the messaging profile.\n',
          },
        },
        required: ['domain'],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.messagingProfiles.create(body));
};

export default { metadata, tool, handler };
