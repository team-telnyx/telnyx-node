// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource messages', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.ai.conversations.messages.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      role: 'role',
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
    const response = await client.ai.conversations.messages.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      role: 'role',
      content: 'content',
      metadata: { foo: 'string' },
      name: 'name',
      sent_at: '2019-12-27T18:11:19.117Z',
      tool_call_id: 'tool_call_id',
      tool_calls: [{ foo: 'bar' }],
      tool_choice: 'string',
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.ai.conversations.messages.list('conversation_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
