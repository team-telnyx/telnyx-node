'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();

describe('NumberOrders Resource', function() {
  describe('retrieve', function() {
    function responseFn(response) {
      expect(response.data).to.include({
        id: '123',
        record_type: 'number_order'
      });
    }

    it('Sends the correct request', function() {
      return telnyx.numberOrders.retrieve('123')
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.numberOrders.retrieve('123', TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('list', function() {
    function responseFn(response) {
      expect(response.data[0]).to.have.property('id');
      expect(response.data[0]).to.have.property('status');
      expect(response.data[0]).to.have.property('customer_reference');
      expect(response.data[0]).to.have.property('connection_id');
      expect(response.data[0]).to.have.property('messaging_profile_id');
      expect(response.data[0]).to.include({record_type: 'number_order'});
    }

    it('Sends the correct request', function() {
      return telnyx.numberOrders.list()
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.numberOrders.list(TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('update', function() {
    it('Sends the correct request', function() {
      return telnyx.numberOrders.update('123', {customer_reference: 'MY REF 002'})
        .then(function(response) {
          expect(response.data).to.include({
            id: '123',
            record_type: 'number_order',
            customer_reference: 'MY REF 002',
          });
        });
    });
  });

  describe('create', function() {
    function responseFn(response) {
      expect(response.data).to.include({
        connection_id: '442191469269222625',
        record_type: 'number_order',
      });
    }

    function responseFnNoBody(response) {
      expect(response.data).to.have.property('id');
      expect(response.data).to.have.property('connection_id');
      expect(response.data).to.include({record_type: 'number_order'});
    }

    it('Sends the correct request', function() {
      return telnyx.numberOrders.create({connection_id: '442191469269222625'})
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.numberOrders.create({connection_id: '442191469269222625'}, TEST_AUTH_KEY)
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth and no body]', function() {
      telnyx.numberOrders.create(TEST_AUTH_KEY)
        .then(responseFnNoBody);
    });
  });
});
