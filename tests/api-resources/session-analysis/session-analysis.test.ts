// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource sessionAnalysis', () => {
  // Mock server tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.sessionAnalysis.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      record_type: 'record_type',
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
    const response = await client.sessionAnalysis.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      record_type: 'record_type',
      date_time: '2019-12-27T18:11:19.117Z',
      expand: 'record',
      include_children: true,
      max_depth: 1,
    });
  });
});
