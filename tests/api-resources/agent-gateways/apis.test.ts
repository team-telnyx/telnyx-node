// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource apis', () => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.agentGateways.apis.list('32ce035d-3165-4031-b1a7-a7c0c259590a');
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
    const responsePromise = client.agentGateways.apis.create('32ce035d-3165-4031-b1a7-a7c0c259590a', {
      name: 'petstore',
      spec_url: 'https://petstore3.swagger.io/api/v3/openapi.json',
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
  test.skip('create: required and optional params', async () => {
    const response = await client.agentGateways.apis.create('32ce035d-3165-4031-b1a7-a7c0c259590a', {
      name: 'petstore',
      spec_url: 'https://petstore3.swagger.io/api/v3/openapi.json',
      auth: { type: 'none' },
      base_url: 'https://petstore3.swagger.io/api/v3',
      forwarded_headers: ['string'],
      open_to_every_key: true,
      static_headers: { foo: 'string' },
      tools: ['string'],
    });
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.agentGateways.apis.delete('dbe53cc0-bf7e-4f7a-8d84-752d19890eb3', {
      instance_id: '32ce035d-3165-4031-b1a7-a7c0c259590a',
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
  test.skip('delete: required and optional params', async () => {
    const response = await client.agentGateways.apis.delete('dbe53cc0-bf7e-4f7a-8d84-752d19890eb3', {
      instance_id: '32ce035d-3165-4031-b1a7-a7c0c259590a',
    });
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.agentGateways.apis.update('dbe53cc0-bf7e-4f7a-8d84-752d19890eb3', {
      instance_id: '32ce035d-3165-4031-b1a7-a7c0c259590a',
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
  test.skip('update: required and optional params', async () => {
    const response = await client.agentGateways.apis.update('dbe53cc0-bf7e-4f7a-8d84-752d19890eb3', {
      instance_id: '32ce035d-3165-4031-b1a7-a7c0c259590a',
      auth: { type: 'none' },
      base_url: 'base_url',
      forwarded_headers: ['string'],
      name: 'name',
      open_to_every_key: true,
      spec_url: 'spec_url',
      static_headers: { foo: 'string' },
      tools: ['findpetsbystatus', 'getpetbyid'],
    });
  });
});
