'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();

describe('Update Client State', function () {
  describe('update', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
    }

    it('Sends the correct request', function () {
      return telnyx.updateClientState
        .update('call_control_id', {client_state: 'aGF2ZSBhIG5pY2UgZGF5ID1d'})
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.updateClientState
        .update(
          'call_control_id',
          {client_state: 'aGF2ZSBhIG5pY2UgZGF5ID1d'},
          TEST_AUTH_KEY
        )
        .then(responseFn);
    });
  });
});
