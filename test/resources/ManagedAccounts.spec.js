'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();

describe('Managed Accounts', function () {
  describe('list', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
      for (let index = 0; index < response.length; index++) {
        const row = response[index];
        expect(row).to.have.property('api_key');
        expect(row).to.have.property('api_token');
        expect(row).to.have.property('api_user');
        expect(row).to.have.property('created_at');
        expect(row).to.have.property('email');
        expect(row).to.have.property('id');
        expect(row).to.have.property('manager_account_id');
        expect(row).to.have.property('record_type');
        expect(row).to.have.property('updated_at');
      }
    }

    it('Sends the correct request', function () {
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
          sort: 'email',
          include_cancelled_accounts: 'true',
        })
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
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
            sort: 'email',
            include_cancelled_accounts: 'true',
          },
          TEST_AUTH_KEY
        )
        .then(responseFn);
    });
  });

  describe('create', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
      expect(response.data).to.have.property('api_key');
      expect(response.data).to.have.property('api_token');
      expect(response.data).to.have.property('api_user');
      expect(response.data).to.have.property('created_at');
      expect(response.data).to.have.property('email');
      expect(response.data).to.have.property('id');
      expect(response.data).to.have.property('manager_account_id');
      expect(response.data).to.have.property('record_type');
      expect(response.data).to.have.property('updated_at');
    }
    it('Sends the correct request', function () {
      return telnyx.managedAccounts
        .create({business_name: "Larry's Cat Food Inc"})
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.managedAccounts
        .create({business_name: "Larry's Cat Food Inc"}, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
  describe('retrieveManagedAccount', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
      expect(response.data).to.have.property('api_key');
      expect(response.data).to.have.property('api_token');
      expect(response.data).to.have.property('api_user');
      expect(response.data).to.have.property('created_at');
      expect(response.data).to.have.property('email');
      expect(response.data).to.have.property('id');
      expect(response.data).to.have.property('manager_account_id');
      expect(response.data).to.have.property('record_type');
      expect(response.data).to.have.property('updated_at');
    }
    it('Sends the correct request', function () {
      return telnyx.managedAccounts
        .retrieveManagedAccount('f65ceda4-6522-4ad6-aede-98de83385123')
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.managedAccounts
        .retrieveManagedAccount(
          'f65ceda4-6522-4ad6-aede-98de83385123',
          TEST_AUTH_KEY
        )
        .then(responseFn);
    });
  });
  describe('updateManagedAccount', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
      expect(response.data).to.have.property('api_key');
      expect(response.data).to.have.property('api_token');
      expect(response.data).to.have.property('api_user');
      expect(response.data).to.have.property('created_at');
      expect(response.data).to.have.property('email');
      expect(response.data).to.have.property('id');
      expect(response.data).to.have.property('manager_account_id');
      expect(response.data).to.have.property('record_type');
      expect(response.data).to.have.property('updated_at');
    }
    it('Sends the correct request', function () {
      return telnyx.managedAccounts
        .updateManagedAccount('f65ceda4-6522-4ad6-aede-98de83385123', {
          business_name: "Larry's Dog Food Inc",
        })
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.managedAccounts
        .updateManagedAccount(
          'f65ceda4-6522-4ad6-aede-98de83385123',
          {
            business_name: "Larry's Dog Food Inc",
          },
          TEST_AUTH_KEY
        )
        .then(responseFn);
    });
  });
  describe('disableAccount', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
      expect(response.data).to.have.property('api_key');
      expect(response.data).to.have.property('api_token');
      expect(response.data).to.have.property('api_user');
      expect(response.data).to.have.property('created_at');
      expect(response.data).to.have.property('email');
      expect(response.data).to.have.property('id');
      expect(response.data).to.have.property('manager_account_id');
      expect(response.data).to.have.property('record_type');
      expect(response.data).to.have.property('updated_at');
    }
    it('Sends the correct request', function () {
      return telnyx.managedAccounts
        .disableAccount('f65ceda4-6522-4ad6-aede-98de83385123')
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.managedAccounts
        .disableAccount('f65ceda4-6522-4ad6-aede-98de83385123', TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
  describe('enableAccount', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
      expect(response.data).to.have.property('api_key');
      expect(response.data).to.have.property('api_token');
      expect(response.data).to.have.property('api_user');
      expect(response.data).to.have.property('created_at');
      expect(response.data).to.have.property('email');
      expect(response.data).to.have.property('id');
      expect(response.data).to.have.property('manager_account_id');
      expect(response.data).to.have.property('record_type');
      expect(response.data).to.have.property('updated_at');
    }
    it('Sends the correct request', function () {
      return telnyx.managedAccounts
        .enableAccount('f65ceda4-6522-4ad6-aede-98de83385123')
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.managedAccounts
        .enableAccount('f65ceda4-6522-4ad6-aede-98de83385123', TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
});
