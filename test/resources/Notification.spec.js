'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();

describe('Notification resources', function() {
  describe.skip('Channels', function() {
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
        return telnyx.notification.channels.list()
          .then(listResponseFn);
      });

      it('Sends the correct request [with specified auth]', function() {
        return telnyx.notification.channels.list(TEST_AUTH_KEY)
          .then(listResponseFn);
      });
    });

    describe('create', function() {
      it('Sends the correct request', function() {
        return telnyx.notification.channels.create({name: 'my-org'})
          .then(responseFn);
      });
    });

    describe('retrieve', function() {
      it('Sends the correct request', function() {
        return telnyx.notification.channels.retrieve('123')
          .then(responseFn);
      });

      it('Sends the correct request [with specified auth]', function() {
        return telnyx.notification.channels.retrieve('123', TEST_AUTH_KEY)
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
        return telnyx.notification.channels.update('123', updateBody)
          .then(responseFn);
      });

      it('Sends the correct request [with specified auth]', function() {
        return telnyx.notification.channels.update('123', updateBody, TEST_AUTH_KEY)
          .then(responseFn);
      });
    });

    describe('del', function() {
      it('Sends the correct request', function() {
        return telnyx.notification.channels.del('123')
          .then(responseFn);
      });

      it('Sends the correct request [with specified auth]', function() {
        return telnyx.notification.channels.del('123', TEST_AUTH_KEY)
          .then(responseFn);
      });
    });
  });

  describe.skip('Events', function () {
    function responseFn(response) {
      expect(response.data).to.have.property('enabled');
      expect(response.data).to.have.property('id');
      expect(response.data).to.have.property('name');
      expect(response.data).to.have.property('notification_category');
    }

    describe('list', function () {
      function listResponseFn(response) {
        return responseFn({data: response.data[0]});
      }

      it('Sends the correct request', function () {
        return telnyx.notification.events.list().then(listResponseFn);
      });
    });
  });

  describe.skip('EventConditions', function () {
    function responseFn(response) {
      expect(response.data).to.have.property('id');
      expect(response.data).to.have.property('associated_record_type');
      expect(response.data).to.have.property('allow_multiple_channels');
      expect(response.data).to.have.property('supported_channels');
      expect(response.data).to.have.property('asynchronous');
      expect(response.data).to.have.property('parameters');
      expect(response.data).to.include({record_type: 'notification_event_condition'});
    }

    describe('list', function () {
      function listResponseFn(response) {
        return responseFn({data: response.data[0]});
      }

      it('Sends the correct request', function () {
        return telnyx.notification.eventConditions.list().then(listResponseFn);
      });
    });
  });

  describe.skip('Profiles', function() {
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
        return telnyx.notification.profiles.list()
          .then(listResponseFn);
      });

      it('Sends the correct request [with specified auth]', function() {
        return telnyx.notification.profiles.list(TEST_AUTH_KEY)
          .then(listResponseFn);
      });
    });

    describe('create', function() {
      it('Sends the correct request', function() {
        return telnyx.notification.profiles.create({name: 'my-org'})
          .then(responseFn);
      });
    });

    describe('retrieve', function() {
      it('Sends the correct request', function() {
        return telnyx.notification.profiles.retrieve('123')
          .then(responseFn);
      });

      it('Sends the correct request [with specified auth]', function() {
        return telnyx.notification.profiles.retrieve('123', TEST_AUTH_KEY)
          .then(responseFn);
      });
    });

    describe('update', function() {
      it('Sends the correct request', function() {
        return telnyx.notification.profiles.update('123', {name: 'new-org-name'})
          .then(responseFn);
      });

      it('Sends the correct request [with specified auth]', function() {
        return telnyx.notification.profiles.update('123', {name: 'new-org-name'}, TEST_AUTH_KEY)
          .then(responseFn);
      });
    });

    describe('del', function() {
      it('Sends the correct request', function() {
        return telnyx.notification.profiles.del('123')
          .then(responseFn);
      });

      it('Sends the correct request [with specified auth]', function() {
        return telnyx.notification.profiles.del('123', TEST_AUTH_KEY)
          .then(responseFn);
      });
    });
  });

  describe.skip('Settings', function() {
    function responseFn(response) {
      expect(response.data).to.have.property('status');
      expect(response.data).to.have.property('notification_profile_id');
      expect(response.data).to.have.property('notification_event_condition_id');
      expect(response.data).to.have.property('associated_record_type');
      expect(response.data).to.have.property('associated_record_type_value');
      expect(response.data).to.include({record_type: 'notification_setting'});
    }

    describe('list', function() {
      function listResponseFn(response) {
        return responseFn({data: response.data[0]});
      }

      it('Sends the correct request', function() {
        return telnyx.notification.settings.list()
          .then(listResponseFn);
      });

      it('Sends the correct request [with specified auth]', function() {
        return telnyx.notification.settings.list(TEST_AUTH_KEY)
          .then(listResponseFn);
      });
    });

    describe('create', function() {
      it('Sends the correct request', function() {
        return telnyx.notification.settings.create({notification_channel_id: '123'})
          .then(responseFn);
      });
    });

    describe('retrieve', function() {
      it('Sends the correct request', function() {
        return telnyx.notification.settings.retrieve('123')
          .then(responseFn);
      });

      it('Sends the correct request [with specified auth]', function() {
        return telnyx.notification.settings.retrieve('123', TEST_AUTH_KEY)
          .then(responseFn);
      });
    });

    describe('del', function() {
      it('Sends the correct request', function() {
        return telnyx.notification.settings.del('123')
          .then(responseFn);
      });

      it('Sends the correct request [with specified auth]', function() {
        return telnyx.notification.settings.del('123', TEST_AUTH_KEY)
          .then(responseFn);
      });
    });
  });
});
