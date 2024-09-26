import {
  type ResponsePayloadList,
  type ResponsePayload,
  utils as testUtils,
} from '../utils';
const telnyx = testUtils.getTelnyxMock();

const TEST_AUTH_KEY = testUtils.getUserTelnyxKey();

describe.skip('Messaging AlphanumericSenderIds Resource', function () {
  describe('retrieve', function () {
    function responseFn(response: ResponsePayload) {
      expect(response.data).toMatchObject({
        id: '123',
        messaging_profile_id: '123',
        record_type: 'alphanumeric_sender_id',
      });
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.messagingSenderIds.retrieve('123').then(function (
        response: ResponsePayload,
      ) {
        expect(response.data).toMatchObject(responseFn);
      });
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.messagingSenderIds
        .retrieve('123', TEST_AUTH_KEY)
        .then(function (response: ResponsePayload) {
          expect(response.data).toMatchObject(responseFn);
        });
    });
  });

  describe('create', function () {
    function responseFn(response: ResponsePayload) {
      expect(response.data).toMatchObject({
        alphanumeric_sender_id: 'Summer Campaign',
        record_type: 'alphanumeric_sender_id',
      });
    }

    function responseFnNoBody(response: ResponsePayload) {
      expect(response.data).toHaveProperty('id');
      expect(response.data).toHaveProperty('alphanumeric_sender_id');
      expect(response.data).toHaveProperty('record_type');
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.messagingSenderIds
        .create({alphanumeric_sender_id: 'Summer Campaign'})
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.messagingSenderIds
        .create({alphanumeric_sender_id: 'Summer Campaign'}, TEST_AUTH_KEY)
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth and no body]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.messagingSenderIds
        .create({}, TEST_AUTH_KEY)
        .then(responseFnNoBody);
    });

    test('Sends the correct request [with specified auth in options]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.messagingSenderIds
        .create(
          {alphanumeric_sender_id: 'Summer Campaign'},
          {api_key: TEST_AUTH_KEY},
        )
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth in options and no body]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.messagingSenderIds
        .create({}, {api_key: TEST_AUTH_KEY})
        .then(responseFnNoBody);
    });
  });

  describe('del', function () {
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.messagingSenderIds.del('123').then(function (
        response: ResponsePayload,
      ) {
        expect(response.data).toMatchObject({
          id: '123',
          record_type: 'alphanumeric_sender_id',
        });
      });
    });
  });

  describe('list', function () {
    function responseFn(response: ResponsePayloadList) {
      expect(response.data[0]).toHaveProperty('id');
      expect(response.data[0]).toHaveProperty('alphanumeric_sender_id');
      expect(response.data[0]).toMatchObject({
        record_type: 'alphanumeric_sender_id',
      });
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.messagingSenderIds.list().then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.messagingSenderIds.list(TEST_AUTH_KEY).then(responseFn);
    });
  });
});
