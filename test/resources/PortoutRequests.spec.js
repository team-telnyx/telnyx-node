'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();
var TEST_UUID = '123e4567-e89b-12d3-a456-426614174000';

describe('portout', function () {
  describe('updateStatus', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
    }

    it('Sends the correct request', function () {
      return telnyx.portoutRequests
        .updateStatus(TEST_UUID, 'string', {body: 'string'})
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.portoutRequests
        .updateStatus(TEST_UUID, 'string', {body: 'string'}, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('listComments', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
      for (let index = 0; index < response.data.length; index++) {
        const element = response.data[index];
        expect(element).to.have.property('body');
        expect(element).to.have.property('created_at');
        expect(element).to.have.property('id');
        expect(element).to.have.property('user_id');
      }
    }

    it('Sends the correct request', function () {
      return telnyx.portoutRequests.listComments(TEST_UUID).then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.portoutRequests
        .listComments(TEST_UUID, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('createComment', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
      for (let index = 0; index < response.data.length; index++) {
        const element = response.data[index];
        expect(element).to.have.property('body');
        expect(element).to.have.property('created_at');
        expect(element).to.have.property('id');
        expect(element).to.have.property('user_id');
      }
    }

    it('Sends the correct request', function () {
      return telnyx.portoutRequests.createComment(TEST_UUID).then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.portoutRequests
        .createComment(TEST_UUID, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
  describe('retrieveRequest', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
    }

    it('Sends the correct request', function () {
      return telnyx.portoutRequests.retrieveRequest(TEST_UUID).then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.portoutRequests
        .retrieveRequest(TEST_UUID, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
  describe('retrieveComment', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
      for (let index = 0; index < response.data.length; index++) {
        const element = response.data[index];
        expect(element).to.have.property('body');
        expect(element).to.have.property('created_at');
        expect(element).to.have.property('id');
        expect(element).to.have.property('user_id');
      }
    }

    it('Sends the correct request', function () {
      return telnyx.portoutRequests.retrieveComment(TEST_UUID).then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.portoutRequests
        .retrieveComment(TEST_UUID, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
  describe('listDocuments', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
      for (let index = 0; index < response.data.length; index++) {
        const element = response.data[index];
        expect(element).to.have.property('created_at');
        expect(element).to.have.property('document_id');
        expect(element).to.have.property('id');
        expect(element).to.have.property('portout_id');
        expect(element).to.have.property('record_type');
        expect(element).to.have.property('type');
        expect(element).to.have.property('updated_at');
      }
    }

    it('Sends the correct request', function () {
      return telnyx.portoutRequests.listDocuments(TEST_UUID).then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.portoutRequests
        .listDocuments(TEST_UUID, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
  describe('createDocuments', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
      for (let index = 0; index < response.data.length; index++) {
        const element = response.data[index];
        expect(element).to.have.property('created_at');
        expect(element).to.have.property('document_id');
        expect(element).to.have.property('id');
        expect(element).to.have.property('portout_id');
        expect(element).to.have.property('record_type');
        expect(element).to.have.property('type');
        expect(element).to.have.property('updated_at');
      }
    }

    it('Sends the correct request', function () {
      return telnyx.portoutRequests.createDocuments(TEST_UUID).then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.portoutRequests
        .createDocuments(TEST_UUID, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
});
