import TelnyxResource from '../TelnyxResource';
const telnyxMethod = TelnyxResource.method;

export const Payment = TelnyxResource.extend({
  path: 'payment',

  getAutoRechargePrefs: telnyxMethod({
    method: 'GET',
    path: '/auto_recharge_prefs',
  }),

  updateAutoRechargePrefs: telnyxMethod({
    method: 'PATCH',
    path: '/auto_recharge_prefs',
  }),
});
