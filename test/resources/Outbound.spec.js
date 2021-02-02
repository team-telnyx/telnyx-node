'use strict';


var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();

describe('Outbound list', function() {
  describe('retrieve', function() {
    function responseFn(response) {
      expect(response.data).to.include({id: '123'});
    }

    it('Sends the correct request', function() {
      return telnyx.outboundVoiceProfiles.retrieve('123').then((response) => {
        responseFn(response)
      });
    })

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.outboundVoiceProfiles.retrieve('123', TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('create', function() {
    function responseFn(response) {
      expect(response.data).to.have.property('id');
      expect(response.data).to.have.property('billing_group_id');
      expect(response.data).to.include({record_type: 'outbound_voice_profile'});
    }

    it('Sends the correct request', function() {
      return telnyx.outboundVoiceProfiles.create({
        billing_group_id: '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
        concurrent_call_limit: 10,
        name: 'name'
      })
        .then(responseFn);
    })

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.outboundVoiceProfiles.create({
        billing_group_id: '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
        concurrent_call_limit: 10,
        name: 'name'
      }, TEST_AUTH_KEY)
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth in options]', function() {
      return telnyx.outboundVoiceProfiles.create({
        billing_group_id: '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
        concurrent_call_limit: 10,
        name: 'name'
      }, {api_key: TEST_AUTH_KEY})
        .then(responseFn);
    });
  });

  describe('list', function() {
    function responseFn(response) {
      expect(response.data[0]).to.have.property('id');
      expect(response.data[0]).to.have.property('name');
      expect(response.data[0]).to.have.property('billing_group_id');
      expect(response.data[0]).to.include({record_type: 'outbound_voice_profile'});
    }

    it('Sends the correct request', function() {
      return telnyx.outboundVoiceProfiles.list()
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.outboundVoiceProfiles.list(TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('del', function() {

    function responseFn(response) {
      if (response.data) {
        expect(response.data).to.have.property('id');
        expect(response.data).to.include({record_type: 'outbound_voice_profile'});
      }
    }

    it('Sends the correct request', function() {
      return telnyx.outboundVoiceProfiles.create({billing_group_id: '6a09cdc3-8948-47f0-aa62-74ac943d6c58', name: 'name'})
        .then(function(response) {
          const outboundVoiceProfiles = response.data;
          return outboundVoiceProfiles.del()
            .then(responseFn);
        })
    });
    it('Sends the correct request [with specified auth]', function() {
      return telnyx.outboundVoiceProfiles.retrieve('123')
        .then(function(response) {
          const outboundVoiceProfiles = response.data;
          return outboundVoiceProfiles.del(TEST_AUTH_KEY)
            .then(responseFn);
        })
    });
  });

  describe('update', function() {
    function responseFn(response) {
      if (response.data) {
        expect(response.data).to.have.property('id');
        expect(response.data).to.include({concurrent_call_limit: 12});
      }
    }

    it('Sends the correct request', function() {
      return telnyx.outboundVoiceProfiles.create({
        billing_group_id: '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
        concurrent_call_limit: 10,
        name: 'name'
      })
        .then(function(response) {
          const ip = response.data;
          return ip.update({billing_group_id: '6a09cdc3-8948-47f0-aa62-74ac943d6c59', concurrent_call_limit: 12})
            .then(responseFn);
        })
    });
    it('Sends the correct request [with specified auth]', function() {
      return telnyx.outboundVoiceProfiles.retrieve('123')
        .then(function(response) {
          const ip = response.data;
          return ip.update({concurrent_call_limit: 12}, TEST_AUTH_KEY)
            .then(responseFn);
        })
    });
  });
});
