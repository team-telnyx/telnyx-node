import TelnyxResource from '../TelnyxResource.js';
const telnyxMethod = TelnyxResource.method;

export const RecordingsCommands = TelnyxResource.extend({
  path: 'recordings_commands',
  includeBasic: ['list', 'retrieve'],

  RetrieveRecording: telnyxMethod({
    method: 'GET',
    path: '/recordings/{id}',
    urlParams: ['id'],
  }),
});
