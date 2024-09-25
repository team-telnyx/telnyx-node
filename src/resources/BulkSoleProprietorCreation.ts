import TelnyxResource from '../TelnyxResource';
const telnyxMethod = TelnyxResource.method;

export const BulkSoleProprietorCreation = TelnyxResource.extend({
  path: 'bulk_sole_proprietor_creation',
  includeBasic: ['list', 'retrieve'],

  GetBulkCreationTaskStatus: telnyxMethod({
    method: 'GET',
    path: '/bulkCreation/{taskId}',
    urlParams: ['taskId'],
  }),
  GetAllTasks: telnyxMethod({
    method: 'GET',
    path: '/bulkCreation',
  }),
  GetTaskDetailedStatus: telnyxMethod({
    method: 'GET',
    path: '/bulkCreation/{taskId}/detailedStatus',
    urlParams: ['taskId'],
  }),
});
