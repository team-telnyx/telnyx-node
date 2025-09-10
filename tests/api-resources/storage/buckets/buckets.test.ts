// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource buckets', () => {
  test('createPresignedURL: only required params', async () => {
    const responsePromise = client.storage.buckets.createPresignedURL('', { bucketName: '' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createPresignedURL: required and optional params', async () => {
    const response = await client.storage.buckets.createPresignedURL('', { bucketName: '', ttl: 1 });
  });
});
