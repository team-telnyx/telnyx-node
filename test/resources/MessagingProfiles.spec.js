'use strict';

var telnyx = require('../../testUtils').getTelnyxMock();
var utils = require('../../lib/utils');
var expect = require('chai').expect;

var TEST_AUTH_KEY =
  'KEY187557EC22404DB39975C43ACE661A58_9QdDI7XD5bvyahtaWx1YQo';
var TEST_UUID = '123e4567-e89b-12d3-a456-426614174000';

var METHODS = ['phone_numbers', 'short_codes', 'del'];

describe('MessagingProfiles Resource', function () {
  function responseFn(response) {
    expect(response.data).to.have.property('name');
    expect(response.data).to.include({record_type: 'messaging_profile'});
  }

  describe('retrieve', function () {
    it('Sends the correct request', function () {
      return telnyx.messagingProfiles.retrieve(TEST_UUID).then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.messagingProfiles
        .retrieve(TEST_UUID, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('create', function () {
    it('Sends the correct request', function () {
      return telnyx.messagingProfiles
        .create({name: 'Summer Campaign'})
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.messagingProfiles
        .create({name: 'Summer Campaign'}, TEST_AUTH_KEY)
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth in options]', function () {
      return telnyx.messagingProfiles
        .create({name: 'Summer Campaign'}, {api_key: TEST_AUTH_KEY})
        .then(responseFn);
    });
  });

  describe('update', function () {
    it('Sends the correct request', function () {
      return telnyx.messagingProfiles
        .update(TEST_UUID, {name: 'Foo "baz"'})
        .then(responseFn);
    });
  });

  describe('list', function () {
    function responseFn(response) {
      expect(response.data[0]).to.have.property('id');
      expect(response.data[0]).to.have.property('name');
      expect(response.data[0]).to.include({record_type: 'messaging_profile'});
    }

    it('Sends the correct request', function () {
      return telnyx.messagingProfiles.list().then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.messagingProfiles.list(TEST_AUTH_KEY).then(responseFn);
    });
  });

  describe('PhoneNumbers methods', function () {
    function responseFn(response) {
      expect(response.data[0]).to.have.property('id');
      expect(response.data[0]).to.have.property('phone_number');
      expect(response.data[0]).to.have.property('messaging_profile_id');
      expect(response.data[0]).to.include({record_type: 'messaging_settings'});
    }

    describe('listPhoneNumbers', function () {
      it('Sends the correct request', function () {
        return telnyx.messagingProfiles
          .listPhoneNumbers(TEST_UUID)
          .then(responseFn);
      });

      it('Sends the correct request [with specified auth]', function () {
        return telnyx.messagingProfiles
          .listPhoneNumbers(TEST_UUID, TEST_AUTH_KEY)
          .then(responseFn);
      });
    });
  });

  describe('ShortCodes methods', function () {
    function responseFn(response) {
      expect(response.data[0]).to.have.property('id');
      expect(response.data[0]).to.have.property('short_code');
      expect(response.data[0]).to.have.property('messaging_profile_id');
      expect(response.data[0]).to.include({record_type: 'short_code'});
    }

    describe('listShortCodes', function () {
      it('Sends the correct request', function () {
        return telnyx.messagingProfiles
          .listShortCodes(TEST_UUID)
          .then(responseFn);
      });

      it('Sends the correct request [with specified auth]', function () {
        return telnyx.messagingProfiles
          .listShortCodes(TEST_UUID, TEST_AUTH_KEY)
          .then(responseFn);
      });
    });
  });

  describe('Nested', function () {
    function responseFn(response) {
      if (response.data.length) {
        expect(response.data[0]).to.have.property('id');
        expect(response.data[0]).to.have.property('record_type');
        expect(response.data[0]).to.have.property('messaging_profile_id');
      } else {
        expect(response.data).to.have.property('id');
      }
    }

    METHODS.forEach(function (action) {
      describe(action, function () {
        const camelCaseAction = utils.snakeToCamelCase(action);

        it('Sends the correct request', function () {
          return telnyx.messagingProfiles
            .create({name: 'Summer Campaign'})
            .then(function (response) {
              const mp = response.data;
              return mp[action]().then(responseFn);
            });
        });
        it('Sends the correct request [with specified auth]', function () {
          return telnyx.messagingProfiles
            .create({name: 'Summer Campaign'})
            .then(function (response) {
              const mp = response.data;
              return mp[action](TEST_AUTH_KEY).then(responseFn);
            });
        });

        describe(camelCaseAction, function () {
          it('Sends the correct request', function () {
            return telnyx.messagingProfiles
              .create({name: 'Summer Campaign'})
              .then(function (response) {
                const mp = response.data;
                return mp[camelCaseAction]().then(responseFn);
              });
          });
          it('Sends the correct request [with specified auth]', function () {
            return telnyx.messagingProfiles
              .create({name: 'Summer Campaign'})
              .then(function (response) {
                const mp = response.data;
                return mp[camelCaseAction](TEST_AUTH_KEY).then(responseFn);
              });
          });
        });
      });
    });

    describe('Metrics methods', function () {
      function metricsNestedResponseFn(response) {
        expect(response.data).to.have.property('detailed');
        expect(response.data).to.have.property('overview');
        expect(response.data.overview).to.have.property('inbound');
        expect(response.data.overview).to.have.property('outbound');
        expect(response.data.overview).to.have.property('phone_numbers');
        expect(response.data.overview).to.have.property('messaging_profile_id');
        expect(response.data.overview).to.include({
          record_type: 'messaging_profile_metrics',
        });
        expect(response.data.detailed[0]).to.have.property('metrics');
      }

      describe('retrieveMetrics', function () {
        it('Sends the correct request', function () {
          return telnyx.messagingProfiles
            .retrieveMetrics(TEST_UUID)
            .then(metricsNestedResponseFn);
        });

        it('Sends the correct request [with specified auth]', function () {
          return telnyx.messagingProfiles
            .retrieveMetrics(TEST_UUID, TEST_AUTH_KEY)
            .then(metricsNestedResponseFn);
        });
      });

      describe('nested metrics', function () {
        it('Sends the correct request', function () {
          return telnyx.messagingProfiles
            .create({name: 'Summer Campaign'})
            .then(function (response) {
              const mp = response.data;
              return mp.metrics().then(metricsNestedResponseFn);
            });
        });
        it('Sends the correct request [with specified auth]', function () {
          return telnyx.messagingProfiles
            .retrieve(TEST_UUID)
            .then(function (response) {
              const mp = response.data;
              return mp.metrics(TEST_AUTH_KEY).then(metricsNestedResponseFn);
            });
        });
      });
    });
  });
});
