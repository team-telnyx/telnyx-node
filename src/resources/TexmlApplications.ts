import TelnyxResource from '../TelnyxResource';

export const TexmlApplications = TelnyxResource.extend({
  path: 'texml_applications',
  includeBasic: ['list', 'create', 'retrieve', 'del', 'update'],
});
