'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();
var TEST_UUID = '123e4567-e89b-12d3-a456-426614174000';

describe('Ips Resource', function () {
  function responseFn(response) {
    expect(response.data).to.have.property('id');
    expect(response.data).to.have.property('connection_id');
    expect(response.data).to.have.property('ip_address');
    expect(response.data).to.have.property('record_type');
    expect(response.data).to.include({record_type: 'ip'});
  }

  describe('retrieve', function () {
    it('Sends the correct request', function () {
      return telnyx.ips.retrieve(TEST_UUID).then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.ips.retrieve(TEST_UUID, TEST_AUTH_KEY).then(responseFn);
    });
  });

  describe('create', function () {
    it('Sends the correct request', function () {
      return telnyx.ips
        .create({connection_id: 'Central BSD-1', ip_address: '192.168.0.0'})
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.ips
        .create(
          {connection_id: 'Central BSD-1', ip_address: '192.168.0.0'},
          TEST_AUTH_KEY
        )
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth in options]', function () {
      return telnyx.ips
        .create(
          {connection_id: 'Central BSD-1', ip_address: '192.168.0.0'},
          {api_key: TEST_AUTH_KEY}
        )
        .then(responseFn);
    });
  });

  describe('list', function () {
    function listResponseFn(response) {
      return responseFn({data: response.data[0]});
    }

    it('Sends the correct request', function () {
      return telnyx.ips.list().then(listResponseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.ips.list(TEST_AUTH_KEY).then(listResponseFn);
    });
  });

  describe('Nested', function () {
    function responseFn(response) {
      if (response.data) {
        expect(response.data).to.have.property('id');
        expect(response.data).to.have.property('ip_address');
        expect(response.data).to.have.property('connection_id');
        expect(response.data).to.include({record_type: 'ip'});
      }
    }

    describe.skip('del', function () {
      it('Sends the correct request', function () {
        return telnyx.ips
          .create({connection_id: 'Central BSD-1', ip_address: '192.168.0.0'})
          .then(function (response) {
            const ip = response.data;
            return ip.del().then(responseFn);
          });
      });
      it('Sends the correct request [with specified auth]', function () {
        return telnyx.ips.retrieve('123').then(function (response) {
          const ip = response.data;
          return ip.del(TEST_AUTH_KEY).then(responseFn);
        });
      });
    });

    describe('update', function () {
      it('Sends the correct request', function () {
        return telnyx.ips
          .create({connection_id: 'Central BSD-1', ip_address: '192.168.0.0'})
          .then(function (response) {
            const ip = response.data;
            return ip
              .update({
                connection_id: 'Western BSD-2',
                ip_address: '192.168.0.0',
              })
              .then(responseFn);
          });
      });
      it.skip('Sends the correct request [with specified auth]', function () {
        return telnyx.ips.retrieve('123').then(function (response) {
          const ip = response.data;
          return ip
            .update({connection_id: 'Western BSD-2'}, TEST_AUTH_KEY)
            .then(responseFn);
        });
      });
    });
  });
});
