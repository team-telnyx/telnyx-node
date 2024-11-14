import TelnyxResource from '../TelnyxResource';
import * as utils from '../utils';
const telnyxMethod = TelnyxResource.method;

import {ResponsePayload, TelnyxObject} from '../Types';

function transformResponseData(
  response: ResponsePayload,
  telnyx: TelnyxObject,
) {
  return utils.addResourceToResponseData(response, telnyx, 'portingOrders', {
    del: telnyxMethod({
      method: 'DELETE',
      path: '/{portingOrderId}',
      urlParams: ['portingOrderId'],
      paramsValues: [response.data.id as string],
      paramsNames: ['portingOrderId'],
    }),

    update: telnyxMethod({
      method: 'PATCH',
      path: '/{portingOrderId}',
      urlParams: ['portingOrderId'],
      paramsValues: [response.data.id as string],
      paramsNames: ['portingOrderId'],
    }),

    activate: telnyxMethod({
      method: 'POST',
      path: '/{porting_order_id}/actions/activate',
      urlParams: ['porting_order_id'],
      paramsValues: [response.data.id as string],
      paramsNames: ['porting_order_id'],
      methodType: 'create',
    }),

    cancel: telnyxMethod({
      method: 'POST',
      path: '/{porting_order_id}/actions/activate',
      urlParams: ['porting_order_id'],
      paramsValues: [response.data.id as string],
      paramsNames: ['porting_order_id'],
      methodType: 'create',
    }),

    confirm: telnyxMethod({
      method: 'POST',
      path: '/{porting_order_id}/actions/activate',
      urlParams: ['porting_order_id'],
      paramsValues: [response.data.id as string],
      paramsNames: ['porting_order_id'],
      methodType: 'create',
    }),

    share: telnyxMethod({
      method: 'POST',
      path: '/{porting_order_id}/actions/activate',
      urlParams: ['porting_order_id'],
      paramsValues: [response.data.id as string],
      paramsNames: ['porting_order_id'],
      methodType: 'create',
    }),
  });
}

