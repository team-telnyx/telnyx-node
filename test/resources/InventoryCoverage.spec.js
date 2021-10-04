'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();

describe('InventoryCoverage Resource', function() {
  describe('request', function() {
    function responseFn(response) {
      expect(response.data[0]).to.have.property('number_type');
      expect(response.data[0]).to.have.property('group');
      expect(response.data[0]).to.have.property('group_type');
      expect(response.data[0]).to.have.property('coverage_type');
      expect(response.data[0]).to.have.property('phone_number_type');
      expect(response.data[0]).to.have.property('number_range');
      expect(response.data[0]).to.include({record_type: 'inventory_coverage_group'});
    }

    it('Sends the correct request', function() {
      return telnyx.inventoryCoverage.request(
        {filter: {npa: '318', nxx: '202', country_code: 'US', groupBy: 'nxx'}})
        .then(responseFn);
    })

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.inventoryCoverage.request(
        {filter: {npa: '318', nxx: '202', country_code: 'US', groupBy: 'nxx'}}, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
});
