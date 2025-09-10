// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource calls', () => {
  test('retrieve: only required params', async () => {
    const responsePromise = client.texml.accounts.calls.retrieve('call_sid', { account_sid: 'account_sid' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.texml.accounts.calls.retrieve('call_sid', { account_sid: 'account_sid' });
  });

  test('update: only required params', async () => {
    const responsePromise = client.texml.accounts.calls.update('call_sid', { account_sid: 'account_sid' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.texml.accounts.calls.update('call_sid', {
      account_sid: 'account_sid',
      FallbackMethod: 'GET',
      FallbackUrl: 'https://www.example.com/intruction-c.xml',
      Method: 'GET',
      Status: 'completed',
      StatusCallback: 'https://www.example.com/callback',
      StatusCallbackMethod: 'GET',
      Texml: '<?xml version="1.0" encoding="UTF-8"?><Response><Say>Hello</Say></Response>',
      Url: 'https://www.example.com/intruction-b.xml',
    });
  });

  test('calls: only required params', async () => {
    const responsePromise = client.texml.accounts.calls.calls('account_sid', {
      ApplicationSid: 'ApplicationSid',
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

  test('calls: required and optional params', async () => {
    const response = await client.texml.accounts.calls.calls('account_sid', {
      ApplicationSid: 'ApplicationSid',
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
      SendRecordingUrl: false,
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

  test('retrieveCalls', async () => {
    const responsePromise = client.texml.accounts.calls.retrieveCalls('account_sid');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieveCalls: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.texml.accounts.calls.retrieveCalls(
        'account_sid',
        {
          EndTime: 'EndTime',
          EndTime_gt: 'EndTime_gt',
          EndTime_lt: 'EndTime_lt',
          From: 'From',
          Page: 0,
          PageSize: 0,
          PageToken: 'PageToken',
          StartTime: 'StartTime',
          StartTime_gt: 'StartTime_gt',
          StartTime_lt: 'StartTime_lt',
          Status: 'canceled',
          To: 'To',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });

  test('siprecJson: only required params', async () => {
    const responsePromise = client.texml.accounts.calls.siprecJson('call_sid', {
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

  test('siprecJson: required and optional params', async () => {
    const response = await client.texml.accounts.calls.siprecJson('call_sid', {
      account_sid: 'account_sid',
      ConnectorName: 'my_connector',
      IncludeMetadataCustomHeaders: true,
      Name: 'my_siprec_session',
      Secure: true,
      SessionTimeoutSecs: 900,
      SipTransport: 'tcp',
      StatusCallback: 'https://www.example.com/callback',
      StatusCallbackMethod: 'GET',
      Track: 'both_tracks',
    });
  });

  test('streamsJson: only required params', async () => {
    const responsePromise = client.texml.accounts.calls.streamsJson('call_sid', {
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

  test('streamsJson: required and optional params', async () => {
    const response = await client.texml.accounts.calls.streamsJson('call_sid', {
      account_sid: 'account_sid',
      BidirectionalCodec: 'G722',
      BidirectionalMode: 'rtp',
      Name: 'My stream',
      StatusCallback: 'http://webhook.com/callback',
      StatusCallbackMethod: 'GET',
      Track: 'both_tracks',
      Url: 'wss://www.example.com/websocket',
    });
  });
});
