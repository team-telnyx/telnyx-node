import TelnyxResource from '../TelnyxResource';

export const DocumentLinks = TelnyxResource.extend({
  path: '/document_links',
  includeBasic: ['list'],
});
