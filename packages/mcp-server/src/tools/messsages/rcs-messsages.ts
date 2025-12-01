// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'messsages',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/messsages/rcs',
};

export const tool: Tool = {
  name: 'rcs_messsages',
  description: 'Send an RCS message',
  inputSchema: {
    type: 'object',
    properties: {
      agent_id: {
        type: 'string',
        description: 'RCS Agent ID',
      },
      agent_message: {
        $ref: '#/$defs/rcs_agent_message',
      },
      messaging_profile_id: {
        type: 'string',
        description: 'A valid messaging profile ID',
      },
      to: {
        type: 'string',
        description: 'Phone number in +E.164 format',
      },
      mms_fallback: {
        type: 'object',
        properties: {
          from: {
            type: 'string',
            description: 'Phone number in +E.164 format',
          },
          media_urls: {
            type: 'array',
            description: 'List of media URLs',
            items: {
              type: 'string',
            },
          },
          subject: {
            type: 'string',
            description: 'Subject of the message',
          },
          text: {
            type: 'string',
            description: 'Text',
          },
        },
      },
      sms_fallback: {
        type: 'object',
        properties: {
          from: {
            type: 'string',
            description: 'Phone number in +E.164 format',
          },
          text: {
            type: 'string',
            description: 'Text (maximum 3072 characters)',
          },
        },
      },
      type: {
        type: 'string',
        description: 'Message type - must be set to "RCS"',
        enum: ['RCS'],
      },
      webhook_url: {
        type: 'string',
        description: 'The URL where webhooks related to this message will be sent.',
      },
    },
    required: ['agent_id', 'agent_message', 'messaging_profile_id', 'to'],
    $defs: {
      rcs_agent_message: {
        type: 'object',
        properties: {
          content_message: {
            type: 'object',
            properties: {
              content_info: {
                $ref: '#/$defs/rcs_content_info',
              },
              rich_card: {
                type: 'object',
                properties: {
                  carousel_card: {
                    type: 'object',
                    description: 'Carousel of cards.',
                    properties: {
                      card_contents: {
                        type: 'array',
                        description:
                          'The list of contents for each card in the carousel. A carousel can have a minimum of 2 cards and a maximum 10 cards.',
                        items: {
                          $ref: '#/$defs/rcs_card_content',
                        },
                      },
                      card_width: {
                        type: 'string',
                        description: 'The width of the cards in the carousel.',
                        enum: ['CARD_WIDTH_UNSPECIFIED', 'SMALL', 'MEDIUM'],
                      },
                    },
                    required: ['card_contents', 'card_width'],
                  },
                  standalone_card: {
                    type: 'object',
                    description: 'Standalone card',
                    properties: {
                      card_content: {
                        $ref: '#/$defs/rcs_card_content',
                      },
                      card_orientation: {
                        type: 'string',
                        description: 'Orientation of the card.',
                        enum: ['CARD_ORIENTATION_UNSPECIFIED', 'HORIZONTAL', 'VERTICAL'],
                      },
                      thumbnail_image_alignment: {
                        type: 'string',
                        description: 'Image preview alignment for standalone cards with horizontal layout.',
                        enum: ['THUMBNAIL_IMAGE_ALIGNMENT_UNSPECIFIED', 'LEFT', 'RIGHT'],
                      },
                    },
                    required: ['card_content', 'card_orientation', 'thumbnail_image_alignment'],
                  },
                },
              },
              suggestions: {
                type: 'array',
                description: 'List of suggested actions and replies',
                items: {
                  $ref: '#/$defs/rcs_suggestion',
                },
              },
              text: {
                type: 'string',
                description: 'Text (maximum 3072 characters)',
              },
            },
          },
          event: {
            type: 'object',
            description: 'RCS Event to send to the recipient',
            properties: {
              event_type: {
                type: 'string',
                enum: ['TYPE_UNSPECIFIED', 'IS_TYPING', 'READ'],
              },
            },
          },
          expire_time: {
            type: 'string',
            description: 'Timestamp in UTC of when this message is considered expired',
            format: 'date-time',
          },
          ttl: {
            type: 'string',
            description: "Duration in seconds ending with 's'",
          },
        },
      },
      rcs_content_info: {
        type: 'object',
        properties: {
          file_url: {
            type: 'string',
            description: 'Publicly reachable URL of the file.',
          },
          force_refresh: {
            type: 'boolean',
            description: 'If set the URL content will not be cached.',
          },
          thumbnail_url: {
            type: 'string',
            description: 'Publicly reachable URL of the thumbnail. Maximum size of 100 kB.',
          },
        },
        required: ['file_url'],
      },
      rcs_card_content: {
        type: 'object',
        properties: {
          description: {
            type: 'string',
            description: 'Description of the card (at most 2000 characters)',
          },
          media: {
            type: 'object',
            description: 'A media file within a rich card.',
            properties: {
              content_info: {
                $ref: '#/$defs/rcs_content_info',
              },
              height: {
                type: 'string',
                description:
                  'The height of the media within a rich card with a vertical layout. For a standalone card with horizontal layout, height is not customizable, and this field is ignored.',
                enum: ['HEIGHT_UNSPECIFIED', 'SHORT', 'MEDIUM', 'TALL'],
              },
            },
          },
          suggestions: {
            type: 'array',
            description: 'List of suggestions to include in the card. Maximum 10 suggestions.',
            items: {
              $ref: '#/$defs/rcs_suggestion',
            },
          },
          title: {
            type: 'string',
            description: 'Title of the card (at most 200 characters)',
          },
        },
      },
      rcs_suggestion: {
        type: 'object',
        properties: {
          action: {
            type: 'object',
            description: 'When tapped, initiates the corresponding native action on the device.',
            properties: {
              create_calendar_event_action: {
                type: 'object',
                description:
                  "Opens the user's default calendar app and starts the new calendar event flow with the agent-specified event data pre-filled.",
                properties: {
                  description: {
                    type: 'string',
                    description: 'Event description. Maximum 500 characters.',
                  },
                  end_time: {
                    type: 'string',
                    format: 'date-time',
                  },
                  start_time: {
                    type: 'string',
                    format: 'date-time',
                  },
                  title: {
                    type: 'string',
                    description: 'Event title. Maximum 100 characters.',
                  },
                },
              },
              dial_action: {
                type: 'object',
                description:
                  "Opens the user's default dialer app with the agent-specified phone number filled in.",
                properties: {
                  phone_number: {
                    type: 'string',
                    description: 'Phone number in +E.164 format',
                  },
                },
                required: ['phone_number'],
              },
              fallback_url: {
                type: 'string',
                description:
                  "Fallback URL to use if a client doesn't support a suggested action. Fallback URLs open in new browser windows. Maximum 2048 characters.",
              },
              open_url_action: {
                type: 'object',
                description: "Opens the user's default web browser app to the specified URL.",
                properties: {
                  application: {
                    type: 'string',
                    description: 'URL open application, browser or webview.',
                    enum: ['OPEN_URL_APPLICATION_UNSPECIFIED', 'BROWSER', 'WEBVIEW'],
                  },
                  url: {
                    type: 'string',
                  },
                  webview_view_mode: {
                    type: 'string',
                    enum: ['WEBVIEW_VIEW_MODE_UNSPECIFIED', 'FULL', 'HALF', 'TALL'],
                  },
                  description: {
                    type: 'string',
                    description: 'Accessbility description for webview.',
                  },
                },
                required: ['application', 'url', 'webview_view_mode'],
              },
              postback_data: {
                type: 'string',
                description:
                  'Payload (base64 encoded) that will be sent to the agent in the user event that results when the user taps the suggested action. Maximum 2048 characters.',
              },
              share_location_action: {
                type: 'object',
                description:
                  "Opens the RCS app's location chooser so the user can pick a location to send back to the agent.",
                additionalProperties: true,
              },
              text: {
                type: 'string',
                description: 'Text that is shown in the suggested action. Maximum 25 characters.',
              },
              view_location_action: {
                type: 'object',
                description: "Opens the user's default map app and selects the agent-specified location.",
                properties: {
                  label: {
                    type: 'string',
                    description: 'The label of the pin dropped',
                  },
                  lat_long: {
                    type: 'object',
                    properties: {
                      latitude: {
                        type: 'number',
                        description: 'The latitude in degrees. It must be in the range [-90.0, +90.0].',
                      },
                      longitude: {
                        type: 'number',
                        description: 'The longitude in degrees. It must be in the range [-180.0, +180.0].',
                      },
                    },
                    required: ['latitude', 'longitude'],
                  },
                  query: {
                    type: 'string',
                    description: 'query string (Android only)',
                  },
                },
              },
            },
          },
          reply: {
            type: 'object',
            properties: {
              postback_data: {
                type: 'string',
                description:
                  'Payload (base64 encoded) that will be sent to the agent in the user event that results when the user taps the suggested action. Maximum 2048 characters.',
              },
              text: {
                type: 'string',
                description: 'Text that is shown in the suggested reply (maximum 25 characters)',
              },
            },
          },
        },
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  try {
    return asTextContentResult(await client.messsages.rcs(body));
  } catch (error) {
    if (error instanceof Telnyx.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
