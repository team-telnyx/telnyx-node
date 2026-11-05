// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource policyAttachments', () => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.agentGateways.policyAttachments.list(
      '32ce035d-3165-4031-b1a7-a7c0c259590a',
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
    const responsePromise = client.agentGateways.policyAttachments.create(
      '32ce035d-3165-4031-b1a7-a7c0c259590a',
      { policy: 'strict' },
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
    const response = await client.agentGateways.policyAttachments.create(
      '32ce035d-3165-4031-b1a7-a7c0c259590a',
      {
        policy: 'strict',
        default: true,
        models: ['GLM-5.3*'],
        priority: 10,
      },
    );
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.agentGateways.policyAttachments.delete(
      '3394712f-2ad5-428a-8a3d-7a08d4b2906d',
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
  test.skip('delete: required and optional params', async () => {
    const response = await client.agentGateways.policyAttachments.delete(
      '3394712f-2ad5-428a-8a3d-7a08d4b2906d',
      { instance_id: '32ce035d-3165-4031-b1a7-a7c0c259590a' },
    );
  });
});
