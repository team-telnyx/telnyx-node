// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource usage', () => {
  // Mock server tests are disabled
  test.skip('getAPIUsage: only required params', async () => {
    const responsePromise = client.storage.buckets.usage.getAPIUsage('', {
      filter: { end_time: '2019-12-27T18:11:19.117Z', start_time: '2019-12-27T18:11:19.117Z' },
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
  test.skip('getAPIUsage: required and optional params', async () => {
    const response = await client.storage.buckets.usage.getAPIUsage('', {
      filter: { end_time: '2019-12-27T18:11:19.117Z', start_time: '2019-12-27T18:11:19.117Z' },
    });
  });

  // Mock server tests are disabled
  test.skip('getBucketUsage', async () => {
    const responsePromise = client.storage.buckets.usage.getBucketUsage('');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
