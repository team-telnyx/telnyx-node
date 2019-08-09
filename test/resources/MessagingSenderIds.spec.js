'use strict';

var telnyx = require('../../testUtils').getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = 'KEY187557EC22404DB39975C43ACE661A58_9QdDI7XD5bvyahtaWx1YQo';

describe('Messaging AlphanumericSenderIds Resource', function() {
  describe('retrieve', function() {
    function responseFn(response) {
      expect(response.data).to.include({
        id: '123',
        messaging_profile_id: '123',
        record_type: 'alphanumeric_sender_id'
      });
    }

    it('Sends the correct request', function() {
      return telnyx.messagingSenderIds.retrieve('123')
        .then(function(response) {
          expect(response.data).to.include(responseFn);
        });
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.messagingSenderIds.retrieve('123', TEST_AUTH_KEY)
        .then(function(response) {
          expect(response.data).to.include(responseFn);
        });
    });
  });

  describe('create', function() {
    function responseFn(response) {
      expect(response.data).to.include({alphanumeric_sender_id: 'Summer Campaign', record_type: 'alphanumeric_sender_id'});
    }

    function responseFnNoBody(response) {
      expect(response.data).to.have.property('id');
      expect(response.data).to.have.property('alphanumeric_sender_id');
      expect(response.data).to.have.property('record_type');
    }

    it('Sends the correct request', function() {
      return telnyx.messagingSenderIds.create({alphanumeric_sender_id: 'Summer Campaign'})
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.messagingSenderIds.create({alphanumeric_sender_id: 'Summer Campaign'}, TEST_AUTH_KEY)
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth and no body]', function() {
      return telnyx.messagingSenderIds.create(TEST_AUTH_KEY)
        .then(responseFnNoBody);
    });

    it('Sends the correct request [with specified auth in options]', function() {
      return telnyx.messagingSenderIds.create({alphanumeric_sender_id: 'Summer Campaign'}, {api_key: TEST_AUTH_KEY})
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth in options and no body]', function() {
      return telnyx.messagingSenderIds.create({api_key: TEST_AUTH_KEY})
        .then(responseFnNoBody);
    });
  });

  describe('del', function() {
    it('Sends the correct request', function() {
      return telnyx.messagingSenderIds.del('123')
        .then(function(response) {
          expect(response.data).to.include({id: '123', record_type: 'alphanumeric_sender_id'});
        });
    });
  });

  describe('list', function() {
    function responseFn(response) {
      expect(response.data[0]).to.have.property('id');
      expect(response.data[0]).to.have.property('alphanumeric_sender_id');
      expect(response.data[0]).to.include({record_type: 'alphanumeric_sender_id'});

    }

    it('Sends the correct request', function() {
      return telnyx.messagingSenderIds.list()
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.messagingSenderIds.list(TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
});
