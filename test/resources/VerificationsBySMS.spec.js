'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();

describe('Verifications SMS Resource', function() {
  function responseFn(response) {
    expect(response.data[0]).to.include({
      record_type: 'verification',
    });
    expect(response.data[0]).to.have.property('id');
    expect(response.data[0]).to.have.property('phone_number');
    expect(response.data[0]).to.have.property('verification_type');
  }

  describe('create', function() {
    it('Sends the correct request', function() {
      return telnyx.verifications.bySMS.create({
        verify_profile_id: '12ade33a-21c0-473b-b055-b3c836e1c292',
        phone_number: '+13035551234',
      })
        .then((response) => {
          responseItemFn(response.data);
        });
    })
  });
});
