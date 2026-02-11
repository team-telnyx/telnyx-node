// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource plan', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.ai.missions.runs.plan.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      mission_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      steps: [
        {
          description: 'description',
          sequence: 0,
          step_id: 'step_id',
        },
      ],
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
  test.skip('create: required and optional params', async () => {
    const response = await client.ai.missions.runs.plan.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      mission_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      steps: [
        {
          description: 'description',
          sequence: 0,
          step_id: 'step_id',
          metadata: { foo: 'bar' },
          parent_step_id: 'parent_step_id',
        },
      ],
    });
  });

  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.ai.missions.runs.plan.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
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
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.ai.missions.runs.plan.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      mission_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // Prism tests are disabled
  test.skip('addStepsToPlan: only required params', async () => {
    const responsePromise = client.ai.missions.runs.plan.addStepsToPlan(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        mission_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        steps: [
          {
            description: 'description',
            sequence: 0,
            step_id: 'step_id',
          },
        ],
      },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('addStepsToPlan: required and optional params', async () => {
    const response = await client.ai.missions.runs.plan.addStepsToPlan(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        mission_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        steps: [
          {
            description: 'description',
            sequence: 0,
            step_id: 'step_id',
            metadata: { foo: 'bar' },
            parent_step_id: 'parent_step_id',
          },
        ],
      },
    );
  });

  // Prism tests are disabled
  test.skip('getStepDetails: only required params', async () => {
    const responsePromise = client.ai.missions.runs.plan.getStepDetails('step_id', {
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
  test.skip('getStepDetails: required and optional params', async () => {
    const response = await client.ai.missions.runs.plan.getStepDetails('step_id', {
      mission_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      run_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // Prism tests are disabled
  test.skip('updateStep: only required params', async () => {
    const responsePromise = client.ai.missions.runs.plan.updateStep('step_id', {
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
  test.skip('updateStep: required and optional params', async () => {
    const response = await client.ai.missions.runs.plan.updateStep('step_id', {
      mission_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      run_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      metadata: { foo: 'bar' },
      status: 'pending',
    });
  });
});
