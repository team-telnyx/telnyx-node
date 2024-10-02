import TelnyxResource from '../TelnyxResource';

export const AiModels = TelnyxResource.extend({
  path: 'ai/models',
  includeBasic: ['list'],
});
