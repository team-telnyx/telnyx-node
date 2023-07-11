'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();

describe('Access IP Ranges Resource', function () {
  describe('list', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
      for (let index = 0; index < response.data.length; index++) {
        const element = response.data[index];
        expect(element).to.have.property('cidr_block');
        expect(element).to.have.property('created_at');
        expect(element).to.have.property('description');
        expect(element).to.have.property('id');
        expect(element).to.have.property('status');
        expect(element).to.have.property('updated_at');
        expect(element).to.have.property('user_id');
      }
    }

    it('Sends the correct request', function () {
      return telnyx.accessIpRanges
        .list({
          filter: {
            cidr_block: 'string',
            status: 'pending',
            created_at: {
              gt: '2019-08-24T14:15:22Z',
              lt: '2019-08-24T14:15:22Z',
            },
          },
          page: {
            number: '1',
            size: '20',
          },
        })
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.accessIpRanges
        .list(
          {
            filter: {
              cidr_block: 'string',
              status: 'pending',
              created_at: {
                gt: '2019-08-24T14:15:22Z',
                lt: '2019-08-24T14:15:22Z',
              },
            },
            page: {
              number: '1',
              size: '20',
            },
          },
          TEST_AUTH_KEY
        )
        .then(responseFn);
    });
  });

  describe('create', function () {
    function responseFn(response) {
      expect(response).to.have.property('cidr_block');
      expect(response).to.have.property('created_at');
      expect(response).to.have.property('description');
      expect(response).to.have.property('id');
      expect(response).to.have.property('status');
      expect(response).to.have.property('updated_at');
      expect(response).to.have.property('user_id');
    }

    it('Sends the correct request', function () {
      return telnyx.accessIpRanges
        .create({
          cidr_block: 'string',
        })
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.accessIpRanges
        .create(
          {
            cidr_block: 'string',
            description: 'string',
          },
          TEST_AUTH_KEY
        )
        .then(responseFn);
    });
  });

  describe('del', function () {
    function responseFn(response) {
      expect(response).to.have.property('created_at');
      expect(response).to.have.property('cidr_block');
      expect(response).to.have.property('description');
      expect(response).to.have.property('id');
      expect(response).to.have.property('status');
      expect(response).to.have.property('updated_at');
      expect(response).to.have.property('user_id');
    }

    it('Sends the correct request', function () {
      return telnyx.accessIpRanges.del('1').then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.accessIpRanges.del('1', TEST_AUTH_KEY).then(responseFn);
    });
  });
});
