// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource metrics', () => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.ai.tests.testFramework.v1.metrics.list();
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
      client.ai.tests.testFramework.v1.metrics.list(
        { agent_id: 0, assistant_id: 'assistant_id' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.ai.tests.testFramework.v1.metrics.create({
      name: 'Escalates on refund denial',
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
    const response = await client.ai.tests.testFramework.v1.metrics.create({
      name: 'Escalates on refund denial',
      add_to_new_agents: false,
      agents: [1259],
      assistant_id: 'assistant_id',
      audio_enabled: true,
      description: "Returns a score for whether the assistant escalates when the caller's refund is denied.",
      display_order: 0,
      enum_values: ['string'],
      eval_type: 'continuous_qualitative',
      observability_enabled: true,
      prompt: "Score the assistant's escalation behaviour between 0.0 and 1.0.",
      sampling_enabled: true,
      simulation_enabled: true,
      type: 'llm_judge',
    });
  });

  // Mock server tests are disabled
  test.skip('bulkCreate: only required params', async () => {
    const responsePromise = client.ai.tests.testFramework.v1.metrics.bulkCreate({
      body: [{ name: 'Greets within 5 seconds' }],
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
  test.skip('bulkCreate: required and optional params', async () => {
    const response = await client.ai.tests.testFramework.v1.metrics.bulkCreate({
      body: [
        {
          name: 'Greets within 5 seconds',
          add_to_new_agents: false,
          agents: [1259],
          assistant_id: 'assistant_id',
          audio_enabled: true,
          description: 'Returns whether the assistant greeted the caller within five seconds.',
          display_order: 0,
          enum_values: ['string'],
          eval_type: 'continuous_qualitative',
          observability_enabled: true,
          prompt: 'Score whether the greeting was timely and natural.',
          sampling_enabled: true,
          simulation_enabled: true,
          type: 'llm_judge',
        },
      ],
    });
  });

  // Mock server tests are disabled
  test.skip('generateMetrics: only required params', async () => {
    const responsePromise = client.ai.tests.testFramework.v1.metrics.generateMetrics({
      agent_id: 1259,
      num_metrics: 5,
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
  test.skip('generateMetrics: required and optional params', async () => {
    const response = await client.ai.tests.testFramework.v1.metrics.generateMetrics({
      agent_id: 1259,
      num_metrics: 5,
      scenarios: [9512],
    });
  });

  // Mock server tests are disabled
  test.skip('retrieveGenerateMetricsProgress: only required params', async () => {
    const responsePromise = client.ai.tests.testFramework.v1.metrics.retrieveGenerateMetricsProgress({
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
  test.skip('retrieveGenerateMetricsProgress: required and optional params', async () => {
    const response = await client.ai.tests.testFramework.v1.metrics.retrieveGenerateMetricsProgress({
      progress_id: 'progress_id',
    });
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.ai.tests.testFramework.v1.metrics.delete(0);
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
    const responsePromise = client.ai.tests.testFramework.v1.metrics.retrieve(0);
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
    const responsePromise = client.ai.tests.testFramework.v1.metrics.update(0, {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
