'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();
var TEST_UUID = '123e4567-e89b-12d3-a456-426614174000';

describe('OtaUpdates Resource', function() {
  function responseFn(response) {
    expect(response.data).to.include.keys(['id', 'sim_card_id', 'status', 'settings']);
    expect(response.data).to.include({
      record_type: 'ota_update',
      type: 'sim_card_network_preferences'
    });
  }

  describe('retrieve', function() {
    it('Sends the correct request', function() {
      return telnyx.otaUpdates.retrieve(TEST_UUID)
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.otaUpdates.retrieve(TEST_UUID, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('list', function() {
    function responseFn(response) {
      expect(response.data[0]).to.include.keys(['id', 'sim_card_id', 'status']);
      expect(response.data[0]).to.include({
        record_type: 'ota_update',
        type: 'sim_card_network_preferences'
      });
    }

    it('Sends the correct request', function() {
      return telnyx.otaUpdates.list()
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.otaUpdates.list(TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
});
