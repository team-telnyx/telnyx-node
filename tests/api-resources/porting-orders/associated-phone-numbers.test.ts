// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx-node';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource associatedPhoneNumbers', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.portingOrders.associatedPhoneNumbers.create(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { action: 'keep', phone_number_range: {} },
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
  test.skip('create: required and optional params', async () => {
    const response = await client.portingOrders.associatedPhoneNumbers.create(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { action: 'keep', phone_number_range: { end_at: '+441234567899', start_at: '+441234567890' } },
    );
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.portingOrders.associatedPhoneNumbers.list(
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
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.portingOrders.associatedPhoneNumbers.list(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        {
          filter: { action: 'keep', phone_number: '+441234567890' },
          page: { number: 1, size: 1 },
          sort: { value: '-created_at' },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.portingOrders.associatedPhoneNumbers.delete(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { porting_order_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
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
  test.skip('delete: required and optional params', async () => {
    const response = await client.portingOrders.associatedPhoneNumbers.delete(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { porting_order_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
    );
  });
});
