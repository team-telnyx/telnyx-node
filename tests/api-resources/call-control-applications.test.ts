// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource callControlApplications', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.callControlApplications.create({
      application_name: 'call-router',
      webhook_event_url: 'https://example.com',
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
    const response = await client.callControlApplications.create({
      application_name: 'call-router',
      webhook_event_url: 'https://example.com',
      active: false,
      anchorsite_override: '"Latency"',
      dtmf_type: 'Inband',
      first_command_timeout: true,
      first_command_timeout_secs: 10,
      inbound: {
        channel_limit: 10,
        shaken_stir_enabled: true,
        sip_subdomain: 'example',
        sip_subdomain_receive_settings: 'only_my_connections',
      },
      outbound: { channel_limit: 10, outbound_voice_profile_id: 'outbound_voice_profile_id' },
      redact_dtmf_debug_logging: true,
      webhook_api_version: '1',
      webhook_event_failover_url: 'https://failover.example.com',
      webhook_timeout_secs: 25,
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.callControlApplications.retrieve('id');
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
    const responsePromise = client.callControlApplications.update('id', {
      application_name: 'call-router',
      webhook_event_url: 'https://example.com',
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
    const response = await client.callControlApplications.update('id', {
      application_name: 'call-router',
      webhook_event_url: 'https://example.com',
      active: false,
      anchorsite_override: '"Latency"',
      dtmf_type: 'Inband',
      first_command_timeout: true,
      first_command_timeout_secs: 10,
      inbound: {
        channel_limit: 10,
        shaken_stir_enabled: true,
        sip_subdomain: 'example',
        sip_subdomain_receive_settings: 'only_my_connections',
      },
      outbound: { channel_limit: 10, outbound_voice_profile_id: 'outbound_voice_profile_id' },
      redact_dtmf_debug_logging: true,
      tags: ['tag1', 'tag2'],
      webhook_api_version: '1',
      webhook_event_failover_url: 'https://failover.example.com',
      webhook_timeout_secs: 25,
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.callControlApplications.list();
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
      client.callControlApplications.list(
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
            'outbound.outbound_voice_profile_id': 'outbound.outbound_voice_profile_id',
            product: 'texml',
            status: 'init',
            to: '+12025550142',
            type: 'webhook',
          },
          page: { after: 'after', before: 'before', limit: 1, number: 1, size: 1 },
          sort: 'connection_name',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.callControlApplications.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
