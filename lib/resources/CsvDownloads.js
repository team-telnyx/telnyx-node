'use strict';

const TelnyxResource = require('../TelnyxResource');
const telnyxMethod = TelnyxResource.method;

module.exports = TelnyxResource.extend({
  path: 'csv_downloads',
  includeBasic: ['list','retrieve'],

  GetCsvDownload: telnyxMethod({
    method: 'GET',
    path: '/phone_numbers_csv_downloads/{id}',
    urlParams: ['id'],
  }),
  ListCsvDownloads: telnyxMethod({
    method: 'GET',
    path: '/phone_numbers_csv_downloads',
  }),

});
