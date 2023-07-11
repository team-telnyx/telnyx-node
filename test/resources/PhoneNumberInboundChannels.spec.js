'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();

describe('Phone Numbers Inbound Channels', function () {
  describe('retrieve', function () {
    function responseFn(response) {
      expect(response.data).to.include({
        record_type: 'inbound_channels',
      });
    }

    it('Sends the correct request', function () {
      return telnyx.phoneNumbersInboundChannels.retrieve().then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.phoneNumbersInboundChannels
        .retrieve(TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('update', function () {
    function responseFn(response) {
      if (response.data) {
        expect(response.data).to.include({channels: 7});
        expect(response.data).to.include({record_type: 'inbound_channels'});
      }
    }

    it('Sends the correct request', function () {
      return telnyx.phoneNumbersInboundChannels
        .update({channels: 8})
        .then(responseFn);
    });
    it('Sends the correct request [with specified auth]', function () {
      return telnyx.phoneNumbersInboundChannels
        .update({channels: 8}, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
});
