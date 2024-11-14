import {
  type ResponsePayloadList,
  type ResponsePayload,
  utils as testUtils,
} from '../utils';
const telnyx = testUtils.getTelnyxMock();

const TEST_AUTH_KEY = testUtils.getUserTelnyxKey();
const TEST_UUID = '123e4567-e89b-12d3-a456-426614174000';

describe('ShortCodes Resource', function () {
  describe('retrieve', function () {
    function responseFn(response: ResponsePayload) {
      expect(response.data).toHaveProperty('id');
      expect(response.data).toHaveProperty('short_code');
      expect(response.data).toHaveProperty('country_code');
      expect(response.data).toHaveProperty('messaging_profile_id');
      expect(response.data).toMatchObject({record_type: 'short_code'});
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.shortCodes.retrieve(TEST_UUID).then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.shortCodes
        .retrieve(TEST_UUID, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('list', function () {
    function responseFn(response: ResponsePayloadList) {
      expect(response.data[0]).toHaveProperty('id');
      expect(response.data[0]).toHaveProperty('short_code');
      expect(response.data[0]).toHaveProperty('country_code');
      expect(response.data[0]).toHaveProperty('messaging_profile_id');
      expect(response.data[0]).toMatchObject({record_type: 'short_code'});
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.shortCodes.list().then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.shortCodes.list(TEST_AUTH_KEY).then(responseFn);
    });
  });

  describe('Nested', function () {
    function responseFn(response: ResponsePayload) {
      if (response.data) {
        expect(response.data).toHaveProperty('id');
        expect(response.data).toHaveProperty('short_code');
        expect(response.data).toHaveProperty('country_code');
        expect(response.data).toHaveProperty('messaging_profile_id');
        expect(response.data).toMatchObject({record_type: 'short_code'});
      }
    }

    describe('update', function () {
      test('Sends the correct request', function () {
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        return telnyx.shortCodes.retrieve(TEST_UUID).then(function (
          response: ResponsePayload,
        ) {
          const mp = response.data;
          // @ts-expect-error TODO: import .d.ts files under src/test folder
          return mp.update({messaging_profile_id: 'uuid'}).then(responseFn);
        });
      });
      test('Sends the correct request [with specified auth]', function () {
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        return telnyx.shortCodes.retrieve(TEST_UUID).then(function (
          response: ResponsePayload,
        ) {
          const mp = response.data;
          return (
            mp
              // @ts-expect-error TODO: import .d.ts files under src/test folder
              .update({messaging_profile_id: 'uuid'}, TEST_AUTH_KEY)
              .then(responseFn)
          );
        });
      });
    });
  });
});
