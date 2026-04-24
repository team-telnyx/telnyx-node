// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as TemplatesAPI from './templates';
import { TemplateCreateParams, TemplateCreateResponse, TemplateListParams, Templates } from './templates';
import * as BusinessAccountsAPI from './business-accounts/business-accounts';
import { BusinessAccountListParams, BusinessAccountListResponse, BusinessAccountListResponsesDefaultFlatPagination, BusinessAccountRetrieveResponse, BusinessAccounts } from './business-accounts/business-accounts';
import * as PhoneNumbersAPI from './phone-numbers/phone-numbers';
import { PhoneNumberListParams, PhoneNumberListResponse, PhoneNumberListResponsesDefaultFlatPagination, PhoneNumberResendVerificationParams, PhoneNumberVerifyParams, PhoneNumbers } from './phone-numbers/phone-numbers';

export class Whatsapp extends APIResource {
  businessAccounts: BusinessAccountsAPI.BusinessAccounts = new BusinessAccountsAPI.BusinessAccounts(this._client);
  templates: TemplatesAPI.Templates = new TemplatesAPI.Templates(this._client);
  phoneNumbers: PhoneNumbersAPI.PhoneNumbers = new PhoneNumbersAPI.PhoneNumbers(this._client);
}

Whatsapp.BusinessAccounts = BusinessAccounts;
Whatsapp.Templates = Templates;
Whatsapp.PhoneNumbers = PhoneNumbers;

export declare namespace Whatsapp {
  export {
    BusinessAccounts as BusinessAccounts,
    type BusinessAccountRetrieveResponse as BusinessAccountRetrieveResponse,
    type BusinessAccountListResponse as BusinessAccountListResponse,
    type BusinessAccountListResponsesDefaultFlatPagination as BusinessAccountListResponsesDefaultFlatPagination,
    type BusinessAccountListParams as BusinessAccountListParams
  };

  export {
    Templates as Templates,
    type TemplateCreateResponse as TemplateCreateResponse,
    type TemplateCreateParams as TemplateCreateParams,
    type TemplateListParams as TemplateListParams
  };

  export {
    PhoneNumbers as PhoneNumbers,
    type PhoneNumberListResponse as PhoneNumberListResponse,
    type PhoneNumberListResponsesDefaultFlatPagination as PhoneNumberListResponsesDefaultFlatPagination,
    type PhoneNumberListParams as PhoneNumberListParams,
    type PhoneNumberResendVerificationParams as PhoneNumberResendVerificationParams,
    type PhoneNumberVerifyParams as PhoneNumberVerifyParams
  };
}
