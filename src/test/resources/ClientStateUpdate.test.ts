import {type ResponsePayload, utils as testUtils} from '../utils';
const telnyx = testUtils.getTelnyxMock();

const TEST_AUTH_KEY = testUtils.getUserTelnyxKey();

// resource not found in the spec
describe.skip('Client State Update', function () {
  describe('update', function () {
    function responseFn(response: ResponsePayload) {
      expect(response).toHaveProperty('data');
      expect(response.data).toHaveProperty('result');
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.clientStateUpdate
        .update('35146afd-df93-4963-b1e9-1a085e2ae874', {
          client_state: 'aGF2ZSBhIG5pY2UgZGF5ID1d',
        })
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.clientStateUpdate
        .update(
          '35146afd-df93-4963-b1e9-1a085e2ae874',
          {
            client_state: 'aGF2ZSBhIG5pY2UgZGF5ID1d',
          },
          TEST_AUTH_KEY,
        )
        .then(responseFn);
    });
  });
});
