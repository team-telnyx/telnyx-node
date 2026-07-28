// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource drafts', () => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.emailInboxes.drafts.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
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
      client.emailInboxes.drafts.list(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        {
          'filter[status]': 'draft',
          'page[after]': 'page[after]',
          'page[size]': 1,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('create', async () => {
    const responsePromise = client.emailInboxes.drafts.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('create: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.emailInboxes.drafts.create(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        {
          attachments: [{}],
          bcc: ['string'],
          cc: ['string'],
          from_email: 'from_email',
          from_name: 'from_name',
          headers: { foo: 'string' },
          html: 'html',
          html_body: 'html_body',
          labels: ['important'],
          metadata: {},
          reply_to: 'reply_to',
          subject: 'Quarterly update',
          tags: ['string'],
          text: 'text',
          text_body: 'Here is the update.',
          to: [{ email: 'recipient@example.com', name: 'Recipient' }],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.emailInboxes.drafts.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      inbox_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
  test.skip('delete: required and optional params', async () => {
    const response = await client.emailInboxes.drafts.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      inbox_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.emailInboxes.drafts.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      inbox_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.emailInboxes.drafts.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      inbox_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.emailInboxes.drafts.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      inbox_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
  test.skip('update: required and optional params', async () => {
    const response = await client.emailInboxes.drafts.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      inbox_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      attachments: [{}],
      bcc: ['string'],
      cc: ['string'],
      from_email: 'from_email',
      from_name: 'from_name',
      headers: { foo: 'string' },
      html: 'html',
      html_body: 'html_body',
      labels: ['string'],
      metadata: {},
      reply_to: 'reply_to',
      subject: 'Quarterly update (revised)',
      tags: ['string'],
      text: 'text',
      text_body: 'Updated body.',
      to: ['string'],
    });
  });

  // Mock server tests are disabled
  test.skip('send: only required params', async () => {
    const responsePromise = client.emailInboxes.drafts.send('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      inbox_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
  test.skip('send: required and optional params', async () => {
    const response = await client.emailInboxes.drafts.send('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      inbox_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });
});
