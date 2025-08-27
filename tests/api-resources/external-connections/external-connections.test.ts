// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx-node';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource externalConnections', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.externalConnections.create({
      external_sip_connection: 'zoom',
      outbound: {},
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.externalConnections.create({
      external_sip_connection: 'zoom',
      outbound: { channel_limit: 10, outbound_voice_profile_id: 'outbound_voice_profile_id' },
      active: false,
      inbound: { channel_limit: 10 },
      tags: ['tag1', 'tag2'],
      webhook_event_failover_url: 'https://failover.example.com',
      webhook_event_url: 'https://example.com',
      webhook_timeout_secs: 25,
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.externalConnections.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.externalConnections.update('id', {
      outbound: { outbound_voice_profile_id: 'outbound_voice_profile_id' },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.externalConnections.update('id', {
      outbound: { outbound_voice_profile_id: 'outbound_voice_profile_id', channel_limit: 10 },
      active: false,
      inbound: { channel_limit: 10 },
      tags: ['tag1', 'tag2'],
      webhook_event_failover_url: 'https://failover.example.com',
      webhook_event_url: 'https://example.com',
      webhook_timeout_secs: 25,
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.externalConnections.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.externalConnections.list(
        {
          filter: {
            id: '1930241863466354012',
            connection_name: { contains: 'My Connection' },
            created_at: '2022-12-31',
            external_sip_connection: 'zoom',
            phone_number: { contains: '+15555555555' },
          },
          page: { number: 1, size: 1 },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.externalConnections.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('updateLocation: only required params', async () => {
    const responsePromise = client.externalConnections.updateLocation(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        static_emergency_address_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('updateLocation: required and optional params', async () => {
    const response = await client.externalConnections.updateLocation('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      static_emergency_address_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });
});
