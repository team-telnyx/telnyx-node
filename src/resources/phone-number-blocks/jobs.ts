// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as JobsAPI from './jobs';
import { APIPromise } from '../../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Jobs extends APIResource {
  /**
   * Retrieves a phone number blocks job
   *
   * @example
   * ```ts
   * const job = await client.phoneNumberBlocks.jobs.retrieve(
   *   'id',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<JobRetrieveResponse> {
    return this._client.get(path`/phone_number_blocks/jobs/${id}`, options);
  }

  /**
   * Lists the phone number blocks jobs
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const job of client.phoneNumberBlocks.jobs.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: JobListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<JobsDefaultFlatPagination, Job> {
    return this._client.getAPIList('/phone_number_blocks/jobs', DefaultFlatPagination<Job>, {
      query,
      ...options,
    });
  }

  /**
   * Creates a new background job to delete all the phone numbers associated with the
   * given block. We will only consider the phone number block as deleted after all
   * phone numbers associated with it are removed, so multiple executions of this job
   * may be necessary in case some of the phone numbers present errors during the
   * deletion process.
   *
   * @example
   * ```ts
   * const response =
   *   await client.phoneNumberBlocks.jobs.deletePhoneNumberBlock(
   *     {
   *       phone_number_block_id:
   *         'f3946371-7199-4261-9c3d-81a0d7935146',
   *     },
   *   );
   * ```
   */
  deletePhoneNumberBlock(
    body: JobDeletePhoneNumberBlockParams,
    options?: RequestOptions,
  ): APIPromise<JobDeletePhoneNumberBlockResponse> {
    return this._client.post('/phone_number_blocks/jobs/delete_phone_number_block', { body, ...options });
  }
}

export type JobsDefaultFlatPagination = DefaultFlatPagination<Job>;

export interface Job {
  /**
   * Identifies the resource.
   */
  id?: string;

  /**
   * ISO 8601 formatted date indicating when the resource was created.
   */
  created_at?: string;

  /**
   * ISO 8601 formatted date indicating when the estimated time of completion of the
   * background job.
   */
  etc?: string;

  failed_operations?: Array<Job.FailedOperation>;

  /**
   * Identifies the type of the resource.
   */
  record_type?: string;

  /**
   * Indicates the completion status of the background operation.
   */
  status?: 'pending' | 'in_progress' | 'completed' | 'failed';

  successful_operations?: Array<Job.SuccessfulOperation>;

  /**
   * Identifies the type of the background job.
   */
  type?: 'delete_phone_number_block';

  /**
   * ISO 8601 formatted date indicating when the resource was updated.
   */
  updated_at?: string;
}

export namespace Job {
  export interface FailedOperation {
    /**
     * The phone number's ID
     */
    id?: string;

    errors?: Array<JobsAPI.JobError>;

    /**
     * The phone number in e164 format.
     */
    phone_number?: string;
  }

  /**
   * The phone numbers successfully updated.
   */
  export interface SuccessfulOperation {
    /**
     * The phone number's ID
     */
    id?: string;

    /**
     * The phone number in e164 format.
     */
    phone_number?: string;
  }
}

export interface JobError {
  code?: string;

  detail?: string;

  meta?: JobError.Meta;

  source?: JobError.Source;

  title?: string;
}

export namespace JobError {
  export interface Meta {
    /**
     * URL with additional information on the error.
     */
    url?: string;
  }

  export interface Source {
    /**
     * Indicates which query parameter caused the error.
     */
    parameter?: string;

    /**
     * JSON pointer (RFC6901) to the offending entity.
     */
    pointer?: string;
  }
}

export interface JobRetrieveResponse {
  data?: Job;
}

export interface JobDeletePhoneNumberBlockResponse {
  data?: Job;
}

export interface JobListParams extends DefaultFlatPaginationParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally: filter[type],
   * filter[status]
   */
  filter?: JobListParams.Filter;

  /**
   * Specifies the sort order for results. If not given, results are sorted by
   * created_at in descending order.
   */
  sort?: 'created_at';
}

export namespace JobListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally: filter[type],
   * filter[status]
   */
  export interface Filter {
    /**
     * Identifies the status of the background job.
     */
    status?: 'pending' | 'in_progress' | 'completed' | 'failed';

    /**
     * Identifies the type of the background job.
     */
    type?: 'delete_phone_number_block';
  }
}

export interface JobDeletePhoneNumberBlockParams {
  phone_number_block_id: string;
}

export declare namespace Jobs {
  export {
    type Job as Job,
    type JobError as JobError,
    type JobRetrieveResponse as JobRetrieveResponse,
    type JobDeletePhoneNumberBlockResponse as JobDeletePhoneNumberBlockResponse,
    type JobsDefaultFlatPagination as JobsDefaultFlatPagination,
    type JobListParams as JobListParams,
    type JobDeletePhoneNumberBlockParams as JobDeletePhoneNumberBlockParams,
  };
}
