'use strict';

var testUtils = require('../../testUtils');
var telnyx = testUtils.getTelnyxMock();
var utils = require('../../lib/utils');
var expect = require('chai').expect;

var TEST_AUTH_KEY = testUtils.getUserTelnyxKey();
var TEST_UUID = '123e4567-e89b-12d3-a456-426614174000';

describe('SimCards Resource', function () {
  const simCardUpdateData = {
    tags: ['personal'],
  };


  describe('retrieve', function () {
    function responseFn(response) {
      expect(response.data).to.have.property('id');
      expect(response.data).to.include({
        record_type: 'sim_card',
      });
    }

    it('Sends the correct request', function () {
      return telnyx.simCards.retrieve(TEST_UUID).then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.simCards.retrieve(TEST_UUID, TEST_AUTH_KEY).then(responseFn);
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
    function responseFn(response) {
      expect(response.data).to.have.property('id');
      expect(response.data).to.have.property('status');
      expect(response.data).to.have.property('iccid');
      expect(response.data.record_type).to.be.eq('sim_card');
    }

    it('Sends the correct request', function () {
      return telnyx.simCards.update(TEST_UUID, simCardUpdateData).then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.simCards
        .update(TEST_UUID, simCardUpdateData, TEST_AUTH_KEY)
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
      return telnyx.simCards.retrieve(TEST_UUID).then(function (response) {
        const simCard = response.data;
        return simCard.save(simCardUpdateData).then(responseFn);
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
      return telnyx.simCards.retrieve(TEST_UUID).then(function (response) {
        const simCard = response.data;
        return simCard.del().then(responseFn);
      });
    });
  });

  ['activate', 'deactivate', 'enable', 'disable', 'set_standby'].forEach(function (command) {
    function responseFn(response) {
      expect(response.data.record_type).to.be.eq('sim_card');
    }

    describe(command, function () {
      const camelCaseCommand = utils.snakeToCamelCase(command);
      it('Sends the correct request', function () {
        return telnyx.simCards.retrieve(TEST_UUID).then(function (response) {
          const simCard = response.data;
          return simCard[camelCaseCommand]({}).then(responseFn);
        });
      });
      it('Sends the correct request [with specified auth]', function () {
        return telnyx.simCards.retrieve(TEST_UUID).then(function (response) {
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
      return telnyx.simCards.retrieve(TEST_UUID).then(function (response) {
        const simCard = response.data;
        return simCard.retrieveNetworkPreferences().then(responseFn);
      });
    });

    it('Sends the correct request passing params', function () {
      return telnyx.simCards.retrieve(TEST_UUID).then(function (response) {
        const simCard = response.data;
        return simCard
          .retrieveNetworkPreferences({include_ota_updates: true})
          .then(responseFn);
      });
    });
  });

  describe('setNetworkPreferences', function () {
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
      return telnyx.simCards.retrieve(TEST_UUID).then(function (response) {
        const simCard = response.data;
        return simCard
          .setNetworkPreferences({
            mobile_operator_networks_preferences: [
              {
                mobile_operator_network_id: TEST_UUID,
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
      return telnyx.simCards.retrieve(TEST_UUID).then(function (response) {
        const simCard = response.data;
        return simCard.deleteNetworkPreferences().then(responseFn);
      });
    });
  });

  describe('PublicIP', function() {
    function responseFn(response) {
      expect(response.data.record_type).to.be.eq(
        'sim_card_public_ip'
      );
      expect(response.data).to.include.keys([
        'sim_card_id',
        'status',
      ]);
    }

    describe('retrieve', function () {
      it('Sends the correct request', function () {
        return telnyx.simCards.retrieve(TEST_UUID).then(function (response) {
          const simCard = response.data;
          return simCard.retrievePublicIP().then(responseFn);
        });
      });
    });

    describe('set', function () {
      it('Sends the correct request', function () {
        return telnyx.simCards.retrieve(TEST_UUID).then(function (response) {
          const simCard = response.data;
          return simCard.setPublicIP().then(responseFn);
        });
      });
    });

    describe('delete', function () {
      it('Sends the correct request', function () {
        return telnyx.simCards.retrieve(TEST_UUID).then(function (response) {
          const simCard = response.data;
          return simCard.deletePublicIP().then(responseFn);
        });
      });
    });
  });
});
