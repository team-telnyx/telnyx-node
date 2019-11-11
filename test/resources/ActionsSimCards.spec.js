'use strict';

var telnyx = require('../../testUtils').getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = 'KEY187557EC22404DB39975C43ACE661A58_9QdDI7XD5bvyahtaWx1YQo';

describe('SimCards Actions Resource', function() {
  const registerData = {
    registration_codes: [
      '2578318790'
    ],
    sim_card_group_id: '6a09cdc3-8948-47f0-aa62-74ac943d6c58'
  };

  function responseFn(response) {
    expect(response.data[0]).to.include({
      record_type: 'sim_card',
    });
    expect(response.data[0]).to.have.property('id');
    expect(response.data[0]).to.have.property('status');
    expect(response.data[0]).to.have.property('iccid');
    expect(response.data[0]).to.have.property('sim_card_group_id');
  }

  describe('register', function() {
    it('Sends the correct request', function() {
      return telnyx.actions.simCards.register(registerData)
        .then(responseFn)
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.actions.simCards.register(registerData, TEST_AUTH_KEY)
        .then(responseFn)
    });
  });
});
