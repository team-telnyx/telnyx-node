// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource webSearch', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.webSearch.create({ query: 'latest AI agent frameworks' });
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
    const response = await client.webSearch.create({
      query: 'latest AI agent frameworks',
      count: 10,
      country: 'US',
      exclude_domains: ['pinterest.com'],
      freshness: 'week',
      include_domains: ['arxiv.org', 'github.com'],
      livecrawl: false,
      safesearch: 'moderate',
    });
  });

  // Mock server tests are disabled
  test.skip('contents: only required params', async () => {
    const responsePromise = client.webSearch.contents({
      urls: ['https://en.wikipedia.org/wiki/Artificial_intelligence'],
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
  test.skip('contents: required and optional params', async () => {
    const response = await client.webSearch.contents({
      urls: ['https://en.wikipedia.org/wiki/Artificial_intelligence'],
      crawl_timeout: 10,
      formats: ['markdown', 'metadata'],
      max_age: null,
    });
  });
});
