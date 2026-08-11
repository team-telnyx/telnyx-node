// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource agents', () => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.rcs.agents.list();
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
      client.rcs.agents.list(
        { brand_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.rcs.agents.create({
      brand_id: '11111111-1111-4111-8111-111111111111',
      configuration: { basics: { email: { address: 'support@example.com', label: 'Support' } } },
      display_name: 'Acme Order Updates',
      use_case: 'TRANSACTIONAL',
      'Idempotency-Key': 'Idempotency-Key',
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
    const response = await client.rcs.agents.create({
      brand_id: '11111111-1111-4111-8111-111111111111',
      configuration: {
        basics: {
          email: { address: 'support@example.com', label: 'Support' },
          brand_color: '#123456',
          description: 'Order confirmations and delivery updates',
          hero_url: 'https://www.example.com/rcs/hero.png',
          logo_url: 'https://www.example.com/rcs/logo.png',
          phone_number: { label: 'x', number: '+49605132' },
          privacy_policy_url: 'https://www.example.com/privacy',
          terms_and_conditions_url: 'https://www.example.com/terms',
          website: { label: 'x', url: 'https://example.com' },
        },
        campaign: {
          company_overview: 'x',
          additional_information: 'x',
          agent_overview: 'x',
          consent_settings: {
            call_to_action: 'x',
            double_opt_in: true,
            help_response: 'x',
            opt_in_message: 'x',
            opt_in_methods: [{ method_type: 'SMS', description: 'x' }],
            opt_out_response: 'x',
            call_to_action_media_url: 'https://example.com',
            call_to_action_url: 'https://example.com',
            double_opt_in_message: 'x',
          },
          interactions: [{ interaction_type: 'TRANSACTIONAL_UPDATES', description: 'x' }],
          message_examples: ['x'],
        },
        testing: {
          test_url: 'https://example.com',
          additional_information: 'x',
          message_id: 'x',
        },
      },
      display_name: 'Acme Order Updates',
      use_case: 'TRANSACTIONAL',
      'Idempotency-Key': 'Idempotency-Key',
      hosting_region: 'hosting_region',
      profile_id: 'profile_id',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.rcs.agents.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.rcs.agents.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieveCarrierApprovals', async () => {
    const responsePromise = client.rcs.agents.retrieveCarrierApprovals(
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
  test.skip('launch: only required params', async () => {
    const responsePromise = client.rcs.agents.launch('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      campaign: {
        company_overview: 'Acme provides online retail services.',
        agent_overview: 'The agent sends order confirmations and delivery updates.',
        consent_settings: {
          call_to_action: 'Select RCS updates during checkout.',
          double_opt_in: false,
          help_response: 'Contact support@example.com for help.',
          opt_in_message: 'You are subscribed to Acme order updates.',
          opt_in_methods: [{ method_type: 'WEBSITE' }],
          opt_out_response: 'You will receive no more messages.',
        },
        interactions: [{ interaction_type: 'TRANSACTIONAL_UPDATES' }],
        message_examples: [
          'Your Acme order is confirmed.',
          'Your Acme order has shipped.',
          'Your Acme order was delivered.',
        ],
      },
      testing: { test_url: 'https://www.example.com/rcs/test-video' },
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
  test.skip('launch: required and optional params', async () => {
    const response = await client.rcs.agents.launch('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      campaign: {
        company_overview: 'Acme provides online retail services.',
        additional_information: 'x',
        agent_overview: 'The agent sends order confirmations and delivery updates.',
        consent_settings: {
          call_to_action: 'Select RCS updates during checkout.',
          double_opt_in: false,
          help_response: 'Contact support@example.com for help.',
          opt_in_message: 'You are subscribed to Acme order updates.',
          opt_in_methods: [{ method_type: 'WEBSITE', description: 'x' }],
          opt_out_response: 'You will receive no more messages.',
          call_to_action_media_url: 'https://www.example.com/rcs/opt-in.png',
          call_to_action_url: 'https://www.example.com/checkout',
          double_opt_in_message: 'x',
        },
        interactions: [{ interaction_type: 'TRANSACTIONAL_UPDATES', description: 'x' }],
        message_examples: [
          'Your Acme order is confirmed.',
          'Your Acme order has shipped.',
          'Your Acme order was delivered.',
        ],
      },
      testing: {
        test_url: 'https://www.example.com/rcs/test-video',
        additional_information: 'Demonstrates START, STOP, HELP, and an order-status interaction.',
        message_id: 'x',
      },
    });
  });

  // Mock server tests are disabled
  test.skip('submit', async () => {
    const responsePromise = client.rcs.agents.submit('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
