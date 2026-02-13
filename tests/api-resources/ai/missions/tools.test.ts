// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource tools', () => {
  // Prism tests are disabled
  test.skip('createTool', async () => {
    const responsePromise = client.ai.missions.tools.createTool('mission_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('deleteTool: only required params', async () => {
    const responsePromise = client.ai.missions.tools.deleteTool('tool_id', { mission_id: 'mission_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('deleteTool: required and optional params', async () => {
    const response = await client.ai.missions.tools.deleteTool('tool_id', { mission_id: 'mission_id' });
  });

  // Prism tests are disabled
  test.skip('getTool: only required params', async () => {
    const responsePromise = client.ai.missions.tools.getTool('tool_id', { mission_id: 'mission_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getTool: required and optional params', async () => {
    const response = await client.ai.missions.tools.getTool('tool_id', { mission_id: 'mission_id' });
  });

  // Prism tests are disabled
  test.skip('listTools', async () => {
    const responsePromise = client.ai.missions.tools.listTools('mission_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('updateTool: only required params', async () => {
    const responsePromise = client.ai.missions.tools.updateTool('tool_id', { mission_id: 'mission_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('updateTool: required and optional params', async () => {
    const response = await client.ai.missions.tools.updateTool('tool_id', { mission_id: 'mission_id' });
  });
});
