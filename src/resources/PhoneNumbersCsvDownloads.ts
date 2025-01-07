import TelnyxResource from '../TelnyxResource.js';

export const PhoneNumbersCsvDownloads = TelnyxResource.extend({
  path: '/phone_numbers/csv_downloads',
  includeBasic: ['list', 'create', 'retrieve'],
});
