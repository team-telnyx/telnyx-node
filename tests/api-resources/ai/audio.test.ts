// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx, { toFile } from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource audio', () => {
  // Mock server tests are disabled
  test.skip('transcribe: only required params', async () => {
    const responsePromise = client.ai.audio.transcribe({ model: 'distil-whisper/distil-large-v2' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('transcribe: required and optional params', async () => {
    const response = await client.ai.audio.transcribe({
      model: 'distil-whisper/distil-large-v2',
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
      file_url: 'https://example.com/file.mp3',
      language: 'en-US',
      model_config: { smart_format: 'bar', punctuate: 'bar' },
      response_format: 'json',
      'timestamp_granularities[]': 'segment',
    });
  });
});
