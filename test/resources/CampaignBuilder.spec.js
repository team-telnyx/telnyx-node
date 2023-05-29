'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();

describe('Campaign Builder', function () {
  describe('create', function () {
    function responseFn(response) {
      if (Object.keys(response).length > 0) {
        expect(response).to.have.property('affiliateMarketing');
        expect(response).to.have.property('ageGated');
        expect(response).to.have.property('autoRenewal');
        expect(response).to.have.property('billedDate');
        expect(response).to.have.property('brandId');
        expect(response).to.have.property('campaignId');
        expect(response).to.have.property('createDate');
        expect(response).to.have.property('description');
        expect(response).to.have.property('directLending');
        expect(response).to.have.property('embeddedLink');
        expect(response).to.have.property('embeddedPhone');
        expect(response).to.have.property('helpMessage');
        expect(response).to.have.property('messageFlow');
        expect(response).to.have.property('numberPool');
        expect(response).to.have.property('resellerId');
        expect(response).to.have.property('sample1');
        expect(response).to.have.property('sample2');
        expect(response).to.have.property('sample3');
        expect(response).to.have.property('sample4');
        expect(response).to.have.property('sample5');
        expect(response).to.have.property('status');
        expect(response).to.have.property('subUsecases');
        expect(response).to.have.property('subscriberHelp');
        expect(response).to.have.property('subscriberOptin');
        expect(response).to.have.property('subscriberOptout');
        expect(response).to.have.property('usecase');
        expect(response).to.have.property('vertical');
      } else {
        expect(response.lastResponse.statusCode).to.equal(200);
      }
    }
    it('Sends the correct request', function () {
      return telnyx.campaignBuilder
        .create({
          affiliateMarketing: true,
          ageGated: true,
          autoRenewal: true,
          brandId: 'string',
          description: 'string',
          directLending: true,
          embeddedLink: true,
          embeddedPhone: true,
          helpKeywords: 'string',
          helpMessage: 'string',
          messageFlow: 'string',
          mnoIds: [0],
          numberPool: true,
          optinKeywords: 'string',
          optinMessage: 'string',
          optoutKeywords: 'string',
          optoutMessage: 'string',
          referenceId: 'string',
          resellerId: 'string',
          sample1: 'string',
          sample2: 'string',
          sample3: 'string',
          sample4: 'string',
          sample5: 'string',
          subUsecases: ['string'],
          subscriberHelp: true,
          subscriberOptin: true,
          subscriberOptout: true,
          tag: ['string'],
          termsAndConditions: true,
          usecase: 'MIXED',
        })
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.campaignBuilder
        .create(
          {
            affiliateMarketing: true,
            ageGated: true,
            autoRenewal: true,
            brandId: 'string',
            description: 'string',
            directLending: true,
            embeddedLink: true,
            embeddedPhone: true,
            helpKeywords: 'string',
            helpMessage: 'string',
            messageFlow: 'string',
            mnoIds: [0],
            numberPool: true,
            optinKeywords: 'string',
            optinMessage: 'string',
            optoutKeywords: 'string',
            optoutMessage: 'string',
            referenceId: 'string',
            resellerId: 'string',
            sample1: 'string',
            sample2: 'string',
            sample3: 'string',
            sample4: 'string',
            sample5: 'string',
            subUsecases: ['string'],
            subscriberHelp: true,
            subscriberOptin: true,
            subscriberOptout: true,
            tag: ['string'],
            termsAndConditions: true,
            usecase: 'MIXED',
          },
          TEST_AUTH_KEY
        )
        .then(responseFn);
    });
  });
  describe('retrieveQualifyByUsecase', function () {
    function responseFn(response) {
      expect(response.lastResponse.statusCode).to.equal(200);
    }
    it('Sends the correct request', function () {
      return telnyx.campaignBuilder
        .retrieveQualifyByUsecase('brandId', 'usecase')
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.campaignBuilder
        .retrieveQualifyByUsecase('brandId', 'usecase', TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
});
