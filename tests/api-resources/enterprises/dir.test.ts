// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource dir', () => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.enterprises.dir.list('4a6192a4-573d-446d-b3ce-aff9117272a6');
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
      client.enterprises.dir.list(
        '4a6192a4-573d-446d-b3ce-aff9117272a6',
        {
          'filter[call_reason][contains]': 'filter[call_reason][contains]',
          'filter[display_name][contains]': 'filter[display_name][contains]',
          'filter[expiring_at][gte]': '2019-12-27T18:11:19.117Z',
          'filter[expiring_at][lte]': '2019-12-27T18:11:19.117Z',
          'filter[expiring_within_days]': 1,
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
  test.skip('create: only required params', async () => {
    const responsePromise = client.enterprises.dir.create('4a6192a4-573d-446d-b3ce-aff9117272a6', {
      authorizer_email: 'sam@acmeplumbing.example.com',
      authorizer_name: 'Sam Owner',
      call_reasons: ['Appointment reminders', 'Billing inquiries'],
      certify_brand_is_accurate: true,
      certify_ip_ownership: true,
      certify_no_shaft_content: true,
      display_name: 'Acme Plumbing',
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
    const response = await client.enterprises.dir.create('4a6192a4-573d-446d-b3ce-aff9117272a6', {
      authorizer_email: 'sam@acmeplumbing.example.com',
      authorizer_name: 'Sam Owner',
      call_reasons: ['Appointment reminders', 'Billing inquiries'],
      certify_brand_is_accurate: true,
      certify_ip_ownership: true,
      certify_no_shaft_content: true,
      display_name: 'Acme Plumbing',
      documents: [
        {
          document_id: '2a7e8337-e803-4057-a4ae-26c40eb0bc6c',
          document_type: 'business_registration',
          description: 'Certificate of incorporation.',
        },
      ],
      logo_url: 'https://acmeplumbing.example.com/logo-256.bmp',
      reselling: false,
    });
  });
});
