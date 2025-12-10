// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource externalVetting', () => {
  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.number10dlc.brand.externalVetting.list('brandId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('import: only required params', async () => {
    const responsePromise = client.number10dlc.brand.externalVetting.import('brandId', {
      evpId: 'evpId',
      vettingId: 'vettingId',
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
  test.skip('import: required and optional params', async () => {
    const response = await client.number10dlc.brand.externalVetting.import('brandId', {
      evpId: 'evpId',
      vettingId: 'vettingId',
      vettingToken: 'vettingToken',
    });
  });

  // Prism tests are disabled
  test.skip('order: only required params', async () => {
    const responsePromise = client.number10dlc.brand.externalVetting.order('brandId', {
      evpId: 'evpId',
      vettingClass: 'vettingClass',
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
  test.skip('order: required and optional params', async () => {
    const response = await client.number10dlc.brand.externalVetting.order('brandId', {
      evpId: 'evpId',
      vettingClass: 'vettingClass',
    });
  });
});
