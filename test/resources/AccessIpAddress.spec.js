'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();

describe('Access IP Addresses Resource', function () {
  describe('retrieve', function () {
    function responseFn(response) {
      expect(response).to.have.property('created_at');
      expect(response).to.have.property('description');
      expect(response).to.have.property('id');
      expect(response).to.have.property('ip_address');
      expect(response).to.have.property('source');
      expect(response).to.have.property('status');
      expect(response).to.have.property('updated_at');
      expect(response).to.have.property('user_id');
    }

    it('Sends the correct request', function () {
      return telnyx.accessIpAddress.retrieve('123').then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.accessIpAddress
        .retrieve('123', TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('list', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
    }

    it('Sends the correct request', function () {
      return telnyx.accessIpAddress.list().then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.accessIpAddress.list(TEST_AUTH_KEY).then(responseFn);
    });
  });

  describe('create', function () {
    function responseFn(response) {
      expect(response).to.have.property('created_at');
      expect(response).to.have.property('description');
      expect(response).to.have.property('id');
      expect(response).to.have.property('ip_address');
      expect(response).to.have.property('source');
      expect(response).to.have.property('status');
      expect(response).to.have.property('updated_at');
      expect(response).to.have.property('user_id');
    }

    it('Sends the correct request', function () {
      return telnyx.accessIpAddress
        .create({
          ip_address: 'ip_address',
        })
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.accessIpAddress
        .create(
          {
            description: 'test description',
            ip_address: '127.0.0.0',
          },
          TEST_AUTH_KEY
        )
        .then(responseFn);
    });
  });
  describe('del', function () {
    function responseFn(response) {
      expect(response).to.have.property('created_at');
      expect(response).to.have.property('description');
      expect(response).to.have.property('id');
      expect(response).to.have.property('ip_address');
      expect(response).to.have.property('source');
      expect(response).to.have.property('status');
      expect(response).to.have.property('updated_at');
      expect(response).to.have.property('user_id');
    }

    it('Sends the correct request', function () {
      return telnyx.accessIpAddress.del('1').then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.accessIpAddress.del('1', TEST_AUTH_KEY).then(responseFn);
    });
  });
});
