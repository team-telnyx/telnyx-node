// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource loa', () => {
  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.enterprises.reputation.loa.update('4a6192a4-573d-446d-b3ce-aff9117272a6', {
      loa_document_id: '2a7e8337-e803-4057-a4ae-26c40eb0bc6c',
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
  test.skip('update: required and optional params', async () => {
    const response = await client.enterprises.reputation.loa.update('4a6192a4-573d-446d-b3ce-aff9117272a6', {
      loa_document_id: '2a7e8337-e803-4057-a4ae-26c40eb0bc6c',
    });
  });

  // Mock server tests are disabled
  test.skip('render: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.enterprises.reputation.loa.render(
        '4a6192a4-573d-446d-b3ce-aff9117272a6',
        {
          agent: {
            administrative_area: 'administrative_area',
            city: 'city',
            contact_email: 'dev@stainless.com',
            contact_name: 'contact_name',
            contact_phone: '+13125550000',
            contact_title: 'contact_title',
            country: 'US',
            legal_name: 'legal_name',
            postal_code: 'postal_code',
            street_address: 'street_address',
            dba: 'dba',
            extended_address: 'extended_address',
          },
          signature: { image_base64: 'image_base64', signer_name: 'signer_name' },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });
});
