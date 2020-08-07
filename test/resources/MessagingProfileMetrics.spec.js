'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();

describe('MessagingProfileMetrics Resource', function() {
  describe('list', function() {
    function responseFn(response) {
      expect(response.data[0]).to.have.property('inbound');
      expect(response.data[0]).to.have.property('outbound');
      expect(response.data[0]).to.have.property('phone_numbers');
      expect(response.data[0]).to.have.property('messaging_profile_id');
      expect(response.data[0]).to.include({record_type: 'messaging_profile_metrics'});
    }

    it('Sends the correct request', function() {
      return telnyx.messagingProfileMetrics.list()
        .then(responseFn);
    });
    it('Sends the correct request [with specified auth]', function() {
      return telnyx.messagingProfileMetrics.list(TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
});
