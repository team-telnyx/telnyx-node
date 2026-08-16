// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource actions', () => {
  // Mock server tests are disabled
  test.skip('sendChat: only required params', async () => {
    const responsePromise = client.meetingSessions.actions.sendChat(
      'mtgsess_a1b2c3d4-e5f6-7890-abcd-ef1234567890',
      { text: 'I will send the summary after this call.' },
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
  test.skip('sendChat: required and optional params', async () => {
    const response = await client.meetingSessions.actions.sendChat(
      'mtgsess_a1b2c3d4-e5f6-7890-abcd-ef1234567890',
      { text: 'I will send the summary after this call.' },
    );
  });

  // Mock server tests are disabled
  test.skip('speak: only required params', async () => {
    const responsePromise = client.meetingSessions.actions.speak(
      'mtgsess_a1b2c3d4-e5f6-7890-abcd-ef1234567890',
      { text: 'Here are the three decisions from this call.' },
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
  test.skip('speak: required and optional params', async () => {
    const response = await client.meetingSessions.actions.speak(
      'mtgsess_a1b2c3d4-e5f6-7890-abcd-ef1234567890',
      {
        text: 'Here are the three decisions from this call.',
        interrupt: false,
        voice: 'x',
      },
    );
  });

  // Mock server tests are disabled
  test.skip('stopSpeaking', async () => {
    const responsePromise = client.meetingSessions.actions.stopSpeaking(
      'mtgsess_a1b2c3d4-e5f6-7890-abcd-ef1234567890',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
