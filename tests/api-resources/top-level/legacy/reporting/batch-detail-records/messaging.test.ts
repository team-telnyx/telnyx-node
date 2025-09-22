// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource messaging', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.client.legacy.reporting.batchDetailRecords.messaging.create({
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
    const response = await client.client.legacy.reporting.batchDetailRecords.messaging.create({
      end_time: '2024-02-12T23:59:59Z',
      start_time: '2024-02-01T00:00:00Z',
      connections: [123, 456],
      directions: [1, 2],
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
      include_message_body: true,
      managed_accounts: ['f47ac10b-58cc-4372-a567-0e02b2c3d479', '6ba7b810-9dad-11d1-80b4-00c04fd430c8'],
      profiles: ['3fa85f64-5717-4562-b3fc-2c963f66afa6', '7d4e3f8a-9b2c-4e1d-8f5a-1a2b3c4d5e6f'],
      record_types: [1, 2],
      report_name: 'My MDR Report',
      select_all_managed_accounts: false,
      timezone: 'UTC',
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.client.legacy.reporting.batchDetailRecords.messaging.retrieve(
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
    const responsePromise = client.client.legacy.reporting.batchDetailRecords.messaging.list();
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
    const responsePromise = client.client.legacy.reporting.batchDetailRecords.messaging.delete(
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
});
