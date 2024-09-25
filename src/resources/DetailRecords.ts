import TelnyxResource from '../TelnyxResource';
const telnyxMethod = TelnyxResource.method;

export const DetailRecords = TelnyxResource.extend({
  path: 'detail_records',

  query: telnyxMethod({
    method: 'GET',
    methodType: 'list',
  }),
});
