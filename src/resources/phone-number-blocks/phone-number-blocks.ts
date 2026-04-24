// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as JobsAPI from './jobs';
import {
  Job,
  JobDeletePhoneNumberBlockParams,
  JobDeletePhoneNumberBlockResponse,
  JobError,
  JobListParams,
  JobRetrieveResponse,
  Jobs,
  JobsDefaultFlatPagination,
} from './jobs';

export class PhoneNumberBlocks extends APIResource {
  jobs: JobsAPI.Jobs = new JobsAPI.Jobs(this._client);
}

PhoneNumberBlocks.Jobs = Jobs;

export declare namespace PhoneNumberBlocks {
  export {
    Jobs as Jobs,
    type Job as Job,
    type JobError as JobError,
    type JobRetrieveResponse as JobRetrieveResponse,
    type JobDeletePhoneNumberBlockResponse as JobDeletePhoneNumberBlockResponse,
    type JobsDefaultFlatPagination as JobsDefaultFlatPagination,
    type JobListParams as JobListParams,
    type JobDeletePhoneNumberBlockParams as JobDeletePhoneNumberBlockParams,
  };
}
