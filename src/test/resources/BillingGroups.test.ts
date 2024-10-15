import {
  type ResponsePayloadList,
  type ResponsePayload,
  utils as testUtils,
} from '../utils';
const telnyx = testUtils.getTelnyxMock();

const TEST_AUTH_KEY = testUtils.getUserTelnyxKey();
const TEST_UUID = '123e4567-e89b-12d3-a456-426614174000';

describe('Billing Groups', function () {
  describe('list', function () {
    function responseFn(response: ResponsePayloadList) {
      expect(response).toHaveProperty('data');
      expect(response.data[0]).toHaveProperty('created_at');
      expect(response.data[0]).toHaveProperty('deleted_at');
      expect(response.data[0]).toHaveProperty('id');
      expect(response.data[0]).toHaveProperty('name');
      expect(response.data[0]).toHaveProperty('organization_id');
      expect(response.data[0]).toHaveProperty('record_type');
      expect(response.data[0]).toHaveProperty('updated_at');
      expect(response).toHaveProperty('meta');
      expect(response.meta).toHaveProperty('page_number');
      expect(response.meta).toHaveProperty('page_size');
      expect(response.meta).toHaveProperty('total_pages');
      expect(response.meta).toHaveProperty('total_results');
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.billingGroups
        .list({
          page: {
            number: 1,
            size: 20,
          },
        })
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.billingGroups
        .list(
          {
            page: {
              number: 1,
              size: 20,
            },
          },
          TEST_AUTH_KEY,
        )
        .then(responseFn);
    });
  });

  describe('create', function () {
    function responseFn(response: ResponsePayload) {
      expect(response).toHaveProperty('data');
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.billingGroups
        .create({
          name: 'name',
        })
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.billingGroups
        .create(
          {
            name: 'name',
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
      return telnyx.billingGroups.retrieve(TEST_UUID).then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.billingGroups
        .retrieve(TEST_UUID, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
  describe('del', function () {
    function responseFn(response: ResponsePayload) {
      expect(response).toHaveProperty('data');
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.billingGroups.del(TEST_UUID).then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.billingGroups
        .del(TEST_UUID, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
  describe('update', function () {
    function responseFn(response: ResponsePayload) {
      expect(response).toHaveProperty('data');
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.billingGroups
        .update(TEST_UUID, {
          name: 'string',
        })
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.billingGroups
        .update(
          TEST_UUID,
          {
            name: 'string',
          },
          TEST_AUTH_KEY,
        )
        .then(responseFn);
    });
  });
});
