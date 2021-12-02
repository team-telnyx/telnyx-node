'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();

describe('FqdnConnections Resource', function() {
  function responseFn(response) {
    expect(response.data).to.have.property('id');
    expect(response.data).to.have.property('connection_name');
    expect(response.data).to.have.property('record_type');
    expect(response.data).to.include({record_type: 'fqdn_connection'});
  }

  describe('retrieve', function() {
    it('Sends the correct request', function() {
      return telnyx.fqdnConnections.retrieve('123').then(responseFn);
    })

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.fqdnConnections.retrieve('123', TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('create', function() {
    it('Sends the correct request', function() {
      return telnyx.fqdnConnections.create({connection_name: 'Central BSD-1'})
        .then(responseFn);
    })

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.fqdnConnections.create({connection_name: 'Central BSD-1'}, TEST_AUTH_KEY)
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth in options]', function() {
      return telnyx.fqdnConnections.create({connection_name: 'Central BSD-1'}, {api_key: TEST_AUTH_KEY})
        .then(responseFn);
    });
  });

  describe('list', function() {
    function listResponseFn(response) {
      return responseFn({data: response.data[0]});
    }

    it('Sends the correct request', function() {
      return telnyx.fqdnConnections.list()
        .then(listResponseFn);
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.fqdnConnections.list(TEST_AUTH_KEY)
        .then(listResponseFn);
    });
  });

  describe('Nested', function() {
    function responseFn(response) {
      if (response.data) {
        expect(response.data).to.have.property('id');
        expect(response.data).to.have.property('connection_name');
        expect(response.data).to.include({record_type: 'fqdn_connection'});
      }
    }

    describe('del', function() {
      it('Sends the correct request', function() {
        return telnyx.fqdnConnections.create({connection_name: 'Central BSD-1'})
          .then(function(response) {
            const mp = response.data;
            return mp.del()
              .then(responseFn);
          })
      });
      it('Sends the correct request [with specified auth]', function() {
        return telnyx.fqdnConnections.retrieve('123')
          .then(function(response) {
            const mp = response.data;
            return mp.del(TEST_AUTH_KEY)
              .then(responseFn);
          })
      });
    });

    describe('update', function() {
      it('Sends the correct request', function() {
        return telnyx.fqdnConnections.create({connection_name: 'Central BSD-1'})
          .then(function(response) {
            const mp = response.data;
            return mp.update({connection_name: 'Western BSD-2'})
              .then(responseFn);
          })
      });
      it('Sends the correct request [with specified auth]', function() {
        return telnyx.fqdnConnections.retrieve('123')
          .then(function(response) {
            const mp = response.data;
            return mp.update({connection_name: 'Western BSD-2'}, TEST_AUTH_KEY)
              .then(responseFn);
          })
      });
    });
  })
});
