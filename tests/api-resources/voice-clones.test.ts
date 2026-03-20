// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx, { toFile } from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource voiceClones', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.voiceClones.create({
      gender: 'male',
      language: 'en',
      name: 'clone-narrator',
      voice_design_id: '550e8400-e29b-41d4-a716-446655440000',
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
    const response = await client.voiceClones.create({
      gender: 'male',
      language: 'en',
      name: 'clone-narrator',
      voice_design_id: '550e8400-e29b-41d4-a716-446655440000',
      provider: 'telnyx',
    });
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.voiceClones.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      name: 'updated-clone',
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
    const response = await client.voiceClones.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      name: 'updated-clone',
      gender: 'male',
      language: 'language',
    });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.voiceClones.list();
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
      client.voiceClones.list(
        {
          'filter[name]': 'filter[name]',
          'filter[provider]': 'telnyx',
          'page[number]': 1,
          'page[size]': 1,
          sort: 'name',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.voiceClones.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('createFromUpload: only required params', async () => {
    const responsePromise = client.voiceClones.createFromUpload({
      audio_file: await toFile(Buffer.from('Example data'), 'README.md'),
      language: 'lkf-Lz1vLbBu-9uDh-9AHaOS2D-Cbf',
      name: 'name',
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
  test.skip('createFromUpload: required and optional params', async () => {
    const response = await client.voiceClones.createFromUpload({
      audio_file: await toFile(Buffer.from('Example data'), 'README.md'),
      language: 'lkf-Lz1vLbBu-9uDh-9AHaOS2D-Cbf',
      name: 'name',
      gender: 'male',
      label: 'label',
      provider: 'telnyx',
      ref_text: 'ref_text',
    });
  });
});
