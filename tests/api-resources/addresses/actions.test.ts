// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource actions', () => {
  // Prism tests are disabled
  test.skip('acceptSuggestions', async () => {
    const responsePromise = client.addresses.actions.acceptSuggestions(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
  test.skip('acceptSuggestions: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.addresses.actions.acceptSuggestions(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { id: 'id' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('validate: only required params', async () => {
    const responsePromise = client.addresses.actions.validate({
      country_code: 'US',
      postal_code: '78701',
      street_address: '600 Congress Avenue',
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
  test.skip('validate: required and optional params', async () => {
    const response = await client.addresses.actions.validate({
      country_code: 'US',
      postal_code: '78701',
      street_address: '600 Congress Avenue',
      administrative_area: 'TX',
      extended_address: '14th Floor',
      locality: 'Austin',
    });
  });
});
