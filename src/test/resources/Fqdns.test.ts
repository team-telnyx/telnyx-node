import {
  type ResponsePayloadList,
  type ResponsePayload,
  utils as testUtils,
} from '../utils';
const telnyx = testUtils.getTelnyxMock();

const TEST_AUTH_KEY = testUtils.getUserTelnyxKey();

describe('Fqdns Resource', function () {
  function responseFn(response: ResponsePayload) {
    expect(response.data).toHaveProperty('id');
    expect(response.data).toHaveProperty('connection_id');
    expect(response.data).toHaveProperty('fqdn');
    expect(response.data).toHaveProperty('record_type');
    expect(response.data).toMatchObject({record_type: 'fqdn'});
  }

  describe('retrieve', function () {
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.fqdns.retrieve('123').then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.fqdns.retrieve('123', TEST_AUTH_KEY).then(responseFn);
    });
  });

  describe('create', function () {
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.fqdns
        .create({
          connection_id: 'Central BSD-1',
          fqdn: 'example.com',
          dns_record_type: 'a',
        })
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.fqdns
        .create(
          {
            connection_id: 'Central BSD-1',
            fqdn: 'example.com',
            dns_record_type: 'a',
          },
          TEST_AUTH_KEY,
        )
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth in options]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.fqdns
        .create(
          {
            connection_id: 'Central BSD-1',
            fqdn: 'example.com',
            dns_record_type: 'a',
          },
          {api_key: TEST_AUTH_KEY},
        )
        .then(responseFn);
    });
  });

  describe('list', function () {
    function listResponseFn(response: ResponsePayloadList) {
      expect(response.data[0]).toHaveProperty('id');
      expect(response.data[0]).toHaveProperty('connection_id');
      expect(response.data[0]).toHaveProperty('fqdn');
      expect(response.data[0]).toHaveProperty('record_type');
      expect(response.data[0]).toMatchObject({record_type: 'fqdn'});
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.fqdns.list().then(listResponseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.fqdns.list(TEST_AUTH_KEY).then(listResponseFn);
    });
  });

  describe('Nested', function () {
    function responseFn(response: ResponsePayload) {
      if (response.data) {
        expect(response.data).toHaveProperty('id');
        expect(response.data).toHaveProperty('connection_id');
        expect(response.data).toHaveProperty('fqdn');
        expect(response.data).toMatchObject({record_type: 'fqdn'});
      }
    }

    describe('del', function () {
      test('Sends the correct request', function () {
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        return telnyx.fqdns
          .create({
            connection_id: 'Central BSD-1',
            fqdn: 'example.com',
            dns_record_type: 'a',
          })
          .then(function (response: ResponsePayload) {
            const fqdn = response.data;
            // @ts-expect-error TODO: import .d.ts files under src/test folder
            return fqdn.del().then(responseFn);
          });
      });
      test('Sends the correct request [with specified auth]', function () {
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        return telnyx.fqdns.retrieve('123').then(function (
          response: ResponsePayload,
        ) {
          const fqdn = response.data;
          // @ts-expect-error TODO: import .d.ts files under src/test folder
          return fqdn.del(TEST_AUTH_KEY).then(responseFn);
        });
      });
    });

    describe('update', function () {
      test('Sends the correct request', function () {
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        return telnyx.fqdns
          .create({
            connection_id: 'Central BSD-1',
            fqdn: 'example.com',
            dns_record_type: 'a',
          })
          .then(function (response: ResponsePayload) {
            const fqdn = response.data;
            return (
              fqdn
                // @ts-expect-error TODO: import .d.ts files under src/test folder
                .update({connection_id: 'Western BSD-2'})
                .then(responseFn)
            );
          });
      });
      test('Sends the correct request [with specified auth]', function () {
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        return telnyx.fqdns.retrieve('123').then(function (
          response: ResponsePayload,
        ) {
          const fqdn = response.data;
          return (
            fqdn
              // @ts-expect-error TODO: import .d.ts files under src/test folder
              .update({connection_id: 'Western BSD-2'}, TEST_AUTH_KEY)
              .then(responseFn)
          );
        });
      });
    });
  });
});
