// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Manage RCS agent registration, testing, verification, and launch.
 */
export class TestDevices extends APIResource {
  /**
   * Lists test devices attached to an RCS agent.
   *
   * @example
   * ```ts
   * const testDeviceResponses =
   *   await client.rcs.agents.testDevices.list(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  list(id: string, options?: RequestOptions): APIPromise<TestDeviceListResponse> {
    return this._client.get(path`/rcs/agents/${id}/test_devices`, options);
  }

  /**
   * Adds an RCS-capable test number after provider agent creation. Repeating the
   * request for a number already attached to the agent returns the existing test
   * device.
   *
   * @example
   * ```ts
   * const testDeviceResponse =
   *   await client.rcs.agents.testDevices.create(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { phone_number: '+13125550123' },
   *   );
   * ```
   */
  create(id: string, body: TestDeviceCreateParams, options?: RequestOptions): APIPromise<TestDeviceResponse> {
    return this._client.post(path`/rcs/agents/${id}/test_devices`, { body, ...options });
  }

  /**
   * Removes a test device from an RCS agent and its provider registration.
   *
   * @example
   * ```ts
   * await client.rcs.agents.testDevices.delete(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
   * );
   * ```
   */
  delete(testDeviceID: string, params: TestDeviceDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { id } = params;
    return this._client.delete(path`/rcs/agents/${id}/test_devices/${testDeviceID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface TestDeviceResponse {
  invite_status: 'PENDING' | 'ACCEPTED' | 'DECLINED';

  phone_number: string;

  test_device_id: string;
}

export type TestDeviceListResponse = Array<TestDeviceResponse>;

export interface TestDeviceCreateParams {
  phone_number: string;
}

export interface TestDeviceDeleteParams {
  /**
   * The Telnyx-assigned agent identifier.
   */
  id: string;
}

export declare namespace TestDevices {
  export {
    type TestDeviceResponse as TestDeviceResponse,
    type TestDeviceListResponse as TestDeviceListResponse,
    type TestDeviceCreateParams as TestDeviceCreateParams,
    type TestDeviceDeleteParams as TestDeviceDeleteParams,
  };
}
