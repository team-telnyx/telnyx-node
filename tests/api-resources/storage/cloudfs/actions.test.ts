// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource actions', () => {
  // Mock server tests are disabled
  test.skip('rotateMetaToken: only required params', async () => {
    const responsePromise = client.storage.cloudfs.actions.rotateMetaToken(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { 'Idempotency-Key': 'Idempotency-Key' },
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
  test.skip('rotateMetaToken: required and optional params', async () => {
    const response = await client.storage.cloudfs.actions.rotateMetaToken(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { 'Idempotency-Key': 'Idempotency-Key' },
    );
  });
});
