// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource siprecConnectors', () => {
  test('create: only required params', async () => {
    const responsePromise = client.siprecConnectors.create({
      host: 'siprec.telnyx.com',
      name: 'my-siprec-connector',
      port: 5060,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.siprecConnectors.create({
      host: 'siprec.telnyx.com',
      name: 'my-siprec-connector',
      port: 5060,
      app_subdomain: 'my-app',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.siprecConnectors.retrieve('connector_name');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: only required params', async () => {
    const responsePromise = client.siprecConnectors.update('connector_name', {
      host: 'siprec.telnyx.com',
      name: 'my-siprec-connector',
      port: 5060,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.siprecConnectors.update('connector_name', {
      host: 'siprec.telnyx.com',
      name: 'my-siprec-connector',
      port: 5060,
      app_subdomain: 'my-app',
    });
  });

  test('delete', async () => {
    const responsePromise = client.siprecConnectors.delete('connector_name');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
