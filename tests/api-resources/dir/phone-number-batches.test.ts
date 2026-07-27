// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource phoneNumberBatches', () => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.dir.phoneNumberBatches.list('16635d38-75a6-4481-82e8-69af60e05011');
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
      client.dir.phoneNumberBatches.list(
        '16635d38-75a6-4481-82e8-69af60e05011',
        {
          'filter[status]': 'submitted',
          'page[number]': 1,
          'page[size]': 20,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.dir.phoneNumberBatches.retrieve('0a4b1f5e-2f12-4c0c-9a98-9b3a7d8b8e62', {
      dir_id: '16635d38-75a6-4481-82e8-69af60e05011',
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
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.dir.phoneNumberBatches.retrieve('0a4b1f5e-2f12-4c0c-9a98-9b3a7d8b8e62', {
      dir_id: '16635d38-75a6-4481-82e8-69af60e05011',
    });
  });
});
