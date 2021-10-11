'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();

describe('DynamicEmergencyEndpoints Resource', function() {
  function responseFn(response) {
    expect(response.data).to.have.property('id');
    expect(response.data).to.have.property('callback_number');
    expect(response.data).to.have.property('caller_name');
    expect(response.data).to.have.property('dynamic_emergency_address_id');
    expect(response.data).to.include({record_type: 'dynamic_emergency_endpoint'});
  }

  describe('list', function() {
    function listResponseFn(response) {
      return responseFn({data: response.data[0]});
    }

    it('Sends the correct request', function() {
      return telnyx.dynamicEmergencyEndpoints.list()
        .then(listResponseFn);
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.dynamicEmergencyEndpoints.list(TEST_AUTH_KEY)
        .then(listResponseFn);
    });
  });

  describe('retrieve', function() {
    it('Sends the correct request', function() {
      return telnyx.dynamicEmergencyEndpoints.retrieve('123').then(responseFn);
    })

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.dynamicEmergencyEndpoints.retrieve('123', TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('create', function() {
    it('Sends the correct request', function() {
      return telnyx.dynamicEmergencyEndpoints.create({
        callback_number: '+13125550000',
        caller_name: 'Jane Doe Desk Phone',
        dynamic_emergency_address_id: '0ccc7b54-4df3-4bca-a65a-3da1ecc777f0'
      }).then(responseFn);
    });
  });

  describe('del', function() {
    it('Sends the correct request', function() {
      return telnyx.dynamicEmergencyEndpoints.del('123').then(responseFn);
    });
  });
});
