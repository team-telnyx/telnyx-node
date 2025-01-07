import TelnyxResource from '../TelnyxResource.js';

export const AiChatCompletions = TelnyxResource.extend({
  path: 'ai/chat/completions',
  includeBasic: ['create'],
});
