import TelnyxResource from '../TelnyxResource';

export const RegisterCall = TelnyxResource.extend({
  path: '/calls/register',
  includeBasic: ['create'],
});
