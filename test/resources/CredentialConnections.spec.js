'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();

describe('Access IP Addresses Resource', function () {
  describe('retrieve', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
    }

    it('Sends the correct request', function () {
      return telnyx.credentialConnections.retrieve('123').then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.credentialConnections
        .retrieve('123', TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('list', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
    }

    it('Sends the correct request', function () {
      return telnyx.credentialConnections
        .list({
          page: {
            number: 1,
            size: 20,
          },
          filter: {
            outbound: {
              outbound_voice_profile_id: '1293384261075731499',
            },
          },
          sort: 'connection_name',
        })
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.credentialConnections
        .list(
          {
            page: {
              number: 1,
              size: 20,
            },
            filter: {
              outbound: {
                outbound_voice_profile_id: '1293384261075731499',
              },
            },
            sort: 'connection_name',
          },
          TEST_AUTH_KEY
        )
        .then(responseFn);
    });
  });

  describe('create', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
    }

    it('Sends the correct request', function () {
      return telnyx.credentialConnections
        .create({
          connection_name: 'my name',
          password: 'my123secure456password789',
          user_name: 'myusername123',
        })
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.credentialConnections
        .create(
          {
            connection_name: 'my name',
            password: 'my123secure456password789',
            user_name: 'myusername123',
          },
          TEST_AUTH_KEY
        )
        .then(responseFn);
    });
  });
  describe('del', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
    }

    it('Sends the correct request', function () {
      return telnyx.credentialConnections.del('1').then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.credentialConnections
        .del('1', TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
  describe('update', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
    }

    it('Sends the correct request', function () {
      return telnyx.credentialConnections.del('1').then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.credentialConnections
        .del('1', TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
});
