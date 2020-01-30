'use strict';

var telnyx = require('../../testUtils').getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = 'KEY187557EC22404DB39975C43ACE661A58_9QdDI7XD5bvyahtaWx1YQo';

describe('Fqdns Resource', function() {
  describe('retrieve', function() {
    function responseFn(response) {
      expect(response.data).to.include({id: '123'});
    }

    it('Sends the correct request', function() {
      return telnyx.fqdns.retrieve('123').then(responseFn);
    })

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.fqdns.retrieve('123', TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('create', function() {
    function responseFn(response) {
      expect(response.data).to.have.property('id');
      expect(response.data).to.have.property('connection_id');
      expect(response.data).to.have.property('fqdn');
      expect(response.data).to.have.property('record_type');
      expect(response.data).to.include({connection_id: 'Central BSD-1', record_type: 'fqdn'});
    }

    it('Sends the correct request', function() {
      return telnyx.fqdns.create({connection_id: 'Central BSD-1', fqdn: 'example.com'})
        .then(responseFn);
    })

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.fqdns.create({connection_id: 'Central BSD-1', fqdn: 'example.com'}, TEST_AUTH_KEY)
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth in options]', function() {
      return telnyx.fqdns.create({connection_id: 'Central BSD-1', fqdn: 'example.com'}, {api_key: TEST_AUTH_KEY})
        .then(responseFn);
    });
  });

  describe('list', function() {
    function responseFn(response) {
      expect(response.data[0]).to.have.property('id');
      expect(response.data[0]).to.have.property('connection_id');
      expect(response.data).to.have.property('fqdn');
      expect(response.data[0]).to.include({record_type: 'fqdn'});
    }

    it('Sends the correct request', function() {
      return telnyx.fqdns.list()
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.fqdns.list(TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('Nested', function() {
    function responseFn(response) {
      if (response.data) {
        expect(response.data).to.have.property('id');
        expect(response.data).to.have.property('connection_id');
        expect(response.data).to.have.property('fqdn');
        expect(response.data).to.include({record_type: 'fqdn'});
      }
    }

    describe('del', function() {
      it('Sends the correct request', function() {
        return telnyx.fqdns.create({connection_id: 'Central BSD-1', fqdn: 'example.com'})
          .then(function(response) {
            const fqdn = response.data;
            return fqdn.del()
              .then(responseFn);
          })
      });
      it('Sends the correct request [with specified auth]', function() {
        return telnyx.fqdns.retrieve('123')
          .then(function(response) {
            const fqdn = response.data;
            return fqdn.del(TEST_AUTH_KEY)
              .then(responseFn);
          })
      });
    });

    describe('update', function() {
      it('Sends the correct request', function() {
        return telnyx.fqdns.create({connection_id: 'Central BSD-1', fqdn: 'example.com'})
          .then(function(response) {
            const fqdn = response.data;
            return fqdn.update({connection_id: 'Western BSD-2'})
              .then(responseFn);
          })
      });
      it('Sends the correct request [with specified auth]', function() {
        return telnyx.fqdns.retrieve('123')
          .then(function(response) {
            const fqdn = response.data;
            return fqdn.update({connection_id: 'Western BSD-2'}, TEST_AUTH_KEY)
              .then(responseFn);
          })
      });
    });
  })
});
