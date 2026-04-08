// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource reputation', () => {
  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.enterprises.reputation.retrieve('6a09cdc3-8948-47f0-aa62-74ac943d6c58');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('disable', async () => {
    const responsePromise = client.enterprises.reputation.disable('6a09cdc3-8948-47f0-aa62-74ac943d6c58');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('enable: only required params', async () => {
    const responsePromise = client.enterprises.reputation.enable('6a09cdc3-8948-47f0-aa62-74ac943d6c58', {
      loa_document_id: 'doc_01HXYZ1234ABCDEF',
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
  test.skip('enable: required and optional params', async () => {
    const response = await client.enterprises.reputation.enable('6a09cdc3-8948-47f0-aa62-74ac943d6c58', {
      loa_document_id: 'doc_01HXYZ1234ABCDEF',
      check_frequency: 'business_daily',
    });
  });

  // Mock server tests are disabled
  test.skip('updateFrequency: only required params', async () => {
    const responsePromise = client.enterprises.reputation.updateFrequency(
      '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
      { check_frequency: 'business_daily' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('updateFrequency: required and optional params', async () => {
    const response = await client.enterprises.reputation.updateFrequency(
      '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
      { check_frequency: 'business_daily' },
    );
  });
});
