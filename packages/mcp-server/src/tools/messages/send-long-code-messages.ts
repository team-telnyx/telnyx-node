// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'messages',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/messages/long_code',
  operationId: 'CreateLongCodeMessage',
};

export const tool: Tool = {
  name: 'send_long_code_messages',
  description: 'Send a long code message',
  inputSchema: {
    type: 'object',
    properties: {
      from: {
        type: 'string',
        description: 'Phone number, in +E.164 format, used to send the message.',
      },
      to: {
        type: 'string',
        description: 'Receiving address (+E.164 formatted phone number or short code).',
      },
      auto_detect: {
        type: 'boolean',
        description:
          'Automatically detect if an SMS message is unusually long and exceeds a recommended limit of message parts.',
      },
      media_urls: {
        type: 'array',
        description:
          'A list of media URLs. The total media size must be less than 1 MB.\n\n**Required for MMS**',
        items: {
          type: 'string',
        },
      },
      subject: {
        type: 'string',
        description: 'Subject of multimedia message',
      },
      text: {
        type: 'string',
        description: 'Message body (i.e., content) as a non-empty string.\n\n**Required for SMS**',
      },
      type: {
        type: 'string',
        description: 'The protocol for sending the message, either SMS or MMS.',
        enum: ['SMS', 'MMS'],
      },
      use_profile_webhooks: {
        type: 'boolean',
        description:
          'If the profile this number is associated with has webhooks, use them for delivery notifications. If webhooks are also specified on the message itself, they will be attempted first, then those on the profile.',
      },
      webhook_failover_url: {
        type: 'string',
        description:
          'The failover URL where webhooks related to this message will be sent if sending to the primary URL fails.',
      },
      webhook_url: {
        type: 'string',
        description: 'The URL where webhooks related to this message will be sent.',
      },
    },
    required: ['from', 'to'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  try {
    return asTextContentResult(await client.messages.sendLongCode(body));
  } catch (error) {
    if (error instanceof Telnyx.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
