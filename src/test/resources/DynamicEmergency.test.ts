import {
  type ResponsePayloadList,
  type ResponsePayload,
  utils as testUtils,
} from '../utils';
const telnyx = testUtils.getTelnyxMock();

const TEST_AUTH_KEY = testUtils.getUserTelnyxKey();
const TEST_UUID = '123e4567-e89b-12d3-a456-426614174000';

describe('DynamicEmergency', function () {
  describe('Addresses', function () {
    function responseFn(response: ResponsePayload) {
      expect(response.data).toHaveProperty('id');
      expect(response.data).toHaveProperty('country_code');
      expect(response.data).toHaveProperty('locality');
      expect(response.data).toMatchObject({
        record_type: 'dynamic_emergency_address',
      });
    }

    describe('list', function () {
      function listResponseFn(response: ResponsePayloadList) {
        expect(response.data[0]).toHaveProperty('id');
        expect(response.data[0]).toHaveProperty('country_code');
        expect(response.data[0]).toHaveProperty('locality');
        expect(response.data[0]).toMatchObject({
          record_type: 'dynamic_emergency_address',
        });
      }

      test('Sends the correct request', function () {
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        return telnyx.dynamicEmergency.addresses.list().then(listResponseFn);
      });

      test('Sends the correct request [with specified auth]', function () {
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        return telnyx.dynamicEmergency.addresses
          .list(TEST_AUTH_KEY)
          .then(listResponseFn);
      });
    });

    describe('retrieve', function () {
      test('Sends the correct request', function () {
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        return telnyx.dynamicEmergency.addresses
          .retrieve(TEST_UUID)
          .then(responseFn);
      });

      test('Sends the correct request [with specified auth]', function () {
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        return telnyx.dynamicEmergency.addresses
          .retrieve(TEST_UUID, TEST_AUTH_KEY)
          .then(responseFn);
      });
    });

    describe.skip('create', function () {
      test('Sends the correct request', function () {
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        return telnyx.dynamicEmergency.addresses
          .create({
            administrative_area: 'IL',
            house_number: '311',
            locality: 'Chicago',
            postal_code: '60654',
            street_name: 'Superior',
            country_code: 'US',
          })
          .then(responseFn);
      });
    });

    describe('del', function () {
      test('Sends the correct request', function () {
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        return telnyx.dynamicEmergency.addresses
          .del(TEST_UUID)
          .then(responseFn);
      });
    });
  });

  describe('Endpoints', function () {
    function responseFn(response: ResponsePayload) {
      expect(response.data).toHaveProperty('id');
      expect(response.data).toHaveProperty('callback_number');
      expect(response.data).toHaveProperty('caller_name');
      expect(response.data).toHaveProperty('dynamic_emergency_address_id');
      expect(response.data).toMatchObject({
        record_type: 'dynamic_emergency_endpoint',
      });
    }

    describe('list', function () {
      function listResponseFn(response: ResponsePayloadList) {
        expect(response.data[0]).toHaveProperty('id');
        expect(response.data[0]).toHaveProperty('callback_number');
        expect(response.data[0]).toHaveProperty('caller_name');
        expect(response.data[0]).toHaveProperty('dynamic_emergency_address_id');
        expect(response.data[0]).toMatchObject({
          record_type: 'dynamic_emergency_endpoint',
        });
      }

      test('Sends the correct request', function () {
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        return telnyx.dynamicEmergency.endpoints.list().then(listResponseFn);
      });

      test('Sends the correct request [with specified auth]', function () {
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        return telnyx.dynamicEmergency.endpoints
          .list(TEST_AUTH_KEY)
          .then(listResponseFn);
      });
    });

    describe('retrieve', function () {
      test('Sends the correct request', function () {
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        return telnyx.dynamicEmergency.endpoints
          .retrieve(TEST_UUID)
          .then(responseFn);
      });

      test('Sends the correct request [with specified auth]', function () {
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        return telnyx.dynamicEmergency.endpoints
          .retrieve(TEST_UUID, TEST_AUTH_KEY)
          .then(responseFn);
      });
    });

    describe.skip('create', function () {
      test('Sends the correct request', function () {
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        return telnyx.dynamicEmergency.endpoints
          .create({
            callback_number: '+13125550000',
            caller_name: 'Jane Doe Desk Phone',
            dynamic_emergency_address_id:
              '0ccc7b54-4df3-4bca-a65a-3da1ecc777f0',
            country_code: 'US',
          })
          .then(responseFn);
      });
    });

    describe('del', function () {
      test('Sends the correct request', function () {
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        return telnyx.dynamicEmergency.endpoints
          .del(TEST_UUID)
          .then(responseFn);
      });
    });
  });
});
