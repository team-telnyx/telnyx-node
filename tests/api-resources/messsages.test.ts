// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource messsages', () => {
  // Prism tests are disabled
  test.skip('rcs: only required params', async () => {
    const responsePromise = client.messsages.rcs({
      agent_id: 'Agent007',
      agent_message: {},
      messaging_profile_id: 'messaging_profile_id',
      to: '+13125551234',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('rcs: required and optional params', async () => {
    const response = await client.messsages.rcs({
      agent_id: 'Agent007',
      agent_message: {
        content_message: {
          content_info: {
            file_url: 'https://example.com/elephant.jpg',
            force_refresh: true,
            thumbnail_url: 'thumbnail_url',
          },
          rich_card: {
            carousel_card: {
              card_contents: [
                {
                  description: 'description',
                  media: {
                    content_info: {
                      file_url: 'https://example.com/elephant.jpg',
                      force_refresh: true,
                      thumbnail_url: 'thumbnail_url',
                    },
                    height: 'MEDIUM',
                  },
                  suggestions: [
                    {
                      action: {
                        create_calendar_event_action: {
                          description: 'description',
                          end_time: '2024-10-02T15:02:31Z',
                          start_time: '2024-10-02T15:01:23Z',
                          title: 'title',
                        },
                        dial_action: { phone_number: '+13125551234' },
                        fallback_url: 'fallback_url',
                        open_url_action: {
                          application: 'BROWSER',
                          url: 'http://example.com',
                          webview_view_mode: 'HALF',
                          description: 'description',
                        },
                        postback_data: 'postback_data',
                        share_location_action: { foo: 'bar' },
                        text: 'Hello world',
                        view_location_action: {
                          label: 'label',
                          lat_long: { latitude: 41.8, longitude: -87.6 },
                          query: 'query',
                        },
                      },
                      reply: { postback_data: 'postback_data', text: 'text' },
                    },
                  ],
                  title: 'Elephant',
                },
              ],
              card_width: 'SMALL',
            },
            standalone_card: {
              card_content: {
                description: 'description',
                media: {
                  content_info: {
                    file_url: 'https://example.com/elephant.jpg',
                    force_refresh: true,
                    thumbnail_url: 'thumbnail_url',
                  },
                  height: 'MEDIUM',
                },
                suggestions: [
                  {
                    action: {
                      create_calendar_event_action: {
                        description: 'description',
                        end_time: '2024-10-02T15:02:31Z',
                        start_time: '2024-10-02T15:01:23Z',
                        title: 'title',
                      },
                      dial_action: { phone_number: '+13125551234' },
                      fallback_url: 'fallback_url',
                      open_url_action: {
                        application: 'BROWSER',
                        url: 'http://example.com',
                        webview_view_mode: 'HALF',
                        description: 'description',
                      },
                      postback_data: 'postback_data',
                      share_location_action: { foo: 'bar' },
                      text: 'Hello world',
                      view_location_action: {
                        label: 'label',
                        lat_long: { latitude: 41.8, longitude: -87.6 },
                        query: 'query',
                      },
                    },
                    reply: { postback_data: 'postback_data', text: 'text' },
                  },
                ],
                title: 'Elephant',
              },
              card_orientation: 'HORIZONTAL',
              thumbnail_image_alignment: 'LEFT',
            },
          },
          suggestions: [
            {
              action: {
                create_calendar_event_action: {
                  description: 'description',
                  end_time: '2024-10-02T15:02:31Z',
                  start_time: '2024-10-02T15:01:23Z',
                  title: 'title',
                },
                dial_action: { phone_number: '+13125551234' },
                fallback_url: 'fallback_url',
                open_url_action: {
                  application: 'BROWSER',
                  url: 'http://example.com',
                  webview_view_mode: 'HALF',
                  description: 'description',
                },
                postback_data: 'postback_data',
                share_location_action: { foo: 'bar' },
                text: 'Hello world',
                view_location_action: {
                  label: 'label',
                  lat_long: { latitude: 41.8, longitude: -87.6 },
                  query: 'query',
                },
              },
              reply: { postback_data: 'postback_data', text: 'text' },
            },
          ],
          text: 'Hello world!',
        },
        event: { event_type: 'IS_TYPING' },
        expire_time: '2024-10-02T15:01:23Z',
        ttl: '10.5s',
      },
      messaging_profile_id: 'messaging_profile_id',
      to: '+13125551234',
      mms_fallback: {
        from: '+13125551234',
        media_urls: ['string'],
        subject: 'Test Message',
        text: 'Hello world!',
      },
      sms_fallback: { from: '+13125551234', text: 'Hello world!' },
      type: 'RCS',
      webhook_url: 'webhook_url',
    });
  });

  // Prism tests are disabled
  test.skip('whatsapp: only required params', async () => {
    const responsePromise = client.messsages.whatsapp({
      from: '+13125551234',
      to: '+13125551234',
      whatsapp_message: {},
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('whatsapp: required and optional params', async () => {
    const response = await client.messsages.whatsapp({
      from: '+13125551234',
      to: '+13125551234',
      whatsapp_message: {
        audio: {
          caption: 'caption',
          filename: 'filename',
          link: 'http://example.com/media.jpg',
          voice: true,
        },
        biz_opaque_callback_data: 'biz_opaque_callback_data',
        contacts: [
          {
            addresses: [
              {
                city: 'city',
                country: 'country',
                country_code: 'country_code',
                state: 'state',
                street: 'street',
                type: 'type',
                zip: 'zip',
              },
            ],
            birthday: 'birthday',
            emails: [{ email: 'email', type: 'type' }],
            name: 'name',
            org: { company: 'company', department: 'department', title: 'title' },
            phones: [{ phone: 'phone', type: 'type', wa_id: 'wa_id' }],
            urls: [{ type: 'type', url: 'url' }],
          },
        ],
        document: {
          caption: 'caption',
          filename: 'filename',
          link: 'http://example.com/media.jpg',
          voice: true,
        },
        image: {
          caption: 'caption',
          filename: 'filename',
          link: 'http://example.com/media.jpg',
          voice: true,
        },
        interactive: {
          action: {
            button: 'button',
            buttons: [{ reply: { id: 'id', title: 'title' }, type: 'reply' }],
            cards: [
              {
                action: { catalog_id: 'catalog_id', product_retailer_id: 'product_retailer_id' },
                body: { text: 'text' },
                card_index: 0,
                header: {
                  image: {
                    caption: 'caption',
                    filename: 'filename',
                    link: 'http://example.com/media.jpg',
                    voice: true,
                  },
                  type: 'image',
                  video: {
                    caption: 'caption',
                    filename: 'filename',
                    link: 'http://example.com/media.jpg',
                    voice: true,
                  },
                },
                type: 'cta_url',
              },
            ],
            catalog_id: 'catalog_id',
            mode: 'mode',
            name: 'name',
            parameters: { display_text: 'display_text', url: 'url' },
            product_retailer_id: 'product_retailer_id',
            sections: [
              {
                product_items: [{ product_retailer_id: 'product_retailer_id' }],
                rows: [{ id: 'id', description: 'description', title: 'title' }],
                title: 'title',
              },
            ],
          },
          body: { text: 'text' },
          footer: { text: 'text' },
          header: {
            document: {
              caption: 'caption',
              filename: 'filename',
              link: 'http://example.com/media.jpg',
              voice: true,
            },
            image: {
              caption: 'caption',
              filename: 'filename',
              link: 'http://example.com/media.jpg',
              voice: true,
            },
            sub_text: 'sub_text',
            text: 'text',
            video: {
              caption: 'caption',
              filename: 'filename',
              link: 'http://example.com/media.jpg',
              voice: true,
            },
          },
          type: 'cta_url',
        },
        location: { address: 'address', latitude: 'latitude', longitude: 'longitude', name: 'name' },
        reaction: { empji: 'empji', message_id: 'message_id' },
        sticker: {
          caption: 'caption',
          filename: 'filename',
          link: 'http://example.com/media.jpg',
          voice: true,
        },
        type: 'audio',
        video: {
          caption: 'caption',
          filename: 'filename',
          link: 'http://example.com/media.jpg',
          voice: true,
        },
      },
      type: 'WHATSAPP',
      webhook_url: 'webhook_url',
    });
  });
});
