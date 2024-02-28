'use strict';

const TelnyxResource = require('../TelnyxResource');
const telnyxMethod = TelnyxResource.method;

module.exports = TelnyxResource.extend({
  path: 'recordings_commands',
  includeBasic: ['list','retrieve'],

  RetrieveRecording: telnyxMethod({
    method: 'GET',
    path: '/recordings/{id}',
    urlParams: ['id'],
  }),

});
