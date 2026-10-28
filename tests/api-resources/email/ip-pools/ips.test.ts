// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource ips', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.email.ipPools.ips.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      dedicated_ip_id: '6a7f9a30-1234-4b5c-8d9e-0f1a2b3c4d5e',
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
    const response = await client.email.ipPools.ips.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      dedicated_ip_id: '6a7f9a30-1234-4b5c-8d9e-0f1a2b3c4d5e',
      weight: 100,
    });
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.email.ipPools.ips.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
  test.skip('delete: required and optional params', async () => {
    const response = await client.email.ipPools.ips.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      drain: true,
      force: true,
    });
  });
});
