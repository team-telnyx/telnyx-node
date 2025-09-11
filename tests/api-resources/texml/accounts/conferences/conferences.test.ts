// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource conferences', () => {
  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.texml.accounts.conferences.retrieve('conference_sid', {
      account_sid: 'account_sid',
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
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.texml.accounts.conferences.retrieve('conference_sid', {
      account_sid: 'account_sid',
    });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.texml.accounts.conferences.update('conference_sid', {
      account_sid: 'account_sid',
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
  test.skip('update: required and optional params', async () => {
    const response = await client.texml.accounts.conferences.update('conference_sid', {
      account_sid: 'account_sid',
      AnnounceMethod: 'GET',
      AnnounceUrl: 'https://www.example.com/announce.xml',
      Status: 'completed',
    });
  });

  // Prism tests are disabled
  test.skip('retrieveConferences', async () => {
    const responsePromise = client.texml.accounts.conferences.retrieveConferences('account_sid');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveConferences: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.texml.accounts.conferences.retrieveConferences(
        'account_sid',
        {
          DateCreated: 'DateCreated',
          DateUpdated: 'DateUpdated',
          FriendlyName: 'FriendlyName',
          Page: 0,
          PageSize: 0,
          PageToken: 'PageToken',
          Status: 'init',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveRecordings: only required params', async () => {
    const responsePromise = client.texml.accounts.conferences.retrieveRecordings('conference_sid', {
      account_sid: 'account_sid',
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
  test.skip('retrieveRecordings: required and optional params', async () => {
    const response = await client.texml.accounts.conferences.retrieveRecordings('conference_sid', {
      account_sid: 'account_sid',
    });
  });

  // Prism tests are disabled
  test.skip('retrieveRecordingsJson: only required params', async () => {
    const responsePromise = client.texml.accounts.conferences.retrieveRecordingsJson('conference_sid', {
      account_sid: 'account_sid',
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
  test.skip('retrieveRecordingsJson: required and optional params', async () => {
    const response = await client.texml.accounts.conferences.retrieveRecordingsJson('conference_sid', {
      account_sid: 'account_sid',
    });
  });
});
