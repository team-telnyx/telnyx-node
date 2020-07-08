'use strict';

var telnyx = require('../../testUtils').getTelnyxMock();
var expect = require('chai').expect;

describe('Balance Resource', function() {
  describe('retrieve', function() {
    it('Sends the correct request', function() {
      return telnyx.balance.retrieve()
        .then(function(response) {
          expect(response.data).to.include({record_type: 'balance'});
          expect(response.data).to.have.property('balance');
          expect(response.data).to.have.property('available_credit');
          expect(response.data).to.have.property('currency');
          expect(response.data).to.have.property('credit_limit');
        });
    });
  });
});
