'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();
var TEST_UUID = '123e4567-e89b-12d3-a456-426614174000';

describe('Documents', function () {
  describe('list', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
      expect(response).to.have.property('meta');
    }

    it('Sends the correct request', function () {
      return telnyx.documents
        .list({
          filter: {
            filename: {
              contains: 'invoice',
            },
            customer_reference: {
              eq: 'MY REF 001',
              in: ['MY REF 001'],
            },
            created_at: {
              gt: '2021-04-09T22:25:27.521Z',
              lt: '2021-04-09T22:25:27.521Z',
            },
          },
          sort: ['filename'],
          page: {
            number: '1',
            size: '20',
          },
        })
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.documents
        .list(
          {
            filter: {
              filename: {
                contains: 'invoice',
              },
              customer_reference: {
                eq: 'MY REF 001',
                in: ['MY REF 001'],
              },
              created_at: {
                gt: '2021-04-09T22:25:27.521Z',
                lt: '2021-04-09T22:25:27.521Z',
              },
            },
            sort: ['filename'],
            page: {
              number: '1',
              size: '20',
            },
          },
          TEST_AUTH_KEY
        )
        .then(responseFn);
    });
  });

  describe('Document Id', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
    }
    it('Sends the correct request', function () {
      return telnyx.documents.retrieveDocumentId(TEST_UUID).then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.documents
        .retrieveDocumentId(TEST_UUID, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
  describe('Download Document', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
    }
    it('Sends the correct request', function () {
      return telnyx.documents
        .retrieveDownloadDocument(TEST_UUID)
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.documents
        .retrieveDownloadDocument(TEST_UUID, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
  describe('update', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
    }

    it('Sends the correct request', function () {
      const requestBody = {
        customer_reference: 'your_customer_reference',
        filename: 'your_filename',
      };
      return telnyx.documents.update(TEST_UUID, requestBody).then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      const requestBody = {
        customer_reference: 'your_customer_reference',
        filename: 'your_filename',
      };
      return telnyx.documents
        .update(TEST_UUID, requestBody, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('upload', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
    }
    it('Sends the correct request', function () {
      return telnyx.documents
        .upload({
          url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
        })
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.documents
        .upload(
          {
            url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
          },
          TEST_AUTH_KEY
        )
        .then(responseFn);
    });
  });
  describe('del', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
    }
    it('Sends the correct request', function () {
      return telnyx.documents.del(TEST_UUID).then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.documents.del(TEST_UUID, TEST_AUTH_KEY).then(responseFn);
    });
  });
});
