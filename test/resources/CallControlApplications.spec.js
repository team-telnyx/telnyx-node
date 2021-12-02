'use strict';


var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();

describe('Call Control List list', function() {
  describe('retrieve', function() {
    function responseFn(response) {
      expect(response.data).to.have.property('id');
    }

    it('Sends the correct request', function() {
      return telnyx.callControlApplications.retrieve('123').then((response) => {
        responseFn(response)
      });
    })

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.callControlApplications.retrieve('123', TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('create', function() {
    function responseFn(response) {
      expect(response.data).to.have.property('id');
      expect(response.data).to.include({record_type: 'call_control_application'});
    }

    it('Sends the correct request', function() {
      return telnyx.callControlApplications.create({'application_name': 'test', 'webhook_event_url': 'https://fakeurl.org/123123'})
        .then(responseFn);
    })

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.callControlApplications.create({'application_name': 'test', 'webhook_event_url': 'https://fakeurl.org/123123'}, TEST_AUTH_KEY)
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth in options]', function() {
      return telnyx.callControlApplications.create({'application_name': 'test', 'webhook_event_url': 'https://fakeurl.org/123123'}, {api_key: TEST_AUTH_KEY})
        .then(responseFn);
    });
  });

  describe('list', function() {
    function responseFn(response) {
      expect(response.data[0]).to.have.property('id');
      expect(response.data[0]).to.include({record_type: 'call_control_application'});
    }

    it('Sends the correct request', function() {
      return telnyx.callControlApplications.list()
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.callControlApplications.list(TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('del', function() {

    function responseFn(response) {
      if (response.data) {
        expect(response.data).to.have.property('id');
        expect(response.data).to.include({record_type: 'call_control_application'});
      }
    }

    it('Sends the correct request', function() {
      return telnyx.callControlApplications.create({'application_name': 'test', 'webhook_event_url': 'https://fakeurl.org/123123'})
        .then(function(response) {
          const callControlApplications = response.data;
          return callControlApplications.del()
            .then(responseFn);
        })
    });
    it('Sends the correct request [with specified auth]', function() {
      return telnyx.callControlApplications.retrieve('123')
        .then(function(response) {
          const callControlApplications = response.data;
          return callControlApplications.del(TEST_AUTH_KEY)
            .then(responseFn);
        })
    });
  });

  describe('update', function() {
    function responseFn(response) {
      if (response.data) {
        expect(response.data).to.have.property('id');
        expect(response.data).to.have.property('application_name');
      }
    }

    it('Sends the correct request', function() {
      return telnyx.callControlApplications.create({'application_name': 'test', 'webhook_event_url': 'https://fakeurl.org/123123'})
        .then(function(response) {
          const ip = response.data;
          return ip.update({'application_name': 'test updated', 'webhook_event_url': 'https://fakeurl.org/123123'})
            .then(responseFn);
        })
    });
    it('Sends the correct request [with specified auth]', function() {
      return telnyx.callControlApplications.retrieve('123')
        .then(function(response) {
          const ip = response.data;
          return ip.update({'application_name': 'test updated', 'webhook_event_url': 'https://fakeurl.org/123123'}, TEST_AUTH_KEY)
            .then(responseFn);
        })
    });
  });
});
