// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as RequestsAPI from './requests';
import {
  RequestCreateParams,
  RequestListParams,
  RequestUpdateParams,
  Requests,
  TfPhoneNumber,
  TfVerificationRequest,
  TfVerificationStatus,
  TollFreeVerificationEntityType,
  URL,
  UseCaseCategories,
  VerificationRequestEgress,
  VerificationRequestStatus,
  VerificationRequestStatusesDefaultPaginationForMessagingTollfree,
  Volume,
} from './requests';

export class Verification extends APIResource {
  requests: RequestsAPI.Requests = new RequestsAPI.Requests(this._client);
}

Verification.Requests = Requests;

export declare namespace Verification {
  export {
    Requests as Requests,
    type TfPhoneNumber as TfPhoneNumber,
    type TfVerificationRequest as TfVerificationRequest,
    type TfVerificationStatus as TfVerificationStatus,
    type TollFreeVerificationEntityType as TollFreeVerificationEntityType,
    type URL as URL,
    type UseCaseCategories as UseCaseCategories,
    type VerificationRequestEgress as VerificationRequestEgress,
    type VerificationRequestStatus as VerificationRequestStatus,
    type Volume as Volume,
    type VerificationRequestStatusesDefaultPaginationForMessagingTollfree as VerificationRequestStatusesDefaultPaginationForMessagingTollfree,
    type RequestCreateParams as RequestCreateParams,
    type RequestUpdateParams as RequestUpdateParams,
    type RequestListParams as RequestListParams,
  };
}
