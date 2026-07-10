// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource v1', () => {
  // Mock server tests are disabled
  test.skip('messages: only required params', async () => {
    const responsePromise = client.ai.anthropic.v1.messages({
      max_tokens: 1024,
      messages: [{ role: 'bar', content: 'bar' }],
      model: 'zai-org/GLM-5.2',
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
  test.skip('messages: required and optional params', async () => {
    const response = await client.ai.anthropic.v1.messages({
      max_tokens: 1024,
      messages: [{ role: 'bar', content: 'bar' }],
      model: 'zai-org/GLM-5.2',
      api_key_ref: 'api_key_ref',
      billing_group_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      fallback_config: { foo: 'bar' },
      max_retries: 0,
      mcp_servers: [{ foo: 'bar' }],
      metadata: { foo: 'bar' },
      service_tier: 'service_tier',
      stop_sequences: ['string'],
      stream: true,
      system: 'You are a friendly chatbot.',
      temperature: 0,
      thinking: { foo: 'bar' },
      timeout: 0,
      tool_choice: { foo: 'bar' },
      tools: [{ foo: 'bar' }],
      top_k: 0,
      top_p: 0,
    });
  });
});
