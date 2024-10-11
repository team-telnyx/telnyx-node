import {TelnyxObject} from '../../Types';
import {
  type ResponsePayloadList,
  type ResponsePayload,
  utils as testUtils,
} from '../utils';

const TEST_AUTH_KEY = testUtils.getUserTelnyxKey();

describe('NumberOrders Resource', function () {
  let telnyxInstance: TelnyxObject;

  beforeEach(() => {
    // make specs independent
    telnyxInstance = testUtils.getTelnyxMock();
  });

  describe('retrieve', function () {
    function responseFn(response: ResponsePayload) {
      expect(response.data).toMatchObject({
        id: '12ade33a-21c0-473b-b055-b3c836e1c292',
        record_type: 'number_order',
      });
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyxInstance.numberOrders
        .retrieve('12ade33a-21c0-473b-b055-b3c836e1c292')
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyxInstance.numberOrders
        .retrieve('12ade33a-21c0-473b-b055-b3c836e1c292', TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('list', function () {
    function responseFn(response: ResponsePayloadList) {
      expect(response.data[0]).toHaveProperty('id');
      expect(response.data[0]).toHaveProperty('status');
      expect(response.data[0]).toHaveProperty('customer_reference');
      expect(response.data[0]).toHaveProperty('requirements_met');
      expect(response.data[0]).toHaveProperty('phone_numbers_count');
      expect(response.data[0]).toMatchObject({record_type: 'number_order'});
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyxInstance.numberOrders.list().then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyxInstance.numberOrders.list(TEST_AUTH_KEY).then(responseFn);
    });
  });

  describe('update', function () {
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyxInstance.numberOrders
        .update('12ade33a-21c0-473b-b055-b3c836e1c292', {
          customer_reference: 'MY REF 002',
        })
        .then(function (response: ResponsePayload) {
          expect(response.data).toMatchObject({
            id: '12ade33a-21c0-473b-b055-b3c836e1c292',
            record_type: 'number_order',
            customer_reference: 'MY REF 001',
          });
        });
    });
  });

  describe('create', function () {
    function responseFn(response: ResponsePayload) {
      expect(response.data).toMatchObject({
        record_type: 'number_order',
      });
      expect(response.data).toHaveProperty('requirements_met');
      expect(response.data).toHaveProperty('phone_numbers_count');
    }

    function responseFnNoBody(response: ResponsePayload) {
      expect(response.data).toHaveProperty('id');
      expect(response.data).toHaveProperty('requirements_met');
      expect(response.data).toHaveProperty('phone_numbers_count');
      expect(response.data).toMatchObject({record_type: 'number_order'});
    }

    test('Sends the correct request', function () {
      const requestBody = {
        customer_reference: 'MY REF 001',
        file_id: '1e3c5822-0362-4702-8e46-5a129f0d3976',
        requirements_id: '36aaf27d-986b-493c-bd1b-de16af2e4292',
      };
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyxInstance.numberOrders.create(requestBody).then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      const requestBody = {
        customer_reference: 'MY REF 001',
        file_id: '1e3c5822-0362-4702-8e46-5a129f0d3976',
        requirements_id: '36aaf27d-986b-493c-bd1b-de16af2e4292',
      };
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyxInstance.numberOrders
        .create(requestBody, TEST_AUTH_KEY)
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth and no body]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyxInstance.numberOrders
        .create({'': ''}, TEST_AUTH_KEY)
        .then(responseFnNoBody);
    });
  });
});
