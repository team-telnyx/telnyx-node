// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource verifyEmail', () => {
  // Mock server tests are disabled
  test.skip('confirm: only required params', async () => {
    const responsePromise = client.dir.verifyEmail.confirm('16635d38-75a6-4481-82e8-69af60e05011', {
      code: '482915',
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
  test.skip('confirm: required and optional params', async () => {
    const response = await client.dir.verifyEmail.confirm('16635d38-75a6-4481-82e8-69af60e05011', {
      code: '482915',
    });
  });

  // Mock server tests are disabled
  test.skip('send', async () => {
    const responsePromise = client.dir.verifyEmail.send('16635d38-75a6-4481-82e8-69af60e05011');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('status', async () => {
    const responsePromise = client.dir.verifyEmail.status('16635d38-75a6-4481-82e8-69af60e05011');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
