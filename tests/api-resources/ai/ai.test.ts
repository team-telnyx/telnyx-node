// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource ai', () => {
  // Mock server tests are disabled
  test.skip('summarize: only required params', async () => {
    const responsePromise = client.ai.summarize({ bucket: 'string', filename: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('summarize: required and optional params', async () => {
    const response = await client.ai.summarize({
      bucket: 'string',
      filename: 'string',
      system_prompt: 'string',
      'Idempotency-Key': '8e03978e-40d5-43e8-bc93-6894a57f9326',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieveConversationHistories: only required params', async () => {
    const responsePromise = client.ai.retrieveConversationHistories({
      q: 'customer called about billing issue',
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
  test.skip('retrieveConversationHistories: required and optional params', async () => {
    const response = await client.ai.retrieveConversationHistories({
      q: 'customer called about billing issue',
      'filter[ingested_at][gte]': '2026-01-01T00:00:00Z',
      'filter[ingested_at][lte]': '2026-12-31T23:59:59Z',
      'filter[record_created_at][gte]': '2026-01-01T00:00:00Z',
      'filter[record_created_at][lte]': '2026-12-31T23:59:59Z',
      'filter[record_id]': 'rec-001',
      'filter[region][in]': 'USA,DEU',
      'filter[retention]': 'filter[retention]',
      'filter[user_id]': 'user-123',
      min_score: 0.5,
      'page[number]': 1,
      'page[size]': 10,
      region: 'USA',
    });
  });
});
