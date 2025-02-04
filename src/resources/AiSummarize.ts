import TelnyxResource from '../TelnyxResource.js';

export const AiSummarize = TelnyxResource.extend({
  path: 'ai/summarize',
  includeBasic: ['create'],
});
