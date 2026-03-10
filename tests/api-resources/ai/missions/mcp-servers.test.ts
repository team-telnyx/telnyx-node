// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource mcpServers', () => {
  // Mock server tests are disabled
  test.skip('createMcpServer', async () => {
    const responsePromise = client.ai.missions.mcpServers.createMcpServer('mission_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('deleteMcpServer: only required params', async () => {
    const responsePromise = client.ai.missions.mcpServers.deleteMcpServer('mcp_server_id', {
      mission_id: 'mission_id',
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
  test.skip('deleteMcpServer: required and optional params', async () => {
    const response = await client.ai.missions.mcpServers.deleteMcpServer('mcp_server_id', {
      mission_id: 'mission_id',
    });
  });

  // Mock server tests are disabled
  test.skip('getMcpServer: only required params', async () => {
    const responsePromise = client.ai.missions.mcpServers.getMcpServer('mcp_server_id', {
      mission_id: 'mission_id',
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
  test.skip('getMcpServer: required and optional params', async () => {
    const response = await client.ai.missions.mcpServers.getMcpServer('mcp_server_id', {
      mission_id: 'mission_id',
    });
  });

  // Mock server tests are disabled
  test.skip('listMcpServers', async () => {
    const responsePromise = client.ai.missions.mcpServers.listMcpServers('mission_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('updateMcpServer: only required params', async () => {
    const responsePromise = client.ai.missions.mcpServers.updateMcpServer('mcp_server_id', {
      mission_id: 'mission_id',
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
  test.skip('updateMcpServer: required and optional params', async () => {
    const response = await client.ai.missions.mcpServers.updateMcpServer('mcp_server_id', {
      mission_id: 'mission_id',
    });
  });
});
