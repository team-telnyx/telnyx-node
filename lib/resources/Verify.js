'use strict';

const TelnyxResource = require('../TelnyxResource');
const telnyxMethod = TelnyxResource.method;

module.exports = TelnyxResource.extend({
  path: 'verify',
  includeBasic: ['list','retrieve','create','delete'],

  RetrieveVerification: telnyxMethod({
    method: 'GET',
    path: '/verifications/{verification/id}',
    urlParams: ['verification_id'],
  }),
  CreateFlashcallVerification: telnyxMethod({
    method: 'POST',
    path: '/verifications/flashcall',
  }),
  VerifyVerificationCode: telnyxMethod({
    method: 'POST',
    path: '/verifications/by_phone_number/{phone/number}/actions/verify',
    urlParams: ['phone_number'],
  }),
  CreateVerificationSms: telnyxMethod({
    method: 'POST',
    path: '/verifications/sms',
  }),
  CreateVerificationPsd2: telnyxMethod({
    method: 'POST',
    path: '/verifications/psd2',
  }),
  ListVerifications: telnyxMethod({
    method: 'GET',
    path: '/verifications/by_phone_number/{phone/number}',
    urlParams: ['phone_number'],
  }),
  ListProfiles: telnyxMethod({
    method: 'GET',
    path: '/verify_profiles',
  }),
  CreateVerificationWhatsapp: telnyxMethod({
    method: 'POST',
    path: '/verifications/whatsapp',
  }),
  DeleteProfile: telnyxMethod({
    method: 'DELETE',
    path: '/verify_profiles/{verify/profile/id}',
    urlParams: ['verify_profile_id'],
  }),
  CreateVerificationCall: telnyxMethod({
    method: 'POST',
    path: '/verifications/call',
  }),

});
