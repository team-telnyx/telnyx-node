'use strict';

var telnyx = require('../../testUtils').getTelnyxMock();
var expect = require('chai').expect;

describe('PublicKey Resource', function() {
  describe('retrieve', function() {
    it('Sends the correct request', function() {
      return telnyx.publicKey.retrieve()
        .then(function(response) {
          expect(response.data).to.include({record_type: 'public_key'});
          expect(response.data).to.have.property('public');
          expect(response.data).to.have.property('organization_id');
        });
    });
  });
});
