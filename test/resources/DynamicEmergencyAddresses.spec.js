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
    it('Sends the correct request', function() {
      return telnyx.dynamicEmergencyAddresses.retrieve('123').then(responseFn);
    })

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.dynamicEmergencyAddresses.retrieve('123', TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('create', function() {
    it('Sends the correct request', function() {
      return telnyx.dynamicEmergencyAddresses.create({
        administrative_area: 'IL',
        house_number: '311',
        locality: 'Chicago',
        postal_code: '60654',
        street_name: 'Superior',
        country_code: 'US'
      }).then(responseFn);
    });
  });

  describe('del', function() {
    it('Sends the correct request', function() {
      return telnyx.dynamicEmergencyAddresses.del('123').then(responseFn);
    });
  });
});
