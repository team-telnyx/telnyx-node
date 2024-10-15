import {type ResponsePayload, utils as testUtils} from '../utils';
const telnyx = testUtils.getTelnyxMock();

const TEST_AUTH_KEY = testUtils.getUserTelnyxKey();
const TEST_UUID = '123e4567-e89b-12d3-a456-426614174000';

describe('roomsClientToken', function () {
  describe('retrieveGenerateJoinClientToken', function () {
    function responseFn(response: ResponsePayload) {
      expect(response).toHaveProperty('data');
    }

    test('Sends the correct request', function () {
      const requestBody = {refresh_token_ttl_secs: 3600, token_ttl_secs: 600};
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.roomsClientToken
        .retrieveGenerateJoinClientToken(TEST_UUID, requestBody)
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      const requestBody = {refresh_token_ttl_secs: 3600, token_ttl_secs: 600};
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.roomsClientToken
        .retrieveGenerateJoinClientToken(TEST_UUID, requestBody, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
  describe('retrieveRefreshClientToken', function () {
    function responseFn(response: ResponsePayload) {
      expect(response).toHaveProperty('data');
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.roomsClientToken
        .retrieveRefreshClientToken(TEST_UUID, {
          refresh_token: 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9',
        })
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.roomsClientToken
        .retrieveRefreshClientToken(
          TEST_UUID,
          {
            refresh_token: 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9',
          },
          TEST_AUTH_KEY,
        )
        .then(responseFn);
    });
  });
});
