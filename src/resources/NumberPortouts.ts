import TelnyxResource from '../TelnyxResource';
import * as utils from '../utils';
const telnyxMethod = TelnyxResource.method;

import {ResponsePayload, TelnyxObject} from '../Types';

function transformResponseData(
  response: ResponsePayload,
  telnyx: TelnyxObject,
) {
  return utils.addResourceToResponseData(response, telnyx, 'numberPortouts', {
    del: telnyxMethod({
      method: 'DELETE',
      path: '/portouts',
      urlParams: ['portouts'],
      paramsValues: [response.data.id as string],
      paramsNames: ['id'],
    }),

    update: telnyxMethod({
      method: 'PATCH',
      path: '/portouts',
      urlParams: ['portouts'],
      paramsValues: [response.data.id as string],
      paramsNames: ['id'],
    }),
  });
}

export const NumberPortouts = TelnyxResource.extend({
  path: 'portouts',
  list: telnyxMethod({
    method: 'GET',
    transformResponseData: transformResponseData,
  }),
  retrieve: telnyxMethod({
    method: 'GET',
    path: '/{id}',
    urlParams: ['id'],

    transformResponseData: transformResponseData,
  }),
  retrieveComments: telnyxMethod({
    method: 'GET',
    path: '/{id}/comments',
    urlParams: ['id'],

    transformResponseData: transformResponseData,
  }),
  create: telnyxMethod({
    path: '/{id}/comments',
    urlParams: ['id'],
    method: 'POST',
    transformResponseData: transformResponseData,
  }),
  listSupportingDocuments: telnyxMethod({
    method: 'GET',
    path: '/{id}/supporting_documents',
    urlParams: ['id'],
    transformResponseData: transformResponseData,
  }),
  createListOfSupportingDocuments: telnyxMethod({
    method: 'POST',
    path: '/{id}/supporting_documents',
    urlParams: ['id'],
    transformResponseData: transformResponseData,
  }),
  updateStatus: telnyxMethod({
    method: 'PATCH',
    path: '/{id}/{status}',
    urlParams: ['id'],
    transformResponseData: transformResponseData,
  }),
});
