import TelnyxResource from '../TelnyxResource';

export const MessagingHostedNumbers = TelnyxResource.extend({
  path: 'messaging_hosted_numbers',
  includeBasic: ['del'],
});
