// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource usage', () => {
  // Mock server tests are disabled
  test.skip('retrieveSummary: only required params', async () => {
    const responsePromise = client.llmTokenGateway.usage.retrieveSummary({
      end_date: '2019-12-27',
      start_date: '2019-12-27',
      token_group_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
  test.skip('retrieveSummary: required and optional params', async () => {
    const response = await client.llmTokenGateway.usage.retrieveSummary({
      end_date: '2019-12-27',
      start_date: '2019-12-27',
      token_group_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      metadata: { foo: 'J!Q0Ok0bzJb7' },
    });
  });

  // Mock server tests are disabled
  test.skip('retrieveExport', async () => {
    const responsePromise = client.llmTokenGateway.usage.retrieveExport();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieveExport: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.llmTokenGateway.usage.retrieveExport(
        {
          cursor: 'cursor',
          limit: 1,
          start_time: '2019-12-27T18:11:19.117Z',
          types: 'types',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });
});
