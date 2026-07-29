// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource filters', () => {
  // Mock server tests are disabled
  test.skip('deleteAll: only required params', async () => {
    const responsePromise = client.emailInboxes.filters.deleteAll('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      entries: ['former-partner@example.com'],
      type: 'allowlist',
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
  test.skip('deleteAll: required and optional params', async () => {
    const response = await client.emailInboxes.filters.deleteAll('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      entries: ['former-partner@example.com'],
      type: 'allowlist',
    });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.emailInboxes.filters.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.emailInboxes.filters.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      entries: ['@spam.example'],
      type: 'blocklist',
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
    const response = await client.emailInboxes.filters.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      entries: ['@spam.example'],
      type: 'blocklist',
    });
  });
});
