'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();

describe('Whatsapp Contacts', function () {
  describe('create', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
    }

    it('Sends the correct request', function () {
      return telnyx.whatsappMedia
        .create({
          media_content_type: 'image/jpeg',
          upload_file: 'string($binary)',
          whatsapp_user_id: '15125551212',
        })
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.whatsappMedia.create(TEST_AUTH_KEY).then(responseFn);
    });
  });
  describe('retrieve', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
    }

    it('Sends the correct request', function () {
      return telnyx.whatsappMedia
        .retrieve('15125551212', {media_id: 'media_id'})
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.whatsappMedia
        .retrieve('15125551212', {media_id: 'media_id'}, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
  describe('del', function () {
    function responseFn(response) {
      expect(response.lastResponse.statusCode).to.equal(204);
    }

    it('Sends the correct request', function () {
      return telnyx.whatsappMedia
        .del('15125551212', {media_id: 'media_id'})
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.whatsappMedia
        .del('15125551212', {media_id: 'media_id'}, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
});
