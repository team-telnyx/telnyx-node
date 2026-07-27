// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource remediation', () => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.enterprises.reputation.remediation.list(
      '4a6192a4-573d-446d-b3ce-aff9117272a6',
    );
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
      client.enterprises.reputation.remediation.list(
        '4a6192a4-573d-446d-b3ce-aff9117272a6',
        {
          'filter[created_at][gte]': '2026-01-01T00:00:00Z',
          'filter[created_at][lte]': '2026-12-31T23:59:59Z',
          'filter[status]': 'in_progress',
          'page[number]': 1,
          'page[size]': 20,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.enterprises.reputation.remediation.create(
      '4a6192a4-573d-446d-b3ce-aff9117272a6',
      {
        call_purpose: 'Appointment reminders for our dental clinic.',
        phone_numbers: ['+19493253498', '+12134445566'],
      },
    );
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
    const response = await client.enterprises.reputation.remediation.create(
      '4a6192a4-573d-446d-b3ce-aff9117272a6',
      {
        call_purpose: 'Appointment reminders for our dental clinic.',
        phone_numbers: ['+19493253498', '+12134445566'],
        contact_email: 'ops@example.com',
        webhook_url: 'https://example.com/webhooks/remediation',
      },
    );
  });

  // Mock server tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.enterprises.reputation.remediation.retrieve(
      'b7c1f1c0-7a9d-4f0a-9d3e-2f6a1c4b8e21',
      { enterprise_id: '4a6192a4-573d-446d-b3ce-aff9117272a6' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.enterprises.reputation.remediation.retrieve(
      'b7c1f1c0-7a9d-4f0a-9d3e-2f6a1c4b8e21',
      { enterprise_id: '4a6192a4-573d-446d-b3ce-aff9117272a6' },
    );
  });
});
