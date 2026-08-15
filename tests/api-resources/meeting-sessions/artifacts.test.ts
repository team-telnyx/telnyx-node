// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource artifacts', () => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.meetingSessions.artifacts.list(
      'mtgsess_a1b2c3d4-e5f6-7890-abcd-ef1234567890',
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
  test.skip('create: only required params', async () => {
    const responsePromise = client.meetingSessions.artifacts.create(
      'mtgsess_a1b2c3d4-e5f6-7890-abcd-ef1234567890',
      { type: 'summary' },
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
  test.skip('create: required and optional params', async () => {
    const response = await client.meetingSessions.artifacts.create(
      'mtgsess_a1b2c3d4-e5f6-7890-abcd-ef1234567890',
      { type: 'summary' },
    );
  });

  // Mock server tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.meetingSessions.artifacts.retrieve(
      'mtgart_b2c3d4e5-f6a7-8901-bcde-f23456789012',
      { id: 'mtgsess_a1b2c3d4-e5f6-7890-abcd-ef1234567890' },
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
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.meetingSessions.artifacts.retrieve(
      'mtgart_b2c3d4e5-f6a7-8901-bcde-f23456789012',
      { id: 'mtgsess_a1b2c3d4-e5f6-7890-abcd-ef1234567890' },
    );
  });
});
