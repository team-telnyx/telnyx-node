// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource speechToText', () => {
  // Mock server tests are disabled
  test.skip('listProviders', async () => {
    const responsePromise = client.speechToText.listProviders();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listProviders: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.speechToText.listProviders(
        { provider: 'deepgram', service_type: 'streaming' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('retrieveTranscription: only required params', async () => {
    const responsePromise = client.speechToText.retrieveTranscription({
      input_format: 'mp3',
      transcription_engine: 'Azure',
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
  test.skip('retrieveTranscription: required and optional params', async () => {
    const response = await client.speechToText.retrieveTranscription({
      input_format: 'mp3',
      transcription_engine: 'Azure',
      endpointing: 0,
      interim_results: true,
      keyterm: 'keyterm',
      keywords: 'keywords',
      language: 'language',
      model: 'fast',
      redact: 'redact',
    });
  });
});
