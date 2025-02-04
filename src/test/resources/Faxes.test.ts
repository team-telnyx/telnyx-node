import {
  type ResponsePayloadList,
  type ResponsePayload,
  utils as testUtils,
} from '../utils';
const telnyx = testUtils.getTelnyxMock();

const TEST_AUTH_KEY = testUtils.getUserTelnyxKey();
const TEST_UUID = '123e4567-e89b-12d3-a456-426614174000';

const faxCreateData = {
  connection_id: 'c-1',
  media_url: 'http://www.example.com/fax.pdf',
  quality: 'high',
  to: '+456',
  from: '+123',
};

describe('Faxes Resource', function () {
  function responseFn(response: ResponsePayload) {
    expect(response.data).toHaveProperty('connection_id');
    expect(response.data).toHaveProperty('media_url');
    expect(response.data).toHaveProperty('to');
  }

  describe('retrieve', function () {
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.faxes.retrieve(TEST_UUID).then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.faxes.retrieve(TEST_UUID, TEST_AUTH_KEY).then(responseFn);
    });
  });

  describe('create', function () {
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.faxes.create(faxCreateData).then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.faxes.create(faxCreateData, TEST_AUTH_KEY).then(responseFn);
    });

    test('Sends the correct request [with specified auth in options]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.faxes
        .create(faxCreateData, {api_key: TEST_AUTH_KEY})
        .then(responseFn);
    });
  });

  describe('send', function () {
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.faxes.send(faxCreateData).then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.faxes.send(faxCreateData, TEST_AUTH_KEY).then(responseFn);
    });

    test('Sends the correct request [with specified auth in options]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.faxes
        .send(faxCreateData, {api_key: TEST_AUTH_KEY})
        .then(responseFn);
    });
  });

  describe('list', function () {
    function listResponseFn(response: ResponsePayloadList) {
      expect(response.data[0]).toHaveProperty('connection_id');
      expect(response.data[0]).toHaveProperty('media_url');
      expect(response.data[0]).toHaveProperty('to');
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.faxes.list().then(listResponseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.faxes.list(TEST_AUTH_KEY).then(listResponseFn);
    });
  });

  describe('Nested', function () {
    function responseFn(response: ResponsePayload) {
      expect(response.lastResponse?.statusCode).toBe(204);
    }

    describe('del', function () {
      test('Sends the correct request', function () {
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        return telnyx.faxes.create(faxCreateData).then(function (
          response: ResponsePayload,
        ) {
          const fax = response.data;
          // @ts-expect-error TODO: import .d.ts files under src/test folder
          return fax.del().then(responseFn);
        });
      });
      test('Sends the correct request [with specified auth]', function () {
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        return telnyx.faxes.retrieve(TEST_UUID).then(function (
          response: ResponsePayload,
        ) {
          const fax = response.data;
          // @ts-expect-error TODO: import .d.ts files under src/test folder
          return fax.del(TEST_AUTH_KEY).then(responseFn);
        });
      });
    });
  });
});
