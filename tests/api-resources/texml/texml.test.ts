// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource texml', () => {
  // Mock server tests are disabled
  test.skip('initiateAICall: only required params', async () => {
    const responsePromise = client.texml.initiateAICall('connection_id', {
      AIAssistantId: 'ai-assistant-id-123',
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

  // Mock server tests are disabled
  test.skip('initiateAICall: required and optional params', async () => {
    const response = await client.texml.initiateAICall('connection_id', {
      AIAssistantId: 'ai-assistant-id-123',
      From: '+13120001234',
      To: '+13121230000',
      AIAssistantDynamicVariables: { customer_name: 'John Doe', account_id: '12345' },
      AIAssistantVersion: 'AIAssistantVersion',
      AsyncAmd: true,
      AsyncAmdStatusCallback: 'https://www.example.com/callback',
      AsyncAmdStatusCallbackMethod: 'GET',
      CallerId: 'Info',
      ConversationCallback: 'https://www.example.com/conversation-callback',
      ConversationCallbackMethod: 'GET',
      ConversationCallbacks: [
        'https://www.example.com/conversation-callback1',
        'https://www.example.com/conversation-callback2',
      ],
      CustomHeaders: [{ name: 'X-Custom-Header', value: 'custom-value' }],
      DetectionMode: 'Premium',
      MachineDetection: 'Enable',
      MachineDetectionSilenceTimeout: 2000,
      MachineDetectionSpeechEndThreshold: 2000,
      MachineDetectionSpeechThreshold: 2000,
      MachineDetectionTimeout: 5000,
      Passports: 'Passports',
      PreferredCodecs: 'PCMA,PCMU',
      Record: false,
      RecordingChannels: 'dual',
      RecordingStatusCallback: 'https://example.com/recording_status_callback',
      RecordingStatusCallbackEvent: 'in-progress completed absent',
      RecordingStatusCallbackMethod: 'GET',
      RecordingTimeout: 5,
      RecordingTrack: 'inbound',
      SendRecordingUrl: false,
      SipAuthPassword: '1234',
      SipAuthUsername: 'user',
      SipRegion: 'Canada',
      StatusCallback: 'https://www.example.com/callback',
      StatusCallbackEvent: 'initiated answered',
      StatusCallbackMethod: 'GET',
      StatusCallbacks: ['https://www.example.com/callback1', 'https://www.example.com/callback2'],
      TimeLimit: 3600,
      timeout_seconds: 60,
      Trim: 'trim-silence',
    });
  });

  // Mock server tests are disabled
  test.skip('secrets: only required params', async () => {
    const responsePromise = client.texml.secrets({ name: 'My Secret Name', value: 'My Secret Value' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('secrets: required and optional params', async () => {
    const response = await client.texml.secrets({ name: 'My Secret Name', value: 'My Secret Value' });
  });
});
