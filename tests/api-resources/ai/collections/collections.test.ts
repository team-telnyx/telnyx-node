// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource collections', () => {
  // Mock server tests are disabled
  test.skip('retrieveByID', async () => {
    const responsePromise = client.ai.collections.retrieveByID('6a09ccbd-8f9b-4c3a-9b0e-2f1d3c4b5a6e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.ai.collections.list();
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
      client.ai.collections.list(
        { 'page[number]': 1, 'page[size]': 20 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.ai.collections.create({ name: 'Support Transcripts' });
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
    const response = await client.ai.collections.create({
      name: 'Support Transcripts',
      description: 'All customer support voice transcripts.',
      settings: { retrieval: { retrieval_type: 'vector', top_k: 5 } },
      slug: 'support-transcripts',
      sources: [{ source_type: 'voice', bucket_id: 'policy-docs' }],
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.ai.collections.retrieve('support-transcripts');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieveDocuments', async () => {
    const responsePromise = client.ai.collections.retrieveDocuments('support-transcripts');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieveDocuments: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.ai.collections.retrieveDocuments(
        'support-transcripts',
        {
          filter: { foo: 'bar' },
          'page[number]': 1,
          'page[size]': 20,
          query: 'customer called about billing issue',
          retrieval_type: 'hybrid',
          sources: 'voice,message',
          top_k: 10,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.ai.collections.delete('6a09ccbd-8f9b-4c3a-9b0e-2f1d3c4b5a6e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.ai.collections.update('6a09ccbd-8f9b-4c3a-9b0e-2f1d3c4b5a6e', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
