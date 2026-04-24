// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource payment', () => {
  // Mock server tests are disabled
  test.skip('createStoredPaymentTransaction: only required params', async () => {
    const responsePromise = client.payment.createStoredPaymentTransaction({ amount: '120.00' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('createStoredPaymentTransaction: required and optional params', async () => {
    const response = await client.payment.createStoredPaymentTransaction({ amount: '120.00' });
  });
});
