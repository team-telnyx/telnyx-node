'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();

var faxCreateData = {
  connection_id: 'c-1',
  media_url: 'http://www.example.com/fax.pdf',
  quality: 'high',
  to: '+456',
  from: '+123',
}

describe('Faxes Resource', function () {
  describe('retrieve', function () {
    function responseFn(response) {
      // expect(response.data).to.have.property('fax_id');
      expect(response.data).to.have.property('connection_id');
      expect(response.data).to.have.property('media_url');
      expect(response.data).to.have.property('to');
      // expect(response.data).to.include({record_type: 'fax'});
    }

    it('Sends the correct request', function () {
      return telnyx.faxes.retrieve('123').then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.faxes.retrieve('123', TEST_AUTH_KEY).then(responseFn);
    });
  });

  describe('create', function () {
    function responseFn(response) {
      // expect(response.data).to.have.property('fax_id');
      expect(response.data).to.have.property('connection_id');
      expect(response.data).to.have.property('media_url');
      expect(response.data).to.have.property('to');
      // expect(response.data).to.include({record_type: 'fax'});
    }

    it('Sends the correct request', function () {
      return telnyx.faxes.create(faxCreateData).then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.faxes
        .create(faxCreateData, TEST_AUTH_KEY)
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth in options]', function () {
      return telnyx.faxes
        .create(faxCreateData, {api_key: TEST_AUTH_KEY})
        .then(responseFn);
    });
  });

  describe('list', function () {
    function responseFn(response) {
      // expect(response.data[0]).to.have.property('fax_id');
      expect(response.data[0]).to.have.property('connection_id');
      expect(response.data[0]).to.have.property('media_url');
      expect(response.data[0]).to.have.property('to');
      // expect(response.data[0]).to.include({record_type: 'fax'});
    }

    it('Sends the correct request', function () {
      return telnyx.faxes.list().then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.faxes.list(TEST_AUTH_KEY).then(responseFn);
    });
  });

  describe('Nested', function () {
    function responseFn(response) {
      if (response.data) {
        // expect(response.data).to.have.property('fax_id');
        expect(response.data).to.have.property('connection_id');
        expect(response.data).to.have.property('media_url');
        expect(response.data).to.have.property('to');
        // expect(response.data).to.include({record_type: 'fax'});
      }
    }

    describe('del', function () {
      it('Sends the correct request', function () {
        return telnyx.faxes
          .create(faxCreateData)
          .then(function (response) {
            const fax = response.data;
            return fax.del().then(responseFn);
          });
      });
      it('Sends the correct request [with specified auth]', function () {
        return telnyx.faxes.retrieve('123').then(function (response) {
          const fax = response.data;
          return fax.del(TEST_AUTH_KEY).then(responseFn);
        });
      });
    });
  });
});
