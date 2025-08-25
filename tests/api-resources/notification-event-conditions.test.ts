// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource notificationEventConditions', () => {
  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.notificationEventConditions.list();
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
      client.notificationEventConditions.list(
        {
          filter: {
            associated_record_type: { eq: 'phone_number' },
            channel_type_id: { eq: 'webhook' },
            notification_channel: { eq: '12455643-3cf1-4683-ad23-1cd32f7d5e0a' },
            notification_event_condition_id: { eq: '12455643-3cf1-4683-ad23-1cd32f7d5e0a' },
            notification_profile_id: { eq: '12455643-3cf1-4683-ad23-1cd32f7d5e0a' },
            status: { eq: 'enable-received' },
          },
          page: { number: 1, size: 1 },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });
});
