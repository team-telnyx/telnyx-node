'use strict';

var telnyx = require('../../testUtils').getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = 'KEY187557EC22404DB39975C43ACE661A58_9QdDI7XD5bvyahtaWx1YQo';

describe('Connections Resource', function() {
  describe('retrieve', function() {
    function responseFn(response) {
      expect(response.data).to.include({id: '123'});
    }

    it('Sends the correct request', function() {
      return telnyx.connections.retrieve('123').then(responseFn);
    })

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.connections.retrieve('123', TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('list', function() {
    function responseFn(response) {
      expect(response.data[0]).to.have.property('id');
      expect(response.data[0]).to.have.property('connection_name');
      expect(response.data[0]).to.include({record_type: 'ip_connection'});
    }

    it('Sends the correct request', function() {
      return telnyx.connections.list()
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.connections.list(TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
});
