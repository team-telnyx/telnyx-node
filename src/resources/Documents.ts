import TelnyxResource from '../TelnyxResource';
import * as utils from '../utils';
const telnyxMethod = TelnyxResource.method;

import {ResponsePayload, TelnyxObject} from '../Types';

function transformResponseData(
  response: ResponsePayload,
  telnyx: TelnyxObject,
) {
  return utils.addResourceToResponseData(response, telnyx, 'documents', {});
}

export const Documents = TelnyxResource.extend({
  path: 'documents',
  list: telnyxMethod({
    method: 'GET',
    transformResponseData: transformResponseData,
  }),
  update: telnyxMethod({
    method: 'PATCH',
    path: '/{id}',
    urlParams: ['id'],
    transformResponseData: transformResponseData,
  }),
  del: telnyxMethod({
    method: 'DELETE',
    path: '{id}',
    urlParams: ['id'],
    transformResponseData: transformResponseData,
  }),
  upload: telnyxMethod({
    method: 'POST',
    transformResponseData: transformResponseData,
  }),
  retrieveDocumentId: telnyxMethod({
    method: 'GET',
    path: '/{id}',
    urlParams: ['id'],

    transformResponseData: transformResponseData,
  }),
  retrieveDownloadDocument: telnyxMethod({
    method: 'GET',
    path: '/{id}/download',
    urlParams: ['id'],
    headers: {
      'Content-Type': '*',
    },

    transformResponseData: transformResponseData,
  }),
});
