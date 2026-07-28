// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource labels', () => {
  // Mock server tests are disabled
  test.skip('deleteAll: only required params', async () => {
    const responsePromise = client.emailInboxes.messages.labels.deleteAll(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { inbox_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', labels: ['spam'] },
    );
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
    const response = await client.emailInboxes.messages.labels.deleteAll(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { inbox_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', labels: ['spam'] },
    );
  });

  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.emailInboxes.messages.labels.create(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { inbox_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', labels: ['spam', 'urgent'] },
    );
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
    const response = await client.emailInboxes.messages.labels.create(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { inbox_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', labels: ['spam', 'urgent'] },
    );
  });
});
