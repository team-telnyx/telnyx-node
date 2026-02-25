// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource fqdnConnections', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.fqdnConnections.create({ connection_name: 'string' });
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
    const response = await client.fqdnConnections.create({
      connection_name: 'string',
      active: true,
      anchorsite_override: 'Latency',
      android_push_credential_id: '06b09dfd-7154-4980-8b75-cebf7a9d4f8e',
      call_cost_in_webhooks: false,
      default_on_hold_comfort_noise_enabled: true,
      dtmf_type: 'RFC 2833',
      encode_contact_header_enabled: true,
      encrypted_media: 'SRTP',
      inbound: {
        ani_number_format: '+E.164',
        channel_limit: 10,
        codecs: ['G722'],
        default_primary_fqdn_id: '1293384261075731497',
        default_routing_method: 'sequential',
        default_secondary_fqdn_id: '1293384261075731498',
        default_tertiary_fqdn_id: '1293384261075731499',
        dnis_number_format: '+e164',
        generate_ringback_tone: true,
        isup_headers_enabled: true,
        prack_enabled: true,
        shaken_stir_enabled: true,
        sip_compact_headers_enabled: true,
        sip_region: 'US',
        sip_subdomain: 'string',
        sip_subdomain_receive_settings: 'only_my_connections',
        timeout_1xx_secs: 10,
        timeout_2xx_secs: 10,
      },
      ios_push_credential_id: 'ec0c8e5d-439e-4620-a0c1-9d9c8d02a836',
      jitter_buffer: {
        enable_jitter_buffer: true,
        jitterbuffer_msec_max: 200,
        jitterbuffer_msec_min: 60,
      },
      microsoft_teams_sbc: true,
      noise_suppression: 'both',
      noise_suppression_details: { attenuation_limit: 80, engine: 'deep_filter_net' },
      onnet_t38_passthrough_enabled: true,
      outbound: {
        ani_override: '+1234567890',
        ani_override_type: 'always',
        call_parking_enabled: true,
        channel_limit: 10,
        encrypted_media: 'SRTP',
        generate_ringback_tone: true,
        instant_ringback_enabled: true,
        ip_authentication_method: 'credential-authentication',
        ip_authentication_token: 'aBcD1234',
        localization: 'string',
        outbound_voice_profile_id: '1293384261075731499',
        t38_reinvite_source: 'customer',
        tech_prefix: '0123',
        timeout_1xx_secs: 10,
        timeout_2xx_secs: 10,
      },
      rtcp_settings: {
        capture_enabled: true,
        port: 'rtcp-mux',
        report_frequency_secs: 10,
      },
      tags: ['tag1', 'tag2'],
      transport_protocol: 'UDP',
      webhook_api_version: '1',
      webhook_event_failover_url: 'https://failover.example.com',
      webhook_event_url: 'https://example.com',
      webhook_timeout_secs: 25,
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.fqdnConnections.retrieve('1293384261075731499');
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
    const responsePromise = client.fqdnConnections.update('1293384261075731499', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.fqdnConnections.list();
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
      client.fqdnConnections.list(
        {
          filter: {
            connection_name: { contains: 'contains' },
            fqdn: 'fqdn',
            outbound_voice_profile_id: '1293384261075731499',
          },
          'page[number]': 0,
          'page[size]': 0,
          sort: 'connection_name',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.fqdnConnections.delete('1293384261075731499');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
