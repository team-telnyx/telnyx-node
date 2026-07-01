// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource enterprises', () => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.enterprises.list();
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
      client.enterprises.list(
        {
          'filter[legal_name][contains]': 'Acme',
          legal_name: 'Acme',
          'page[number]': 1,
          'page[size]': 10,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.enterprises.create({
      billing_address: {
        administrative_area: 'IL',
        city: 'Chicago',
        country: 'US',
        postal_code: '60601',
        street_address: '100 Main St',
      },
      billing_contact: {
        email: 'billing@run065.example.com',
        first_name: 'Alex',
        last_name: 'Bill',
        phone_number: '+13125550001',
      },
      country_code: 'US',
      doing_business_as: 'Run 065 Debug',
      fein: '12-3456789',
      industry: 'technology',
      jurisdiction_of_incorporation: 'Delaware',
      legal_name: 'Run 065 Debug Co',
      number_of_employees: '51-200',
      organization_contact: {
        email: 'org@run065.example.com',
        first_name: 'Sam',
        job_title: 'Compliance Lead',
        last_name: 'Org',
        phone_number: '+13125550000',
      },
      organization_legal_type: 'llc',
      organization_physical_address: {
        administrative_area: 'IL',
        city: 'Chicago',
        country: 'US',
        postal_code: '60601',
        street_address: '100 Main St',
      },
      organization_type: 'commercial',
      website: 'https://run065.example.com',
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
    const response = await client.enterprises.create({
      billing_address: {
        administrative_area: 'IL',
        city: 'Chicago',
        country: 'US',
        postal_code: '60601',
        street_address: '100 Main St',
        extended_address: 'Suite 504',
      },
      billing_contact: {
        email: 'billing@run065.example.com',
        first_name: 'Alex',
        last_name: 'Bill',
        phone_number: '+13125550001',
      },
      country_code: 'US',
      doing_business_as: 'Run 065 Debug',
      fein: '12-3456789',
      industry: 'technology',
      jurisdiction_of_incorporation: 'Delaware',
      legal_name: 'Run 065 Debug Co',
      number_of_employees: '51-200',
      organization_contact: {
        email: 'org@run065.example.com',
        first_name: 'Sam',
        job_title: 'Compliance Lead',
        last_name: 'Org',
        phone_number: '+13125550000',
      },
      organization_legal_type: 'llc',
      organization_physical_address: {
        administrative_area: 'IL',
        city: 'Chicago',
        country: 'US',
        postal_code: '60601',
        street_address: '100 Main St',
        extended_address: 'Suite 504',
      },
      organization_type: 'commercial',
      website: 'https://run065.example.com',
      corporate_registration_number: 'corporate_registration_number',
      customer_reference: 'internal-id-12345',
      dun_bradstreet_number: 'dun_bradstreet_number',
      primary_business_domain_sic_code: 'primary_business_domain_sic_code',
      professional_license_number: 'professional_license_number',
      role_type: 'enterprise',
    });
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.enterprises.delete('4a6192a4-573d-446d-b3ce-aff9117272a6');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.enterprises.retrieve('4a6192a4-573d-446d-b3ce-aff9117272a6');
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
    const responsePromise = client.enterprises.update('4a6192a4-573d-446d-b3ce-aff9117272a6', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('brandedCalling', async () => {
    const responsePromise = client.enterprises.brandedCalling('4a6192a4-573d-446d-b3ce-aff9117272a6');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
