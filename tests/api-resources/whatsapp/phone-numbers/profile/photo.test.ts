// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx, { toFile } from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource photo', () => {
  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.whatsapp.phoneNumbers.profile.photo.delete('phone_number');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('upload: only required params', async () => {
    const responsePromise = client.whatsapp.phoneNumbers.profile.photo.upload('phone_number', {
      file: await toFile(Buffer.from('Example data'), 'README.md'),
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
  test.skip('upload: required and optional params', async () => {
    const response = await client.whatsapp.phoneNumbers.profile.photo.upload('phone_number', {
      file: await toFile(Buffer.from('Example data'), 'README.md'),
    });
  });
});
