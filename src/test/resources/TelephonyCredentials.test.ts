import {
  type ResponsePayload,
  type ResponsePayloadList,
  utils as testUtils,
} from '../utils';
const telnyx = testUtils.getTelnyxMock();

const TEST_AUTH_KEY = testUtils.getUserTelnyxKey();

const credentialCreateData = {
  connection_id: '1474011037387720344',
};

const retrieveCredentialId = '456c215ade3-0d39-418e-94be-c5f780760199';

describe('TelephonyCredentials Resource', function () {
  function responseFn(response: ResponsePayload) {
    expect(response.data).toHaveProperty('created_at');
    expect(response.data).toHaveProperty('expired');
    expect(response.data).toHaveProperty('expires_at');
    expect(response.data).toHaveProperty('id');
    expect(response.data).toHaveProperty('name');
    expect(response.data).toHaveProperty('record_type');
    expect(response.data).toHaveProperty('resource_id');
    expect(response.data).toHaveProperty('sip_password');
    expect(response.data).toHaveProperty('sip_username');
  }

  describe('create', function () {
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.telephonyCredentials
        .create(credentialCreateData)
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.telephonyCredentials
        .create(credentialCreateData, TEST_AUTH_KEY)
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth in options]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.telephonyCredentials
        .create(credentialCreateData, {api_key: TEST_AUTH_KEY})
        .then(responseFn);
    });
  });

  describe('retrieve', function () {
    function responseFn(response: ResponsePayload) {
      expect(response.data).not.toBeNull();
    }

    describe('retrieve', function () {
      test('Sends the correct request', function () {
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        return telnyx.telephonyCredentials
          .retrieve('9fb9e45f-958a-4d9f-81ff-735ffbcaa133')
          .then(responseFn);
      });

      test('Sends the correct request [with specified auth]', function () {
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        return telnyx.telephonyCredentials
          .retrieve('9fb9e45f-958a-4d9f-81ff-735ffbcaa133', TEST_AUTH_KEY)
          .then(responseFn);
      });
    });
  });

  describe('retrieveCredential', function () {
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.telephonyCredentials
        .retrieveCredential(retrieveCredentialId)
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.telephonyCredentials
        .retrieveCredential(retrieveCredentialId, TEST_AUTH_KEY)
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth in options]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.telephonyCredentials
        .retrieveCredential(retrieveCredentialId, {api_key: TEST_AUTH_KEY})
        .then(responseFn);
    });
  });

  describe('update', function () {
    const updateCredentialData = {name: 'knox'};

    function responseFn(response: ResponsePayload) {
      expect(response.data).toHaveProperty('name');
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.telephonyCredentials
        .update(retrieveCredentialId, updateCredentialData)
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.telephonyCredentials
        .update(retrieveCredentialId, updateCredentialData, TEST_AUTH_KEY)
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth in options]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.telephonyCredentials
        .update(retrieveCredentialId, updateCredentialData, {
          api_key: TEST_AUTH_KEY,
        })
        .then(responseFn);
    });
  });

  describe('list', function () {
    function responseFn(response: ResponsePayloadList) {
      expect(response.data[0]).toHaveProperty('id');
      expect(response.data[0]).toHaveProperty('sip_password');
      expect(response.data[0]).toHaveProperty('sip_username');
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.telephonyCredentials.list().then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.telephonyCredentials.list(TEST_AUTH_KEY).then(responseFn);
    });
  });

  describe('del', function () {
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.telephonyCredentials
        .create(credentialCreateData)
        .then(function (response: ResponsePayload) {
          const tc = response.data;
          // @ts-expect-error TODO: import .d.ts files under src/test folder
          return tc.del().then(responseFn);
        });
    });
    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.telephonyCredentials
        .retrieveCredential('123')
        .then(function (response: ResponsePayload) {
          const tc = response.data;
          // @ts-expect-error TODO: import .d.ts files under src/test folder
          return tc.del(TEST_AUTH_KEY).then(responseFn);
        });
    });
  });
});
