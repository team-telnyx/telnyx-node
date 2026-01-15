// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource requests', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.messagingTollfree.verification.requests.create({
      additionalInformation: 'additionalInformation',
      businessAddr1: '600 Congress Avenue',
      businessCity: 'Austin',
      businessContactEmail: 'email@example.com',
      businessContactFirstName: 'John',
      businessContactLastName: 'Doe',
      businessContactPhone: '+18005550100',
      businessName: 'Telnyx LLC',
      businessState: 'Texas',
      businessZip: '78701',
      corporateWebsite: 'http://example.com',
      isvReseller: 'isvReseller',
      messageVolume: '100,000',
      optInWorkflow:
        "User signs into the Telnyx portal, enters a number and is prompted to select whether they want to use 2FA verification for security purposes. If they've opted in a confirmation message is sent out to the handset",
      optInWorkflowImageURLs: [
        { url: 'https://telnyx.com/sign-up' },
        { url: 'https://telnyx.com/company/data-privacy' },
      ],
      phoneNumbers: [{ phoneNumber: '+18773554398' }, { phoneNumber: '+18773554399' }],
      productionMessageContent: 'Your Telnyx OTP is XXXX',
      useCase: '2FA',
      useCaseSummary:
        'This is a use case where Telnyx sends out 2FA codes to portal users to verify their identity in order to sign into the portal',
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
    const response = await client.messagingTollfree.verification.requests.create({
      additionalInformation: 'additionalInformation',
      businessAddr1: '600 Congress Avenue',
      businessCity: 'Austin',
      businessContactEmail: 'email@example.com',
      businessContactFirstName: 'John',
      businessContactLastName: 'Doe',
      businessContactPhone: '+18005550100',
      businessName: 'Telnyx LLC',
      businessState: 'Texas',
      businessZip: '78701',
      corporateWebsite: 'http://example.com',
      isvReseller: 'isvReseller',
      messageVolume: '100,000',
      optInWorkflow:
        "User signs into the Telnyx portal, enters a number and is prompted to select whether they want to use 2FA verification for security purposes. If they've opted in a confirmation message is sent out to the handset",
      optInWorkflowImageURLs: [
        { url: 'https://telnyx.com/sign-up' },
        { url: 'https://telnyx.com/company/data-privacy' },
      ],
      phoneNumbers: [{ phoneNumber: '+18773554398' }, { phoneNumber: '+18773554399' }],
      productionMessageContent: 'Your Telnyx OTP is XXXX',
      useCase: '2FA',
      useCaseSummary:
        'This is a use case where Telnyx sends out 2FA codes to portal users to verify their identity in order to sign into the portal',
      ageGatedContent: true,
      businessAddr2: '14th Floor',
      businessRegistrationCountry: 'US',
      businessRegistrationNumber: '12-3456789',
      businessRegistrationType: 'EIN',
      campaignVerifyAuthorizationToken: 'cv_token_abc123xyz',
      doingBusinessAs: 'Acme Services',
      entityType: 'SOLE_PROPRIETOR',
      helpMessageResponse: 'Reply HELP for assistance or STOP to unsubscribe. Contact: support@example.com',
      optInConfirmationResponse: 'You have successfully opted in to receive messages from Acme Corp',
      optInKeywords: 'START, YES, SUBSCRIBE',
      privacyPolicyURL: 'https://example.com/privacy',
      termsAndConditionURL: 'https://example.com/terms',
      webhookUrl: 'http://example-webhook.com',
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.messagingTollfree.verification.requests.retrieve(
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

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.messagingTollfree.verification.requests.update(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        additionalInformation: 'additionalInformation',
        businessAddr1: '600 Congress Avenue',
        businessCity: 'Austin',
        businessContactEmail: 'email@example.com',
        businessContactFirstName: 'John',
        businessContactLastName: 'Doe',
        businessContactPhone: '+18005550100',
        businessName: 'Telnyx LLC',
        businessState: 'Texas',
        businessZip: '78701',
        corporateWebsite: 'http://example.com',
        isvReseller: 'isvReseller',
        messageVolume: '100,000',
        optInWorkflow:
          "User signs into the Telnyx portal, enters a number and is prompted to select whether they want to use 2FA verification for security purposes. If they've opted in a confirmation message is sent out to the handset",
        optInWorkflowImageURLs: [
          { url: 'https://telnyx.com/sign-up' },
          { url: 'https://telnyx.com/company/data-privacy' },
        ],
        phoneNumbers: [{ phoneNumber: '+18773554398' }, { phoneNumber: '+18773554399' }],
        productionMessageContent: 'Your Telnyx OTP is XXXX',
        useCase: '2FA',
        useCaseSummary:
          'This is a use case where Telnyx sends out 2FA codes to portal users to verify their identity in order to sign into the portal',
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

  // Prism tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.messagingTollfree.verification.requests.update(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        additionalInformation: 'additionalInformation',
        businessAddr1: '600 Congress Avenue',
        businessCity: 'Austin',
        businessContactEmail: 'email@example.com',
        businessContactFirstName: 'John',
        businessContactLastName: 'Doe',
        businessContactPhone: '+18005550100',
        businessName: 'Telnyx LLC',
        businessState: 'Texas',
        businessZip: '78701',
        corporateWebsite: 'http://example.com',
        isvReseller: 'isvReseller',
        messageVolume: '100,000',
        optInWorkflow:
          "User signs into the Telnyx portal, enters a number and is prompted to select whether they want to use 2FA verification for security purposes. If they've opted in a confirmation message is sent out to the handset",
        optInWorkflowImageURLs: [
          { url: 'https://telnyx.com/sign-up' },
          { url: 'https://telnyx.com/company/data-privacy' },
        ],
        phoneNumbers: [{ phoneNumber: '+18773554398' }, { phoneNumber: '+18773554399' }],
        productionMessageContent: 'Your Telnyx OTP is XXXX',
        useCase: '2FA',
        useCaseSummary:
          'This is a use case where Telnyx sends out 2FA codes to portal users to verify their identity in order to sign into the portal',
        ageGatedContent: true,
        businessAddr2: '14th Floor',
        businessRegistrationCountry: 'US',
        businessRegistrationNumber: '12-3456789',
        businessRegistrationType: 'EIN',
        campaignVerifyAuthorizationToken: 'cv_token_abc123xyz',
        doingBusinessAs: 'Acme Services',
        entityType: 'SOLE_PROPRIETOR',
        helpMessageResponse: 'Reply HELP for assistance or STOP to unsubscribe. Contact: support@example.com',
        optInConfirmationResponse: 'You have successfully opted in to receive messages from Acme Corp',
        optInKeywords: 'START, YES, SUBSCRIBE',
        privacyPolicyURL: 'https://example.com/privacy',
        termsAndConditionURL: 'https://example.com/terms',
        webhookUrl: 'http://example-webhook.com',
      },
    );
  });

  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.messagingTollfree.verification.requests.list({ page: 1, page_size: 1 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: required and optional params', async () => {
    const response = await client.messagingTollfree.verification.requests.list({
      page: 1,
      page_size: 1,
      date_end: '2019-12-27T18:11:19.117Z',
      date_start: '2019-12-27T18:11:19.117Z',
      phone_number: 'phone_number',
      status: 'Verified',
    });
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.messagingTollfree.verification.requests.delete(
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
});
