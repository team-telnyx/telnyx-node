'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();

describe('del', function() {

    function responseFn(response) {
      if (response.data) {
        expect(response.data).to.have.property('id');
        expect(response.data).to.include({record_type: 'messaging_hosted_number'});
      }
    }

    it('Correct del method', function() {
      return telnyx.messagingHostedNumberOrders.create({'messaging_profile_id': '123456', 'phone_numbers': '+11234567890'})
        .then(function(response) {
          const messagingHostedNumbers = response.data;
          messagingHostedNumbers.id = '123123';
          return messagingHostedNumbers.del()
            .then(responseFn);
        })
    });
});
