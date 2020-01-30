'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();

describe('BillingGroups Resource', function() {
  describe('retrieve', function() {
    function responseFn(response) {
      expect(response.data).to.include({id: '123'});
    }

    it('Sends the correct request', function() {
      return telnyx.billingGroups.retrieve('123').then(responseFn);
    })

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.billingGroups.retrieve('123', TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('create', function() {
    function responseFn(response) {
      expect(response.data).to.have.property('id');
      expect(response.data).to.have.property('name');
      expect(response.data).to.have.property('record_type');
      expect(response.data).to.include({name: 'Summer Campaign', record_type: 'billing_group'});
    }

    it('Sends the correct request', function() {
      return telnyx.billingGroups.create({name: 'Summer Campaign'})
        .then(responseFn);
    })

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.billingGroups.create({name: 'Summer Campaign'}, TEST_AUTH_KEY)
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth in options]', function() {
      return telnyx.billingGroups.create({name: 'Summer Campaign'}, {api_key: TEST_AUTH_KEY})
        .then(responseFn);
    });
  });

  describe('list', function() {
    function responseFn(response) {
      expect(response.data[0]).to.have.property('id');
      expect(response.data[0]).to.have.property('name');
      expect(response.data[0]).to.include({record_type: 'billing_group'});
    }

    it('Sends the correct request', function() {
      return telnyx.billingGroups.list()
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.billingGroups.list(TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('Nested', function() {
    function responseFn(response) {
      if (response.data) {
        expect(response.data).to.have.property('id');
        expect(response.data).to.have.property('name');
        expect(response.data).to.include({record_type: 'billing_group'});
      }
    }

    describe('del', function() {
      it('Sends the correct request', function() {
        return telnyx.billingGroups.create({name: 'Summer Campaign'})
          .then(function(response) {
            const mp = response.data;
            return mp.del()
              .then(responseFn);
          })
      });
      it('Sends the correct request [with specified auth]', function() {
        return telnyx.billingGroups.retrieve('123')
          .then(function(response) {
            const mp = response.data;
            return mp.del(TEST_AUTH_KEY)
              .then(responseFn);
          })
      });
    });

    describe('update', function() {
      it('Sends the correct request', function() {
        return telnyx.billingGroups.create({name: 'Summer Campaign'})
          .then(function(response) {
            const mp = response.data;
            return mp.update({name: 'Winter Campaign'})
              .then(responseFn);
          })
      });
      it('Sends the correct request [with specified auth]', function() {
        return telnyx.billingGroups.retrieve('123')
          .then(function(response) {
            const mp = response.data;
            return mp.update({name: 'Winter Campaign'}, TEST_AUTH_KEY)
              .then(responseFn);
          })
      });
    });
  })
});
