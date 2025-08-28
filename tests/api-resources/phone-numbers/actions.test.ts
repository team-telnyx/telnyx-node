// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource actions', () => {
  // Prism tests are disabled
  test.skip('changeBundleStatus: only required params', async () => {
    const responsePromise = client.phoneNumbers.actions.changeBundleStatus('1293384261075731499', {
      bundle_id: '5194d8fc-87e6-4188-baa9-1c434bbe861b',
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
  test.skip('changeBundleStatus: required and optional params', async () => {
    const response = await client.phoneNumbers.actions.changeBundleStatus('1293384261075731499', {
      bundle_id: '5194d8fc-87e6-4188-baa9-1c434bbe861b',
    });
  });

  // Prism tests are disabled
  test.skip('enableEmergency: only required params', async () => {
    const responsePromise = client.phoneNumbers.actions.enableEmergency('1293384261075731499', {
      emergency_address_id: '53829456729313',
      emergency_enabled: true,
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
  test.skip('enableEmergency: required and optional params', async () => {
    const response = await client.phoneNumbers.actions.enableEmergency('1293384261075731499', {
      emergency_address_id: '53829456729313',
      emergency_enabled: true,
    });
  });

  // Prism tests are disabled
  test.skip('verifyOwnership: only required params', async () => {
    const responsePromise = client.phoneNumbers.actions.verifyOwnership({ phone_numbers: ['+15551234567'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('verifyOwnership: required and optional params', async () => {
    const response = await client.phoneNumbers.actions.verifyOwnership({ phone_numbers: ['+15551234567'] });
  });
});
