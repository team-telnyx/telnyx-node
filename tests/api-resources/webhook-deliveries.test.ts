// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx-node';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource webhookDeliveries', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.webhookDeliveries.retrieve('C9C0797E-901D-4349-A33C-C2C8F31A92C2');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.webhookDeliveries.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.webhookDeliveries.list(
        {
          filter: {
            attempts: { contains: 'https://fallback.example.com/webhooks' },
            event_type: 'call_initiated,call.initiated',
            finished_at: { gte: '2019-03-29T11:10:00Z', lte: '2019-03-29T11:10:00Z' },
            started_at: { gte: '2019-03-29T11:10:00Z', lte: '2019-03-29T11:10:00Z' },
            status: { eq: 'delivered' },
            webhook: { contains: 'call.initiated' },
          },
          page: { number: 1, size: 1 },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });
});
