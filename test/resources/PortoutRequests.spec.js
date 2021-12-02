'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();
var TEST_UUID = '123e4567-e89b-12d3-a456-426614174000';

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
      return telnyx.portoutRequests.retrieve(TEST_UUID).then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.portoutRequests.retrieve(TEST_UUID, TEST_AUTH_KEY).then(responseFn);
    });
  });

  describe('updateStatus', function () {
    it('Sends the correct authorization request to authorize', function () {
      return telnyx.portoutRequests.updateStatus(TEST_UUID, 'authorized').then(responseFn);
    });

    it('Sends the correct request to reject', function () {
      return telnyx.portoutRequests.updateStatus(TEST_UUID, 'rejected-pending').then(responseFn);
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
        return telnyx.portoutRequests.listComments(TEST_UUID).then(listResponseFn);
      });
    });

    describe('create', function () {
      it('Sends the correct request', function () {
        return telnyx.portoutRequests.createComment(TEST_UUID,{body: 'much approve'})
          .then(responseFn);
      });
    });
  });
});
