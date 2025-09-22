// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PortingOrdersAPI from './porting-orders';
import * as AuthenticationProvidersAPI from '../authentication-providers';
import * as Shared from '../shared';
import * as ActionRequirementsAPI from './action-requirements';
import {
  ActionRequirementInitiateParams,
  ActionRequirementInitiateResponse,
  ActionRequirementListParams,
  ActionRequirementListResponse,
  ActionRequirements,
} from './action-requirements';
import * as ActionsAPI from './actions';
import {
  ActionActivateResponse,
  ActionCancelResponse,
  ActionConfirmResponse,
  ActionShareParams,
  ActionShareResponse,
  Actions,
} from './actions';
import * as ActivationJobsAPI from './activation-jobs';
import {
  ActivationJobListParams,
  ActivationJobListResponse,
  ActivationJobRetrieveParams,
  ActivationJobRetrieveResponse,
  ActivationJobUpdateParams,
  ActivationJobUpdateResponse,
  ActivationJobs,
} from './activation-jobs';
import * as AdditionalDocumentsAPI from './additional-documents';
import {
  AdditionalDocumentCreateParams,
  AdditionalDocumentCreateResponse,
  AdditionalDocumentDeleteParams,
  AdditionalDocumentListParams,
  AdditionalDocumentListResponse,
  AdditionalDocuments,
} from './additional-documents';
import * as AssociatedPhoneNumbersAPI from './associated-phone-numbers';
import {
  AssociatedPhoneNumberCreateParams,
  AssociatedPhoneNumberCreateResponse,
  AssociatedPhoneNumberDeleteParams,
  AssociatedPhoneNumberDeleteResponse,
  AssociatedPhoneNumberListParams,
  AssociatedPhoneNumberListResponse,
  AssociatedPhoneNumbers,
  PortingAssociatedPhoneNumber,
} from './associated-phone-numbers';
import * as CommentsAPI from './comments';
import {
  CommentCreateParams,
  CommentCreateResponse,
  CommentListParams,
  CommentListResponse,
  Comments,
} from './comments';
import * as PhoneNumberBlocksAPI from './phone-number-blocks';
import {
  PhoneNumberBlockCreateParams,
  PhoneNumberBlockCreateResponse,
  PhoneNumberBlockDeleteParams,
  PhoneNumberBlockDeleteResponse,
  PhoneNumberBlockListParams,
  PhoneNumberBlockListResponse,
  PhoneNumberBlocks,
  PortingPhoneNumberBlock,
} from './phone-number-blocks';
import * as PhoneNumberConfigurationsAPI from './phone-number-configurations';
import {
  PhoneNumberConfigurationCreateParams,
  PhoneNumberConfigurationCreateResponse,
  PhoneNumberConfigurationListParams,
  PhoneNumberConfigurationListResponse,
  PhoneNumberConfigurations,
} from './phone-number-configurations';
import * as PhoneNumberExtensionsAPI from './phone-number-extensions';
import {
  PhoneNumberExtensionCreateParams,
  PhoneNumberExtensionCreateResponse,
  PhoneNumberExtensionDeleteParams,
  PhoneNumberExtensionDeleteResponse,
  PhoneNumberExtensionListParams,
  PhoneNumberExtensionListResponse,
  PhoneNumberExtensions,
  PortingPhoneNumberExtension,
} from './phone-number-extensions';
import * as VerificationCodesAPI from './verification-codes';
import {
  VerificationCodeListParams,
  VerificationCodeListResponse,
  VerificationCodeSendParams,
  VerificationCodeVerifyParams,
  VerificationCodeVerifyResponse,
  VerificationCodes,
} from './verification-codes';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class PortingOrders extends APIResource {
  phoneNumberConfigurations: PhoneNumberConfigurationsAPI.PhoneNumberConfigurations =
    new PhoneNumberConfigurationsAPI.PhoneNumberConfigurations(this._client);
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);
  activationJobs: ActivationJobsAPI.ActivationJobs = new ActivationJobsAPI.ActivationJobs(this._client);
  additionalDocuments: AdditionalDocumentsAPI.AdditionalDocuments =
    new AdditionalDocumentsAPI.AdditionalDocuments(this._client);
  comments: CommentsAPI.Comments = new CommentsAPI.Comments(this._client);
  verificationCodes: VerificationCodesAPI.VerificationCodes = new VerificationCodesAPI.VerificationCodes(
    this._client,
  );
  actionRequirements: ActionRequirementsAPI.ActionRequirements = new ActionRequirementsAPI.ActionRequirements(
    this._client,
  );
  associatedPhoneNumbers: AssociatedPhoneNumbersAPI.AssociatedPhoneNumbers =
    new AssociatedPhoneNumbersAPI.AssociatedPhoneNumbers(this._client);
  phoneNumberBlocks: PhoneNumberBlocksAPI.PhoneNumberBlocks = new PhoneNumberBlocksAPI.PhoneNumberBlocks(
    this._client,
  );
  phoneNumberExtensions: PhoneNumberExtensionsAPI.PhoneNumberExtensions =
    new PhoneNumberExtensionsAPI.PhoneNumberExtensions(this._client);

  /**
   * Creates a new porting order object.
   *
   * @example
   * ```ts
   * const portingOrder = await client.portingOrders.create({
   *   phone_numbers: [
   *     '+13035550000',
   *     '+13035550001',
   *     '+13035550002',
   *   ],
   * });
   * ```
   */
  create(body: PortingOrderCreateParams, options?: RequestOptions): APIPromise<PortingOrderCreateResponse> {
    return this._client.post('/porting_orders', { body, ...options });
  }

  /**
   * Retrieves the details of an existing porting order.
   *
   * @example
   * ```ts
   * const portingOrder = await client.portingOrders.retrieve(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  retrieve(
    id: string,
    query: PortingOrderRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PortingOrderRetrieveResponse> {
    return this._client.get(path`/porting_orders/${id}`, { query, ...options });
  }

  /**
   * Edits the details of an existing porting order.
   *
   * Any or all of a porting orders attributes may be included in the resource object
   * included in a PATCH request.
   *
   * If a request does not include all of the attributes for a resource, the system
   * will interpret the missing attributes as if they were included with their
   * current values. To explicitly set something to null, it must be included in the
   * request with a null value.
   *
   * @example
   * ```ts
   * const portingOrder = await client.portingOrders.update(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  update(
    id: string,
    body: PortingOrderUpdateParams,
    options?: RequestOptions,
  ): APIPromise<PortingOrderUpdateResponse> {
    return this._client.patch(path`/porting_orders/${id}`, { body, ...options });
  }

  /**
   * Returns a list of your porting order.
   *
   * @example
   * ```ts
   * const portingOrders = await client.portingOrders.list();
   * ```
   */
  list(
    query: PortingOrderListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PortingOrderListResponse> {
    return this._client.get('/porting_orders', { query, ...options });
  }

  /**
   * Deletes an existing porting order. This operation is restrict to porting orders
   * in draft state.
   *
   * @example
   * ```ts
   * await client.portingOrders.delete(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/porting_orders/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Returns a list of allowed FOC dates for a porting order.
   *
   * @example
   * ```ts
   * const response =
   *   await client.portingOrders.retrieveAllowedFocWindows(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  retrieveAllowedFocWindows(
    id: string,
    options?: RequestOptions,
  ): APIPromise<PortingOrderRetrieveAllowedFocWindowsResponse> {
    return this._client.get(path`/porting_orders/${id}/allowed_foc_windows`, options);
  }

  /**
   * Returns a list of all possible exception types for a porting order.
   *
   * @example
   * ```ts
   * const response =
   *   await client.portingOrders.retrieveExceptionTypes();
   * ```
   */
  retrieveExceptionTypes(options?: RequestOptions): APIPromise<PortingOrderRetrieveExceptionTypesResponse> {
    return this._client.get('/porting_orders/exception_types', options);
  }

  /**
   * Download a porting order loa template
   *
   * @example
   * ```ts
   * const response =
   *   await client.portingOrders.retrieveLoaTemplate(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  retrieveLoaTemplate(
    id: string,
    query: PortingOrderRetrieveLoaTemplateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Response> {
    return this._client.get(path`/porting_orders/${id}/loa_template`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/pdf' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Returns a list of all requirements based on country/number type for this porting
   * order.
   *
   * @example
   * ```ts
   * const response =
   *   await client.portingOrders.retrieveRequirements(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  retrieveRequirements(
    id: string,
    query: PortingOrderRetrieveRequirementsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PortingOrderRetrieveRequirementsResponse> {
    return this._client.get(path`/porting_orders/${id}/requirements`, { query, ...options });
  }

  /**
   * Retrieve the associated V1 sub_request_id and port_request_id
   *
   * @example
   * ```ts
   * const response =
   *   await client.portingOrders.retrieveSubRequest(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  retrieveSubRequest(
    id: string,
    options?: RequestOptions,
  ): APIPromise<PortingOrderRetrieveSubRequestResponse> {
    return this._client.get(path`/porting_orders/${id}/sub_request`, options);
  }
}

export interface PortingOrder {
  /**
   * Uniquely identifies this porting order
   */
  id?: string;

  activation_settings?: PortingOrderActivationSettings;

  /**
   * For specific porting orders, we may require additional steps to be taken before
   * submitting the porting order.
   */
  additional_steps?: Array<'associated_phone_numbers' | 'phone_number_verification_codes'>;

  /**
   * ISO 8601 formatted date indicating when the resource was created.
   */
  created_at?: string;

  /**
   * A customer-specified group reference for customer bookkeeping purposes
   */
  customer_group_reference?: string;

  /**
   * A customer-specified reference number for customer bookkeeping purposes
   */
  customer_reference?: string;

  /**
   * A description of the porting order
   */
  description?: string;

  /**
   * Can be specified directly or via the `requirement_group_id` parameter.
   */
  documents?: PortingOrderDocuments;

  end_user?: PortingOrderEndUser;

  /**
   * Information about messaging porting process.
   */
  messaging?: PortingOrderMessaging;

  misc?: PortingOrderMisc;

  /**
   * Identifies the old service provider
   */
  old_service_provider_ocn?: string;

  /**
   * A key to reference for the porting order group when contacting Telnyx customer
   * support. This information is not available for porting orders in `draft` state
   */
  parent_support_key?: string;

  phone_number_configuration?: PortingOrderPhoneNumberConfiguration;

  /**
   * The type of the phone number
   */
  phone_number_type?: 'landline' | 'local' | 'mobile' | 'national' | 'shared_cost' | 'toll_free';

  /**
   * Count of phone numbers associated with this porting order
   */
  porting_phone_numbers_count?: number;

  /**
   * Identifies the type of the resource.
   */
  record_type?: string;

  /**
   * List of documentation requirements for porting numbers. Can be set directly or
   * via the `requirement_group_id` parameter.
   */
  requirements?: Array<PortingOrderRequirement>;

  /**
   * Is true when the required documentation is met
   */
  requirements_met?: boolean;

  /**
   * Porting order status
   */
  status?: Shared.PortingOrderStatus;

  /**
   * A key to reference this porting order when contacting Telnyx customer support.
   * This information is not available in draft porting orders.
   */
  support_key?: string;

  /**
   * ISO 8601 formatted date indicating when the resource was created.
   */
  updated_at?: string;

  user_feedback?: PortingOrderUserFeedback;

  /**
   * Identifies the user (or organization) who requested the porting order
   */
  user_id?: string;

  webhook_url?: string;
}

