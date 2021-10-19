'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();

describe('PortingPhoneNumbers Resource', function() {
  function responseFn(response) {
    expect(response.data).to.have.property('activation_status');
    expect(response.data).to.have.property('portability_status');
    expect(response.data).to.have.property('porting_order_id');
    expect(response.data).to.include({record_type: 'porting_phone_number'});
  }

  function listResponseFn(response) {
    return responseFn({data: response.data[0]});
  }

  describe('list', function() {
    it('Sends the correct request', function() {
      return telnyx.portingPhoneNumbers.list()
        .then(listResponseFn);
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.portingPhoneNumbers.list(TEST_AUTH_KEY)
        .then(listResponseFn);
    });
  });
});
