// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource mcpServers', () => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.agentGateways.mcpServers.list('32ce035d-3165-4031-b1a7-a7c0c259590a');
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
    const responsePromise = client.agentGateways.mcpServers.create('32ce035d-3165-4031-b1a7-a7c0c259590a', {
      name: 'orders',
      url: 'http://10.40.3.7:9000/mcp',
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
    const response = await client.agentGateways.mcpServers.create('32ce035d-3165-4031-b1a7-a7c0c259590a', {
      name: 'orders',
      url: 'http://10.40.3.7:9000/mcp',
      auth: {
        type: 'api_key',
        value: 'example-orders-key',
        header: 'header',
      },
      forwarded_headers: ['X-Request-Id'],
      open_to_every_key: true,
      static_headers: { 'X-Env': 'prod' },
      tools: ['string'],
      transport: 'http',
    });
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.agentGateways.mcpServers.delete('88d5a97b-4080-4855-8bac-a39811b1dc24', {
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
    const response = await client.agentGateways.mcpServers.delete('88d5a97b-4080-4855-8bac-a39811b1dc24', {
      instance_id: '32ce035d-3165-4031-b1a7-a7c0c259590a',
    });
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.agentGateways.mcpServers.update('88d5a97b-4080-4855-8bac-a39811b1dc24', {
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
    const response = await client.agentGateways.mcpServers.update('88d5a97b-4080-4855-8bac-a39811b1dc24', {
      instance_id: '32ce035d-3165-4031-b1a7-a7c0c259590a',
      auth: { type: 'none' },
      forwarded_headers: ['string'],
      name: 'name',
      open_to_every_key: true,
      static_headers: { foo: 'string' },
      tools: ['get_order', 'create_ticket'],
      transport: 'http',
      url: 'url',
    });
  });
});