export interface PortingOrderActivationSettings {
  /**
   * Activation status
   */
  activation_status?:
    | 'New'
    | 'Pending'
    | 'Conflict'
    | 'Cancel Pending'
    | 'Failed'
    | 'Concurred'
    | 'Activate RDY'
    | 'Disconnect Pending'
    | 'Concurrence Sent'
    | 'Old'
    | 'Sending'
    | 'Active'
    | 'Cancelled';

  /**
   * Indicates whether this porting order is eligible for FastPort
   */
  fast_port_eligible?: boolean;

  /**
   * ISO 8601 formatted Date/Time of the FOC date
   */
  foc_datetime_actual?: string;

  /**
   * ISO 8601 formatted Date/Time requested for the FOC date
   */
  foc_datetime_requested?: string;
}

/**
 * Can be specified directly or via the `requirement_group_id` parameter.
 */
export interface PortingOrderDocuments {
  /**
   * Returned ID of the submitted Invoice via the Documents endpoint
   */
  invoice?: string;

  /**
   * Returned ID of the submitted LOA via the Documents endpoint
   */
  loa?: string;
}

export interface PortingOrderEndUser {
  admin?: PortingOrderEndUserAdmin;

  location?: PortingOrderEndUserLocation;
}

export interface PortingOrderEndUserAdmin {
  /**
   * The authorized person's account number with the current service provider
   */
  account_number?: string;

