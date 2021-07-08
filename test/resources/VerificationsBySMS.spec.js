'use strict';


var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

describe('Verifications Resource', function() {
  function responseItemFn(verification) {
    expect(verification).to.have.property('id');
    expect(verification).to.have.property('type');
    expect(verification).to.have.property('status');
    expect(verification).to.have.property('phone_number');
    expect(verification).to.have.property('timeout_secs');
    expect(verification).to.include({record_type: 'verification'});
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
