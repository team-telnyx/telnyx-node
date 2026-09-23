// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Export extends APIResource {
  /**
   * Stops exporting a function's logs and removes its destination configuration.
   * Idempotent: deleting when nothing is configured succeeds.
   *
   * @example
   * ```ts
   * await client.compute.funcs.export.deleteAll('id');
   * ```
   */
  deleteAll(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/compute/funcs/${id}/logs/export`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Returns the function's configured log export destination and which log types are
   * exported. Headers are never returned. Returns 404 (error code 10005) when no
   * destination is configured for the function.
   *
   * @example
   * ```ts
   * const funcLogExportConfigResponse =
   *   await client.compute.funcs.export.list('id');
   * ```
   */
  list(id: string, options?: RequestOptions): APIPromise<FuncLogExportConfigResponse> {
    return this._client.get(path`/compute/funcs/${id}/logs/export`, options);
  }

  /**
   * Configures the external OTLP endpoint a function's runtime and/or invocation
   * logs are pushed to as they happen. This operation is a **full replace, not a
   * patch**: `endpoint`, `headers`, `runtime_export_enabled`, and
   * `invocation_export_enabled` are all required on every call — omitting any of
   * them is a 422, not "keep the current value". Headers are encrypted at rest and
   * never returned in any response.
   *
   * The endpoint must be an HTTPS URL. When export is configured, new log records
   * are converted to OTLP log records and delivered continuously; export never
   * bypasses platform log storage, and delivery retries with a bounded policy while
   * the destination is unreachable. Only logs generated after configuration are
   * exported — there is no historical replay.
   *
   * @example
   * ```ts
   * const funcLogExportConfigResponse =
   *   await client.compute.funcs.export.create('id', {
   *     endpoint: 'https://api.honeycomb.io/v1/logs',
   *     headers: { 'x-honeycomb-team': 'abc123' },
   *     invocation_export_enabled: true,
   *     runtime_export_enabled: true,
   *   });
   * ```
   */
  create(
    id: string,
    body: ExportCreateParams,
    options?: RequestOptions,
  ): APIPromise<FuncLogExportConfigResponse> {
    return this._client.put(path`/compute/funcs/${id}/logs/export`, { body, ...options });
  }
}

export interface FuncLogExportConfigResponse {
  /**
   * Metadata-only view of a function's log export destination. Header values are
   * write-only (encrypted server-side) and never appear in any response.
   */
  data?: FuncLogExportConfigResponse.Data;
}

export namespace FuncLogExportConfigResponse {
  /**
   * Metadata-only view of a function's log export destination. Header values are
   * write-only (encrypted server-side) and never appear in any response.
   */
  export interface Data {
    /**
     * Configuration record ID
     */
    id?: string;

    created_at?: string;

    /**
     * Whether export is enabled for this function
     */
    enabled?: boolean;

    /**
     * HTTPS OTLP endpoint URL logs are pushed to
     */
    endpoint?: string;

    /**
     * Function ID this configuration belongs to
     */
    func_id?: string;

    /**
     * Whether invocation records (one per HTTP request) are exported
     */
    invocation_export_enabled?: boolean;

    record_type?: 'compute_func_log_export_config';

    /**
     * Whether runtime logs (function stdout/stderr) are exported
     */
    runtime_export_enabled?: boolean;

    updated_at?: string;
  }
}

export interface ExportCreateParams {
  /**
   * HTTPS URL to push logs to
   */
  endpoint: string;

  /**
   * Headers attached to every export push, as key-value pairs (e.g. an auth token
   * the collector expects). Required even when empty — {} means "no headers".
   * Encrypted at rest; never returned.
   */
  headers: { [key: string]: string };

  /**
   * Export invocation records (one per HTTP request) to this destination
   */
  invocation_export_enabled: boolean;

  /**
   * Export runtime logs (function stdout/stderr) to this destination
   */
  runtime_export_enabled: boolean;
}

export declare namespace Export {
  export {
    type FuncLogExportConfigResponse as FuncLogExportConfigResponse,
    type ExportCreateParams as ExportCreateParams,
  };
}
