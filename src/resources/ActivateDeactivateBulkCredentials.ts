import TelnyxResource from '../TelnyxResource';
import {ResponsePayload, TelnyxObject} from '../Types';
import * as utils from '../utils';
const telnyxMethod = TelnyxResource.method;

function transformResponseData(
  response: ResponsePayload,
  telnyx: TelnyxObject,
) {
  return utils.addResourceToResponseData(response, telnyx, 'actions', {});
}

export const ActivateDeactivateBulkCredentials = TelnyxResource.extend({
  path: 'actions',

  create: telnyxMethod({
    method: 'POST',
    path: '/{action}/telephony_credentials',
    urlParams: ['action'],
    transformResponseData: transformResponseData,
  }),
});
