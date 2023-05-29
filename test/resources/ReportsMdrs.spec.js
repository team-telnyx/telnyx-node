'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();

describe('reportsMdrs', function () {
  describe('list', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
    }

    it('Sends the correct request', function () {
      return telnyx.reportsMdrs
        .list({
          start_date: 'string',
          end_date: 'string',
          id: 'e093fbe0-5bde-11eb-ae93-0242ac130002',
          direction: 'INBOUND',
          profile: 'My profile',
          cld: '+15551237654',
          cli: '+15551237654',
          status: 'DELIVERED',
          message_type: 'SMS',
        })
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.reportsMdrs
        .list(
          {
            start_date: 'string',
            end_date: 'string',
            id: 'e093fbe0-5bde-11eb-ae93-0242ac130002',
            direction: 'INBOUND',
            profile: 'My profile',
            cld: '+15551237654',
            cli: '+15551237654',
            status: 'DELIVERED',
            message_type: 'SMS',
          },
          TEST_AUTH_KEY
        )
        .then(responseFn);
    });
  });
});
