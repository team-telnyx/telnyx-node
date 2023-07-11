'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();

describe('Actions', function () {
  describe('create', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
    }

    it('Sends the correct request', function () {
      telnyx.activateDeactivateBulkCredentials

        .create('activate', {
          filter: {
            tag: 'string',
          },
        })
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      telnyx.activateDeactivateBulkCredentials

        .create(
          'activate',
          {
            filter: {
              tag: 'string',
            },
          },
          TEST_AUTH_KEY
        )
        .then(responseFn);
    });
  });
});
