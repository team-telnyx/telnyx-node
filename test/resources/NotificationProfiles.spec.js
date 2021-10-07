'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();

describe.skip('NotificationProfiles Resource', function() {
  function responseFn(response) {
    expect(response.data).to.have.property('id');
    expect(response.data).to.have.property('name');
    expect(response.data).to.include({record_type: 'notification_profile'});
  }

  describe('list', function() {
    function listResponseFn(response) {
      return responseFn({data: response.data[0]});
    }

    it('Sends the correct request', function() {
      return telnyx.notificationProfiles.list()
        .then(listResponseFn);
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.notificationProfiles.list(TEST_AUTH_KEY)
        .then(listResponseFn);
    });
  });

  describe('create', function() {
    it('Sends the correct request', function() {
      return telnyx.notificationProfiles.create({name: 'my-org'})
        .then(responseFn);
    });
  });

  describe('retrieve', function() {
    it('Sends the correct request', function() {
      return telnyx.notificationProfiles.retrieve('123')
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.notificationProfiles.retrieve('123', TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('update', function() {
    it('Sends the correct request', function() {
      return telnyx.notificationProfiles.update('123', {name: 'new-org-name'})
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.notificationProfiles.update('123', {name: 'new-org-name'}, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('del', function() {
    it('Sends the correct request', function() {
      return telnyx.notificationProfiles.del('123')
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.notificationProfiles.del('123', TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
});
