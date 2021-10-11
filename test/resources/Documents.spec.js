'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();

describe('Documents Resource', function() {
  function responseFn(response) {
    expect(response.data).to.have.property('id');
    // expect(response.data).to.have.property('filename');
    // expect(response.data).to.have.property('sha256');
    // expect(response.data).to.have.property('content_type');
    // expect(response.data).to.have.property('size');
    // expect(response.data).to.include({record_type: 'document'});
  }

  describe('list', function() {
    function listResponseFn(response) {
      return responseFn({data: response.data[0]});
    }

    it('Sends the correct request', function() {
      return telnyx.documents.list()
        .then(listResponseFn);
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.documents.list(TEST_AUTH_KEY)
        .then(listResponseFn);
    });
  });

  describe('retrieve', function() {
    it('Sends the correct request', function() {
      return telnyx.documents.retrieve('123').then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.documents.retrieve('123', TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('upload', function() {
    it('Sends the correct request', function() {
      const uploadUrl = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';
      return telnyx.documents.upload({url: uploadUrl}).then(responseFn);
    });
  });

  describe('update', function() {
    it('Sends the correct request', function() {
      return telnyx.documents.update('123', {filename: 'test-document.pdf'}).then(responseFn);
    });
  });

  describe('del', function() {
    it('Sends the correct request', function() {
      return telnyx.documents.del('123').then(responseFn);
    });
  });

  describe('download', function() {
    it('Sends the correct request', function() {
      return telnyx.documents.download('123').then(responseFn);
    });
  });

  describe('listLinks', function() {
    it('Sends the correct request', function() {
      return telnyx.documents.listLinks().then(responseFn);
    });
  });
});
