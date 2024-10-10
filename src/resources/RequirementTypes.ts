import TelnyxResource from '../TelnyxResource';
const telnyxMethod = TelnyxResource.method;

export const RequirementTypes = TelnyxResource.extend({
  path: 'requirement_types',
  includeBasic: ['list', 'retrieve'],

  RetrieveRequirementType: telnyxMethod({
    method: 'GET',
    path: '/requirement_types/{id}',
  }),
  ListRequirementTypes: telnyxMethod({
    method: 'GET',
    path: '/requirement_types',
  }),
});
