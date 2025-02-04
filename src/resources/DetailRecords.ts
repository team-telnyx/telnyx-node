import TelnyxResource from '../TelnyxResource.js';
const telnyxMethod = TelnyxResource.method;

export const DetailRecords = TelnyxResource.extend({
  path: 'detail_records',

  search: telnyxMethod({
    method: 'GET',
    methodType: 'list',
  }),
});
