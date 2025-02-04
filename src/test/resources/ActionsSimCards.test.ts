import {type ResponsePayloadList, utils as testUtils} from '../utils';
const telnyx = testUtils.getTelnyxMock();

const TEST_AUTH_KEY = testUtils.getUserTelnyxKey();

// not found in API Spec https://stoplight.io/prism/errors#NO_PATH_MATCHED_ERROR: Route not resolved, no path matched
describe.skip('SimCards Actions Resource', function () {
  const registerData = {
    registration_codes: ['2578318790'],
    sim_card_group_id: '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
  };

  const bulkData = {
    mobile_operator_networks_preferences: [
      {
        mobile_operator_network_id: '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
        priority: 0,
      },
    ],
    sim_card_ids: [
      '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
      '6b14e151-8493-4fa1-8664-1cc4e6d14158',
    ],
  };

  function responseFnRegister(response: ResponsePayloadList) {
    expect(response.data[0]).toMatchObject({
      record_type: 'sim_card',
    });
    expect(response.data[0]).toHaveProperty('id');
    expect(response.data[0]).toHaveProperty('status');
    expect(response.data[0]).toHaveProperty('iccid');
    expect(response.data[0]).toHaveProperty('sim_card_group_id');
  }

  function responseFnBulk(response: ResponsePayloadList) {
    expect(response.data[0]).toMatchObject({
      record_type: 'sim_card_network_preferences',
    });
    expect(response.data[0]).toHaveProperty(
      'mobile_operator_networks_preferences',
    );
    expect(response.data[0]).toHaveProperty('sim_card_id');
  }

  describe('register', function () {
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.actions.simCards
        .register(registerData)
        .then(responseFnRegister);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.actions.simCards
        .register(registerData, TEST_AUTH_KEY)
        .then(responseFnRegister);
    });
  });

  describe('bulkNetworkPreferences', function () {
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.actions.simCards
        .bulkNetworkPreferences(bulkData)
        .then(responseFnBulk);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.actions.simCards
        .bulkNetworkPreferences(bulkData, TEST_AUTH_KEY)
        .then(responseFnBulk);
    });
  });
});
