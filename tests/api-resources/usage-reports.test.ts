// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource usageReports', () => {
  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.usageReports.list({
      dimensions: ['string'],
      metrics: ['string'],
      product: 'product',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: required and optional params', async () => {
    const response = await client.usageReports.list({
      dimensions: ['string'],
      metrics: ['string'],
      product: 'product',
      date_range: 'date_range',
      end_date: 'end_date',
      filter: 'filter',
      format: 'csv',
      managed_accounts: true,
      'page[number]': 0,
      'page[size]': 0,
      sort: ['string'],
      start_date: 'start_date',
      authorization_bearer: 'authorization_bearer',
    });
  });

  // Prism tests are disabled
  test.skip('getOptions', async () => {
    const responsePromise = client.usageReports.getOptions();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getOptions: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.usageReports.getOptions(
        { product: 'product', authorization_bearer: 'authorization_bearer' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });
});
