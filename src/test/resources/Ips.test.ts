import {
  type ResponsePayloadList,
  type ResponsePayload,
  utils as testUtils,
} from '../utils';
const telnyx = testUtils.getTelnyxMock();

const TEST_AUTH_KEY = testUtils.getUserTelnyxKey();
const TEST_UUID = '123e4567-e89b-12d3-a456-426614174000';

describe('Ips Resource', function () {
  function responseFn(response: ResponsePayload) {
    expect(response.data).toHaveProperty('id');
    expect(response.data).toHaveProperty('connection_id');
    expect(response.data).toHaveProperty('ip_address');
    expect(response.data).toHaveProperty('record_type');
    expect(response.data).toMatchObject({record_type: 'ip'});
  }

  describe('retrieve', function () {
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.ips.retrieve(TEST_UUID).then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.ips.retrieve(TEST_UUID, TEST_AUTH_KEY).then(responseFn);
    });
  });

  describe('create', function () {
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.ips
        .create({connection_id: 'Central BSD-1', ip_address: '192.168.0.0'})
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.ips
        .create(
          {connection_id: 'Central BSD-1', ip_address: '192.168.0.0'},
          TEST_AUTH_KEY,
        )
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth in options]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.ips
        .create(
          {connection_id: 'Central BSD-1', ip_address: '192.168.0.0'},
          {api_key: TEST_AUTH_KEY},
        )
        .then(responseFn);
    });
  });

  describe('list', function () {
    function listResponseFn(response: ResponsePayloadList) {
      expect(response.data[0]).toHaveProperty('id');
      expect(response.data[0]).toHaveProperty('connection_id');
      expect(response.data[0]).toHaveProperty('ip_address');
      expect(response.data[0]).toHaveProperty('record_type');
      expect(response.data[0]).toMatchObject({record_type: 'ip'});
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.ips.list().then(listResponseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.ips.list(TEST_AUTH_KEY).then(listResponseFn);
    });
  });

  describe('Nested', function () {
    function responseFn(response: ResponsePayload) {
      if (response.data) {
        expect(response.data).toHaveProperty('id');
        expect(response.data).toHaveProperty('ip_address');
        expect(response.data).toHaveProperty('connection_id');
        expect(response.data).toMatchObject({record_type: 'ip'});
      }
    }

    describe('del', function () {
      test('Sends the correct request', function () {
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        return telnyx.ips
          .create({connection_id: 'Central BSD-1', ip_address: '192.168.0.0'})
          .then(function (response: ResponsePayload) {
            const ip = response.data;
            // @ts-expect-error TODO: import .d.ts files under src/test folder
            return ip.del().then(responseFn);
          });
      });
      test('Sends the correct request [with specified auth]', function () {
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        return telnyx.ips.retrieve(TEST_UUID).then(function (
          response: ResponsePayload,
        ) {
          const ip = response.data;
          // @ts-expect-error TODO: import .d.ts files under src/test folder
          return ip.del(TEST_AUTH_KEY).then(responseFn);
        });
      });
    });

    describe('update', function () {
      test('Sends the correct request', function () {
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        return telnyx.ips
          .create({connection_id: 'Central BSD-1', ip_address: '192.168.0.0'})
          .then(function (response: ResponsePayload) {
            const ip = response.data;
            return (
              ip
                // @ts-expect-error TODO: import .d.ts files under src/test folder
                .update({
                  connection_id: 'Western BSD-2',
                  ip_address: '192.168.0.0',
                })
                .then(responseFn)
            );
          });
      });
      it('Sends the correct request [with specified auth]', function () {
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        return telnyx.ips.retrieve(TEST_UUID).then(function (
          response: ResponsePayload,
        ) {
          const ip = response.data;
          return (
            ip
              // @ts-expect-error TODO: import .d.ts files under src/test folder
              .update(
                {connection_id: 'Western BSD-2', ip_address: '192.168.0.0'},
                TEST_AUTH_KEY,
              )
              .then(responseFn)
          );
        });
      });
    });
  });
});
