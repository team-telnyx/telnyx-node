'use strict';


var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();

describe('Fax Application List list', function() {
  describe('retrieve', function() {
    function responseFn(response) {
      expect(response.data).to.include({id: '123'});
    }

    it('Sends the correct request', function() {
      return telnyx.faxApplications.retrieve('123').then((response) => {
        responseFn(response)
      });
    })

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.faxApplications.retrieve('123', TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('create', function() {
    function responseFn(response) {
      expect(response.data).to.have.property('id');
      expect(response.data).to.include({record_type: 'fax_applications'});
    }

    it('Sends the correct request', function() {
      return telnyx.faxApplications.create({'application_name': 'test', 'webhook_event_url': '123123'})
        .then(responseFn);
    })

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.faxApplications.create({'application_name': 'test', 'webhook_event_url': '123123'}, TEST_AUTH_KEY)
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth in options]', function() {
      return telnyx.faxApplications.create({'application_name': 'test', 'webhook_event_url': '123123'}, {api_key: TEST_AUTH_KEY})
        .then(responseFn);
    });
  });

  describe('list', function() {
    function responseFn(response) {
      expect(response.data[0]).to.have.property('id');
      expect(response.data[0]).to.include({record_type: 'fax_applications'});
    }

    it('Sends the correct request', function() {
      return telnyx.faxApplications.list()
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.faxApplications.list(TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('del', function() {

    function responseFn(response) {
      if (response.data) {
        expect(response.data).to.have.property('id');
        expect(response.data).to.include({record_type: 'fax_applications'});
      }
    }

    it('Sends the correct request', function() {
      return telnyx.faxApplications.create({'application_name': 'test', 'webhook_event_url': '123123'})
        .then(function(response) {
          const faxApplications = response.data;
          return faxApplications.del()
            .then(responseFn);
        })
    });
    it('Sends the correct request [with specified auth]', function() {
      return telnyx.faxApplications.retrieve('123')
        .then(function(response) {
          const faxApplications = response.data;
          return faxApplications.del(TEST_AUTH_KEY)
            .then(responseFn);
        })
    });
  });

  describe('update', function() {
    function responseFn(response) {
      if (response.data) {
        expect(response.data).to.have.property('id');
        expect(response.data).to.include({application_name: 'test updated'});
      }
    }

    it('Sends the correct request', function() {
      return telnyx.faxApplications.create({'application_name': 'test', 'webhook_event_url': '123123'})
        .then(function(response) {
          const ip = response.data;
          return ip.update({'application_name': 'test updated', 'webhook_event_url': '123123'})
            .then(responseFn);
        })
    });
    it('Sends the correct request [with specified auth]', function() {
      return telnyx.faxApplications.retrieve('123')
        .then(function(response) {
          const ip = response.data;
          return ip.update({'application_name': 'test updated', 'webhook_event_url': '123123'}, TEST_AUTH_KEY)
            .then(responseFn);
        })
    });
  });
});
