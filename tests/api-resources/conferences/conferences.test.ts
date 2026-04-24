// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource conferences', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.conferences.create({
      call_control_id: 'v3:MdI91X4lWFEs7IgbBEOT9M4AigoY08M0WWZFISt1Yw2axZ_IiE4pqg',
      name: 'Business',
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
  test.skip('create: required and optional params', async () => {
    const response = await client.conferences.create({
      call_control_id: 'v3:MdI91X4lWFEs7IgbBEOT9M4AigoY08M0WWZFISt1Yw2axZ_IiE4pqg',
      name: 'Business',
      beep_enabled: 'always',
      client_state: 'aGF2ZSBhIG5pY2UgZGF5ID1d',
      comfort_noise: false,
      command_id: '891510ac-f3e4-11e8-af5b-de00688a4901',
      duration_minutes: 5,
      hold_audio_url: 'http://www.example.com/audio.wav',
      hold_media_name: 'my_media_uploaded_to_media_storage_api',
      max_participants: 250,
      region: 'US',
      start_conference_on_create: false,
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.conferences.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.conferences.retrieve('id', { region: 'Australia' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.conferences.list();
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
      client.conferences.list(
        {
          filter: {
            application_name: { contains: 'contains' },
            application_session_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            connection_id: 'connection_id',
            failed: false,
            from: '+12025550142',
            leg_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            name: 'name',
            occurred_at: {
              eq: '2019-03-29T11:10:00Z',
              gt: '2019-03-29T11:10:00Z',
              gte: '2019-03-29T11:10:00Z',
              lt: '2019-03-29T11:10:00Z',
              lte: '2019-03-29T11:10:00Z',
            },
            'outbound.outbound_voice_profile_id': '1293384261075731499',
            product: 'texml',
            status: 'init',
            to: '+12025550142',
            type: 'webhook',
          },
          'page[number]': 0,
          'page[size]': 0,
          region: 'Australia',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('listParticipants', async () => {
    const responsePromise = client.conferences.listParticipants('conference_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listParticipants: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.conferences.listParticipants(
        'conference_id',
        {
          filter: {
            muted: true,
            on_hold: true,
            whispering: true,
          },
          'page[number]': 0,
          'page[size]': 0,
          region: 'Australia',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('retrieveParticipant: only required params', async () => {
    const responsePromise = client.conferences.retrieveParticipant('participant_id', {
      id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
  test.skip('retrieveParticipant: required and optional params', async () => {
    const response = await client.conferences.retrieveParticipant('participant_id', {
      id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // Mock server tests are disabled
  test.skip('updateParticipant: only required params', async () => {
    const responsePromise = client.conferences.updateParticipant('participant_id', {
      id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
  test.skip('updateParticipant: required and optional params', async () => {
    const response = await client.conferences.updateParticipant('participant_id', {
      id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      beep_enabled: 'never',
      end_conference_on_exit: true,
      soft_end_conference_on_exit: false,
    });
  });
});
