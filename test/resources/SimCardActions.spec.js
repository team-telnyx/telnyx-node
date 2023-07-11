'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();
var TEST_UUID = '123e4567-e89b-12d3-a456-426614174000';

describe('numberPortoutsSupportingDocuments', function () {
  describe('list', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
    }

    it('Sends the correct request', function () {
      return telnyx.simCardActions
        .list({
          page: {
            number: '1',
            size: '20',
          },
          filter: {
            sim_card_id: '47a1c2b0-cc7b-4ab1-bb98-b33fb0fc61b9',
            status: 'in-progress',
            bulk_sim_card_action_id: '47a1c2b0-cc7b-4ab1-bb98-b33fb0fc61b9',
            action_type: 'disable',
          },
        })
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.simCardActions
        .list(
          {
            page: {
              number: '1',
              size: '20',
            },
            filter: {
              sim_card_id: '47a1c2b0-cc7b-4ab1-bb98-b33fb0fc61b9',
              status: 'in-progress',
              bulk_sim_card_action_id: '47a1c2b0-cc7b-4ab1-bb98-b33fb0fc61b9',
              action_type: 'disable',
            },
          },
          TEST_AUTH_KEY
        )
        .then(responseFn);
    });
  });
  describe('retrieve', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
    }

    it('Sends the correct request', function () {
      return telnyx.simCardActions.retrieve(TEST_UUID).then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.simCardActions
        .retrieve(TEST_UUID, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
});
