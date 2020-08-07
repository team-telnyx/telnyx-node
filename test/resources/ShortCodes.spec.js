'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();

describe('ShortCodes Resource', function() {
  describe('retrieve', function() {
    function responseFn(response) {
      expect(response.data).to.have.property('id');
      expect(response.data).to.have.property('short_code');
      expect(response.data).to.have.property('country_code');
      expect(response.data).to.have.property('messaging_profile_id');
      expect(response.data).to.include({record_type: 'short_code'});
    }

    it('Sends the correct request', function() {
      return telnyx.shortCodes.retrieve('123').then(responseFn);
    })

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.shortCodes.retrieve('123', TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('list', function() {
    function responseFn(response) {
      expect(response.data[0]).to.have.property('id');
      expect(response.data[0]).to.have.property('short_code');
      expect(response.data[0]).to.have.property('country_code');
      expect(response.data[0]).to.have.property('messaging_profile_id');
      expect(response.data[0]).to.include({record_type: 'short_code'});

    }

    it('Sends the correct request', function() {
      return telnyx.shortCodes.list()
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.shortCodes.list(TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('Nested', function() {
    function responseFn(response) {
      if (response.data) {
        expect(response.data).to.have.property('id');
        expect(response.data).to.have.property('short_code');
        expect(response.data).to.have.property('country_code');
        expect(response.data).to.have.property('messaging_profile_id');
        expect(response.data).to.include({record_type: 'short_code'});
      }
    }

    describe('update', function() {
      it('Sends the correct request', function() {
        return telnyx.shortCodes.retrieve('123')
          .then(function(response) {
            const mp = response.data;
            return mp.update({messaging_profile_id: 'uuid'})
              .then(responseFn);
          })
      });
      it('Sends the correct request [with specified auth]', function() {
        return telnyx.shortCodes.retrieve('123')
          .then(function(response) {
            const mp = response.data;
            return mp.update({messaging_profile_id: 'uuid'}, TEST_AUTH_KEY)
              .then(responseFn);
          })
      });
    });
  })
});
