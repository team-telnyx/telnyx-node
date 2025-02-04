import {type ResponsePayload, utils as testUtils} from '../utils';
const telnyx = testUtils.getTelnyxMock();
const TEST_AUTH_KEY = testUtils.getUserTelnyxKey();

// skip while openapi spec is not updated
describe('del', function () {
  function responseFn(response: ResponsePayload) {
    expect(response).toHaveProperty('data');

    // prism-mock error [6:28:05 PM] ›     [VALIDATOR] ✖  error     Violation: response.body.data Response body property data must be object
    // if (response.data) {
    // expect(response.data).toHaveProperty('id');
    // expect(response.data).toHaveProperty('status');
    // expect(response.data).toMatchObject({
    //   record_type: 'messaging_hosted_number',
    // });
    // }
  }
  test('Sends the correct request', function () {
    // @ts-expect-error TODO: import .d.ts files under src/test folder
    return telnyx.messagingHostedNumbers
      .del('891510ac-f3e4-11e8-af5b-de00688a4901')
      .then(responseFn);
  });
  test('Sends the correct request [with specified auth]', function () {
    // @ts-expect-error TODO: import .d.ts files under src/test folder
    return telnyx.messagingHostedNumbers
      .del('891510ac-f3e4-11e8-af5b-de00688a4901', TEST_AUTH_KEY)
      .then(responseFn);
  });
});
