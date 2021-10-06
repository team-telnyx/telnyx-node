'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();

describe.skip('ManagedAccounts Resource', function () {
  function responseFn(response) {
    expect(response.data).to.have.property('id');
    expect(response.data).to.have.property('api_token');
    expect(response.data).to.have.property('api_user');
    expect(response.data).to.have.property('balance');
    expect(response.data).to.have.property('email');
    expect(response.data).to.have.property('manager_account_id');
    expect(response.data).to.have.property('organization_name');
    expect(response.data).to.include({record_type: 'managed_account'});
  }

  describe('list', function () {
    function listResponseFn(response) {
      return responseFn({data: response.data[0]});
    }

    it('Sends the correct request', function () {
      return telnyx.managedAccounts.list().then(listResponseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.managedAccounts.list(TEST_AUTH_KEY).then(listResponseFn);
    });
  });

  describe('create', function() {
    it('Sends the correct request', function () {
      return telnyx.managedAccounts.create({
        business_name: 'Art Vandelay Industries'
      }).then(responseFn);
    });
  });

  describe('retrieve', function () {
    it('Sends the correct request', function () {
      return telnyx.managedAccounts.retrieve('123').then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.managedAccounts.retrieve('123', TEST_AUTH_KEY).then(responseFn);
    });
  });

  describe('enable', function () {
    it('Sends the correct request', function () {
      return telnyx.managedAccounts.enable('123').then(responseFn);
    });
  });

  describe('disable', function () {
    it('Sends the correct request', function () {
      return telnyx.managedAccounts.disable('123').then(responseFn);
    });
  });
});
