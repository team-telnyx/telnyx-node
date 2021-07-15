'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();

var credentialCreateData = {
  connection_id: '1474011037387720344',
};

describe('TelephonyCredentials Resource', function () {
  describe('create', function () {
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

  describe('retrieve', function () {
    function responseFn(response) {
      expect(response.data).to.not.be.null
    }

    it('Sends the correct request', function () {
      return telnyx.telephonyCredentials.retrieve('9fb9e45f-958a-4d9f-81ff-735ffbcaa133').then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.telephonyCredentials.retrieve('9fb9e45f-958a-4d9f-81ff-735ffbcaa133', TEST_AUTH_KEY).then(responseFn);
    });
  });
});
