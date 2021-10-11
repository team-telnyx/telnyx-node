'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();

describe.skip('NotificationSettings Resource', function() {
  function responseFn(response) {
    expect(response.data).to.have.property('status');
    expect(response.data).to.have.property('notification_profile_id');
    expect(response.data).to.have.property('notification_event_condition_id');
    expect(response.data).to.have.property('associated_record_type');
    expect(response.data).to.have.property('associated_record_type_value');
    expect(response.data).to.include({record_type: 'notification_setting'});
  }

  describe.skip('list', function() {
    function listResponseFn(response) {
      return responseFn({data: response.data[0]});
    }

    it('Sends the correct request', function() {
      return telnyx.notificationSettings.list()
        .then(listResponseFn);
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.notificationSettings.list(TEST_AUTH_KEY)
        .then(listResponseFn);
    });
  });

  describe('create', function() {
    it('Sends the correct request', function() {
      return telnyx.notificationSettings.create({notification_channel_id: '123'})
        .then(responseFn);
    });
  });

  describe('retrieve', function() {
    it('Sends the correct request', function() {
      return telnyx.notificationSettings.retrieve('123')
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.notificationSettings.retrieve('123', TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('del', function() {
    it('Sends the correct request', function() {
      return telnyx.notificationSettings.del('123')
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.notificationSettings.del('123', TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
});
