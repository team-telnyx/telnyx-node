// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';

export class AuditEvents extends APIResource {
  /**
   * Retrieve a list of audit log entries. Audit logs are a best-effort, eventually
   * consistent record of significant account-related changes.
   */
  list(
    query: AuditEventListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AuditEventListResponsesDefaultFlatPagination, AuditEventListResponse> {
    return this._client.getAPIList('/audit_events', DefaultFlatPagination<AuditEventListResponse>, {
      query,
      ...options,
    });
  }
}

export type AuditEventListResponsesDefaultFlatPagination = DefaultFlatPagination<AuditEventListResponse>;

export interface AuditEventListResponse {
  /**
   * Unique identifier for the audit log entry.
   */
  id?: string;

  /**
   * An alternate identifier for a resource which may be considered unique enough to
   * identify the resource but is not the primary identifier for the resource. For
   * example, this field could be used to store the phone number value for a phone
   * number when the primary database identifier is a separate distinct value.
   */
  alternate_resource_id?: string | null;

  /**
   * Indicates if the change was made by Telnyx on your behalf, the organization
   * owner, a member of your organization, or in the case of managed accounts, the
   * account manager.
   */
  change_made_by?: 'telnyx' | 'account_manager' | 'account_owner' | 'organization_member';

  /**
   * The type of change that occurred.
   */
  change_type?: string;

  /**
   * Details of the changes made to the resource.
   */
  changes?: Array<AuditEventListResponse.Change> | null;

  /**
   * ISO 8601 formatted date indicating when the change occurred.
   */
  created_at?: string;

  /**
   * Unique identifier for the organization that owns the resource.
   */
  organization_id?: string;

  /**
   * The type of the resource being audited.
   */
  record_type?: string;

  /**
   * Unique identifier for the resource that was changed.
   */
  resource_id?: string;

  /**
   * Unique identifier for the user who made the change.
   */
  user_id?: string;
}

export namespace AuditEventListResponse {
  /**
   * Details of the changes made to a resource.
   */
  export interface Change {
    /**
     * The name of the field that was changed. May use the dot notation to indicate
     * nested fields.
     */
    field?: string;

    /**
     * The previous value of the field. Can be any JSON type.
     */
    from?: string | number | boolean | { [key: string]: unknown } | Array<{ [key: string]: unknown }> | null;

    /**
     * The new value of the field. Can be any JSON type.
     */
    to?: string | number | boolean | { [key: string]: unknown } | Array<{ [key: string]: unknown }> | null;
  }
}

export interface AuditEventListParams extends DefaultFlatPaginationParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[created_before], filter[created_after]
   */
  filter?: AuditEventListParams.Filter;

  /**
   * Set the order of the results by the creation date.
   */
  sort?: 'asc' | 'desc';
}

export namespace AuditEventListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[created_before], filter[created_after]
   */
  export interface Filter {
    /**
     * Filter for audit events created after a specific date.
     */
    created_after?: string;

    /**
     * Filter for audit events created before a specific date.
     */
    created_before?: string;
  }
}

export declare namespace AuditEvents {
  export {
    type AuditEventListResponse as AuditEventListResponse,
    type AuditEventListResponsesDefaultFlatPagination as AuditEventListResponsesDefaultFlatPagination,
    type AuditEventListParams as AuditEventListParams,
  };
}
