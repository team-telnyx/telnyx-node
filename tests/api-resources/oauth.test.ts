// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource oauth', () => {
  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.oauth.retrieve('consent_token');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('grants: only required params', async () => {
    const responsePromise = client.oauth.grants({ allowed: true, consent_token: 'consent_token' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('grants: required and optional params', async () => {
    const response = await client.oauth.grants({ allowed: true, consent_token: 'consent_token' });
  });

  // Mock server tests are disabled
  test.skip('introspect: only required params', async () => {
    const responsePromise = client.oauth.introspect({ token: 'token' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('introspect: required and optional params', async () => {
    const response = await client.oauth.introspect({ token: 'token' });
  });

  // Mock server tests are disabled
  test.skip('register', async () => {
    const responsePromise = client.oauth.register({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieveAuthorize: only required params', async () => {
    const responsePromise = client.oauth.retrieveAuthorize({
      client_id: 'client_id',
      redirect_uri: 'https://example.com',
      response_type: 'code',
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
  test.skip('retrieveAuthorize: required and optional params', async () => {
    const response = await client.oauth.retrieveAuthorize({
      client_id: 'client_id',
      redirect_uri: 'https://example.com',
      response_type: 'code',
      code_challenge: 'code_challenge',
      code_challenge_method: 'plain',
      scope: 'scope',
      state: 'state',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieveJwks', async () => {
    const responsePromise = client.oauth.retrieveJwks();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('token: only required params', async () => {
    const responsePromise = client.oauth.token({ grant_type: 'client_credentials' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('token: required and optional params', async () => {
    const response = await client.oauth.token({
      grant_type: 'client_credentials',
      client_id: 'client_id',
      client_secret: 'client_secret',
      code: 'code',
      code_verifier: 'code_verifier',
      redirect_uri: 'https://example.com',
      refresh_token: 'refresh_token',
      scope: 'admin',
    });
  });
});
