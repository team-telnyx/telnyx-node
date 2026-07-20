// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource conversationInsights', () => {
  // Mock server tests are disabled
  test.skip('retrieveAggregates', async () => {
    const responsePromise = client.ai.conversations.conversationInsights.retrieveAggregates();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieveAggregates: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.ai.conversations.conversationInsights.retrieveAggregates(
        {
          created_at: 'created_at',
          group_by: ['string'],
          insight_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          metadata: { assistant_id: 'assistant_id' },
          show: ['string'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });
});
