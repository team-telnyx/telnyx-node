// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource verifications', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.verifications.retrieve('12ade33a-21c0-473b-b055-b3c836e1c292');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('triggerCall: only required params', async () => {
    const responsePromise = client.verifications.triggerCall({
      phone_number: '+13035551234',
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
  test.skip('triggerCall: required and optional params', async () => {
    const response = await client.verifications.triggerCall({
      phone_number: '+13035551234',
      verify_profile_id: '12ade33a-21c0-473b-b055-b3c836e1c292',
      custom_code: '43612',
      extension: '1www2WABCDw9',
      timeout_secs: 300,
    });
  });

  // Prism tests are disabled
  test.skip('triggerFlashcall: only required params', async () => {
    const responsePromise = client.verifications.triggerFlashcall({
      phone_number: '+13035551234',
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
  test.skip('triggerFlashcall: required and optional params', async () => {
    const response = await client.verifications.triggerFlashcall({
      phone_number: '+13035551234',
      verify_profile_id: '12ade33a-21c0-473b-b055-b3c836e1c292',
      timeout_secs: 300,
    });
  });

  // Prism tests are disabled
  test.skip('triggerSMS: only required params', async () => {
    const responsePromise = client.verifications.triggerSMS({
      phone_number: '+13035551234',
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
  test.skip('triggerSMS: required and optional params', async () => {
    const response = await client.verifications.triggerSMS({
      phone_number: '+13035551234',
      verify_profile_id: '12ade33a-21c0-473b-b055-b3c836e1c292',
      custom_code: '43612',
      timeout_secs: 300,
    });
  });
});
