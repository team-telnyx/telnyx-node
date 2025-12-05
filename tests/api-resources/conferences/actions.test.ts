// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource actions', () => {
  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.conferences.actions.update('id', {
      call_control_id: 'v3:MdI91X4lWFEs7IgbBEOT9M4AigoY08M0WWZFISt1Yw2axZ_IiE4pqg',
      supervisor_role: 'whisper',
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
    const response = await client.conferences.actions.update('id', {
      call_control_id: 'v3:MdI91X4lWFEs7IgbBEOT9M4AigoY08M0WWZFISt1Yw2axZ_IiE4pqg',
      supervisor_role: 'whisper',
      command_id: '891510ac-f3e4-11e8-af5b-de00688a4901',
      region: 'US',
      whisper_call_control_ids: [
        'v2:Sg1xxxQ_U3ixxxyXT_VDNI3xxxazZdg6Vxxxs4-GNYxxxVaJPOhFMRQ',
        'v2:qqpb0mmvd-ovhhBr0BUQQn0fld5jIboaaX3-De0DkqXHzbf8d75xkw',
      ],
    });
  });

  // Prism tests are disabled
  test.skip('hold', async () => {
    const responsePromise = client.conferences.actions.hold('id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('join: only required params', async () => {
    const responsePromise = client.conferences.actions.join('id', {
      call_control_id: 'v3:MdI91X4lWFEs7IgbBEOT9M4AigoY08M0WWZFISt1Yw2axZ_IiE4pqg',
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
  test.skip('join: required and optional params', async () => {
    const response = await client.conferences.actions.join('id', {
      call_control_id: 'v3:MdI91X4lWFEs7IgbBEOT9M4AigoY08M0WWZFISt1Yw2axZ_IiE4pqg',
      beep_enabled: 'always',
      client_state: 'aGF2ZSBhIG5pY2UgZGF5ID1d',
      command_id: '891510ac-f3e4-11e8-af5b-de00688a4901',
      end_conference_on_exit: true,
      hold: true,
      hold_audio_url: 'http://www.example.com/audio.wav',
      hold_media_name: 'my_media_uploaded_to_media_storage_api',
      mute: true,
      region: 'US',
      soft_end_conference_on_exit: true,
      start_conference_on_enter: true,
      supervisor_role: 'whisper',
      whisper_call_control_ids: [
        'v2:Sg1xxxQ_U3ixxxyXT_VDNI3xxxazZdg6Vxxxs4-GNYxxxVaJPOhFMRQ',
        'v2:qqpb0mmvd-ovhhBr0BUQQn0fld5jIboaaX3-De0DkqXHzbf8d75xkw',
      ],
    });
  });

  // Prism tests are disabled
  test.skip('leave: only required params', async () => {
    const responsePromise = client.conferences.actions.leave('id', {
      call_control_id: 'c46e06d7-b78f-4b13-96b6-c576af9640ff',
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
  test.skip('leave: required and optional params', async () => {
    const response = await client.conferences.actions.leave('id', {
      call_control_id: 'c46e06d7-b78f-4b13-96b6-c576af9640ff',
      beep_enabled: 'never',
      command_id: '891510ac-f3e4-11e8-af5b-de00688a4901',
      region: 'US',
    });
  });

  // Prism tests are disabled
  test.skip('mute', async () => {
    const responsePromise = client.conferences.actions.mute('id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('play', async () => {
    const responsePromise = client.conferences.actions.play('id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('recordPause', async () => {
    const responsePromise = client.conferences.actions.recordPause('id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('recordResume', async () => {
    const responsePromise = client.conferences.actions.recordResume('id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('recordStart: only required params', async () => {
    const responsePromise = client.conferences.actions.recordStart('id', { format: 'wav' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('recordStart: required and optional params', async () => {
    const response = await client.conferences.actions.recordStart('id', {
      format: 'wav',
      command_id: '891510ac-f3e4-11e8-af5b-de00688a4901',
      custom_file_name: 'my_recording_file_name',
      play_beep: true,
      region: 'US',
      trim: 'trim-silence',
    });
  });

  // Prism tests are disabled
  test.skip('recordStop', async () => {
    const responsePromise = client.conferences.actions.recordStop('id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('speak: only required params', async () => {
    const responsePromise = client.conferences.actions.speak('id', {
      payload: 'Say this to participants',
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
    const response = await client.conferences.actions.speak('id', {
      payload: 'Say this to participants',
      voice: 'female',
      call_control_ids: ['v3:MdI91X4lWFEs7IgbBEOT9M4AigoY08M0WWZFISt1Yw2axZ_IiE4pqg'],
      command_id: '891510ac-f3e4-11e8-af5b-de00688a4901',
      language: 'en-US',
      payload_type: 'text',
      region: 'US',
      voice_settings: { type: 'elevenlabs', api_key_ref: 'my_elevenlabs_api_key' },
    });
  });

  // Prism tests are disabled
  test.skip('stop', async () => {
    const responsePromise = client.conferences.actions.stop('id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('unhold: only required params', async () => {
    const responsePromise = client.conferences.actions.unhold('id', {
      call_control_ids: ['v3:MdI91X4lWFEs7IgbBEOT9M4AigoY08M0WWZFISt1Yw2axZ_IiE4pqg'],
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
  test.skip('unhold: required and optional params', async () => {
    const response = await client.conferences.actions.unhold('id', {
      call_control_ids: ['v3:MdI91X4lWFEs7IgbBEOT9M4AigoY08M0WWZFISt1Yw2axZ_IiE4pqg'],
      region: 'US',
    });
  });

  // Prism tests are disabled
  test.skip('unmute', async () => {
    const responsePromise = client.conferences.actions.unmute('id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
