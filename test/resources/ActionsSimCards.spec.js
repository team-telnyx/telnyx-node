'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();

describe('SimCards Actions Resource', function () {
  const registerData = {
    registration_codes: ['2578318790'],
    sim_card_group_id: '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
  };

  const bulkData = {
    mobile_operator_networks_preferences: [
      {
        mobile_operator_network_id: '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
        priority: 0,
      },
    ],
    sim_card_ids: [
      '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
      '6b14e151-8493-4fa1-8664-1cc4e6d14158',
    ],
  };

  function responseFnRegister(response) {
    expect(response.data[0]).to.include({
      record_type: 'sim_card',
    });
    expect(response.data[0]).to.have.property('id');
    expect(response.data[0]).to.have.property('status');
    expect(response.data[0]).to.have.property('iccid');
    expect(response.data[0]).to.have.property('sim_card_group_id');
  }

  function responseFnBulk(response) {
    expect(response.data[0]).to.include({
      record_type: 'sim_card_network_preferences',
    });
    expect(response.data[0]).to.have.property(
      'mobile_operator_networks_preferences'
    );
    expect(response.data[0]).to.have.property('sim_card_id');
  }

  describe('register', function () {
    it('Sends the correct request', function () {
      return telnyx.actions.simCards
        .register(registerData)
        .then(responseFnRegister);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.actions.simCards
        .register(registerData, TEST_AUTH_KEY)
        .then(responseFnRegister);
    });
  });

  describe('bulkNetworkPreferences', function () {
    it('Sends the correct request', function () {
      return telnyx.actions.simCards
        .bulkNetworkPreferences(bulkData)
        .then(responseFnBulk);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.actions.simCards
        .bulkNetworkPreferences(bulkData, TEST_AUTH_KEY)
        .then(responseFnBulk);
    });
  });
});
