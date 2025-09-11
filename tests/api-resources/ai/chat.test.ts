// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource chat', () => {
  // Prism tests are disabled
  test.skip('createCompletion: only required params', async () => {
    const responsePromise = client.ai.chat.createCompletion({
      messages: [
        { content: 'You are a friendly chatbot.', role: 'system' },
        { content: 'Hello, world!', role: 'user' },
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
  test.skip('createCompletion: required and optional params', async () => {
    const response = await client.ai.chat.createCompletion({
      messages: [
        { content: 'You are a friendly chatbot.', role: 'system' },
        { content: 'Hello, world!', role: 'user' },
      ],
      api_key_ref: 'api_key_ref',
      best_of: 0,
      early_stopping: true,
      frequency_penalty: 0,
      guided_choice: ['string'],
      guided_json: { foo: 'bar' },
      guided_regex: 'guided_regex',
      length_penalty: 0,
      logprobs: true,
      max_tokens: 0,
      min_p: 0,
      model: 'model',
      n: 0,
      presence_penalty: 0,
      response_format: { type: 'text' },
      stream: true,
      temperature: 0,
      tool_choice: 'none',
      tools: [
        {
          function: { name: 'name', description: 'description', parameters: { foo: 'bar' } },
          type: 'function',
        },
      ],
      top_logprobs: 0,
      top_p: 0,
      use_beam_search: true,
    });
  });
});
