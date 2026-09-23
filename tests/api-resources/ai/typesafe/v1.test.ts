// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource v1', () => {
  // Mock server tests are disabled
  test.skip('systemone: only required params', async () => {
    const responsePromise = client.ai.typesafe.v1.systemone({
      questions: {
        team: {
          criteria: {
            billing: 'Payments and refunds',
            technical_support: 'Service faults and technical problems',
            sales: 'New purchases',
          },
          instructions: 'Choose the team that should handle this incident.',
          type: 'choice',
        },
        production_incident: {
          instructions: 'Does the message describe an active production incident?',
          type: 'noul',
        },
        urgency: {
          criteria: ['Low', 'Normal', 'High', 'Critical'],
          instructions: 'Rate operational urgency.',
          type: 'score',
        },
      },
      state: 'Our production calls are failing. Every customer is affected.',
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
  test.skip('systemone: required and optional params', async () => {
    const response = await client.ai.typesafe.v1.systemone({
      questions: {
        team: {
          criteria: {
            billing: 'Payments and refunds',
            technical_support: 'Service faults and technical problems',
            sales: 'New purchases',
          },
          instructions: 'Choose the team that should handle this incident.',
          type: 'choice',
        },
        production_incident: {
          instructions: 'Does the message describe an active production incident?',
          type: 'noul',
          criteria: { false: 'false', true: 'true' },
        },
        urgency: {
          criteria: ['Low', 'Normal', 'High', 'Critical'],
          instructions: 'Rate operational urgency.',
          type: 'score',
        },
      },
      state: 'Our production calls are failing. Every customer is affected.',
    });
  });
});
