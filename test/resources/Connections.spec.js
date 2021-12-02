'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();

describe('Connections Resource', function() {
  function responseFn(response) {
    expect(response.data).to.have.property('id');
    expect(response.data).to.have.property('connection_name');
    expect(response.data).to.include({record_type: 'ip_connection'});
  }

  describe('retrieve', function() {
    it('Sends the correct request', function() {
      return telnyx.connections.retrieve('123').then(responseFn);
    })

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.connections.retrieve('123', TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('list', function() {
    function listResponseFn(response) {
      return responseFn({data: response.data[0]});
    }

    it('Sends the correct request', function() {
      return telnyx.connections.list()
        .then(listResponseFn);
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.connections.list(TEST_AUTH_KEY)
        .then(listResponseFn);
    });
  });
});
