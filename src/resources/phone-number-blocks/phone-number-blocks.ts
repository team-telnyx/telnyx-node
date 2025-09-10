// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as JobsAPI from './jobs';
import {
  Job,
  JobDeletePhoneNumberBlockParams,
  JobDeletePhoneNumberBlockResponse,
  JobListParams,
  JobListResponse,
  JobRetrieveResponse,
  Jobs,
} from './jobs';

export class PhoneNumberBlocks extends APIResource {
  jobs: JobsAPI.Jobs = new JobsAPI.Jobs(this._client);
}

PhoneNumberBlocks.Jobs = Jobs;

export declare namespace PhoneNumberBlocks {
  export {
    Jobs as Jobs,
    type Job as Job,
    type JobRetrieveResponse as JobRetrieveResponse,
    type JobListResponse as JobListResponse,
    type JobDeletePhoneNumberBlockResponse as JobDeletePhoneNumberBlockResponse,
    type JobListParams as JobListParams,
    type JobDeletePhoneNumberBlockParams as JobDeletePhoneNumberBlockParams,
  };
}
