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
    'phoneNumbersInboundChannels',
    {
      update: telnyxMethod({
        method: 'PATCH',
        path: '',
        urlParams: ['channels'],
        paramsValues: [response.data.id as string],
        paramsNames: ['channels'],
      }),
    },
  );
}

export const PhoneNumbersInboundChannels = TelnyxResource.extend({
  path: 'phone_numbers/inbound_channels',

  retrieve: telnyxMethod({
    method: 'GET',
    path: '',
    urlParams: [],

    transformResponseData: transformResponseData,
  }),
});
