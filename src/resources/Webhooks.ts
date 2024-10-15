import TelnyxResource from '../TelnyxResource';

export const Webhooks = TelnyxResource.extend({
  path: 'webhook_deliveries',
  includeBasic: ['list', 'retrieve'],
});
