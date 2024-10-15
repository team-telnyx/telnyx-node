import {type ResponsePayloadList, utils as testUtils} from '../utils';
const telnyx = testUtils.getTelnyxMock();

const TEST_AUTH_KEY = testUtils.getUserTelnyxKey();

describe('PortingPhoneNumbers Resource', function () {
  function responseFn(response: ResponsePayloadList) {
    expect(response.data[0]).toHaveProperty('activation_status');
    expect(response.data[0]).toHaveProperty('portability_status');
    expect(response.data[0]).toHaveProperty('porting_order_id');
    expect(response.data[0]).toMatchObject({
      record_type: 'porting_phone_number',
    });
  }

  describe('list', function () {
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.portingPhoneNumbers.list().then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.portingPhoneNumbers.list(TEST_AUTH_KEY).then(responseFn);
    });
  });
});
