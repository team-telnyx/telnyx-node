'use strict';

var TelnyxResource = require('../TelnyxResource');
var utils = require('../utils');
var telnyxMethod = TelnyxResource.method;

function transformResponseData(response, telnyx) {
  return utils.addResourceToResponseData(response, telnyx, '/campaign', {
    del: telnyxMethod({
      method: 'DELETE',
      path: '/campaign',
      urlParams: ['campaign'],
      paramsValues: [response.data.id],
      paramsNames: ['id'],
    }),

    update: telnyxMethod({
      method: 'PATCH',
      path: '/campaign',
      urlParams: ['campaign'],
      paramsValues: [response.data.id],
      paramsNames: ['id'],
    }),
  });
}

module.exports = TelnyxResource.extend({
  path: 'campaign',
  includeBasic: ['create', 'list'],

  acceptShareCampaign: telnyxMethod({
    method: 'POST',
    transformResponseData: transformResponseData,
    path: '/acceptSharing/{campaignId}',
  }),
  getCampaignCost: telnyxMethod({
    method: 'GET',
    transformResponseData: transformResponseData,
    path: '/usecase/cost',
  }),
  retrieveCampaignId: telnyxMethod({
    method: 'GET',
    path: '/{campaignId}',
    urlParams: ['campaignId'],

    transformResponseData: transformResponseData,
  }),
  updateCampaignId: telnyxMethod({
    method: 'PATCH',
    path: '/{campaignId}',
    urlParams: ['campaignId'],
    transformResponseData: transformResponseData,
  }),
  deactivateCampaignId: telnyxMethod({
    method: 'DELETE',
    path: '/{campaignId}',
    urlParams: ['campaignId'],
    transformResponseData: transformResponseData,
  }),
  retrieveMnoMetadata: telnyxMethod({
    method: 'GET',
    path: '/{campaignId}/mnoMetadata',
    urlParams: ['campaignId'],

    transformResponseData: transformResponseData,
  }),
  retrieveOperationStatus: telnyxMethod({
    method: 'GET',
    path: '/{campaignId}/operationStatus',
    urlParams: ['campaignId'],

    transformResponseData: transformResponseData,
  }),
  retrieveOsrCampaignAttributes: telnyxMethod({
    method: 'GET',
    path: '/{campaignId}/osr/attributes',
    urlParams: ['campaignId'],
  }),
  retrieveSharingStatus: telnyxMethod({
    method: 'GET',
    path: '/{campaignId}/sharing',
    urlParams: ['campaignId'],
  }),
});
