// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource voice', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.client.legacy.reporting.batchDetailRecords.voice.create({
      end_time: '2024-02-12T23:59:59Z',
      start_time: '2024-02-01T00:00:00Z',
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
    const response = await client.client.legacy.reporting.batchDetailRecords.voice.create({
      end_time: '2024-02-12T23:59:59Z',
      start_time: '2024-02-01T00:00:00Z',
      call_types: [1, 2],
      connections: [123, 456],
      fields: ['call_leg_id', 'start_time', 'end_time'],
      filters: [
        {
          billing_group: 'adfaa016-f921-4b6c-97bb-e4c1dad231c5',
          cld: '+13129457420',
          cld_filter: 'contains',
          cli: '+13129457420',
          cli_filter: 'contains',
          filter_type: 'and',
          tags_list: 'tag1',
        },
      ],
      include_all_metadata: true,
      managed_accounts: ['f47ac10b-58cc-4372-a567-0e02b2c3d479', '6ba7b810-9dad-11d1-80b4-00c04fd430c8'],
      record_types: [1, 2],
      report_name: 'My CDR Report',
      select_all_managed_accounts: false,
      source: 'calls',
      timezone: 'UTC',
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.client.legacy.reporting.batchDetailRecords.voice.retrieve(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
  test.skip('list', async () => {
    const responsePromise = client.client.legacy.reporting.batchDetailRecords.voice.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.client.legacy.reporting.batchDetailRecords.voice.delete(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
  test.skip('retrieveFields', async () => {
    const responsePromise = client.client.legacy.reporting.batchDetailRecords.voice.retrieveFields();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
