// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import {
  type ResponsePayloadList,
  type ResponsePayload,
  utils as testUtils,
} from '../utils';
import * as utils from '../../utils';
import {TelnyxObject} from '../../Types';

const telnyx = testUtils.getTelnyxMock();

const TEST_AUTH_KEY =
  'KEY187557EC22404DB39975C43ACE661A58_9QdDI7XD5bvyahtaWx1YQo';

const COMMANDS = [
  'answer',
  'reject',
  'hangup',
  'bridge',
  'speak',
  'fork_start',
  'fork_stop',
  'gather_using_audio',
  'gather_using_speak',
  'gather_stop',
  'playback_start',
  'playback_stop',
  'record_start',
  'record_stop',
  'record_pause',
  'record_resume',
  'refer',
  'send_dtmf',
  'transfer',
  'transcription_start',
  'transcription_stop',
  'enqueue',
  'leave_queue',
];

describe('Calls Resource', function () {
  describe('Call Information', function () {
    describe('retrieve', function () {
      function responseFn(response: ResponsePayload) {
        expect(response.data).toMatchObject({
          call_control_id: expect.anything(),
          record_type: 'call',
        });
      }

      test('Sends the correct request', function () {
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        return telnyx.calls
          .retrieve('891510ac-f3e4-11e8-af5b-de00688a4901')
          .then(responseFn);
      });

      test('Sends the correct request [with specified auth]', function () {
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        return telnyx.calls
          .retrieve('891510ac-f3e4-11e8-af5b-de00688a4901', TEST_AUTH_KEY)
          .then(responseFn);
      });
    });
  });

  describe('Call Events', function () {
    describe('list', function () {
      function responseFn(response: ResponsePayloadList) {
        expect(response.data[0]).toHaveProperty('call_session_id');
        expect(response.data[0]).toHaveProperty('call_leg_id');
        expect(response.data[0]).toHaveProperty('name');
        expect(response.data[0]).toHaveProperty('type');
        expect(response.data[0]).toMatchObject({record_type: 'call_event'});
      }

      test('Sends the correct request', function () {
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        return telnyx.callEvents.list().then(responseFn);
      });
      test('Sends the correct request [with specified auth]', function () {
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        return telnyx.callEvents.list(TEST_AUTH_KEY).then(responseFn);
      });
    });
  });

  describe('Call Commands', function () {
    const callCreateData = {
      connection_id: 'uuid',
      to: '+18005550199',
      from: '+18005550100',
      command_id: '891510ac-f3e4-11e8-af5b-de00688a4901',
    };
    const callCommandsData = {
      bridge: {
        call_control_id: '',
      },
      reject: {
        cause: 'USER_BUSY',
      },
      speak: {
        payload: 'Hello',
        voice: 'female',
        language: 'en-US',
      },
      gather_using_audio: {
        audio_url: 'http://example.com/message.wav',
      },
      gather_using_speak: {
        payload: 'Hello',
        voice: 'male',
        language: 'en-US',
      },
      playback_start: {
        audio_url: 'http://example.com/message.wav',
      },
      record_start: {
        format: 'mp3',
        channels: 'single',
      },
      dtmf: {
        digits: '1www2WABCDw9',
      },
      send_dtmf: {
        digits: '1www2WABCDw9',
      },
      transfer: {
        to: '+13129457420',
      },
      refer: {
        sip_address: 'sip:username@sip.non-telnyx-address.com',
      },
      enqueue: {
        queue_name: 'tier_1_support',
      },
    };

    function responseFn(response: ResponsePayload) {
      expect(response.data).toMatchObject({result: 'ok'});
    }

    describe('create', function () {
      function responseFn(response: ResponsePayload) {
        expect(response.data).toHaveProperty('call_session_id');
        expect(response.data).toHaveProperty('call_leg_id');
        expect(response.data).toHaveProperty('call_control_id');
        expect(response.data).toMatchObject({
          record_type: 'call',
          is_alive: false,
        });
      }

      test('Sends the correct request', function () {
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        return telnyx.calls.create(callCreateData).then(responseFn);
      });

      test('Sends the correct request [with specified auth]', function () {
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        return telnyx.calls
          .create(callCreateData, TEST_AUTH_KEY)
          .then(responseFn);
      });
    });

    describe('dial', function () {
      function responseFn(response: ResponsePayload) {
        expect(response.data).toHaveProperty('call_session_id');
        expect(response.data).toHaveProperty('call_leg_id');
        expect(response.data).toHaveProperty('call_control_id');
        expect(response.data).toMatchObject({
          record_type: 'call',
          is_alive: false,
        });
      }

      test('Sends the correct request', function () {
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        return telnyx.calls.create(callCreateData).then(responseFn);
      });

      test('Sends the correct request [with specified auth]', function () {
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        return telnyx.calls
          .dial(callCreateData, TEST_AUTH_KEY)
          .then(responseFn);
      });
    });

    describe('updateClientState', function () {
      function responseFn(response: ResponsePayload) {
        expect(response).toHaveProperty('data');
      }

      test('Sends the correct request', function () {
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        return telnyx.calls
          .updateClientState('891510ac-f3e4-11e8-af5b-de00688a4901', {
            client_state: 'aGF2ZSBhIG5pY2UgZGF5ID1d',
          })
          .then(responseFn);
      });

      test('Sends the correct request [with specified auth]', function () {
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        return telnyx.calls
          .updateClientState(
            '891510ac-f3e4-11e8-af5b-de00688a4901',
            {client_state: 'aGF2ZSBhIG5pY2UgZGF5ID1d'},
            TEST_AUTH_KEY,
          )
          .then(responseFn);
      });
    });

    COMMANDS.forEach(function (command) {
      describe(command, function () {
        const camelCaseCommand = utils.snakeToCamelCase(command);
        let telnyxInstance: TelnyxObject;

        beforeEach(() => {
          // make specs independent
          telnyxInstance = testUtils.getTelnyxMock();
        });

        test('Sends the correct request', function () {
          // @ts-expect-error TODO: import .d.ts files under src/test folder
          return telnyxInstance.calls
            .create(callCreateData)
            .then(async function (response: ResponsePayload) {
              const call = response.data;
              // // @ts-expect-error TODO: import .d.ts files under src/test folder
              await call[utils.snakeToCamelCase(command)](
                callCommandsData[command] || {'': ''}, // need to pass string due to telnyx mock parse
              ).then(responseFn);

              // // @ts-expect-error TODO: import .d.ts files under src/test folder
              return call[command](callCommandsData[command] || {'': ''}).then(
                // need to pass string due to telnyx mock parse
                responseFn,
              );
            });
        });
        test('Sends the correct request [with specified auth]', function () {
          // @ts-expect-error TODO: import .d.ts files under src/test folder
          return telnyxInstance.calls
            .create(callCreateData)
            .then(async function (response: ResponsePayload) {
              const call = response.data;
              // // @ts-expect-error TODO: import .d.ts files under src/test folder
              await call[utils.snakeToCamelCase(command)](
                callCommandsData[command] || {'': ''}, // need to pass string due to telnyx mock parse
                TEST_AUTH_KEY,
              ).then(responseFn);

              // // @ts-expect-error TODO: import .d.ts files under src/test folder
              return call[command](
                callCommandsData[command] || {'': ''}, // need to pass string due to telnyx mock parse
                TEST_AUTH_KEY,
              ).then(responseFn);
            });
        });

        test('Sends the correct method request [with empty resource instance]', async function () {
          // @ts-expect-error TODO: import .d.ts files under src/test folder
          const call = new telnyxInstance.Call({
            call_control_id: '3fa85f55-5717-4562-b3fc-2c963f63vga6',
          });

          // @ts-expect-error TODO: import .d.ts files under src/test folder
          await call[utils.snakeToCamelCase(command)](
            callCommandsData[command] || {'': ''}, // need to pass string due to telnyx mock parse
          ).then(responseFn);

          // @ts-expect-error TODO: import .d.ts files under src/test folder
          return call[utils.snakeToCamelCase(command)](
            callCommandsData[command] || {'': ''}, // need to pass string due to telnyx mock parse
            TEST_AUTH_KEY,
          ).then(responseFn);
        });

        test('Sends the correct method request [with empty resource instance and specified auth]', async function () {
          // @ts-expect-error TODO: import .d.ts files under src/test folder
          const call = new telnyxInstance.Call({
            call_control_id: '3fa85f55-5717-4562-b3fc-2c963f63vga6',
          });

          //  @ts-expect-error TODO: import .d.ts files under src/test folder
          await call[command](
            callCommandsData[command] || {'': ''}, // need to pass string due to telnyx mock parse
            TEST_AUTH_KEY,
          ).then(responseFn);
          // @ts-expect-error TODO: import .d.ts files under src/test folder
          return call[command](callCommandsData[command] || {'': ''}).then(
            responseFn,
          );
        });

        if (camelCaseCommand !== command) {
          describe(camelCaseCommand, function () {
            test('Sends the correct request', function () {
              // @ts-expect-error TODO: import .d.ts files under src/test folder
              return telnyxInstance.calls.create(callCreateData).then(function (
                response: ResponsePayload,
              ) {
                const call = response.data;

                // // @ts-expect-error TODO: import .d.ts files under src/test folder
                return call[camelCaseCommand](
                  callCommandsData[command] || {'': ''}, // need to pass string due to telnyx mock parse
                ).then(responseFn);
              });
            });
            test('Sends the correct request [with specified auth]', function () {
              // @ts-expect-error TODO: import .d.ts files under src/test folder
              return telnyxInstance.calls.create(callCreateData).then(function (
                response: ResponsePayload,
              ) {
                const call = response.data;

                // // @ts-expect-error TODO: import .d.ts files under src/test folder
                return call[camelCaseCommand](
                  callCommandsData[command] || {'': ''}, // need to pass string due to telnyx mock parse
                  TEST_AUTH_KEY,
                ).then(responseFn);
              });
            });
          });
        }
      });
    });
  });
});
