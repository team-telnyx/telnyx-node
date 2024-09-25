import telnyx from 'telnyx';
import TelnyxResource from '../TelnyxResource';
import {ResponsePayload, TelnyxObject} from '../Types';
import * as utils from '../utils';

const telnyxMethod = TelnyxResource.method;

const ACTIONS = [
  'phone_numbers',
  'alphanumeric_sender_ids',
  'short_codes',
  'metrics',
];

function getSpec(messagingProfileId: string) {
  return function (methodName: string) {
    return {
      method: 'GET',
      path: `/{messagingProfileId}/${methodName}`,
      urlParams: ['messagingProfileId'],
      paramsValues: [messagingProfileId],
      paramsNames: ['id'],
      methodType: 'list',
    };
  };
}

const transformResponseData = (
  response: ResponsePayload<telnyx.MessagingProfilesCreateResponse>,
  telnyx: TelnyxObject,
) => {
  const methods = utils.createNestedMethods(
    telnyxMethod,
    ACTIONS,
    getSpec(response.data.id as string),
  );

  methods.del = telnyxMethod({
    method: 'DELETE',
    path: '/{messagingProfileId}',
    urlParams: ['messagingProfileId'],
    paramsValues: [response.data.id as string],
    paramsNames: ['id'],
  });

  return utils.addResourceToResponseData(
    response,
    telnyx,
    'messagingProfiles',
    methods,
  );
};

export const MessagingProfiles = TelnyxResource.extend({
  path: 'messaging_profiles',
  includeBasic: ['list', 'del', 'update'],

  create: telnyxMethod({
    method: 'POST',
    transformResponseData: transformResponseData,
  }),

  retrieve: telnyxMethod({
    method: 'GET',
    path: '/{id}',
    urlParams: ['id'],

    transformResponseData: transformResponseData,
  }),

  listPhoneNumbers: telnyxMethod({
    method: 'GET',
    path: '/{messagingProfileId}/phone_numbers',
    urlParams: ['messagingProfileId'],
    methodType: 'list',
  }),

  phoneNumbers: telnyxMethod({
    method: 'GET',
    path: '/{messagingProfileId}/phone_numbers',
    urlParams: ['messagingProfileId'],
  }),

  listShortCodes: telnyxMethod({
    method: 'GET',
    path: '/{messagingProfileId}/short_codes',
    urlParams: ['messagingProfileId'],
    methodType: 'list',
  }),

  shortCodes: telnyxMethod({
    method: 'GET',
    path: '/{messagingProfileId}/short_codes',
    urlParams: ['messagingProfileId'],
  }),

  listSenderIds: telnyxMethod({
    method: 'GET',
    path: '/{messagingProfileId}/alphanumeric_sender_ids',
    urlParams: ['messagingProfileId'],
    methodType: 'list',
  }),

  senderIds: telnyxMethod({
    method: 'GET',
    path: '/{messagingProfileId}/alphanumeric_sender_ids',
    urlParams: ['messagingProfileId'],
  }),

  retrieveMetrics: telnyxMethod({
    method: 'GET',
    path: '/{messagingProfileId}/metrics',
    urlParams: ['messagingProfileId'],
    methodType: 'retrieve',
  }),
});
