// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource activationJobs', () => {
  test('retrieve: only required params', async () => {
    const responsePromise = client.portingOrders.activationJobs.retrieve(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.portingOrders.activationJobs.retrieve(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
    );
  });

  test('update: only required params', async () => {
    const responsePromise = client.portingOrders.activationJobs.update(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.portingOrders.activationJobs.update(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', activate_at: '2019-01-01T00:00:00Z' },
    );
  });

  test('list', async () => {
    const responsePromise = client.portingOrders.activationJobs.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.portingOrders.activationJobs.list(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { page: { number: 1, size: 1 } },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });
});
