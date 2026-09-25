// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource profiles', () => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.ai.memory.namespaces.profiles.list('namespace');
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
      client.ai.memory.namespaces.profiles.list(
        'namespace',
        { 'page[number]': 1, 'page[size]': 1 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.ai.memory.namespaces.profiles.delete('profile_id', {
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
  test.skip('delete: required and optional params', async () => {
    const response = await client.ai.memory.namespaces.profiles.delete('profile_id', {
      namespace: 'namespace',
    });
  });

  // Mock server tests are disabled
  test.skip('ingest: only required params', async () => {
    const responsePromise = client.ai.memory.namespaces.profiles.ingest('profile_id', {
      namespace: 'namespace',
      body: { foo: 'bar' },
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
  test.skip('ingest: required and optional params', async () => {
    const response = await client.ai.memory.namespaces.profiles.ingest('profile_id', {
      namespace: 'namespace',
      body: { foo: 'bar' },
      session_id: 'session_id',
    });
  });

  // Mock server tests are disabled
  test.skip('recall: only required params', async () => {
    const responsePromise = client.ai.memory.namespaces.profiles.recall('profile_id', {
      namespace: 'namespace',
      query: 'where do invoices go?',
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
  test.skip('recall: required and optional params', async () => {
    const response = await client.ai.memory.namespaces.profiles.recall('profile_id', {
      namespace: 'namespace',
      query: 'where do invoices go?',
      top_k: 5,
    });
  });

  // Mock server tests are disabled
  test.skip('remember: only required params', async () => {
    const responsePromise = client.ai.memory.namespaces.profiles.remember('profile_id', {
      namespace: 'namespace',
      text: 'Prefers window seats and flies out of ORD',
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
  test.skip('remember: required and optional params', async () => {
    const response = await client.ai.memory.namespaces.profiles.remember('profile_id', {
      namespace: 'namespace',
      text: 'Prefers window seats and flies out of ORD',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieveSummary: only required params', async () => {
    const responsePromise = client.ai.memory.namespaces.profiles.retrieveSummary('profile_id', {
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
  test.skip('retrieveSummary: required and optional params', async () => {
    const response = await client.ai.memory.namespaces.profiles.retrieveSummary('profile_id', {
      namespace: 'namespace',
    });
  });
});
