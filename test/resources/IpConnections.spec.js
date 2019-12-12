'use strict';

var telnyx = require('../../testUtils').getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = 'KEY187557EC22404DB39975C43ACE661A58_9QdDI7XD5bvyahtaWx1YQo';

describe.only('IpConnections Resource', function() {
  describe('retrieve', function() {
    function responseFn(response) {
      expect(response.data).to.include({id: '123'});
    }

    it('Sends the correct request', function() {
      return telnyx.ipConnections.retrieve('123').then(responseFn);
    })

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.ipConnections.retrieve('123', TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('create', function() {
    function responseFn(response) {
      expect(response.data).to.have.property('id');
      expect(response.data).to.have.property('connection_name');
      expect(response.data).to.have.property('record_type');
      expect(response.data).to.include({connection_name: 'Central BSD-1', record_type: 'ip_connection'});
    }

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
    function responseFn(response) {
      expect(response.data[0]).to.have.property('id');
      expect(response.data[0]).to.have.property('connection_name');
      expect(response.data[0]).to.include({record_type: 'ip_connection'});
    }

    it('Sends the correct request', function() {
      return telnyx.ipConnections.list()
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.ipConnections.list(TEST_AUTH_KEY)
        .then(responseFn);
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
            const mp = response.data;
            return mp.del()
              .then(responseFn);
          })
      });
      it('Sends the correct request [with specified auth]', function() {
        return telnyx.ipConnections.retrieve('123')
          .then(function(response) {
            const mp = response.data;
            return mp.del(TEST_AUTH_KEY)
              .then(responseFn);
          })
      });
    });

    describe('update', function() {
      it('Sends the correct request', function() {
        return telnyx.ipConnections.create({connection_name: 'Central BSD-1'})
          .then(function(response) {
            const mp = response.data;
            return mp.update({connection_name: 'Western BSD-2'})
              .then(responseFn);
          })
      });
      it('Sends the correct request [with specified auth]', function() {
        return telnyx.ipConnections.retrieve('123')
          .then(function(response) {
            const mp = response.data;
            return mp.update({connection_name: 'Western BSD-2'}, TEST_AUTH_KEY)
              .then(responseFn);
          })
      });
    });
  })
});
