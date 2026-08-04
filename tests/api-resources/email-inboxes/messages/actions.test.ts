// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource actions', () => {
  // Mock server tests are disabled
  test.skip('forward: only required params', async () => {
    const responsePromise = client.emailInboxes.messages.actions.forward(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { inbox_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', to: 'new@example.com' },
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
  test.skip('forward: required and optional params', async () => {
    const response = await client.emailInboxes.messages.actions.forward(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        inbox_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        to: 'new@example.com',
        bcc: ['blind@example.com'],
        cc: [{ email: 'copy@example.com', name: 'name' }],
        html: 'html',
        text: 'FYI',
      },
    );
  });

  // Mock server tests are disabled
  test.skip('reply: only required params', async () => {
    const responsePromise = client.emailInboxes.messages.actions.reply(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { inbox_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
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
  test.skip('reply: required and optional params', async () => {
    const response = await client.emailInboxes.messages.actions.reply(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        inbox_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        html: 'P',
        text: 'Thanks for the update.',
      },
    );
  });

  // Mock server tests are disabled
  test.skip('replyAll: only required params', async () => {
    const responsePromise = client.emailInboxes.messages.actions.replyAll(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { inbox_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
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
  test.skip('replyAll: required and optional params', async () => {
    const response = await client.emailInboxes.messages.actions.replyAll(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        inbox_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        html: 'P',
        text: 'Everyone, please review.',
      },
    );
  });
});
