// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource meetingSessions', () => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.meetingSessions.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.meetingSessions.list({ status: 'scheduled' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.meetingSessions.create({ meeting_url: 'https://zoom.us/j/1234567890' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.meetingSessions.create({
      meeting_url: 'https://zoom.us/j/1234567890',
      assistant: {
        id: 'asst_fake-uuid-1234',
        call_control_connection_id: 'conn-fake-abcdef',
        from: '+12025550199',
        loopback_sip_uri: 'sip:loopback@example.invalid',
        audio_gate: 'half_duplex',
      },
      avatar: {
        api_key: 'fake_avatar_api_key_do_not_use',
        avatar_id: 'avatar_fake-001',
        provider: 'anam',
      },
      barge_in: true,
      bot_name: 'Notetaker',
      camera_image: {
        base64_data:
          '/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/wAALCAACAAIBAREA/8QAFAABAAAAAAAAAAAAAAAAAAAACP/EAB4QAAAEBwAAAAAAAAAAAAAAAAAEBgcCFic1RVNi/9oACAEBAAA/AH8hGJbWR09TxKW4vhC2qHgf/9k=',
        format: 'jpeg',
      },
      idempotency_key: 'x',
      join_at: '2019-12-27T18:11:19.117Z',
      metadata: { foo: 'bar' },
      speak_on_enter: 'x',
      summarize_on_end: true,
      voice: 'x',
      webhook_url: 'https://example.com',
    });
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.meetingSessions.delete('mtgsess_a1b2c3d4-e5f6-7890-abcd-ef1234567890');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.meetingSessions.retrieve('mtgsess_a1b2c3d4-e5f6-7890-abcd-ef1234567890');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.meetingSessions.update('mtgsess_a1b2c3d4-e5f6-7890-abcd-ef1234567890', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieveEvents', async () => {
    const responsePromise = client.meetingSessions.retrieveEvents(
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

  // Mock server tests are disabled
  test.skip('retrieveEvents: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.meetingSessions.retrieveEvents(
        'mtgsess_a1b2c3d4-e5f6-7890-abcd-ef1234567890',
        { after: 0, limit: 1 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('deleteRecordingMedia', async () => {
    const responsePromise = client.meetingSessions.deleteRecordingMedia(
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

  // Mock server tests are disabled
  test.skip('retrieveRecordings', async () => {
    const responsePromise = client.meetingSessions.retrieveRecordings(
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

  // Mock server tests are disabled
  test.skip('retrieveTranscript', async () => {
    const responsePromise = client.meetingSessions.retrieveTranscript(
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

  // Mock server tests are disabled
  test.skip('retrieveTranscript: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.meetingSessions.retrieveTranscript(
        'mtgsess_a1b2c3d4-e5f6-7890-abcd-ef1234567890',
        {
          after: 0,
          limit: 1,
          wait_seconds: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });
});
