import TelnyxResource from '../TelnyxResource';
const telnyxMethod = TelnyxResource.method;

export const DetailRecords = TelnyxResource.extend({
  path: 'detail_records',

  search: telnyxMethod({
    method: 'GET',
    methodType: 'list',
  }),
});
