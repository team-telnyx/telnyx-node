import {type ResponsePayload, utils as testUtils} from '../utils';
const telnyx = testUtils.getTelnyxMock();

const TEST_AUTH_KEY = testUtils.getUserTelnyxKey();

// skip because this runs under a different api base url and no mock setup exists for this
describe.skip('Campaign Builder', function () {
  describe('create', function () {
    function responseFn(response: ResponsePayload) {
      if (Object.keys(response).length > 0) {
        expect(response).toHaveProperty('ageGated');
        expect(response).toHaveProperty('autoRenewal');
        expect(response).toHaveProperty('billedDate');
        expect(response).toHaveProperty('brandId');
        expect(response).toHaveProperty('campaignId');
        expect(response).toHaveProperty('createDate');
        expect(response).toHaveProperty('description');
        expect(response).toHaveProperty('directLending');
        expect(response).toHaveProperty('embeddedLink');
        expect(response).toHaveProperty('embeddedPhone');
        expect(response).toHaveProperty('helpMessage');
        expect(response).toHaveProperty('messageFlow');
        expect(response).toHaveProperty('numberPool');
        expect(response).toHaveProperty('resellerId');
        expect(response).toHaveProperty('sample1');
        expect(response).toHaveProperty('sample2');
        expect(response).toHaveProperty('sample3');
        expect(response).toHaveProperty('sample4');
        expect(response).toHaveProperty('sample5');
        expect(response).toHaveProperty('status');
        expect(response).toHaveProperty('subUsecases');
        expect(response).toHaveProperty('subscriberHelp');
        expect(response).toHaveProperty('subscriberOptin');
        expect(response).toHaveProperty('subscriberOptout');
        expect(response).toHaveProperty('usecase');
        expect(response).toHaveProperty('vertical');
      } else {
        expect(response.lastResponse?.statusCode).toBe(200);
      }
    }
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.campaignBuilder
        .create({
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

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.campaignBuilder
        .create(
          {
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
          TEST_AUTH_KEY,
        )
        .then(responseFn);
    });
  });
  describe('retrieveQualifyByUsecase', function () {
    function responseFn(response: ResponsePayload) {
      expect(response.lastResponse?.statusCode).toBe(200);
    }
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.campaignBuilder
        .retrieveQualifyByUsecase('brandId', 'usecase')
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.campaignBuilder
        .retrieveQualifyByUsecase('brandId', 'usecase', TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
});
