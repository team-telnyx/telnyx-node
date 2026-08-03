// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource webhooks', () => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.emailDomains.webhooks.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
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
      client.emailDomains.webhooks.list(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        {
          'page[number]': 1,
          'page[size]': 1,
          sort: 'created_at',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.emailDomains.webhooks.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      events: ['email.sent', 'email.delivered', 'email.bounced'],
      url: 'https://example.com/webhooks/email',
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
    const response = await client.emailDomains.webhooks.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      events: ['email.sent', 'email.delivered', 'email.bounced'],
      url: 'https://example.com/webhooks/email',
    });
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.emailDomains.webhooks.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      domain_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
    const response = await client.emailDomains.webhooks.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      domain_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.emailDomains.webhooks.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      domain_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
    const response = await client.emailDomains.webhooks.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      domain_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.emailDomains.webhooks.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      domain_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
    const response = await client.emailDomains.webhooks.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      domain_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      events: ['email.sent', 'email.delivered', 'email.opened'],
      url: 'https://example.com',
    });
  });
});
