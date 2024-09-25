import TelnyxResource from '../TelnyxResource';

export const TeXMLApplication = TelnyxResource.extend({
  path: 'texml_applications',
  includeBasic: ['list', 'create', 'retrieve', 'del', 'update'],
});
