import TelnyxResource from '../TelnyxResource.js';

export const MessagingHostedNumbers = TelnyxResource.extend({
  path: 'messaging_hosted_numbers',
  includeBasic: ['del'],
});
