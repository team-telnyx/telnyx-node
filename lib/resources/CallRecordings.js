'use strict';

const TelnyxResource = require('../TelnyxResource');
const telnyxMethod = TelnyxResource.method;

module.exports = TelnyxResource.extend({
  path: 'recordings',
  includeBasic: ['list', 'retrieve', 'del'],

  GetRecordings: telnyxMethod({
    method: 'GET',
    path: '/recordings',
  }),
  DeleteRecording: telnyxMethod({
    method: 'DELETE',
    path: '/recordings/{recording/id}',
  }),
  DeleteRecordings: telnyxMethod({
    method: 'DELETE',
    path: '/recordings/actions/delete',
  }),
  DeleteCustomStorageCredentials: telnyxMethod({
    method: 'DELETE',
    path: '/custom/storage/credentials/{connection/id}',
  }),

});
