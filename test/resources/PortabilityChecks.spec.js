'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();

describe('PortabilityChecks Resource', function() {
  function responseFn(response) {
    expect(response.data[0]).to.have.property('phone_number');
    expect(response.data[0]).to.have.property('fast_portable');
    expect(response.data[0]).to.have.property('portable');
    expect(response.data[0]).to.include({record_type: 'portability_check_result'});
  }

  const portabilityChecksParams = {
    phone_numbers: ['+15555555555', '+16666666667']
  };

  describe('run', function() {
    it('Sends the correct request', function() {
      return telnyx.portabilityChecks.run(portabilityChecksParams)
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.portabilityChecks.run(portabilityChecksParams, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
});
