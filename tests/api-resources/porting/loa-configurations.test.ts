// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource loaConfigurations', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.porting.loaConfigurations.create({
      address: {
        city: 'Austin',
        country_code: 'US',
        state: 'TX',
        street_address: '600 Congress Avenue',
        zip_code: '78701',
      },
      company_name: 'Telnyx',
      contact: { email: 'testing@telnyx.com', phone_number: '+12003270001' },
      logo: { document_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
      name: 'My LOA Configuration',
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
  test.skip('create: required and optional params', async () => {
    const response = await client.porting.loaConfigurations.create({
      address: {
        city: 'Austin',
        country_code: 'US',
        state: 'TX',
        street_address: '600 Congress Avenue',
        zip_code: '78701',
        extended_address: '14th Floor',
      },
      company_name: 'Telnyx',
      contact: { email: 'testing@telnyx.com', phone_number: '+12003270001' },
      logo: { document_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
      name: 'My LOA Configuration',
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.porting.loaConfigurations.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.porting.loaConfigurations.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      address: {
        city: 'Austin',
        country_code: 'US',
        state: 'TX',
        street_address: '600 Congress Avenue',
        zip_code: '78701',
      },
      company_name: 'Telnyx',
      contact: { email: 'testing@telnyx.com', phone_number: '+12003270001' },
      logo: { document_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
      name: 'My LOA Configuration',
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
  test.skip('update: required and optional params', async () => {
    const response = await client.porting.loaConfigurations.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      address: {
        city: 'Austin',
        country_code: 'US',
        state: 'TX',
        street_address: '600 Congress Avenue',
        zip_code: '78701',
        extended_address: '14th Floor',
      },
      company_name: 'Telnyx',
      contact: { email: 'testing@telnyx.com', phone_number: '+12003270001' },
      logo: { document_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
      name: 'My LOA Configuration',
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.porting.loaConfigurations.list();
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
      client.porting.loaConfigurations.list(
        { page: { number: 1, size: 1 } },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.porting.loaConfigurations.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('preview0: required and optional params', async () => {
    const response = await client.porting.loaConfigurations.preview0({
      address: {
        city: 'Austin',
        country_code: 'US',
        state: 'TX',
        street_address: '600 Congress Avenue',
        zip_code: '78701',
        extended_address: '14th Floor',
      },
      company_name: 'Telnyx',
      contact: { email: 'testing@telnyx.com', phone_number: '+12003270001' },
      logo: { document_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
      name: 'My LOA Configuration',
    });
  });
});
