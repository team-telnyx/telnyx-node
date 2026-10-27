// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as SchedulesAPI from './schedules/schedules';
import { Schedules } from './schedules/schedules';
import * as TestFrameworkAPI from './test-framework/test-framework';
import { TestFramework } from './test-framework/test-framework';

export class Tests extends APIResource {
  schedules: SchedulesAPI.Schedules = new SchedulesAPI.Schedules(this._client);
  testFramework: TestFrameworkAPI.TestFramework = new TestFrameworkAPI.TestFramework(this._client);
}

Tests.Schedules = Schedules;
Tests.TestFramework = TestFramework;

export declare namespace Tests {
  export { Schedules as Schedules };

  export { TestFramework as TestFramework };
}
