// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource phoneNumberBlocks', () => {
  test('create: only required params', async () => {
    const responsePromise = client.portingOrders.phoneNumberBlocks.create(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        activation_ranges: [{ end_at: '+4930244999910', start_at: '+4930244999901' }],
        phone_number_range: { end_at: '+4930244999910', start_at: '+4930244999901' },
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
    const response = await client.portingOrders.phoneNumberBlocks.create(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        activation_ranges: [{ end_at: '+4930244999910', start_at: '+4930244999901' }],
        phone_number_range: { end_at: '+4930244999910', start_at: '+4930244999901' },
      },
    );
  });

  test('list', async () => {
    const responsePromise = client.portingOrders.phoneNumberBlocks.list(
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
      client.portingOrders.phoneNumberBlocks.list(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        {
          filter: {
            activation_status: 'Active',
            phone_number: ['+12003151212'],
            portability_status: 'confirmed',
            porting_order_id: ['f3575e15-32ce-400e-a4c0-dd78800c20b0'],
            status: 'in-process',
            support_key: 'sr_a12345',
          },
          page: { number: 1, size: 1 },
          sort: { value: '-created_at' },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });

  test('delete: only required params', async () => {
    const responsePromise = client.portingOrders.phoneNumberBlocks.delete(
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
    const response = await client.portingOrders.phoneNumberBlocks.delete(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { porting_order_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
    );
  });
});
