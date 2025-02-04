import TelnyxResource from '../TelnyxResource.js';
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
