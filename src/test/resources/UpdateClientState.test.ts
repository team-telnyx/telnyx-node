import {type ResponsePayload, utils as testUtils} from '../utils';
const telnyx = testUtils.getTelnyxMock();

const TEST_AUTH_KEY = testUtils.getUserTelnyxKey();

describe('Update Client State', function () {
  describe('update', function () {
    function responseFn(response: ResponsePayload) {
      expect(response).toHaveProperty('data');
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.updateClientState
        .update('call_control_id', {client_state: 'aGF2ZSBhIG5pY2UgZGF5ID1d'})
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.updateClientState
        .update(
          'call_control_id',
          {client_state: 'aGF2ZSBhIG5pY2UgZGF5ID1d'},
          TEST_AUTH_KEY,
        )
        .then(responseFn);
    });
  });
});
