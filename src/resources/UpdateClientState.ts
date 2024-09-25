import TelnyxResource from '../TelnyxResource';
import * as utils from '../utils';
const telnyxMethod = TelnyxResource.method;

import {ResponsePayload, TelnyxObject} from '../Types';

function transformResponseData(
  response: ResponsePayload,
  telnyx: TelnyxObject,
) {
  return utils.addResourceToResponseData(
    response,
    telnyx,
    'updateClientState',
    {},
  );
}
export const UpdateClientState = TelnyxResource.extend({
  path: 'calls/{call_control_id}/actions/client_state_update',
  update: telnyxMethod({
    urlParams: ['call_control_id'],
    method: 'PUT',
    transformResponseData: transformResponseData,
  }),
});
