import {
  type ResponsePayloadList,
  type ResponsePayload,
  utils as testUtils,
} from '../utils';
const telnyx = testUtils.getTelnyxMock();

const TEST_AUTH_KEY = testUtils.getUserTelnyxKey();
const TEST_UUID = '123e4567-e89b-12d3-a456-426614174000';

type ResponsePayloadNumberReservations = ResponsePayload & {
  data: {
    phone_numbers: string[];
  };
};

describe('NumberReservations Resource', function () {
  function responseFn(response: ResponsePayload) {
    expect(response.data).toHaveProperty('id');
    expect(response.data).toHaveProperty('status');
    expect(response.data).toHaveProperty('phone_numbers');
    expect(response.data).toMatchObject({record_type: 'number_reservation'});
  }

  const numberReservationCreateData = {
    phone_numbers: [{phone_number: '+19705555098'}],
  };

  describe('retrieve', function () {
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.numberReservations.retrieve(TEST_UUID).then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.numberReservations
        .retrieve(TEST_UUID, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('list', function () {
    function listResponseFn(response: ResponsePayloadList) {
      expect(response.data[0]).toHaveProperty('id');
      expect(response.data[0]).toHaveProperty('status');
      expect(response.data[0]).toHaveProperty('phone_numbers');
      expect(response.data[0]).toMatchObject({
        record_type: 'number_reservation',
      });
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.numberReservations.list().then(listResponseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.numberReservations.list(TEST_AUTH_KEY).then(listResponseFn);
    });
  });

  describe('create', function () {
    function responseFn(response: ResponsePayloadNumberReservations) {
      expect(response.data).toHaveProperty('id');
      expect(response.data).toHaveProperty('status');
      expect(response.data).toHaveProperty('phone_numbers');

      expect(response.data.record_type).toBe('number_reservation');
      expect(response.data.phone_numbers[0]).toMatchObject({
        phone_number: '+19705555098',
      });
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.numberReservations
        .create(numberReservationCreateData)
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.numberReservations
        .create(numberReservationCreateData, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe.skip('extend', function () {
    function responseFn(response: ResponsePayload) {
      expect(response.data).toHaveProperty('id');
      expect(response.data).toHaveProperty('status');
      expect(response.data).toHaveProperty('phone_numbers');
      expect(response.data).toMatchObject({record_type: 'number_reservation'});
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.numberReservations
        .create(numberReservationCreateData)
        .then(function (response: ResponsePayload) {
          const numberReservation = response.data;
          // @ts-expect-error TODO: import .d.ts files under src/test folder
          return numberReservation.extend({}).then(responseFn);
        });
    });
    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.numberReservations
        .create(numberReservationCreateData)
        .then(function (response: ResponsePayload) {
          const numberReservation = response.data;
          // @ts-expect-error TODO: import .d.ts files under src/test folder
          return numberReservation.extend({}, TEST_AUTH_KEY).then(responseFn);
        });
    });
  });
});
