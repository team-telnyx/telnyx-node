// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource dialogflowConnections', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.dialogflowConnections.create('connection_id', {
      service_account: {
        type: 'bar',
        project_id: 'bar',
        private_key_id: 'bar',
        private_key: 'bar',
        client_email: 'bar',
        client_id: 'bar',
        auth_uri: 'bar',
        token_uri: 'bar',
        auth_provider_x509_cert_url: 'bar',
        client_x509_cert_url: 'bar',
      },
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
    const response = await client.dialogflowConnections.create('connection_id', {
      service_account: {
        type: 'bar',
        project_id: 'bar',
        private_key_id: 'bar',
        private_key: 'bar',
        client_email: 'bar',
        client_id: 'bar',
        auth_uri: 'bar',
        token_uri: 'bar',
        auth_provider_x509_cert_url: 'bar',
        client_x509_cert_url: 'bar',
      },
      conversation_profile_id: 'a-VMHLWzTmKjiJw5S6O0-w',
      dialogflow_api: 'cx',
      environment: 'development',
      location: 'global',
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.dialogflowConnections.retrieve('connection_id');
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
    const responsePromise = client.dialogflowConnections.update('connection_id', {
      service_account: {
        type: 'bar',
        project_id: 'bar',
        private_key_id: 'bar',
        private_key: 'bar',
        client_email: 'bar',
        client_id: 'bar',
        auth_uri: 'bar',
        token_uri: 'bar',
        auth_provider_x509_cert_url: 'bar',
        client_x509_cert_url: 'bar',
      },
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
    const response = await client.dialogflowConnections.update('connection_id', {
      service_account: {
        type: 'bar',
        project_id: 'bar',
        private_key_id: 'bar',
        private_key: 'bar',
        client_email: 'bar',
        client_id: 'bar',
        auth_uri: 'bar',
        token_uri: 'bar',
        auth_provider_x509_cert_url: 'bar',
        client_x509_cert_url: 'bar',
      },
      conversation_profile_id: 'a-VMHLWzTmKjiJw5S6O0-w',
      dialogflow_api: 'cx',
      environment: 'development',
      location: 'global',
    });
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.dialogflowConnections.delete('connection_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
