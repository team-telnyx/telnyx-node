import TelnyxResource from '../TelnyxResource.js';
const telnyxMethod = TelnyxResource.method;

export const SharedCampaigns = TelnyxResource.extend({
  path: 'shared_campaigns',
  includeBasic: ['list', 'retrieve'],

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
