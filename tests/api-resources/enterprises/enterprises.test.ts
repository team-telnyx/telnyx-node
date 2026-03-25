// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource enterprises', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.enterprises.create({
      billing_address: {
        administrative_area: 'Illinois',
        city: 'Chicago',
        country: 'United States',
        postal_code: '60601',
        street_address: '123 Main St',
      },
      billing_contact: {
        email: 'billing@acme.com',
        first_name: 'John',
        last_name: 'Doe',
        phone_number: '15551234568',
      },
      country_code: 'US',
      doing_business_as: 'Acme',
      fein: '12-3456789',
      industry: 'technology',
      legal_name: 'Acme Corp Inc.',
      number_of_employees: '51-200',
      organization_contact: {
        email: 'jane.smith@acme.com',
        first_name: 'Jane',
        job_title: 'VP of Engineering',
        last_name: 'Smith',
        phone: '+16035551234',
      },
      organization_legal_type: 'corporation',
      organization_physical_address: {
        administrative_area: 'Illinois',
        city: 'Chicago',
        country: 'United States',
        postal_code: '60601',
        street_address: '123 Main St',
      },
      organization_type: 'commercial',
      website: 'https://acme.com',
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
        administrative_area: 'Illinois',
        city: 'Chicago',
        country: 'United States',
        postal_code: '60601',
        street_address: '123 Main St',
        extended_address: 'Suite 400',
      },
      billing_contact: {
        email: 'billing@acme.com',
        first_name: 'John',
        last_name: 'Doe',
        phone_number: '15551234568',
      },
      country_code: 'US',
      doing_business_as: 'Acme',
      fein: '12-3456789',
      industry: 'technology',
      legal_name: 'Acme Corp Inc.',
      number_of_employees: '51-200',
      organization_contact: {
        email: 'jane.smith@acme.com',
        first_name: 'Jane',
        job_title: 'VP of Engineering',
        last_name: 'Smith',
        phone: '+16035551234',
      },
      organization_legal_type: 'corporation',
      organization_physical_address: {
        administrative_area: 'Illinois',
        city: 'Chicago',
        country: 'United States',
        postal_code: '60601',
        street_address: '123 Main St',
        extended_address: 'Suite 400',
      },
      organization_type: 'commercial',
      website: 'https://acme.com',
      corporate_registration_number: 'corporate_registration_number',
      customer_reference: 'customer_reference',
      dun_bradstreet_number: 'dun_bradstreet_number',
      primary_business_domain_sic_code: '7372',
      professional_license_number: 'professional_license_number',
      role_type: 'enterprise',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.enterprises.retrieve('6a09cdc3-8948-47f0-aa62-74ac943d6c58');
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
    const responsePromise = client.enterprises.update('6a09cdc3-8948-47f0-aa62-74ac943d6c58', {});
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
          legal_name: 'Acme',
          'page[number]': 1,
          'page[size]': 1,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.enterprises.delete('6a09cdc3-8948-47f0-aa62-74ac943d6c58');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
