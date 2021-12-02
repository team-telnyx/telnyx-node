'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();
var TEST_UUID = '123e4567-e89b-12d3-a456-426614174000';

var faxCreateData = {
  connection_id: 'c-1',
  media_url: 'http://www.example.com/fax.pdf',
  quality: 'high',
  to: '+456',
  from: '+123',
}

describe('Faxes Resource', function () {
  function responseFn(response) {
    expect(response.data).to.have.property('connection_id');
    expect(response.data).to.have.property('media_url');
    expect(response.data).to.have.property('to');
  }

  describe('retrieve', function () {
    it('Sends the correct request', function () {
      return telnyx.faxes.retrieve(TEST_UUID).then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.faxes.retrieve(TEST_UUID, TEST_AUTH_KEY).then(responseFn);
    });
  });

  describe('create', function () {
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

  describe('send', function () {
    it('Sends the correct request', function () {
      return telnyx.faxes.send(faxCreateData).then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.faxes
        .send(faxCreateData, TEST_AUTH_KEY)
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth in options]', function () {
      return telnyx.faxes
        .send(faxCreateData, {api_key: TEST_AUTH_KEY})
        .then(responseFn);
    });
  });

  describe('list', function () {
    function listResponseFn(response) {
      return responseFn({data: response.data[0]});
    }

    it('Sends the correct request', function () {
      return telnyx.faxes.list().then(listResponseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.faxes.list(TEST_AUTH_KEY).then(listResponseFn);
    });
  });

  describe.skip('Nested', function () {
    function responseFn(response) {
      expect(response.statusCode).to.equal(204);
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
        return telnyx.faxes.retrieve(TEST_UUID).then(function (response) {
          const fax = response.data;
          return fax.del(TEST_AUTH_KEY).then(responseFn);
        });
      });
    });
  });
});
