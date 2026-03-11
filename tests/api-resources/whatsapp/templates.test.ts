// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource templates', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.whatsapp.templates.create({
      category: 'MARKETING',
      components: [{ foo: 'bar' }],
      language: 'language',
      name: 'name',
      waba_id: 'waba_id',
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
  test.skip('create: required and optional params', async () => {
    const response = await client.whatsapp.templates.create({
      category: 'MARKETING',
      components: [{ foo: 'bar' }],
      language: 'language',
      name: 'name',
      waba_id: 'waba_id',
    });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.whatsapp.templates.list();
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
      client.whatsapp.templates.list(
        {
          'filter[category]': 'MARKETING',
          'filter[search]': 'filter[search]',
          'filter[status]': 'filter[status]',
          'filter[waba_id]': 'filter[waba_id]',
          'page[number]': 0,
          'page[size]': 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });
});
