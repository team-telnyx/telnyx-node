'use strict';

var telnyx = require('../../testUtils').getTelnyxMock();
var utils = require('../../lib/utils');
var expect = require('chai').expect;

var TEST_AUTH_KEY = 'KEY187557EC22404DB39975C43ACE661A58_9QdDI7XD5bvyahtaWx1YQo';

describe('SimCards Resource', function() {
  describe('retrieve', function() {
    function responseFn(response) {
      expect(response.data).to.include({
        id: '123',
        record_type: 'sim_card'
      });
    }

    it('Sends the correct request', function() {
      return telnyx.simCards.retrieve('123')
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.simCards.retrieve('123', TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('list', function() {
    function responseFn(response) {
      expect(response.data[0]).to.have.property('id');
      expect(response.data[0]).to.have.property('status');
      expect(response.data[0]).to.have.property('iccid');
      expect(response.data[0]).to.include({record_type: 'sim_card'});
    }

    it('Sends the correct request', function() {
      return telnyx.simCards.list()
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.simCards.list(TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('update', function() {
    const simCardData = {
      status: 'inactive'
    }

    function responseFn(response) {
      expect(response.data).to.have.property('id');
      expect(response.data).to.have.property('status');
      expect(response.data).to.have.property('iccid');
      expect(response.data.record_type).to.be.eq('sim_card');
    }

    it('Sends the correct request', function() {
      return telnyx.simCards.update('123', simCardData)
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.simCards.update('123', simCardData, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  ['activate', 'deactivate'].forEach(function(command) {
    function responseFn(response) {
      // eslint-disable-next-line no-console
      console.log('response',response);
      expect(response.data.record_type).to.be.eq('sim_card');
    }

    describe(command, function() {
      const camelCaseCommand = utils.snakeToCamelCase(command);
      // eslint-disable-next-line no-console
      console.log('AAAAAA',camelCaseCommand);
      it('Sends the correct request', function() {
        return telnyx.simCards.retrieve('123')
          .then(function(response) {
            const simCards = response.data;
            return simCards[camelCaseCommand]({})
              .then(responseFn);
          })
      });
      it('Sends the correct request [with specified auth]', function() {
        return telnyx.simCards.retrieve('123')
          .then(function(response) {
            const simCards = response.data;
            return simCards[camelCaseCommand]({}, TEST_AUTH_KEY)
              .then(responseFn);
          })
      });

    });
  });
});
