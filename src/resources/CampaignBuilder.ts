import TelnyxResource from '../TelnyxResource';
import * as utils from '../utils';
const telnyxMethod = TelnyxResource.method;

import {ResponsePayload, TelnyxObject} from '../Types';

function transformResponseData(
  response: ResponsePayload,
  telnyx: TelnyxObject,
) {
  return utils.addResourceToResponseData(response, telnyx, '/campaignBuilder', {
    del: telnyxMethod({
      method: 'DELETE',
      path: '/campaignBuilder',
      urlParams: ['campaignBuilder'],
      paramsValues: [response.data.id as string],
      paramsNames: ['id'],
    }),

    update: telnyxMethod({
      method: 'PATCH',
      path: '/campaignBuilder',
      urlParams: ['campaignBuilder'],
      paramsValues: [response.data.id as string],
      paramsNames: ['id'],
    }),
  });
}

export const CampaignBuilder = TelnyxResource.extend({
  path: '/campaignBuilder',
  basePath: '/10dlc/',
  create: telnyxMethod({
    method: 'POST',
    transformResponseData: transformResponseData,
  }),
  retrieveQualifyByUsecase: telnyxMethod({
    method: 'GET',
    path: '/brand/{brandId}/usecase/{usecase}',
    urlParams: ['brandId', 'usecase'],
    transformResponseData: transformResponseData,
  }),
});
