// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource infringementClaims', () => {
  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.infringementClaims.retrieve('e379fbc8-cd83-4bef-a280-a0ac9d00dcf8');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('contest: only required params', async () => {
    const responsePromise = client.infringementClaims.contest('e379fbc8-cd83-4bef-a280-a0ac9d00dcf8', {
      contest_notes:
        'We own the trademark outright; our registration precedes the claimant by three years. See attached certificate.',
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
  test.skip('contest: required and optional params', async () => {
    const response = await client.infringementClaims.contest('e379fbc8-cd83-4bef-a280-a0ac9d00dcf8', {
      contest_notes:
        'We own the trademark outright; our registration precedes the claimant by three years. See attached certificate.',
      documents: [
        {
          document_id: '2a7e8337-e803-4057-a4ae-26c40eb0bc6c',
          document_type: 'trademark_registration',
          description: 'USPTO trademark certificate.',
        },
      ],
    });
  });
});
