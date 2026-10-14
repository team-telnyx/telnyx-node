// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource spend', () => {
  // Mock server tests are disabled
  test.skip('retrieveEvents', async () => {
    const responsePromise = client.llmTokenGateway.spend.retrieveEvents();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieveEvents: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.llmTokenGateway.spend.retrieveEvents(
        {
          end_date: '2019-12-27',
          end_user_id: 'end_user_id',
          metadata: { foo: 'J!Q0Ok0bzJb7' },
          'page[number]': 1,
          'page[size]': 1,
          'page[snapshot]': 'page[snapshot]',
          start_date: '2019-12-27',
          token_group_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          token_key_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          token_user_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('retrieveSummary: only required params', async () => {
    const responsePromise = client.llmTokenGateway.spend.retrieveSummary({
      end_date: '2019-12-27',
      group_by: 'token_group',
      start_date: '2019-12-27',
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
    const response = await client.llmTokenGateway.spend.retrieveSummary({
      end_date: '2019-12-27',
      group_by: 'token_group',
      start_date: '2019-12-27',
      end_user_id: 'end_user_id',
      metadata: { foo: 'J!Q0Ok0bzJb7' },
      'page[number]': 1,
      'page[size]': 1,
      'page[snapshot]': 'page[snapshot]',
      token_group_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      token_key_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      token_user_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });
});
