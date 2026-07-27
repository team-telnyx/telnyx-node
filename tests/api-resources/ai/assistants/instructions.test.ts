// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource instructions', () => {
  // Mock server tests are disabled
  test.skip('enhance', async () => {
    const responsePromise = client.ai.assistants.instructions.enhance('assistant_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('enhance: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.ai.assistants.instructions.enhance(
        'assistant_id',
        { enhancement_prompt: 'enhancement_prompt', instructions: 'instructions' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });
});
