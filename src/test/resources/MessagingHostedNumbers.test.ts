import {type ResponsePayload, utils as testUtils} from '../utils';
const telnyx = testUtils.getTelnyxMock();

describe('retrieve', function () {
  function responseFn(response: ResponsePayload) {
    if (response.data) {
      expect(response.data).toHaveProperty('id');
      expect(response.data).toMatchObject({
        record_type: 'messaging_hosted_numbers',
      });
    }
  }
  test('Sends the correct request [with specified auth]', function () {
    // @ts-expect-error TODO: import .d.ts files under src/test folder
    return telnyx.messagingHostedNumbers.retrieve('123').then(responseFn);
  });
});
