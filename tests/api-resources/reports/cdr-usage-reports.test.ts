// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource cdrUsageReports', () => {
  // Mock server tests are disabled
  test.skip('fetchSync: only required params', async () => {
    const responsePromise = client.reports.cdrUsageReports.fetchSync({
      aggregation_type: 'NO_AGGREGATION',
      product_breakdown: 'NO_BREAKDOWN',
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
  test.skip('fetchSync: required and optional params', async () => {
    const response = await client.reports.cdrUsageReports.fetchSync({
      aggregation_type: 'NO_AGGREGATION',
      product_breakdown: 'NO_BREAKDOWN',
      connections: [1234567890123],
      end_date: '2020-07-01T00:00:00-06:00',
      start_date: '2020-07-01T00:00:00-06:00',
    });
  });
});
