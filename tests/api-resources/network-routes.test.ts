// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource networkRoutes', () => {
  // Mock server tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.networkRoutes.list({
      filter: { network_id: '91446ee3-5b1c-4f0e-8d2a-6c7e9b0a1f24' },
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
  test.skip('list: required and optional params', async () => {
    const response = await client.networkRoutes.list({
      filter: {
        network_id: '91446ee3-5b1c-4f0e-8d2a-6c7e9b0a1f24',
        cidr: '10.20.0.0/16',
        'next_hop.type': 'tunnel',
        origin: 'static',
        status: 'active',
      },
      page: { after: 'after', limit: 1 },
      sort: '-created_at',
    });
  });

  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.networkRoutes.create({
      cidr: '10.20.0.0/16',
      network_id: '91446ee3-5b1c-4f0e-8d2a-6c7e9b0a1f24',
      next_hop: { id: '62d438d2-8a51-4c5e-9d0c-1f6b2a7e4c39', type: 'tunnel' },
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
    const response = await client.networkRoutes.create({
      cidr: '10.20.0.0/16',
      network_id: '91446ee3-5b1c-4f0e-8d2a-6c7e9b0a1f24',
      next_hop: { id: '62d438d2-8a51-4c5e-9d0c-1f6b2a7e4c39', type: 'tunnel' },
    });
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.networkRoutes.delete('e8a2c5d0-3f7b-4a19-b6d2-9c1e0f8a7b53');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.networkRoutes.retrieve('e8a2c5d0-3f7b-4a19-b6d2-9c1e0f8a7b53');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
