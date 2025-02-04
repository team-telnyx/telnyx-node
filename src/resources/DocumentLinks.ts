import TelnyxResource from '../TelnyxResource.js';

export const DocumentLinks = TelnyxResource.extend({
  path: '/document_links',
  includeBasic: ['list'],
});
