// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource toolPermissions', () => {
  // Mock server tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.agentGateways.teams.toolPermissions.list(
      'd7b21324-a2bf-406c-ba49-c6ec4d23d476',
      { instance_id: '32ce035d-3165-4031-b1a7-a7c0c259590a' },
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
  test.skip('list: required and optional params', async () => {
    const response = await client.agentGateways.teams.toolPermissions.list(
      'd7b21324-a2bf-406c-ba49-c6ec4d23d476',
      { instance_id: '32ce035d-3165-4031-b1a7-a7c0c259590a' },
    );
  });

  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.agentGateways.teams.toolPermissions.create(
      'd7b21324-a2bf-406c-ba49-c6ec4d23d476',
      {
        instance_id: '32ce035d-3165-4031-b1a7-a7c0c259590a',
        servers: [{ id: '88d5a97b-4080-4855-8bac-a39811b1dc24' }],
      },
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
    const response = await client.agentGateways.teams.toolPermissions.create(
      'd7b21324-a2bf-406c-ba49-c6ec4d23d476',
      {
        instance_id: '32ce035d-3165-4031-b1a7-a7c0c259590a',
        servers: [{ id: '88d5a97b-4080-4855-8bac-a39811b1dc24', tools: ['get_order'] }],
      },
    );
  });
});
