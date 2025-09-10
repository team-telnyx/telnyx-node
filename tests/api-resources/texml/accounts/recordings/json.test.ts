// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource json', () => {
  test('deleteRecordingSidJson: only required params', async () => {
    const responsePromise = client.texml.accounts.recordings.json.deleteRecordingSidJson(
      '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
      { account_sid: 'account_sid' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('deleteRecordingSidJson: required and optional params', async () => {
    const response = await client.texml.accounts.recordings.json.deleteRecordingSidJson(
      '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
      { account_sid: 'account_sid' },
    );
  });

  test('retrieveRecordingSidJson: only required params', async () => {
    const responsePromise = client.texml.accounts.recordings.json.retrieveRecordingSidJson(
      '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
      { account_sid: 'account_sid' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieveRecordingSidJson: required and optional params', async () => {
    const response = await client.texml.accounts.recordings.json.retrieveRecordingSidJson(
      '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
      { account_sid: 'account_sid' },
    );
  });
});
