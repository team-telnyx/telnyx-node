import TelnyxResource from '../TelnyxResource';
const telnyxMethod = TelnyxResource.method;

export const CallRecordings = TelnyxResource.extend({
  path: 'recordings',
  includeBasic: ['list'],

  retrieve: telnyxMethod({
    method: 'GET',
    path: '/{recording_id}',
    urlParams: ['recording_id'],
  }),

  del: telnyxMethod({
    method: 'DELETE',
    path: '/{recording_id}',
    urlParams: ['recording_id'],
  }),

  bulkDel: telnyxMethod({
    method: 'DELETE',
    path: '/recordings/actions/delete',
  }),
});
