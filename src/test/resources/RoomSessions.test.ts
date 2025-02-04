import {
  type ResponsePayloadList,
  type ResponsePayload,
  utils as testUtils,
} from '../utils';
const telnyx = testUtils.getTelnyxMock();

const TEST_AUTH_KEY = testUtils.getUserTelnyxKey();
const TEST_UUID = '123e4567-e89b-12d3-a456-426614174000';

describe('Room Sessions Resource', function () {
  describe('list', function () {
    function responseFn(response: ResponsePayloadList) {
      expect(response).toHaveProperty('data');
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.roomSessions
        .list({
          filter: {
            date_created_at: {
              eq: '2021-04-25',
              gte: '2021-04-25',
              lte: '2021-04-25',
            },
            date_updated_at: {
              eq: '2021-04-25',
              gte: '2021-04-25',
              lte: '2021-04-25',
            },
            date_ended_at: {
              eq: '2021-04-25',
              gte: '2021-04-25',
              lte: '2021-04-25',
            },
            room_id: '0ccc7b54-4df3-4bca-a65a-3da1ecc777f0',
            active: 'true',
          },
          include_participants: 'true',
          page: {
            size: '20',
            number: '1',
          },
        })
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.roomSessions
        .list(
          {
            filter: {
              date_created_at: {
                eq: '2021-04-25',
                gte: '2021-04-25',
                lte: '2021-04-25',
              },
              date_updated_at: {
                eq: '2021-04-25',
                gte: '2021-04-25',
                lte: '2021-04-25',
              },
              date_ended_at: {
                eq: '2021-04-25',
                gte: '2021-04-25',
                lte: '2021-04-25',
              },
              room_id: '0ccc7b54-4df3-4bca-a65a-3da1ecc777f0',
              active: 'true',
            },
            include_participants: 'true',
            page: {
              size: '20',
              number: '1',
            },
          },
          TEST_AUTH_KEY,
        )
        .then(responseFn);
    });
  });

  describe('retrieveRoomSessionId', function () {
    function responseFn(response: ResponsePayload) {
      expect(response).toHaveProperty('data');
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.roomSessions
        .retrieveRoomSessionId(TEST_UUID)
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.roomSessions
        .retrieveRoomSessionId(TEST_UUID, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('muteSession', function () {
    function responseFn(response: ResponsePayload) {
      expect(response).toHaveProperty('data');
      expect(response.data).toHaveProperty('result');
    }

    test('Sends the correct request', function () {
      const requestBody = {
        exclude: ['7b61621f-62e0-4aad-ab11-9fd19e272e73'],
        participants: 'all',
      };
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.roomSessions
        .muteSession(TEST_UUID, requestBody)
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      const requestBody = {
        exclude: ['7b61621f-62e0-4aad-ab11-9fd19e272e73'],
        participants: 'all',
      };
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.roomSessions
        .muteSession(TEST_UUID, requestBody, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
  describe('unmuteSession', function () {
    function responseFn(response: ResponsePayload) {
      expect(response).toHaveProperty('data');
      expect(response.data).toHaveProperty('result');
    }

    test('Sends the correct request', function () {
      const requestBody = {
        exclude: ['7b61621f-62e0-4aad-ab11-9fd19e272e73'],
        participants: 'all',
      };
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.roomSessions
        .unmuteSession(TEST_UUID, requestBody)
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      const requestBody = {
        exclude: ['7b61621f-62e0-4aad-ab11-9fd19e272e73'],
        participants: 'all',
      };
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.roomSessions
        .unmuteSession(TEST_UUID, requestBody, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
  describe('kickParticipant', function () {
    function responseFn(response: ResponsePayload) {
      expect(response).toHaveProperty('data');
      expect(response.data).toHaveProperty('result');
    }

    test('Sends the correct request', function () {
      const requestBody = {
        exclude: ['7b61621f-62e0-4aad-ab11-9fd19e272e73'],
        participants: 'all',
      };
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.roomSessions
        .kickParticipant(TEST_UUID, requestBody)
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      const requestBody = {
        exclude: ['7b61621f-62e0-4aad-ab11-9fd19e272e73'],
        participants: 'all',
      };
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.roomSessions
        .kickParticipant(TEST_UUID, requestBody, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
  describe('retrieveParticipants', function () {
    function responseFn(response: ResponsePayload) {
      expect(response).toHaveProperty('data');
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.roomSessions
        .retrieveParticipants(TEST_UUID)
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.roomSessions
        .retrieveParticipants(TEST_UUID, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
  describe('endSession', function () {
    function responseFn(response: ResponsePayload) {
      expect(response).toHaveProperty('data');
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.roomSessions.endSession(TEST_UUID).then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.roomSessions
        .endSession(TEST_UUID, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
});
