import TelnyxResource from '../TelnyxResource';

export const AiChatCompletions = TelnyxResource.extend({
  path: 'ai/chat/completions',
  includeBasic: ['create'],
});
