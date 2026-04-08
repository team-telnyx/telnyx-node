// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource numbers', () => {
  // Mock server tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.enterprises.reputation.numbers.retrieve('+16035551234', {
      enterprise_id: '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.enterprises.reputation.numbers.retrieve('+16035551234', {
      enterprise_id: '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
      fresh: true,
    });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.enterprises.reputation.numbers.list(
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
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.enterprises.reputation.numbers.list(
        '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
        {
          'page[number]': 1,
          'page[size]': 1,
          phone_number: '+16035551234',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('associate: only required params', async () => {
    const responsePromise = client.enterprises.reputation.numbers.associate(
      '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
      { phone_numbers: ['+16035551234'] },
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
  test.skip('associate: required and optional params', async () => {
    const response = await client.enterprises.reputation.numbers.associate(
      '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
      { phone_numbers: ['+16035551234'] },
    );
  });

  // Mock server tests are disabled
  test.skip('disassociate: only required params', async () => {
    const responsePromise = client.enterprises.reputation.numbers.disassociate('+16035551234', {
      enterprise_id: '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('disassociate: required and optional params', async () => {
    const response = await client.enterprises.reputation.numbers.disassociate('+16035551234', {
      enterprise_id: '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
    });
  });
});
