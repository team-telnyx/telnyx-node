import {type ResponsePayloadList, utils as testUtils} from '../utils';
const telnyx = testUtils.getTelnyxMock();

const TEST_AUTH_KEY = testUtils.getUserTelnyxKey();

describe('AuthenticationProviders Resource', function () {
  function responseFn(response: ResponsePayloadList) {
    expect(response.data).toHaveProperty('id');
    expect(response.data).toHaveProperty('active');
    expect(response.data).toHaveProperty('name');
    expect(response.data).toHaveProperty('short_name');
    expect(response.data).toHaveProperty('settings');
    expect(response.data).toMatchObject({
      record_type: 'authentication_provider',
    });
  }

  describe('list', function () {
    function listResponseFn(response: ResponsePayloadList) {
      expect(response.data[0]).toHaveProperty('id');
      expect(response.data[0]).toHaveProperty('active');
      expect(response.data[0]).toHaveProperty('name');
      expect(response.data[0]).toHaveProperty('short_name');
      expect(response.data[0]).toHaveProperty('settings');
      expect(response.data[0]).toMatchObject({
        record_type: 'authentication_provider',
      });
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.authenticationProviders.list().then(listResponseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.authenticationProviders
        .list(TEST_AUTH_KEY)
        .then(listResponseFn);
    });
  });

  describe('create', function () {
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.authenticationProviders
        .create({
          name: 'Okta',
          short_name: 'myorg',
          settings: {
            assertion_consumer_service_url:
              'https://api.telnyx.com/sso/saml/auth/myorg',
            idp_cert_fingerprint:
              '13:38:C7:BB:C9:FF:4A:70:38:3A:E3:D9:5C:CD:DB:2E:50:1E:80:A7',
            idp_cert_fingerprint_algorithm: 'sha256',
            idp_entity_id: 'https://myorg.myidp.com/saml/metadata',
            idp_sso_target_url:
              'https://myorg.myidp.com/trust/saml2/http-post/sso',
            name_identifier_format: 'urn:oasis:names:tc:SAML:1.1:nameid-format',
            service_provider_entity_id:
              'https://api.telnyx.com/sso/saml/metadata/myorg',
          },
        })
        .then(responseFn);
    });
  });

  describe('retrieve', function () {
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.authenticationProviders.retrieve('123').then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.authenticationProviders
        .retrieve('123', TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('update', function () {
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.authenticationProviders
        .update('123', {
          short_name: 'shorty',
        })
        .then(responseFn);
    });
  });

  describe('del', function () {
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.authenticationProviders.del('123').then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.authenticationProviders
        .del('123', TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
});
