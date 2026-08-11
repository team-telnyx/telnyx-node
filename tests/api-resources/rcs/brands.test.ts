// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource brands', () => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.rcs.brands.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.rcs.brands.create({
      addresses: {
        primary: {
          administrative_area: 'IL',
          city: 'Chicago',
          country_code: 'US',
          line_1: '1 Main Street',
          postal_code: '60601',
        },
      },
      contacts: {
        brand: {
          contact_type: 'BRAND',
          email: 'jane@example.com',
          first_name: 'Jane',
          last_name: 'Doe',
          phone_number: '+13125550100',
        },
      },
      display_name: 'Acme',
      identifiers: { ein: { identifier_type: 'EIN', value: '12-3456789' } },
      legal_entity_type: 'LIMITED_LIABILITY_COMPANY',
      legal_name: 'Acme LLC',
      organization_type: 'PRIVATE_PROFIT',
      website_url: 'https://www.example.com',
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
    const response = await client.rcs.brands.create({
      addresses: {
        primary: {
          administrative_area: 'IL',
          city: 'Chicago',
          country_code: 'US',
          line_1: '1 Main Street',
          postal_code: '60601',
          line_2: 'x',
        },
      },
      contacts: {
        brand: {
          contact_type: 'BRAND',
          email: 'jane@example.com',
          first_name: 'Jane',
          last_name: 'Doe',
          phone_number: '+13125550100',
          title: 'Messaging Operations Manager',
        },
      },
      display_name: 'Acme',
      identifiers: {
        ein: { identifier_type: 'EIN', value: '12-3456789' },
        stock_symbol: { identifier_type: 'STOCK_SYMBOL', value: 'J!Q0Ok0bzJb7:pro' },
      },
      legal_entity_type: 'LIMITED_LIABILITY_COMPANY',
      legal_name: 'Acme LLC',
      organization_type: 'PRIVATE_PROFIT',
      website_url: 'https://www.example.com',
      profile_id: '40000000-0000-0000-0000-000000000001',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.rcs.brands.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
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
    const responsePromise = client.rcs.brands.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('submit', async () => {
    const responsePromise = client.rcs.brands.submit('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
