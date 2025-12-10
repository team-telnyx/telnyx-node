// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource phoneNumberCampaigns', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.number10dlc.phoneNumberCampaigns.create({
      campaignId: '4b300178-131c-d902-d54e-72d90ba1620j',
      phoneNumber: '+18005550199',
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
    const response = await client.number10dlc.phoneNumberCampaigns.create({
      campaignId: '4b300178-131c-d902-d54e-72d90ba1620j',
      phoneNumber: '+18005550199',
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.number10dlc.phoneNumberCampaigns.retrieve('phoneNumber');
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
    const responsePromise = client.number10dlc.phoneNumberCampaigns.update('phoneNumber', {
      campaignId: '4b300178-131c-d902-d54e-72d90ba1620j',
      body_phoneNumber: '+18005550199',
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
  test.skip('update: required and optional params', async () => {
    const response = await client.number10dlc.phoneNumberCampaigns.update('phoneNumber', {
      campaignId: '4b300178-131c-d902-d54e-72d90ba1620j',
      body_phoneNumber: '+18005550199',
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.number10dlc.phoneNumberCampaigns.list();
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
      client.number10dlc.phoneNumberCampaigns.list(
        {
          filter: {
            tcr_brand_id: 'BRANDID',
            tcr_campaign_id: 'CAMPID3',
            telnyx_brand_id: 'f3575e15-32ce-400e-a4c0-dd78800c20b0',
            telnyx_campaign_id: 'f3575e15-32ce-400e-a4c0-dd78800c20b0',
          },
          page: 0,
          recordsPerPage: 0,
          sort: 'assignmentStatus',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.number10dlc.phoneNumberCampaigns.delete('phoneNumber');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
