// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as TemplatesAPI from './templates';
import {
  TemplateCreateParams,
  TemplateCreateResponse,
  TemplateListParams,
  Templates,
  WhatsappTemplateBodyComponent,
  WhatsappTemplateButtonsComponent,
  WhatsappTemplateCarouselComponent,
  WhatsappTemplateFooterComponent,
  WhatsappTemplateHeaderComponent,
} from './templates';
import * as UserDataAPI from './user-data';
import {
  UserData,
  UserDataRetrieveResponse,
  UserDataUpdateParams,
  UserDataUpdateResponse,
  WhatsappUserData,
} from './user-data';
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
  PhoneNumberRetrieveConversationWindowParams,
  PhoneNumberRetrieveConversationWindowResponse,
  PhoneNumberVerifyParams,
  PhoneNumbers,
} from './phone-numbers/phone-numbers';

export class Whatsapp extends APIResource {
  businessAccounts: BusinessAccountsAPI.BusinessAccounts = new BusinessAccountsAPI.BusinessAccounts(
    this._client,
  );
  templates: TemplatesAPI.Templates = new TemplatesAPI.Templates(this._client);
  phoneNumbers: PhoneNumbersAPI.PhoneNumbers = new PhoneNumbersAPI.PhoneNumbers(this._client);
  userData: UserDataAPI.UserData = new UserDataAPI.UserData(this._client);
}

Whatsapp.BusinessAccounts = BusinessAccounts;
Whatsapp.Templates = Templates;
Whatsapp.PhoneNumbers = PhoneNumbers;
Whatsapp.UserData = UserData;

export declare namespace Whatsapp {
  export {
    BusinessAccounts as BusinessAccounts,
    type BusinessAccountRetrieveResponse as BusinessAccountRetrieveResponse,
    type BusinessAccountListResponse as BusinessAccountListResponse,
    type BusinessAccountListResponsesDefaultFlatPagination as BusinessAccountListResponsesDefaultFlatPagination,
    type BusinessAccountListParams as BusinessAccountListParams,
  };

  export {
    Templates as Templates,
    type WhatsappTemplateBodyComponent as WhatsappTemplateBodyComponent,
    type WhatsappTemplateButtonsComponent as WhatsappTemplateButtonsComponent,
    type WhatsappTemplateCarouselComponent as WhatsappTemplateCarouselComponent,
    type WhatsappTemplateFooterComponent as WhatsappTemplateFooterComponent,
    type WhatsappTemplateHeaderComponent as WhatsappTemplateHeaderComponent,
    type TemplateCreateResponse as TemplateCreateResponse,
    type TemplateListParams as TemplateListParams,
    type TemplateCreateParams as TemplateCreateParams,
  };

  export {
    PhoneNumbers as PhoneNumbers,
    type PhoneNumberListResponse as PhoneNumberListResponse,
    type PhoneNumberRetrieveConversationWindowResponse as PhoneNumberRetrieveConversationWindowResponse,
    type PhoneNumberListResponsesDefaultFlatPagination as PhoneNumberListResponsesDefaultFlatPagination,
    type PhoneNumberListParams as PhoneNumberListParams,
    type PhoneNumberResendVerificationParams as PhoneNumberResendVerificationParams,
    type PhoneNumberVerifyParams as PhoneNumberVerifyParams,
    type PhoneNumberRetrieveConversationWindowParams as PhoneNumberRetrieveConversationWindowParams,
  };

  export {
    UserData as UserData,
    type WhatsappUserData as WhatsappUserData,
    type UserDataRetrieveResponse as UserDataRetrieveResponse,
    type UserDataUpdateResponse as UserDataUpdateResponse,
    type UserDataUpdateParams as UserDataUpdateParams,
  };
}
