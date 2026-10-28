// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource scenarios', () => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.ai.tests.testFramework.v1.scenarios.list();
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
      client.ai.tests.testFramework.v1.scenarios.list(
        {
          agent_id: 0,
          assistant_id: 'assistant_id',
          page: 1,
          page_size: 1,
          tags: 'tags',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.ai.tests.testFramework.v1.scenarios.create({
      name: 'Refund escalation flow',
      personality: 4643,
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
    const response = await client.ai.tests.testFramework.v1.scenarios.create({
      name: 'Refund escalation flow',
      personality: 4643,
      agent: 1259,
      expected_outcome_prompt: 'The assistant explains the refund policy and offers escalation.',
      first_message: 'Hi, I want a refund.',
      folder_path: 'folder_path',
      instructions: 'Call the support line and demand a refund for a damaged product.',
      metrics: [266881],
      tags: ['support'],
      test_profile: 0,
    });
  });

  // Mock server tests are disabled
  test.skip('retrieveExportScenarios: required and optional params', async () => {
    const response = await client.ai.tests.testFramework.v1.scenarios.retrieveExportScenarios({
      export_type: 'csv',
      scenario_ids: 'scenario_ids',
      agent_id: 0,
    });
  });

  // Mock server tests are disabled
  test.skip('generateBg: only required params', async () => {
    const responsePromise = client.ai.tests.testFramework.v1.scenarios.generateBg({ num_scenarios: 5 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('generateBg: required and optional params', async () => {
    const response = await client.ai.tests.testFramework.v1.scenarios.generateBg({
      num_scenarios: 5,
      agent_id: 1259,
      extra_instructions: 'Focus on angry customers asking about refunds.',
      first_message: 'first_message',
      folder_path: 'folder_path',
      generate_expected_outcomes: true,
      inbound_phone_number: 0,
      personalities: [0],
      scenario_type: 'workflow',
      tags: ['string'],
      test_profile: 0,
      tool_ids: ['string'],
    });
  });

  // Mock server tests are disabled
  test.skip('retrieveGenerateProgress: only required params', async () => {
    const responsePromise = client.ai.tests.testFramework.v1.scenarios.retrieveGenerateProgress({
      progress_id: 'progress_id',
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
  test.skip('retrieveGenerateProgress: required and optional params', async () => {
    const response = await client.ai.tests.testFramework.v1.scenarios.retrieveGenerateProgress({
      progress_id: 'progress_id',
    });
  });

  // Mock server tests are disabled
  test.skip('runScenarios', async () => {
    const responsePromise = client.ai.tests.testFramework.v1.scenarios.runScenarios({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('scenarioAgent: only required params', async () => {
    const responsePromise = client.ai.tests.testFramework.v1.scenarios.scenarioAgent({
      scenarios: 'all',
      user_message: 'Make the callers ask about damaged packaging too.',
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
  test.skip('scenarioAgent: required and optional params', async () => {
    const response = await client.ai.tests.testFramework.v1.scenarios.scenarioAgent({
      scenarios: 'all',
      user_message: 'Make the callers ask about damaged packaging too.',
      agent_id: 1259,
      agent_resolution_response: 'agent_resolution_response',
      apply_changes: true,
      context: [
        {
          content: 'content',
          role: 'role',
          timestamp: 'timestamp',
        },
      ],
      knowledge_base: [0],
      num_scenarios: 0,
      pending_tool_calls: [{ foo: 'bar' }],
      scenarios_needing_agent: [0],
      session_id: 0,
      updated_scenarios: [{ foo: 'bar' }],
    });
  });

  // Mock server tests are disabled
  test.skip('retrieveScenarioAgentProgress: only required params', async () => {
    const responsePromise = client.ai.tests.testFramework.v1.scenarios.retrieveScenarioAgentProgress({
      progress_id: 'progress_id',
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
  test.skip('retrieveScenarioAgentProgress: required and optional params', async () => {
    const response = await client.ai.tests.testFramework.v1.scenarios.retrieveScenarioAgentProgress({
      progress_id: 'progress_id',
    });
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.ai.tests.testFramework.v1.scenarios.delete(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.ai.tests.testFramework.v1.scenarios.retrieve(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.ai.tests.testFramework.v1.scenarios.update(0, {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
