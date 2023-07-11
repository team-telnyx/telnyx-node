'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;
var TEST_AUTH_KEY = utils.getUserTelnyxKey();

describe('Bulk Creation', function () {
  describe('list', function () {
    function responseFn(response) {
      expect(response).to.have.property('meta');
      expect(response.meta).to.have.property('page');
      expect(response.meta).to.have.property('recordsPerPage');
      expect(response.meta).to.have.property('totalPages');
      expect(response.meta).to.have.property('totalRecords');
      expect(response).to.have.property('records');
      expect(response.records[0]).to.have.property('status');
      expect(response.records[0]).to.have.property('taskId');
    }

    it('Sends the correct request', function () {
      return telnyx.bulkCreation
        .list({
          recordsPerPage: 20,
          page: 1,
        })
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.bulkCreation
        .list(
          {
            recordsPerPage: 20,
            page: 1,
          },
          TEST_AUTH_KEY
        )
        .then(responseFn);
    });
  });

  describe('create', function () {
    function responseFn(response) {
      // eslint-disable-next-line no-warning-comments
      // todo point 29
      // expect(response).to.have.property('brandCount');
      // expect(response).to.have.property('taskId');
    }

    it('Sends the correct request', function () {
      return telnyx.bulkCreation
        .create({
          brands: [
            {
              city: 'New York',
              companyName: 'ABC Inc.',
              country: 'US',
              description:
                'This campaign belongs to Brand X and will be used for marketing.',
              displayName: 'ABC Mobile',
              email: 'string',
              entityType: 'SMALL_BUSINESS',
              firstName: 'John',
              lastName: 'Smith',
              phone: '+12024567890',
              phoneNumbers: ['+12193849584', '+13129872456'],
              postalCode: '10001',
              referenceId: '4q90017a-2f50-4c90-c9e6-5f67304cbde9',
              sampleMessages: ['Sample message 1', 'Sample message 2'],
              state: 'NY',
              street: '123',
              subUsecases: ['MARKETING', '2FA'],
              vertical: 'TECHNOLOGY',
              website: 'http://www.abcmobile.com',
            },
          ],
        })
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.bulkCreation
        .create(
          {
            brands: [
              {
                city: 'New York',
                companyName: 'ABC Inc.',
                country: 'US',
                description:
                  'This campaign belongs to Brand X and will be used for marketing.',
                displayName: 'ABC Mobile',
                email: 'string',
                entityType: 'SMALL_BUSINESS',
                firstName: 'John',
                lastName: 'Smith',
                phone: '+12024567890',
                phoneNumbers: ['+12193849584', '+13129872456'],
                postalCode: '10001',
                referenceId: '4q90017a-2f50-4c90-c9e6-5f67304cbde9',
                sampleMessages: ['Sample message 1', 'Sample message 2'],
                state: 'NY',
                street: '123',
                subUsecases: ['MARKETING', '2FA'],
                vertical: 'TECHNOLOGY',
                website: 'http://www.abcmobile.com',
              },
            ],
          },
          TEST_AUTH_KEY
        )
        .then(responseFn);
    });
  });

  describe('retrieveTaskStatus', function () {
    function responseFn(response) {
      expect(response).to.have.property('status');
      expect(response).to.have.property('taskId');
    }

    it('Sends the correct request', function () {
      return telnyx.bulkCreation.retrieveTaskStatus('1').then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.bulkCreation.retrieveTaskStatus('1').then(responseFn);
    });
  });
  describe('retrieveDetailedTaskStatus', function () {
    function responseFn(response) {
      expect(response).to.have.property('meta');
      expect(response.meta).to.have.property('page');
      expect(response.meta).to.have.property('recordsPerPage');
      expect(response.meta).to.have.property('totalPages');
      expect(response.meta).to.have.property('totalRecords');
      expect(response).to.have.property('records');
      expect(response.records[0]).to.have.property('brand');
      expect(response.records[0]).to.have.property('campaign');
      expect(response.records[0]).to.have.property('phoneNumbers');
      expect(response.records[0]).to.have.property('referenceId');
      expect(response.records[0]).to.have.property('taskId');
    }

    it('Sends the correct request', function () {
      return telnyx.bulkCreation
        .retrieveDetailedTaskStatus('1')
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.bulkCreation
        .retrieveDetailedTaskStatus('1', TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
});
