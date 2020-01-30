'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();

describe('Messages Resource', function() {
  describe('retrieve', function() {
    it('Sends the correct request', function() {
      return telnyx.messages.retrieve('123')
        .then(function(response) {
          expect(response.data).to.include({id: '123'});
          expect(response.data).to.include.keys(['record_type', 'direction', 'messaging_profile_id', 'from', 'text', 'to', 'type']);
        })
    });

    it('Sends the correct request  [with specified auth]', function() {
      return telnyx.messages.retrieve('123', TEST_AUTH_KEY)
        .then(function(response) {
          expect(response.data).to.include({id: '123'});
          expect(response.data).to.include.keys(['record_type', 'direction', 'messaging_profile_id', 'from', 'text', 'to', 'type']);
        })
    });
  });
  describe('create', function() {
    it('Sends the correct request', function() {
      return telnyx.messages.create({
        text: 'Hello, World!',
        from: '+18665552368',
        to: [{address: '+18665552367'}],
      })
        .then(function(response) {
          expect(response.data).to.include({
            text: 'Hello, World!',
            from: '+18665552368',
          });
          expect(response.data.to[0]).to.include({address: '+18665552367'});
        })
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.messages.create({
        text: 'Hello, World!',
        from: '+18665552368',
        to: [{address: '+18665552367'}],
      }, TEST_AUTH_KEY)
        .then(function(response) {
          expect(response.data).to.include({
            text: 'Hello, World!',
            from: '+18665552368'
          });
          expect(response.data.to[0]).to.include({address: '+18665552367'});
        })
    });

    it('Sends the correct request [with specified auth in options]', function() {
      return telnyx.messages.create({
        text: 'Hello, World!',
        from: '+18665552368',
        to: [{address: '+18665552367'}],
      }, {api_key: TEST_AUTH_KEY})
        .then(function(response) {
          expect(response.data).to.include({
            text: 'Hello, World!',
            from: '+18665552368'});
          expect(response.data.to[0]).to.include({address: '+18665552367'});
        })
    });
  });
});
