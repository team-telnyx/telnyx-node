// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource numberOrderPhoneNumbers', () => {
  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.numberOrderPhoneNumbers.retrieve('number_order_phone_number_id');
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
    const responsePromise = client.numberOrderPhoneNumbers.list();
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
      client.numberOrderPhoneNumbers.list(
        { filter: { country_code: 'US' } },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('updateRequirementGroup: only required params', async () => {
    const responsePromise = client.numberOrderPhoneNumbers.updateRequirementGroup(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { requirement_group_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
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
  test.skip('updateRequirementGroup: required and optional params', async () => {
    const response = await client.numberOrderPhoneNumbers.updateRequirementGroup(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { requirement_group_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
    );
  });

  // Mock server tests are disabled
  test.skip('updateRequirements', async () => {
    const responsePromise = client.numberOrderPhoneNumbers.updateRequirements(
      'number_order_phone_number_id',
      {},
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
