import TelnyxResource from '../TelnyxResource';
const telnyxMethod = TelnyxResource.method;

export const MessagingUrlDomains = TelnyxResource.extend({
  path: 'messaging/url_domains',
  includeBasic: ['list', 'retrieve'],

  ListMessagingUrlDomains: telnyxMethod({
    method: 'GET',
    path: '/messaging/url_domains',
  }),
});
