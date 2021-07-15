'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();

describe('Queues Resource', function() {
  describe('retrieve', function() {
    function responseFn(response) {
      expect(response.data).to.include({name: 'support'});
    }

    it('Sends the correct request', function() {
      return telnyx.queues.retrieve('support').then(responseFn);
    })

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.queues.retrieve('support', TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('list_calls', function() {
    function responseFn(response) {
      expect(response.data[0]).to.have.property('call_control_id');
      expect(response.data[0]).to.have.property('queue_position');
      expect(response.data[0]).to.include({record_type: 'queue_call'});
    }

    it('Sends the correct request', function() {
      return telnyx.queues.list_calls('support')
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.queues.retrieve_call('support', '891510ac-f3e4-11e8-af5b-de00688a4901')
        .then(responseFn);
    });
  });
});
