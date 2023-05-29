'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();
var TEST_UUID = '123e4567-e89b-12d3-a456-426614174000';

describe('Whatsapp Business Account', function () {
  describe('list', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
    }

    it('Sends the correct request', function () {
      return telnyx.whatsAppBusinessAccount
        .list({
          page: {
            number: '1',
            size: '20',
          },
        })
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.whatsAppBusinessAccount
        .list(
          {
            page: {
              number: '1',
              size: '20',
            },
          },
          TEST_AUTH_KEY
        )
        .then(responseFn);
    });
  });
  describe('retrieveWhatsAppBusinessAccount', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
    }

    it('Sends the correct request', function () {
      return telnyx.whatsAppBusinessAccount
        .retrieveWhatsAppBusinessAccount(TEST_UUID)
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.whatsAppBusinessAccount
        .retrieveWhatsAppBusinessAccount(TEST_UUID, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
  describe('retrieveWhatsAppBusinessAccountPhoneNumbers', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
    }

    it('Sends the correct request', function () {
      return telnyx.whatsAppBusinessAccount
        .retrieveWhatsAppBusinessAccountPhoneNumbers(TEST_UUID)
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.whatsAppBusinessAccount
        .retrieveWhatsAppBusinessAccountPhoneNumbers(TEST_UUID, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
});
