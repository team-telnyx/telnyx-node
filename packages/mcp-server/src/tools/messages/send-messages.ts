// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'messages',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/messages',
  operationId: 'SendMessage',
};

export const tool: Tool = {
  name: 'send_messages',
  description:
    'Send a message with a Phone Number, Alphanumeric Sender ID, Short Code or Number Pool.\n\nThis endpoint allows you to send a message with any messaging resource.\nCurrent messaging resources include: long-code, short-code, number-pool, and\nalphanumeric-sender-id.\n',
  inputSchema: {
    type: 'object',
    properties: {
      to: {
        type: 'string',
        description: 'Receiving address (+E.164 formatted phone number or short code).',
      },
      auto_detect: {
        type: 'boolean',
        description:
          'Automatically detect if an SMS message is unusually long and exceeds a recommended limit of message parts.',
      },
      from: {
        type: 'string',
        description:
          'Sending address (+E.164 formatted phone number, alphanumeric sender ID, or short code).\n\n**Required if sending with a phone number, short code, or alphanumeric sender ID.**\n',
      },
      media_urls: {
        type: 'array',
        description:
          'A list of media URLs. The total media size must be less than 1 MB.\n\n**Required for MMS**',
        items: {
          type: 'string',
        },
      },
      messaging_profile_id: {
        type: 'string',
        description:
          'Unique identifier for a messaging profile.\n\n**Required if sending via number pool or with an alphanumeric sender ID.**\n',
      },
      send_at: {
        type: 'string',
        description:
          'ISO 8601 formatted date indicating when to send the message - accurate up till a minute.',
        format: 'date-time',
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
    required: ['to'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  try {
    return asTextContentResult(await client.messages.send(body));
  } catch (error) {
    if (error instanceof Telnyx.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
