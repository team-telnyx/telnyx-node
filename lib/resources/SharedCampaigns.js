'use strict';

const TelnyxResource = require('../TelnyxResource');
const telnyxMethod = TelnyxResource.method;

module.exports = TelnyxResource.extend({
  path: 'shared_campaigns',
  includeBasic: ['list','retrieve'],

  GetPartnerCampaignsSharedByUser: telnyxMethod({
    method: 'GET',
    path: '/partnerCampaign/sharedByMe',
  }),
  GetCampaignSharingStatus: telnyxMethod({
    method: 'GET',
    path: '/partnerCampaign/{campaignId}/sharing',
    urlParams: ['campaignId'],
  }),

});
