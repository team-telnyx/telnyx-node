'use strict';

const TelnyxResource = require('../TelnyxResource');
const telnyxMethod = TelnyxResource.method;

module.exports = TelnyxResource.extend({
  path: 'autorechargepreferences',
  includeBasic: ['list','retrieve'],

  GetAutoRechargePrefs: telnyxMethod({
    method: 'GET',
    path: '/payment/auto/recharge/prefs',
  }),

});
