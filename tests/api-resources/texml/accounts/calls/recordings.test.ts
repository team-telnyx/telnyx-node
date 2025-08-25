// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource recordings', () => {
  // Prism tests are disabled
  test.skip('recordingSidJson: only required params', async () => {
    const responsePromise = client.texml.accounts.calls.recordings.recordingSidJson(
      '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
      { account_sid: 'account_sid', call_sid: 'call_sid' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('recordingSidJson: required and optional params', async () => {
    const response = await client.texml.accounts.calls.recordings.recordingSidJson(
      '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
      { account_sid: 'account_sid', call_sid: 'call_sid', Status: 'paused' },
    );
  });
});
