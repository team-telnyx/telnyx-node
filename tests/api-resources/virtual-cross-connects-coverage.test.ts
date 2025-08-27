// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx-node';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource virtualCrossConnectsCoverage', () => {
  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.virtualCrossConnectsCoverage.list();
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
      client.virtualCrossConnectsCoverage.list(
        {
          filter: {
            cloud_provider: 'aws',
            cloud_provider_region: 'us-east-1',
            'location.code': 'silicon_valley-ca',
            'location.pop': 'SV1',
            'location.region': 'AMER',
            'location.site': 'SJC',
          },
          filters: { available_bandwidth: 0 },
          page: { number: 1, size: 1 },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });
});
