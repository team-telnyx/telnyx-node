// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource calls', () => {
  // Prism tests are disabled
  test.skip('dial: only required params', async () => {
    const responsePromise = client.calls.dial({
      connection_id: '7267xxxxxxxxxxxxxx',
      from: '+18005550101',
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
  test.skip('dial: required and optional params', async () => {
    const response = await client.calls.dial({
      connection_id: '7267xxxxxxxxxxxxxx',
      from: '+18005550101',
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
      billing_group_id: 'f5586561-8ff0-4291-a0ac-84fe544797bd',
      bridge_intent: true,
      bridge_on_answer: true,
      client_state: 'aGF2ZSBhIG5pY2UgZGF5ID1d',
      command_id: '891510ac-f3e4-11e8-af5b-de00688a4901',
      conference_config: {
        id: '0ccc7b54-4df3-4bca-a65a-3da1ecc777f0',
        beep_enabled: 'on_exit',
        conference_name: 'telnyx-conference',
        early_media: false,
        end_conference_on_exit: true,
        hold: true,
        hold_audio_url: 'http://example.com/message.wav',
        hold_media_name: 'my_media_uploaded_to_media_storage_api',
        mute: true,
        soft_end_conference_on_exit: true,
        start_conference_on_create: false,
        start_conference_on_enter: true,
        supervisor_role: 'whisper',
        whisper_call_control_ids: [
          'v2:Sg1xxxQ_U3ixxxyXT_VDNI3xxxazZdg6Vxxxs4-GNYxxxVaJPOhFMRQ',
          'v2:qqpb0mmvd-ovhhBr0BUQQn0fld5jIboaaX3-De0DkqXHzbf8d75xkw',
        ],
      },
      custom_headers: [
        { name: 'head_1', value: 'val_1' },
        { name: 'head_2', value: 'val_2' },
      ],
      dialogflow_config: { analyze_sentiment: false, partial_automated_agent_reply: false },
      enable_dialogflow: false,
      from_display_name: 'Company Name',
      link_to: 'ilditnZK_eVysupV21KzmzN_sM29ygfauQojpm4BgFtfX5hXAcjotg==',
      media_encryption: 'SRTP',
      media_name: 'my_media_uploaded_to_media_storage_api',
      park_after_unbridge: 'self',
      preferred_codecs: 'G722,PCMU,PCMA,G729,OPUS,VP8,H264',
      record: 'record-from-answer',
      record_channels: 'single',
      record_custom_file_name: 'my_recording_file_name',
      record_format: 'wav',
      record_max_length: 1000,
      record_timeout_secs: 100,
      record_track: 'outbound',
      record_trim: 'trim-silence',
      send_silence_when_idle: true,
      sip_auth_password: 'password',
      sip_auth_username: 'username',
      sip_headers: [{ name: 'User-to-User', value: '12345' }],
      sip_region: 'Canada',
      sip_transport_protocol: 'TLS',
      sound_modifications: { octaves: 0.1, pitch: 0.8, semitone: -2, track: 'both' },
      stream_bidirectional_codec: 'G722',
      stream_bidirectional_mode: 'rtp',
      stream_bidirectional_sampling_rate: 16000,
      stream_bidirectional_target_legs: 'both',
      stream_codec: 'PCMA',
      stream_establish_before_call_originate: true,
      stream_track: 'both_tracks',
      stream_url: 'wss://www.example.com/websocket',
      supervise_call_control_id: 'v3:MdI91X4lWFEs7IgbBEOT9M4AigoY08M0WWZFISt1Yw2axZ_IiE4pqg',
      supervisor_role: 'barge',
      time_limit_secs: 600,
      timeout_secs: 60,
      transcription: true,
      transcription_config: {
        client_state: 'aGF2ZSBhIG5pY2UgZGF5ID1d',
        command_id: '891510ac-f3e4-11e8-af5b-de00688a4901',
        transcription_engine: 'Deepgram',
        transcription_engine_config: {
          transcription_engine: 'Deepgram',
          transcription_model: 'deepgram/nova-2',
          keywords_boosting: { snuffleupagus: 5, systrom: 2, krieger: 1 },
          language: 'en',
        },
        transcription_tracks: 'both',
      },
      webhook_url: 'https://www.example.com/server-b/',
      webhook_url_method: 'POST',
    });
  });

  // Prism tests are disabled
  test.skip('retrieveStatus', async () => {
    const responsePromise = client.calls.retrieveStatus('call_control_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
