'use strict';

var TelnyxResource = require('../TelnyxResource');
var utils = require('../utils');
var telnyxMethod = TelnyxResource.method;

var VERIFICATION_COMMANDS = [
  'sms',
  'psd2',
  'call',
  'flashcall',
  'whatsapp'
];

module.exports = TelnyxResource.extend({
  path: 'verifications',

  nestedResources: {
    ByPhoneNumber: require('./VerificationsByPhoneNumber'),
  },

  create: TelnyxResource.method({
    method: 'POST',
  }),

  retrieve: TelnyxResource.method({
    method: 'GET',
    path: '/{verification_id}',
    urlParams: ['verification_id'],
  }),
});

function getSpec(callControlId) {
  return function(methodName) {
    return {
      method: 'POST',
      path: `/${methodName}`,
      methodType: 'create',
    }
  }
}

module.exports = require('../TelnyxResource').extend({
  path: 'verifications',

  create: telnyxMethod({ // trigger method
    method: 'POST',

    transformResponseData: function(response, telnyx) {
      return utils.addResourceToResponseData(
        response,
        telnyx,
        'verifications',
        utils.createNestedMethods(
          telnyxMethod,
          VERIFICATION_COMMANDS,
        )
      );
    },
  }),

  instanceMethods: utils.createNestedMethods(telnyxMethod, VERIFICATION_COMMANDS)
});
