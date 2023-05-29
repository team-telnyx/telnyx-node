'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();
var TEST_UUID = '123e4567-e89b-12d3-a456-426614174000';

describe('numberPortoutsSupportingDocuments', function () {
  describe('retrieveGenerateJoinClientToken', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
    }

    it('Sends the correct request', function () {
      const requestBody = {refresh_token_ttl_secs: 3600, token_ttl_secs: 600};
      return telnyx.roomClientToken
        .retrieveGenerateJoinClientToken(TEST_UUID, requestBody)
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      const requestBody = {refresh_token_ttl_secs: 3600, token_ttl_secs: 600};
      return telnyx.roomClientToken
        .retrieveGenerateJoinClientToken(TEST_UUID, requestBody, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
  describe('retrieveRefreshClientToken', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
    }

    it('Sends the correct request', function () {
      return telnyx.roomClientToken
        .retrieveRefreshClientToken(TEST_UUID, {
          refresh_token: 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9',
        })
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.roomClientToken
        .retrieveRefreshClientToken(
          TEST_UUID,
          {
            refresh_token: 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9',
          },
          TEST_AUTH_KEY
        )
        .then(responseFn);
    });
  });
});
