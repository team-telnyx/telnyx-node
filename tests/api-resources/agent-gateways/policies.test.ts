// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource policies', () => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.agentGateways.policies.list('32ce035d-3165-4031-b1a7-a7c0c259590a');
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
    const responsePromise = client.agentGateways.policies.create('32ce035d-3165-4031-b1a7-a7c0c259590a', {
      name: 'baseline',
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
    const response = await client.agentGateways.policies.create('32ce035d-3165-4031-b1a7-a7c0c259590a', {
      name: 'baseline',
      base: 'base',
      description: 'Mask personal data',
      guardrails: { add: ['mask-pii'], remove: ['string'] },
      model: 'model',
      pipeline: {
        hook: 'before_request',
        steps: [
          {
            guardrail: 'guardrail',
            message: 'message',
            on_error: 'next',
            on_fail: 'next',
            on_pass: 'next',
            pass_data: true,
          },
        ],
      },
    });
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.agentGateways.policies.delete('strict', {
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
    const response = await client.agentGateways.policies.delete('strict', {
      instance_id: '32ce035d-3165-4031-b1a7-a7c0c259590a',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.agentGateways.policies.retrieve('strict', {
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
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.agentGateways.policies.retrieve('strict', {
      instance_id: '32ce035d-3165-4031-b1a7-a7c0c259590a',
    });
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.agentGateways.policies.update('strict', {
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
    const response = await client.agentGateways.policies.update('strict', {
      instance_id: '32ce035d-3165-4031-b1a7-a7c0c259590a',
      base: 'base',
      description: 'Baseline plus a word check',
      guardrails: { add: ['string'], remove: ['string'] },
      model: 'model',
      pipeline: {
        hook: 'before_request',
        steps: [
          {
            guardrail: 'guardrail',
            message: 'message',
            on_error: 'next',
            on_fail: 'next',
            on_pass: 'next',
            pass_data: true,
          },
        ],
      },
    });
  });
});
