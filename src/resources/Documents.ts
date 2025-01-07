import TelnyxResource from '../TelnyxResource.js';

const telnyxMethod = TelnyxResource.method;

export const Documents = TelnyxResource.extend({
  path: 'documents',
  includeBasic: ['list', 'update', 'del', 'create', 'retrieve'],

  upload: telnyxMethod({
    method: 'POST',
  }),

  download: telnyxMethod({
    method: 'GET',
    path: '/{id}/download',
    urlParams: ['id'],
    headers: {
      'Content-Type': '*',
    },
  }),
});
