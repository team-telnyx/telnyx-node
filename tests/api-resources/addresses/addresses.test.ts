// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource addresses', () => {
  test('create: only required params', async () => {
    const responsePromise = client.addresses.create({
      business_name: "Toy-O'Kon",
      country_code: 'US',
      first_name: 'Alfred',
      last_name: 'Foster',
      locality: 'Austin',
      street_address: '600 Congress Avenue',
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
    const response = await client.addresses.create({
      business_name: "Toy-O'Kon",
      country_code: 'US',
      first_name: 'Alfred',
      last_name: 'Foster',
      locality: 'Austin',
      street_address: '600 Congress Avenue',
      address_book: false,
      administrative_area: 'TX',
      borough: 'Guadalajara',
      customer_reference: 'MY REF 001',
      extended_address: '14th Floor',
      neighborhood: 'Ciudad de los deportes',
      phone_number: '+12125559000',
      postal_code: '78701',
      validate_address: true,
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.addresses.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list', async () => {
    const responsePromise = client.addresses.list();
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
      client.addresses.list(
        {
          filter: {
            address_book: { eq: 'eq' },
            customer_reference: 'string',
            street_address: { contains: 'contains' },
            used_as_emergency: 'used_as_emergency',
          },
          page: { number: 1, size: 1 },
          sort: 'street_address',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.addresses.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
