// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * Read and update the authenticated user's profile and data locality.
 */
export class UserProfileResource extends APIResource {
  /**
   * Retrieve the authenticated user's profile, including data locality and migration
   * status.
   *
   * **Beta:** this API should be considered a beta integration target because it may
   * change if user account settings require changes
   *
   * @example
   * ```ts
   * const userProfiles = await client.userProfile.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<UserProfileListResponse> {
    return this._client.get('/user_profile', options);
  }

  /**
   * Update the authenticated user's profile using top-level JSON fields. Returns the
   * updated profile.
   *
   * **Beta:** this API should be considered a beta integration target because it may
   * change if user account settings require changes
   *
   * @example
   * ```ts
   * const response = await client.userProfile.patchAll();
   * ```
   */
  patchAll(
    body: UserProfilePatchAllParams,
    options?: RequestOptions,
  ): APIPromise<UserProfilePatchAllResponse> {
    return this._client.patch('/user_profile', { body, ...options });
  }
}

/**
 * The authenticated user's profile.
 */
export interface UserProfile {
  /**
   * Identifier of the user profile, distinct from the user ID.
   */
  id?: number;

  /**
   * First line of the profile address.
   */
  address_1?: string | null;

  /**
   * Second line of the profile address.
   */
  address_2?: string | null;

  /**
   * Business name associated with the profile.
   */
  business_name?: string | null;

  /**
   * City in the profile address.
   */
  city?: string | null;

  /**
   * Country code in the profile address.
   */
  country?: string | null;

  /**
   * The user's data locality: USA (United States), DEU (Germany), AUS (Australia),
   * UAE (United Arab Emirates), or CAN (Canada).
   */
  data_locality?: 'USA' | 'DEU' | 'AUS' | 'UAE' | 'CAN' | null;

  /**
   * Status of the user's data locality migration, or null when no migration status
   * is recorded.
   */
  data_locality_migration_status?: 'not_started' | 'in_progress' | 'finished' | null;

  /**
   * Timestamp when the user's data locality was last changed, or null if it has not
   * been changed.
   */
  data_locality_updated_at?: string | null;

  /**
   * The user's first name.
   */
  first_name?: string | null;

  /**
   * The user's last name.
   */
  last_name?: string | null;

  /**
   * Contact phone number associated with the profile.
   */
  phone_number?: string | null;

  /**
   * Identifies the type of resource.
   */
  record_type?: 'user_profile';

  /**
   * State or region in the profile address.
   */
  state?: string | null;

  /**
   * Timestamp of the most recent profile update.
   */
  updated_at?: string;

  /**
   * Identifier of the user who owns this profile.
   */
  user_id?: string;

  /**
   * Postal code in the profile address.
   */
  zip?: string | null;

  [k: string]: unknown;
}

export interface UserProfileListResponse {
  /**
   * The authenticated user's profile.
   */
  data: UserProfile;
}

export interface UserProfilePatchAllResponse {
  /**
   * The authenticated user's profile.
   */
  data: UserProfile;
}

export interface UserProfilePatchAllParams {
  /**
   * First line of the profile address.
   */
  address_1?: string | null;

  /**
   * Second line of the profile address.
   */
  address_2?: string | null;

  /**
   * Business name associated with the profile.
   */
  business_name?: string | null;

  /**
   * City in the profile address.
   */
  city?: string | null;

  /**
   * Company size reported by the user.
   */
  company_size?: string;

  /**
   * Country code in the profile address.
   */
  country?: string | null;

  /**
   * Data locality: USA (United States), DEU (Germany), AUS (Australia), UAE (United
   * Arab Emirates), or CAN (Canada). A change is permitted only if data locality has
   * not previously been changed. A successful change sets data_locality_updated_at
   * and initializes data_locality_migration_status to not_started.
   */
  data_locality?: 'USA' | 'DEU' | 'AUS' | 'UAE' | 'CAN';

  /**
   * Default custom-pricing setting for managed accounts.
   */
  default_managed_account_allow_custom_pricing?: boolean;

  /**
   * Default emergency terms-of-service inheritance setting for managed accounts,
   * where supported.
   */
  default_managed_account_inherit_emergency_terms_of_service?: boolean;

  /**
   * Default rollup-billing setting for managed accounts.
   */
  default_managed_account_rollup_billing?: boolean;

  /**
   * Default setting for notifying the manager account.
   */
  default_notify_manager_account?: boolean;

  /**
   * Default alphanumeric external PIN for phone numbers.
   */
  default_numbers_external_pin?: string;

  /**
   * The user's first name.
   */
  first_name?: string | null;

  /**
   * Whether the user received a free number at signup.
   */
  got_free_number_at_signup?: boolean;

  /**
   * The user's last name.
   */
  last_name?: string | null;

  /**
   * Low-balance notification frequency. Organization sub-users cannot set a non-null
   * frequency. The resulting profile must have both a threshold and frequency, or
   * neither.
   */
  low_balance_notification_frequency?: 2 | 4 | 12 | 24 | null;

  /**
   * Low-balance notification threshold in the billing currency. The resulting
   * profile must have both a threshold and notification frequency, or neither.
   */
  low_balance_threshold_amount?: number | null;

  /**
   * Whether to notify the user when an invoice is available.
   */
  notify_on_invoice_available?: boolean;

  /**
   * Whether to notify the user when an invoice is paid.
   */
  notify_on_invoice_payment?: boolean;

  /**
   * Whether the user is an NPAC user.
   */
  npac_user?: boolean;

  /**
   * Build methods reported during onboarding.
   */
  onboarding_build_method?: Array<string>;

  /**
   * Industries reported during onboarding.
   */
  onboarding_industries?: Array<string>;

  /**
   * Monthly budget ranges reported during onboarding.
   */
  onboarding_monthly_budget?: Array<string>;

  /**
   * Products of interest reported during onboarding.
   */
  onboarding_product_interest?: Array<string>;

  /**
   * Onboarding project types.
   */
  onboarding_project_types?: Array<string>;

  /**
   * Reasons for considering Telnyx.
   */
  onboarding_reasons_for_consideration?: Array<string>;

  /**
   * Referral sources reported during onboarding.
   */
  onboarding_referrer?: Array<string>;

  /**
   * Other onboarding use cases.
   */
  onboarding_use_cases_other?: Array<string>;

  /**
   * Contact phone number associated with the profile.
   */
  phone_number?: string | null;

  /**
   * Whether port-out PIN validation is enabled.
   */
  port_out_pin_validation?: boolean;

  /**
   * Primary use case for the account.
   */
  primary_use_case?: string;

  /**
   * The user's role.
   */
  role?: string;

  /**
   * State or region in the profile address.
   */
  state?: string | null;

  /**
   * User interface theme: 0 for dark or 1 for light.
   */
  ui_theme?: 0 | 1;

  /**
   * Use cases reported by the user.
   */
  use_cases?: Array<string>;

  /**
   * Whether the user opts in to subscriptions.
   */
  user_subscription_opt_in?: boolean;

  /**
   * Postal code in the profile address.
   */
  zip?: string | null;
}

export declare namespace UserProfileResource {
  export {
    type UserProfile as UserProfile,
    type UserProfileListResponse as UserProfileListResponse,
    type UserProfilePatchAllResponse as UserProfilePatchAllResponse,
    type UserProfilePatchAllParams as UserProfilePatchAllParams,
  };
}
