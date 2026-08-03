// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource emailMessages', () => {
  // Mock server tests are disabled
  test.skip('deleteAll: only required params', async () => {
    const responsePromise = client.emailMessages.deleteAll({ address: 'dev@stainless.com' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('deleteAll: required and optional params', async () => {
    const response = await client.emailMessages.deleteAll({ address: 'dev@stainless.com' });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.emailMessages.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.emailMessages.list(
        { page_cursor: 'page_cursor', page_size: 1 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.emailMessages.create({
      from: 'sender@example.com',
      to: ['recipient@example.com'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.emailMessages.create({
      from: 'sender@example.com',
      to: ['recipient@example.com'],
      attachments: [
        {
          content: 'content',
          content_id: 'content_id',
          content_type: 'content_type',
          disposition: 'disposition',
          filename: 'filename',
        },
      ],
      bcc: ['string'],
      cc: ['string'],
      forward_of_message_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      from_name: 'from_name',
      group_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      headers: { foo: 'string' },
      html_body: 'html_body',
      ignore_suppression: true,
      in_reply_to_message_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      inline_css: true,
      metadata: { foo: 'bar' },
      reply_to: 'string',
      reply_to_all: true,
      sandbox_mode: true,
      scheduled_at: '2019-12-27T18:11:19.117Z',
      send_at: '2019-12-27T18:11:19.117Z',
      subject: 'Hello from Telnyx',
      tags: ['string'],
      template_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      template_variables: { foo: 'bar' },
      text_body: 'This is a test email.',
      tracking_settings: { click_tracking: true, open_tracking: true },
      'Idempotency-Key': '8e03978e-40d5-43e8-bc93-6894a57f9326',
    });
  });

  // Mock server tests are disabled
  test.skip('batch: only required params', async () => {
    const responsePromise = client.emailMessages.batch({
      messages: [
        { from: 'sender@example.com', to: ['recipient1@example.com'] },
        { from: 'sender@example.com', to: ['recipient2@example.com'] },
      ],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('batch: required and optional params', async () => {
    const response = await client.emailMessages.batch({
      messages: [
        {
          from: 'sender@example.com',
          to: ['recipient1@example.com'],
          attachments: [
            {
              content: 'content',
              content_id: 'content_id',
              content_type: 'content_type',
              disposition: 'disposition',
              filename: 'filename',
            },
          ],
          bcc: ['string'],
          cc: ['string'],
          from_name: 'from_name',
          group_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          headers: { foo: 'string' },
          html_body: 'html_body',
          ignore_suppression: true,
          inline_css: true,
          metadata: { foo: 'bar' },
          reply_to: 'string',
          sandbox_mode: true,
          scheduled_at: '2019-12-27T18:11:19.117Z',
          send_at: '2019-12-27T18:11:19.117Z',
          subject: 'Hello 1',
          tags: ['string'],
          template_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          template_variables: { foo: 'bar' },
          text_body: 'Message 1',
          tracking_settings: { click_tracking: true, open_tracking: true },
        },
        {
          from: 'sender@example.com',
          to: ['recipient2@example.com'],
          attachments: [
            {
              content: 'content',
              content_id: 'content_id',
              content_type: 'content_type',
              disposition: 'disposition',
              filename: 'filename',
            },
          ],
          bcc: ['string'],
          cc: ['string'],
          from_name: 'from_name',
          group_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          headers: { foo: 'string' },
          html_body: 'html_body',
          ignore_suppression: true,
          inline_css: true,
          metadata: { foo: 'bar' },
          reply_to: 'string',
          sandbox_mode: true,
          scheduled_at: '2019-12-27T18:11:19.117Z',
          send_at: '2019-12-27T18:11:19.117Z',
          subject: 'Hello 2',
          tags: ['string'],
          template_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          template_variables: { foo: 'bar' },
          text_body: 'Message 2',
          tracking_settings: { click_tracking: true, open_tracking: true },
        },
      ],
      sandbox_mode: false,
      'Idempotency-Key': '8e03978e-40d5-43e8-bc93-6894a57f9326',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieveEvents', async () => {
    const responsePromise = client.emailMessages.retrieveEvents('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieveEvents: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.emailMessages.retrieveEvents(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { page_cursor: 'page_cursor', page_size: 1 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('deleteSchedule', async () => {
    const responsePromise = client.emailMessages.deleteSchedule('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.emailMessages.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.emailMessages.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
