// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource payConnectors', () => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.payConnectors.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.payConnectors.list(
        {
          'filter[created_at][eq]': '2026-10-01T00:00:00Z',
          'filter[created_at][gt]': '2026-10-01T00:00:00Z',
          'filter[created_at][gte]': '2026-10-01T00:00:00Z',
          'filter[created_at][lt]': '2026-10-01T00:00:00Z',
          'filter[created_at][lte]': '2026-10-01T00:00:00Z',
          'filter[mode]': 'test',
          'filter[name]': 'my-payment-connector',
          'filter[type]': 'generic',
          'filter[updated_at][eq]': '2026-10-01T00:00:00Z',
          'filter[updated_at][gt]': '2026-10-01T00:00:00Z',
          'filter[updated_at][gte]': '2026-10-01T00:00:00Z',
          'filter[updated_at][lt]': '2026-10-01T00:00:00Z',
          'filter[updated_at][lte]': '2026-10-01T00:00:00Z',
          'page[after]': 'page[after]',
          'page[before]': 'page[before]',
          'page[size]': 1,
          sort: '-created_at',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.payConnectors.create({
      config: { auth_type: 'none' },
      name: 'my-payment-connector',
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
  test.skip('create: required and optional params', async () => {
    const response = await client.payConnectors.create({
      config: {
        auth_type: 'none',
        token: {},
        endpoint_url: 'https://processor.example.com/pay',
        password: {},
        timeout: 1,
        username: {},
      },
      name: 'my-payment-connector',
      mode: 'test',
      type: 'generic',
    });
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.payConnectors.delete('my-payment-connector');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.payConnectors.retrieve('my-payment-connector');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.payConnectors.update('my-payment-connector', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
