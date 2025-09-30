// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource oauth', () => {
  // Prism doesn't properly handle redirects
  test.skip('authorize: only required params', async () => {
    const responsePromise = client.oauth.authorize({
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

  // Prism doesn't properly handle redirects
  test.skip('authorize: required and optional params', async () => {
    const response = await client.oauth.authorize({
      client_id: 'client_id',
      redirect_uri: 'https://example.com',
      response_type: 'code',
      code_challenge: 'code_challenge',
      code_challenge_method: 'plain',
      scope: 'scope',
      state: 'state',
    });
  });

  // Prism tests are disabled
  test.skip('createGrant: only required params', async () => {
    const responsePromise = client.oauth.createGrant({ allowed: true, consent_token: 'consent_token' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('createGrant: required and optional params', async () => {
    const response = await client.oauth.createGrant({ allowed: true, consent_token: 'consent_token' });
  });

  // Prism tests are disabled
  test.skip('exchangeToken: only required params', async () => {
    const responsePromise = client.oauth.exchangeToken({ grant_type: 'client_credentials' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('exchangeToken: required and optional params', async () => {
    const response = await client.oauth.exchangeToken({
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

  // Prism tests are disabled
  test.skip('introspectToken: only required params', async () => {
    const responsePromise = client.oauth.introspectToken({ token: 'token' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('introspectToken: required and optional params', async () => {
    const response = await client.oauth.introspectToken({ token: 'token' });
  });

  // Prism tests are disabled
  test.skip('registerClient', async () => {
    const responsePromise = client.oauth.registerClient({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveConsent', async () => {
    const responsePromise = client.oauth.retrieveConsent('consent_token');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
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
});
