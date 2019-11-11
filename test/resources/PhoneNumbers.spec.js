'use strict';

var telnyx = require('../../testUtils').getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = 'KEY187557EC22404DB39975C43ACE661A58_9QdDI7XD5bvyahtaWx1YQo';

describe('PhoneNumbers Resource', function() {
  describe('update', function() {
    it('Sends the correct request', function() {
      return telnyx.phoneNumbers.update('123', {status: 'active'})
        .then(function(response) {
          expect(response.data).to.include({id: '123', phone_number: '+19705555098', record_type: 'phone_number'});
        })
    });
  });

  describe('list', function() {
    function responseFn(response) {
      expect(response.data[0]).to.have.property('id');
      expect(response.data[0]).to.have.property('phone_number');
      expect(response.data[0]).to.include({record_type: 'phone_number'});
    }

    it('Sends the correct request', function() {
      return telnyx.phoneNumbers.list()
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.phoneNumbers.list(TEST_AUTH_KEY)
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
        return telnyx.phoneNumbers.retrieveVoiceSettings('123')
          .then(responseFn);
      });

      it('Sends the correct request [with specified auth]', function() {
        return telnyx.phoneNumbers.retrieveVoiceSettings('123', TEST_AUTH_KEY)
          .then(responseFn);
      });
    });

    describe('updateVoiceSettings', function() {
      it('Sends the correct request', function() {
        return telnyx.phoneNumbers.updateVoiceSettings('123', {
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
        return telnyx.phoneNumbers.retrieveMessagingSettings('123')
          .then(responseFn);
      });

      it('Sends the correct request [with specified auth]', function() {
        return telnyx.phoneNumbers.retrieveMessagingSettings('123', TEST_AUTH_KEY)
          .then(responseFn);
      });
    });

    describe('updateMessagingSettings', function() {
      it('Sends the correct request', function() {
        return telnyx.phoneNumbers.updateMessagingSettings('123', {
          messaging_product: 'P2P',
        })
          .then(responseFn);
      });
    });
  });
});
