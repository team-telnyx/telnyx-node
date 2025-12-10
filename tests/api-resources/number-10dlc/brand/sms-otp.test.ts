// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Telnyx from 'telnyx';

const client = new Telnyx({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource smsOtp', () => {
  // Prism tests are disabled
  test.skip('getStatus', async () => {
    const responsePromise = client.number10dlc.brand.smsOtp.getStatus('OTP4B2001');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getStatus: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.number10dlc.brand.smsOtp.getStatus(
        'OTP4B2001',
        { brandId: 'B123ABC' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Telnyx.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('trigger: only required params', async () => {
    const responsePromise = client.number10dlc.brand.smsOtp.trigger('4b20019b-043a-78f8-0657-b3be3f4b4002', {
      pinSms: 'Your PIN is @OTP_PIN@',
      successSms: 'Verification successful!',
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
  test.skip('trigger: required and optional params', async () => {
    const response = await client.number10dlc.brand.smsOtp.trigger('4b20019b-043a-78f8-0657-b3be3f4b4002', {
      pinSms: 'Your PIN is @OTP_PIN@',
      successSms: 'Verification successful!',
    });
  });

  // Prism tests are disabled
  test.skip('verify: only required params', async () => {
    const responsePromise = client.number10dlc.brand.smsOtp.verify('4b20019b-043a-78f8-0657-b3be3f4b4002', {
      otpPin: '123456',
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
  test.skip('verify: required and optional params', async () => {
    const response = await client.number10dlc.brand.smsOtp.verify('4b20019b-043a-78f8-0657-b3be3f4b4002', {
      otpPin: '123456',
    });
  });
});
