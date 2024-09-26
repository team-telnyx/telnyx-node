import {
  type ResponsePayloadList,
  type ResponsePayload,
  utils as testUtils,
} from '../utils';
const telnyx = testUtils.getTelnyxMock();

const TEST_AUTH_KEY = testUtils.getUserTelnyxKey();

describe('FqdnConnections Resource', function () {
  function responseFn(response: ResponsePayload) {
    expect(response.data).toHaveProperty('id');
    expect(response.data).toHaveProperty('connection_name');
    expect(response.data).toHaveProperty('record_type');
    expect(response.data).toMatchObject({record_type: 'fqdn_connection'});
  }

  describe('retrieve', function () {
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.fqdnConnections.retrieve('123').then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.fqdnConnections
        .retrieve('123', TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('create', function () {
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.fqdnConnections
        .create({connection_name: 'Central BSD-1'})
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.fqdnConnections
        .create({connection_name: 'Central BSD-1'}, TEST_AUTH_KEY)
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth in options]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.fqdnConnections
        .create({connection_name: 'Central BSD-1'}, {api_key: TEST_AUTH_KEY})
        .then(responseFn);
    });
  });

  describe('list', function () {
    function listResponseFn(response: ResponsePayloadList) {
      expect(response.data[0]).toHaveProperty('id');
      expect(response.data[0]).toHaveProperty('connection_name');
      expect(response.data[0]).toHaveProperty('record_type');
      expect(response.data[0]).toMatchObject({record_type: 'fqdn_connection'});
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.fqdnConnections.list().then(listResponseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.fqdnConnections.list(TEST_AUTH_KEY).then(listResponseFn);
    });
  });

  describe('Nested', function () {
    function responseFn(response: ResponsePayload) {
      if (response.data) {
        expect(response.data).toHaveProperty('id');
        expect(response.data).toHaveProperty('connection_name');
        expect(response.data).toMatchObject({record_type: 'fqdn_connection'});
      }
    }

    describe('del', function () {
      test('Sends the correct request', function () {
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        return telnyx.fqdnConnections
          .create({connection_name: 'Central BSD-1'})
          .then(function (response: ResponsePayload) {
            const mp = response.data;
            // @ts-expect-error TODO: import .d.ts files under src/test folder
            return mp.del().then(responseFn);
          });
      });
      test('Sends the correct request [with specified auth]', function () {
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        return telnyx.fqdnConnections.retrieve('123').then(function (
          response: ResponsePayload,
        ) {
          const mp = response.data;
          // @ts-expect-error TODO: import .d.ts files under src/test folder
          return mp.del(TEST_AUTH_KEY).then(responseFn);
        });
      });
    });

    describe('update', function () {
      test('Sends the correct request', function () {
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        return telnyx.fqdnConnections
          .create({connection_name: 'Central BSD-1'})
          .then(function (response: ResponsePayload) {
            const mp = response.data;
            return (
              mp
                // @ts-expect-error TODO: import .d.ts files under src/test folder
                .update({connection_name: 'Western BSD-2'})
                .then(responseFn)
            );
          });
      });
      test('Sends the correct request [with specified auth]', function () {
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        return telnyx.fqdnConnections.retrieve('123').then(function (
          response: ResponsePayload,
        ) {
          const mp = response.data;
          return (
            mp
              // @ts-expect-error TODO: import .d.ts files under src/test folder
              .update({connection_name: 'Western BSD-2'}, TEST_AUTH_KEY)
              .then(responseFn)
          );
        });
      });
    });
  });
});
