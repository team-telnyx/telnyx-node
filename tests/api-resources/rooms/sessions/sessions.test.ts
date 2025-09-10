// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource sessions', () => {
  test('retrieve', async () => {
    const responsePromise = client.rooms.sessions.retrieve('0ccc7b54-4df3-4bca-a65a-3da1ecc777f0');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.rooms.sessions.retrieve(
        '0ccc7b54-4df3-4bca-a65a-3da1ecc777f0',
        { include_participants: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });

  test('list0', async () => {
    const responsePromise = client.rooms.sessions.list0();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list0: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.rooms.sessions.list0(
        {
          filter: {
            active: true,
            date_created_at: { eq: '2021-04-25', gte: '2021-04-25', lte: '2021-04-25' },
            date_ended_at: { eq: '2021-04-25', gte: '2021-04-25', lte: '2021-04-25' },
            date_updated_at: { eq: '2021-04-25', gte: '2021-04-25', lte: '2021-04-25' },
            room_id: '0ccc7b54-4df3-4bca-a65a-3da1ecc777f0',
          },
          include_participants: true,
          page: { number: 1, size: 1 },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });

  test('list1', async () => {
    const responsePromise = client.rooms.sessions.list1('0ccc7b54-4df3-4bca-a65a-3da1ecc777f0');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list1: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.rooms.sessions.list1(
        '0ccc7b54-4df3-4bca-a65a-3da1ecc777f0',
        {
          filter: {
            active: true,
            date_created_at: { eq: '2021-04-25', gte: '2021-04-25', lte: '2021-04-25' },
            date_ended_at: { eq: '2021-04-25', gte: '2021-04-25', lte: '2021-04-25' },
            date_updated_at: { eq: '2021-04-25', gte: '2021-04-25', lte: '2021-04-25' },
          },
          include_participants: true,
          page: { number: 1, size: 1 },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });

  test('retrieveParticipants', async () => {
    const responsePromise = client.rooms.sessions.retrieveParticipants(
      '0ccc7b54-4df3-4bca-a65a-3da1ecc777f0',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieveParticipants: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.rooms.sessions.retrieveParticipants(
        '0ccc7b54-4df3-4bca-a65a-3da1ecc777f0',
        {
          filter: {
            context: 'Alice',
            date_joined_at: { eq: '2021-04-25', gte: '2021-04-25', lte: '2021-04-25' },
            date_left_at: { eq: '2021-04-25', gte: '2021-04-25', lte: '2021-04-25' },
            date_updated_at: { eq: '2021-04-25', gte: '2021-04-25', lte: '2021-04-25' },
          },
          page: { number: 1, size: 1 },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });
});