export const PortingOrders = TelnyxResource.extend({
  path: 'porting_orders',
  includeBasic: ['list', 'del', 'update'],

  create: telnyxMethod({
    method: 'POST',
    methodType: 'create',
  }),

  // include_phone_numbers query param
  retrieve: telnyxMethod({
    method: 'GET',
    path: '/{id}',
    urlParams: ['id'],

    transformResponseData: transformResponseData,
  }),

  listExceptionTypes: telnyxMethod({
    method: 'GET',
    path: '/exception_types',
    methodType: 'list',
  }),

  listPhoneNumberConfigurations: telnyxMethod({
    method: 'GET',
    path: '/phone_number_configurations',
    methodType: 'list',
    urlParams: ['id'],
  }),

  createPhoneNumberConfigurations: telnyxMethod({
    method: 'POST',
    path: '/phone_number_configurations',
    methodType: 'create',
  }),

  listActivationJobs: telnyxMethod({
    method: 'GET',
    path: '/{id}/activation_jobs',
    methodType: 'list',
    urlParams: ['id'],
  }),

  retrieveActivationJob: telnyxMethod({
    method: 'GET',
    path: '/{id}/activation_jobs/{activationJobId}',
    urlParams: ['id', 'activationJobId'],
    paramsNames: ['id', 'activationJobId'],
  }),

  listAllowedFocWindows: telnyxMethod({
    method: 'GET',
    path: '/{id}/allowed_foc_windows',
    methodType: 'list',
    urlParams: ['id'],
  }),

  listAdditionalDocuments: telnyxMethod({
    method: 'GET',
    path: '/{id}/additional_documents',
    methodType: 'list',
    urlParams: ['id'],
  }),

  createAdditionalDocuments: telnyxMethod({
    method: 'POST',
    path: '/{porting_order_id}/additional_documents',
    urlParams: ['porting_order_id'],
    paramsNames: ['porting_order_id'],
    methodType: 'create',
  }),

  delAdditionalDocuments: telnyxMethod({
    method: 'DELETE',
    path: '/{porting_order_id}/additional_documents/{additional_document_id}',
    urlParams: ['porting_order_id', 'additional_document_id'],
    paramsNames: ['porting_order_id', 'additional_document_id'],
  }),

  retrieveLoaTemplate: telnyxMethod({
    method: 'GET',
    path: '/{id}/loa_template',
    urlParams: ['id'],
    methodType: 'retrieve',
  }),

  activate: telnyxMethod({
    method: 'POST',
    path: '/{porting_order_id}/actions/activate',
    urlParams: ['porting_order_id'],
    paramsNames: ['porting_order_id'],
    methodType: 'create',
  }),

  cancel: telnyxMethod({
    method: 'POST',
    path: '/{porting_order_id}/actions/cancel',
    urlParams: ['porting_order_id'],
    paramsNames: ['porting_order_id'],
    methodType: 'create',
  }),

  confirm: telnyxMethod({
    method: 'POST',
    path: '/{porting_order_id}/actions/confirm',
    urlParams: ['porting_order_id'],
    paramsNames: ['porting_order_id'],
    methodType: 'create',
  }),

  share: telnyxMethod({
    method: 'POST',
    path: '/{porting_order_id}/actions/share',
    urlParams: ['porting_order_id'],
    paramsNames: ['porting_order_id'],
    methodType: 'create',
  }),

  createComment: telnyxMethod({
    method: 'POST',
    path: '/{porting_order_id}/comments',
    methodType: 'create',
    urlParams: ['porting_order_id'],
    paramsNames: ['porting_order_id'],
  }),

  listComments: telnyxMethod({
    method: 'GET',
    path: '/{id}/comments',
    methodType: 'list',
    urlParams: ['id'],
  }),

  listRequirements: telnyxMethod({
    method: 'GET',
    path: '/{id}/requirements',
    methodType: 'list',
    urlParams: ['id'],
  }),

  listVerificationCodes: telnyxMethod({
    method: 'GET',
    path: '/{id}/verification_codes',
    methodType: 'list',
    urlParams: ['id'],
  }),

  retrieveSubRequest: telnyxMethod({
    method: 'GET',
    path: '/{id}/sub_request',
    methodType: 'retrieve',
    urlParams: ['id'],
  }),

  sendVerificationCode: telnyxMethod({
    method: 'POST',
    path: '/{porting_order_id}/verification_codes/send',
    methodType: 'create',
    urlParams: ['porting_order_id'],
    paramsNames: ['porting_order_id'],
  }),

  verifyVerificationCode: telnyxMethod({
    method: 'POST',
    path: '/{porting_order_id}/verification_codes/verify',
    methodType: 'create',
    urlParams: ['porting_order_id'],
    paramsNames: ['porting_order_id'],
  }),

  listPhoneNumberBlocks: telnyxMethod({
    method: 'GET',
    path: '/{porting_order_id}/phone_number_blocks',
    methodType: 'list',
    urlParams: ['porting_order_id'],
  }),

  createPhoneNumberBlock: telnyxMethod({
    method: 'POST',
    path: '/{porting_order_id}/phone_number_blocks',
    methodType: 'create',
    urlParams: ['porting_order_id'],
    paramsNames: ['porting_order_id'],
  }),

  delPhoneNumberBlock: telnyxMethod({
    method: 'DELETE',
    path: '/{porting_order_id}/phone_number_blocks/{id}',
    urlParams: ['porting_order_id', 'id'],
    paramsNames: ['porting_order_id', 'id'],
  }),

  listPhoneNumberExtensions: telnyxMethod({
    method: 'GET',
    path: '/{porting_order_id}/phone_number_extensions',
    methodType: 'list',
    urlParams: ['porting_order_id'],
  }),

  createPhoneNumberExtension: telnyxMethod({
    method: 'POST',
    path: '/{porting_order_id}/phone_number_extensions',
    methodType: 'create',
    urlParams: ['porting_order_id'],
    paramsNames: ['porting_order_id'],
  }),

  delPhoneNumberExtension: telnyxMethod({
    method: 'DELETE',
    path: '/{porting_order_id}/phone_number_extensions/{id}',
    urlParams: ['porting_order_id', 'id'],
    paramsNames: ['porting_order_id', 'id'],
  }),
});
