// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx-node';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource callEvents', () => {
  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.callEvents.list();
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
      client.callEvents.list(
        {
          filter: {
            application_name: { contains: 'contains' },
            application_session_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            connection_id: 'connection_id',
            failed: false,
            from: '+12025550142',
            leg_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            name: 'name',
            occurred_at: {
              eq: '2019-03-29T11:10:00Z',
              gt: '2019-03-29T11:10:00Z',
              gte: '2019-03-29T11:10:00Z',
              lt: '2019-03-29T11:10:00Z',
              lte: '2019-03-29T11:10:00Z',
            },
            'outbound.outbound_voice_profile_id': 'outbound.outbound_voice_profile_id',
            product: 'texml',
            status: 'init',
            to: '+12025550142',
            type: 'webhook',
          },
          page: { after: 'after', before: 'before', limit: 1, number: 1, size: 1 },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });
});
