import {type ResponsePayloadList, utils as testUtils} from '../utils';
const telnyx = testUtils.getTelnyxMock();

const TEST_AUTH_KEY = testUtils.getUserTelnyxKey();

describe('PortabilityChecks Resource', function () {
  function responseFn(response: ResponsePayloadList) {
    expect(response.data[0]).toHaveProperty('phone_number');
    expect(response.data[0]).toHaveProperty('fast_portable');
    expect(response.data[0]).toHaveProperty('portable');
    expect(response.data[0]).toMatchObject({
      record_type: 'portability_check_result',
    });
  }

  const portabilityChecksParams = {
    phone_numbers: ['+15555555555', '+16666666667'],
  };

  describe('run', function () {
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.portabilityChecks
        .run(portabilityChecksParams)
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.portabilityChecks
        .run(portabilityChecksParams, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
});
