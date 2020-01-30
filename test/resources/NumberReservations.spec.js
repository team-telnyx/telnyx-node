'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();

describe('NumberReservations Resource', function() {
  const numberReservationCreateData = {
    phone_numbers: [{phone_number: '+18665552368'}]
  }
  describe('retrieve', function() {
    function responseFn(response) {
      expect(response.data).to.include({
        id: '123',
        record_type: 'phone_number_reservation'
      });
    }

    it('Sends the correct request', function() {
      return telnyx.numberReservations.retrieve('123')
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.numberReservations.retrieve('123', TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('list', function() {
    function responseFn(response) {
      expect(response.data[0]).to.have.property('id');
      expect(response.data[0]).to.have.property('status');
      expect(response.data[0]).to.have.property('phone_numbers');
      expect(response.data[0]).to.include({record_type: 'phone_number_reservation'});
    }

    it('Sends the correct request', function() {
      return telnyx.numberReservations.list()
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.numberReservations.list(TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('create', function() {
    function responseFn(response) {
      expect(response.data).to.have.property('id');
      expect(response.data).to.have.property('status');
      expect(response.data).to.have.property('phone_numbers');

      expect(response.data.record_type).to.be.eq('phone_number_reservation');
      expect(response.data.phone_numbers[0]).to.include({
        phone_number: '+18665552368'
      });
    }

    it('Sends the correct request', function() {
      return telnyx.numberReservations.create(numberReservationCreateData)
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.numberReservations.create(numberReservationCreateData, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('extend', function() {
    function responseFn(response) {
      expect(response.data).to.have.property('id');
      expect(response.data).to.have.property('status');
      expect(response.data).to.have.property('phone_numbers');
      expect(response.data).to.include({record_type: 'phone_number_reservation'});
    }

    it('Sends the correct request', function() {
      return telnyx.numberReservations.create(numberReservationCreateData)
        .then(function(response) {
          const numberReservation = response.data;
          return numberReservation.extend({})
            .then(responseFn);
        })
    });
    it('Sends the correct request [with specified auth]', function() {
      return telnyx.numberReservations.create(numberReservationCreateData)
        .then(function(response) {
          const numberReservation = response.data;
          return numberReservation.extend({}, TEST_AUTH_KEY)
            .then(responseFn);
        })
    });
  });
});
