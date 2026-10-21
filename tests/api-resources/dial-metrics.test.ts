// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource dialMetrics', () => {
  // Mock server tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.dialMetrics.list({
      end_time: '2019-12-27T18:11:19.117Z',
      granularity: 'second',
      start_time: '2019-12-27T18:11:19.117Z',
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
  test.skip('list: required and optional params', async () => {
    const response = await client.dialMetrics.list({
      end_time: '2019-12-27T18:11:19.117Z',
      granularity: 'second',
      start_time: '2019-12-27T18:11:19.117Z',
      'page[after]': 'page[after]',
      'page[limit]': 1,
      sort: '-start_time',
    });
  });
});
