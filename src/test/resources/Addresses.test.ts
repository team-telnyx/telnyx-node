import {TelnyxObject} from '../../Types';
import {
  type ResponsePayloadList,
  type ResponsePayload,
  utils as testUtils,
} from '../utils';
const telnyx = testUtils.getTelnyxMock();

const TEST_AUTH_KEY = testUtils.getUserTelnyxKey();
const TEST_UUID = '123e4567-e89b-12d3-a456-426614174000';

const addressData = {
  address_book: true,
  administrative_area: 'IL',
  borough: 'Guadalajara',
  neighborhood: 'Ciudad de los deportes',
  business_name: 'Kon',
  country_code: 'us',
  extended_address: 'Suite 123',
  first_name: 'Alfred',
  last_name: 'Foster',
  locality: 'Chicago',
  postal_code: '2904',
  street_address: '311 W Superior Street',
};

describe('Address', function () {
  describe('list', function () {
    function responseFn(response: ResponsePayloadList) {
      expect(response.data[0]).toMatchObject({
        first_name: expect.anything(),
        last_name: expect.anything(),
        phone_number: expect.anything(),
        business_name: expect.anything(),
        street_address: expect.anything(),
        extended_address: expect.anything(),
        locality: expect.anything(),
        administrative_area: expect.anything(),
        postal_code: expect.anything(),
        country_code: expect.anything(),
        address_book: expect.anything(),
      });
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.addresses.list().then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.addresses
        .list(
          {
            page: 1,
          },
          TEST_AUTH_KEY,
        )
        .then(responseFn);
    });
  });

  describe('create', function () {
    function responseFn(response: ResponsePayload) {
      expect(response.data).toHaveProperty('id');
      expect(response.data).toHaveProperty('first_name');
      expect(response.data).toHaveProperty('last_name');
      expect(response.data).toHaveProperty('business_name');
      expect(response.data).toHaveProperty('street_address');
      expect(response.data).toHaveProperty('extended_address');
      expect(response.data).toHaveProperty('locality');
      expect(response.data).toHaveProperty('administrative_area');
      expect(response.data).toHaveProperty('postal_code');
      expect(response.data).toHaveProperty('country_code');
      expect(response.data).toHaveProperty('address_book');
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.addresses.create(addressData).then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.addresses
        .create(addressData, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('retrieve', function () {
    function responseFn(response: ResponsePayload) {
      expect(response.data).toHaveProperty('id');
      expect(response.data).toHaveProperty('first_name');
      expect(response.data).toHaveProperty('last_name');
      expect(response.data).toHaveProperty('business_name');
      expect(response.data).toHaveProperty('street_address');
      expect(response.data).toHaveProperty('extended_address');
      expect(response.data).toHaveProperty('locality');
      expect(response.data).toHaveProperty('administrative_area');
      expect(response.data).toHaveProperty('postal_code');
      expect(response.data).toHaveProperty('country_code');
      expect(response.data).toHaveProperty('address_book');
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.addresses.retrieve(TEST_UUID).then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.addresses
        .retrieve(TEST_UUID, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('Nested', function () {
    let telnyxInstance: TelnyxObject;

    beforeEach(() => {
      // make specs independent
      telnyxInstance = testUtils.getTelnyxMock();
    });

    function responseFn(response: ResponsePayload) {
      if (response.data) {
        expect(response.data).toHaveProperty('id');
        expect(response.data).toHaveProperty('street_address');
        expect(response.data).toHaveProperty('postal_code');
        expect(response.data).toHaveProperty('first_name');
        expect(response.data).toHaveProperty('last_name');
        expect(response.data).toHaveProperty('locality');
        expect(response.data).toMatchObject({record_type: 'address'});
      }
    }

    describe('del', function () {
      test('Sends the correct request', function () {
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        return telnyxInstance.addresses.create(addressData).then(function (
          response: ResponsePayload,
        ) {
          const mp = response.data;
          // @ts-expect-error TODO: import .d.ts files under src/test folder
          return mp.del().then(responseFn);
        });
      });
      test('Sends the correct request [with specified auth]', function () {
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        return telnyxInstance.addresses.retrieve('123').then(function (
          response: ResponsePayload,
        ) {
          const mp = response.data;
          // @ts-expect-error TODO: import .d.ts files under src/test folder
          return mp.del(TEST_AUTH_KEY).then(responseFn);
        });
      });
    });
  });
});