  /**
   * Name of person authorizing the porting order
   */
  auth_person_name?: string;

  /**
   * Billing phone number associated with these phone numbers
   */
  billing_phone_number?: string;

  /**
   * European business identification number. Applicable only in the European Union
   */
  business_identifier?: string;

  /**
   * Person Name or Company name requesting the port
   */
  entity_name?: string;

  /**
   * PIN/passcode possibly required by the old service provider for extra
   * verification
   */
  pin_passcode?: string;

  /**
   * European tax identification number. Applicable only in the European Union
   */
  tax_identifier?: string;
}

export interface PortingOrderEndUserLocation {
  /**
   * State, province, or similar of billing address
   */
  administrative_area?: string;

  /**
   * ISO3166-1 alpha-2 country code of billing address
   */
  country_code?: string;

  /**
   * Second line of billing address
   */
  extended_address?: string;

  /**
   * City or municipality of billing address
   */
  locality?: string;

  /**
   * Postal Code of billing address
   */
  postal_code?: string;

  /**
   * First line of billing address
   */
  street_address?: string;
}

/**
 * Information about messaging porting process.
 */
export interface PortingOrderMessaging {
  /**
   * Indicates whether Telnyx will port messaging capabilities from the losing
   * carrier. If false, any messaging capabilities will stay with their current
   * provider.
   */
  enable_messaging?: boolean;

