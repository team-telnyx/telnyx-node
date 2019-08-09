'use strict';

var telnyx = require('../../testUtils').getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = 'KEY187557EC22404DB39975C43ACE661A58_9QdDI7XD5bvyahtaWx1YQo';

describe('MessagingShortCodes Resource', function() {
  describe('retrieve', function() {
    function responseFn(response) {
      expect(response.data).to.include({
        id: '123',
        messaging_profile_id: '123',
        record_type: 'short_code'
      });
    }
    it('Sends the correct request', function() {
      return telnyx.messagingShortCodes.retrieve('123')
        .then(responseFn)
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.messagingShortCodes.retrieve('123', TEST_AUTH_KEY)
        .then(responseFn)
    });
  });

  describe('update', function() {
    it('Sends the correct request', function() {
      return telnyx.messagingShortCodes.update('123', {short_code: '54321'})
        .then(function(response) {
          expect(response.data).to.include({
            id: '123',
            short_code: '54321',
            record_type: 'short_code'
          });
        })
    });
  });

  describe('list', function() {
    function responseFn(response) {
      expect(response.data[0]).to.have.property('id');
      expect(response.data[0]).to.have.property('short_code');
      expect(response.data[0]).to.include({record_type: 'short_code'});
    }

    it('Sends the correct request', function() {
      return telnyx.messagingShortCodes.list()
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.messagingShortCodes.list(TEST_AUTH_KEY)
        .then(responseFn)
    });
  });
});
