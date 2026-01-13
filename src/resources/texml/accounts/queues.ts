// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Queues extends APIResource {
  /**
   * Creates a new queue resource.
   *
   * @example
   * ```ts
   * const queue = await client.texml.accounts.queues.create(
   *   'account_sid',
   * );
   * ```
   */
  create(
    accountSid: string,
    body: QueueCreateParams,
    options?: RequestOptions,
  ): APIPromise<QueueCreateResponse> {
    return this._client.post(path`/texml/Accounts/${accountSid}/Queues`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': 'application/x-www-form-urlencoded' }, options?.headers]),
    });
  }

  /**
   * Returns a queue resource.
   *
   * @example
   * ```ts
   * const queue = await client.texml.accounts.queues.retrieve(
   *   'queue_sid',
   *   { account_sid: 'account_sid' },
   * );
   * ```
   */
  retrieve(
    queueSid: string,
    params: QueueRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<QueueRetrieveResponse> {
    const { account_sid } = params;
    return this._client.get(path`/texml/Accounts/${account_sid}/Queues/${queueSid}`, options);
  }

  /**
   * Updates a queue resource.
   *
   * @example
   * ```ts
   * const queue = await client.texml.accounts.queues.update(
   *   'queue_sid',
   *   { account_sid: 'account_sid' },
   * );
   * ```
   */
  update(
    queueSid: string,
    params: QueueUpdateParams,
    options?: RequestOptions,
  ): APIPromise<QueueUpdateResponse> {
    const { account_sid, ...body } = params;
    return this._client.post(path`/texml/Accounts/${account_sid}/Queues/${queueSid}`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': 'application/x-www-form-urlencoded' }, options?.headers]),
    });
  }

  /**
   * Lists queue resources.
   *
   * @example
   * ```ts
   * const queues = await client.texml.accounts.queues.list(
   *   'account_sid',
   * );
   * ```
   */
  list(
    accountSid: string,
    query: QueueListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<QueueListResponse> {
    return this._client.get(path`/texml/Accounts/${accountSid}/Queues`, { query, ...options });
  }

  /**
   * Delete a queue resource.
   *
   * @example
   * ```ts
   * await client.texml.accounts.queues.delete('queue_sid', {
   *   account_sid: 'account_sid',
   * });
   * ```
   */
  delete(queueSid: string, params: QueueDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { account_sid } = params;
    return this._client.delete(path`/texml/Accounts/${account_sid}/Queues/${queueSid}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface QueueCreateResponse {
  /**
   * The id of the account the resource belongs to.
   */
  account_sid?: string;

  /**
   * The average wait time in seconds for members in the queue.
   */
  average_wait_time?: number;

  /**
   * The current number of members in the queue.
   */
  current_size?: number;

  /**
   * The timestamp of when the resource was created.
   */
  date_created?: string;

  /**
   * The timestamp of when the resource was last updated.
   */
  date_updated?: string;

  /**
   * The maximum size of the queue.
   */
  max_size?: number;

  /**
   * The unique identifier of the queue.
   */
  sid?: string;

  /**
   * A list of related resources identified by their relative URIs.
   */
  subresource_uris?: { [key: string]: unknown };

  /**
   * The relative URI for this queue.
   */
  uri?: string;
}

export interface QueueRetrieveResponse {
  /**
   * The id of the account the resource belongs to.
   */
  account_sid?: string;

  /**
   * The average wait time in seconds for members in the queue.
   */
  average_wait_time?: number;

  /**
   * The current number of members in the queue.
   */
  current_size?: number;

  /**
   * The timestamp of when the resource was created.
   */
  date_created?: string;

  /**
   * The timestamp of when the resource was last updated.
   */
  date_updated?: string;

  /**
   * The maximum size of the queue.
   */
  max_size?: number;

  /**
   * The unique identifier of the queue.
   */
  sid?: string;

  /**
   * A list of related resources identified by their relative URIs.
   */
  subresource_uris?: { [key: string]: unknown };

  /**
   * The relative URI for this queue.
   */
  uri?: string;
}

export interface QueueUpdateResponse {
  /**
   * The id of the account the resource belongs to.
   */
  account_sid?: string;

  /**
   * The average wait time in seconds for members in the queue.
   */
  average_wait_time?: number;

  /**
   * The current number of members in the queue.
   */
  current_size?: number;

  /**
   * The timestamp of when the resource was created.
   */
  date_created?: string;

  /**
   * The timestamp of when the resource was last updated.
   */
  date_updated?: string;

  /**
   * The maximum size of the queue.
   */
  max_size?: number;

  /**
   * The unique identifier of the queue.
   */
  sid?: string;

  /**
   * A list of related resources identified by their relative URIs.
   */
  subresource_uris?: { [key: string]: unknown };

  /**
   * The relative URI for this queue.
   */
  uri?: string;
}

export interface QueueListResponse {
  /**
   * The number of the last element on the page, zero-indexed.
   */
  end?: number;

  /**
   * /v2/texml/Accounts/61bf923e-5e4d-4595-a110-56190ea18a1b/Queues.json?Page=0&PageSize=1
   */
  first_page_uri?: string;

  /**
   * /v2/texml/Accounts/61bf923e-5e4d-4595-a110-56190ea18a1b/Queues.json?Page=1&PageSize=1&PageToken=MTY4AjgyNDkwNzIxMQ
   */
  next_page_uri?: string;

  /**
   * Current page number, zero-indexed.
   */
  page?: number;

  /**
   * The number of items on the page
   */
  page_size?: number;

  queues?: Array<QueueListResponse.Queue>;

  /**
   * The number of the first element on the page, zero-indexed.
   */
  start?: number;

  /**
   * The URI of the current page.
   */
  uri?: string;
}

export namespace QueueListResponse {
  export interface Queue {
    /**
     * The id of the account the resource belongs to.
     */
    account_sid?: string;

    /**
     * The average wait time in seconds for members in the queue.
     */
    average_wait_time?: number;

    /**
     * The current number of members in the queue.
     */
    current_size?: number;

    /**
     * The timestamp of when the resource was created.
     */
    date_created?: string;

    /**
     * The timestamp of when the resource was last updated.
     */
    date_updated?: string;

    /**
     * The maximum size of the queue.
     */
    max_size?: number;

    /**
     * The unique identifier of the queue.
     */
    sid?: string;

    /**
     * A list of related resources identified by their relative URIs.
     */
    subresource_uris?: { [key: string]: unknown };

    /**
     * The relative URI for this queue.
     */
    uri?: string;
  }
}

export interface QueueCreateParams {
  /**
   * A human readable name for the queue.
   */
  FriendlyName?: string;

  /**
   * The maximum size of the queue.
   */
  MaxSize?: number;
}

export interface QueueRetrieveParams {
  /**
   * The id of the account the resource belongs to.
   */
  account_sid: string;
}

export interface QueueUpdateParams {
  /**
   * Path param: The id of the account the resource belongs to.
   */
  account_sid: string;

  /**
   * Body param: The maximum size of the queue.
   */
  MaxSize?: number;
}

export interface QueueListParams {
  /**
   * Filters conferences by the creation date. Expected format is YYYY-MM-DD. Also
   * accepts inequality operators, e.g. DateCreated>=2023-05-22.
   */
  DateCreated?: string;

  /**
   * Filters conferences by the time they were last updated. Expected format is
   * YYYY-MM-DD. Also accepts inequality operators, e.g. DateUpdated>=2023-05-22.
   */
  DateUpdated?: string;

  /**
   * The number of the page to be displayed, zero-indexed, should be used in
   * conjuction with PageToken.
   */
  Page?: number;

  /**
   * The number of records to be displayed on a page
   */
  PageSize?: number;

  /**
   * Used to request the next page of results.
   */
  PageToken?: string;
}

export interface QueueDeleteParams {
  /**
   * The id of the account the resource belongs to.
   */
  account_sid: string;
}

export declare namespace Queues {
  export {
    type QueueCreateResponse as QueueCreateResponse,
    type QueueRetrieveResponse as QueueRetrieveResponse,
    type QueueUpdateResponse as QueueUpdateResponse,
    type QueueListResponse as QueueListResponse,
    type QueueCreateParams as QueueCreateParams,
    type QueueRetrieveParams as QueueRetrieveParams,
    type QueueUpdateParams as QueueUpdateParams,
    type QueueListParams as QueueListParams,
    type QueueDeleteParams as QueueDeleteParams,
  };
}
