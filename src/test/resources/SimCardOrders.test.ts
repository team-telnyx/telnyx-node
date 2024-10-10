import {
  type ResponsePayloadList,
  type ResponsePayload,
  utils as testUtils,
} from '../utils';
const telnyx = testUtils.getTelnyxMock();

const TEST_AUTH_KEY = testUtils.getUserTelnyxKey();
const TEST_UUID = '123e4567-e89b-12d3-a456-426614174000';

describe('numberPortoutsSupportingDocuments', function () {
  describe('list', function () {
    function responseFn(response: ResponsePayloadList) {
      expect(response).toHaveProperty('data');
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.simCardOrders
        .list({
          filter: {
            created_at: '2018-02-02T22:25:27.521Z',
            updated_at: '2018-02-02T22:25:27.521Z',
            quantity: '21',
            cost: {
              amount: '2.53',
              currency: 'USD',
            },
            address: {
              id: '1293384261075731499',
              street_address: '311 W Superior St',
              extended_address: 'Suite 504',
              locality: 'Chicago',
              administrative_area: 'IL',
              country_code: 'US',
              postal_code: '60654',
            },
          },
          page: {
            number: '1',
            size: '20',
          },
        })
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.simCardOrders
        .list(
          {
            filter: {
              created_at: '2018-02-02T22:25:27.521Z',
              updated_at: '2018-02-02T22:25:27.521Z',
              quantity: '21',
              cost: {
                amount: '2.53',
                currency: 'USD',
              },
              address: {
                id: '1293384261075731499',
                street_address: '311 W Superior St',
                extended_address: 'Suite 504',
                locality: 'Chicago',
                administrative_area: 'IL',
                country_code: 'US',
                postal_code: '60654',
              },
            },
            page: {
              number: '1',
              size: '20',
            },
          },
          TEST_AUTH_KEY,
        )
        .then(responseFn);
    });
  });
  describe('retrieve', function () {
    function responseFn(response: ResponsePayload) {
      expect(response).toHaveProperty('data');
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.simCardOrders.retrieve(TEST_UUID).then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.simCardOrders
        .retrieve(TEST_UUID, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
});
