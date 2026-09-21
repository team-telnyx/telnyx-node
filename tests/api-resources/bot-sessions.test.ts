// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource botSessions', () => {
  // Mock server tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.botSessions.list({
      email: 'agent-owner@example.com',
      portal_redirect_token: '01890a7e-e2f7-7c3d-8dbb-9a2c5f3d1e0b',
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
    const response = await client.botSessions.list({
      email: 'agent-owner@example.com',
      portal_redirect_token: '01890a7e-e2f7-7c3d-8dbb-9a2c5f3d1e0b',
    });
  });
});
