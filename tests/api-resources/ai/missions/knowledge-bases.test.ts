// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource knowledgeBases', () => {
  // Mock server tests are disabled
  test.skip('createKnowledgeBase', async () => {
    const responsePromise = client.ai.missions.knowledgeBases.createKnowledgeBase('mission_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('deleteKnowledgeBase: only required params', async () => {
    const responsePromise = client.ai.missions.knowledgeBases.deleteKnowledgeBase('knowledge_base_id', {
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
  test.skip('deleteKnowledgeBase: required and optional params', async () => {
    const response = await client.ai.missions.knowledgeBases.deleteKnowledgeBase('knowledge_base_id', {
      mission_id: 'mission_id',
    });
  });

  // Mock server tests are disabled
  test.skip('getKnowledgeBase: only required params', async () => {
    const responsePromise = client.ai.missions.knowledgeBases.getKnowledgeBase('knowledge_base_id', {
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
  test.skip('getKnowledgeBase: required and optional params', async () => {
    const response = await client.ai.missions.knowledgeBases.getKnowledgeBase('knowledge_base_id', {
      mission_id: 'mission_id',
    });
  });

  // Mock server tests are disabled
  test.skip('listKnowledgeBases', async () => {
    const responsePromise = client.ai.missions.knowledgeBases.listKnowledgeBases('mission_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('updateKnowledgeBase: only required params', async () => {
    const responsePromise = client.ai.missions.knowledgeBases.updateKnowledgeBase('knowledge_base_id', {
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
  test.skip('updateKnowledgeBase: required and optional params', async () => {
    const response = await client.ai.missions.knowledgeBases.updateKnowledgeBase('knowledge_base_id', {
      mission_id: 'mission_id',
    });
  });
});
