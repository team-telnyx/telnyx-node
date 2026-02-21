// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource releases', () => {
  // Mock server tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.externalConnections.releases.retrieve(
      '7b6a6449-b055-45a6-81f6-f6f0dffa4cc6',
      { id: '1293384261075731499' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.externalConnections.releases.retrieve(
      '7b6a6449-b055-45a6-81f6-f6f0dffa4cc6',
      { id: '1293384261075731499' },
    );
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.externalConnections.releases.list('1293384261075731499');
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
      client.externalConnections.releases.list(
        '1293384261075731499',
        {
          filter: {
            civic_address_id: { eq: '19990261512338516954' },
            location_id: { eq: '19995665508264022121' },
            phone_number: { contains: '+123', eq: '+1234567890' },
            status: { eq: ['pending', 'in_progress'] },
          },
          'page[number]': 0,
          'page[size]': 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });
});
