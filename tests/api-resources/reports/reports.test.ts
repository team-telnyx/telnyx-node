// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource reports', () => {
  // Prism tests are disabled
  test.skip('listMdrs', async () => {
    const responsePromise = client.reports.listMdrs();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listMdrs: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.reports.listMdrs(
        {
          id: 'e093fbe0-5bde-11eb-ae93-0242ac130002',
          cld: '+15551237654',
          cli: '+15551237654',
          direction: 'INBOUND',
          end_date: 'end_date',
          message_type: 'SMS',
          profile: 'My profile',
          start_date: 'start_date',
          status: 'DELIVERED',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listWdrs', async () => {
    const responsePromise = client.reports.listWdrs();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listWdrs: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.reports.listWdrs(
        {
          id: 'e093fbe0-5bde-11eb-ae93-0242ac130002',
          end_date: '2021-06-01T00:00:00Z',
          imsi: '123456',
          mcc: '204',
          mnc: '01',
          page: { number: 0, size: 0 },
          phone_number: '+12345678910',
          sim_card_id: '877f80a6-e5b2-4687-9a04-88076265720f',
          sim_group_id: 'f05a189f-7c46-4531-ac56-1460dc465a42',
          sim_group_name: 'sim name',
          sort: ['created_at'],
          start_date: '2021-05-01T00:00:00Z',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });
});
