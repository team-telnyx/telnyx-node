// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource faxes', () => {
  test('create: only required params', async () => {
    const responsePromise = client.faxes.create({
      connection_id: '234423',
      from: '+13125790015',
      to: '+13127367276',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.faxes.create({
      connection_id: '234423',
      from: '+13125790015',
      to: '+13127367276',
      client_state: 'aGF2ZSBhIG5pY2UgZGF5ID1d',
      from_display_name: 'Company Name',
      media_name: 'my_media_uploaded_to_media_storage_api',
      media_url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      monochrome: true,
      preview_format: 'pdf',
      quality: 'high',
      store_media: true,
      store_preview: true,
      t38_enabled: true,
      webhook_url: 'https://www.example.com/server-b/',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.faxes.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list', async () => {
    const responsePromise = client.faxes.list();
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
      client.faxes.list(
        {
          filter: {
            created_at: {
              gt: '2020-02-02T22:25:27.521992Z',
              gte: '2020-02-02T22:25:27.521992Z',
              lt: '2020-02-02T22:25:27.521992Z',
              lte: '2020-02-02T22:25:27.521992Z',
            },
            direction: { eq: 'inbound' },
            from: { eq: '+13127367276' },
            to: { eq: '+13127367276' },
          },
          page: { number: 2, size: 2 },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.faxes.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
