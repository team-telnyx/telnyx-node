// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource jobs', () => {
  test('retrieve', async () => {
    const responsePromise = client.phoneNumbers.jobs.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list', async () => {
    const responsePromise = client.phoneNumbers.jobs.list();
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
      client.phoneNumbers.jobs.list(
        { filter: { type: 'update_emergency_settings' }, page: { number: 1, size: 1 }, sort: 'created_at' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });

  test('deleteBatch: only required params', async () => {
    const responsePromise = client.phoneNumbers.jobs.deleteBatch({
      phone_numbers: ['+19705555098', '+19715555098', '32873127836'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('deleteBatch: required and optional params', async () => {
    const response = await client.phoneNumbers.jobs.deleteBatch({
      phone_numbers: ['+19705555098', '+19715555098', '32873127836'],
    });
  });

  test('updateBatch: only required params', async () => {
    const responsePromise = client.phoneNumbers.jobs.updateBatch({
      phone_numbers: ['1583466971586889004', '+13127367254'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateBatch: required and optional params', async () => {
    const response = await client.phoneNumbers.jobs.updateBatch({
      phone_numbers: ['1583466971586889004', '+13127367254'],
      filter: {
        billing_group_id: '62e4bf2e-c278-4282-b524-488d9c9c43b2',
        connection_id: '1521916448077776306',
        customer_reference: 'customer_reference',
        emergency_address_id: '9102160989215728032',
        has_bundle: 'has_bundle',
        phone_number: 'phone_number',
        status: 'active',
        tag: 'tag',
        'voice.connection_name': { contains: 'test', ends_with: 'test', eq: 'test', starts_with: 'test' },
        'voice.usage_payment_method': 'channel',
      },
      billing_group_id: 'dc8e4d67-33a0-4cbb-af74-7b58f05bd494',
      connection_id: 'dc8e4d67-33a0-4cbb-af74-7b58f05bd494',
      customer_reference: 'customer-reference',
      external_pin: '123456',
      hd_voice_enabled: true,
      tags: ['tag'],
      voice: {
        call_forwarding: {
          call_forwarding_enabled: true,
          forwarding_type: 'always',
          forwards_to: '+13035559123',
        },
        call_recording: {
          inbound_call_recording_channels: 'single',
          inbound_call_recording_enabled: true,
          inbound_call_recording_format: 'wav',
        },
        caller_id_name_enabled: true,
        cnam_listing: { cnam_listing_details: 'example', cnam_listing_enabled: true },
        inbound_call_screening: 'disabled',
        media_features: {
          accept_any_rtp_packets_enabled: true,
          rtp_auto_adjust_enabled: true,
          t38_fax_gateway_enabled: true,
        },
        tech_prefix_enabled: true,
        translated_number: 'translated_number',
        usage_payment_method: 'pay-per-minute',
      },
    });
  });

  test('updateEmergencySettingsBatch: only required params', async () => {
    const responsePromise = client.phoneNumbers.jobs.updateEmergencySettingsBatch({
      emergency_enabled: true,
      phone_numbers: ['+19705555098', '+19715555098', '32873127836'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateEmergencySettingsBatch: required and optional params', async () => {
    const response = await client.phoneNumbers.jobs.updateEmergencySettingsBatch({
      emergency_enabled: true,
      phone_numbers: ['+19705555098', '+19715555098', '32873127836'],
      emergency_address_id: '53829456729313',
    });
  });
});
