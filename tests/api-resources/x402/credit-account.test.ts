// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource creditAccount', () => {
  // Mock server tests are disabled
  test.skip('createPaymentQuote: only required params', async () => {
    const responsePromise = client.x402.creditAccount.createPaymentQuote({ amount_usd: '50.00' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('createPaymentQuote: required and optional params', async () => {
    const response = await client.x402.creditAccount.createPaymentQuote({ amount_usd: '50.00' });
  });

  // Mock server tests are disabled
  test.skip('settlePayment: only required params', async () => {
    const responsePromise = client.x402.creditAccount.settlePayment({ id: 'quote_abc123' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('settlePayment: required and optional params', async () => {
    const response = await client.x402.creditAccount.settlePayment({
      id: 'quote_abc123',
      payment_signature: '0xabc123...',
      'PAYMENT-SIGNATURE': 'PAYMENT-SIGNATURE',
    });
  });
});
