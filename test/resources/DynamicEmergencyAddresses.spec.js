'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();

describe('DynamicEmergencyAddresses Resource', function() {
  function responseFn(response) {
    expect(response.data).to.have.property('id');
    expect(response.data).to.have.property('country_code');
    expect(response.data).to.have.property('locality');
    expect(response.data).to.include({record_type: 'dynamic_emergency_address'});
  }

  describe('list', function() {
    function listResponseFn(response) {
      return responseFn({data: response.data[0]});
    }

    it('Sends the correct request', function() {
      return telnyx.dynamicEmergencyAddresses.list()
        .then(listResponseFn);
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.dynamicEmergencyAddresses.list(TEST_AUTH_KEY)
        .then(listResponseFn);
    });
  });

  describe('retrieve', function() {
    function responseFn(response) {
      expect(response.data).to.include({id: '0ccc7b54-4df3-4bca-a65a-3da1ecc777f1'});
    }

    it('Sends the correct request', function() {
      return telnyx.dynamicEmergencyAddresses.retrieve('0ccc7b54-4df3-4bca-a65a-3da1ecc777f1').then(responseFn);
    })

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.dynamicEmergencyAddresses.retrieve('0ccc7b54-4df3-4bca-a65a-3da1ecc777f1', TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
});
