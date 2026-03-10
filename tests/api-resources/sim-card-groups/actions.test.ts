// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource actions', () => {
  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.simCardGroups.actions.retrieve('6a09cdc3-8948-47f0-aa62-74ac943d6c58');
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
    const responsePromise = client.simCardGroups.actions.list();
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
      client.simCardGroups.actions.list(
        {
          'filter[sim_card_group_id]': '47a1c2b0-cc7b-4ab1-bb98-b33fb0fc61b9',
          'filter[status]': 'in-progress',
          'filter[type]': 'set_private_wireless_gateway',
          'page[number]': 1,
          'page[size]': 1,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('removePrivateWirelessGateway', async () => {
    const responsePromise = client.simCardGroups.actions.removePrivateWirelessGateway(
      '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('removeWirelessBlocklist', async () => {
    const responsePromise = client.simCardGroups.actions.removeWirelessBlocklist(
      '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('setPrivateWirelessGateway: only required params', async () => {
    const responsePromise = client.simCardGroups.actions.setPrivateWirelessGateway(
      '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
      { private_wireless_gateway_id: '6a09cdc3-8948-47f0-aa62-74ac943d6c58' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('setPrivateWirelessGateway: required and optional params', async () => {
    const response = await client.simCardGroups.actions.setPrivateWirelessGateway(
      '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
      { private_wireless_gateway_id: '6a09cdc3-8948-47f0-aa62-74ac943d6c58' },
    );
  });

  // Mock server tests are disabled
  test.skip('setWirelessBlocklist: only required params', async () => {
    const responsePromise = client.simCardGroups.actions.setWirelessBlocklist(
      '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
      { wireless_blocklist_id: '6a09cdc3-8948-47f0-aa62-74ac943d6c58' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('setWirelessBlocklist: required and optional params', async () => {
    const response = await client.simCardGroups.actions.setWirelessBlocklist(
      '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
      { wireless_blocklist_id: '6a09cdc3-8948-47f0-aa62-74ac943d6c58' },
    );
  });
});
