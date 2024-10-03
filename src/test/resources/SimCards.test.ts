// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import {
  type ResponsePayloadList,
  type ResponsePayload,
  utils as testUtils,
} from '../utils';
import * as utils from '../../utils';

const telnyx = testUtils.getTelnyxMock();

const TEST_AUTH_KEY = testUtils.getUserTelnyxKey();
const TEST_UUID = '123e4567-e89b-12d3-a456-426614174000';

describe('SimCards Resource', function () {
  const simCardUpdateData = {
    tags: ['personal'],
  };

  describe('retrieve', function () {
    function responseFn(response: ResponsePayload) {
      expect(response.data).toHaveProperty('id');
      expect(response.data).toMatchObject({
        record_type: 'sim_card',
      });
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.simCards.retrieve(TEST_UUID).then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.simCards
        .retrieve(TEST_UUID, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('list', function () {
    function responseFn(response: ResponsePayloadList) {
      expect(response.data[0]).toHaveProperty('id');
      expect(response.data[0]).toHaveProperty('iccid');
      expect(response.data[0]).toMatchObject({record_type: 'sim_card'});
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.simCards.list().then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.simCards.list(TEST_AUTH_KEY).then(responseFn);
    });
  });

  describe('update', function () {
    function responseFn(response: ResponsePayload) {
      expect(response.data).toHaveProperty('id');
      expect(response.data).toHaveProperty('iccid');
      expect(response.data.record_type).toBe('sim_card');
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.simCards
        .update(TEST_UUID, simCardUpdateData)
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.simCards
        .update(TEST_UUID, simCardUpdateData, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('save', function () {
    function responseFn(response: ResponsePayload) {
      expect(response.data.record_type).toBe('sim_card');
      expect(response.data).toHaveProperty('id');
      expect(response.data).toHaveProperty('status');
      expect(response.data).toHaveProperty('iccid');
      expect(response.data).toHaveProperty('sim_card_group_id');
      expect(response.data.record_type).toBe('sim_card');
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.simCards.retrieve(TEST_UUID).then(function (
        response: ResponsePayload,
      ) {
        const simCard = response.data;
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        return simCard.save(simCardUpdateData).then(responseFn);
      });
    });
  });

  describe('delete', function () {
    function responseFn(response: ResponsePayload) {
      expect(response.data.record_type).toBe('sim_card');
      expect(response.data).toHaveProperty('id');
      expect(response.data).toHaveProperty('status');
      expect(response.data).toHaveProperty('iccid');
      expect(response.data).toHaveProperty('sim_card_group_id');
      expect(response.data.record_type).toBe('sim_card');
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.simCards.retrieve(TEST_UUID).then(function (
        response: ResponsePayload,
      ) {
        const simCard = response.data;
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        return simCard.del().then(responseFn);
      });
    });
  });

  describe('Nested', function () {
    ['activate', 'deactivate', 'enable', 'disable', 'set_standby'].forEach(
      function (command) {
        function responseFn(response: ResponsePayload) {
          expect(response.data.record_type).toBe('sim_card_action');
        }

        describe(command, function () {
          const camelCaseCommand = utils.snakeToCamelCase(command);
          test('Sends the correct request', function () {
            // @ts-expect-error TODO: import .d.ts files under src/test folder
            return telnyx.simCards.retrieve(TEST_UUID).then(function (
              response: ResponsePayload,
            ) {
              const simCard = response.data;

              // @ts-expect-error TODO: import .d.ts files under src/test folder
              return simCard[camelCaseCommand]({}).then(responseFn);
            });
          });
          test('Sends the correct request [with specified auth]', function () {
            // @ts-expect-error TODO: import .d.ts files under src/test folder
            return telnyx.simCards.retrieve(TEST_UUID).then(function (
              response: ResponsePayload,
            ) {
              const simCard = response.data;

              // @ts-expect-error TODO: import .d.ts files under src/test folder
              return simCard[camelCaseCommand]({}, TEST_AUTH_KEY).then(
                responseFn,
              );
            });
          });
        });
      },
    );
  });

  describe('retrieveNetworkPreferences', function () {
    function responseFn(response: ResponsePayload) {
      expect(response.data.record_type).toBe('sim_card_network_preferences');
      expect(response.data).toMatchObject({
        sim_card_id: expect.anything(),
      });
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.simCards.retrieve(TEST_UUID).then(function (
        response: ResponsePayload,
      ) {
        const simCard = response.data;
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        return simCard.retrieveNetworkPreferences().then(responseFn);
      });
    });

    test('Sends the correct request passing params', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.simCards.retrieve(TEST_UUID).then(function (
        response: ResponsePayload,
      ) {
        const simCard = response.data;
        return (
          simCard
            // @ts-expect-error TODO: import .d.ts files under src/test folder
            .retrieveNetworkPreferences({include_ota_updates: true})
            .then(responseFn)
        );
      });
    });
  });

  describe('setNetworkPreferences', function () {
    function responseFn(response: ResponsePayload) {
      expect(response.data.record_type).toBe('sim_card_network_preferences');
      expect(response.data).toMatchObject({
        sim_card_id: expect.anything(),
      });
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.simCards.retrieve(TEST_UUID).then(function (
        response: ResponsePayload,
      ) {
        const simCard = response.data;
        return (
          simCard
            // @ts-expect-error TODO: import .d.ts files under src/test folder
            .setNetworkPreferences({
              mobile_operator_networks_preferences: [
                {
                  mobile_operator_network_id: TEST_UUID,
                  priority: 0,
                },
              ],
            })
            .then(responseFn)
        );
      });
    });
  });

  describe('deleteNetworkPreferences', function () {
    function responseFn(response: ResponsePayload) {
      expect(response.data.record_type).toBe('sim_card_network_preferences');
      expect(response.data).toMatchObject({
        sim_card_id: expect.anything(),
      });
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.simCards.retrieve(TEST_UUID).then(function (
        response: ResponsePayload,
      ) {
        const simCard = response.data;
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        return simCard.deleteNetworkPreferences().then(responseFn);
      });
    });
  });

  describe('PublicIP', function () {
    function responseFn(response: ResponsePayload) {
      expect(response.data.record_type).toBe('sim_card_public_ip');
      expect(response.data).toHaveProperty('sim_card_id');
    }

    describe('retrieve', function () {
      test('Sends the correct request', function () {
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        return telnyx.simCards.retrieve(TEST_UUID).then(function (
          response: ResponsePayload,
        ) {
          const simCard = response.data;
          // @ts-expect-error TODO: import .d.ts files under src/test folder
          return simCard.retrievePublicIP().then(responseFn);
        });
      });
    });
  });
});
