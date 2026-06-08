// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource dir', () => {
  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.dir.retrieve('16635d38-75a6-4481-82e8-69af60e05011');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.dir.update('16635d38-75a6-4481-82e8-69af60e05011', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.dir.list();
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
      client.dir.list(
        {
          'filter[call_reason][contains]': 'filter[call_reason][contains]',
          'filter[display_name][contains]': 'filter[display_name][contains]',
          'filter[enterprise_id]': '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          'filter[expiring_at][gte]': '2019-12-27T18:11:19.117Z',
          'filter[expiring_at][lte]': '2019-12-27T18:11:19.117Z',
          'filter[status]': 'draft',
          'page[number]': 1,
          'page[size]': 20,
          sort: 'created_at',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.dir.delete('16635d38-75a6-4481-82e8-69af60e05011');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('createLoa: required and optional params', async () => {
    const response = await client.dir.createLoa('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      phone_numbers: ['+13125550000'],
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
      signature: { image_base64: 'x', signer_name: 'signer_name' },
    });
  });

  // Mock server tests are disabled
  test.skip('listDocumentTypes', async () => {
    const responsePromise = client.dir.listDocumentTypes();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listInfringementClaims', async () => {
    const responsePromise = client.dir.listInfringementClaims('16635d38-75a6-4481-82e8-69af60e05011');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listInfringementClaims: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.dir.listInfringementClaims(
        '16635d38-75a6-4481-82e8-69af60e05011',
        { 'page[number]': 1, 'page[size]': 20 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('submit', async () => {
    const responsePromise = client.dir.submit('16635d38-75a6-4481-82e8-69af60e05011');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('updateInfringement: only required params', async () => {
    const responsePromise = client.dir.updateInfringement('16635d38-75a6-4481-82e8-69af60e05011', {
      certify_brand_is_accurate: true,
      certify_ip_ownership: true,
      certify_no_infringement: true,
      certify_no_shaft_content: true,
      infringement_resolution_notes:
        'Updated the display name to remove the disputed mark and re-uploaded the authorization.',
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
  test.skip('updateInfringement: required and optional params', async () => {
    const response = await client.dir.updateInfringement('16635d38-75a6-4481-82e8-69af60e05011', {
      certify_brand_is_accurate: true,
      certify_ip_ownership: true,
      certify_no_infringement: true,
      certify_no_shaft_content: true,
      infringement_resolution_notes:
        'Updated the display name to remove the disputed mark and re-uploaded the authorization.',
      call_reasons: ['string'],
      display_name: 'x',
      documents: [
        {
          document_id: '2a7e8337-e803-4057-a4ae-26c40eb0bc6c',
          document_type: 'business_registration',
          description: 'Certificate of incorporation.',
        },
      ],
      logo_url: 'logo_url',
    });
  });
});
