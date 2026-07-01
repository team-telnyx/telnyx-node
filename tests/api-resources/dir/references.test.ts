// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource references', () => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.dir.references.list('16635d38-75a6-4481-82e8-69af60e05011');
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
    const responsePromise = client.dir.references.create('16635d38-75a6-4481-82e8-69af60e05011', {
      business_references: [
        {
          email: 'dana.reyes@example.com',
          full_name: 'Dana Reyes',
          phone_e164: '+14155550123',
          timezone: 'America/New_York',
        },
        {
          email: 'dana.reyes@example.com',
          full_name: 'Dana Reyes',
          phone_e164: '+14155550123',
          timezone: 'America/New_York',
        },
      ],
      financial_reference: {
        email: 'dana.reyes@example.com',
        full_name: 'Dana Reyes',
        phone_e164: '+14155550123',
        timezone: 'America/New_York',
      },
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
    const response = await client.dir.references.create('16635d38-75a6-4481-82e8-69af60e05011', {
      business_references: [
        {
          email: 'dana.reyes@example.com',
          full_name: 'Dana Reyes',
          phone_e164: '+14155550123',
          timezone: 'America/New_York',
          job_title: 'VP of Operations',
          organization: 'Acme Logistics',
          relationship_to_registrant: 'Supplier',
        },
        {
          email: 'dana.reyes@example.com',
          full_name: 'Dana Reyes',
          phone_e164: '+14155550123',
          timezone: 'America/New_York',
          job_title: 'VP of Operations',
          organization: 'Acme Logistics',
          relationship_to_registrant: 'Supplier',
        },
      ],
      financial_reference: {
        email: 'dana.reyes@example.com',
        full_name: 'Dana Reyes',
        phone_e164: '+14155550123',
        timezone: 'America/New_York',
        job_title: 'VP of Operations',
        organization: 'Acme Logistics',
        relationship_to_registrant: 'Supplier',
      },
    });
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.dir.references.update(0, {
      dir_id: '16635d38-75a6-4481-82e8-69af60e05011',
      ref_type: 'business',
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
    const response = await client.dir.references.update(0, {
      dir_id: '16635d38-75a6-4481-82e8-69af60e05011',
      ref_type: 'business',
      email: 'dana.reyes@example.com',
      full_name: 'Dana Reyes',
      job_title: 'VP of Operations',
      organization: 'Acme Logistics',
      phone_e164: '+14155550123',
      relationship_to_registrant: 'Supplier',
      timezone: 'America/New_York',
    });
  });
});
