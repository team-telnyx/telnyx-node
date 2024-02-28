'use strict';

const TelnyxResource = require('../TelnyxResource');
const telnyxMethod = TelnyxResource.method;

module.exports = TelnyxResource.extend({
  path: 'external_connections',
  includeBasic: ['list','retrieve','create','delete'],

  GetExternalConnectionUploadsStatus: telnyxMethod({
    method: 'GET',
    path: '/external_connections/{id}/uploads/status',
  }),
  ListExternalConnectionReleases: telnyxMethod({
    method: 'GET',
    path: '/external_connections/{id}/releases',
  }),
  RetryUpload: telnyxMethod({
    method: 'POST',
    path: '/external_connections/{id}/uploads/{ticketIid}/retry',
  }),
  DeleteExternalConnection: telnyxMethod({
    method: 'DELETE',
    path: '/external_connections/{id}',
  }),
  updateLocation: telnyxMethod({
    method: 'PATCH',
    path: '/v2/external_connections/{id}/locations/{location_id}',
    urlParams: ['id', 'location_id'],
  }),
  DeleteExternalConnectionLogMessage: telnyxMethod({
    method: 'DELETE',
    path: '/external_connections/log/messages/{id}',
  }),
  GetExternalConnectionCivicAddress: telnyxMethod({
    method: 'GET',
    path: '/external_connections/{id}/civic/addresses/{address_id}',
  }),
  ListExternalConnectionPhoneNumbers: telnyxMethod({
    method: 'GET',
    path: '/external_connections/{id}/phone/numbers',
  }),
  ListExternalConnections: telnyxMethod({
    method: 'GET',
    path: '/external_connections',
  }),
  GetExternalConnectionPhoneNumber: telnyxMethod({
    method: 'GET',
    path: '/external_connections/{id}/phone/numbers/{phone_number_id}',
  }),
  ListCivicAddresses: telnyxMethod({
    method: 'GET',
    path: '/external_connections/{id}/civic_addresses',
  }),
  ListExternalConnectionLogMessages: telnyxMethod({
    method: 'GET',
    path: '/external_connections/log/messages',
  }),
  GetExternalConnectionUpload: telnyxMethod({
    method: 'GET',
    path: '/external_connections/{id}/uploads/{ticket_id}',
  }),
  RefreshExternalConnectionUploads: telnyxMethod({
    method: 'POST',
    path: '/external_connections/{id}/uploads/refresh',
  }),
  GetExternalConnectionRelease: telnyxMethod({
    method: 'GET',
    path: '/external_connections/{id}/releases/{release_id}',
  }),
  ListExternalConnectionUploads: telnyxMethod({
    method: 'GET',
    path: '/external_connections/{id}/uploads',
  }),

});
