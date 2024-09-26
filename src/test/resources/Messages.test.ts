import {type ResponsePayload, utils as testUtils} from '../utils';
const telnyx = testUtils.getTelnyxMock();

const TEST_AUTH_KEY = testUtils.getUserTelnyxKey();
const TEST_UUID = '123e4567-e89b-12d3-a456-426614174000';

type ResponsePayloadMessages = ResponsePayload & {
  data: {
    from: string;
    to: string[];
  };
};

describe('Messages Resource', function () {
  describe('retrieve', function () {
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.messages.retrieve(TEST_UUID).then(function (
        response: ResponsePayload,
      ) {
        [
          'id',
          'record_type',
          'direction',
          'messaging_profile_id',
          'from',
          'text',
          'to',
          'type',
        ].forEach((property) => {
          expect(response.data).toHaveProperty(property);
        });
      });
    });

    test('Sends the correct request  [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.messages.retrieve(TEST_UUID, TEST_AUTH_KEY).then(function (
        response: ResponsePayload,
      ) {
        [
          'id',
          'record_type',
          'direction',
          'messaging_profile_id',
          'from',
          'text',
          'to',
          'type',
        ].forEach((property) => {
          expect(response.data).toHaveProperty(property);
        });
      });
    });
  });
  describe('create', function () {
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.messages
        .create({
          text: 'Hello, World!',
          from: '+18665552368',
          to: '+18665552367',
        })
        .then(function (response: ResponsePayloadMessages) {
          expect(response.data).toHaveProperty('from');
          expect(response.data).toHaveProperty('text');
          expect(response.data.from).toHaveProperty('carrier');
          expect(response.data.from).toHaveProperty('line_type');
          expect(response.data.from).toHaveProperty('phone_number');
          ['carrier', 'line_type', 'phone_number', 'status'].forEach(
            (property) => {
              expect(response.data.to[0]).toHaveProperty(property);
            },
          );
        });
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.messages
        .create(
          {
            text: 'Hello, World!',
            from: '+18665552368',
            to: '+18665552367',
          },
          TEST_AUTH_KEY,
        )
        .then(function (response: ResponsePayloadMessages) {
          expect(response.data).toHaveProperty('from');
          expect(response.data).toHaveProperty('text');
          expect(response.data.from).toHaveProperty('carrier');
          expect(response.data.from).toHaveProperty('line_type');
          expect(response.data.from).toHaveProperty('phone_number');
          ['carrier', 'line_type', 'phone_number', 'status'].forEach(
            (property) => {
              expect(response.data.to[0]).toHaveProperty(property);
            },
          );
        });
    });

    test('Sends the correct request [with specified auth in options]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.messages
        .create(
          {
            text: 'Hello, World!',
            from: '+18665552368',
            to: '+18665552367',
          },
          {api_key: TEST_AUTH_KEY},
        )
        .then(function (response: ResponsePayloadMessages) {
          expect(response.data).toHaveProperty('from');
          expect(response.data).toHaveProperty('text');
          expect(response.data.from).toHaveProperty('carrier');
          expect(response.data.from).toHaveProperty('line_type');
          expect(response.data.from).toHaveProperty('phone_number');
          ['carrier', 'line_type', 'phone_number', 'status'].forEach(
            (property) => {
              expect(response.data.to[0]).toHaveProperty(property);
            },
          );
        });
    });
  });
});