  /**
   * Indicates whether the porting order can also port messaging capabilities.
   */
  messaging_capable?: boolean;

  /**
   * Indicates whether the messaging porting has been completed.
   */
  messaging_port_completed?: boolean;

  /**
   * The current status of the messaging porting.
   */
  messaging_port_status?:
    | 'not_applicable'
    | 'pending'
    | 'activating'
    | 'exception'
    | 'canceled'
    | 'partial_port_complete'
    | 'ported';
}

export interface PortingOrderMisc {
  /**
   * New billing phone number for the remaining numbers. Used in case the current
   * billing phone number is being ported to Telnyx. This will be set on your account
   * with your current service provider and should be one of the numbers remaining on
   * that account.
   */
  new_billing_phone_number?: string;

  /**
   * Remaining numbers can be either kept with their current service provider or
   * disconnected. 'new_billing_telephone_number' is required when
   * 'remaining_numbers_action' is 'keep'.
   */
  remaining_numbers_action?: 'keep' | 'disconnect';

  /**
   * A port can be either 'full' or 'partial'. When type is 'full' the other
   * attributes should be omitted.
   */
  type?: PortingOrderType;
}

export interface PortingOrderPhoneNumberConfiguration {
  /**
   * identifies the billing group to set on the numbers when ported
   */
  billing_group_id?: string;

  /**
   * identifies the connection to set on the numbers when ported
   */
  connection_id?: string;

  /**
   * identifies the emergency address to set on the numbers when ported
   */
  emergency_address_id?: string;

  /**
   * identifies the messaging profile to set on the numbers when ported
   */
  messaging_profile_id?: string;

  tags?: Array<string>;
}

export interface PortingOrderRequirement {
  /**
   * Type of value expected on field_value field
   */
  field_type?: 'document';

  /**
   * identifies the document that satisfies this requirement
   */
  field_value?: string;

  /**
   * Identifies the type of the resource.
   */
  record_type?: string;

  /**
   * Identifies the requirement type that meets this requirement
   */
  requirement_type_id?: string;
}

/**
 * A port can be either 'full' or 'partial'. When type is 'full' the other
 * attributes should be omitted.
 */
export type PortingOrderType = 'full' | 'partial';

export interface PortingOrderUserFeedback {
  /**
   * A comment related to the customer rating.
   */
  user_comment?: string;

  /**
   * Once an order is ported, cancellation is requested or the request is cancelled,
   * the user may rate their experience
   */
  user_rating?: number;
}

export interface PortingOrdersActivationJob {
  /**
   * Uniquely identifies this activation job
   */
  id?: string;

  /**
   * ISO 8601 formatted date indicating when the activation job should be executed.
   * This time should be between some activation window.
   */
  activate_at?: string;

  /**
   * Specifies the type of this activation job
   */
  activation_type?: 'scheduled' | 'on-demand';

  /**
   * List of allowed activation windows for this activation job
   */
  activation_windows?: Array<PortingOrdersActivationJob.ActivationWindow>;

  /**
   * ISO 8601 formatted date indicating when the resource was created.
   */
  created_at?: string;

  /**
   * Identifies the type of the resource.
   */
  record_type?: string;

  /**
   * Specifies the status of this activation job
   */
  status?: 'created' | 'in-process' | 'completed' | 'failed';

  /**
   * ISO 8601 formatted date indicating when the resource was created.
   */
  updated_at?: string;
}

export namespace PortingOrdersActivationJob {
  export interface ActivationWindow {
    /**
     * ISO 8601 formatted date indicating when the activation window ends
     */
    end_at?: string;

    /**
     * ISO 8601 formatted date indicating when the activation window starts
     */
    start_at?: string;
  }
}

export interface PortingOrderCreateResponse {
  data?: Array<PortingOrder>;
}

