'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();

describe('Media', function() {
  function responseFn(response) {
    expect(response.data).to.have.property('expires_at');
    expect(response.data).to.have.property('created_at');
    expect(response.data).to.have.property('media_name');
  }

  describe('list', function() {
    function listResponseFn(response) {
      return responseFn({data: response.data[0]});
    }

    it('Sends the correct request', function() {
      return telnyx.media.list()
        .then(listResponseFn);
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.media.list(TEST_AUTH_KEY)
        .then(listResponseFn);
    });
  });

  describe('upload', function() {
    it('Sends the correct request', function() {
      return telnyx.media.upload({
        media_url: 'http://www.example.com/audio.mp3',
        media_name: 'my-file'})
        .then(responseFn);
    });
  });

  describe('retrieve', function() {
    it('Sends the correct request', function() {
      return telnyx.media.retrieve('123').then(responseFn);
    });
  });

  describe('update', function() {
    it('Sends the correct request', function() {
      return telnyx.media.update('123', {media_name: 'new-media-name'}).then(responseFn);
    });
  });

  describe('download', function() {
    function responseFn(response) {
      expect(response.statusCode).to.equal(200);
    }

    it('Sends the correct request', function() {
      return telnyx.media.download('123').then(responseFn);
    });
  });

  describe('del', function() {
    function responseFn(response) {
      expect(response.statusCode).to.equal(204);
    }

    it('Sends the correct request', function() {
      return telnyx.media.del('123').then(responseFn);
    });
  });
});
