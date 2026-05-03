// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource versions', () => {
  // Mock server tests are disabled
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

  // Mock server tests are disabled
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.ai.assistants.versions.retrieve('version_id', {
      assistant_id: 'assistant_id',
      include_mcp_servers: true,
    });
  });

  // Mock server tests are disabled
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

  // Mock server tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.ai.assistants.versions.update('version_id', {
      assistant_id: 'assistant_id',
      description: 'description',
      dynamic_variables: { foo: 'bar' },
      dynamic_variables_webhook_timeout_ms: 1,
      dynamic_variables_webhook_url: 'dynamic_variables_webhook_url',
      enabled_features: ['telephony'],
      external_llm: {
        base_url: 'base_url',
        model: 'model',
        authentication_method: 'token',
        certificate_ref: 'certificate_ref',
        forward_metadata: true,
        llm_api_key_ref: 'llm_api_key_ref',
        token_retrieval_url: 'token_retrieval_url',
      },
      fallback_config: {
        external_llm: {
          base_url: 'base_url',
          model: 'model',
          authentication_method: 'token',
          certificate_ref: 'certificate_ref',
          forward_metadata: true,
          llm_api_key_ref: 'llm_api_key_ref',
          token_retrieval_url: 'token_retrieval_url',
        },
        llm_api_key_ref: 'llm_api_key_ref',
        model: 'model',
      },
      greeting: 'greeting',
      insight_settings: { insight_group_id: 'insight_group_id' },
      instructions: 'instructions',
      integrations: [{ integration_id: 'integration_id', allowed_list: ['string'] }],
      interruption_settings: {
        enable: true,
        start_speaking_plan: {
          transcription_endpointing_plan: {
            on_no_punctuation_seconds: 0,
            on_number_seconds: 0,
            on_punctuation_seconds: 0,
          },
          wait_seconds: 0,
        },
      },
      llm_api_key_ref: 'llm_api_key_ref',
      mcp_servers: [{ id: 'id', allowed_tools: ['string'] }],
      messaging_settings: {
        conversation_inactivity_minutes: 1,
        default_messaging_profile_id: 'default_messaging_profile_id',
        delivery_status_webhook_url: 'delivery_status_webhook_url',
      },
      model: 'model',
      name: 'name',
      observability_settings: {
        host: 'host',
        prompt_label: 'prompt_label',
        prompt_name: 'prompt_name',
        prompt_sync: 'enabled',
        prompt_version: 1,
        public_key_ref: 'public_key_ref',
        secret_key_ref: 'secret_key_ref',
        status: 'enabled',
      },
      post_conversation_settings: { enabled: true },
      privacy_settings: { data_retention: true },
      tags: ['string'],
      telephony_settings: {
        default_texml_app_id: 'default_texml_app_id',
        noise_suppression: 'krisp',
        noise_suppression_config: { attenuation_limit: 0, mode: 'advanced' },
        recording_settings: {
          channels: 'single',
          enabled: true,
          format: 'wav',
        },
        supports_unauthenticated_web_calls: true,
        time_limit_secs: 30,
        user_idle_reply_secs: 0,
        user_idle_timeout_secs: 10,
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
      tool_ids: ['string'],
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
            store_fields_as_variables: [{ name: 'x', value_path: 'x' }],
            timeout_ms: 500,
          },
        },
      ],
      transcription: {
        api_key_ref: 'api_key_ref',
        language: 'language',
        model: 'deepgram/flux',
        region: 'region',
        settings: {
          eager_eot_threshold: 0.3,
          end_of_turn_confidence_threshold: 0,
          eot_threshold: 0.5,
          eot_timeout_ms: 500,
          keyterm: 'keyterm',
          max_turn_silence: 100,
          min_turn_silence: 100,
          numerals: true,
          smart_format: true,
        },
      },
      version_name: 'version_name',
      voice_settings: {
        voice: 'voice',
        api_key_ref: 'api_key_ref',
        background_audio: { type: 'predefined_media', value: 'silence' },
        expressive_mode: true,
        language_boost: 'auto',
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

  // Mock server tests are disabled
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

  // Mock server tests are disabled
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

  // Mock server tests are disabled
  test.skip('delete: required and optional params', async () => {
    const response = await client.ai.assistants.versions.delete('version_id', {
      assistant_id: 'assistant_id',
    });
  });

  // Mock server tests are disabled
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

  // Mock server tests are disabled
  test.skip('promote: required and optional params', async () => {
    const response = await client.ai.assistants.versions.promote('version_id', {
      assistant_id: 'assistant_id',
    });
  });
});
