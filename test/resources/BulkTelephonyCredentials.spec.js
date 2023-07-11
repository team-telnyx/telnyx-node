'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();

describe('Bulk Credentials Resource', function () {
  describe('create', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
      expect(response.data).to.have.property('credentials');
    }

    it('Sends the correct request', function () {
      return telnyx.bulkTelephonyCredentials
        .create({
          connection_id: '804252963366242252',
          name: 'Default Name',
          tag: 'My Credentials',
        })
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.bulkTelephonyCredentials
        .create(
          {
            connection_id: '804252963366242252',
            name: 'Default Name',
            tag: 'My Credentials',
          },
          TEST_AUTH_KEY
        )
        .then(responseFn);
    });
  });
  describe('delete', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
    }

    it('Sends the correct request', function () {
      return telnyx.bulkTelephonyCredentials
        .deleteCredentials({
          filter: {
            tag: 'data',
          },
        })
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.bulkTelephonyCredentials
        .deleteCredentials(
          {
            filter: {
              tag: 'data',
            },
          },
          TEST_AUTH_KEY
        )
        .then(responseFn);
    });
  });
  describe('update', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
    }

    it('Sends the correct request', function () {
      return telnyx.bulkTelephonyCredentials
        .updateCredentials({
          filter: {
            tag: 'data',
          },
        })
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.bulkTelephonyCredentials
        .updateCredentials(
          {
            connection_id: '804252963366242252',
            tag: 'My Credentials',
            filter: {
              tag: 'data',
            },
          },
          TEST_AUTH_KEY
        )
        .then(responseFn);
    });
  });
});
