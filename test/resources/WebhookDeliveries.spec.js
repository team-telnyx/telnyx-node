'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();

describe('WebhookDeliveries Resource', function() {
  function responseFn(response) {
    expect(response.data).to.have.property('id');
    expect(response.data).to.have.property('attempts');
    expect(response.data).to.have.property('user_id');
    expect(response.data).to.have.property('started_at');
    expect(response.data).to.have.property('finished_at');
    expect(response.data).to.include({record_type: 'webhook_delivery'});
  }

  describe('retrieve', function() {
    it('Sends the correct request', function() {
      return telnyx.webhookDeliveries.retrieve('123').then(responseFn);
    })

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.webhookDeliveries.retrieve('123', TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('list', function() {
    function listResponseFn(response) {
      return responseFn({data: response.data[0]});
    }

    it('Sends the correct request', function() {
      return telnyx.webhookDeliveries.list()
        .then(listResponseFn);
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.webhookDeliveries.list(TEST_AUTH_KEY)
        .then(listResponseFn);
    });
  });
});
