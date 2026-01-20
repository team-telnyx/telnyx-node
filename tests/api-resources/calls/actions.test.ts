// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource actions', () => {
  // Prism tests are disabled
  test.skip('addAIAssistantMessages', async () => {
    const responsePromise = client.calls.actions.addAIAssistantMessages('call_control_id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('answer', async () => {
    const responsePromise = client.calls.actions.answer('call_control_id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('bridge: only required params', async () => {
    const responsePromise = client.calls.actions.bridge('call_control_id', {
      call_control_id_to_bridge_with: 'v3:MdI91X4lWFEs7IgbBEOT9M4AigoY08M0WWZFISt1Yw2axZ_IiE4pqg',
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
  test.skip('bridge: required and optional params', async () => {
    const response = await client.calls.actions.bridge('call_control_id', {
      call_control_id_to_bridge_with: 'v3:MdI91X4lWFEs7IgbBEOT9M4AigoY08M0WWZFISt1Yw2axZ_IiE4pqg',
      client_state: 'aGF2ZSBhIG5pY2UgZGF5ID1d',
      command_id: '891510ac-f3e4-11e8-af5b-de00688a4901',
      mute_dtmf: 'opposite',
      park_after_unbridge: 'self',
      play_ringtone: true,
      queue: 'support',
      record: 'record-from-answer',
      record_channels: 'single',
      record_custom_file_name: 'my_recording_file_name',
      record_format: 'wav',
      record_max_length: 1000,
      record_timeout_secs: 100,
      record_track: 'outbound',
      record_trim: 'trim-silence',
      ringtone: 'pl',
      video_room_context: 'Alice',
      video_room_id: '0ccc7b54-4df3-4bca-a65a-3da1ecc777f0',
    });
  });

  // Prism tests are disabled
  test.skip('enqueue: only required params', async () => {
    const responsePromise = client.calls.actions.enqueue('call_control_id', { queue_name: 'support' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('enqueue: required and optional params', async () => {
    const response = await client.calls.actions.enqueue('call_control_id', {
      queue_name: 'support',
      client_state: 'aGF2ZSBhIG5pY2UgZGF5ID1d',
      command_id: '891510ac-f3e4-11e8-af5b-de00688a4901',
      keep_after_hangup: true,
      max_size: 20,
      max_wait_time_secs: 600,
    });
  });

  // Prism tests are disabled
  test.skip('gather', async () => {
    const responsePromise = client.calls.actions.gather('call_control_id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('gatherUsingAI: only required params', async () => {
    const responsePromise = client.calls.actions.gatherUsingAI('call_control_id', {
      parameters: {
        properties: 'bar',
        required: 'bar',
        type: 'bar',
      },
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
  test.skip('gatherUsingAI: required and optional params', async () => {
    const response = await client.calls.actions.gatherUsingAI('call_control_id', {
      parameters: {
        properties: 'bar',
        required: 'bar',
        type: 'bar',
      },
      assistant: {
        instructions: 'You are a friendly voice assistant.',
        model: 'Qwen/Qwen3-235B-A22B',
        openai_api_key_ref: 'my_openai_api_key',
        tools: [
          {
            book_appointment: {
              api_key_ref: 'my_calcom_api_key',
              event_type_id: 0,
              attendee_name: 'attendee_name',
              attendee_timezone: 'attendee_timezone',
            },
            type: 'book_appointment',
          },
        ],
      },
      client_state: 'aGF2ZSBhIG5pY2UgZGF5ID1d',
      command_id: '891510ac-f3e4-11e8-af5b-de00688a4901',
      greeting: 'Hello, can you tell me your age and where you live?',
      interruption_settings: { enable: true },
      language: 'en',
      message_history: [
        { content: "Hello, what's your name?", role: 'assistant' },
        { content: "Hello, I'm John.", role: 'user' },
      ],
      send_message_history_updates: true,
      send_partial_results: true,
      transcription: { model: 'distil-whisper/distil-large-v2' },
      user_response_timeout_ms: 5000,
      voice: 'Telnyx.KokoroTTS.af',
      voice_settings: { type: 'elevenlabs', api_key_ref: 'my_elevenlabs_api_key' },
    });
  });

  // Prism tests are disabled
  test.skip('gatherUsingAudio', async () => {
    const responsePromise = client.calls.actions.gatherUsingAudio('call_control_id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('gatherUsingSpeak: only required params', async () => {
    const responsePromise = client.calls.actions.gatherUsingSpeak('call_control_id', {
      payload: 'say this on call',
      voice: 'male',
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
  test.skip('gatherUsingSpeak: required and optional params', async () => {
    const response = await client.calls.actions.gatherUsingSpeak('call_control_id', {
      payload: 'say this on call',
      voice: 'male',
      client_state: 'aGF2ZSBhIG5pY2UgZGF5ID1d',
      command_id: '891510ac-f3e4-11e8-af5b-de00688a4901',
      inter_digit_timeout_millis: 10000,
      invalid_payload: 'say this on call',
      language: 'arb',
      maximum_digits: 10,
      maximum_tries: 3,
      minimum_digits: 1,
      payload_type: 'text',
      service_level: 'premium',
      terminating_digit: '#',
      timeout_millis: 60000,
      valid_digits: '123',
      voice_settings: { type: 'elevenlabs', api_key_ref: 'my_elevenlabs_api_key' },
    });
  });

  // Prism tests are disabled
  test.skip('hangup', async () => {
    const responsePromise = client.calls.actions.hangup('call_control_id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('leaveQueue', async () => {
    const responsePromise = client.calls.actions.leaveQueue('call_control_id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('pauseRecording', async () => {
    const responsePromise = client.calls.actions.pauseRecording('call_control_id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('refer: only required params', async () => {
    const responsePromise = client.calls.actions.refer('call_control_id', {
      sip_address: 'sip:username@sip.non-telnyx-address.com',
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
  test.skip('refer: required and optional params', async () => {
    const response = await client.calls.actions.refer('call_control_id', {
      sip_address: 'sip:username@sip.non-telnyx-address.com',
      client_state: 'aGF2ZSBhIG5pY2UgZGF5ID1d',
      command_id: '891510ac-f3e4-11e8-af5b-de00688a4901',
      custom_headers: [
        { name: 'head_1', value: 'val_1' },
        { name: 'head_2', value: 'val_2' },
      ],
      sip_auth_password: 'sip_auth_password',
      sip_auth_username: 'sip_auth_username',
      sip_headers: [{ name: 'User-to-User', value: 'value' }],
    });
  });

  // Prism tests are disabled
  test.skip('reject: only required params', async () => {
    const responsePromise = client.calls.actions.reject('call_control_id', { cause: 'USER_BUSY' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('reject: required and optional params', async () => {
    const response = await client.calls.actions.reject('call_control_id', {
      cause: 'USER_BUSY',
      client_state: 'aGF2ZSBhIG5pY2UgZGF5ID1d',
      command_id: '891510ac-f3e4-11e8-af5b-de00688a4901',
    });
  });

  // Prism tests are disabled
  test.skip('resumeRecording', async () => {
    const responsePromise = client.calls.actions.resumeRecording('call_control_id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('sendDtmf: only required params', async () => {
    const responsePromise = client.calls.actions.sendDtmf('call_control_id', { digits: '1www2WABCDw9' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('sendDtmf: required and optional params', async () => {
    const response = await client.calls.actions.sendDtmf('call_control_id', {
      digits: '1www2WABCDw9',
      client_state: 'aGF2ZSBhIG5pY2UgZGF5ID1d',
      command_id: '891510ac-f3e4-11e8-af5b-de00688a4901',
      duration_millis: 500,
    });
  });

  // Prism tests are disabled
  test.skip('sendSipInfo: only required params', async () => {
    const responsePromise = client.calls.actions.sendSipInfo('call_control_id', {
      body: '{"key": "value", "numValue": 100}',
      content_type: 'application/json',
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
  test.skip('sendSipInfo: required and optional params', async () => {
    const response = await client.calls.actions.sendSipInfo('call_control_id', {
      body: '{"key": "value", "numValue": 100}',
      content_type: 'application/json',
      client_state: 'aGF2ZSBhIG5pY2UgZGF5ID1d',
      command_id: '891510ac-f3e4-11e8-af5b-de00688a4901',
    });
  });

  // Prism tests are disabled
  test.skip('speak: only required params', async () => {
    const responsePromise = client.calls.actions.speak('call_control_id', {
      payload: 'Say this on the call',
      voice: 'female',
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
  test.skip('speak: required and optional params', async () => {
    const response = await client.calls.actions.speak('call_control_id', {
      payload: 'Say this on the call',
      voice: 'female',
      client_state: 'aGF2ZSBhIG5pY2UgZGF5ID1d',
      command_id: '891510ac-f3e4-11e8-af5b-de00688a4901',
      language: 'arb',
      payload_type: 'text',
      service_level: 'basic',
      stop: 'current',
      voice_settings: { type: 'elevenlabs', api_key_ref: 'my_elevenlabs_api_key' },
    });
  });

  // Prism tests are disabled
  test.skip('startAIAssistant', async () => {
    const responsePromise = client.calls.actions.startAIAssistant('call_control_id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('startForking', async () => {
    const responsePromise = client.calls.actions.startForking('call_control_id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('startNoiseSuppression', async () => {
    const responsePromise = client.calls.actions.startNoiseSuppression('call_control_id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('startPlayback', async () => {
    const responsePromise = client.calls.actions.startPlayback('call_control_id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('startRecording: only required params', async () => {
    const responsePromise = client.calls.actions.startRecording('call_control_id', {
      channels: 'single',
      format: 'wav',
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
  test.skip('startRecording: required and optional params', async () => {
    const response = await client.calls.actions.startRecording('call_control_id', {
      channels: 'single',
      format: 'wav',
      client_state: 'aGF2ZSBhIG5pY2UgZGF5ID1d',
      command_id: '891510ac-f3e4-11e8-af5b-de00688a4901',
      custom_file_name: 'my_recording_file_name',
      max_length: 0,
      play_beep: true,
      recording_track: 'outbound',
      timeout_secs: 0,
      transcription: true,
      transcription_engine: 'B',
      transcription_language: 'en-US',
      transcription_max_speaker_count: 4,
      transcription_min_speaker_count: 4,
      transcription_profanity_filter: true,
      transcription_speaker_diarization: true,
      trim: 'trim-silence',
    });
  });

  // Prism tests are disabled
  test.skip('startSiprec', async () => {
    const responsePromise = client.calls.actions.startSiprec('call_control_id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('startStreaming', async () => {
    const responsePromise = client.calls.actions.startStreaming('call_control_id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('startTranscription', async () => {
    const responsePromise = client.calls.actions.startTranscription('call_control_id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('stopAIAssistant', async () => {
    const responsePromise = client.calls.actions.stopAIAssistant('call_control_id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('stopForking', async () => {
    const responsePromise = client.calls.actions.stopForking('call_control_id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('stopGather', async () => {
    const responsePromise = client.calls.actions.stopGather('call_control_id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('stopNoiseSuppression', async () => {
    const responsePromise = client.calls.actions.stopNoiseSuppression('call_control_id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('stopPlayback', async () => {
    const responsePromise = client.calls.actions.stopPlayback('call_control_id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('stopRecording', async () => {
    const responsePromise = client.calls.actions.stopRecording('call_control_id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('stopSiprec', async () => {
    const responsePromise = client.calls.actions.stopSiprec('call_control_id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('stopStreaming', async () => {
    const responsePromise = client.calls.actions.stopStreaming('call_control_id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('stopTranscription', async () => {
    const responsePromise = client.calls.actions.stopTranscription('call_control_id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('switchSupervisorRole: only required params', async () => {
    const responsePromise = client.calls.actions.switchSupervisorRole('call_control_id', { role: 'barge' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('switchSupervisorRole: required and optional params', async () => {
    const response = await client.calls.actions.switchSupervisorRole('call_control_id', { role: 'barge' });
  });

  // Prism tests are disabled
  test.skip('transfer: only required params', async () => {
    const responsePromise = client.calls.actions.transfer('call_control_id', {
      to: '+18005550100 or sip:username@sip.telnyx.com',
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
  test.skip('transfer: required and optional params', async () => {
    const response = await client.calls.actions.transfer('call_control_id', {
      to: '+18005550100 or sip:username@sip.telnyx.com',
      answering_machine_detection: 'detect',
      answering_machine_detection_config: {
        after_greeting_silence_millis: 1000,
        between_words_silence_millis: 1000,
        greeting_duration_millis: 1000,
        greeting_silence_duration_millis: 2000,
        greeting_total_analysis_time_millis: 50000,
        initial_silence_millis: 1000,
        maximum_number_of_words: 1000,
        maximum_word_length_millis: 2000,
        silence_threshold: 512,
        total_analysis_time_millis: 5000,
      },
      audio_url: 'http://www.example.com/sounds/greeting.wav',
      client_state: 'aGF2ZSBhIG5pY2UgZGF5ID1d',
      command_id: '891510ac-f3e4-11e8-af5b-de00688a4901',
      custom_headers: [
        { name: 'head_1', value: 'val_1' },
        { name: 'head_2', value: 'val_2' },
      ],
      early_media: true,
      from: '+18005550101',
      from_display_name: 'Company Name',
      media_encryption: 'SRTP',
      media_name: 'my_media_uploaded_to_media_storage_api',
      mute_dtmf: 'opposite',
      park_after_unbridge: 'self',
      record: 'record-from-answer',
      record_channels: 'single',
      record_custom_file_name: 'my_recording_file_name',
      record_format: 'wav',
      record_max_length: 1000,
      record_timeout_secs: 100,
      record_track: 'outbound',
      record_trim: 'trim-silence',
      sip_auth_password: 'password',
      sip_auth_username: 'username',
      sip_headers: [{ name: 'User-to-User', value: 'value' }],
      sip_region: 'Canada',
      sip_transport_protocol: 'TLS',
      sound_modifications: {
        octaves: 0.1,
        pitch: 0.8,
        semitone: -2,
        track: 'both',
      },
      target_leg_client_state: 'aGF2ZSBhIG5pY2UgZGF5ID1d',
      time_limit_secs: 600,
      timeout_secs: 60,
      webhook_url: 'https://www.example.com/server-b/',
      webhook_url_method: 'POST',
    });
  });

  // Prism tests are disabled
  test.skip('updateClientState: only required params', async () => {
    const responsePromise = client.calls.actions.updateClientState('call_control_id', {
      client_state: 'aGF2ZSBhIG5pY2UgZGF5ID1d',
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
  test.skip('updateClientState: required and optional params', async () => {
    const response = await client.calls.actions.updateClientState('call_control_id', {
      client_state: 'aGF2ZSBhIG5pY2UgZGF5ID1d',
    });
  });
});
