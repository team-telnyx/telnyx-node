'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();

describe('DynamicEmergency', function() {
  describe('Addresses', function() {
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
        return telnyx.dynamicEmergency.addresses.list()
          .then(listResponseFn);
      });

      it('Sends the correct request [with specified auth]', function() {
        return telnyx.dynamicEmergency.addresses.list(TEST_AUTH_KEY)
          .then(listResponseFn);
      });
    });

    describe('retrieve', function() {
      it('Sends the correct request', function() {
        return telnyx.dynamicEmergency.addresses.retrieve('123').then(responseFn);
      })

      it('Sends the correct request [with specified auth]', function() {
        return telnyx.dynamicEmergency.addresses.retrieve('123', TEST_AUTH_KEY)
          .then(responseFn);
      });
    });

    describe('create', function() {
      it('Sends the correct request', function() {
        return telnyx.dynamicEmergency.addresses.create({
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
        return telnyx.dynamicEmergency.addresses.del('123').then(responseFn);
      });
    });
  });

  describe('Endpoints', function() {
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
        return telnyx.dynamicEmergency.endpoints.list()
          .then(listResponseFn);
      });

      it('Sends the correct request [with specified auth]', function() {
        return telnyx.dynamicEmergency.endpoints.list(TEST_AUTH_KEY)
          .then(listResponseFn);
      });
    });

    describe('retrieve', function() {
      it('Sends the correct request', function() {
        return telnyx.dynamicEmergency.endpoints.retrieve('123').then(responseFn);
      })

      it('Sends the correct request [with specified auth]', function() {
        return telnyx.dynamicEmergency.endpoints.retrieve('123', TEST_AUTH_KEY)
          .then(responseFn);
      });
    });

    describe('create', function() {
      it('Sends the correct request', function() {
        return telnyx.dynamicEmergency.endpoints.create({
          callback_number: '+13125550000',
          caller_name: 'Jane Doe Desk Phone',
          dynamic_emergency_address_id: '0ccc7b54-4df3-4bca-a65a-3da1ecc777f0'
        }).then(responseFn);
      });
    });

    describe('del', function() {
      it('Sends the correct request', function() {
        return telnyx.dynamicEmergency.endpoints.del('123').then(responseFn);
      });
    });
  });
});
