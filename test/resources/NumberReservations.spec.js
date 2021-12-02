'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();
var TEST_UUID = '123e4567-e89b-12d3-a456-426614174000';

describe('NumberReservations Resource', function() {
  function responseFn(response) {
    expect(response.data).to.have.property('id');
    expect(response.data).to.have.property('status');
    expect(response.data).to.have.property('phone_numbers');
    expect(response.data).to.include({record_type: 'number_reservation'});
  }

  const numberReservationCreateData = {
    phone_numbers: [{phone_number: '+19705555098'}]
  }

  describe('retrieve', function() {
    it('Sends the correct request', function() {
      return telnyx.numberReservations.retrieve(TEST_UUID)
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.numberReservations.retrieve(TEST_UUID, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('list', function() {
    function listResponseFn(response) {
      return responseFn({data: response.data[0]});
    }

    it('Sends the correct request', function() {
      return telnyx.numberReservations.list()
        .then(listResponseFn);
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.numberReservations.list(TEST_AUTH_KEY)
        .then(listResponseFn);
    });
  });

  describe('create', function() {
    function responseFn(response) {
      expect(response.data).to.have.property('id');
      expect(response.data).to.have.property('status');
      expect(response.data).to.have.property('phone_numbers');

      expect(response.data.record_type).to.be.eq('number_reservation');
      expect(response.data.phone_numbers[0]).to.include({
        phone_number: '+19705555098'
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
      expect(response.data).to.include({record_type: 'number_reservation'});
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
