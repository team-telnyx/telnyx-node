// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource phoneNumbers', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.phoneNumbers.retrieve('1293384261075731499');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.phoneNumbers.update('1293384261075731499', {});
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
    const responsePromise = client.phoneNumbers.list();
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
      client.phoneNumbers.list(
        {
          filter: {
            billing_group_id: '62e4bf2e-c278-4282-b524-488d9c9c43b2',
            connection_id: '1521916448077776306',
            country_iso_alpha2: 'US',
            customer_reference: 'customer_reference',
            emergency_address_id: '9102160989215728032',
            number_type: { eq: 'local' },
            phone_number: 'phone_number',
            source: 'ported',
            status: 'active',
            tag: 'tag',
            'voice.connection_name': { contains: 'test', ends_with: 'test', eq: 'test', starts_with: 'test' },
            'voice.usage_payment_method': 'channel',
            without_tags: 'true',
          },
          page: { number: 1, size: 1 },
          sort: 'connection_name',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.phoneNumbers.delete('1293384261075731499');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('slimList', async () => {
    const responsePromise = client.phoneNumbers.slimList();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('slimList: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.phoneNumbers.slimList(
        {
          filter: {
            billing_group_id: '62e4bf2e-c278-4282-b524-488d9c9c43b2',
            connection_id: '1521916448077776306',
            country_iso_alpha2: 'US',
            customer_reference: 'customer_reference',
            emergency_address_id: '9102160989215728032',
            number_type: { eq: 'local' },
            phone_number: 'phone_number',
            source: 'ported',
            status: 'active',
            tag: 'tag',
            'voice.connection_name': { contains: 'test', ends_with: 'test', eq: 'test', starts_with: 'test' },
            'voice.usage_payment_method': 'channel',
          },
          include_connection: true,
          include_tags: true,
          page: { number: 1, size: 1 },
          sort: 'connection_name',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });
});
