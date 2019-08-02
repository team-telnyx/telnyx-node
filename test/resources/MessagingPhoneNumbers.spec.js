'use strict';

var telnyx = require('../../testUtils').getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = 'KEY187557EC22404DB39975C43ACE661A58_9QdDI7XD5bvyahtaWx1YQo';

describe('MessagingPhoneNumbers Resource', function() {
  describe('retrieve', function() {
    function responseFn(response) {
      expect(response.data).to.include({id: '123', phone_number: '123', record_type: 'messaging_phone_number'});
    }

    it('Sends the correct request', function() {
      return telnyx.messagingPhoneNumbers.retrieve('123')
        .then(function(response) {
          expect(response.data).to.include(responseFn);
        });
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.messagingPhoneNumbers.retrieve('123', TEST_AUTH_KEY)
        .then(function(response) {
          expect(response.data).to.include(responseFn);
        });
    });
  });

  describe('list', function() {
    function responseFn(response) {
      expect(response.data[0]).to.have.property('id');
      expect(response.data[0]).to.have.property('phone_number');
      expect(response.data[0]).to.include({record_type: 'messaging_phone_number'});
    }

    it('Sends the correct request', function() {
      return telnyx.messagingPhoneNumbers.list()
        .then(responseFn);
    });
    it('Sends the correct request [with specified auth]', function() {
      return telnyx.messagingPhoneNumbers.list(TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('update', function() {
    it('Sends the correct request', function() {
      return telnyx.messagingPhoneNumbers.update('123', {
        organization_id: '3fa85f64-5717-4562-b331-2c963f66afa6'
      })
        .then(function(response) {
          expect(response.data).to.include({
            id: '123',
            phone_number: '123',
            organization_id: '3fa85f64-5717-4562-b331-2c963f66afa6',
            record_type: 'messaging_phone_number',
          });
        });
    });
  });
});
