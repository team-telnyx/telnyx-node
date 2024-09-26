import {type ResponsePayload, utils as testUtils} from '../utils';
const telnyx = testUtils.getTelnyxMock();

const TEST_AUTH_KEY = testUtils.getUserTelnyxKey();

describe('Access IP Addresses Resource', function () {
  describe('retrieve', function () {
    function responseFn(response: ResponsePayload) {
      expect(response).toHaveProperty('created_at');
      expect(response).toHaveProperty('description');
      expect(response).toHaveProperty('id');
      expect(response).toHaveProperty('ip_address');
      expect(response).toHaveProperty('source');
      expect(response).toHaveProperty('status');
      expect(response).toHaveProperty('updated_at');
      expect(response).toHaveProperty('user_id');
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.accessIpAddress.retrieve('123').then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.accessIpAddress
        .retrieve('123', TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('list', function () {
    function responseFn(response: ResponsePayload) {
      expect(response).toHaveProperty('data');
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.accessIpAddress.list().then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.accessIpAddress.list(TEST_AUTH_KEY).then(responseFn);
    });
  });

  describe('create', function () {
    function responseFn(response: ResponsePayload) {
      expect(response).toHaveProperty('created_at');
      expect(response).toHaveProperty('description');
      expect(response).toHaveProperty('id');
      expect(response).toHaveProperty('ip_address');
      expect(response).toHaveProperty('source');
      expect(response).toHaveProperty('status');
      expect(response).toHaveProperty('updated_at');
      expect(response).toHaveProperty('user_id');
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.accessIpAddress
        .create({
          ip_address: 'ip_address',
        })
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.accessIpAddress
        .create(
          {
            description: 'test description',
            ip_address: '127.0.0.0',
          },
          TEST_AUTH_KEY,
        )
        .then(responseFn);
    });
  });
  describe('del', function () {
    function responseFn(response: ResponsePayload) {
      expect(response).toHaveProperty('created_at');
      expect(response).toHaveProperty('description');
      expect(response).toHaveProperty('id');
      expect(response).toHaveProperty('ip_address');
      expect(response).toHaveProperty('source');
      expect(response).toHaveProperty('status');
      expect(response).toHaveProperty('updated_at');
      expect(response).toHaveProperty('user_id');
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.accessIpAddress.del('1').then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.accessIpAddress.del('1', TEST_AUTH_KEY).then(responseFn);
    });
  });
});
