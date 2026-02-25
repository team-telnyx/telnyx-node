// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource participants', () => {
  // Mock server tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.texml.accounts.conferences.participants.retrieve(
      'call_sid_or_participant_label',
      { account_sid: 'account_sid', conference_sid: 'conference_sid' },
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
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.texml.accounts.conferences.participants.retrieve(
      'call_sid_or_participant_label',
      { account_sid: 'account_sid', conference_sid: 'conference_sid' },
    );
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.texml.accounts.conferences.participants.update(
      'call_sid_or_participant_label',
      { account_sid: 'account_sid', conference_sid: 'conference_sid' },
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
    const response = await client.texml.accounts.conferences.participants.update(
      'call_sid_or_participant_label',
      {
        account_sid: 'account_sid',
        conference_sid: 'conference_sid',
        AnnounceMethod: 'GET',
        AnnounceUrl: 'https://www.example.com/announce.xml',
        BeepOnExit: false,
        CallSidToCoach: 'v3:9X2vxPDFY2RHSJ1EdMS0RHRksMTg7ldNxdjWbVr9zBjbGjGsSe-aiQ',
        Coaching: false,
        EndConferenceOnExit: false,
        Hold: true,
        HoldMethod: 'POST',
        HoldUrl: 'https://www.example.com/hold-music.xml',
        Muted: true,
        WaitUrl: 'https://www.example.com/wait_music.mp3',
      },
    );
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.texml.accounts.conferences.participants.delete(
      'call_sid_or_participant_label',
      { account_sid: 'account_sid', conference_sid: 'conference_sid' },
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
    const response = await client.texml.accounts.conferences.participants.delete(
      'call_sid_or_participant_label',
      { account_sid: 'account_sid', conference_sid: 'conference_sid' },
    );
  });

  // Mock server tests are disabled
  test.skip('participants: only required params', async () => {
    const responsePromise = client.texml.accounts.conferences.participants.participants('conference_sid', {
      account_sid: 'account_sid',
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
  test.skip('participants: required and optional params', async () => {
    const response = await client.texml.accounts.conferences.participants.participants('conference_sid', {
      account_sid: 'account_sid',
      AmdStatusCallback: 'https://www.example.com/amd_result',
      AmdStatusCallbackMethod: 'GET',
      ApplicationSid: '1846572522338780702',
      Beep: 'onExit',
      CallerId: 'Info',
      CallSidToCoach: 'v3:9X2vxPDFY2RHSJ1EdMS0RHRksMTg7ldNxdjWbVr9zBjbGjGsSe-aiQ',
      CancelPlaybackOnDetectMessageEnd: false,
      CancelPlaybackOnMachineDetection: false,
      Coaching: false,
      ConferenceRecord: 'record-from-start',
      ConferenceRecordingStatusCallback: 'https://example.com/conference_recording_status_callback',
      ConferenceRecordingStatusCallbackEvent: 'in-progress completed failed absent',
      ConferenceRecordingStatusCallbackMethod: 'GET',
      ConferenceRecordingTimeout: 5,
      ConferenceStatusCallback: 'https://example.com/conference_status_callback',
      ConferenceStatusCallbackEvent: 'start end join leave',
      ConferenceStatusCallbackMethod: 'GET',
      ConferenceTrim: 'trim-silence',
      CustomHeaders: [{ name: 'X-Custom-Header', value: 'custom-value' }],
      EarlyMedia: true,
      EndConferenceOnExit: true,
      From: '+12065550200',
      Label: 'customer',
      MachineDetection: 'Enable',
      MachineDetectionSilenceTimeout: 2000,
      MachineDetectionSpeechEndThreshold: 2000,
      MachineDetectionSpeechThreshold: 2000,
      MachineDetectionTimeout: 1000,
      MaxParticipants: 30,
      Muted: true,
      PreferredCodecs: 'PCMA,PCMU',
      Record: false,
      RecordingChannels: 'dual',
      RecordingStatusCallback: 'https://example.com/recording_status_callback',
      RecordingStatusCallbackEvent: 'in-progress completed absent',
      RecordingStatusCallbackMethod: 'GET',
      RecordingTrack: 'inbound',
      SipAuthPassword: '1234',
      SipAuthUsername: 'user',
      StartConferenceOnEnter: false,
      StatusCallback: 'https://www.example.com/callback',
      StatusCallbackEvent: 'answered completed',
      StatusCallbackMethod: 'GET',
      TimeLimit: 30,
      timeout_seconds: 30,
      To: '+12065550100',
      Trim: 'trim-silence',
      WaitUrl: 'https://www.example.com/wait_music.mp3',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieveParticipants: only required params', async () => {
    const responsePromise = client.texml.accounts.conferences.participants.retrieveParticipants(
      'conference_sid',
      { account_sid: 'account_sid' },
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
  test.skip('retrieveParticipants: required and optional params', async () => {
    const response = await client.texml.accounts.conferences.participants.retrieveParticipants(
      'conference_sid',
      { account_sid: 'account_sid' },
    );
  });
});
