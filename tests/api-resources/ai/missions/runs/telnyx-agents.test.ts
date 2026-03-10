// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource telnyxAgents', () => {
  // Mock server tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.ai.missions.runs.telnyxAgents.list(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { mission_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
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
    const response = await client.ai.missions.runs.telnyxAgents.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      mission_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // Mock server tests are disabled
  test.skip('link: only required params', async () => {
    const responsePromise = client.ai.missions.runs.telnyxAgents.link(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { mission_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', telnyx_agent_id: 'telnyx_agent_id' },
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
  test.skip('link: required and optional params', async () => {
    const response = await client.ai.missions.runs.telnyxAgents.link('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      mission_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      telnyx_agent_id: 'telnyx_agent_id',
    });
  });

  // Mock server tests are disabled
  test.skip('unlink: only required params', async () => {
    const responsePromise = client.ai.missions.runs.telnyxAgents.unlink('telnyx_agent_id', {
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

  // Mock server tests are disabled
  test.skip('unlink: required and optional params', async () => {
    const response = await client.ai.missions.runs.telnyxAgents.unlink('telnyx_agent_id', {
      mission_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      run_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });
});
