'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;
var TEST_AUTH_KEY = utils.getUserTelnyxKey();
var TEST_UUID = '123e4567-e89b-12d3-a456-426614174000';

describe('Messaging Hosted Order Numbers', function () {
  function responseFn(response) {
    expect(response.data).to.include({
      record_type: 'messaging_hosted_number_order',
    });
    expect(response.data).to.have.property('status');
    expect(response.data).to.have.property('id');
  }

  describe('retrieve', function () {
    it('Sends the correct request', function () {
      return telnyx.messagingHostedNumberOrders
        .retrieve(TEST_UUID)
        .then((response) => {
          responseFn(response);
        });
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.messagingHostedNumberOrders
        .retrieve(TEST_UUID, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('create', function () {
    function responseFnNoBody(response) {
      expect(response.data).to.have.property('id');
      expect(response.data).to.have.property('requirements_met');
      expect(response.data).to.include({
        record_type: 'messaging_hosted_number_order',
      });
    }

    it('Sends the correct request', function () {
      return telnyx.messagingHostedNumberOrders
        .create({messaging_profile_id: '442191469269222625'})
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.messagingHostedNumberOrders
        .create({messaging_profile_id: '442191469269222625'}, TEST_AUTH_KEY)
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth and no body]', function () {
      telnyx.messagingHostedNumberOrders
        .create({}, TEST_AUTH_KEY)
        .then(responseFnNoBody);
    });
  });

  describe('list', function () {
    function responseFn(response) {
      expect(response.data[0]).to.have.property('id');
      expect(response.data[0]).to.include({
        record_type: 'messaging_hosted_number_order',
      });
    }
    it('Sends the correct request', function () {
      return telnyx.messagingHostedNumberOrders.list().then(responseFn);
    });
    it('Sends the correct request [with specified auth]', function () {
      return telnyx.messagingHostedNumberOrders
        .list(TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
  describe('del', function () {
    function responseFn(response) {
      if (response.data) {
        expect(response.data).to.have.property('id');
        expect(response.data).to.include({
          record_type: 'messaging_hosted_numbers',
        });
      }
    }
    it('Sends the correct request [with specified auth]', function () {
      return telnyx.messagingHostedNumberOrders.del('123').then(responseFn);
    });
  });
});
