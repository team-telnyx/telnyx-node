'use strict';

var TelnyxResource = require('../TelnyxResource');
var utils = require('../utils');
var telnyxMethod = TelnyxResource.method;

function transformResponseData(response, telnyx) {
  return utils.addResourceToResponseData(response, telnyx, 'verifyProfiles', {


    retrieveVerifyProfileMessageTemplates: telnyxMethod({
      method: 'GET',
      path: '/verify_profiles/templates',
    }),
  });
}

module.exports = TelnyxResource.extend({
  path: 'sim_cards',
  includeBasic: ['update'],

  delete: telnyxMethod({
    method: 'DELETE',
    path: '/{verify_profile_id}',
    urlParams: ['verify_profile_id'],
    paramsNames: ['id'],

    transformResponseData: transformResponseData,
  }),

  save: telnyxMethod({
    method: 'PATCH',
    path: '/{verify_profile_id}',
    urlParams: ['verify_profile_id'],
    paramsNames: ['id'],

    transformResponseData: transformResponseData,
  }),

  retrieve: telnyxMethod({
    method: 'GET',
    path: '/{verify_profile_id}',
    urlParams: ['verify_profile_id'],
    paramsNames: ['id'],

    transformResponseData: transformResponseData,
  }),

  list: telnyxMethod({
    method: 'GET',
    methodType: 'list',

    transformResponseData: transformResponseData,
  }),

  create: telnyxMethod({
    method: 'POST',

    transformResponseData: transformResponseData,
  }),
});
