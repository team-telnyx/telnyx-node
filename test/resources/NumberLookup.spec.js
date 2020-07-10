'use strict';

var telnyx = require('../../testUtils').getTelnyxMock();
var expect = require('chai').expect;

describe('NumberLookup Resource', function () {
  describe('retrieve', function () {
    it('Sends the correct request', function () {
      return telnyx.numberLookup.retrieve('+18665552368').then(function (response) {
        expect(response.data).to.include({record_type: 'number_lookup'});
        expect(response.data).to.have.property('country_code');
        expect(response.data).to.have.property('fraud');
        expect(response.data).to.have.property('phone_number');
        expect(response.data).to.have.property('national_format');
        expect(response.data).to.have.property('portability');
      });
    });
  });
});
