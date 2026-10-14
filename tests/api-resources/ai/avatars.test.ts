// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx, { toFile } from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource avatars', () => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.ai.avatars.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.ai.avatars.list(
        {
          'filter[avatar_type]': 'stock',
          'filter[id]': 'avatar_0123456789abcdef0123456789abcdef',
          'filter[name]': 'x',
          'page[number]': 1,
          'page[size]': 1,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.ai.avatars.create({
      image_file: await toFile(Buffer.from('Example data'), 'README.md'),
      name: 'Customer portrait',
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
    const response = await client.ai.avatars.create({
      image_file: await toFile(Buffer.from('Example data'), 'README.md'),
      name: 'Customer portrait',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.ai.avatars.retrieve('avatar_0123456789abcdef0123456789abcdef');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.ai.avatars.update('avatar_0123456789abcdef0123456789abcdef', {
      name: 'Updated portrait',
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
  test.skip('update: required and optional params', async () => {
    const response = await client.ai.avatars.update('avatar_0123456789abcdef0123456789abcdef', {
      name: 'Updated portrait',
    });
  });
});