export interface PortingOrderRetrieveResponse {
  data?: PortingOrder;

  meta?: PortingOrderRetrieveResponse.Meta;
}

export namespace PortingOrderRetrieveResponse {
  export interface Meta {
    /**
     * Link to list all phone numbers
     */
    phone_numbers_url?: string;
  }
}

export interface PortingOrderUpdateResponse {
  data?: PortingOrder;

  meta?: PortingOrderUpdateResponse.Meta;
}

export namespace PortingOrderUpdateResponse {
  export interface Meta {
    /**
     * Link to list all phone numbers
     */
    phone_numbers_url?: string;
  }
}

export interface PortingOrderListResponse {
  data?: Array<PortingOrder>;

  meta?: AuthenticationProvidersAPI.PaginationMeta;
}

export interface PortingOrderRetrieveAllowedFocWindowsResponse {
  data?: Array<PortingOrderRetrieveAllowedFocWindowsResponse.Data>;

  meta?: AuthenticationProvidersAPI.PaginationMeta;
}

export namespace PortingOrderRetrieveAllowedFocWindowsResponse {
  export interface Data {
    /**
     * ISO 8601 formatted date indicating the end of the range of foc window
     */
    ended_at?: string;

    /**
     * Identifies the type of the resource.
     */
    record_type?: string;

    /**
     * ISO 8601 formatted date indicating the start of the range of foc window.
     */
    started_at?: string;
  }
}

export interface PortingOrderRetrieveExceptionTypesResponse {
  data?: Array<Shared.PortingOrdersExceptionType>;
}

export interface PortingOrderRetrieveRequirementsResponse {
  data?: Array<PortingOrderRetrieveRequirementsResponse.Data>;

  meta?: AuthenticationProvidersAPI.PaginationMeta;
}

export namespace PortingOrderRetrieveRequirementsResponse {
  export interface Data {
    /**
     * Type of value expected on field_value field
     */
    field_type?: 'document' | 'textual';

    /**
     * Identifies the document that satisfies this requirement
     */
    field_value?: string;

    /**
     * Identifies the type of the resource.
     */
    record_type?: string;

    /**
     * Status of the requirement
     */
    requirement_status?: string;

    /**
     * Identifies the requirement type that meets this requirement
     */
    requirement_type?: Data.RequirementType;
  }

  export namespace Data {
    /**
     * Identifies the requirement type that meets this requirement
     */
    export interface RequirementType {
      /**
       * Identifies the requirement type
       */
      id?: string;

      /**
       * The acceptance criteria for the requirement type
       */
      acceptance_criteria?: { [key: string]: unknown };

      /**
       * A description of the requirement type
       */
      description?: string;

      /**
       * An example of the requirement type
       */
      example?: string;

      /**
       * The name of the requirement type
       */
      name?: string;

      /**
       * The type of the requirement type
       */
      type?: string;
    }
  }
}

export interface PortingOrderRetrieveSubRequestResponse {
  data?: PortingOrderRetrieveSubRequestResponse.Data;
}

export namespace PortingOrderRetrieveSubRequestResponse {
  export interface Data {
    /**
     * Identifies the Port Request associated with the Porting Order
     */
    port_request_id?: string;

    /**
     * Identifies the Sub Request associated with the Porting Order
     */
    sub_request_id?: string;
  }
}

export interface PortingOrderCreateParams {
  /**
   * The list of +E.164 formatted phone numbers
   */
  phone_numbers: Array<string>;

  /**
   * A customer-specified group reference for customer bookkeeping purposes
   */
  customer_group_reference?: string;

  /**
   * A customer-specified reference number for customer bookkeeping purposes
   */
  customer_reference?: string;
}

export interface PortingOrderRetrieveParams {
  /**
   * Include the first 50 phone number objects in the results
   */
  include_phone_numbers?: boolean;
}

export interface PortingOrderUpdateParams {
  activation_settings?: PortingOrderUpdateParams.ActivationSettings;

  customer_group_reference?: string;

  customer_reference?: string;

  /**
   * Can be specified directly or via the `requirement_group_id` parameter.
   */
  documents?: PortingOrderDocuments;

  end_user?: PortingOrderEndUser;

  messaging?: PortingOrderUpdateParams.Messaging;

  misc?: PortingOrderMisc;

  phone_number_configuration?: PortingOrderPhoneNumberConfiguration;

  /**
   * If present, we will read the current values from the specified Requirement Group
   * into the Documents and Requirements for this Porting Order. Note that any future
   * changes in the Requirement Group would have no impact on this Porting Order. We
   * will return an error if a specified Requirement Group conflicts with documents
   * or requirements in the same request.
   */
  requirement_group_id?: string;

