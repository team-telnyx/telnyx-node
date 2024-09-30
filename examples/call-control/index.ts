/**
 * To run this file, just provide your Secret API Key, like so:
 * TELNYX_API_KEY=KEY... node index.js
 */

import Telnyx from 'telnyx';

const apiKey = String(process.env.TELNYX_API_KEY || '');

const telnyx = new Telnyx(apiKey);

const params: Telnyx.CallsCreateParams = {
  to: '+18005550100 or sip:username@sip.telnyx.com',
  from: '+18005550101',
  from_display_name: 'Company Name',
  connection_id: '7267xxxxxxxxxxxxxx',
  conference_config: {
    conference_name: 'telnyx-conference',
    start_conference_on_enter: true,
  },
  audio_url: 'http://www.example.com/sounds/greeting.wav',
  timeout_secs: 60,
  time_limit_secs: 60,
  webhook_url: 'https://www.example.com/server-b/',
  webhook_url_method: 'POST',
  answering_machine_detection: 'detect',
  answering_machine_detection_config: {
    total_analysis_time_millis: 5000,
    after_greeting_silence_millis: 1000,
    between_words_silence_millis: 1000,
    greeting_duration_millis: 1000,
    initial_silence_millis: 1000,
    maximum_number_of_words: 1000,
    maximum_word_length_millis: 2000,
    silence_threshold: 512,
    greeting_total_analysis_time_millis: 50000,
    greeting_silence_duration_millis: 2000,
  },
  custom_headers: [
    {
      name: 'head_1',
      value: 'val_1',
    },
    {
      name: 'head_2',
      value: 'val_2',
    },
  ],
  client_state: 'aGF2ZSBhIG5pY2UgZGF5ID1d',
  command_id: '891510ac-f3e4-11e8-af5b-de00688a4901',
  link_to: 'ilditnZK_eVysupV21KzmzN_sM29ygfauQojpm4BgFtfX5hXAcjotg==',
  media_encryption: 'SRTP',
  sip_auth_username: 'username',
  sip_auth_password: 'password',
  sip_headers: [
    {
      name: 'User-to-User',
      value: '12345',
    },
  ],
  sip_transport_protocol: 'TLS',
  stream_url: 'wss://www.example.com/websocket',
  stream_track: 'both_tracks',
  send_silence_when_idle: true,
  enable_dialogflow: false,
  dialogflow_config: {
    analyze_sentiment: false,
    partial_automated_agent_reply: false,
  },
  record_channels: 'single',
  record_format: 'wav',
  record_max_length: 0,
  record_timeout_secs: 0,
  transcription: true,
};

(async function callControl() {
  try {
    const {data: call} = await telnyx.calls.dial(params);

    const {data: playback} = await call.playbackStart({
      audio_url: 'http://www.example.com/sounds/greeting.wav',
      loop: 'infinity',
      overlay: true,
      stop: 'current',
      target_legs: 'self',
      client_state: 'aGF2ZSBhIG5pY2UgZGF5ID1d',
      command_id: '891510ac-f3e4-11e8-af5b-de00688a4901',
      cache_audio: true,
      audio_type: 'mp3',
    });

    console.log(playback?.result);
  } catch (e: unknown) {
    console.error(e);

    const rawError: Telnyx.TelnyxRawError = (e as {raw: Telnyx.TelnyxRawError})
      .raw;

    console.dir(JSON.stringify(rawError.errors));
  }
})();
