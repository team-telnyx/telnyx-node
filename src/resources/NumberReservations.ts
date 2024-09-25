import TelnyxResource from '../TelnyxResource';
import * as utils from '../utils';
const telnyxMethod = TelnyxResource.method;

export const NumberReservations = TelnyxResource.extend({
  path: 'number_reservations',
  includeBasic: ['list', 'retrieve'],

  create: telnyxMethod({
    method: 'POST',

    transformResponseData: function (response, telnyx) {
      return utils.addResourceToResponseData(
        response,
        telnyx,
        'numberReservations',
        {
          extend: telnyxMethod({
            method: 'POST',
            path: '/{numberReservationId}/actions/extend',
            urlParams: ['numberReservationId'],
            paramsValues: [response.data.id as string],
            paramsNames: ['id'],
            methodType: 'create',
          }),
        },
      );
    },
  }),
});
