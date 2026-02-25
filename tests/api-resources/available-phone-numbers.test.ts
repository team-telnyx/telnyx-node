// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource availablePhoneNumbers', () => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.availablePhoneNumbers.list();
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
      client.availablePhoneNumbers.list(
        {
          filter: {
            administrative_area: 'administrative_area',
            best_effort: true,
            country_code: 'country_code',
            exclude_held_numbers: true,
            features: ['sms'],
            limit: 0,
            locality: 'locality',
            national_destination_code: 'national_destination_code',
            phone_number: {
              contains: 'contains',
              ends_with: 'ends_with',
              starts_with: 'starts_with',
            },
            phone_number_type: 'local',
            quickship: true,
            rate_center: 'rate_center',
            reservable: true,
          },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });
});
