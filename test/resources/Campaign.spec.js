'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();

describe('Campaign', function () {
  describe('list', function () {
    function responseFn(response) {
      expect(response).to.have.property('page');
      expect(response).to.have.property('records');
      expect(response).to.have.property('totalRecords');
    }

    it('Sends the correct request', function () {
      return telnyx.campaign.list({brandId: 'string'}).then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.campaign
        .list({brandId: 'string'}, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
  describe('acceptShareCampaign', function () {
    function responseFn(response) {
      expect(response).to.have.property('detail');
      for (const detail of response.detail) {
        expect(detail).to.have.property('loc');
        expect(detail).to.have.property('msg');
        expect(detail).to.have.property('type');
      }
    }

    it('Sends the correct request', function () {
      return telnyx.campaign
        .acceptShareCampaign({campaignId: '1'})
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.campaign
        .acceptShareCampaign({brandId: 'string'}, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
  describe('getCampaignCost', function () {
    function responseFn(response) {
      expect(response).to.have.property('campaignUsecase');
      expect(response).to.have.property('description');
      expect(response).to.have.property('monthlyCost');
      expect(response).to.have.property('upFrontCost');
    }

    it('Sends the correct request', function () {
      return telnyx.campaign.getCampaignCost({usecase: '1'}).then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.campaign
        .getCampaignCost({usecase: 'string'}, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
  describe('Get My Campaign', function () {
    function responseFn(response) {
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
    }
    it('Sends the correct request', function () {
      return telnyx.campaign
        .retrieveCampaignId({
          campaignId: 'campaignId',
        })
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.campaign
        .retrieveCampaignId(
          {
            campaignId: 'campaignId',
          },
          TEST_AUTH_KEY
        )
        .then(responseFn);
    });
  });
  describe('Get Campaign MNO Metadata', function () {
    function responseFn(response) {
      expect(response.lastResponse.statusCode).to.equal(200);
    }
    it('Sends the correct request', function () {
      return telnyx.campaign
        .retrieveMnoMetadata({
          campaignId: 'campaignId',
        })
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.campaign
        .retrieveMnoMetadata(
          {
            campaignId: 'campaignId',
          },
          TEST_AUTH_KEY
        )
        .then(responseFn);
    });
  });
  describe('Get Campaign Operation Status', function () {
    function responseFn(response) {
      expect(response.lastResponse.statusCode).to.equal(200);
    }
    it('Sends the correct request', function () {
      return telnyx.campaign
        .retrieveOperationStatus({
          campaignId: 'campaignId',
        })
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.campaign
        .retrieveOperationStatus(
          {
            campaignId: 'campaignId',
          },
          TEST_AUTH_KEY
        )
        .then(responseFn);
    });
  });
  describe('retrieveOsrCampaignAttributes', function () {
    function responseFn(response) {
      expect(response.lastResponse.statusCode).to.equal(200);
    }
    it('Sends the correct request', function () {
      return telnyx.campaign
        .retrieveOsrCampaignAttributes({
          campaignId: 'campaignId',
        })
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.campaign
        .retrieveOsrCampaignAttributes(
          {
            campaignId: 'campaignId',
          },
          TEST_AUTH_KEY
        )
        .then(responseFn);
    });
  });
  describe('deactivateCampaignId', function () {
    function responseFn(response) {
      expect(response).to.have.property('message');
      expect(response).to.have.property('record_type');
      expect(response).to.have.property('time');
    }
    it('Sends the correct request', function () {
      return telnyx.campaign
        .deactivateCampaignId({
          campaignId: 'campaignId',
        })
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.campaign
        .deactivateCampaignId(
          {
            campaignId: 'campaignId',
          },
          TEST_AUTH_KEY
        )
        .then(responseFn);
    });
  });
  describe('retrieveSharingStatus', function () {
    function responseFn(response) {
      expect(response).to.have.property('sharedByMe');
      const sharedByMe = response.sharedByMe;
      expect(sharedByMe).to.have.property('downstreamCnpId');
      expect(sharedByMe).to.have.property('sharedDate');
      expect(sharedByMe).to.have.property('sharingStatus');
      expect(sharedByMe).to.have.property('statusDate');
      expect(sharedByMe).to.have.property('upstreamCnpId');
      expect(response).to.have.property('sharedWithMe');
      const sharedWithMe = response.sharedWithMe;
      expect(sharedWithMe).to.have.property('downstreamCnpId');
      expect(sharedWithMe).to.have.property('sharedDate');
      expect(sharedWithMe).to.have.property('sharingStatus');
      expect(sharedWithMe).to.have.property('statusDate');
      expect(sharedWithMe).to.have.property('upstreamCnpId');
    }
    it('Sends the correct request', function () {
      return telnyx.campaign
        .retrieveSharingStatus({
          campaignId: 'campaignId',
        })
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.campaign
        .retrieveSharingStatus(
          {
            campaignId: 'campaignId',
          },
          TEST_AUTH_KEY
        )
        .then(responseFn);
    });
  });
});
