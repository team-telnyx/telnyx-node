import TelnyxResource from '../TelnyxResource';
const telnyxMethod = TelnyxResource.method;

export const PhoneNumberBlocksBackgroundJobs = TelnyxResource.extend({
  path: 'phone_number_blocks_background_jobs',
  includeBasic: ['create', 'list', 'retrieve'],

  CreatePhoneNumberBlockDeletionJob: telnyxMethod({
    method: 'POST',
    path: 'phone_number_blocks_jobs/delete/phone_number_block',
  }),
  GetPhoneNumberBlocksJob: telnyxMethod({
    method: 'GET',
    path: 'phone_number_blocks_jobs{id}',
    urlParams: ['id'],
  }),
  ListPhoneNumberBlocksJobs: telnyxMethod({
    method: 'GET',
    path: '/phone_number_blocks_jobs',
  }),
});
