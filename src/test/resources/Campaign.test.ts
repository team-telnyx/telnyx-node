import {type ResponsePayload, utils as testUtils} from '../utils';
const telnyx = testUtils.getTelnyxMock();

const TEST_AUTH_KEY = testUtils.getUserTelnyxKey();

type ResponsePayloadCampaign = ResponsePayload & {
  sharedByMe: object;
  sharedWithMe: object;
  detail: object[];
  lastResponse: {
    statusCode: number;
  };
};
describe('Campaign', function () {
  describe('list', function () {
    function responseFn(response: ResponsePayload) {
      expect(response).toHaveProperty('page');
      expect(response).toHaveProperty('records');
      expect(response).toHaveProperty('totalRecords');
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.campaign.list({brandId: 'string'}).then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.campaign
        .list({brandId: 'string'}, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
  describe('acceptShareCampaign', function () {
    function responseFn(response: ResponsePayloadCampaign) {
      expect(response).toHaveProperty('detail');
      for (const detail of response.detail) {
        expect(detail).toHaveProperty('loc');
        expect(detail).toHaveProperty('msg');
        expect(detail).toHaveProperty('type');
      }
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.campaign
        .acceptShareCampaign({campaignId: '1'})
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.campaign
        .acceptShareCampaign({brandId: 'string'}, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
  describe('getCampaignCost', function () {
    function responseFn(response: ResponsePayload) {
      expect(response).toHaveProperty('campaignUsecase');
      expect(response).toHaveProperty('description');
      expect(response).toHaveProperty('monthlyCost');
      expect(response).toHaveProperty('upFrontCost');
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.campaign.getCampaignCost({usecase: '1'}).then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.campaign
        .getCampaignCost({usecase: 'string'}, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
  describe('Get My Campaign', function () {
    function responseFn(response: ResponsePayload) {
      expect(response).toHaveProperty('affiliateMarketing');
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
    }
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.campaign
        .retrieveCampaignId({
          campaignId: 'campaignId',
        })
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.campaign
        .retrieveCampaignId(
          {
            campaignId: 'campaignId',
          },
          TEST_AUTH_KEY,
        )
        .then(responseFn);
    });
  });
  describe('Get Campaign MNO Metadata', function () {
    function responseFn(response: ResponsePayloadCampaign) {
      expect(response.lastResponse.statusCode).toBe(200);
    }
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.campaign
        .retrieveMnoMetadata({
          campaignId: 'campaignId',
        })
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.campaign
        .retrieveMnoMetadata(
          {
            campaignId: 'campaignId',
          },
          TEST_AUTH_KEY,
        )
        .then(responseFn);
    });
  });
  describe('Get Campaign Operation Status', function () {
    function responseFn(response: ResponsePayloadCampaign) {
      expect(response.lastResponse.statusCode).toBe(200);
    }
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.campaign
        .retrieveOperationStatus({
          campaignId: 'campaignId',
        })
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.campaign
        .retrieveOperationStatus(
          {
            campaignId: 'campaignId',
          },
          TEST_AUTH_KEY,
        )
        .then(responseFn);
    });
  });
  describe('retrieveOsrCampaignAttributes', function () {
    function responseFn(response: ResponsePayloadCampaign) {
      expect(response.lastResponse.statusCode).toBe(200);
    }
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.campaign
        .retrieveOsrCampaignAttributes({
          campaignId: 'campaignId',
        })
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.campaign
        .retrieveOsrCampaignAttributes(
          {
            campaignId: 'campaignId',
          },
          TEST_AUTH_KEY,
        )
        .then(responseFn);
    });
  });
  describe('deactivateCampaignId', function () {
    function responseFn(response: ResponsePayload) {
      expect(response).toHaveProperty('message');
      expect(response).toHaveProperty('record_type');
      expect(response).toHaveProperty('time');
    }
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.campaign
        .deactivateCampaignId({
          campaignId: 'campaignId',
        })
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.campaign
        .deactivateCampaignId(
          {
            campaignId: 'campaignId',
          },
          TEST_AUTH_KEY,
        )
        .then(responseFn);
    });
  });
  describe('retrieveSharingStatus', function () {
    function responseFn(response: ResponsePayloadCampaign) {
      expect(response).toHaveProperty('sharedByMe');
      const sharedByMe = response.sharedByMe;
      expect(sharedByMe).toHaveProperty('downstreamCnpId');
      expect(sharedByMe).toHaveProperty('sharedDate');
      expect(sharedByMe).toHaveProperty('sharingStatus');
      expect(sharedByMe).toHaveProperty('statusDate');
      expect(sharedByMe).toHaveProperty('upstreamCnpId');
      expect(response).toHaveProperty('sharedWithMe');
      const sharedWithMe = response.sharedWithMe;
      expect(sharedWithMe).toHaveProperty('downstreamCnpId');
      expect(sharedWithMe).toHaveProperty('sharedDate');
      expect(sharedWithMe).toHaveProperty('sharingStatus');
      expect(sharedWithMe).toHaveProperty('statusDate');
      expect(sharedWithMe).toHaveProperty('upstreamCnpId');
    }
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.campaign
        .retrieveSharingStatus({
          campaignId: 'campaignId',
        })
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.campaign
        .retrieveSharingStatus(
          {
            campaignId: 'campaignId',
          },
          TEST_AUTH_KEY,
        )
        .then(responseFn);
    });
  });
});
