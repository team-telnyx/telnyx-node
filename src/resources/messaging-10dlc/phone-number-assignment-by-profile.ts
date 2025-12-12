// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class PhoneNumberAssignmentByProfile extends APIResource {
  /**
   * This endpoint allows you to link all phone numbers associated with a Messaging
   * Profile to a campaign. **Please note:** if you want to assign phone numbers to a
   * campaign that you did not create with Telnyx 10DLC services, this endpoint
   * allows that provided that you've shared the campaign with Telnyx. In this case,
   * only provide the parameter, `tcrCampaignId`, and not `campaignId`. In all other
   * cases (where the campaign you're assigning was created with Telnyx 10DLC
   * services), only provide `campaignId`, not `tcrCampaignId`.
   *
   * @example
   * ```ts
   * const response =
   *   await client.messaging10dlc.phoneNumberAssignmentByProfile.assign(
   *     {
   *       messagingProfileId:
   *         '4001767e-ce0f-4cae-9d5f-0d5e636e7809',
   *     },
   *   );
   * ```
   */
  assign(
    body: PhoneNumberAssignmentByProfileAssignParams,
    options?: RequestOptions,
  ): APIPromise<PhoneNumberAssignmentByProfileAssignResponse> {
    return this._client.post('/10dlc/phoneNumberAssignmentByProfile', { body, ...options });
  }

  /**
   * Check the status of the individual phone number/campaign assignments associated
   * with the supplied `taskId`.
   *
   * @example
   * ```ts
   * const response =
   *   await client.messaging10dlc.phoneNumberAssignmentByProfile.listPhoneNumberStatus(
   *     'taskId',
   *   );
   * ```
   */
  listPhoneNumberStatus(
    taskID: string,
    query: PhoneNumberAssignmentByProfileListPhoneNumberStatusParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PhoneNumberAssignmentByProfileListPhoneNumberStatusResponse> {
    return this._client.get(path`/10dlc/phoneNumberAssignmentByProfile/${taskID}/phoneNumbers`, {
      query,
      ...options,
    });
  }

  /**
   * Check the status of the individual phone number/campaign assignments associated
   * with the supplied `taskId`.
   *
   * @example
   * ```ts
   * const response =
   *   await client.messaging10dlc.phoneNumberAssignmentByProfile.retrievePhoneNumberStatus(
   *     'taskId',
   *   );
   * ```
   */
  retrievePhoneNumberStatus(
    taskID: string,
    query: PhoneNumberAssignmentByProfileRetrievePhoneNumberStatusParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PhoneNumberAssignmentByProfileRetrievePhoneNumberStatusResponse> {
    return this._client.get(path`/10dlc/phoneNumberAssignmentByProfile/${taskID}/phoneNumbers`, {
      query,
      ...options,
    });
  }

  /**
   * Check the status of the task associated with assigning all phone numbers on a
   * messaging profile to a campaign by `taskId`.
   *
   * @example
   * ```ts
   * const response =
   *   await client.messaging10dlc.phoneNumberAssignmentByProfile.retrieveStatus(
   *     'taskId',
   *   );
   * ```
   */
  retrieveStatus(
    taskID: string,
    options?: RequestOptions,
  ): APIPromise<PhoneNumberAssignmentByProfileRetrieveStatusResponse> {
    return this._client.get(path`/10dlc/phoneNumberAssignmentByProfile/${taskID}`, options);
  }
}

export type TaskStatus = 'pending' | 'starting' | 'running' | 'completed' | 'failed';

export interface PhoneNumberAssignmentByProfileAssignResponse {
  /**
   * The ID of the messaging profile that you want to link to the specified campaign.
   */
  messagingProfileId: string;

  /**
   * The ID of the task associated with assigning a messaging profile to a campaign.
   */
  taskId: string;

  /**
   * The ID of the campaign you want to link to the specified messaging profile. If
   * you supply this ID in the request, do not also include a tcrCampaignId.
   */
  campaignId?: string;

  /**
   * The TCR ID of the shared campaign you want to link to the specified messaging
   * profile (for campaigns not created using Telnyx 10DLC services only). If you
   * supply this ID in the request, do not also include a campaignId.
   */
  tcrCampaignId?: string;
}

export interface PhoneNumberAssignmentByProfileListPhoneNumberStatusResponse {
  records: Array<PhoneNumberAssignmentByProfileListPhoneNumberStatusResponse.Record>;
}

export namespace PhoneNumberAssignmentByProfileListPhoneNumberStatusResponse {
  export interface Record {
    /**
     * The phone number that the status is being checked for.
     */
    phoneNumber: string;

    /**
     * The status of the associated phone number assignment.
     */
    status: string;

    /**
     * The ID of the task associated with the phone number.
     */
    taskId: string;
  }
}

export interface PhoneNumberAssignmentByProfileRetrievePhoneNumberStatusResponse {
  records: Array<PhoneNumberAssignmentByProfileRetrievePhoneNumberStatusResponse.Record>;
}

export namespace PhoneNumberAssignmentByProfileRetrievePhoneNumberStatusResponse {
  export interface Record {
    /**
     * The phone number that the status is being checked for.
     */
    phoneNumber: string;

    /**
     * The status of the associated phone number assignment.
     */
    status: string;

    /**
     * The ID of the task associated with the phone number.
     */
    taskId: string;
  }
}

export interface PhoneNumberAssignmentByProfileRetrieveStatusResponse {
  /**
   * An enumeration.
   */
  status: 'pending' | 'processing' | 'completed' | 'failed';

  taskId: string;

  createdAt?: string;

  updatedAt?: string;
}

export interface PhoneNumberAssignmentByProfileAssignParams {
  /**
   * The ID of the messaging profile that you want to link to the specified campaign.
   */
  messagingProfileId: string;

  /**
   * The ID of the campaign you want to link to the specified messaging profile. If
   * you supply this ID in the request, do not also include a tcrCampaignId.
   */
  campaignId?: string;

  /**
   * The TCR ID of the shared campaign you want to link to the specified messaging
   * profile (for campaigns not created using Telnyx 10DLC services only). If you
   * supply this ID in the request, do not also include a campaignId.
   */
  tcrCampaignId?: string;
}

export interface PhoneNumberAssignmentByProfileListPhoneNumberStatusParams {
  page?: number;

  recordsPerPage?: number;
}

export interface PhoneNumberAssignmentByProfileRetrievePhoneNumberStatusParams {
  page?: number;

  recordsPerPage?: number;
}

export declare namespace PhoneNumberAssignmentByProfile {
  export {
    type TaskStatus as TaskStatus,
    type PhoneNumberAssignmentByProfileAssignResponse as PhoneNumberAssignmentByProfileAssignResponse,
    type PhoneNumberAssignmentByProfileListPhoneNumberStatusResponse as PhoneNumberAssignmentByProfileListPhoneNumberStatusResponse,
    type PhoneNumberAssignmentByProfileRetrievePhoneNumberStatusResponse as PhoneNumberAssignmentByProfileRetrievePhoneNumberStatusResponse,
    type PhoneNumberAssignmentByProfileRetrieveStatusResponse as PhoneNumberAssignmentByProfileRetrieveStatusResponse,
    type PhoneNumberAssignmentByProfileAssignParams as PhoneNumberAssignmentByProfileAssignParams,
    type PhoneNumberAssignmentByProfileListPhoneNumberStatusParams as PhoneNumberAssignmentByProfileListPhoneNumberStatusParams,
    type PhoneNumberAssignmentByProfileRetrievePhoneNumberStatusParams as PhoneNumberAssignmentByProfileRetrievePhoneNumberStatusParams,
  };
}
