import TelnyxResource from '../TelnyxResource';
const telnyxMethod = TelnyxResource.method;

export const Requirements = TelnyxResource.extend({
  path: 'requirements',
  includeBasic: ['list', 'retrieve'],

  ListRequirements: telnyxMethod({
    method: 'GET',
    path: '/requirements',
  }),
  RetrieveDocumentRequirements: telnyxMethod({
    method: 'GET',
    path: '/requirements/{id}',
  }),
});
