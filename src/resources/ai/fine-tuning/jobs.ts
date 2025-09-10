// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Jobs extends APIResource {
  /**
   * Create a new fine tuning job.
   *
   * @example
   * ```ts
   * const fineTuningJob =
   *   await client.ai.fineTuning.jobs.create({
   *     model: 'model',
   *     training_file: 'training_file',
   *   });
   * ```
   */
  create(body: JobCreateParams, options?: RequestOptions): APIPromise<FineTuningJob> {
    return this._client.post('/ai/fine_tuning/jobs', { body, ...options });
  }

  /**
   * Retrieve a fine tuning job by `job_id`.
   *
   * @example
   * ```ts
   * const fineTuningJob =
   *   await client.ai.fineTuning.jobs.retrieve('job_id');
   * ```
   */
  retrieve(jobID: string, options?: RequestOptions): APIPromise<FineTuningJob> {
    return this._client.get(path`/ai/fine_tuning/jobs/${jobID}`, options);
  }

  /**
   * Retrieve a list of all fine tuning jobs created by the user.
   *
   * @example
   * ```ts
   * const jobs = await client.ai.fineTuning.jobs.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<JobListResponse> {
    return this._client.get('/ai/fine_tuning/jobs', options);
  }

  /**
   * Cancel a fine tuning job.
   *
   * @example
   * ```ts
   * const fineTuningJob =
   *   await client.ai.fineTuning.jobs.cancel('job_id');
   * ```
   */
  cancel(jobID: string, options?: RequestOptions): APIPromise<FineTuningJob> {
    return this._client.post(path`/ai/fine_tuning/jobs/${jobID}/cancel`, options);
  }
}

/**
 * The `fine_tuning.job` object represents a fine-tuning job that has been created
 * through the API.
 */
export interface FineTuningJob {
  /**
   * The name of the fine-tuned model that is being created.
   */
  id: string;

  /**
   * The Unix timestamp (in seconds) for when the fine-tuning job was created.
   */
  created_at: number;

  /**
   * The Unix timestamp (in seconds) for when the fine-tuning job was finished. The
   * value will be null if the fine-tuning job is still running.
   */
  finished_at: number | null;

  /**
   * The hyperparameters used for the fine-tuning job.
   */
  hyperparameters: FineTuningJob.Hyperparameters;

  /**
   * The base model that is being fine-tuned.
   */
  model: string;

  /**
   * The organization that owns the fine-tuning job.
   */
  organization_id: string;

  /**
   * The current status of the fine-tuning job.
   */
  status: 'queued' | 'running' | 'succeeded' | 'failed' | 'cancelled';

  /**
   * The total number of billable tokens processed by this fine-tuning job. The value
   * will be null if the fine-tuning job is still running.
   */
  trained_tokens: number | null;

  /**
   * The storage bucket or object used for training.
   */
  training_file: string;
}

export namespace FineTuningJob {
  /**
   * The hyperparameters used for the fine-tuning job.
   */
  export interface Hyperparameters {
    /**
     * The number of epochs to train the model for. An epoch refers to one full cycle
     * through the training dataset.
     */
    n_epochs: number;
  }
}

export interface JobListResponse {
  data: Array<FineTuningJob>;
}

export interface JobCreateParams {
  /**
   * The base model that is being fine-tuned.
   */
  model: string;

  /**
   * The storage bucket or object used for training.
   */
  training_file: string;

  /**
   * The hyperparameters used for the fine-tuning job.
   */
  hyperparameters?: JobCreateParams.Hyperparameters;

  /**
   * Optional suffix to append to the fine tuned model's name.
   */
  suffix?: string;
}

export namespace JobCreateParams {
  /**
   * The hyperparameters used for the fine-tuning job.
   */
  export interface Hyperparameters {
    /**
     * The number of epochs to train the model for. An epoch refers to one full cycle
     * through the training dataset. 'auto' decides the optimal number of epochs based
     * on the size of the dataset. If setting the number manually, we support any
     * number between 1 and 50 epochs.
     */
    n_epochs?: number;
  }
}

export declare namespace Jobs {
  export {
    type FineTuningJob as FineTuningJob,
    type JobListResponse as JobListResponse,
    type JobCreateParams as JobCreateParams,
  };
}
