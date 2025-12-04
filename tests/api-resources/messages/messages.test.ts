// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource messages', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.messages.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('cancelScheduled', async () => {
    const responsePromise = client.messages.cancelScheduled('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('schedule: only required params', async () => {
    const responsePromise = client.messages.schedule({ to: '+18445550001' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('schedule: required and optional params', async () => {
    const response = await client.messages.schedule({
      to: '+18445550001',
      auto_detect: true,
      from: '+18445550001',
      media_urls: ['string'],
      messaging_profile_id: 'abc85f64-5717-4562-b3fc-2c9600000000',
      send_at: '2019-01-23T18:30:00Z',
      subject: 'From Telnyx!',
      text: 'Hello, World!',
      type: 'SMS',
      use_profile_webhooks: true,
      webhook_failover_url: 'https://backup.example.com/hooks',
      webhook_url: 'http://example.com/webhooks',
    });
  });

  // Prism tests are disabled
  test.skip('send: only required params', async () => {
    const responsePromise = client.messages.send({ to: '+18445550001' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('send: required and optional params', async () => {
    const response = await client.messages.send({
      to: '+18445550001',
      auto_detect: true,
      from: '+18445550001',
      media_urls: ['http://example.com'],
      messaging_profile_id: 'abc85f64-5717-4562-b3fc-2c9600000000',
      send_at: '2019-12-27T18:11:19.117Z',
      subject: 'From Telnyx!',
      text: 'Hello, World!',
      type: 'MMS',
      use_profile_webhooks: true,
      webhook_failover_url: 'https://backup.example.com/hooks',
      webhook_url: 'http://example.com/webhooks',
    });
  });

  // Prism tests are disabled
  test.skip('sendGroupMms: only required params', async () => {
    const responsePromise = client.messages.sendGroupMms({
      from: '+13125551234',
      to: ['+18655551234', '+14155551234'],
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
  test.skip('sendGroupMms: required and optional params', async () => {
    const response = await client.messages.sendGroupMms({
      from: '+13125551234',
      to: ['+18655551234', '+14155551234'],
      media_urls: ['http://example.com'],
      subject: 'From Telnyx!',
      text: 'Hello, World!',
      use_profile_webhooks: true,
      webhook_failover_url: 'https://backup.example.com/hooks',
      webhook_url: 'http://example.com/webhooks',
    });
  });

  // Prism tests are disabled
  test.skip('sendLongCode: only required params', async () => {
    const responsePromise = client.messages.sendLongCode({ from: '+18445550001', to: '+13125550002' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('sendLongCode: required and optional params', async () => {
    const response = await client.messages.sendLongCode({
      from: '+18445550001',
      to: '+13125550002',
      auto_detect: true,
      media_urls: ['http://example.com'],
      subject: 'From Telnyx!',
      text: 'Hello, World!',
      type: 'MMS',
      use_profile_webhooks: true,
      webhook_failover_url: 'https://backup.example.com/hooks',
      webhook_url: 'http://example.com/webhooks',
    });
  });

  // Prism tests are disabled
  test.skip('sendNumberPool: only required params', async () => {
    const responsePromise = client.messages.sendNumberPool({
      messaging_profile_id: 'abc85f64-5717-4562-b3fc-2c9600000000',
      to: '+13125550002',
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
  test.skip('sendNumberPool: required and optional params', async () => {
    const response = await client.messages.sendNumberPool({
      messaging_profile_id: 'abc85f64-5717-4562-b3fc-2c9600000000',
      to: '+13125550002',
      auto_detect: true,
      media_urls: ['http://example.com'],
      subject: 'From Telnyx!',
      text: 'Hello, World!',
      type: 'MMS',
      use_profile_webhooks: true,
      webhook_failover_url: 'https://backup.example.com/hooks',
      webhook_url: 'http://example.com/webhooks',
    });
  });

  // Prism tests are disabled
  test.skip('sendShortCode: only required params', async () => {
    const responsePromise = client.messages.sendShortCode({ from: '+18445550001', to: '+18445550001' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('sendShortCode: required and optional params', async () => {
    const response = await client.messages.sendShortCode({
      from: '+18445550001',
      to: '+18445550001',
      auto_detect: true,
      media_urls: ['http://example.com'],
      subject: 'From Telnyx!',
      text: 'Hello, World!',
      type: 'MMS',
      use_profile_webhooks: true,
      webhook_failover_url: 'https://backup.example.com/hooks',
      webhook_url: 'http://example.com/webhooks',
    });
  });
});
