// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource artifactDownloads', () => {
  // Mock server tests are disabled
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.artifactDownloads.retrieve('artifactId', {
      expires: 'expires',
      sig: 'sig',
    });
  });
});
