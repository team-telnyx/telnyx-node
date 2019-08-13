'use strict';

var telnyx = require('../../testUtils').getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = 'KEY187557EC22404DB39975C43ACE661A58_9QdDI7XD5bvyahtaWx1YQo';

describe('Messages Alphanumeric Sender Ids Resource', function() {
  const createData = {
    text: 'Hello, World!',
    from: '+18665552368',
    to: [{address: '+18665552367'}],
    messaging_profile_id: '073dd98e-0c85-496b-970f-dd3b7ae21c2se'
  }

  function responseFn(response) {
    expect(response.data).to.include({
      text: 'Hello, World!',
      from: '+18665552368',
    });
    expect(response.data.to[0]).to.include({address: '+18665552367'});
  }

  describe('create', function() {
    it('Sends the correct request', function() {
      return telnyx.messages.alphanumericSenderId.create(createData)
        .then(responseFn)
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.messages.alphanumericSenderId.create(createData, TEST_AUTH_KEY)
        .then(responseFn)
    });

    it('Sends the correct request [with specified auth in options]', function() {
      return telnyx.messages.alphanumericSenderId.create(createData, {api_key: TEST_AUTH_KEY})
        .then(responseFn)
    });
  });
});
