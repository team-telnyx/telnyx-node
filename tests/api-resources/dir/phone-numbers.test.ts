// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource phoneNumbers', () => {
  // Mock server tests are disabled
  test.skip('remove: only required params', async () => {
    const responsePromise = client.dir.phoneNumbers.remove('16635d38-75a6-4481-82e8-69af60e05011', {
      phone_numbers: ['+19493253498'],
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
  test.skip('remove: required and optional params', async () => {
    const response = await client.dir.phoneNumbers.remove('16635d38-75a6-4481-82e8-69af60e05011', {
      phone_numbers: ['+19493253498'],
    });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.dir.phoneNumbers.list('16635d38-75a6-4481-82e8-69af60e05011');
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
      client.dir.phoneNumbers.list(
        '16635d38-75a6-4481-82e8-69af60e05011',
        {
          'page[number]': 1,
          'page[size]': 20,
          status: 'submitted',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('add: only required params', async () => {
    const responsePromise = client.dir.phoneNumbers.add('16635d38-75a6-4481-82e8-69af60e05011', {
      documents: [
        { document_id: '2a7e8337-e803-4057-a4ae-26c40eb0bc6c', document_type: 'letter_of_authorization' },
      ],
      phone_numbers: ['+19493253498', '+12134445566'],
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
  test.skip('add: required and optional params', async () => {
    const response = await client.dir.phoneNumbers.add('16635d38-75a6-4481-82e8-69af60e05011', {
      documents: [
        {
          document_id: '2a7e8337-e803-4057-a4ae-26c40eb0bc6c',
          document_type: 'letter_of_authorization',
          description: 'LOA authorising Telnyx to register these numbers under the DIR.',
        },
      ],
      phone_numbers: ['+19493253498', '+12134445566'],
    });
  });
});
