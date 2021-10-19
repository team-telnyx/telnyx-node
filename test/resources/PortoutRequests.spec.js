'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();

describe('PortoutRequests Resource', function () {
  function responseFn(response) {
    expect(response.data).to.have.property('id');
    expect(response.data).to.have.property('status');
    expect(response.data).to.have.property('requested_foc_date');
    expect(response.data).to.have.property('foc_date');
    expect(response.data).to.have.property('carrier_name');
    expect(response.data).to.include({record_type: 'portout'});
  }

  describe('list', function () {
    function listResponseFn(response) {
      return responseFn({data: response.data[0]});
    }

    it('Sends the correct request', function () {
      return telnyx.portoutRequests.list().then(listResponseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.portoutRequests.list(TEST_AUTH_KEY).then(listResponseFn);
    });
  });

  describe('retrieve', function () {
    it('Sends the correct request', function () {
      return telnyx.portoutRequests.retrieve('123').then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.portoutRequests.retrieve('123', TEST_AUTH_KEY).then(responseFn);
    });
  });

  describe('updateStatus', function () {
    it('Sends the correct authorization request to authorize', function () {
      return telnyx.portoutRequests.updateStatus('123', 'authorized').then(responseFn);
    });

    it('Sends the correct request to reject', function () {
      return telnyx.portoutRequests.updateStatus('123', 'rejected').then(responseFn);
    });
  });

  describe('Comments', function () {
    function responseFn(response) {
      expect(response.data).to.have.property('id');
      expect(response.data).to.have.property('body');
      expect(response.data).to.have.property('user_id');
      expect(response.data).to.have.property('created_at');
      expect(response.data).to.include({record_type: 'portout'});
    }

    describe('list', function() {
      function listResponseFn(response) {
        return responseFn({data: response.data[0]});
      }

      it('Sends the correct request', function () {
        return telnyx.portoutRequests.listComments('123').then(listResponseFn);
      });
    });

    describe('create', function () {
      it('Sends the correct request', function () {
        return telnyx.portoutRequests.createComment('123',{body: 'much approve'})
          .then(responseFn);
      });
    });
  });
});
