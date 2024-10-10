import {TelnyxObject} from '../../Types';
import {
  type ResponsePayload,
  type ResponsePayloadList,
  utils as testUtils,
} from '../utils';

const TEST_AUTH_KEY = testUtils.getUserTelnyxKey();
const TEST_UUID = '123e4567-e89b-12d3-a456-426614174000';

describe('PortingOrders Resource', function () {
  let telnyxInstance: TelnyxObject;

  beforeEach(() => {
    // make specs independent
    telnyxInstance = testUtils.getTelnyxMock();
  });

  function responseFn(response: ResponsePayload) {
    expect(response.data).toHaveProperty('activation_settings');
    expect(response.data).toHaveProperty('end_user');
    expect(response.data).toHaveProperty('phone_number_configuration');
    expect(response.data).toMatchObject({record_type: 'porting_order'});
  }

  function listResponseFn(response: ResponsePayloadList) {
    expect(response.data[0]).toHaveProperty('activation_settings');
    expect(response.data[0]).toHaveProperty('end_user');
    expect(response.data[0]).toHaveProperty('phone_number_configuration');
    expect(response.data[0]).toMatchObject({record_type: 'porting_order'});
  }

  const newPortingOrderParams = {
    phone_numbers: ['+15555555555', '+16666666667'],
  };

  describe('list', function () {
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyxInstance.portingOrders.list().then(listResponseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyxInstance.portingOrders.list().then(listResponseFn);
    });
  });

  describe('create', function () {
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyxInstance.portingOrders
        .create(newPortingOrderParams)
        .then(listResponseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyxInstance.portingOrders
        .create(newPortingOrderParams, TEST_AUTH_KEY)
        .then(listResponseFn);
    });
  });

  describe('retrieve', function () {
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyxInstance.portingOrders.retrieve(TEST_UUID).then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyxInstance.portingOrders
        .retrieve(TEST_UUID, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('listExceptionTypes', function () {
    function responseFn(response: ResponsePayloadList) {
      expect(response.data[0]).toHaveProperty('code');
      expect(response.data[0]).toHaveProperty('description');
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyxInstance.portingOrders.listExceptionTypes().then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyxInstance.portingOrders
        .listExceptionTypes(TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('listActivationJobs', function () {
    function responseFn(response: ResponsePayloadList) {
      expect(response.data[0]).toHaveProperty('id');
      expect(response.data[0]).toHaveProperty('status');
      expect(response.data[0]).toMatchObject({
        record_type: 'porting_activation_job',
      });
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyxInstance.portingOrders
        .listActivationJobs(TEST_UUID)
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyxInstance.portingOrders
        .listActivationJobs(TEST_UUID, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('cancelOrder', function () {
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyxInstance.portingOrders
        .cancelOrder(TEST_UUID)
        .then(responseFn);
    });
  });

  describe('listAllowedFocWindows', function () {
    function responseFn(response: ResponsePayloadList) {
      expect(response.data[0]).toHaveProperty('started_at');
      expect(response.data[0]).toHaveProperty('ended_at');
      expect(response.data[0]).toMatchObject({record_type: 'porting_order'});
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyxInstance.portingOrders
        .listAllowedFocWindows(TEST_UUID)
        .then(responseFn);
    });
  });

  describe('retrieveLoaTemplate', function () {
    function responseFn(response: ResponsePayloadList) {
      expect(response.data).not.toBeNull();
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyxInstance.portingOrders
        .retrieveLoaTemplate(TEST_UUID)
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyxInstance.portingOrders
        .retrieveLoaTemplate(TEST_UUID, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('confirmOrder', function () {
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyxInstance.portingOrders
        .confirmOrder(TEST_UUID)
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyxInstance.portingOrders
        .confirmOrder(TEST_UUID, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  // must use retrieve for nested since create endpoint returns a list instead of object data
  describe('update', function () {
    const INVOICE_ID = '35146afd-df93-4963-b1e9-1a085e2ae875';

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyxInstance.portingOrders.retrieve(TEST_UUID).then(function (
        response: ResponsePayload,
      ) {
        const po = response.data;

        // @ts-expect-error TODO: import .d.ts files under src/test folder
        return po.update({documents: {invoice: INVOICE_ID}}).then(responseFn);
      });
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyxInstance.portingOrders.retrieve(TEST_UUID).then(function (
        response: ResponsePayload,
      ) {
        const po = response.data;
        return (
          po
            // @ts-expect-error TODO: import .d.ts files under src/test folder
            .update({documents: {invoice: INVOICE_ID}}, TEST_AUTH_KEY)
            .then(responseFn)
        );
      });
    });
  });

  // must use retrieve for nested since create endpoint returns a list instead of object data
  describe('del', function () {
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyxInstance.portingOrders.retrieve(TEST_UUID).then(function (
        response: ResponsePayload,
      ) {
        const po = response.data;
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        return po.del();
      });
    });
    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyxInstance.portingOrders.retrieve(TEST_UUID).then(function (
        response: ResponsePayload,
      ) {
        const po = response.data;
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        return po.del(TEST_AUTH_KEY);
      });
    });
  });
});
