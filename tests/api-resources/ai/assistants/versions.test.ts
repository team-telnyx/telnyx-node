// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource versions', () => {
  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.ai.assistants.versions.retrieve('version_id', {
      assistant_id: 'assistant_id',
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
    const response = await client.ai.assistants.versions.retrieve('version_id', {
      assistant_id: 'assistant_id',
      include_mcp_servers: true,
    });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.ai.assistants.versions.update('version_id', {
      assistant_id: 'assistant_id',
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
  test.skip('update: required and optional params', async () => {
    const response = await client.ai.assistants.versions.update('version_id', {
      assistant_id: 'assistant_id',
      description: 'description',
      dynamic_variables: { foo: 'bar' },
      dynamic_variables_webhook_url: 'dynamic_variables_webhook_url',
      enabled_features: ['telephony'],
      greeting: 'greeting',
      insight_settings: { insight_group_id: 'insight_group_id' },
      instructions: 'instructions',
      llm_api_key_ref: 'llm_api_key_ref',
      messaging_settings: {
        default_messaging_profile_id: 'default_messaging_profile_id',
        delivery_status_webhook_url: 'delivery_status_webhook_url',
      },
      model: 'model',
      name: 'name',
      privacy_settings: { data_retention: true },
      telephony_settings: {
        default_texml_app_id: 'default_texml_app_id',
        supports_unauthenticated_web_calls: true,
      },
      tools: [
        {
          type: 'webhook',
          webhook: {
            description: 'description',
            name: 'name',
            url: 'https://example.com/api/v1/function',
            body_parameters: {
              properties: { age: 'bar', location: 'bar' },
              required: ['age', 'location'],
              type: 'object',
            },
            headers: [{ name: 'name', value: 'value' }],
            method: 'GET',
            path_parameters: {
              properties: { id: 'bar' },
              required: ['id'],
              type: 'object',
            },
            query_parameters: {
              properties: { page: 'bar' },
              required: ['page'],
              type: 'object',
            },
          },
        },
      ],
      transcription: {
        language: 'language',
        model: 'deepgram/flux',
        region: 'region',
        settings: {
          eot_threshold: 0,
          eot_timeout_ms: 0,
          numerals: true,
          smart_format: true,
        },
      },
      voice_settings: {
        voice: 'voice',
        api_key_ref: 'api_key_ref',
        background_audio: { type: 'predefined_media', value: 'silence' },
        voice_speed: 0,
      },
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.ai.assistants.versions.list('assistant_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.ai.assistants.versions.delete('version_id', {
      assistant_id: 'assistant_id',
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
  test.skip('delete: required and optional params', async () => {
    const response = await client.ai.assistants.versions.delete('version_id', {
      assistant_id: 'assistant_id',
    });
  });

  // Prism tests are disabled
  test.skip('promote: only required params', async () => {
    const responsePromise = client.ai.assistants.versions.promote('version_id', {
      assistant_id: 'assistant_id',
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
  test.skip('promote: required and optional params', async () => {
    const response = await client.ai.assistants.versions.promote('version_id', {
      assistant_id: 'assistant_id',
    });
  });
});
