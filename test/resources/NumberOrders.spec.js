'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();

describe('NumberOrders Resource', function () {
  describe('retrieve', function () {
    function responseFn(response) {
      expect(response.data).to.include({
        id: '12ade33a-21c0-473b-b055-b3c836e1c292',
        record_type: 'number_order',
      });
    }

    it('Sends the correct request', function () {
      return telnyx.numberOrders
        .retrieve('12ade33a-21c0-473b-b055-b3c836e1c292')
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.numberOrders
        .retrieve('12ade33a-21c0-473b-b055-b3c836e1c292', TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('list', function () {
    function responseFn(response) {
      expect(response.data[0]).to.have.property('id');
      expect(response.data[0]).to.have.property('status');
      expect(response.data[0]).to.have.property('customer_reference');
      expect(response.data[0]).to.have.property('requirements_met');
      expect(response.data[0]).to.have.property('phone_numbers_count');
      expect(response.data[0]).to.include({record_type: 'number_order'});
    }

    it('Sends the correct request', function () {
      return telnyx.numberOrders.list().then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.numberOrders.list(TEST_AUTH_KEY).then(responseFn);
    });
  });

  describe('update', function () {
    it('Sends the correct request', function () {
      return telnyx.numberOrders
        .update('12ade33a-21c0-473b-b055-b3c836e1c292', {
          customer_reference: 'MY REF 002',
        })
        .then(function (response) {
          expect(response.data).to.include({
            id: '12ade33a-21c0-473b-b055-b3c836e1c292',
            record_type: 'number_order',
            customer_reference: 'MY REF 001',
          });
        });
    });
  });

  describe('create', function () {
    function responseFn(response) {
      expect(response.data).to.include({
        record_type: 'number_order',
      });
      expect(response.data).to.have.property('requirements_met');
      expect(response.data).to.have.property('phone_numbers_count');
    }

    function responseFnNoBody(response) {
      expect(response.data).to.have.property('id');
      expect(response.data).to.have.property('requirements_met');
      expect(response.data).to.have.property('phone_numbers_count');
      expect(response.data).to.include({record_type: 'number_order'});
    }

    it('Sends the correct request', function () {
      const requestBody = {
        customer_reference: 'MY REF 001',
        file_id: '1e3c5822-0362-4702-8e46-5a129f0d3976',
        requirements_id: '36aaf27d-986b-493c-bd1b-de16af2e4292',
      };
      return telnyx.numberOrders.create(requestBody).then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      const requestBody = {
        customer_reference: 'MY REF 001',
        file_id: '1e3c5822-0362-4702-8e46-5a129f0d3976',
        requirements_id: '36aaf27d-986b-493c-bd1b-de16af2e4292',
      };
      return telnyx.numberOrders
        .create(requestBody, TEST_AUTH_KEY)
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth and no body]', function () {
      telnyx.numberOrders.create(TEST_AUTH_KEY).then(responseFnNoBody);
    });
  });
});
