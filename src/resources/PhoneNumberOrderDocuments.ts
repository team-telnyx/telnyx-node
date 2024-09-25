import TelnyxResource from '../TelnyxResource';
const telnyxMethod = TelnyxResource.method;

export const PhoneNumberOrderDocuments = TelnyxResource.extend({
  path: 'phone_number_order_documents',
  includeBasic: ['list', 'retrieve'],

  ListNumberOrderDocuments: telnyxMethod({
    method: 'GET',
    path: '/number_order_documents',
  }),
  RetrieveNumberOrderDocument: telnyxMethod({
    method: 'GET',
    path: '/number_order_documents/{number_order_document_id}',
    urlParams: ['number_order_document_id'],
  }),
});
