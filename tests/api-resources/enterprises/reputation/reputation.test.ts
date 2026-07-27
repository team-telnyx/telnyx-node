// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource reputation', () => {
  // Mock server tests are disabled
  test.skip('disable', async () => {
    const responsePromise = client.enterprises.reputation.disable('4a6192a4-573d-446d-b3ce-aff9117272a6');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.enterprises.reputation.retrieve('4a6192a4-573d-446d-b3ce-aff9117272a6');
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
    const responsePromise = client.enterprises.reputation.enable('4a6192a4-573d-446d-b3ce-aff9117272a6', {
      loa_document_id: '2a7e8337-e803-4057-a4ae-26c40eb0bc6c',
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
    const response = await client.enterprises.reputation.enable('4a6192a4-573d-446d-b3ce-aff9117272a6', {
      loa_document_id: '2a7e8337-e803-4057-a4ae-26c40eb0bc6c',
      check_frequency: 'business_daily',
    });
  });

  // Mock server tests are disabled
  test.skip('updateFrequency: only required params', async () => {
    const responsePromise = client.enterprises.reputation.updateFrequency(
      '4a6192a4-573d-446d-b3ce-aff9117272a6',
      { check_frequency: 'weekly' },
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
      '4a6192a4-573d-446d-b3ce-aff9117272a6',
      { check_frequency: 'weekly' },
    );
  });
});
