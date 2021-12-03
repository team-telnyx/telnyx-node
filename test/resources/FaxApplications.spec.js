'use strict';


var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();
var TEST_UUID = '123e4567-e89b-12d3-a456-426614174000';

describe('Fax Applications list', function() {
  function responseFn(response) {
    expect(response.data).to.have.property('id');
    expect(response.data).to.include({record_type: 'fax_application'});
  }

  const createFaxData = {
    'application_name': 'test',
    'webhook_event_url': 'https://fakeurl.com/123123'
  };

  describe('retrieve', function() {
    it('Sends the correct request', function() {
      return telnyx.faxApplications.retrieve(TEST_UUID).then((response) => {
        responseFn(response)
      });
    })

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.faxApplications.retrieve(TEST_UUID, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('create', function() {
    it('Sends the correct request', function() {
      return telnyx.faxApplications.create(createFaxData)
        .then(responseFn);
    })

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.faxApplications.create(createFaxData, TEST_AUTH_KEY)
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth in options]', function() {
      return telnyx.faxApplications.create(createFaxData, {api_key: TEST_AUTH_KEY})
        .then(responseFn);
    });
  });

  describe('list', function() {
    function listResponseFn(response) {
      return responseFn({data: response.data[0]});
    }

    it('Sends the correct request', function() {
      return telnyx.faxApplications.list()
        .then(listResponseFn);
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.faxApplications.list(TEST_AUTH_KEY)
        .then(listResponseFn);
    });
  });

  describe('del', function() {
    function responseFn(response) {
      if (response.data) {
        expect(response.data).to.have.property('id');
        expect(response.data).to.include({record_type: 'fax_application'});
      }
    }

    it('Sends the correct request', function() {
      return telnyx.faxApplications.create(createFaxData)
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
    it('Sends the correct request', function() {
      return telnyx.faxApplications.create(createFaxData)
        .then(function(response) {
          const ip = response.data;
          return ip.update(createFaxData)
            .then(responseFn);
        })
    });
    it('Sends the correct request [with specified auth]', function() {
      return telnyx.faxApplications.retrieve(TEST_UUID)
        .then(function(response) {
          const ip = response.data;
          return ip.update(createFaxData, TEST_AUTH_KEY)
            .then(responseFn);
        })
    });
  });
});
