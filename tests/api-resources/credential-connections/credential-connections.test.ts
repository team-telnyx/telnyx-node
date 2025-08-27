// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx-node';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource credentialConnections', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.credentialConnections.create({
      connection_name: 'my name',
      password: 'my123secure456password789',
      user_name: 'myusername123',
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
    const response = await client.credentialConnections.create({
      connection_name: 'my name',
      password: 'my123secure456password789',
      user_name: 'myusername123',
      active: true,
      anchorsite_override: 'Latency',
      android_push_credential_id: '06b09dfd-7154-4980-8b75-cebf7a9d4f8e',
      default_on_hold_comfort_noise_enabled: false,
      dtmf_type: 'RFC 2833',
      encode_contact_header_enabled: true,
      encrypted_media: 'SRTP',
      inbound: {
        ani_number_format: '+E.164',
        channel_limit: 10,
        codecs: ['string'],
        dnis_number_format: '+e164',
        generate_ringback_tone: true,
        isup_headers_enabled: true,
        prack_enabled: true,
        shaken_stir_enabled: true,
        sip_compact_headers_enabled: true,
        timeout_1xx_secs: 10,
        timeout_2xx_secs: 20,
      },
      ios_push_credential_id: 'ec0c8e5d-439e-4620-a0c1-9d9c8d02a836',
      onnet_t38_passthrough_enabled: true,
      outbound: {
        ani_override: 'always',
        ani_override_type: 'always',
        call_parking_enabled: true,
        channel_limit: 10,
        generate_ringback_tone: true,
        instant_ringback_enabled: true,
        localization: 'US',
        outbound_voice_profile_id: 'outbound_voice_profile_id',
        t38_reinvite_source: 'customer',
      },
      rtcp_settings: { capture_enabled: true, port: 'rtcp-mux', report_frequency_secs: 10 },
      sip_uri_calling_preference: 'disabled',
      tags: ['tag1', 'tag2'],
      webhook_api_version: '1',
      webhook_event_failover_url: 'https://failover.example.com',
      webhook_event_url: 'https://example.com',
      webhook_timeout_secs: 25,
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.credentialConnections.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.credentialConnections.update('id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.credentialConnections.list();
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
      client.credentialConnections.list(
        {
          filter: {
            connection_name: { contains: 'contains' },
            fqdn: 'fqdn',
            outbound_voice_profile_id: 'outbound_voice_profile_id',
          },
          page: { number: 1, size: 1 },
          sort: 'connection_name',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.credentialConnections.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
