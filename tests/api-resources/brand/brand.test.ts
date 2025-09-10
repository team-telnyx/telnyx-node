// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource brand', () => {
  test('create: only required params', async () => {
    const responsePromise = client.brand.create({
      country: 'US',
      displayName: 'ABC Mobile',
      email: 'email',
      entityType: 'PRIVATE_PROFIT',
      vertical: 'TECHNOLOGY',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.brand.create({
      country: 'US',
      displayName: 'ABC Mobile',
      email: 'email',
      entityType: 'PRIVATE_PROFIT',
      vertical: 'TECHNOLOGY',
      businessContactEmail: 'name@example.com',
      city: 'New York',
      companyName: 'ABC Inc.',
      ein: '111111111',
      firstName: 'John',
      ipAddress: 'ipAddress',
      isReseller: true,
      lastName: 'Smith',
      mobilePhone: '+12024567890',
      mock: true,
      phone: '+12024567890',
      postalCode: '10001',
      state: 'NY',
      stockExchange: 'NASDAQ',
      stockSymbol: 'ABC',
      street: '123',
      webhookFailoverURL: 'https://webhook.com/9010a453-4df8-4be6-a551-1070892888d6',
      webhookURL: 'https://webhook.com/67ea78a8-9f32-4d04-b62d-f9502e8e5f93',
      website: 'http://www.abcmobile.com',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.brand.retrieve('brandId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: only required params', async () => {
    const responsePromise = client.brand.update('brandId', {
      country: 'US',
      displayName: 'ABC Mobile',
      email: 'email',
      entityType: 'PRIVATE_PROFIT',
      vertical: 'TECHNOLOGY',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.brand.update('brandId', {
      country: 'US',
      displayName: 'ABC Mobile',
      email: 'email',
      entityType: 'PRIVATE_PROFIT',
      vertical: 'TECHNOLOGY',
      altBusiness_id: 'altBusiness_id',
      altBusinessIdType: 'NONE',
      businessContactEmail: 'name@example.com',
      city: 'New York',
      companyName: 'ABC Inc.',
      ein: '111111111',
      firstName: 'John',
      identityStatus: 'VERIFIED',
      ipAddress: 'ipAddress',
      isReseller: true,
      lastName: 'Smith',
      phone: '+12024567890',
      postalCode: '10001',
      state: 'NY',
      stockExchange: 'NASDAQ',
      stockSymbol: 'ABC',
      street: '123',
      webhookFailoverURL: 'https://webhook.com/9010a453-4df8-4be6-a551-1070892888d6',
      webhookURL: 'https://webhook.com/67ea78a8-9f32-4d04-b62d-f9502e8e5f93',
      website: 'http://www.abcmobile.com',
    });
  });

  test('list', async () => {
    const responsePromise = client.brand.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.brand.list(
        {
          brandId: '826ef77a-348c-445b-81a5-a9b13c68fbfe',
          country: 'country',
          displayName: 'displayName',
          entityType: 'entityType',
          page: 1,
          recordsPerPage: 0,
          sort: 'assignedCampaignsCount',
          state: 'state',
          tcrBrandId: 'BBAND1',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.brand.delete('brandId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getFeedback', async () => {
    const responsePromise = client.brand.getFeedback('brandId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('resend2faEmail', async () => {
    const responsePromise = client.brand.resend2faEmail('brandId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('revet', async () => {
    const responsePromise = client.brand.revet('brandId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
