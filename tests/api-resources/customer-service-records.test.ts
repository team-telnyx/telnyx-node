// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource customerServiceRecords', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.customerServiceRecords.create({ phone_number: '+13035553000' });
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
    const response = await client.customerServiceRecords.create({
      phone_number: '+13035553000',
      additional_data: {
        account_number: '123456789',
        address_line_1: '123 Main St',
        authorized_person_name: 'John Doe',
        billing_phone_number: '+12065551212',
        city: 'New York',
        customer_code: '123456789',
        name: 'Entity Inc.',
        pin: '1234',
        state: 'NY',
        zip_code: '10001',
      },
      webhook_url: 'https://example.com/webhook',
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.customerServiceRecords.retrieve('customer_service_record_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.customerServiceRecords.list();
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
      client.customerServiceRecords.list(
        {
          filter: {
            created_at: { gt: '2020-01-01T00:00:00Z', lt: '2020-01-01T00:00:00Z' },
            phone_number: { eq: '+12441239999', in: ['+12441239999'] },
            status: { eq: 'pending', in: ['pending'] },
          },
          'page[number]': 0,
          'page[size]': 0,
          sort: { value: 'created_at' },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('verifyPhoneNumberCoverage: only required params', async () => {
    const responsePromise = client.customerServiceRecords.verifyPhoneNumberCoverage({
      phone_numbers: ['+13035553000'],
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
  test.skip('verifyPhoneNumberCoverage: required and optional params', async () => {
    const response = await client.customerServiceRecords.verifyPhoneNumberCoverage({
      phone_numbers: ['+13035553000'],
    });
  });
});
