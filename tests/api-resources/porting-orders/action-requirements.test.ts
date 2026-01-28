// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource actionRequirements', () => {
  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.portingOrders.actionRequirements.list('porting_order_id');
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
      client.portingOrders.actionRequirements.list(
        'porting_order_id',
        {
          filter: {
            id: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
            action_type: 'au_id_verification',
            requirement_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            status: 'created',
          },
          'page[number]': 0,
          'page[size]': 0,
          sort: { value: 'created_at' },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('initiate: only required params', async () => {
    const responsePromise = client.portingOrders.actionRequirements.initiate('id', {
      porting_order_id: 'porting_order_id',
      params: { first_name: 'John', last_name: 'Doe' },
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
  test.skip('initiate: required and optional params', async () => {
    const response = await client.portingOrders.actionRequirements.initiate('id', {
      porting_order_id: 'porting_order_id',
      params: { first_name: 'John', last_name: 'Doe' },
    });
  });
});
