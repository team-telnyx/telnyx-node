// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource calls', () => {
  test('update', async () => {
    const responsePromise = client.texml.calls.update('call_sid', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('initiate: only required params', async () => {
    const responsePromise = client.texml.calls.initiate('application_id', {
      From: '+13120001234',
      To: '+13121230000',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('initiate: required and optional params', async () => {
    const response = await client.texml.calls.initiate('application_id', {
      From: '+13120001234',
      To: '+13121230000',
      AsyncAmd: true,
      AsyncAmdStatusCallback: 'https://www.example.com/callback',
      AsyncAmdStatusCallbackMethod: 'GET',
      CallerId: 'Info',
      CancelPlaybackOnDetectMessageEnd: false,
      CancelPlaybackOnMachineDetection: false,
      DetectionMode: 'Premium',
      FallbackUrl: 'https://www.example.com/instructions-fallback.xml',
      MachineDetection: 'Enable',
      MachineDetectionSilenceTimeout: 2000,
      MachineDetectionSpeechEndThreshold: 2000,
      MachineDetectionSpeechThreshold: 2000,
      MachineDetectionTimeout: 5000,
      PreferredCodecs: 'PCMA,PCMU',
      Record: false,
      RecordingChannels: 'dual',
      RecordingStatusCallback: 'https://example.com/recording_status_callback',
      RecordingStatusCallbackEvent: 'in-progress completed absent',
      RecordingStatusCallbackMethod: 'GET',
      RecordingTimeout: 5,
      RecordingTrack: 'inbound',
      SipAuthPassword: '1234',
      SipAuthUsername: 'user',
      StatusCallback: 'https://www.example.com/statuscallback-listener',
      StatusCallbackEvent: 'initiated',
      StatusCallbackMethod: 'GET',
      Trim: 'trim-silence',
      Url: 'https://www.example.com/texml.xml',
      UrlMethod: 'GET',
    });
  });
});
