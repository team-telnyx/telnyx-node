// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class AuditEvents extends APIResource {
  /**
   * Retrieve a list of audit log entries. Audit logs are a best-effort, eventually
   * consistent record of significant account-related changes.
   */
  list(
    query: AuditEventListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AuditEventListResponse> {
    return this._client.get('/audit_events', { query, ...options });
  }
}

export interface AuditEventListResponse {
  data?: Array<AuditEventListResponse.Data>;

  meta?: AuditEventListResponse.Meta;
}

export namespace AuditEventListResponse {
  export interface Data {
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
    changes?: Array<Data.Change> | null;

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

  export namespace Data {
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
      from?: string | number | boolean | { [key: string]: unknown } | Array<unknown> | null;

      /**
       * The new value of the field. Can be any JSON type.
       */
      to?: string | number | boolean | { [key: string]: unknown } | Array<unknown> | null;
    }
  }

  export interface Meta {
    page_number?: number;

    page_size?: number;

    total_pages?: number;

    total_results?: number;
  }
}

export interface AuditEventListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[created_before], filter[created_after]
   */
  filter?: AuditEventListParams.Filter;

  /**
   * Consolidated page parameter (deepObject style). Originally: page[number],
   * page[size]
   */
  page?: AuditEventListParams.Page;

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

  /**
   * Consolidated page parameter (deepObject style). Originally: page[number],
   * page[size]
   */
  export interface Page {
    /**
     * Page number to load.
     */
    number?: number;

    /**
     * Number of items per page.
     */
    size?: number;
  }
}

export declare namespace AuditEvents {
  export {
    type AuditEventListResponse as AuditEventListResponse,
    type AuditEventListParams as AuditEventListParams,
  };
}
