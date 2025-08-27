// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx-node';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource texmlApplications', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.texmlApplications.create({
      friendly_name: 'call-router',
      voice_url: 'https://example.com',
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
    const response = await client.texmlApplications.create({
      friendly_name: 'call-router',
      voice_url: 'https://example.com',
      active: false,
      anchorsite_override: 'Amsterdam, Netherlands',
      dtmf_type: 'Inband',
      first_command_timeout: true,
      first_command_timeout_secs: 10,
      inbound: {
        channel_limit: 10,
        shaken_stir_enabled: true,
        sip_subdomain: 'example',
        sip_subdomain_receive_settings: 'only_my_connections',
      },
      outbound: { channel_limit: 10, outbound_voice_profile_id: '1293384261075731499' },
      status_callback: 'https://example.com',
      status_callback_method: 'get',
      tags: ['tag1', 'tag2'],
      voice_fallback_url: 'https://fallback.example.com',
      voice_method: 'get',
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.texmlApplications.retrieve('1293384261075731499');
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
    const responsePromise = client.texmlApplications.update('1293384261075731499', {
      friendly_name: 'call-router',
      voice_url: 'https://example.com',
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
    const response = await client.texmlApplications.update('1293384261075731499', {
      friendly_name: 'call-router',
      voice_url: 'https://example.com',
      active: false,
      anchorsite_override: 'Amsterdam, Netherlands',
      dtmf_type: 'Inband',
      first_command_timeout: true,
      first_command_timeout_secs: 10,
      inbound: {
        channel_limit: 10,
        shaken_stir_enabled: true,
        sip_subdomain: 'example',
        sip_subdomain_receive_settings: 'only_my_connections',
      },
      outbound: { channel_limit: 10, outbound_voice_profile_id: '1293384261075731499' },
      status_callback: 'https://example.com',
      status_callback_method: 'get',
      tags: ['tag1', 'tag2'],
      voice_fallback_url: 'https://fallback.example.com',
      voice_method: 'get',
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.texmlApplications.list();
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
      client.texmlApplications.list(
        {
          filter: { friendly_name: 'friendly_name', outbound_voice_profile_id: '1293384261075731499' },
          page: { number: 1, size: 1 },
          sort: 'friendly_name',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.texmlApplications.delete('1293384261075731499');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
