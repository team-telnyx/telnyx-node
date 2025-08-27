// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx-node';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource uploads', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.externalConnections.uploads.create('id', {
      number_ids: [
        '3920457616934164700',
        '3920457616934164701',
        '3920457616934164702',
        '3920457616934164703',
      ],
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
  test.skip('create: required and optional params', async () => {
    const response = await client.externalConnections.uploads.create('id', {
      number_ids: [
        '3920457616934164700',
        '3920457616934164701',
        '3920457616934164702',
        '3920457616934164703',
      ],
      additional_usages: ['calling_user_assignment'],
      civic_address_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      location_id: '67ea7693-9cd5-4a68-8c76-abb3aa5bf5d2',
      usage: 'first_party_app_assignment',
    });
  });

  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.externalConnections.uploads.retrieve(
      '7b6a6449-b055-45a6-81f6-f6f0dffa4cc6',
      { id: 'id' },
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
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.externalConnections.uploads.retrieve(
      '7b6a6449-b055-45a6-81f6-f6f0dffa4cc6',
      { id: 'id' },
    );
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.externalConnections.uploads.list('id');
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
      client.externalConnections.uploads.list(
        'id',
        {
          filter: {
            civic_address_id: { eq: '19990261512338516954' },
            location_id: { eq: '19995665508264022121' },
            phone_number: { contains: '+1970', eq: '+19705555098' },
            status: { eq: ['pending_upload', 'pending'] },
          },
          page: { number: 1, size: 1 },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('pendingCount', async () => {
    const responsePromise = client.externalConnections.uploads.pendingCount('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('refreshStatus', async () => {
    const responsePromise = client.externalConnections.uploads.refreshStatus('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retry: only required params', async () => {
    const responsePromise = client.externalConnections.uploads.retry('7b6a6449-b055-45a6-81f6-f6f0dffa4cc6', {
      id: 'id',
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
  test.skip('retry: required and optional params', async () => {
    const response = await client.externalConnections.uploads.retry('7b6a6449-b055-45a6-81f6-f6f0dffa4cc6', {
      id: 'id',
    });
  });
});
