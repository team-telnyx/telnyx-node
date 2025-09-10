// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource virtualCrossConnects', () => {
  test('create: only required params', async () => {
    const responsePromise = client.virtualCrossConnects.create({
      bgp_asn: 1234,
      cloud_provider: 'aws',
      cloud_provider_region: 'us-east-1',
      network_id: '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
      primary_cloud_account_id: '123456789012',
      region_code: 'ashburn-va',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.virtualCrossConnects.create({
      bgp_asn: 1234,
      cloud_provider: 'aws',
      cloud_provider_region: 'us-east-1',
      network_id: '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
      primary_cloud_account_id: '123456789012',
      region_code: 'ashburn-va',
      bandwidth_mbps: 50,
      name: 'test interface',
      primary_bgp_key: 'yFV4wEPtPVPfDUGLWiyQzwga',
      primary_cloud_ip: '169.254.0.2',
      primary_telnyx_ip: '169.254.0.1',
      secondary_bgp_key: 'ge1lONeK9RcA83uuWaw9DvZy',
      secondary_cloud_account_id: '',
      secondary_cloud_ip: '169.254.0.4',
      secondary_telnyx_ip: '169.254.0.3',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.virtualCrossConnects.retrieve('6a09cdc3-8948-47f0-aa62-74ac943d6c58');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update', async () => {
    const responsePromise = client.virtualCrossConnects.update('6a09cdc3-8948-47f0-aa62-74ac943d6c58', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list', async () => {
    const responsePromise = client.virtualCrossConnects.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.virtualCrossConnects.list(
        { filter: { network_id: '6a09cdc3-8948-47f0-aa62-74ac943d6c58' }, page: { number: 1, size: 1 } },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.virtualCrossConnects.delete('6a09cdc3-8948-47f0-aa62-74ac943d6c58');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
