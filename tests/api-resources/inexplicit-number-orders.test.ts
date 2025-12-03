// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource inexplicitNumberOrders', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.inexplicitNumberOrders.create({
      ordering_groups: [
        { count_requested: 'count_requested', country_iso: 'US', phone_number_type: 'phone_number_type' },
      ],
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
    const response = await client.inexplicitNumberOrders.create({
      ordering_groups: [
        {
          count_requested: 'count_requested',
          country_iso: 'US',
          phone_number_type: 'phone_number_type',
          administrative_area: 'administrative_area',
          exclude_held_numbers: true,
          features: ['string'],
          locality: 'locality',
          national_destination_code: 'national_destination_code',
          phone_number: { contains: 'contains', ends_with: 'ends_with', starts_with: 'starts_with' },
          quickship: true,
          strategy: 'always',
        },
      ],
      billing_group_id: 'billing_group_id',
      connection_id: 'connection_id',
      customer_reference: 'customer_reference',
      messaging_profile_id: 'messaging_profile_id',
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.inexplicitNumberOrders.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
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
    const responsePromise = client.inexplicitNumberOrders.list();
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
      client.inexplicitNumberOrders.list(
        { page_number: 1, page_size: 1 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });
});
