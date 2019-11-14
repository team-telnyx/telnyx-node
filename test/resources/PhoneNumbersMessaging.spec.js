'use strict';

var telnyx = require('../../testUtils').getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = 'KEY187557EC22404DB39975C43ACE661A58_9QdDI7XD5bvyahtaWx1YQo';

describe('Phone Numbers Messaging Resource', function() {
  function responseFn(response) {
    expect(response.data[0]).to.include({
      record_type: 'messaging_settings',
    });
    expect(response.data[0]).to.have.property('id');
    expect(response.data[0]).to.have.property('phone_number');
    expect(response.data[0]).to.have.property('messaging_profile_id');
  }

  describe('list', function() {
    it('Sends the correct request', function() {
      return telnyx.phoneNumbers.messaging.list()
        .then(responseFn)
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.phoneNumbers.messaging.list(TEST_AUTH_KEY)
        .then(responseFn)
    });
  });
});
