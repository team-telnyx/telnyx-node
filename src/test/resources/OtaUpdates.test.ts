import {
  type ResponsePayloadList,
  type ResponsePayload,
  utils as testUtils,
} from '../utils';
const telnyx = testUtils.getTelnyxMock();

const TEST_AUTH_KEY = testUtils.getUserTelnyxKey();
const TEST_UUID = '123e4567-e89b-12d3-a456-426614174000';

describe('OtaUpdates Resource', function () {
  function responseFn(response: ResponsePayload) {
    expect(response.data).toMatchObject({
      id: expect.anything(),
      sim_card_id: expect.anything(),
      status: expect.anything(),
      settings: expect.anything(),
    });
    expect(response.data).toMatchObject({
      record_type: 'ota_update',
      type: 'sim_card_network_preferences',
    });
  }

  describe('retrieve', function () {
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.otaUpdates.retrieve(TEST_UUID).then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.otaUpdates
        .retrieve(TEST_UUID, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('list', function () {
    function responseFn(response: ResponsePayloadList) {
      expect(response.data[0]).toMatchObject({
        id: expect.anything(),
        sim_card_id: expect.anything(),
        status: expect.anything(),
      });
      expect(response.data[0]).toMatchObject({
        record_type: 'ota_update',
        type: 'sim_card_network_preferences',
      });
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.otaUpdates.list().then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.otaUpdates.list(TEST_AUTH_KEY).then(responseFn);
    });
  });
});
