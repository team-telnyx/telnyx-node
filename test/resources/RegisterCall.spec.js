'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();

describe('Register Call', function () {
  describe('create', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
    }

    it('Sends the correct request', function () {
      return telnyx.registerCall
        .create({
          from: '+15001340938',
          reason: 'Confirm the Doctor appointment.',
          to: '+18005550100',
        })
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.registerCall
        .create(
          {
            from: '+15001340938',
            reason: 'Confirm the Doctor appointment.',
            to: '+18005550100',
          },
          TEST_AUTH_KEY
        )
        .then(responseFn);
    });
  });
});
