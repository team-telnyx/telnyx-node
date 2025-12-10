// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';

export class PhoneNumberCampaigns extends APIResource {}

export interface PhoneNumberCampaign {
  /**
   * For shared campaigns, this is the TCR campaign ID, otherwise it is the campaign
   * ID
   */
  campaignId: string;

  createdAt: string;

  phoneNumber: string;

  updatedAt: string;

  /**
   * The assignment status of the number.
   */
  assignmentStatus?:
    | 'FAILED_ASSIGNMENT'
    | 'PENDING_ASSIGNMENT'
    | 'ASSIGNED'
    | 'PENDING_UNASSIGNMENT'
    | 'FAILED_UNASSIGNMENT';

  /**
   * Brand ID. Empty if the number is associated to a shared campaign.
   */
  brandId?: string;

  /**
   * Extra info about a failure to assign/unassign a number. Relevant only if the
   * assignmentStatus is either FAILED_ASSIGNMENT or FAILED_UNASSIGNMENT
   */
  failureReasons?: string;

  /**
   * TCR's alphanumeric ID for the brand.
   */
  tcrBrandId?: string;

  /**
   * TCR's alphanumeric ID for the campaign.
   */
  tcrCampaignId?: string;

  /**
   * Campaign ID. Empty if the number is associated to a shared campaign.
   */
  telnyxCampaignId?: string;
}

export interface PhoneNumberCampaignCreate {
  /**
   * The ID of the campaign you want to link to the specified phone number.
   */
  campaignId: string;

  /**
   * The phone number you want to link to a specified campaign.
   */
  phoneNumber: string;
}

export declare namespace PhoneNumberCampaigns {
  export {
    type PhoneNumberCampaign as PhoneNumberCampaign,
    type PhoneNumberCampaignCreate as PhoneNumberCampaignCreate,
  };
}
