'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();

describe.skip('NotificationChannels Resource', function() {
  function responseFn(response) {
    expect(response.data).to.have.property('id');
    expect(response.data).to.have.property('channel_type_id');
    expect(response.data).to.have.property('channel_destination');
    expect(response.data).to.include({record_type: 'notification_channel'});
  }

  describe.skip('list', function() {
    function listResponseFn(response) {
      return responseFn({data: response.data[0]});
    }

    it('Sends the correct request', function() {
      return telnyx.notificationChannels.list()
        .then(listResponseFn);
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.notificationChannels.list(TEST_AUTH_KEY)
        .then(listResponseFn);
    });
  });

  describe('create', function() {
    it('Sends the correct request', function() {
      return telnyx.notificationChannels.create({name: 'my-org'})
        .then(responseFn);
    });
  });

  describe('retrieve', function() {
    it('Sends the correct request', function() {
      return telnyx.notificationChannels.retrieve('123')
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.notificationChannels.retrieve('123', TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('update', function() {
    const updateBody = {
      channel_type_id: 'webhook',
      notification_profile_id: '12455643-3cf1-4683-ad23-1cd32f7d5e0a',
      channel_destination: '+13125550000'
    };

    it('Sends the correct request', function() {
      return telnyx.notificationChannels.update('123', updateBody)
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.notificationChannels.update('123', updateBody, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('del', function() {
    it('Sends the correct request', function() {
      return telnyx.notificationChannels.del('123')
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.notificationChannels.del('123', TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
});
