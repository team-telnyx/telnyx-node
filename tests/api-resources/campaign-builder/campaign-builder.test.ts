// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource campaignBuilder', () => {
  // Prism doesn't support callbacks yet
  test.skip('create: only required params', async () => {
    const responsePromise = client.campaignBuilder.create({
      brandId: 'brandId',
      description: 'description',
      usecase: 'usecase',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism doesn't support callbacks yet
  test.skip('create: required and optional params', async () => {
    const response = await client.campaignBuilder.create({
      brandId: 'brandId',
      description: 'description',
      usecase: 'usecase',
      ageGated: true,
      autoRenewal: true,
      directLending: true,
      embeddedLink: true,
      embeddedLinkSample: 'embeddedLinkSample',
      embeddedPhone: true,
      helpKeywords: 'helpKeywords',
      helpMessage: 'helpMessage',
      messageFlow: 'messageFlow',
      mnoIds: [0],
      numberPool: true,
      optinKeywords: 'optinKeywords',
      optinMessage: 'optinMessage',
      optoutKeywords: 'optoutKeywords',
      optoutMessage: 'optoutMessage',
      privacyPolicyLink: 'privacyPolicyLink',
      referenceId: 'referenceId',
      resellerId: 'resellerId',
      sample1: 'sample1',
      sample2: 'sample2',
      sample3: 'sample3',
      sample4: 'sample4',
      sample5: 'sample5',
      subscriberHelp: true,
      subscriberOptin: true,
      subscriberOptout: true,
      subUsecases: ['string'],
      tag: ['string'],
      termsAndConditions: true,
      termsAndConditionsLink: 'termsAndConditionsLink',
      webhookFailoverURL: 'https://webhook.com/93711262-23e5-4048-a966-c0b2a16d5963',
      webhookURL: 'https://webhook.com/67ea78a8-9f32-4d04-b62d-f9502e8e5f93',
    });
  });
});
