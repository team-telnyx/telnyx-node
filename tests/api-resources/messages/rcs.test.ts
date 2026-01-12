// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource rcs', () => {
  // Prism tests are disabled
  test.skip('generateDeeplink', async () => {
    const responsePromise = client.messages.rcs.generateDeeplink('agent_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('generateDeeplink: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.messages.rcs.generateDeeplink(
        'agent_id',
        { body: 'body', phone_number: 'phone_number' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('send: only required params', async () => {
    const responsePromise = client.messages.rcs.send({
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
  test.skip('send: required and optional params', async () => {
    const response = await client.messages.rcs.send({
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
});
