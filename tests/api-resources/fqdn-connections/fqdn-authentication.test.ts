// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource fqdnAuthentication', () => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.fqdnConnections.fqdnAuthentication.list('fqdn_connection_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('patchAll', async () => {
    const responsePromise = client.fqdnConnections.fqdnAuthentication.patchAll('fqdn_connection_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('patchAll: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.fqdnConnections.fqdnAuthentication.patchAll(
        'fqdn_connection_id',
        {
          failover_url: 'https://failover.example.com',
          fqdn_outbound_authentication: 'ip-authentication',
          ip_authentication_method: 'p-charge-info',
          password: 'new_password',
          txt_name: 'new_txt_name',
          txt_ttl: 300,
          txt_value: 'new_txt_value',
          user_name: 'newusername',
          webhook_url: 'https://example.com',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });
});
