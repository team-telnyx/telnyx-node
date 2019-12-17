'use strict';

var telnyx = require('../../testUtils').getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = 'KEY187557EC22404DB39975C43ACE661A58_9QdDI7XD5bvyahtaWx1YQo';

describe('RegulatoryRequirements Resource', function() {
  describe('retrieve', function() {
    function responseFn(response) {
      expect(response.data).to.have.property('requirement_type');
      expect(response.data).to.have.property('label');
      expect(response.data).to.have.property('description');
      expect(response.data).to.include({
        record_type: 'regulatory_requirement'
      });
    }

    it('Sends the correct request', function() {
      return telnyx.regulatoryRequirements.retrieve('123')
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.regulatoryRequirements.retrieve('123', TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('list', function() {
    function responseFn(response) {
      expect(response.data[0]).to.have.property('requirement_type');
      expect(response.data[0]).to.have.property('label');
      expect(response.data[0]).to.have.property('description');
      expect(response.data[0]).to.include({
        record_type: 'regulatory_requirement'
      });
    }

    it('Sends the correct request', function() {
      return telnyx.regulatoryRequirements.list()
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.regulatoryRequirements.list(TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
});
