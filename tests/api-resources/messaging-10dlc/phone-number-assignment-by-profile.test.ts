// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource phoneNumberAssignmentByProfile', () => {
  // Mock server tests are disabled
  test.skip('assign: only required params', async () => {
    const responsePromise = client.messaging10dlc.phoneNumberAssignmentByProfile.assign({
      messagingProfileId: '4001767e-ce0f-4cae-9d5f-0d5e636e7809',
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
  test.skip('assign: required and optional params', async () => {
    const response = await client.messaging10dlc.phoneNumberAssignmentByProfile.assign({
      messagingProfileId: '4001767e-ce0f-4cae-9d5f-0d5e636e7809',
      campaignId: '4b300178-131c-d902-d54e-72d90ba1620j',
      tcrCampaignId: 'CWZTFH1',
    });
  });

  // Mock server tests are disabled
  test.skip('listPhoneNumberStatus', async () => {
    const responsePromise =
      client.messaging10dlc.phoneNumberAssignmentByProfile.listPhoneNumberStatus('taskId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listPhoneNumberStatus: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.messaging10dlc.phoneNumberAssignmentByProfile.listPhoneNumberStatus(
        'taskId',
        { page: 0, recordsPerPage: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('retrievePhoneNumberStatus', async () => {
    const responsePromise =
      client.messaging10dlc.phoneNumberAssignmentByProfile.retrievePhoneNumberStatus('taskId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrievePhoneNumberStatus: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.messaging10dlc.phoneNumberAssignmentByProfile.retrievePhoneNumberStatus(
        'taskId',
        { page: 0, recordsPerPage: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('retrieveStatus', async () => {
    const responsePromise = client.messaging10dlc.phoneNumberAssignmentByProfile.retrieveStatus('taskId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
