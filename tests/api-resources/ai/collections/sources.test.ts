// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource sources', () => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.ai.collections.sources.list('6a09ccbd-8f9b-4c3a-9b0e-2f1d3c4b5a6e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.ai.collections.sources.create('6a09ccbd-8f9b-4c3a-9b0e-2f1d3c4b5a6e', {
      source_type: 'voice',
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
  test.skip('create: required and optional params', async () => {
    const response = await client.ai.collections.sources.create('6a09ccbd-8f9b-4c3a-9b0e-2f1d3c4b5a6e', {
      source_type: 'voice',
      bucket_id: 'policy-docs',
    });
  });

  // Mock server tests are disabled
  test.skip('replace: only required params', async () => {
    const responsePromise = client.ai.collections.sources.replace('6a09ccbd-8f9b-4c3a-9b0e-2f1d3c4b5a6e', {
      sources: [{ source_type: 'voice' }],
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
  test.skip('replace: required and optional params', async () => {
    const response = await client.ai.collections.sources.replace('6a09ccbd-8f9b-4c3a-9b0e-2f1d3c4b5a6e', {
      sources: [{ source_type: 'voice', bucket_id: 'policy-docs' }],
    });
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.ai.collections.sources.delete('42', {
      uuid: '6a09ccbd-8f9b-4c3a-9b0e-2f1d3c4b5a6e',
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
    const response = await client.ai.collections.sources.delete('42', {
      uuid: '6a09ccbd-8f9b-4c3a-9b0e-2f1d3c4b5a6e',
    });
  });
});
