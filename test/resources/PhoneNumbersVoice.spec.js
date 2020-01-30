'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();

describe('Phone Numbers Voice Resource', function() {
  function responseFn(response) {
    expect(response.data[0]).to.include({
      record_type: 'voice_settings',
    });
    expect(response.data[0]).to.have.property('id');
    expect(response.data[0]).to.have.property('translated_number');
    expect(response.data[0]).to.have.property('connection_id');
  }

  describe('list', function() {
    it('Sends the correct request', function() {
      return telnyx.phoneNumbers.voice.list()
        .then(responseFn)
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.phoneNumbers.voice.list(TEST_AUTH_KEY)
        .then(responseFn)
    });
  });
});
