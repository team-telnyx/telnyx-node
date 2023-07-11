'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();

describe('AuthenticationProviders Resource', function () {
  function responseFn(response) {
    expect(response.data).to.have.property('id');
    expect(response.data).to.have.property('active');
    expect(response.data).to.have.property('name');
    expect(response.data).to.have.property('short_name');
    expect(response.data).to.have.property('settings');
    expect(response.data).to.include({record_type: 'authentication_provider'});
  }

  describe('list', function () {
    function listResponseFn(response) {
      return responseFn({data: response.data[0]});
    }

    it('Sends the correct request', function () {
      return telnyx.authenticationProviders.list().then(listResponseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.authenticationProviders
        .list(TEST_AUTH_KEY)
        .then(listResponseFn);
    });
  });

  describe('create', function () {
    it('Sends the correct request', function () {
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
    it('Sends the correct request', function () {
      return telnyx.authenticationProviders.retrieve('123').then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.authenticationProviders
        .retrieve('123', TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('update', function () {
    it('Sends the correct request', function () {
      return telnyx.authenticationProviders
        .update('123', {
          short_name: 'shorty',
        })
        .then(responseFn);
    });
  });

  describe('del', function () {
    it('Sends the correct request', function () {
      return telnyx.authenticationProviders.del('123').then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.authenticationProviders
        .del('123', TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
});
