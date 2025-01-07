import TelnyxResource from '../TelnyxResource.js';

export const AiModels = TelnyxResource.extend({
  path: 'ai/models',
  includeBasic: ['list'],
});
