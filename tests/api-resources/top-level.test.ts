// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx, { toFile } from 'telnyx-node';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('top level methods', () => {
  // Prism tests are disabled
  test.skip('createBucket', async () => {
    const responsePromise = client.createBucket('mybucket');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('createBucket: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.createBucket(
        'mybucket',
        { LocationConstraint: 'LocationConstraint' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('deleteBucket', async () => {
    const responsePromise = client.deleteBucket('bucketName');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('deleteObject: only required params', async () => {
    const responsePromise = client.deleteObject('x', { bucketName: 'bucketName' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('deleteObject: required and optional params', async () => {
    const response = await client.deleteObject('x', { bucketName: 'bucketName' });
  });

  // Prism tests are disabled
  test.skip('deleteObjects: only required params', async () => {
    const responsePromise = client.deleteObjects('bucketName', { delete: true, body: [{}] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('deleteObjects: required and optional params', async () => {
    const response = await client.deleteObjects('bucketName', { delete: true, body: [{ Key: 'Key' }] });
  });

  test('getObject: required and optional params', async () => {
    const response = await client.getObject('x', { bucketName: 'bucketName', uploadId: 'uploadId' });
  });

  // Prism tests are disabled
  test.skip('listBuckets', async () => {
    const responsePromise = client.listBuckets();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listObjects', async () => {
    const responsePromise = client.listObjects('xxxx');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listObjects: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.listObjects('xxxx', { 'list-type': 2 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('putObject: only required params', async () => {
    const responsePromise = client.putObject('x', {
      bucketName: 'bucketName',
      body: await toFile(Buffer.from('# my file contents'), 'README.md'),
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
  test.skip('putObject: required and optional params', async () => {
    const response = await client.putObject('x', {
      bucketName: 'bucketName',
      body: await toFile(Buffer.from('# my file contents'), 'README.md'),
      partNumber: 'partNumber',
      uploadId: 'uploadId',
    });
  });
});
