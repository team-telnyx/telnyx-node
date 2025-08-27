// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx-node';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource messagingOptouts', () => {
  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.messagingOptouts.list();
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
      client.messagingOptouts.list(
        {
          created_at: { gte: '2019-12-27T18:11:19.117Z', lte: '2019-12-27T18:11:19.117Z' },
          filter: { from: 'from', messaging_profile_id: 'messaging_profile_id' },
          page: { number: 1, size: 1 },
          redaction_enabled: 'redaction_enabled',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });
});
