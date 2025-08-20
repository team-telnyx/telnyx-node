import {
  type ResponsePayloadList,
  type ResponsePayload,
  utils as testUtils,
} from '../utils';
const telnyx = testUtils.getTelnyxMock();

const TEST_AUTH_KEY = testUtils.getUserTelnyxKey();

describe('Managed Accounts', function () {
  describe('list', function () {
    function responseFn(response: ResponsePayloadList['data']) {
      expect(response).toHaveProperty('data');
      for (let index = 0; index < response.length; index++) {
        const row = response[index];
        expect(row).toHaveProperty('api_key');
        expect(row).toHaveProperty('api_token');
        expect(row).toHaveProperty('api_user');
        expect(row).toHaveProperty('created_at');
        expect(row).toHaveProperty('email');
        expect(row).toHaveProperty('id');
        expect(row).toHaveProperty('manager_account_id');
        expect(row).toHaveProperty('record_type');
        expect(row).toHaveProperty('updated_at');
      }
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.managedAccounts
        .list({
          page: {
            number: '1',
            size: '20',
          },
          filter: {
            email: {
              contains: 'null',
              eq: 'null',
            },
          },
          sort: 'created_at',
          include_cancelled_accounts: 'true',
        })
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.managedAccounts
        .list(
          {
            page: {
              number: '1',
              size: '20',
            },
            filter: {
              email: {
                contains: 'null',
                eq: 'null',
              },
            },
            sort: 'created_at',
            include_cancelled_accounts: 'true',
          },
          TEST_AUTH_KEY,
        )
        .then(responseFn);
    });
  });

  describe('create', function () {
    function responseFn(response: ResponsePayload) {
      expect(response).toHaveProperty('data');
      expect(response.data).toHaveProperty('api_key');
      expect(response.data).toHaveProperty('api_token');
      expect(response.data).toHaveProperty('api_user');
      expect(response.data).toHaveProperty('created_at');
      expect(response.data).toHaveProperty('email');
      expect(response.data).toHaveProperty('id');
      expect(response.data).toHaveProperty('manager_account_id');
      expect(response.data).toHaveProperty('record_type');
      expect(response.data).toHaveProperty('updated_at');
    }
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.managedAccounts
        .create({business_name: "Larry's Cat Food Inc"})
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.managedAccounts
        .create({business_name: "Larry's Cat Food Inc"}, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
  describe('retrieveManagedAccount', function () {
    function responseFn(response: ResponsePayload) {
      expect(response).toHaveProperty('data');
      expect(response.data).toHaveProperty('api_key');
      expect(response.data).toHaveProperty('api_token');
      expect(response.data).toHaveProperty('api_user');
      expect(response.data).toHaveProperty('created_at');
      expect(response.data).toHaveProperty('email');
      expect(response.data).toHaveProperty('id');
      expect(response.data).toHaveProperty('manager_account_id');
      expect(response.data).toHaveProperty('record_type');
      expect(response.data).toHaveProperty('updated_at');
    }
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.managedAccounts
        .retrieveManagedAccount('f65ceda4-6522-4ad6-aede-98de83385123')
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.managedAccounts
        .retrieveManagedAccount(
          'f65ceda4-6522-4ad6-aede-98de83385123',
          TEST_AUTH_KEY,
        )
        .then(responseFn);
    });
  });
  describe('updateManagedAccount', function () {
    function responseFn(response: ResponsePayload) {
      expect(response).toHaveProperty('data');
      expect(response.data).toHaveProperty('api_key');
      expect(response.data).toHaveProperty('api_token');
      expect(response.data).toHaveProperty('api_user');
      expect(response.data).toHaveProperty('created_at');
      expect(response.data).toHaveProperty('email');
      expect(response.data).toHaveProperty('id');
      expect(response.data).toHaveProperty('manager_account_id');
      expect(response.data).toHaveProperty('record_type');
      expect(response.data).toHaveProperty('updated_at');
    }
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.managedAccounts
        .updateManagedAccount('f65ceda4-6522-4ad6-aede-98de83385123', {
          business_name: "Larry's Dog Food Inc",
        })
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.managedAccounts
        .updateManagedAccount(
          'f65ceda4-6522-4ad6-aede-98de83385123',
          {
            business_name: "Larry's Dog Food Inc",
          },
          TEST_AUTH_KEY,
        )
        .then(responseFn);
    });
  });
  describe('disableAccount', function () {
    function responseFn(response: ResponsePayload) {
      expect(response).toHaveProperty('data');
      expect(response.data).toHaveProperty('api_key');
      expect(response.data).toHaveProperty('api_token');
      expect(response.data).toHaveProperty('api_user');
      expect(response.data).toHaveProperty('created_at');
      expect(response.data).toHaveProperty('email');
      expect(response.data).toHaveProperty('id');
      expect(response.data).toHaveProperty('manager_account_id');
      expect(response.data).toHaveProperty('record_type');
      expect(response.data).toHaveProperty('updated_at');
    }
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.managedAccounts
        .disableAccount('f65ceda4-6522-4ad6-aede-98de83385123')
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.managedAccounts
        .disableAccount('f65ceda4-6522-4ad6-aede-98de83385123', TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
  describe('enableAccount', function () {
    function responseFn(response: ResponsePayload) {
      expect(response).toHaveProperty('data');
      expect(response.data).toHaveProperty('api_key');
      expect(response.data).toHaveProperty('api_token');
      expect(response.data).toHaveProperty('api_user');
      expect(response.data).toHaveProperty('created_at');
      expect(response.data).toHaveProperty('email');
      expect(response.data).toHaveProperty('id');
      expect(response.data).toHaveProperty('manager_account_id');
      expect(response.data).toHaveProperty('record_type');
      expect(response.data).toHaveProperty('updated_at');
    }
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.managedAccounts
        .enableAccount('f65ceda4-6522-4ad6-aede-98de83385123', {'': ''}) // need to pass string due to telnyx mock parse
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.managedAccounts
        .enableAccount(
          'f65ceda4-6522-4ad6-aede-98de83385123',
          {'': ''}, // need to pass string due to telnyx mock parse
          TEST_AUTH_KEY,
        )
        .then(responseFn);
    });
  });
});
