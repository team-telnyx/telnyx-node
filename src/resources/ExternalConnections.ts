import TelnyxResource from '../TelnyxResource';
const telnyxMethod = TelnyxResource.method;

export const ExternalConnections = TelnyxResource.extend({
  path: 'external_connections',
  includeBasic: ['list', 'retrieve', 'create', 'update', 'del'],

  listLogMessages: telnyxMethod({
    method: 'GET',
    path: '/log/messages',
  }),

  retrieveLogMessage: telnyxMethod({
    method: 'GET',
    path: '/log/messages/{id}',
    urlParams: ['id'],
  }),

  delLogMessage: telnyxMethod({
    method: 'DELETE',
    path: '/log/messages/{id}',
    urlParams: ['id'],
  }),

  listCivicAddresses: telnyxMethod({
    method: 'GET',
    path: '/{id}/civic_addresses',
    urlParams: ['id'],
  }),

  retrieveCivicAddress: telnyxMethod({
    method: 'GET',
    path: '/{id}/civic_addresses/{address_id}',
    urlParams: ['id', 'address_id'],
  }),

  listPhoneNumbers: telnyxMethod({
    method: 'GET',
    path: '/{id}/phone_numbers',
    urlParams: ['id'],
  }),

  retrievePhoneNumber: telnyxMethod({
    method: 'GET',
    path: '/{id}/phone_numbers/{phone_number_id}',
    urlParams: ['id', 'phone_number_id'],
  }),

  listReleases: telnyxMethod({
    method: 'GET',
    path: '/{id}/releases',
    urlParams: ['id'],
  }),

  retrieveRelease: telnyxMethod({
    method: 'GET',
    path: '/{id}/releases/{release_id}',
    urlParams: ['id', 'release_id'],
  }),

  listUploads: telnyxMethod({
    method: 'GET',
    path: '/{id}/uploads',
    urlParams: ['id'],
  }),

  retrieveUpload: telnyxMethod({
    method: 'GET',
    path: '/{id}/uploads/{ticket_id}',
    urlParams: ['id', 'ticket_id'],
  }),

  refreshUploads: telnyxMethod({
    method: 'POST',
    path: '/{id}/uploads/refresh',
    urlParams: ['id'],
  }),

  retrieveUploadsStatus: telnyxMethod({
    method: 'GET',
    path: '/{id}/uploads/status',
    urlParams: ['id'],
  }),

  retryUpload: telnyxMethod({
    method: 'POST',
    path: '/{id}/uploads/{ticket_id}/retry',
    urlParams: ['id', 'ticket_id'],
  }),
});
