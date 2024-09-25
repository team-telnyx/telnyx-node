import TelnyxResource from '../TelnyxResource';

export const MessagingHostedNumbers = TelnyxResource.extend({
  path: '../id/actions/file_upload',
  includeBasic: ['retrieve'],
});
