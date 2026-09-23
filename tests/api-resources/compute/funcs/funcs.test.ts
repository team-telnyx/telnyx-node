// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource funcs', () => {
  // Mock server tests are disabled
  test.skip('retrieveLogs', async () => {
    const responsePromise = client.compute.funcs.retrieveLogs('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieveLogs: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.compute.funcs.retrieveLogs(
        'id',
        {
          end_time: '2019-12-27T18:11:19.117Z',
          limit: 1,
          start_time: '2019-12-27T18:11:19.117Z',
          type: 'runtime',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('retrieveMetricAggregates: only required params', async () => {
    const responsePromise = client.compute.funcs.retrieveMetricAggregates('id', {
      end_time: '2019-12-27T18:11:19.117Z',
      start_time: '2019-12-27T18:11:19.117Z',
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
  test.skip('retrieveMetricAggregates: required and optional params', async () => {
    const response = await client.compute.funcs.retrieveMetricAggregates('id', {
      end_time: '2019-12-27T18:11:19.117Z',
      start_time: '2019-12-27T18:11:19.117Z',
      'filter[edge_site]': 'filter[edge_site]',
      'filter[namespace]': 'filter[namespace]',
      'page[number]': 0,
      'page[size]': 1,
    });
  });

  // Mock server tests are disabled
  test.skip('retrieveRevisions', async () => {
    const responsePromise = client.compute.funcs.retrieveRevisions('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieveRevisions: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.compute.funcs.retrieveRevisions(
        'id',
        { 'page[number]': 1, 'page[size]': 1 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('retrieveShipInspection', async () => {
    const responsePromise = client.compute.funcs.retrieveShipInspection('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
