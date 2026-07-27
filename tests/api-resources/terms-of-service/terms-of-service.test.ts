// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource termsOfService', () => {
  // Mock server tests are disabled
  test.skip('retrieveStatus', async () => {
    const responsePromise = client.termsOfService.retrieveStatus();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieveStatus: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.termsOfService.retrieveStatus(
        { product_type: 'branded_calling' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('retrieveInfo', async () => {
    const responsePromise = client.termsOfService.retrieveInfo();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieveInfo: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.termsOfService.retrieveInfo(
        { product_type: 'branded_calling' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });
});
