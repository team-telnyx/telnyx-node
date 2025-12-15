// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'messsages',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/messsages/whatsapp',
  operationId: 'SendWhatsappMessage',
};

export const tool: Tool = {
  name: 'whatsapp_messsages',
  description: 'Send a Whatsapp message',
  inputSchema: {
    type: 'object',
    properties: {
      from: {
        type: 'string',
        description: 'Phone number in +E.164 format associated with Whatsapp account',
      },
      to: {
        type: 'string',
        description: 'Phone number in +E.164 format',
      },
      whatsapp_message: {
        type: 'object',
        properties: {
          audio: {
            type: 'object',
            properties: {
              caption: {
                type: 'string',
                description: 'media caption',
              },
              filename: {
                type: 'string',
                description: 'file name with extension',
              },
              link: {
                type: 'string',
                description: 'media URL',
              },
              voice: {
                type: 'boolean',
                description: 'true if voice message',
              },
            },
          },
          biz_opaque_callback_data: {
            type: 'string',
            description: 'custom data to return with status update',
          },
          contacts: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                addresses: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      city: {
                        type: 'string',
                      },
                      country: {
                        type: 'string',
                      },
                      country_code: {
                        type: 'string',
                      },
                      state: {
                        type: 'string',
                      },
                      street: {
                        type: 'string',
                      },
                      type: {
                        type: 'string',
                      },
                      zip: {
                        type: 'string',
                      },
                    },
                  },
                },
                birthday: {
                  type: 'string',
                },
                emails: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      email: {
                        type: 'string',
                      },
                      type: {
                        type: 'string',
                      },
                    },
                  },
                },
                name: {
                  type: 'string',
                },
                org: {
                  type: 'object',
                  properties: {
                    company: {
                      type: 'string',
                    },
                    department: {
                      type: 'string',
                    },
                    title: {
                      type: 'string',
                    },
                  },
                },
                phones: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      phone: {
                        type: 'string',
                      },
                      type: {
                        type: 'string',
                      },
                      wa_id: {
                        type: 'string',
                      },
                    },
                  },
                },
                urls: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      type: {
                        type: 'string',
                      },
                      url: {
                        type: 'string',
                      },
                    },
                  },
                },
              },
            },
          },
          document: {
            type: 'object',
            properties: {
              caption: {
                type: 'string',
                description: 'media caption',
              },
              filename: {
                type: 'string',
                description: 'file name with extension',
              },
              link: {
                type: 'string',
                description: 'media URL',
              },
              voice: {
                type: 'boolean',
                description: 'true if voice message',
              },
            },
          },
          image: {
            type: 'object',
            properties: {
              caption: {
                type: 'string',
                description: 'media caption',
              },
              filename: {
                type: 'string',
                description: 'file name with extension',
              },
              link: {
                type: 'string',
                description: 'media URL',
              },
              voice: {
                type: 'boolean',
                description: 'true if voice message',
              },
            },
          },
          interactive: {
            type: 'object',
            properties: {
              action: {
                type: 'object',
                properties: {
                  button: {
                    type: 'string',
                  },
                  buttons: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        reply: {
                          type: 'object',
                          properties: {
                            id: {
                              type: 'string',
                              description: 'unique identifier for each button, 256 character maximum',
                            },
                            title: {
                              type: 'string',
                              description: 'button label, 20 character maximum',
                            },
                          },
                        },
                        type: {
                          type: 'string',
                          enum: ['reply'],
                        },
                      },
                    },
                  },
                  cards: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        action: {
                          type: 'object',
                          properties: {
                            catalog_id: {
                              type: 'string',
                              description: 'the unique ID of the catalog',
                            },
                            product_retailer_id: {
                              type: 'string',
                              description: 'the unique retailer ID of the product',
                            },
                          },
                        },
                        body: {
                          type: 'object',
                          properties: {
                            text: {
                              type: 'string',
                              description: '160 character maximum, up to 2 line breaks',
                            },
                          },
                        },
                        card_index: {
                          type: 'integer',
                          description: 'unique index for each card (0-9)',
                        },
                        header: {
                          type: 'object',
                          properties: {
                            image: {
                              type: 'object',
                              properties: {
                                caption: {
                                  type: 'string',
                                  description: 'media caption',
                                },
                                filename: {
                                  type: 'string',
                                  description: 'file name with extension',
                                },
                                link: {
                                  type: 'string',
                                  description: 'media URL',
                                },
                                voice: {
                                  type: 'boolean',
                                  description: 'true if voice message',
                                },
                              },
                            },
                            type: {
                              type: 'string',
                              enum: ['image', 'video'],
                            },
                            video: {
                              type: 'object',
                              properties: {
                                caption: {
                                  type: 'string',
                                  description: 'media caption',
                                },
                                filename: {
                                  type: 'string',
                                  description: 'file name with extension',
                                },
                                link: {
                                  type: 'string',
                                  description: 'media URL',
                                },
                                voice: {
                                  type: 'boolean',
                                  description: 'true if voice message',
                                },
                              },
                            },
                          },
                        },
                        type: {
                          type: 'string',
                          enum: ['cta_url'],
                        },
                      },
                    },
                  },
                  catalog_id: {
                    type: 'string',
                  },
                  mode: {
                    type: 'string',
                  },
                  name: {
                    type: 'string',
                  },
                  parameters: {
                    type: 'object',
                    properties: {
                      display_text: {
                        type: 'string',
                        description: 'button label text, 20 character maximum',
                      },
                      url: {
                        type: 'string',
                        description: 'button URL to load when tapped by the user',
                      },
                    },
                  },
                  product_retailer_id: {
                    type: 'string',
                  },
                  sections: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        product_items: {
                          type: 'array',
                          items: {
                            type: 'object',
                            properties: {
                              product_retailer_id: {
                                type: 'string',
                              },
                            },
                          },
                        },
                        rows: {
                          type: 'array',
                          items: {
                            type: 'object',
                            properties: {
                              id: {
                                type: 'string',
                                description: 'arbitrary string identifying the row, 200 character maximum',
                              },
                              description: {
                                type: 'string',
                                description: 'row description, 72 character maximum',
                              },
                              title: {
                                type: 'string',
                                description: 'row title, 24 character maximum',
                              },
                            },
                          },
                        },
                        title: {
                          type: 'string',
                          description: 'section title, 24 character maximum',
                        },
                      },
                    },
                  },
                },
              },
              body: {
                type: 'object',
                properties: {
                  text: {
                    type: 'string',
                    description: 'body text, 1024 character maximum',
                  },
                },
              },
              footer: {
                type: 'object',
                properties: {
                  text: {
                    type: 'string',
                    description: 'footer text, 60 character maximum',
                  },
                },
              },
              header: {
                type: 'object',
                properties: {
                  document: {
                    type: 'object',
                    properties: {
                      caption: {
                        type: 'string',
                        description: 'media caption',
                      },
                      filename: {
                        type: 'string',
                        description: 'file name with extension',
                      },
                      link: {
                        type: 'string',
                        description: 'media URL',
                      },
                      voice: {
                        type: 'boolean',
                        description: 'true if voice message',
                      },
                    },
                  },
                  image: {
                    type: 'object',
                    properties: {
                      caption: {
                        type: 'string',
                        description: 'media caption',
                      },
                      filename: {
                        type: 'string',
                        description: 'file name with extension',
                      },
                      link: {
                        type: 'string',
                        description: 'media URL',
                      },
                      voice: {
                        type: 'boolean',
                        description: 'true if voice message',
                      },
                    },
                  },
                  sub_text: {
                    type: 'string',
                  },
                  text: {
                    type: 'string',
                    description: 'header text, 60 character maximum',
                  },
                  video: {
                    type: 'object',
                    properties: {
                      caption: {
                        type: 'string',
                        description: 'media caption',
                      },
                      filename: {
                        type: 'string',
                        description: 'file name with extension',
                      },
                      link: {
                        type: 'string',
                        description: 'media URL',
                      },
                      voice: {
                        type: 'boolean',
                        description: 'true if voice message',
                      },
                    },
                  },
                },
              },
              type: {
                type: 'string',
                enum: ['cta_url', 'list', 'carousel', 'button', 'location_request_message'],
              },
            },
          },
          location: {
            type: 'object',
            properties: {
              address: {
                type: 'string',
              },
              latitude: {
                type: 'string',
              },
              longitude: {
                type: 'string',
              },
              name: {
                type: 'string',
              },
            },
          },
          reaction: {
            type: 'object',
            properties: {
              empji: {
                type: 'string',
              },
              message_id: {
                type: 'string',
              },
            },
          },
          sticker: {
            type: 'object',
            properties: {
              caption: {
                type: 'string',
                description: 'media caption',
              },
              filename: {
                type: 'string',
                description: 'file name with extension',
              },
              link: {
                type: 'string',
                description: 'media URL',
              },
              voice: {
                type: 'boolean',
                description: 'true if voice message',
              },
            },
          },
          type: {
            type: 'string',
            enum: [
              'audio',
              'document',
              'image',
              'sticker',
              'video',
              'interactive',
              'location',
              'template',
              'reaction',
              'contacts',
            ],
          },
          video: {
            type: 'object',
            properties: {
              caption: {
                type: 'string',
                description: 'media caption',
              },
              filename: {
                type: 'string',
                description: 'file name with extension',
              },
              link: {
                type: 'string',
                description: 'media URL',
              },
              voice: {
                type: 'boolean',
                description: 'true if voice message',
              },
            },
          },
        },
      },
      type: {
        type: 'string',
        description: 'Message type - must be set to "WHATSAPP"',
        enum: ['WHATSAPP'],
      },
      webhook_url: {
        type: 'string',
        description: 'The URL where webhooks related to this message will be sent.',
      },
    },
    required: ['from', 'to', 'whatsapp_message'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  try {
    return asTextContentResult(await client.messsages.whatsapp(body));
  } catch (error) {
    if (error instanceof Telnyx.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
