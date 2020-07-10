'use strict';

var telnyx = require('../../testUtils').getTelnyxMock();
var expect = require('chai').expect;

describe.skip('MobileOperatorNetworks Resource', function () {
  describe('list', function () {
    it('Sends the correct request', function () {
      return telnyx.mobileOperatorNetworks.list().then(function (response) {
        expect(response.data[0]).to.include({
          record_type: 'mobile_operator_network',
        });
        expect(response.data[0]).to.include.keys([
          'id',
          'tadig',
          'name',
          'mnc',
          'mcc',
          'country_code',
        ]);
      });
    });
  });
});
