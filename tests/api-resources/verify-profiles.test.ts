// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx-node';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource verifyProfiles', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.verifyProfiles.create({ name: 'Test Profile' });
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
    const response = await client.verifyProfiles.create({
      name: 'Test Profile',
      call: {
        app_name: 'Example Secure App',
        code_length: 6,
        default_verification_timeout_secs: 300,
        messaging_template_id: '0abb5b4f-459f-445a-bfcd-488998b7572d',
        whitelisted_destinations: ['US', 'CA'],
      },
      flashcall: { default_verification_timeout_secs: 300, whitelisted_destinations: ['US', 'CA'] },
      language: 'en-US',
      sms: {
        whitelisted_destinations: ['US', 'CA'],
        alpha_sender: 'sqF',
        app_name: 'Example Secure App',
        code_length: 6,
        default_verification_timeout_secs: 300,
        messaging_template_id: '0abb5b4f-459f-445a-bfcd-488998b7572d',
      },
      webhook_failover_url: 'http://example.com/webhook/failover',
      webhook_url: 'http://example.com/webhook',
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.verifyProfiles.retrieve('12ade33a-21c0-473b-b055-b3c836e1c292');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.verifyProfiles.update('12ade33a-21c0-473b-b055-b3c836e1c292', {});
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
    const responsePromise = client.verifyProfiles.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.verifyProfiles.list(
        { filter: { name: 'name' }, page: { number: 0, size: 0 } },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.verifyProfiles.delete('12ade33a-21c0-473b-b055-b3c836e1c292');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveTemplates', async () => {
    const responsePromise = client.verifyProfiles.retrieveTemplates();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