  /**
   * List of requirements for porting numbers.
   */
  requirements?: Array<PortingOrderUpdateParams.Requirement>;

  user_feedback?: PortingOrderUserFeedback;

  webhook_url?: string;
}

export namespace PortingOrderUpdateParams {
  export interface ActivationSettings {
    /**
     * ISO 8601 formatted Date/Time requested for the FOC date
     */
    foc_datetime_requested?: string;
  }

  export interface Messaging {
    /**
     * Indicates whether Telnyx will port messaging capabilities from the losing
     * carrier. If false, any messaging capabilities will stay with their current
     * provider.
     */
    enable_messaging?: boolean;
  }

  /**
   * Specifies a value for a requirement on the Porting Order.
   */
  export interface Requirement {
    /**
     * identifies the document or provides the text value that satisfies this
     * requirement
     */
    field_value: string;

    /**
     * Identifies the requirement type that the `field_value` fulfills
     */
    requirement_type_id: string;
  }
}

export interface PortingOrderListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[customer_reference], filter[customer_group_reference],
   * filter[parent_support_key], filter[phone_numbers.country_code],
   * filter[phone_numbers.carrier_name], filter[misc.type],
   * filter[end_user.admin.entity_name], filter[end_user.admin.auth_person_name],
   * filter[activation_settings.fast_port_eligible],
   * filter[activation_settings.foc_datetime_requested][gt],
   * filter[activation_settings.foc_datetime_requested][lt],
   * filter[phone_numbers.phone_number][contains]
   */
  filter?: PortingOrderListParams.Filter;

  /**
   * Include the first 50 phone number objects in the results
   */
  include_phone_numbers?: boolean;

  /**
   * Consolidated page parameter (deepObject style). Originally: page[size],
   * page[number]
   */
  page?: PortingOrderListParams.Page;

  /**
   * Consolidated sort parameter (deepObject style). Originally: sort[value]
   */
  sort?: PortingOrderListParams.Sort;
}

export namespace PortingOrderListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[customer_reference], filter[customer_group_reference],
   * filter[parent_support_key], filter[phone_numbers.country_code],
   * filter[phone_numbers.carrier_name], filter[misc.type],
   * filter[end_user.admin.entity_name], filter[end_user.admin.auth_person_name],
   * filter[activation_settings.fast_port_eligible],
   * filter[activation_settings.foc_datetime_requested][gt],
   * filter[activation_settings.foc_datetime_requested][lt],
   * filter[phone_numbers.phone_number][contains]
   */
  export interface Filter {
    /**
     * Filter results by fast port eligible
     */
    'activation_settings.fast_port_eligible'?: boolean;

    /**
     * FOC datetime range filtering operations
     */
    'activation_settings.foc_datetime_requested'?: Filter.ActivationSettingsFocDatetimeRequested;

    /**
     * Filter results by customer_group_reference
     */
    customer_group_reference?: string;

    /**
     * Filter results by customer_reference
     */
    customer_reference?: string;

    /**
     * Filter results by authorized person
     */
    'end_user.admin.auth_person_name'?: string;

    /**
     * Filter results by person or company name
     */
    'end_user.admin.entity_name'?: string;

    /**
     * Filter results by porting order type
     */
    'misc.type'?: PortingOrdersAPI.PortingOrderType;

    /**
     * Filter results by parent_support_key
     */
    parent_support_key?: string;

    /**
     * Filter results by old service provider
     */
    'phone_numbers.carrier_name'?: string;

    /**
     * Filter results by country ISO 3166-1 alpha-2 code
     */
    'phone_numbers.country_code'?: string;

    /**
     * Phone number filtering operations
     */
    'phone_numbers.phone_number'?: Filter.PhoneNumbersPhoneNumber;
  }

  export namespace Filter {
    /**
     * FOC datetime range filtering operations
     */
    export interface ActivationSettingsFocDatetimeRequested {
      /**
       * Filter results by foc date later than this value
       */
      gt?: string;

      /**
       * Filter results by foc date earlier than this value
       */
      lt?: string;
    }

    /**
     * Phone number filtering operations
     */
    export interface PhoneNumbersPhoneNumber {
      /**
       * Filter results by full or partial phone_number
       */
      contains?: string;
    }
  }

  /**
   * Consolidated page parameter (deepObject style). Originally: page[size],
   * page[number]
   */
  export interface Page {
    /**
     * The page number to load
     */
    number?: number;

    /**
     * The size of the page
     */
    size?: number;
  }

  /**
   * Consolidated sort parameter (deepObject style). Originally: sort[value]
   */
  export interface Sort {
    /**
     * Specifies the sort order for results. If not given, results are sorted by
     * created_at in descending order.
     */
    value?:
      | 'created_at'
      | '-created_at'
      | 'activation_settings.foc_datetime_requested'
      | '-activation_settings.foc_datetime_requested';
  }
}

