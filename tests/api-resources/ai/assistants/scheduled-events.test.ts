// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource scheduledEvents', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.ai.assistants.scheduledEvents.create('assistant_id', {
      scheduled_at_fixed_datetime: '2025-04-15T13:07:28.764Z',
      telnyx_agent_target: 'telnyx_agent_target',
      telnyx_conversation_channel: 'phone_call',
      telnyx_end_user_target: 'telnyx_end_user_target',
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
  test.skip('create: required and optional params', async () => {
    const response = await client.ai.assistants.scheduledEvents.create('assistant_id', {
      scheduled_at_fixed_datetime: '2025-04-15T13:07:28.764Z',
      telnyx_agent_target: 'telnyx_agent_target',
      telnyx_conversation_channel: 'phone_call',
      telnyx_end_user_target: 'telnyx_end_user_target',
      conversation_metadata: { foo: 'string' },
      text: 'text',
    });
  });

  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.ai.assistants.scheduledEvents.retrieve('event_id', {
      assistant_id: 'assistant_id',
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
    const response = await client.ai.assistants.scheduledEvents.retrieve('event_id', {
      assistant_id: 'assistant_id',
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.ai.assistants.scheduledEvents.list('assistant_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.ai.assistants.scheduledEvents.list(
        'assistant_id',
        {
          conversation_channel: 'phone_call',
          from_date: '2019-12-27T18:11:19.117Z',
          page: { number: 1, size: 1 },
          to_date: '2019-12-27T18:11:19.117Z',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.ai.assistants.scheduledEvents.delete('event_id', {
      assistant_id: 'assistant_id',
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
  test.skip('delete: required and optional params', async () => {
    const response = await client.ai.assistants.scheduledEvents.delete('event_id', {
      assistant_id: 'assistant_id',
    });
  });
});
