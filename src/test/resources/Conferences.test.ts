// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import {
  type ResponsePayloadList,
  type ResponsePayload,
  utils as testUtils,
} from '../utils';
import {TelnyxObject} from '../../Types';
const telnyx = testUtils.getTelnyxMock();

const TEST_AUTH_KEY = testUtils.getUserTelnyxKey();

const CONFERENCES = [
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
  'record_resume',
  'record_pause',
  'update',
  'leave',
];

const CONFERENCE_ID = '41b9acd4-f4da-4ff5-a85c-e07e90b53f46';

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
      payload: 'Say this to listParticipants',
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

  function responseFn(response: ResponsePayload) {
    expect(response.data).toMatchObject({result: 'ok'});
  }

  describe('list', function () {
    function responseFn(response: ResponsePayloadList) {
      expect(response.data[0]).toHaveProperty('id');
      expect(response.data[0]).toHaveProperty('name');
      expect(response.data[0]).toMatchObject({record_type: 'conference'});
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.conferences.list().then(responseFn);
    });
    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.conferences.list(TEST_AUTH_KEY).then(responseFn);
    });
  });

  describe('retrieve', function () {
    function responseFn(response: ResponsePayload) {
      expect(response.data).toHaveProperty('id');
      expect(response.data).toHaveProperty('name');
      expect(response.data).toMatchObject({record_type: 'conference'});
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.conferences.retrieve(CONFERENCE_ID).then(responseFn);
    });
    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.conferences
        .retrieve(CONFERENCE_ID, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('create', function () {
    function responseFn(response: ResponsePayload) {
      expect(response.data).toHaveProperty('id');
      expect(response.data).toHaveProperty('name');
      expect(response.data).toMatchObject({
        record_type: 'conference',
      });
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.conferences.create(conferenceCreateData).then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.conferences
        .create(conferenceCreateData, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('listParticipants', function () {
    function responseFn(response: ResponsePayloadList) {
      expect(response.data[0]).toMatchObject({
        record_type: 'participant',
      });
      expect(response.data[0]).toHaveProperty('conference');
      expect(response.data[0]).toHaveProperty('call_control_id');
      expect(response.data[0]).toHaveProperty('end_conference_on_exit');
      expect(response.data[0]).toHaveProperty('muted');
      expect(response.data[0]).toHaveProperty('on_hold');
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.conferences
        .listParticipants(CONFERENCE_ID, {filter: {muted: true}})
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.conferences
        .listParticipants(CONFERENCE_ID, TEST_AUTH_KEY)
        .then(responseFn);
    });

    test('Sends the correct request [nested without resource instance]', function () {
      return telnyx.conferences.retrieve(CONFERENCE_ID).then(function (
        response: ResponsePayload,
      ) {
        const conference = response.data;

        // @ts-expect-error TODO: import .d.ts files under src/test folder
        return conference
          .listParticipants({filter: {muted: true}})
          .then(responseFn);
      });
    });

    test('Sends the correct request [nested without resource instance with specified auth]', function () {
      return telnyx.conferences.retrieve(CONFERENCE_ID).then(function (
        response: ResponsePayload,
      ) {
        const conference = response.data;

        // @ts-expect-error TODO: import .d.ts files under src/test folder
        return conference
          .listParticipants({filter: {muted: true}}, TEST_AUTH_KEY)
          .then(responseFn);
      });
    });
  });

  CONFERENCES.forEach(function (action) {
    describe(action, function () {
      let telnyxInstance: TelnyxObject;

      beforeEach(() => {
        // make specs independent
        telnyxInstance = testUtils.getTelnyxMock();
      });

      test('Sends the correct request [nested]', function () {
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        return telnyxInstance.conferences
          .create(conferenceCreateData)
          .then(function (response: ResponsePayload) {
            const conference = response.data;
            // // @ts-expect-error TODO: import .d.ts files under src/test folder
            return conference[action](
              callConferencesData[action] || {'': ''}, // need to pass string due to telnyx mock parse
            ).then(responseFn);
          });
      });
      test('Sends the correct request [nested with specified auth]', function () {
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        return telnyxInstance.conferences
          .create(conferenceCreateData)
          .then(function (response: ResponsePayload) {
            const conference = response.data;
            // // @ts-expect-error TODO: import .d.ts files under src/test folder
            return conference[action](
              callConferencesData[action] || {'': ''}, // need to pass string due to telnyx mock parse
              TEST_AUTH_KEY,
            ).then(responseFn);
          });
      });

      test('Sends the correct request [without resource instance]', function () {
        return telnyxInstance.conferences[action](
          '891510ac-f3e4-11e8-af5b-de00688a4901',
          callConferencesData[action] || {'': ''},
        ).then(
          // need to pass string due to telnyx mock parse
          responseFn,
        );
      });
      test('Sends the correct request [without resource instance and specified auth]', function () {
        // // @ts-expect-error TODO: import .d.ts files under src/test folder
        return telnyxInstance.conferences[action](
          '891510ac-f3e4-11e8-af5b-de00688a4901',
          callConferencesData[action] || {'': ''}, // need to pass string due to telnyx mock parse
          TEST_AUTH_KEY,
        ).then(responseFn);
      });
    });
  });
});
