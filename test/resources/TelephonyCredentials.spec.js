'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();

var credentialCreateData = {
  connection_id: '1474011037387720344',
};

var retrieveCredentialId = '456c215ade3-0d39-418e-94be-c5f780760199';

describe('TelephonyCredentials Resource', function () {
  function responseFn(response) {
    expect(response.data).to.have.property('created_at');
    expect(response.data).to.have.property('expired');
    expect(response.data).to.have.property('expires_at');
    expect(response.data).to.have.property('id');
    expect(response.data).to.have.property('name');
    expect(response.data).to.have.property('record_type');
    expect(response.data).to.have.property('resource_id');
    expect(response.data).to.have.property('sip_password');
    expect(response.data).to.have.property('sip_username');
  }

  describe('create', function() {
    it('Sends the correct request', function () {
      return telnyx.telephonyCredentials.create(credentialCreateData).then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.telephonyCredentials.create(credentialCreateData, TEST_AUTH_KEY).then(responseFn);
    });

    it('Sends the correct request [with specified auth in options]', function () {
      return telnyx.telephonyCredentials
        .create(credentialCreateData, {api_key: TEST_AUTH_KEY})
        .then(responseFn);
    });
  });

  describe('retrieve / generateAccessTokenFromCredential', function () {
    function responseFn(response) {
      expect(response.data).to.not.be.null
    }

    describe('retrieve', function () {
      it('Sends the correct request', function () {
        return telnyx.telephonyCredentials.retrieve('9fb9e45f-958a-4d9f-81ff-735ffbcaa133').then(responseFn);
      });

      it('Sends the correct request [with specified auth]', function () {
        return telnyx.telephonyCredentials.retrieve('9fb9e45f-958a-4d9f-81ff-735ffbcaa133', TEST_AUTH_KEY).then(responseFn);
      });
    });

    describe('generateAccessTokenFromCredential', function () {
      it('Sends the correct request', function () {
        return telnyx.telephonyCredentials.generateAccessTokenFromCredential('9fb9e45f-958a-4d9f-81ff-735ffbcaa133').then(responseFn);
      });

      it('Sends the correct request [with specified auth]', function () {
        return telnyx.telephonyCredentials.generateAccessTokenFromCredential('9fb9e45f-958a-4d9f-81ff-735ffbcaa133', TEST_AUTH_KEY).then(responseFn);
      });
    });
  });

  describe('retrieveCredential', function () {
    it('Sends the correct request', function () {
      return telnyx.telephonyCredentials.retrieveCredential(retrieveCredentialId).then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.telephonyCredentials.retrieveCredential(retrieveCredentialId, TEST_AUTH_KEY).then(responseFn);
    });

    it('Sends the correct request [with specified auth in options]', function () {
      return telnyx.telephonyCredentials
        .retrieveCredential(retrieveCredentialId, {api_key: TEST_AUTH_KEY})
        .then(responseFn);
    });
  });

  describe('update', function () {
    var updateCredentialData = {name: 'knox'};

    function responseFn(response) {
      expect(response.data).to.have.property('name');
      expect(response.data.name).to.equal(updateCredentialData.name);
    }

    it('Sends the correct request', function () {
      return telnyx.telephonyCredentials.update(retrieveCredentialId, updateCredentialData).then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.telephonyCredentials.update(retrieveCredentialId, updateCredentialData, TEST_AUTH_KEY).then(responseFn);
    });

    it('Sends the correct request [with specified auth in options]', function () {
      return telnyx.telephonyCredentials
        .update(retrieveCredentialId, updateCredentialData, {api_key: TEST_AUTH_KEY})
        .then(responseFn);
    });
  });

  describe('list', function () {
    function responseFn(response) {
      expect(response.data[0]).to.have.property('id');
      expect(response.data[0]).to.have.property('sip_password');
      expect(response.data[0]).to.have.property('sip_username');
    }

    it('Sends the correct request', function () {
      return telnyx.telephonyCredentials.list().then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.telephonyCredentials.list(TEST_AUTH_KEY).then(responseFn);
    });
  });

  describe('del', function () {
    it('Sends the correct request', function () {
      return telnyx.telephonyCredentials
        .create(credentialCreateData)
        .then(function (response) {
          const tc = response.data;
          return tc.del().then(responseFn);
        });
    });
    it('Sends the correct request [with specified auth]', function () {
      return telnyx.telephonyCredentials.retrieveCredential('123').then(function (response) {
        const tc = response.data;
        return tc.del(TEST_AUTH_KEY).then(responseFn);
      });
    });
  });

});
