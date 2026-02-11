// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource events', () => {
  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.ai.missions.runs.events.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      mission_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: required and optional params', async () => {
    const response = await client.ai.missions.runs.events.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      mission_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      agent_id: 'agent_id',
      'page[number]': 1,
      'page[size]': 1,
      step_id: 'step_id',
      type: 'type',
    });
  });

  // Prism tests are disabled
  test.skip('getEventDetails: only required params', async () => {
    const responsePromise = client.ai.missions.runs.events.getEventDetails('event_id', {
      mission_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      run_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getEventDetails: required and optional params', async () => {
    const response = await client.ai.missions.runs.events.getEventDetails('event_id', {
      mission_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      run_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // Prism tests are disabled
  test.skip('log: only required params', async () => {
    const responsePromise = client.ai.missions.runs.events.log('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      mission_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      summary: 'summary',
      type: 'status_change',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('log: required and optional params', async () => {
    const response = await client.ai.missions.runs.events.log('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      mission_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      summary: 'summary',
      type: 'status_change',
      agent_id: 'agent_id',
      idempotency_key: 'idempotency_key',
      payload: { foo: 'bar' },
      step_id: 'step_id',
    });
  });
});
