'use strict';

var telnyx = require('../../testUtils').getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = 'KEY187557EC22404DB39975C43ACE661A58_9QdDI7XD5bvyahtaWx1YQo';

var CONFERENCES = [
  'join',
  'mute',
  'unmute',
  'hold',
  'unhold',
]

describe('Calls Resource', function() {
  describe('Call Conferences', function() {
    const conferenceCreateData = {
      name: 'Business',
      call_control_id: '891510ac-f3e4-11e8-af5b-de00688a4901'
    }
    const callConferencesData = {
      join: {
        call_control_id: ''
      },
    }

    function responseFn(response) {
      expect(response.data).to.include({result: 'ok'});
    }

    describe('list', function() {
      function responseFn(response) {
        expect(response.data[0]).to.have.property('id');
        expect(response.data[0]).to.have.property('name');
        expect(response.data[0]).to.include({record_type: 'conference'});
      }

      it('Sends the correct request', function() {
        return telnyx.conferences.list()
          .then(responseFn);
      });
      it('Sends the correct request [with specified auth]', function() {
        return telnyx.conferences.list(TEST_AUTH_KEY)
          .then(responseFn);
      });
    });

    describe('create', function() {
      function responseFn(response) {
        expect(response.data).to.include({
          record_type: 'conference',
          name: 'Business',
        });
        expect(response.data).to.have.property('id');
      }

      it('Sends the correct request', function() {
        return telnyx.conferences.create(conferenceCreateData)
          .then(responseFn);
      });

      it('Sends the correct request [with specified auth]', function() {
        return telnyx.conferences.create(conferenceCreateData, TEST_AUTH_KEY)
          .then(responseFn);
      });
    });

    CONFERENCES.forEach(function(action) {
      describe(action, function() {
        it('Sends the correct request', function() {
          return telnyx.conferences.create(conferenceCreateData)
            .then(function(response) {
              const conference = response.data;
              return conference[action](callConferencesData[action] || {})
                .then(responseFn);
            })
        });
        it('Sends the correct request [with specified auth]', function() {
          return telnyx.conferences.create(conferenceCreateData)
            .then(function(response) {
              const conference = response.data;
              return conference[action](callConferencesData[action] || {}, TEST_AUTH_KEY)
                .then(responseFn);
            })
        });
      });
    });
  });
});
