import {type ResponsePayload, utils as testUtils} from '../utils';
const telnyx = testUtils.getTelnyxMock();

const TEST_AUTH_KEY = testUtils.getUserTelnyxKey();

// prism mock can't figure out this dynamic path param match
// [HTTP SERVER] post /actions/activate/telephony_credentials ✖ error Request terminated with error: https://stoplight.io/prism/errors#NO_PATH_MATCHED_ERROR: Route not resolved, no path matched
describe.skip('ActivateDeactivateBulkCredentials', function () {
  describe('create', function () {
    function responseFn(response: ResponsePayload) {
      expect(response).toHaveProperty('data');
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.activateDeactivateBulkCredentials
        .create('activate', {
          filter: {
            tag: 'string',
          },
        })
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.activateDeactivateBulkCredentials
        .create(
          'activate',
          {
            filter: {
              tag: 'string',
            },
          },
          TEST_AUTH_KEY,
        )
        .then(responseFn);
    });
  });
});
