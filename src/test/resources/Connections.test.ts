import {
  type ResponsePayloadList,
  type ResponsePayload,
  utils as testUtils,
} from '../utils';
const telnyx = testUtils.getTelnyxMock();

const TEST_AUTH_KEY = testUtils.getUserTelnyxKey();

describe('Connections Resource', function () {
  function responseFn(response: ResponsePayload) {
    expect(response.data).toHaveProperty('id');
    expect(response.data).toHaveProperty('connection_name');
    expect(response.data).toMatchObject({record_type: 'ip_connection'});
  }

  describe('retrieve', function () {
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.connections.retrieve('123').then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.connections.retrieve('123', TEST_AUTH_KEY).then(responseFn);
    });
  });

  describe('list', function () {
    function listResponseFn(response: ResponsePayloadList) {
      expect(response.data[0]).toHaveProperty('id');
      expect(response.data[0]).toHaveProperty('connection_name');
      expect(response.data[0]).toMatchObject({record_type: 'ip_connection'});
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.connections.list().then(listResponseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.connections.list(TEST_AUTH_KEY).then(listResponseFn);
    });
  });
});
