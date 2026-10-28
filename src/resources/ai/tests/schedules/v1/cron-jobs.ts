// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

/**
 * Test agents, evaluator scenarios, metrics, and run results for the AI test framework.
 */
export class CronJobs extends APIResource {
  /**
   * Returns the scheduled test jobs in your organization, optionally filtered by
   * test agent. A scheduled job runs selected scenarios on a cron expression.
   *
   * @example
   * ```ts
   * const scheduledTestJobs =
   *   await client.ai.tests.schedules.v1.cronJobs.retrieveCronJobs();
   * ```
   */
  retrieveCronJobs(
    query: CronJobRetrieveCronJobsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CronJobRetrieveCronJobsResponse> {
    return this._client.get('/ai/tests/schedules/v1/cron-jobs', { query, ...options });
  }

  /**
   * Creates a scheduled test job that runs the selected scenarios on a cron
   * expression.
   *
   * @example
   * ```ts
   * const scheduledTestJob =
   *   await client.ai.tests.schedules.v1.cronJobs.cronJobs({
   *     crontab_expression: '0 3 * * *',
   *     agent: 1259,
   *     execution_mode: 'voice',
   *     name: 'Nightly regression',
   *     notify_on: 'failure',
   *     scenarios: [9512],
   *     timezone: 'America/Chicago',
   *   });
   * ```
   */
  cronJobs(body: CronJobCronJobsParams, options?: RequestOptions): APIPromise<ScheduledTestJob> {
    return this._client.post('/ai/tests/schedules/v1/cron-jobs', { body, ...options });
  }

  /**
   * Deletes the specified scheduled test job.
   *
   * @example
   * ```ts
   * const cronJob =
   *   await client.ai.tests.schedules.v1.cronJobs.delete(0);
   * ```
   */
  delete(id: number, options?: RequestOptions): APIPromise<unknown> {
    return this._client.delete(path`/ai/tests/schedules/v1/cron-jobs/${id}`, options);
  }

  /**
   * Returns the specified scheduled test job.
   *
   * @example
   * ```ts
   * const scheduledTestJob =
   *   await client.ai.tests.schedules.v1.cronJobs.retrieve(0);
   * ```
   */
  retrieve(id: number, options?: RequestOptions): APIPromise<ScheduledTestJob> {
    return this._client.get(path`/ai/tests/schedules/v1/cron-jobs/${id}`, options);
  }

  /**
   * Updates the specified scheduled test job.
   *
   * @example
   * ```ts
   * const scheduledTestJob =
   *   await client.ai.tests.schedules.v1.cronJobs.update(0, {
   *     crontab_expression: '0 4 * * *',
   *     is_active: true,
   *     name: 'Nightly regression - updated',
   *     notify_on: 'both',
   *   });
   * ```
   */
  update(id: number, body: CronJobUpdateParams, options?: RequestOptions): APIPromise<ScheduledTestJob> {
    return this._client.patch(path`/ai/tests/schedules/v1/cron-jobs/${id}`, { body, ...options });
  }
}

export interface ScheduledTestJob {
  id: number;

  /**
   * ID of the test agent the job belongs to.
   */
  agent: number;

  created_at: string;

  /**
   * Cron expression controlling when the job runs, in the job's timezone.
   */
  crontab_expression: string;

  is_active: boolean;

  name: string;

  updated_at: string;

  /**
   * Execution mode for the test runs, such as voice, text, or sip.
   */
  execution_mode?: string;

  frequency?: number;

  /**
   * When the job sends a notification.
   */
  notify_on?: 'never' | 'success' | 'failure' | 'both';

  personalities?: Array<number>;

  personality?: number | null;

  /**
   * Whether the job runs scenarios as text chat rather than voice calls.
   */
  run_as_text?: boolean;

  /**
   * Scenario IDs the job executes.
   */
  scenario_ids?: Array<number>;

  scenarios_data?: Array<ScheduledTestJob.ScenariosData>;

  tags?: Array<string>;

  timezone?: string;
}

export namespace ScheduledTestJob {
  export interface ScenariosData {
    id?: number;

    agent?: number;

    name?: string;

    personality?: number | null;

    personality_name?: string;
  }
}

export type CronJobDeleteResponse = unknown;

export type CronJobRetrieveCronJobsResponse = Array<ScheduledTestJob>;

export interface CronJobRetrieveCronJobsParams {
  /**
   * Filter jobs belonging to the specified test agent.
   */
  agent_id?: number;
}

export interface CronJobCronJobsParams {
  /**
   * Cron expression controlling when the job runs.
   */
  crontab_expression: string;

  agent?: number;

  /**
   * Execution mode for the test runs, such as voice, text, or sip.
   */
  execution_mode?: string;

  frequency?: number;

  is_active?: boolean;

  name?: string;

  notify_on?: 'never' | 'success' | 'failure' | 'both';

  personalities?: Array<number>;

  run_as_text?: boolean;

  scenarios?: Array<number>;

  tags?: Array<string>;

  timezone?: string;
}

export interface CronJobUpdateParams {
  agent?: number | null;

  /**
   * Cron expression controlling when the job runs.
   */
  crontab_expression?: string;

  /**
   * Execution mode for the test runs, such as voice, text, or sip.
   */
  execution_mode?: string;

  frequency?: number;

  is_active?: boolean;

  name?: string;

  notify_on?: 'never' | 'success' | 'failure' | 'both';

  personalities?: Array<number>;

  run_as_text?: boolean;

  scenarios?: Array<number>;

  tags?: Array<string>;

  timezone?: string;
}

export declare namespace CronJobs {
  export {
    type ScheduledTestJob as ScheduledTestJob,
    type CronJobDeleteResponse as CronJobDeleteResponse,
    type CronJobRetrieveCronJobsResponse as CronJobRetrieveCronJobsResponse,
    type CronJobRetrieveCronJobsParams as CronJobRetrieveCronJobsParams,
    type CronJobCronJobsParams as CronJobCronJobsParams,
    type CronJobUpdateParams as CronJobUpdateParams,
  };
}
