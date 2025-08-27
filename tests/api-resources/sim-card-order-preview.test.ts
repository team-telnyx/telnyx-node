// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx-node';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource simCardOrderPreview', () => {
  // Prism tests are disabled
  test.skip('preview: only required params', async () => {
    const responsePromise = client.simCardOrderPreview.preview({
      address_id: '1293384261075731499',
      quantity: 21,
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
  test.skip('preview: required and optional params', async () => {
    const response = await client.simCardOrderPreview.preview({
      address_id: '1293384261075731499',
      quantity: 21,
    });
  });
});
