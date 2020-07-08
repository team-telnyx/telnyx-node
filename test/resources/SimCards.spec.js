'use strict';

var telnyx = require('../../testUtils').getTelnyxMock();
var utils = require('../../lib/utils');
var expect = require('chai').expect;

var TEST_AUTH_KEY =
  'KEY187557EC22404DB39975C43ACE661A58_9QdDI7XD5bvyahtaWx1YQo';

describe('SimCards Resource', function () {
  describe('retrieve', function () {
    function responseFn(response) {
      expect(response.data).to.have.property('id');
      expect(response.data).to.include({
        record_type: 'sim_card',
      });
    }

    it('Sends the correct request', function () {
      return telnyx.simCards.retrieve('123').then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.simCards.retrieve('123', TEST_AUTH_KEY).then(responseFn);
    });
  });

  describe('list', function () {
    function responseFn(response) {
      expect(response.data[0]).to.have.property('id');
      expect(response.data[0]).to.have.property('status');
      expect(response.data[0]).to.have.property('iccid');
      expect(response.data[0]).to.include({record_type: 'sim_card'});
    }

    it('Sends the correct request', function () {
      return telnyx.simCards.list().then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.simCards.list(TEST_AUTH_KEY).then(responseFn);
    });
  });

  describe('update', function () {
    const simCardData = {
      status: 'inactive',
    };

    function responseFn(response) {
      expect(response.data).to.have.property('id');
      expect(response.data).to.have.property('status');
      expect(response.data).to.have.property('iccid');
      expect(response.data.record_type).to.be.eq('sim_card');
    }

    it('Sends the correct request', function () {
      return telnyx.simCards.update('123', simCardData).then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.simCards
        .update('123', simCardData, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('save', function () {
    function responseFn(response) {
      expect(response.data.record_type).to.be.eq('sim_card');
      expect(response.data).to.have.property('id');
      expect(response.data).to.have.property('status');
      expect(response.data).to.have.property('iccid');
      expect(response.data).to.have.property('sim_card_group_id');
      expect(response.data.record_type).to.be.eq('sim_card');
    }

    it('Sends the correct request', function () {
      return telnyx.simCards.retrieve('123').then(function (response) {
        const simCard = response.data;
        return simCard.save({status: 'inactive'}).then(responseFn);
      });
    });
  });

  describe('delete', function () {
    function responseFn(response) {
      expect(response.data.record_type).to.be.eq('sim_card');
      expect(response.data).to.have.property('id');
      expect(response.data).to.have.property('status');
      expect(response.data).to.have.property('iccid');
      expect(response.data).to.have.property('sim_card_group_id');
      expect(response.data.record_type).to.be.eq('sim_card');
    }

    it('Sends the correct request', function () {
      return telnyx.simCards.retrieve('123').then(function (response) {
        const simCard = response.data;
        return simCard.del().then(responseFn);
      });
    });
  });

  ['activate', 'deactivate'].forEach(function (command) {
    function responseFn(response) {
      expect(response.data.record_type).to.be.eq('sim_card');
    }

    describe(command, function () {
      const camelCaseCommand = utils.snakeToCamelCase(command);
      it('Sends the correct request', function () {
        return telnyx.simCards.retrieve('123').then(function (response) {
          const simCard = response.data;
          return simCard[camelCaseCommand]({}).then(responseFn);
        });
      });
      it('Sends the correct request [with specified auth]', function () {
        return telnyx.simCards.retrieve('123').then(function (response) {
          const simCard = response.data;
          return simCard[camelCaseCommand]({}, TEST_AUTH_KEY).then(responseFn);
        });
      });
    });
  });

  describe('retrieveNetworkPreferences', function () {
    function responseFn(response) {
      expect(response.data.record_type).to.be.eq(
        'sim_card_network_preferences'
      );
      expect(response.data).to.include.keys([
        'sim_card_id',
        'mobile_operator_networks_preferences',
      ]);
    }

    it('Sends the correct request', function () {
      return telnyx.simCards.retrieve('123').then(function (response) {
        const simCard = response.data;
        return simCard.retrieveNetworkPreferences().then(responseFn);
      });
    });

    it('Sends the correct request passing params', function () {
      return telnyx.simCards.retrieve('123').then(function (response) {
        const simCard = response.data;
        return simCard
          .retrieveNetworkPreferences({include_ota_updates: true})
          .then(responseFn);
      });
    });
  });

  describe('setNetworkPreferences', function () {
    function responseFn(response) {
      // eslint-disable-next-line no-console
      console.log(response);
      expect(response.data.record_type).to.be.eq(
        'sim_card_network_preferences'
      );
      expect(response.data).to.include.keys([
        'sim_card_id',
        'mobile_operator_networks_preferences',
      ]);
    }

    it('Sends the correct request', function () {
      return telnyx.simCards.retrieve('123').then(function (response) {
        const simCard = response.data;
        return simCard
          .setNetworkPreferences({
            mobile_operator_networks_preferences: [
              {
                mobile_operator_network_id: '123',
                priority: 0,
              },
            ],
          })
          .then(responseFn);
      });
    });
  });

  describe('deleteNetworkPreferences', function () {
    function responseFn(response) {
      expect(response.data.record_type).to.be.eq(
        'sim_card_network_preferences'
      );
      expect(response.data).to.include.keys([
        'sim_card_id',
        'mobile_operator_networks_preferences',
      ]);
    }

    it('Sends the correct request', function () {
      return telnyx.simCards.retrieve('123').then(function (response) {
        const simCard = response.data;
        return simCard.deleteNetworkPreferences().then(responseFn);
      });
    });
  });
});
