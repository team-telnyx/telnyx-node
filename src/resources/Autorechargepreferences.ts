import TelnyxResource from '../TelnyxResource';
const telnyxMethod = TelnyxResource.method;

export const Autorechargepreferences = TelnyxResource.extend({
  path: 'autorechargepreferences',
  includeBasic: ['list', 'retrieve'],

  GetAutoRechargePrefs: telnyxMethod({
    method: 'GET',
    path: '/payment/auto/recharge/prefs',
  }),
});
