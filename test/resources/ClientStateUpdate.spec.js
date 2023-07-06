'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();

describe('Client State Update', function () {
  describe('update', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
      expect(response.data).to.have.property('result');
    }

    it('Sends the correct request', function () {
      return telnyx.clientStateUpdate
        .update({
          call_control_id: '35146afd-df93-4963-b1e9-1a085e2ae874',
          client_state: 'aGF2ZSBhIG5pY2UgZGF5ID1d',
        })
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.clientStateUpdate
        .update(
          {
            call_control_id: '35146afd-df93-4963-b1e9-1a085e2ae874',
            client_state: 'aGF2ZSBhIG5pY2UgZGF5ID1d',
          },
          TEST_AUTH_KEY
        )
        .then(responseFn);
    });
  });
});
