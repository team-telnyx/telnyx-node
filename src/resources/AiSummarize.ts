import TelnyxResource from '../TelnyxResource';

export const AiSummarize = TelnyxResource.extend({
  path: 'ai/summarize',
  includeBasic: ['create'],
});
