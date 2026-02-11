// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource embeddings', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.ai.openai.embeddings.create({
      input: 'The quick brown fox jumps over the lazy dog',
      model: 'thenlper/gte-large',
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
    const response = await client.ai.openai.embeddings.create({
      input: 'The quick brown fox jumps over the lazy dog',
      model: 'thenlper/gte-large',
      dimensions: 0,
      encoding_format: 'float',
      user: 'user',
    });
  });

  // Prism tests are disabled
  test.skip('listModels', async () => {
    const responsePromise = client.ai.openai.embeddings.listModels();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
