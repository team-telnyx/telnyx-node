'use strict';

var telnyx = require('../../testUtils').getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = 'KEY187557EC22404DB39975C43ACE661A58_9QdDI7XD5bvyahtaWx1YQo';

describe('NumberOrderDocuments Resource', function() {
  describe('retrieve', function() {
    function responseFn(response) {
      expect(response.data).to.include({
        id: '387d1e31-a218-4375-8151-103f2d5e2d2c',
        record_type: 'number_order_document'
      });
      expect(response.data).to.have.property('file_id');
      expect(response.data).to.have.property('requirements_id');
      expect(response.data).to.have.property('requirement_type');
    }

    it('Sends the correct request', function() {
      return telnyx.numberOrderDocuments.retrieve('387d1e31-a218-4375-8151-103f2d5e2d2c')
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.numberOrderDocuments.retrieve(
        '387d1e31-a218-4375-8151-103f2d5e2d2c', TEST_AUTH_KEY
      )
        .then(responseFn);
    });
  });

  describe('list', function() {
    function responseFn(response) {
      expect(response.data[0]).to.have.property('id');
      expect(response.data[0]).to.have.property('file_id');
      expect(response.data[0]).to.have.property('requirements_id');
      expect(response.data[0]).to.have.property('requirement_type');
      expect(response.data[0]).to.include({record_type: 'number_order_document'});
    }

    it('Sends the correct request', function() {
      return telnyx.numberOrderDocuments.list()
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.numberOrderDocuments.list(TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('update', function() {
    it('Sends the correct request', function() {
      return telnyx.numberOrderDocuments.update(
        '387d1e31-a218-4375-8151-103f2d5e2d2c',
        {file_id: '1e3c5822-0362-4702-8e46-5a129f0d3976'}
      )
        .then(function(response) {
          expect(response.data).to.include({
            record_type: 'number_order_document',
          });
          expect(response.data).to.have.property('file_id');
          expect(response.data).to.have.property('requirements_id');
          expect(response.data).to.have.property('requirement_type');
        });
    });
  });

  describe('upload', function() {
    function responseFn(response) {
      expect(response.data).to.include({
        record_type: 'number_order_document',
      });
      expect(response.data).to.have.property('file_id');
      expect(response.data).to.have.property('requirements_id');
      expect(response.data).to.have.property('requirement_type');
    }

    it('Sends the correct request', function() {
      return telnyx.numberOrderDocuments.upload({
        requirements_id: '36aaf27d-986b-493c-bd1b-de16af2e4292'
      })
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.numberOrderDocuments.upload(
        {
          requirements_id: '36aaf27d-986b-493c-bd1b-de16af2e4292'
        },
        TEST_AUTH_KEY
      )
        .then(responseFn);
    });
  });
});
