// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource autorespConfigs', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.messagingProfiles.autorespConfigs.create('profile_id', {
      country_code: 'US',
      keywords: ['keyword1', 'keyword2'],
      op: 'start',
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
    const response = await client.messagingProfiles.autorespConfigs.create('profile_id', {
      country_code: 'US',
      keywords: ['keyword1', 'keyword2'],
      op: 'start',
      resp_text: 'Thank you for your message',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.messagingProfiles.autorespConfigs.retrieve(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { profile_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.messagingProfiles.autorespConfigs.retrieve(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { profile_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
    );
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.messagingProfiles.autorespConfigs.update(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        profile_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        country_code: 'US',
        keywords: ['keyword1', 'keyword2'],
        op: 'start',
      },
    );
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
    const response = await client.messagingProfiles.autorespConfigs.update(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        profile_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        country_code: 'US',
        keywords: ['keyword1', 'keyword2'],
        op: 'start',
        resp_text: 'Thank you for your message',
      },
    );
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.messagingProfiles.autorespConfigs.list(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    );
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
      client.messagingProfiles.autorespConfigs.list(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        {
          country_code: 'country_code',
          created_at: { gte: 'gte', lte: 'lte' },
          updated_at: { gte: 'gte', lte: 'lte' },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.messagingProfiles.autorespConfigs.delete(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { profile_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('delete: required and optional params', async () => {
    const response = await client.messagingProfiles.autorespConfigs.delete(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { profile_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
    );
  });
});
