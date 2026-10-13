// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource tokenKeys', () => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.llmTokenGateway.tokenKeys.list();
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
      client.llmTokenGateway.tokenKeys.list(
        {
          'page[number]': 1,
          'page[size]': 1,
          'page[snapshot]': 'page[snapshot]',
          token_group_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          token_user_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.llmTokenGateway.tokenKeys.create({
      name: 'support-service',
      token_group_id: '11111111-1111-4111-8111-111111111111',
      'Idempotency-Key': 'Idempotency-Key',
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
    const response = await client.llmTokenGateway.tokenKeys.create({
      name: 'support-service',
      token_group_id: '11111111-1111-4111-8111-111111111111',
      'Idempotency-Key': 'Idempotency-Key',
      allowed_models: ['J!Q0Ok0bzJb7'],
      blocked: true,
      budget_duration: '1d',
      expires_at: '2019-12-27T18:11:19.117Z',
      max_budget: 0.000001,
      max_parallel_requests: 5,
      required_end_user_id: true,
      rpm_limit: 1,
      token_user_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      tpm_limit: 1,
    });
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.llmTokenGateway.tokenKeys.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      'Idempotency-Key': 'Idempotency-Key',
      'If-Match': 'If-Match',
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
    const response = await client.llmTokenGateway.tokenKeys.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      'Idempotency-Key': 'Idempotency-Key',
      'If-Match': 'If-Match',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.llmTokenGateway.tokenKeys.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.llmTokenGateway.tokenKeys.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      'Idempotency-Key': 'Idempotency-Key',
      'If-Match': 'If-Match',
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
    const response = await client.llmTokenGateway.tokenKeys.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      'Idempotency-Key': 'Idempotency-Key',
      'If-Match': 'If-Match',
      allowed_models: ['J!Q0Ok0bzJb7'],
      blocked: true,
      budget_duration: '1d',
      expires_at: '2019-12-27T18:11:19.117Z',
      max_budget: 0.000001,
      max_parallel_requests: 5,
      name: 'name',
      required_end_user_id: true,
      rpm_limit: 1,
      tpm_limit: 1,
    });
  });
});
