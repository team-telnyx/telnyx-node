// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource botSignup', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.botSignup.create({
      bot_challenge_answer: '35',
      bot_challenge_nonce: 'c6feda4e-6501-4db9-a21f-665e5b4ce2ba',
      privacy_policy_url: 'https://telnyx.com/privacy-policy',
      terms_and_conditions_url: 'https://telnyx.com/terms-and-conditions-of-service',
      terms_of_service: true,
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
  test.skip('create: required and optional params', async () => {
    const response = await client.botSignup.create({
      bot_challenge_answer: '35',
      bot_challenge_nonce: 'c6feda4e-6501-4db9-a21f-665e5b4ce2ba',
      privacy_policy_url: 'https://telnyx.com/privacy-policy',
      terms_and_conditions_url: 'https://telnyx.com/terms-and-conditions-of-service',
      terms_of_service: true,
      email: 'agent-owner@example.com',
      terms_and_conditions_eu_url: 'https://telnyx.com/terms-and-conditions-of-service-eu',
      terms_of_service_eu: true,
    });
  });

  // Mock server tests are disabled
  test.skip('resendMagicLink: only required params', async () => {
    const responsePromise = client.botSignup.resendMagicLink({ email: 'agent-owner@example.com' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('resendMagicLink: required and optional params', async () => {
    const response = await client.botSignup.resendMagicLink({ email: 'agent-owner@example.com' });
  });
});
