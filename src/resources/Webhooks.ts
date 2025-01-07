import TelnyxResource from '../TelnyxResource.js';

export const Webhooks = TelnyxResource.extend({
  path: 'webhook_deliveries',
  includeBasic: ['list', 'retrieve'],
});
