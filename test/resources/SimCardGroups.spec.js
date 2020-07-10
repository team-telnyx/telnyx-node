'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();

describe('SimCardGroups Resource', function() {
  describe('retrieve', function() {
    function responseFn(response) {
      expect(response.data).to.include.keys(['id', 'name', 'data_enabled', 'data_limit', 'consumed_data']);
      expect(response.data).to.include({record_type: 'sim_card_group'});
      expect(response.data.consumed_data).to.include.keys(['amount', 'unit']);
    }

    it('Sends the correct request', function() {
      return telnyx.simCardGroups.retrieve('123').then(responseFn);
    })

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.simCardGroups.retrieve('123', TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('create', function() {
    function responseFn(response) {
      expect(response.data).to.include.keys(['id', 'name', 'data_enabled', 'data_limit', 'consumed_data']);
      expect(response.data).to.include({record_type: 'sim_card_group'});
      expect(response.data.consumed_data).to.include.keys(['amount', 'unit']);
    }

    it('Sends the correct request', function() {
      return telnyx.simCardGroups.create({name: 'My Custom Group'})
        .then(responseFn);
    })

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.simCardGroups.create({name: 'My Custom Group'}, TEST_AUTH_KEY)
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth in options]', function() {
      return telnyx.simCardGroups.create({name: 'My Custom Group'}, {api_key: TEST_AUTH_KEY})
        .then(responseFn);
    });
  });

  describe('list', function() {
    function responseFn(response) {
      expect(response.data[0]).to.include.keys(['id', 'name', 'data_enabled', 'data_limit', 'consumed_data']);
      expect(response.data[0]).to.include({record_type: 'sim_card_group'});
      expect(response.data[0].consumed_data).to.include.keys(['amount', 'unit']);
    }

    it('Sends the correct request', function() {
      return telnyx.simCardGroups.list()
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.simCardGroups.list(TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('Nested', function() {
    function responseFn(response) {
      if (response.data) {
        expect(response.data).to.include.keys(['id', 'name', 'data_enabled', 'data_limit', 'consumed_data']);
        expect(response.data).to.include({record_type: 'sim_card_group'});
        expect(response.data.consumed_data).to.include.keys(['amount', 'unit']);
      }
    }

    describe('del', function() {
      it('Sends the correct request', function() {
        return telnyx.simCardGroups.create({name: 'My Custom Group'})
          .then(function(response) {
            const simCardGroup = response.data;
            return simCardGroup.del()
              .then(responseFn);
          })
      });
      it('Sends the correct request [with specified auth]', function() {
        return telnyx.simCardGroups.retrieve('123')
          .then(function(response) {
            const simCardGroup = response.data;
            return simCardGroup.del(TEST_AUTH_KEY)
              .then(responseFn);
          })
      });
    });

    describe('update', function() {
      it('Sends the correct request', function() {
        return telnyx.simCardGroups.create({name: 'My Custom Group'})
          .then(function(response) {
            const simCardGroup = response.data;
            return simCardGroup.update({name: 'My Custom Updated Group'})
              .then(responseFn);
          })
      });
      it('Sends the correct request [with specified auth]', function() {
        return telnyx.simCardGroups.retrieve('123')
          .then(function(response) {
            const simCardGroup = response.data;
            return simCardGroup.update({name: 'My Custom Updated Group'}, TEST_AUTH_KEY)
              .then(responseFn);
          })
      });
    });
  })
});
