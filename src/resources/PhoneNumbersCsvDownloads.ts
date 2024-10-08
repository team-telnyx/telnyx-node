import TelnyxResource from '../TelnyxResource';

export const PhoneNumbersCsvDownloads = TelnyxResource.extend({
  path: '/phone_numbers/csv_downloads',
  includeBasic: ['list', 'create', 'retrieve'],
});
