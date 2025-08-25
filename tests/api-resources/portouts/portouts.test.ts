// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource portouts', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.portouts.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.portouts.list();
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
      client.portouts.list(
        {
          filter: {
            carrier_name: 'carrier_name',
            foc_date: '2024-09-04T00:00:00.000Z',
            inserted_at: { gte: '2024-09-04T00:00:00.000Z', lte: '2024-09-04T00:00:00.000Z' },
            phone_number: '+13035551212',
            pon: 'pon',
            ported_out_at: { gte: '2024-09-04T00:00:00.000Z', lte: '2024-09-04T00:00:00.000Z' },
            spid: 'spid',
            status: 'pending',
            status_in: ['pending'],
            support_key: 'PO_abc123',
          },
          page: { number: 1, size: 1 },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listRejectionCodes', async () => {
    const responsePromise = client.portouts.listRejectionCodes('329d6658-8f93-405d-862f-648776e8afd7');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listRejectionCodes: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.portouts.listRejectionCodes(
        '329d6658-8f93-405d-862f-648776e8afd7',
        { filter: { code: 1002 } },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('updateStatus: only required params', async () => {
    const responsePromise = client.portouts.updateStatus('authorized', {
      id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      reason: 'I do not recognize this transaction',
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
  test.skip('updateStatus: required and optional params', async () => {
    const response = await client.portouts.updateStatus('authorized', {
      id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      reason: 'I do not recognize this transaction',
      host_messaging: false,
    });
  });
});
