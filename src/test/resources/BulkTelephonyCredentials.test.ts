import {type ResponsePayload, utils as testUtils} from '../utils';
const telnyx = testUtils.getTelnyxMock();

const TEST_AUTH_KEY = testUtils.getUserTelnyxKey();

// not found in API Spec
describe.skip('Bulk Telephony Credentials', function () {
  describe('create', function () {
    function responseFn(response: ResponsePayload) {
      expect(response).toHaveProperty('data');
      expect(response.data).toHaveProperty('credentials');
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.bulkTelephonyCredentials
        .create({
          connection_id: '804252963366242252',
          name: 'Default Name',
          tag: 'My Credentials',
        })
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.bulkTelephonyCredentials
        .create(
          {
            connection_id: '804252963366242252',
            name: 'Default Name',
            tag: 'My Credentials',
          },
          TEST_AUTH_KEY,
        )
        .then(responseFn);
    });
  });
  describe('delete', function () {
    function responseFn(response: ResponsePayload) {
      expect(response).toHaveProperty('data');
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.bulkTelephonyCredentials
        .deleteCredentials({
          filter: {
            tag: 'data',
          },
        })
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.bulkTelephonyCredentials
        .deleteCredentials(
          {
            filter: {
              tag: 'data',
            },
          },
          TEST_AUTH_KEY,
        )
        .then(responseFn);
    });
  });
  describe('update', function () {
    function responseFn(response: ResponsePayload) {
      expect(response).toHaveProperty('data');
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.bulkTelephonyCredentials
        .updateCredentials({
          filter: {
            tag: 'data',
          },
        })
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.bulkTelephonyCredentials
        .updateCredentials(
          {
            connection_id: '804252963366242252',
            tag: 'My Credentials',
            filter: {
              tag: 'data',
            },
          },
          TEST_AUTH_KEY,
        )
        .then(responseFn);
    });
  });
});
