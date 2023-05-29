'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();

var CONFERENCES = [
  'join',
  'mute',
  'unmute',
  'hold',
  'unhold',
  'speak',
  'play',
  'stop',
  'record_start',
  'record_stop',
  'update',
  'leave',
  'dial_participant',
];

var CONFERENCE_ID = '41b9acd4-f4da-4ff5-a85c-e07e90b53f46';

describe('Calls Resource', function () {
  describe('Call Conferences', function () {
    const conferenceCreateData = {
      name: 'Business',
      call_control_id: '891510ac-f3e4-11e8-af5b-de00688a4901',
    };
    const callConferencesData = {
      join: {
        call_control_id: '891510ac-f3e4-11e8-af5b-de00688a4901',
      },
      unhold: {
        call_control_ids: ['891510ac-f3e4-11e8-af5b-de00688a4901'],
      },
      speak: {
        language: 'en-US',
        payload: 'Say this to participants',
        voice: 'female',
      },
      play: {
        media_name: 'my_media_uploaded_to_media_storage_api',
      },
      record_start: {
        channels: 'single',
        format: 'wav',
      },
      update: {
        call_control_id: '891510ac-f3e4-11e8-af5b-de00688a4901',
        supervisor_role: 'whisper',
      },
      leave: {
        call_control_id: '891510ac-f3e4-11e8-af5b-de00688a4901',
      },
      dial_participant: {
        call_control_id: '891510ac-f3e4-11e8-af5b-de00688a4901',
        from: '+15555555555',
        to: '+16666666666',
      },
    };

    function responseFn(response) {
      expect(response.data).to.include({result: 'ok'});
    }

    describe('list', function () {
      function responseFn(response) {
        expect(response.data[0]).to.have.property('id');
        expect(response.data[0]).to.have.property('name');
        expect(response.data[0]).to.include({record_type: 'conference'});
      }

      it('Sends the correct request', function () {
        return telnyx.conferences.list().then(responseFn);
      });
      it('Sends the correct request [with specified auth]', function () {
        return telnyx.conferences.list(TEST_AUTH_KEY).then(responseFn);
      });
    });

    describe('retrieve', function () {
      function responseFn(response) {
        expect(response.data).to.have.property('id');
        expect(response.data).to.have.property('name');
        expect(response.data).to.include({record_type: 'conference'});
      }

      it('Sends the correct request', function () {
        return telnyx.conferences.retrieve(CONFERENCE_ID).then(responseFn);
      });
      it('Sends the correct request [with specified auth]', function () {
        return telnyx.conferences
          .retrieve(CONFERENCE_ID, TEST_AUTH_KEY)
          .then(responseFn);
      });
    });

    describe('create', function () {
      function responseFn(response) {
        expect(response.data).to.have.property('id');
        expect(response.data).to.have.property('name');
        expect(response.data).to.include({
          record_type: 'conference',
        });
      }

      it('Sends the correct request', function () {
        return telnyx.conferences.create(conferenceCreateData).then(responseFn);
      });

      it('Sends the correct request [with specified auth]', function () {
        return telnyx.conferences
          .create(conferenceCreateData, TEST_AUTH_KEY)
          .then(responseFn);
      });
    });

    describe('participants', function () {
      function responseFn(response) {
        expect(response.data[0]).to.include({
          record_type: 'participant',
        });
        expect(response.data[0]).to.have.property('conference');
        expect(response.data[0]).to.have.property('call_control_id');
        expect(response.data[0]).to.have.property('end_conference_on_exit');
        expect(response.data[0]).to.have.property('muted');
        expect(response.data[0]).to.have.property('on_hold');
      }

      it('Sends the correct request', function () {
        return telnyx.conferences
          .participants(CONFERENCE_ID, {filter: {muted: true}})
          .then(responseFn);
      });

      it('Sends the correct request [with specified auth]', function () {
        return telnyx.conferences
          .participants(CONFERENCE_ID, TEST_AUTH_KEY)
          .then(responseFn);
      });
    });

    CONFERENCES.forEach(function (action) {
      describe(action, function () {
        let telnyxInstance;

        this.beforeEach(() => {
          // make specs independent
          telnyxInstance = require('../../testUtils').getTelnyxMock();
        });

        it('Sends the correct request', function () {
          return telnyxInstance.conferences
            .create(conferenceCreateData)
            .then(function (response) {
              const conference = response.data;
              return conference[action](callConferencesData[action] || {}).then(
                responseFn
              );
            });
        });
        it('Sends the correct request [with specified auth]', function () {
          return telnyxInstance.conferences
            .create(conferenceCreateData)
            .then(function (response) {
              const conference = response.data;
              return conference[action](
                callConferencesData[action] || {},
                TEST_AUTH_KEY
              ).then(responseFn);
            });
        });

        it('Sends the correct request [with empty resource instance]', function () {
          const conference = new telnyxInstance.Conference({
            id: '891510ac-f3e4-11e8-af5b-de00688a4901',
          });

          return conference[action](callConferencesData[action] || {}).then(
            responseFn
          );
        });
        it('Sends the correct request [with empty resource instance and specified auth]', function () {
          const conference = new telnyxInstance.Conference({
            id: '891510ac-f3e4-11e8-af5b-de00688a4901',
          });

          return conference[action](
            callConferencesData[action] || {},
            TEST_AUTH_KEY
          ).then(responseFn);
        });
      });
    });
  });
});