export interface PortingOrderRetrieveLoaTemplateParams {
  /**
   * The identifier of the LOA configuration to use for the template. If not
   * provided, the default LOA configuration will be used.
   */
  loa_configuration_id?: string;
}

export interface PortingOrderRetrieveRequirementsParams {
  /**
   * Consolidated page parameter (deepObject style). Originally: page[size],
   * page[number]
   */
  page?: PortingOrderRetrieveRequirementsParams.Page;
}

export namespace PortingOrderRetrieveRequirementsParams {
  /**
   * Consolidated page parameter (deepObject style). Originally: page[size],
   * page[number]
   */
  export interface Page {
    /**
     * The page number to load
     */
    number?: number;

    /**
     * The size of the page
     */
    size?: number;
  }
}

PortingOrders.PhoneNumberConfigurations = PhoneNumberConfigurations;
PortingOrders.Actions = Actions;
PortingOrders.ActivationJobs = ActivationJobs;
PortingOrders.AdditionalDocuments = AdditionalDocuments;
PortingOrders.Comments = Comments;
PortingOrders.VerificationCodes = VerificationCodes;
PortingOrders.ActionRequirements = ActionRequirements;
PortingOrders.AssociatedPhoneNumbers = AssociatedPhoneNumbers;
PortingOrders.PhoneNumberBlocks = PhoneNumberBlocks;
PortingOrders.PhoneNumberExtensions = PhoneNumberExtensions;

export declare namespace PortingOrders {
  export {
    type PortingOrder as PortingOrder,
    type PortingOrderActivationSettings as PortingOrderActivationSettings,
    type PortingOrderDocuments as PortingOrderDocuments,
    type PortingOrderEndUser as PortingOrderEndUser,
    type PortingOrderEndUserAdmin as PortingOrderEndUserAdmin,
    type PortingOrderEndUserLocation as PortingOrderEndUserLocation,
    type PortingOrderMessaging as PortingOrderMessaging,
    type PortingOrderMisc as PortingOrderMisc,
    type PortingOrderPhoneNumberConfiguration as PortingOrderPhoneNumberConfiguration,
    type PortingOrderRequirement as PortingOrderRequirement,
    type PortingOrderType as PortingOrderType,
    type PortingOrderUserFeedback as PortingOrderUserFeedback,
    type PortingOrdersActivationJob as PortingOrdersActivationJob,
    type PortingOrderCreateResponse as PortingOrderCreateResponse,
    type PortingOrderRetrieveResponse as PortingOrderRetrieveResponse,
    type PortingOrderUpdateResponse as PortingOrderUpdateResponse,
    type PortingOrderListResponse as PortingOrderListResponse,
    type PortingOrderRetrieveAllowedFocWindowsResponse as PortingOrderRetrieveAllowedFocWindowsResponse,
    type PortingOrderRetrieveExceptionTypesResponse as PortingOrderRetrieveExceptionTypesResponse,
    type PortingOrderRetrieveRequirementsResponse as PortingOrderRetrieveRequirementsResponse,
    type PortingOrderRetrieveSubRequestResponse as PortingOrderRetrieveSubRequestResponse,
    type PortingOrderCreateParams as PortingOrderCreateParams,
    type PortingOrderRetrieveParams as PortingOrderRetrieveParams,
    type PortingOrderUpdateParams as PortingOrderUpdateParams,
    type PortingOrderListParams as PortingOrderListParams,
    type PortingOrderRetrieveLoaTemplateParams as PortingOrderRetrieveLoaTemplateParams,
    type PortingOrderRetrieveRequirementsParams as PortingOrderRetrieveRequirementsParams,
  };

  export {
    PhoneNumberConfigurations as PhoneNumberConfigurations,
    type PhoneNumberConfigurationCreateResponse as PhoneNumberConfigurationCreateResponse,
    type PhoneNumberConfigurationListResponse as PhoneNumberConfigurationListResponse,
    type PhoneNumberConfigurationCreateParams as PhoneNumberConfigurationCreateParams,
    type PhoneNumberConfigurationListParams as PhoneNumberConfigurationListParams,
  };

