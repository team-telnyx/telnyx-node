import Telnyx from 'telnyx';
import TelnyxResource from '../TelnyxResource';
import {ResponsePayload, TelnyxObject} from '../Types';
import * as utils from '../utils';

const telnyxMethod = TelnyxResource.method;

const MESSAGING_PROFILES_COMMANDS = ['phone_numbers', 'short_codes'];

function getSpec(messagingProfileId?: string) {
  return function (methodName: string) {
    return {
      method: 'GET',
      path: `/{messagingProfileId}/${methodName}`,
      urlParams: ['messagingProfileId'],
      paramsValues: [messagingProfileId as string],
      paramsNames: ['messagingProfileId'],
      methodType: 'list',
    };
  };
}

const transformResponseData = (
  response: ResponsePayload<Telnyx.MessagingProfilesCreateResponse>,
  telnyx: TelnyxObject,
) => {
  const methods = utils.createNestedMethods(
    telnyxMethod,
    MESSAGING_PROFILES_COMMANDS,
    getSpec(response.data.id as string),
  );

  methods.del = telnyxMethod({
    method: 'DELETE',
    path: '/{messagingProfileId}',
    urlParams: ['messagingProfileId'],
    paramsValues: [response.data.id as string],
    paramsNames: ['messagingProfileId'],
  });

  methods.listAutorespConfigs = telnyxMethod({
    method: 'GET',
    path: '/{profileId}/autoresp_configs',
    urlParams: ['profileId'],
    paramsValues: [response.data.id as string],
    paramsNames: ['profileId'],
    methodType: 'list',
  });

  methods.createAutorespConfig = telnyxMethod({
    method: 'POST',
    path: '/{profileId}/autoresp_configs',
    urlParams: ['profileId'],
    paramsValues: [response.data.id as string],
    paramsNames: ['profileId'],
    methodType: 'create',
  });

  methods.delAutorespConfig = telnyxMethod({
    method: 'DELETE',
    path: '/{profileId}/autoresp_configs/{autorespCfgId}',
    paramsValues: [response.data.id as string],
    urlParams: ['profileId', 'autorespCfgId'],
    paramsNames: ['profileId', 'autorespCfgId'],
  });

  methods.retrieveAutorespConfig = telnyxMethod({
    method: 'GET',
    path: '/{profileId}/autoresp_configs/{autorespCfgId}',
    paramsValues: [response.data.id as string],
    urlParams: ['profileId', 'autorespCfgId'],
    paramsNames: ['profileId', 'autorespCfgId'],
    methodType: 'retrieve',
  });

  methods.updateAutorespConfig = telnyxMethod({
    method: 'PUT',
    path: '/{profileId}/autoresp_configs/{autorespCfgId}',
    paramsValues: [response.data.id as string],
    urlParams: ['profileId', 'autorespCfgId'],
    paramsNames: ['profileId', 'autorespCfgId'],
  });

  methods.retrieveMetrics = telnyxMethod({
    method: 'GET',
    path: '/{messagingProfileId}/metrics',
    urlParams: ['messagingProfileId'],
    paramsValues: [response.data.id as string],
    paramsNames: ['messagingProfileId'],
    methodType: 'retrieve',
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

  listShortCodes: telnyxMethod({
    method: 'GET',
    path: '/{messagingProfileId}/short_codes',
    urlParams: ['messagingProfileId'],
    methodType: 'list',
  }),

  listAutorespConfigs: telnyxMethod({
    method: 'GET',
    path: '/{profileId}/autoresp_configs',
    urlParams: ['profileId'],
    paramsNames: ['profileId'],
    methodType: 'list',
  }),

  createAutorespConfig: telnyxMethod({
    method: 'POST',
    path: '/{profileId}/autoresp_configs',
    urlParams: ['profileId'],
    paramsNames: ['profileId'],
    methodType: 'create',
  }),

  delAutorespConfig: telnyxMethod({
    method: 'DELETE',
    path: '/{profileId}/autoresp_configs/{autorespCfgId}',
    urlParams: ['profileId', 'autorespCfgId'],
    paramsNames: ['profileId', 'autorespCfgId'],
  }),

  retrieveAutorespConfig: telnyxMethod({
    method: 'GET',
    path: '/{profileId}/autoresp_configs/{autorespCfgId}',
    urlParams: ['profileId', 'autorespCfgId'],
    paramsNames: ['profileId', 'autorespCfgId'],
    methodType: 'retrieve',
  }),

  updateAutorespConfig: telnyxMethod({
    method: 'PUT',
    path: '/{profileId}/autoresp_configs/{autorespCfgId}',
    urlParams: ['profileId', 'autorespCfgId'],
    paramsNames: ['profileId', 'autorespCfgId'],
  }),

  retrieveMetrics: telnyxMethod({
    method: 'GET',
    path: '/{id}/metrics',
    urlParams: ['id'],
    methodType: 'retrieve',
  }),
});
