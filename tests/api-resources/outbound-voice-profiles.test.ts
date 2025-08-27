// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx-node';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource outboundVoiceProfiles', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.outboundVoiceProfiles.create({ name: 'office' });
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
    const response = await client.outboundVoiceProfiles.create({
      name: 'office',
      billing_group_id: '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
      call_recording: {
        call_recording_caller_phone_numbers: ['+19705555098'],
        call_recording_channels: 'dual',
        call_recording_format: 'mp3',
        call_recording_type: 'by_caller_phone_number',
      },
      concurrent_call_limit: 10,
      daily_spend_limit: '100.00',
      daily_spend_limit_enabled: true,
      enabled: true,
      max_destination_rate: 10,
      service_plan: 'global',
      tags: ['office-profile'],
      traffic_type: 'conversational',
      usage_payment_method: 'rate-deck',
      whitelisted_destinations: ['US', 'BR', 'AU'],
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.outboundVoiceProfiles.retrieve('1293384261075731499');
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
    const responsePromise = client.outboundVoiceProfiles.update('1293384261075731499', { name: 'office' });
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
    const response = await client.outboundVoiceProfiles.update('1293384261075731499', {
      name: 'office',
      billing_group_id: '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
      call_recording: {
        call_recording_caller_phone_numbers: ['+19705555098'],
        call_recording_channels: 'dual',
        call_recording_format: 'mp3',
        call_recording_type: 'by_caller_phone_number',
      },
      concurrent_call_limit: 10,
      daily_spend_limit: '100.00',
      daily_spend_limit_enabled: true,
      enabled: true,
      max_destination_rate: 10,
      service_plan: 'global',
      tags: ['office-profile'],
      traffic_type: 'conversational',
      usage_payment_method: 'rate-deck',
      whitelisted_destinations: ['US', 'BR', 'AU'],
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.outboundVoiceProfiles.list();
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
      client.outboundVoiceProfiles.list(
        { filter: { name: { contains: 'office-profile' } }, page: { number: 1, size: 1 }, sort: 'name' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.outboundVoiceProfiles.delete('1293384261075731499');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
