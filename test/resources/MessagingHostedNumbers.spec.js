'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

describe('retrieve', function () {
  function responseFn(response) {
    if (response.data) {
      expect(response.data).to.have.property('id');
      expect(response.data).to.include({
        record_type: 'messaging_hosted_numbers',
      });
    }
  }
  it('Sends the correct request [with specified auth]', function () {
    return telnyx.messagingHostedNumbers.retrieve('123').then(responseFn);
  });
});
