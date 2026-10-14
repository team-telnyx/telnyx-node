// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource tokenGroups', () => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.llmTokenGateway.tokenGroups.list();
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
      client.llmTokenGateway.tokenGroups.list(
        {
          'page[number]': 1,
          'page[size]': 1,
          'page[snapshot]': 'page[snapshot]',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.llmTokenGateway.tokenGroups.create({
      allowed_models: ['Kimi-K3', 'GLM-5.3-Flash'],
      name: 'support-backend',
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
    const response = await client.llmTokenGateway.tokenGroups.create({
      allowed_models: ['Kimi-K3', 'GLM-5.3-Flash'],
      name: 'support-backend',
      'Idempotency-Key': 'Idempotency-Key',
      blocked: true,
      budget_duration: '1d',
      cache_ttl: 1,
      fallbacks: { 'Kimi-K3': ['GLM-5.3-Flash'] },
      guardrails: {
        dlp: {
          profiles: ['financial'],
          prompt: 'ignore',
          response: 'ignore',
        },
        secrets: { prompt: 'ignore', response: 'ignore' },
        streaming: 'buffered',
      },
      max_budget: 0,
      max_parallel_requests: 20,
      provider_key_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      retries: {
        max_attempts: 2,
        backoff: 'exponential',
        request_timeout_ms: 10000,
        retry_delay_ms: 250,
      },
      rpm_limit: 0,
      tpm_limit: 0,
    });
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.llmTokenGateway.tokenGroups.delete(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { 'Idempotency-Key': 'Idempotency-Key', 'If-Match': 'If-Match' },
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
  test.skip('delete: required and optional params', async () => {
    const response = await client.llmTokenGateway.tokenGroups.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      'Idempotency-Key': 'Idempotency-Key',
      'If-Match': 'If-Match',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.llmTokenGateway.tokenGroups.retrieve(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
  test.skip('update: only required params', async () => {
    const responsePromise = client.llmTokenGateway.tokenGroups.update(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { 'Idempotency-Key': 'Idempotency-Key', 'If-Match': 'If-Match' },
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
  test.skip('update: required and optional params', async () => {
    const response = await client.llmTokenGateway.tokenGroups.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      'Idempotency-Key': 'Idempotency-Key',
      'If-Match': 'If-Match',
      allowed_models: ['Kimi-K3', 'GLM-5.3-Flash'],
      blocked: true,
      budget_duration: '1d',
      cache_ttl: 1,
      fallbacks: { 'Kimi-K3': ['GLM-5.3-Flash'] },
      guardrails: {
        dlp: {
          profiles: ['financial'],
          prompt: 'ignore',
          response: 'ignore',
        },
        secrets: { prompt: 'ignore', response: 'ignore' },
        streaming: 'buffered',
      },
      max_budget: 0,
      max_parallel_requests: 20,
      name: 'support-backend',
      provider_key_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      retries: {
        max_attempts: 2,
        backoff: 'exponential',
        request_timeout_ms: 10000,
        retry_delay_ms: 250,
      },
      rpm_limit: 0,
      tpm_limit: 0,
    });
  });
});
