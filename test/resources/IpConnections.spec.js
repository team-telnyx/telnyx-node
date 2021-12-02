'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();
var TEST_UUID = '123e4567-e89b-12d3-a456-426614174000';

describe('IpConnections Resource', function() {
  function responseFn(response) {
    expect(response.data).to.have.property('id');
    expect(response.data).to.have.property('connection_name');
    expect(response.data).to.include({record_type: 'ip_connection'});
  }

  describe('retrieve', function() {
    it('Sends the correct request', function() {
      return telnyx.ipConnections.retrieve(TEST_UUID).then(responseFn);
    })

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.ipConnections.retrieve(TEST_UUID, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('create', function() {
    it('Sends the correct request', function() {
      return telnyx.ipConnections.create({connection_name: 'Central BSD-1'})
        .then(responseFn);
    })

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.ipConnections.create({connection_name: 'Central BSD-1'}, TEST_AUTH_KEY)
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth in options]', function() {
      return telnyx.ipConnections.create({connection_name: 'Central BSD-1'}, {api_key: TEST_AUTH_KEY})
        .then(responseFn);
    });
  });

  describe('list', function() {
    function listResponseFn(response) {
      return responseFn({data: response.data[0]});
    }

    it('Sends the correct request', function() {
      return telnyx.ipConnections.list()
        .then(listResponseFn);
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.ipConnections.list(TEST_AUTH_KEY)
        .then(listResponseFn);
    });
  });

  describe('Nested', function() {
    function responseFn(response) {
      if (response.data) {
        expect(response.data).to.have.property('id');
        expect(response.data).to.have.property('connection_name');
        expect(response.data).to.include({record_type: 'ip_connection'});
      }
    }

    describe('del', function() {
      it('Sends the correct request', function() {
        return telnyx.ipConnections.create({connection_name: 'Central BSD-1'})
          .then(function(response) {
            const ipConnection = response.data;
            return ipConnection.del()
              .then(responseFn);
          })
      });
      it('Sends the correct request [with specified auth]', function() {
        return telnyx.ipConnections.retrieve(TEST_UUID)
          .then(function(response) {
            const ipConnection = response.data;
            return ipConnection.del(TEST_AUTH_KEY)
              .then(responseFn);
          })
      });
    });

    describe('update', function() {
      it('Sends the correct request', function() {
        return telnyx.ipConnections.create({connection_name: 'Central BSD-1'})
          .then(function(response) {
            const ipConnection = response.data;
            return ipConnection.update({connection_name: 'Western BSD-2'})
              .then(responseFn);
          })
      });
      it('Sends the correct request [with specified auth]', function() {
        return telnyx.ipConnections.retrieve(TEST_UUID)
          .then(function(response) {
            const ipConnection = response.data;
            return ipConnection.update({connection_name: 'Western BSD-2'}, TEST_AUTH_KEY)
              .then(responseFn);
          })
      });
    });
  })
});
