'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();
var TEST_UUID = '123e4567-e89b-12d3-a456-426614174000';

describe('MessagingShortCodes Resource', function() {
  function responseFn(response) {
    expect(response.data).to.include({
      record_type: 'short_code'
    });
    expect(response.data).to.have.property('messaging_profile_id');
  }

  describe('retrieve', function() {
    it('Sends the correct request', function() {
      return telnyx.messagingShortCodes.retrieve(TEST_UUID)
        .then(responseFn)
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.messagingShortCodes.retrieve(TEST_UUID, TEST_AUTH_KEY)
        .then(responseFn)
    });
  });

  describe('update', function() {
    it('Sends the correct request', function() {
      return telnyx.messagingShortCodes.update(TEST_UUID, {messaging_profile_id: '12345'})
        .then(responseFn);
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
