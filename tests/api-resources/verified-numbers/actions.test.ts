// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource actions', () => {
  test('submitVerificationCode: only required params', async () => {
    const responsePromise = client.verifiedNumbers.actions.submitVerificationCode('+15551234567', {
      verification_code: '123456',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('submitVerificationCode: required and optional params', async () => {
    const response = await client.verifiedNumbers.actions.submitVerificationCode('+15551234567', {
      verification_code: '123456',
    });
  });
});
