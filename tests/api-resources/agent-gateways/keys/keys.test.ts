// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource keys', () => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.agentGateways.keys.list('ecffdf4b-93ea-4a7b-8295-51dfd2077996');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.agentGateways.keys.list(
        'ecffdf4b-93ea-4a7b-8295-51dfd2077996',
        { team_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('create', async () => {
    const responsePromise = client.agentGateways.keys.create('ecffdf4b-93ea-4a7b-8295-51dfd2077996', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.agentGateways.keys.delete(
      '5f1c3a0e9b7d4c2a8e6f0b1d3c5a7e9f2b4d6c8a0e1f3a5c7e9b1d3f5a7c9e0b',
      { instance_id: 'ecffdf4b-93ea-4a7b-8295-51dfd2077996' },
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
  test.skip('delete: required and optional params', async () => {
    const response = await client.agentGateways.keys.delete(
      '5f1c3a0e9b7d4c2a8e6f0b1d3c5a7e9f2b4d6c8a0e1f3a5c7e9b1d3f5a7c9e0b',
      { instance_id: 'ecffdf4b-93ea-4a7b-8295-51dfd2077996' },
    );
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.agentGateways.keys.update(
      '5f1c3a0e9b7d4c2a8e6f0b1d3c5a7e9f2b4d6c8a0e1f3a5c7e9b1d3f5a7c9e0b',
      { instance_id: 'ecffdf4b-93ea-4a7b-8295-51dfd2077996' },
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
  test.skip('update: required and optional params', async () => {
    const response = await client.agentGateways.keys.update(
      '5f1c3a0e9b7d4c2a8e6f0b1d3c5a7e9f2b4d6c8a0e1f3a5c7e9b1d3f5a7c9e0b',
      {
        instance_id: 'ecffdf4b-93ea-4a7b-8295-51dfd2077996',
        blocked: true,
        budget_resets_every: '30d',
        expires_in: '30d',
        max_budget: 0,
        max_parallel_requests: 1,
        models: ['x'],
        name: 'x',
        requests_per_minute: 1,
        team_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        tokens_per_minute: 1,
      },
    );
  });
});
