import TelnyxResource from '../TelnyxResource';
const telnyxMethod = TelnyxResource.method;

export const BulkCredentials = TelnyxResource.extend({
  path: 'bulk_credentials',
  includeBasic: ['create', 'delete'],

  BulkCredentialAction: telnyxMethod({
    method: 'POST',
    path: '/actions/{action}/telephony_credentials',
    urlParams: ['action'],
  }),
  DeleteTelephonyCredentials: telnyxMethod({
    method: 'DELETE',
    path: '/actions/bulk/telephony_credentials',
  }),
});
