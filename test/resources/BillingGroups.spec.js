'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();
var TEST_UUID = '123e4567-e89b-12d3-a456-426614174000';

describe('Billing Groups', function () {
  describe('list', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
      expect(response.data[0]).to.have.property('created_at');
      expect(response.data[0]).to.have.property('deleted_at');
      expect(response.data[0]).to.have.property('id');
      expect(response.data[0]).to.have.property('name');
      expect(response.data[0]).to.have.property('organization_id');
      expect(response.data[0]).to.have.property('record_type');
      expect(response.data[0]).to.have.property('updated_at');
      expect(response).to.have.property('meta');
      expect(response.meta).to.have.property('page_number');
      expect(response.meta).to.have.property('page_size');
      expect(response.meta).to.have.property('total_pages');
      expect(response.meta).to.have.property('total_results');
    }

    it('Sends the correct request', function () {
      return telnyx.billingGroups
        .list({
          page: {
            number: 1,
            size: 20,
          },
        })
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.billingGroups
        .list(
          {
            page: {
              number: 1,
              size: 20,
            },
          },
          TEST_AUTH_KEY
        )
        .then(responseFn);
    });
  });

  describe('create', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
    }

    it('Sends the correct request', function () {
      return telnyx.billingGroups
        .create({
          name: 'name',
        })
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.billingGroups
        .create(
          {
            name: 'name',
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
      return telnyx.billingGroups.retrieve(TEST_UUID).then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.billingGroups
        .retrieve(TEST_UUID, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
  describe('del', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
    }

    it('Sends the correct request', function () {
      return telnyx.billingGroups.del(TEST_UUID).then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.billingGroups
        .del(TEST_UUID, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
  describe('update', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
    }

    it('Sends the correct request', function () {
      return telnyx.billingGroups
        .update(TEST_UUID, {
          name: 'string',
        })
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.billingGroups
        .update(
          TEST_UUID,
          {
            name: 'string',
          },
          TEST_AUTH_KEY
        )
        .then(responseFn);
    });
  });
});
