// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource recordingsJson', () => {
  // Mock server tests are disabled
  test.skip('recordingsJson: only required params', async () => {
    const responsePromise = client.texml.accounts.calls.recordingsJson.recordingsJson('call_sid', {
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
  test.skip('recordingsJson: required and optional params', async () => {
    const response = await client.texml.accounts.calls.recordingsJson.recordingsJson('call_sid', {
      account_sid: 'account_sid',
      PlayBeep: false,
      RecordingChannels: 'single',
      RecordingStatusCallback: 'http://webhook.com/callback',
      RecordingStatusCallbackEvent: 'in-progress completed absent',
      RecordingStatusCallbackMethod: 'GET',
      RecordingTrack: 'inbound',
      SendRecordingUrl: false,
    });
  });

  // Mock server tests are disabled
  test.skip('retrieveRecordingsJson: only required params', async () => {
    const responsePromise = client.texml.accounts.calls.recordingsJson.retrieveRecordingsJson('call_sid', {
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
  test.skip('retrieveRecordingsJson: required and optional params', async () => {
    const response = await client.texml.accounts.calls.recordingsJson.retrieveRecordingsJson('call_sid', {
      account_sid: 'account_sid',
    });
  });
});
