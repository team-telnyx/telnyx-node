'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();

var addressData = {
  address_book: true,
  administrative_area: 'IL',
  borough: 'Guadalajara',
  neighborhood: 'Ciudad de los deportes',
  business_name: 'Kon',
  country_code: 'us',
  extended_address: 'Suite 123',
  first_name: 'Alfred',
  last_name: 'Foster',
  locality: 'Chicago',
  postal_code: '2904',
};

describe('Addresses Resource', function () {
  describe('retrieve', function () {
    function responseFn(response) {
      expect(response.data).to.have.property('id');
      expect(response.data).to.have.property('street_address');
      expect(response.data).to.have.property('postal_code');
      expect(response.data).to.have.property('first_name');
      expect(response.data).to.have.property('last_name');
      expect(response.data).to.have.property('locality');
      expect(response.data).to.include({record_type: 'address'});
    }

    it('Sends the correct request', function () {
      return telnyx.addresses.retrieve('123').then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.addresses.retrieve('123', TEST_AUTH_KEY).then(responseFn);
    });
  });

  describe('create', function () {
    function responseFn(response) {
      expect(response.data).to.have.property('id');
      expect(response.data).to.have.property('street_address');
      expect(response.data).to.have.property('postal_code');
      expect(response.data).to.have.property('first_name');
      expect(response.data).to.have.property('last_name');
      expect(response.data).to.have.property('locality');
      expect(response.data).to.have.property('address_book');
      expect(response.data).to.include({record_type: 'address'});
    }

    it('Sends the correct request', function () {
      return telnyx.addresses.create(addressData).then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.addresses
        .create(addressData, TEST_AUTH_KEY)
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth in options]', function () {
      return telnyx.addresses
        .create(addressData, {api_key: TEST_AUTH_KEY})
        .then(responseFn);
    });
  });

  describe('list', function () {
    function responseFn(response) {
      expect(response.data[0]).to.have.property('id');
      expect(response.data[0]).to.have.property('street_address');
      expect(response.data[0]).to.have.property('postal_code');
      expect(response.data[0]).to.have.property('first_name');
      expect(response.data[0]).to.have.property('last_name');
      expect(response.data[0]).to.have.property('locality');
      expect(response.data[0]).to.include({record_type: 'address'});
    }

    it('Sends the correct request', function () {
      return telnyx.addresses.list().then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.addresses.list(TEST_AUTH_KEY).then(responseFn);
    });
  });

  describe('Nested', function () {
    function responseFn(response) {
      if (response.data) {
        expect(response.data).to.have.property('id');
        expect(response.data).to.have.property('street_address');
        expect(response.data).to.have.property('postal_code');
        expect(response.data).to.have.property('first_name');
        expect(response.data).to.have.property('last_name');
        expect(response.data).to.have.property('locality');
        expect(response.data).to.include({record_type: 'address'});
      }
    }

    describe('del', function () {
      it('Sends the correct request', function () {
        return telnyx.addresses
          .create(addressData)
          .then(function (response) {
            const mp = response.data;
            return mp.del().then(responseFn);
          });
      });
      it('Sends the correct request [with specified auth]', function () {
        return telnyx.addresses.retrieve('123').then(function (response) {
          const mp = response.data;
          return mp.del(TEST_AUTH_KEY).then(responseFn);
        });
      });
    });
  });
});
