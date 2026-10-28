// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as CronJobsAPI from './cron-jobs';
import {
  CronJobCronJobsParams,
  CronJobDeleteResponse,
  CronJobRetrieveCronJobsParams,
  CronJobRetrieveCronJobsResponse,
  CronJobUpdateParams,
  CronJobs,
  ScheduledTestJob,
} from './cron-jobs';

export class V1 extends APIResource {
  cronJobs: CronJobsAPI.CronJobs = new CronJobsAPI.CronJobs(this._client);
}

V1.CronJobs = CronJobs;

export declare namespace V1 {
  export {
    CronJobs as CronJobs,
    type ScheduledTestJob as ScheduledTestJob,
    type CronJobDeleteResponse as CronJobDeleteResponse,
    type CronJobRetrieveCronJobsResponse as CronJobRetrieveCronJobsResponse,
    type CronJobRetrieveCronJobsParams as CronJobRetrieveCronJobsParams,
    type CronJobCronJobsParams as CronJobCronJobsParams,
    type CronJobUpdateParams as CronJobUpdateParams,
  };
}
