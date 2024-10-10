import {
  type ResponsePayloadList,
  type ResponsePayload,
  utils as testUtils,
} from '../utils';
const telnyx = testUtils.getTelnyxMock();

const TEST_AUTH_KEY = testUtils.getUserTelnyxKey();
const TEST_UUID = '123e4567-e89b-12d3-a456-426614174000';

type ResponsePayloadPhoneNumbers = ResponsePayload & {
  data: {
    emergency: object;
  };
};

describe('PhoneNumbers Resource', function () {
  function responseFn(response: ResponsePayload) {
    expect(response.data).toHaveProperty('id');
    expect(response.data).toHaveProperty('phone_number');
    expect(response.data).toMatchObject({record_type: 'phone_number'});
  }

  describe('update', function () {
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.phoneNumbers
        .update(TEST_UUID, {status: 'active'})
        .then(responseFn);
    });
  });

  describe('del', function () {
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.phoneNumbers.del(TEST_UUID).then(responseFn);
    });
  });

  describe('list', function () {
    function listResponseFn(response: ResponsePayloadList) {
      expect(response.data[0]).toHaveProperty('id');
      expect(response.data[0]).toHaveProperty('phone_number');
      expect(response.data[0]).toMatchObject({record_type: 'phone_number'});
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.phoneNumbers.list().then(listResponseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.phoneNumbers.list(TEST_AUTH_KEY).then(listResponseFn);
    });
  });

  describe('retrieve', function () {
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.phoneNumbers.retrieve(TEST_UUID).then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.phoneNumbers
        .retrieve(TEST_UUID, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('setEmergencySettings', function () {
    function responseFn(response: ResponsePayloadPhoneNumbers) {
      expect(response.data).toHaveProperty('id');
      expect(response.data).toMatchObject({record_type: 'voice_settings'});
      expect(response.data).toHaveProperty('emergency');
      expect(response.data.emergency).toMatchObject({
        emergency_enabled: true,
        emergency_address_id: '1315261609962112019',
      });
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.phoneNumbers
        .setEmergencySettings(TEST_UUID, {
          emergency_enabled: true,
          emergency_address_id: '1315261609962112019',
        })
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.phoneNumbers
        .setEmergencySettings(
          TEST_UUID,
          {
            emergency_enabled: true,
            emergency_address_id: '1315261609962112019',
          },
          TEST_AUTH_KEY,
        )
        .then(responseFn);
    });
  });

  describe('Voice methods', function () {
    function responseFn(response: ResponsePayload) {
      expect(response.data).toHaveProperty('id');
      expect(response.data).toHaveProperty('translated_number');
      expect(response.data).toHaveProperty('connection_id');
      expect(response.data).toMatchObject({record_type: 'voice_settings'});
    }

    describe('retrieveVoiceSettings', function () {
      test('Sends the correct request', function () {
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        return telnyx.phoneNumbers
          .retrieveVoiceSettings(TEST_UUID)
          .then(responseFn);
      });

      test('Sends the correct request [with specified auth]', function () {
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        return telnyx.phoneNumbers
          .retrieveVoiceSettings(TEST_UUID, TEST_AUTH_KEY)
          .then(responseFn);
      });
    });

    describe('updateVoiceSettings', function () {
      test('Sends the correct request', function () {
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        return telnyx.phoneNumbers
          .updateVoiceSettings(TEST_UUID, {
            tech_prefix_enabled: true,
          })
          .then(responseFn);
      });
    });
  });

  describe('Messaging methods', function () {
    function responseFn(response: ResponsePayload) {
      expect(response.data).toHaveProperty('id');
      expect(response.data).toHaveProperty('phone_number');
      expect(response.data).toHaveProperty('messaging_profile_id');
      expect(response.data).toMatchObject({record_type: 'messaging_settings'});
    }

    describe('retrieveMessagingSettings', function () {
      test('Sends the correct request', function () {
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        return telnyx.phoneNumbers
          .retrieveMessagingSettings(TEST_UUID)
          .then(responseFn);
      });

      test('Sends the correct request [with specified auth]', function () {
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        return telnyx.phoneNumbers
          .retrieveMessagingSettings(TEST_UUID, TEST_AUTH_KEY)
          .then(responseFn);
      });
    });

    describe('updateMessagingSettings', function () {
      test('Sends the correct request', function () {
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        return telnyx.phoneNumbers
          .updateMessagingSettings(TEST_UUID, {
            messaging_product: 'P2P',
          })
          .then(responseFn);
      });
    });
  });
});
