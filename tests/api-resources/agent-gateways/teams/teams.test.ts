// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource teams', () => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.agentGateways.teams.list('ecffdf4b-93ea-4a7b-8295-51dfd2077996');
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
    const responsePromise = client.agentGateways.teams.create('ecffdf4b-93ea-4a7b-8295-51dfd2077996', {
      name: 'support',
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
    const response = await client.agentGateways.teams.create('ecffdf4b-93ea-4a7b-8295-51dfd2077996', {
      name: 'support',
      budget_resets_every: '30d',
      max_budget: 50,
      models: ['GLM-5.3-Flash', 'Qwen3.8-27B-nothink'],
      requests_per_minute: 120,
      tokens_per_minute: 1,
    });
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.agentGateways.teams.delete('0b6c5d4e-3f2a-4b1c-9d8e-7f6a5b4c3d2e', {
      instance_id: 'ecffdf4b-93ea-4a7b-8295-51dfd2077996',
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
    const response = await client.agentGateways.teams.delete('0b6c5d4e-3f2a-4b1c-9d8e-7f6a5b4c3d2e', {
      instance_id: 'ecffdf4b-93ea-4a7b-8295-51dfd2077996',
    });
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.agentGateways.teams.update('0b6c5d4e-3f2a-4b1c-9d8e-7f6a5b4c3d2e', {
      instance_id: 'ecffdf4b-93ea-4a7b-8295-51dfd2077996',
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
    const response = await client.agentGateways.teams.update('0b6c5d4e-3f2a-4b1c-9d8e-7f6a5b4c3d2e', {
      instance_id: 'ecffdf4b-93ea-4a7b-8295-51dfd2077996',
      blocked: true,
      budget_resets_every: '30d',
      max_budget: 100,
      models: ['x'],
      name: 'x',
      requests_per_minute: 1,
      tokens_per_minute: 1,
    });
  });
});
