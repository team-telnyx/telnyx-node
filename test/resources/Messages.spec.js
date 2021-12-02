'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();
var TEST_UUID = '123e4567-e89b-12d3-a456-426614174000';

describe('Messages Resource', function() {
  describe('retrieve', function() {
    it('Sends the correct request', function() {
      return telnyx.messages.retrieve(TEST_UUID)
        .then(function(response) {
          expect(response.data).to.include.keys(['id', 'record_type', 'direction', 'messaging_profile_id', 'from', 'text', 'to', 'type']);
        })
    });

    it('Sends the correct request  [with specified auth]', function() {
      return telnyx.messages.retrieve(TEST_UUID, TEST_AUTH_KEY)
        .then(function(response) {
          expect(response.data).to.include.keys(['id', 'record_type', 'direction', 'messaging_profile_id', 'from', 'text', 'to', 'type']);
        })
    });
  });
  describe('create', function() {
    it('Sends the correct request', function() {
      return telnyx.messages.create({
        text: 'Hello, World!',
        from: '+18665552368',
        to: '+18665552367',
      })
        .then(function(response) {
          expect(response.data).to.include.keys(['from', 'text']);
          expect(response.data.from).to.include.keys(['carrier', 'line_type', 'phone_number']);
          expect(response.data.to[0]).to.include.keys(['carrier', 'line_type', 'phone_number', 'status']);
        })
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.messages.create({
        text: 'Hello, World!',
        from: '+18665552368',
        to: '+18665552367',
      }, TEST_AUTH_KEY)
        .then(function(response) {
          expect(response.data).to.include.keys(['from', 'text']);
          expect(response.data.from).to.include.keys(['carrier', 'line_type', 'phone_number']);
          expect(response.data.to[0]).to.include.keys(['carrier', 'line_type', 'phone_number', 'status']);
        })
    });

    it('Sends the correct request [with specified auth in options]', function() {
      return telnyx.messages.create({
        text: 'Hello, World!',
        from: '+18665552368',
        to: '+18665552367',
      }, {api_key: TEST_AUTH_KEY})
        .then(function(response) {
          expect(response.data).to.include.keys(['from', 'text']);
          expect(response.data.from).to.include.keys(['carrier', 'line_type', 'phone_number']);
          expect(response.data.to[0]).to.include.keys(['carrier', 'line_type', 'phone_number', 'status']);
        })
    });
  });
});
