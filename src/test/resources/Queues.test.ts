import {TelnyxObject} from '../../Types';
import {
  type ResponsePayloadList,
  type ResponsePayload,
  utils as testUtils,
} from '../utils';

const TEST_AUTH_KEY = testUtils.getUserTelnyxKey();

describe('Queues Resource', function () {
  describe('retrieve', function () {
    let telnyxInstance: TelnyxObject;

    beforeEach(() => {
      // make specs independent
      telnyxInstance = testUtils.getTelnyxMock();
    });

    function responseFn(response: ResponsePayload) {
      expect(response.data).toMatchObject({name: 'support'});
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyxInstance.queues.retrieve('support').then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyxInstance.queues
        .retrieve('support', TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('listCalls', function () {
    let telnyxInstance: TelnyxObject;

    beforeEach(() => {
      // make specs independent
      telnyxInstance = testUtils.getTelnyxMock();
    });

    function responseFn(response: ResponsePayloadList) {
      expect(response.data[0]).toHaveProperty('call_control_id');
      expect(response.data[0]).toHaveProperty('queue_position');
      expect(response.data[0]).toMatchObject({record_type: 'queue_call'});
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyxInstance.queues.listCalls('support').then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyxInstance.queues
        .listCalls('support', TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('retrieveCall', function () {
    let telnyxInstance: TelnyxObject;

    beforeEach(() => {
      // make specs independent
      telnyxInstance = testUtils.getTelnyxMock();
    });

    function responseFn(response: ResponsePayload) {
      expect(response.data).toHaveProperty('call_control_id');
      expect(response.data).toHaveProperty('queue_position');
      expect(response.data).toMatchObject({record_type: 'queue_call'});
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyxInstance.queues
        .retrieveCall('queue_id', 'call_control_id')
        .then(responseFn);
    });

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyxInstance.queues
        .retrieveCall('queue_id', 'call_control_id', TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
});
