import TelnyxResource from '../TelnyxResource';
const telnyxMethod = TelnyxResource.method;

export const MediaStorageApi = TelnyxResource.extend({
  path: 'media_storage_api',
  includeBasic: ['delete', 'list', 'retrieve'],

  DeleteMediaStorage: telnyxMethod({
    method: 'DELETE',
    path: '/media/{media/name}',
  }),
  DownloadMedia: telnyxMethod({
    method: 'GET',
    path: '/media/{media_name}/download',
  }),
  ListMediaStorage: telnyxMethod({
    method: 'GET',
    path: '/media',
  }),
});
