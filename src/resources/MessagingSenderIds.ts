import TelnyxResource from '../TelnyxResource';

export const MessagingSenderIds = TelnyxResource.extend({
  path: 'alphanumeric_sender_ids', // THIS URL DOES NOT EXISTS ON DOCS
  includeBasic: ['list', 'retrieve', 'create', 'del'],
});
