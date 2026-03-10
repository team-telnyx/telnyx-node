// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource usecase', () => {
  // Mock server tests are disabled
  test.skip('getCost: only required params', async () => {
    const responsePromise = client.messaging10dlc.campaign.usecase.getCost({ usecase: 'usecase' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getCost: required and optional params', async () => {
    const response = await client.messaging10dlc.campaign.usecase.getCost({ usecase: 'usecase' });
  });
});
