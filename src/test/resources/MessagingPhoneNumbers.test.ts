import {
  type ResponsePayloadList,
  type ResponsePayload,
  utils as testUtils,
} from '../utils';
const telnyx = testUtils.getTelnyxMock();

const TEST_AUTH_KEY = testUtils.getUserTelnyxKey();

describe.skip('MessagingPhoneNumbers Resource', function () {
  describe('retrieve', function () {
    function responseFn(response: ResponsePayload) {
      expect(response.data).toMatchObject({
        id: '123',
        record_type: 'messaging_phone_number',
      });
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.messagingPhoneNumbers.retrieve('123').then(function (
        response: ResponsePayload,
      ) {
        expect(response.data).toMatchObject(responseFn);
      });
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.messagingPhoneNumbers
        .retrieve('123', TEST_AUTH_KEY)
        .then(function (response: ResponsePayload) {
          expect(response.data).toMatchObject(responseFn);
        });
    });
  });

  describe('list', function () {
    function responseFn(response: ResponsePayloadList) {
      expect(response.data[0]).toHaveProperty('id');
      expect(response.data[0]).toHaveProperty('phone_number');
      expect(response.data[0]).toMatchObject({
        record_type: 'messaging_phone_number',
      });
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.messagingPhoneNumbers.list().then(responseFn);
    });
    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.messagingPhoneNumbers.list(TEST_AUTH_KEY).then(responseFn);
    });
  });

  describe('update', function () {
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.messagingPhoneNumbers
        .update('123', {
          messaging_product: 'P2P',
        })
        .then(function (response: ResponsePayload) {
          expect(response.data).toMatchObject({
            id: '123',
            messaging_product: 'P2P',
            record_type: 'messaging_phone_number',
          });
        });
    });
  });
});
