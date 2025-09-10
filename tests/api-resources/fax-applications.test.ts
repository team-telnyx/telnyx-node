// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource faxApplications', () => {
  test('create: only required params', async () => {
    const responsePromise = client.faxApplications.create({
      application_name: 'fax-router',
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

  test('create: required and optional params', async () => {
    const response = await client.faxApplications.create({
      application_name: 'fax-router',
      webhook_event_url: 'https://example.com',
      active: false,
      anchorsite_override: 'Amsterdam, Netherlands',
      inbound: {
        channel_limit: 10,
        sip_subdomain: 'example',
        sip_subdomain_receive_settings: 'only_my_connections',
      },
      outbound: { channel_limit: 10, outbound_voice_profile_id: '1293384261075731499' },
      tags: ['tag1', 'tag2'],
      webhook_event_failover_url: 'https://failover.example.com',
      webhook_timeout_secs: 25,
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.faxApplications.retrieve('1293384261075731499');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: only required params', async () => {
    const responsePromise = client.faxApplications.update('1293384261075731499', {
      application_name: 'fax-router',
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

  test('update: required and optional params', async () => {
    const response = await client.faxApplications.update('1293384261075731499', {
      application_name: 'fax-router',
      webhook_event_url: 'https://example.com',
      active: false,
      anchorsite_override: 'Amsterdam, Netherlands',
      fax_email_recipient: 'user@example.com',
      inbound: {
        channel_limit: 10,
        sip_subdomain: 'example',
        sip_subdomain_receive_settings: 'only_my_connections',
      },
      outbound: { channel_limit: 10, outbound_voice_profile_id: '1293384261075731499' },
      tags: ['tag1', 'tag2'],
      webhook_event_failover_url: 'https://failover.example.com',
      webhook_timeout_secs: 25,
    });
  });

  test('list', async () => {
    const responsePromise = client.faxApplications.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.faxApplications.list(
        {
          filter: {
            application_name: { contains: 'fax-app' },
            outbound_voice_profile_id: '1293384261075731499',
          },
          page: { number: 1, size: 1 },
          sort: 'application_name',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.faxApplications.delete('1293384261075731499');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
