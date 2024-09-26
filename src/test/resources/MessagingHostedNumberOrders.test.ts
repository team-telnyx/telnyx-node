import {
  type ResponsePayloadList,
  type ResponsePayload,
  utils as testUtils,
} from '../utils';
const telnyx = testUtils.getTelnyxMock();

const TEST_AUTH_KEY = testUtils.getUserTelnyxKey();
const TEST_UUID = '123e4567-e89b-12d3-a456-426614174000';

describe('Messaging Hosted Order Numbers', function () {
  function responseFn(response: ResponsePayload) {
    expect(response.data).toMatchObject({
      record_type: 'messaging_hosted_number_order',
    });
    expect(response.data).toHaveProperty('status');
    expect(response.data).toHaveProperty('id');
  }

  describe('list', function () {
    function listResponseFn(response: ResponsePayloadList) {
      expect(response.data[0]).toHaveProperty('id');
      expect(response.data[0]).toMatchObject({
        record_type: 'messaging_hosted_number_order',
      });
    }
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.messagingHostedNumberOrders.list().then(listResponseFn);
    });
    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.messagingHostedNumberOrders
        .list(TEST_AUTH_KEY)
        .then(listResponseFn);
    });
  });

  describe('retrieve', function () {
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.messagingHostedNumberOrders
        .retrieve(TEST_UUID)
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.messagingHostedNumberOrders
        .retrieve(TEST_UUID, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('create', function () {
    function responseFnNoBody(response: ResponsePayload) {
      expect(response.data).toHaveProperty('id');
      expect(response.data).toMatchObject({
        record_type: 'messaging_hosted_number_order',
      });
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.messagingHostedNumberOrders
        .create({messaging_profile_id: '442191469269222625'})
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.messagingHostedNumberOrders
        .create({messaging_profile_id: '442191469269222625'}, TEST_AUTH_KEY)
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth and no body]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.messagingHostedNumberOrders
        .create({'': ''}, TEST_AUTH_KEY) // need to pass string due to telnyx mock parse
        .then(responseFnNoBody);
    });
  });

  describe('del', function () {
    function responseFn(response: ResponsePayload) {
      if (response.data) {
        expect(response.data).toHaveProperty('id');
        expect(response.data).toMatchObject({
          record_type: 'messaging_hosted_numbers',
        });
      }
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.messagingHostedNumberOrders.del('123').then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.messagingHostedNumberOrders
        .del('123', TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
});
