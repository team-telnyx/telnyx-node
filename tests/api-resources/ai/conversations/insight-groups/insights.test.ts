// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource insights', () => {
  // Mock server tests are disabled
  test.skip('assign: only required params', async () => {
    const responsePromise = client.ai.conversations.insightGroups.insights.assign(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { group_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
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
  test.skip('assign: required and optional params', async () => {
    const response = await client.ai.conversations.insightGroups.insights.assign(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { group_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
    );
  });

  // Mock server tests are disabled
  test.skip('deleteUnassign: only required params', async () => {
    const responsePromise = client.ai.conversations.insightGroups.insights.deleteUnassign(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { group_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
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
  test.skip('deleteUnassign: required and optional params', async () => {
    const response = await client.ai.conversations.insightGroups.insights.deleteUnassign(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { group_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
    );
  });
});
