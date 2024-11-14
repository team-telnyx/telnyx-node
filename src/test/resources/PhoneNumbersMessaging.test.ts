import {type ResponsePayloadList, utils as testUtils} from '../utils';
const telnyx = testUtils.getTelnyxMock();

const TEST_AUTH_KEY = testUtils.getUserTelnyxKey();

describe('Phone Numbers Messaging Resource', function () {
  function responseFn(response: ResponsePayloadList) {
    expect(response.data[0]).toMatchObject({
      record_type: 'messaging_settings',
    });
    expect(response.data[0]).toHaveProperty('id');
    expect(response.data[0]).toHaveProperty('phone_number');
    expect(response.data[0]).toHaveProperty('messaging_profile_id');
  }

  describe('list', function () {
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.phoneNumbers.messaging.list().then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.phoneNumbers.messaging.list(TEST_AUTH_KEY).then(responseFn);
    });
  });
});
