'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();
var TEST_UUID = '123e4567-e89b-12d3-a456-426614174000';

describe('PhoneNumbers Resource', function() {
  function responseFn(response) {
    expect(response.data).to.have.property('id');
    expect(response.data).to.have.property('phone_number');
    expect(response.data).to.include({record_type: 'phone_number'});
  }

  describe('update', function() {
    it('Sends the correct request', function() {
      return telnyx.phoneNumbers.update(TEST_UUID, {status: 'active'})
        .then(responseFn)
    });
  });

  describe('del', function() {
    it('Sends the correct request', function() {
      return telnyx.phoneNumbers.del(TEST_UUID)
        .then(responseFn);
    });
  });

  describe('list', function() {
    function listResponseFn(response) {
      return responseFn({data: response.data[0]});
    }

    it('Sends the correct request', function() {
      return telnyx.phoneNumbers.list()
        .then(listResponseFn);
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.phoneNumbers.list(TEST_AUTH_KEY)
        .then(listResponseFn);
    });
  });

  describe('retrieve', function() {
    it('Sends the correct request', function() {
      return telnyx.phoneNumbers.retrieve(TEST_UUID)
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.phoneNumbers.retrieve(TEST_UUID, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('setEmergencySettings', function() {
    function responseFn(response) {
      expect(response.data).to.have.property('id');
      expect(response.data).to.include({record_type: 'voice_settings'});
      expect(response.data).to.have.property('emergency');
      expect(response.data.emergency).to.include({emergency_enabled: true, emergency_address_id: '1315261609962112019'});
    }

    it('Sends the correct request', function() {
      return telnyx.phoneNumbers.setEmergencySettings(TEST_UUID, {emergency_enabled: true, emergency_address_id: '1315261609962112019'})
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.phoneNumbers.setEmergencySettings(TEST_UUID, {emergency_enabled: true, emergency_address_id: '1315261609962112019'}, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('Voice methods', function() {
    function responseFn(response) {
      expect(response.data).to.have.property('id');
      expect(response.data).to.have.property('translated_number');
      expect(response.data).to.have.property('connection_id');
      expect(response.data).to.include({record_type: 'voice_settings'});
    }

    describe('retrieveVoiceSettings', function() {
      it('Sends the correct request', function() {
        return telnyx.phoneNumbers.retrieveVoiceSettings(TEST_UUID)
          .then(responseFn);
      });

      it('Sends the correct request [with specified auth]', function() {
        return telnyx.phoneNumbers.retrieveVoiceSettings(TEST_UUID, TEST_AUTH_KEY)
          .then(responseFn);
      });
    });

    describe('updateVoiceSettings', function() {
      it('Sends the correct request', function() {
        return telnyx.phoneNumbers.updateVoiceSettings(TEST_UUID, {
          tech_prefix_enabled: true,
        })
          .then(responseFn);
      });
    });
  });

  describe('Messaging methods', function() {
    function responseFn(response) {
      expect(response.data).to.have.property('id');
      expect(response.data).to.have.property('phone_number');
      expect(response.data).to.have.property('messaging_profile_id');
      expect(response.data).to.include({record_type: 'messaging_settings'});
    }

    describe('retrieveMessagingSettings', function() {
      it('Sends the correct request', function() {
        return telnyx.phoneNumbers.retrieveMessagingSettings(TEST_UUID)
          .then(responseFn);
      });

      it('Sends the correct request [with specified auth]', function() {
        return telnyx.phoneNumbers.retrieveMessagingSettings(TEST_UUID, TEST_AUTH_KEY)
          .then(responseFn);
      });
    });

    describe('updateMessagingSettings', function() {
      it('Sends the correct request', function() {
        return telnyx.phoneNumbers.updateMessagingSettings(TEST_UUID, {
          messaging_product: 'P2P',
        })
          .then(responseFn);
      });
    });
  });
});
