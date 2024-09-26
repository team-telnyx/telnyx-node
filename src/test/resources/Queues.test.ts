import {
  type ResponsePayloadList,
  type ResponsePayload,
  utils as testUtils,
} from '../utils';
const telnyx = testUtils.getTelnyxMock();

const TEST_AUTH_KEY = testUtils.getUserTelnyxKey();

describe('Queues Resource', function () {
  describe('retrieve', function () {
    function responseFn(response: ResponsePayload) {
      expect(response.data).toMatchObject({name: 'support'});
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.queues.retrieve('support').then(responseFn);
    });

    // TelnyxResource can't handle named param in get like here
    test.skip('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.queues.retrieve('support', TEST_AUTH_KEY).then(responseFn);
    });
  });

  describe('listCalls', function () {
    function responseFn(response: ResponsePayloadList) {
      expect(response.data[0]).toHaveProperty('call_control_id');
      expect(response.data[0]).toHaveProperty('queue_position');
      expect(response.data[0]).toMatchObject({record_type: 'queue_call'});
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.queues.listCalls('support').then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.queues
        .retrieveCall('support', '891510ac-f3e4-11e8-af5b-de00688a4901')
        .then(responseFn);
    });
  });

  describe('retrieveCall', function () {
    function responseFn(response: ResponsePayload) {
      expect(response.data).toHaveProperty('call_control_id');
      expect(response.data).toHaveProperty('queue_position');
      expect(response.data).toMatchObject({record_type: 'queue_call'});
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.queues
        .retrieveCall('queue_id', 'call_control_id')
        .then(responseFn);
    });
  });
});