  export {
    Actions as Actions,
    type ActionActivateResponse as ActionActivateResponse,
    type ActionCancelResponse as ActionCancelResponse,
    type ActionConfirmResponse as ActionConfirmResponse,
    type ActionShareResponse as ActionShareResponse,
    type ActionShareParams as ActionShareParams,
  };

  export {
    ActivationJobs as ActivationJobs,
    type ActivationJobRetrieveResponse as ActivationJobRetrieveResponse,
    type ActivationJobUpdateResponse as ActivationJobUpdateResponse,
    type ActivationJobListResponse as ActivationJobListResponse,
    type ActivationJobRetrieveParams as ActivationJobRetrieveParams,
    type ActivationJobUpdateParams as ActivationJobUpdateParams,
    type ActivationJobListParams as ActivationJobListParams,
  };

  export {
    AdditionalDocuments as AdditionalDocuments,
    type AdditionalDocumentCreateResponse as AdditionalDocumentCreateResponse,
    type AdditionalDocumentListResponse as AdditionalDocumentListResponse,
    type AdditionalDocumentCreateParams as AdditionalDocumentCreateParams,
    type AdditionalDocumentListParams as AdditionalDocumentListParams,
    type AdditionalDocumentDeleteParams as AdditionalDocumentDeleteParams,
  };

  export {
    Comments as Comments,
    type CommentCreateResponse as CommentCreateResponse,
    type CommentListResponse as CommentListResponse,
    type CommentCreateParams as CommentCreateParams,
    type CommentListParams as CommentListParams,
  };

  export {
    VerificationCodes as VerificationCodes,
    type VerificationCodeListResponse as VerificationCodeListResponse,
    type VerificationCodeVerifyResponse as VerificationCodeVerifyResponse,
    type VerificationCodeListParams as VerificationCodeListParams,
    type VerificationCodeSendParams as VerificationCodeSendParams,
    type VerificationCodeVerifyParams as VerificationCodeVerifyParams,
  };

  export {
    ActionRequirements as ActionRequirements,
    type ActionRequirementListResponse as ActionRequirementListResponse,
    type ActionRequirementInitiateResponse as ActionRequirementInitiateResponse,
    type ActionRequirementListParams as ActionRequirementListParams,
    type ActionRequirementInitiateParams as ActionRequirementInitiateParams,
  };

  export {
    AssociatedPhoneNumbers as AssociatedPhoneNumbers,
    type PortingAssociatedPhoneNumber as PortingAssociatedPhoneNumber,
    type AssociatedPhoneNumberCreateResponse as AssociatedPhoneNumberCreateResponse,
    type AssociatedPhoneNumberListResponse as AssociatedPhoneNumberListResponse,
    type AssociatedPhoneNumberDeleteResponse as AssociatedPhoneNumberDeleteResponse,
    type AssociatedPhoneNumberCreateParams as AssociatedPhoneNumberCreateParams,
    type AssociatedPhoneNumberListParams as AssociatedPhoneNumberListParams,
    type AssociatedPhoneNumberDeleteParams as AssociatedPhoneNumberDeleteParams,
  };

  export {
    PhoneNumberBlocks as PhoneNumberBlocks,
    type PortingPhoneNumberBlock as PortingPhoneNumberBlock,
    type PhoneNumberBlockCreateResponse as PhoneNumberBlockCreateResponse,
    type PhoneNumberBlockListResponse as PhoneNumberBlockListResponse,
    type PhoneNumberBlockDeleteResponse as PhoneNumberBlockDeleteResponse,
    type PhoneNumberBlockCreateParams as PhoneNumberBlockCreateParams,
    type PhoneNumberBlockListParams as PhoneNumberBlockListParams,
    type PhoneNumberBlockDeleteParams as PhoneNumberBlockDeleteParams,
  };

  export {
    PhoneNumberExtensions as PhoneNumberExtensions,
    type PortingPhoneNumberExtension as PortingPhoneNumberExtension,
    type PhoneNumberExtensionCreateResponse as PhoneNumberExtensionCreateResponse,
    type PhoneNumberExtensionListResponse as PhoneNumberExtensionListResponse,
    type PhoneNumberExtensionDeleteResponse as PhoneNumberExtensionDeleteResponse,
    type PhoneNumberExtensionCreateParams as PhoneNumberExtensionCreateParams,
    type PhoneNumberExtensionListParams as PhoneNumberExtensionListParams,
    type PhoneNumberExtensionDeleteParams as PhoneNumberExtensionDeleteParams,
  };
}
