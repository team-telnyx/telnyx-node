import TelnyxResource from '../TelnyxResource';
const telnyxMethod = TelnyxResource.method;

export const PhoneNumberCampaigns = TelnyxResource.extend({
  path: 'phone_number_campaigns',
  includeBasic: ['delete', 'list', 'retrieve'],

  DeletePhoneNumberCampaign: telnyxMethod({
    method: 'DELETE',
    path: '/phone_number_campaigns/{phoneNumber}',
    urlParams: ['phoneNumber'],
  }),
  GetAllPhoneNumberCampaigns: telnyxMethod({
    method: 'GET',
    path: '/phone_number_campaigns',
  }),
});
