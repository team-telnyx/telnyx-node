// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource assistants', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.ai.assistants.create({
      instructions: 'instructions',
      model: 'model',
      name: 'name',
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
    const response = await client.ai.assistants.create({
      instructions: 'instructions',
      model: 'model',
      name: 'name',
      description: 'description',
      dynamic_variables: { foo: 'bar' },
      dynamic_variables_webhook_url: 'dynamic_variables_webhook_url',
      enabled_features: ['telephony'],
      greeting: 'greeting',
      insight_settings: { insight_group_id: 'insight_group_id' },
      llm_api_key_ref: 'llm_api_key_ref',
      messaging_settings: {
        conversation_inactivity_minutes: 1,
        default_messaging_profile_id: 'default_messaging_profile_id',
        delivery_status_webhook_url: 'delivery_status_webhook_url',
      },
      privacy_settings: { data_retention: true },
      telephony_settings: {
        default_texml_app_id: 'default_texml_app_id',
        noise_suppression: 'krisp',
        noise_suppression_config: { attenuation_limit: 0, mode: 'advanced' },
        recording_settings: { channels: 'single', format: 'wav' },
        supports_unauthenticated_web_calls: true,
        time_limit_secs: 30,
        user_idle_timeout_secs: 30,
        voicemail_detection: {
          on_voicemail_detected: {
            action: 'stop_assistant',
            voicemail_message: {
              message: 'message',
              prompt: 'prompt',
              type: 'prompt',
            },
          },
        },
      },
      tools: [
        {
          type: 'webhook',
          webhook: {
            description: 'description',
            name: 'name',
            url: 'https://example.com/api/v1/function',
            async: true,
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
            timeout_ms: 500,
          },
        },
      ],
      transcription: {
        language: 'language',
        model: 'deepgram/flux',
        region: 'region',
        settings: {
          eager_eot_threshold: 0.3,
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
        similarity_boost: 0,
        speed: 0,
        style: 0,
        temperature: 0,
        use_speaker_boost: true,
        voice_speed: 0,
      },
      widget_settings: {
        agent_thinking_text: 'agent_thinking_text',
        audio_visualizer_config: { color: 'verdant', preset: 'preset' },
        default_state: 'expanded',
        give_feedback_url: 'give_feedback_url',
        logo_icon_url: 'logo_icon_url',
        position: 'fixed',
        report_issue_url: 'report_issue_url',
        speak_to_interrupt_text: 'speak_to_interrupt_text',
        start_call_text: 'start_call_text',
        theme: 'light',
        view_history_url: 'view_history_url',
      },
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.ai.assistants.retrieve('assistant_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.ai.assistants.retrieve(
        'assistant_id',
        {
          call_control_id: 'call_control_id',
          fetch_dynamic_variables_from_webhook: true,
          from: 'from',
          to: 'to',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.ai.assistants.update('assistant_id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.ai.assistants.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.ai.assistants.delete('assistant_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('chat: only required params', async () => {
    const responsePromise = client.ai.assistants.chat('assistant_id', {
      content: 'Tell me a joke about cats',
      conversation_id: '42b20469-1215-4a9a-8964-c36f66b406f4',
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
  test.skip('chat: required and optional params', async () => {
    const response = await client.ai.assistants.chat('assistant_id', {
      content: 'Tell me a joke about cats',
      conversation_id: '42b20469-1215-4a9a-8964-c36f66b406f4',
      name: 'Charlie',
    });
  });

  // Prism tests are disabled
  test.skip('clone', async () => {
    const responsePromise = client.ai.assistants.clone('assistant_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getTexml', async () => {
    const responsePromise = client.ai.assistants.getTexml('assistant_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('imports: only required params', async () => {
    const responsePromise = client.ai.assistants.imports({
      api_key_ref: 'api_key_ref',
      provider: 'elevenlabs',
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
  test.skip('imports: required and optional params', async () => {
    const response = await client.ai.assistants.imports({
      api_key_ref: 'api_key_ref',
      provider: 'elevenlabs',
      import_ids: ['string'],
    });
  });

  // Prism tests are disabled
  test.skip('sendSMS: only required params', async () => {
    const responsePromise = client.ai.assistants.sendSMS('assistant_id', { from: 'from', to: 'to' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('sendSMS: required and optional params', async () => {
    const response = await client.ai.assistants.sendSMS('assistant_id', {
      from: 'from',
      to: 'to',
      conversation_metadata: { foo: 'string' },
      should_create_conversation: true,
      text: 'text',
    });
  });
});
