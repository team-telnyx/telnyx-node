import TelnyxResource from '../TelnyxResource';
const telnyxMethod = TelnyxResource.method;

export const NumberOrderDocuments = TelnyxResource.extend({
  path: 'number_order_documents',
  includeBasic: ['list', 'retrieve', 'update'],

  upload: telnyxMethod({
    method: 'POST',
    methodType: 'create',
  }),
});
