// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ReportingAPI from './reporting/reporting';
import { Reporting } from './reporting/reporting';

export class Legacy extends APIResource {
  reporting: ReportingAPI.Reporting = new ReportingAPI.Reporting(this._client);
}

Legacy.Reporting = Reporting;

export declare namespace Legacy {
  export { Reporting as Reporting };
}
