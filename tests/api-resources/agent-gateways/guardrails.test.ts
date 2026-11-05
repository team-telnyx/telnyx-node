// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource guardrails', () => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.agentGateways.guardrails.list('32ce035d-3165-4031-b1a7-a7c0c259590a');
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
    const responsePromise = client.agentGateways.guardrails.create('32ce035d-3165-4031-b1a7-a7c0c259590a', {
      modes: ['before_request'],
      name: 'mask-pii',
      type: 'content_filter',
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
    const response = await client.agentGateways.guardrails.create('32ce035d-3165-4031-b1a7-a7c0c259590a', {
      modes: ['before_request'],
      name: 'mask-pii',
      type: 'content_filter',
      always_on: true,
      settings: {
        patterns: [
          { name: 'us_ssn', action: 'mask' },
          { name: 'email', action: 'mask' },
        ],
      },
    });
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.agentGateways.guardrails.delete('9645e556-6532-4341-8cab-21b58cdef529', {
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
    const response = await client.agentGateways.guardrails.delete('9645e556-6532-4341-8cab-21b58cdef529', {
      instance_id: '32ce035d-3165-4031-b1a7-a7c0c259590a',
    });
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.agentGateways.guardrails.update('9645e556-6532-4341-8cab-21b58cdef529', {
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
    const response = await client.agentGateways.guardrails.update('9645e556-6532-4341-8cab-21b58cdef529', {
      instance_id: '32ce035d-3165-4031-b1a7-a7c0c259590a',
      always_on: true,
      modes: ['before_request'],
      name: 'name',
      settings: {},
    });
  });
});
