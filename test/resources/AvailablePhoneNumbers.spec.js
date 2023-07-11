'use strict';

var telnyx = require('../../testUtils').getTelnyxMock();
var expect = require('chai').expect;

describe('AvailablePhoneNumbers Resource', function () {
  describe('list', function () {
    it('Sends the correct request', function () {
      return telnyx.availablePhoneNumbers.list().then(function (response) {
        expect(response.data[0]).to.have.property('phone_number');
        expect(response.data[0]).to.have.property('cost_information');
        expect(response.data[0]).to.have.property('region_information');
        expect(response.data[0]).to.include({
          record_type: 'available_phone_number',
        });
      });
    });
  });
});
