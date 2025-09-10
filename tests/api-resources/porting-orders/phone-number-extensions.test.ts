// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource phoneNumberExtensions', () => {
  test('create: only required params', async () => {
    const responsePromise = client.portingOrders.phoneNumberExtensions.create(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        activation_ranges: [{ end_at: 10, start_at: 1 }],
        extension_range: { end_at: 10, start_at: 1 },
        porting_phone_number_id: 'f24151b6-3389-41d3-8747-7dd8c681e5e2',
      },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.portingOrders.phoneNumberExtensions.create(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        activation_ranges: [{ end_at: 10, start_at: 1 }],
        extension_range: { end_at: 10, start_at: 1 },
        porting_phone_number_id: 'f24151b6-3389-41d3-8747-7dd8c681e5e2',
      },
    );
  });

  test('list', async () => {
    const responsePromise = client.portingOrders.phoneNumberExtensions.list(
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

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.portingOrders.phoneNumberExtensions.list(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        {
          filter: { porting_phone_number_id: '04f8f1b9-310c-4a3c-963e-7dfc54765140' },
          page: { number: 1, size: 1 },
          sort: { value: '-created_at' },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });

  test('delete: only required params', async () => {
    const responsePromise = client.portingOrders.phoneNumberExtensions.delete(
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

  test('delete: required and optional params', async () => {
    const response = await client.portingOrders.phoneNumberExtensions.delete(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { porting_order_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
    );
  });
});
