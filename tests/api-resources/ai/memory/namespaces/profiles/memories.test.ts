// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource memories', () => {
  // Mock server tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.ai.memory.namespaces.profiles.memories.list('profile_id', {
      namespace: 'namespace',
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
  test.skip('list: required and optional params', async () => {
    const response = await client.ai.memory.namespaces.profiles.memories.list('profile_id', {
      namespace: 'namespace',
      'page[number]': 1,
      'page[size]': 1,
      session_id: 'session_id',
      source_id: 'source_id',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.ai.memory.namespaces.profiles.memories.retrieve('memory_id', {
      namespace: 'namespace',
      profile_id: 'profile_id',
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
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.ai.memory.namespaces.profiles.memories.retrieve('memory_id', {
      namespace: 'namespace',
      profile_id: 'profile_id',
    });
  });
});
