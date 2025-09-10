// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource rcs', () => {
  test('inviteTestNumber: only required params', async () => {
    const responsePromise = client.messaging.rcs.inviteTestNumber('phone_number', { id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('inviteTestNumber: required and optional params', async () => {
    const response = await client.messaging.rcs.inviteTestNumber('phone_number', { id: 'id' });
  });

  test('listBulkCapabilities: only required params', async () => {
    const responsePromise = client.messaging.rcs.listBulkCapabilities({
      agent_id: 'TestAgent',
      phone_numbers: ['+13125551234'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listBulkCapabilities: required and optional params', async () => {
    const response = await client.messaging.rcs.listBulkCapabilities({
      agent_id: 'TestAgent',
      phone_numbers: ['+13125551234'],
    });
  });

  test('retrieveCapabilities: only required params', async () => {
    const responsePromise = client.messaging.rcs.retrieveCapabilities('phone_number', {
      agent_id: 'agent_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieveCapabilities: required and optional params', async () => {
    const response = await client.messaging.rcs.retrieveCapabilities('phone_number', {
      agent_id: 'agent_id',
    });
  });
});
