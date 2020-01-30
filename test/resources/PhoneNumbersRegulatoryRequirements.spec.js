'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();

describe('PhoneNumberRegulatoryRequirements Resource', function() {
  describe('list', function() {
    function responseFn(response) {
      expect(response.data[0]).to.have.property('phone_number');
      expect(response.data[0]).to.have.property('regulatory_group_id');
      expect(response.data[0]).to.have.property('regulatory_requirements');
      expect(response.data[0]).to.include({record_type: 'phone_number_regulatory_group'});
      expect(response.data[0].regulatory_requirements[0]).to.have.property('requirement_type');
      expect(response.data[0].regulatory_requirements[0]).to.have.property('label');
      expect(response.data[0].regulatory_requirements[0]).to.have.property('field_type');
      expect(response.data[0].regulatory_requirements[0]).to.include({record_type: 'regulatory_requirement'});
    }

    it('Sends the correct request', function() {
      return telnyx.phoneNumberRegulatoryRequirements.list()
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.phoneNumberRegulatoryRequirements.list(TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
});
