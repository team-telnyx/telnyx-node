// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MessageTemplatesAPI from './message-templates';
import {
  MessageTemplateCreateParams,
  MessageTemplateCreateResponse,
  MessageTemplateListParams,
  MessageTemplateRetrieveResponse,
  MessageTemplateUpdateParams,
  MessageTemplateUpdateResponse,
  MessageTemplates,
} from './message-templates';
import * as BusinessAccountsAPI from './business-accounts/business-accounts';
import {
  BusinessAccountListParams,
  BusinessAccountListResponse,
  BusinessAccountListResponsesDefaultFlatPagination,
  BusinessAccountRetrieveResponse,
  BusinessAccounts,
} from './business-accounts/business-accounts';
import * as PhoneNumbersAPI from './phone-numbers/phone-numbers';
import {
  PhoneNumberListParams,
  PhoneNumberListResponse,
  PhoneNumberListResponsesDefaultFlatPagination,
  PhoneNumberResendVerificationParams,
  PhoneNumberVerifyParams,
  PhoneNumbers,
} from './phone-numbers/phone-numbers';

export class Whatsapp extends APIResource {
  businessAccounts: BusinessAccountsAPI.BusinessAccounts = new BusinessAccountsAPI.BusinessAccounts(
    this._client,
  );
  messageTemplates: MessageTemplatesAPI.MessageTemplates = new MessageTemplatesAPI.MessageTemplates(
    this._client,
  );
  phoneNumbers: PhoneNumbersAPI.PhoneNumbers = new PhoneNumbersAPI.PhoneNumbers(this._client);
}

Whatsapp.BusinessAccounts = BusinessAccounts;
Whatsapp.MessageTemplates = MessageTemplates;
Whatsapp.PhoneNumbers = PhoneNumbers;

export declare namespace Whatsapp {
  export {
    BusinessAccounts as BusinessAccounts,
    type BusinessAccountRetrieveResponse as BusinessAccountRetrieveResponse,
    type BusinessAccountListResponse as BusinessAccountListResponse,
    type BusinessAccountListResponsesDefaultFlatPagination as BusinessAccountListResponsesDefaultFlatPagination,
    type BusinessAccountListParams as BusinessAccountListParams,
  };

  export {
    MessageTemplates as MessageTemplates,
    type MessageTemplateCreateResponse as MessageTemplateCreateResponse,
    type MessageTemplateRetrieveResponse as MessageTemplateRetrieveResponse,
    type MessageTemplateUpdateResponse as MessageTemplateUpdateResponse,
    type MessageTemplateCreateParams as MessageTemplateCreateParams,
    type MessageTemplateUpdateParams as MessageTemplateUpdateParams,
    type MessageTemplateListParams as MessageTemplateListParams,
  };

  export {
    PhoneNumbers as PhoneNumbers,
    type PhoneNumberListResponse as PhoneNumberListResponse,
    type PhoneNumberListResponsesDefaultFlatPagination as PhoneNumberListResponsesDefaultFlatPagination,
    type PhoneNumberListParams as PhoneNumberListParams,
    type PhoneNumberResendVerificationParams as PhoneNumberResendVerificationParams,
    type PhoneNumberVerifyParams as PhoneNumberVerifyParams,
  };
}
