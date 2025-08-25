// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource actions', () => {
  // Prism tests are disabled
  test.skip('verify: only required params', async () => {
    const responsePromise = client.verifications.byPhoneNumber.actions.verify('+13035551234', {
      code: '17686',
      verify_profile_id: '12ade33a-21c0-473b-b055-b3c836e1c292',
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
  test.skip('verify: required and optional params', async () => {
    const response = await client.verifications.byPhoneNumber.actions.verify('+13035551234', {
      code: '17686',
      verify_profile_id: '12ade33a-21c0-473b-b055-b3c836e1c292',
    });
  });
});
