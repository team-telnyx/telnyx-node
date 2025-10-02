// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class SpeechToText extends APIResource {
  /**
   * Creates a new Speech to Text batch report request with the specified filters
   *
   * @example
   * ```ts
   * const speechToText =
   *   await client.legacy.reporting.batchDetailRecords.speechToText.create(
   *     {
   *       end_date: '2020-07-01T00:00:00-06:00',
   *       start_date: '2020-07-01T00:00:00-06:00',
   *     },
   *   );
   * ```
   */
  create(body: SpeechToTextCreateParams, options?: RequestOptions): APIPromise<SpeechToTextCreateResponse> {
    return this._client.post('/legacy/reporting/batch_detail_records/speech_to_text', { body, ...options });
  }

  /**
   * Retrieves a specific Speech to Text batch report request by ID
   *
   * @example
   * ```ts
   * const speechToText =
   *   await client.legacy.reporting.batchDetailRecords.speechToText.retrieve(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<SpeechToTextRetrieveResponse> {
    return this._client.get(path`/legacy/reporting/batch_detail_records/speech_to_text/${id}`, options);
  }

  /**
   * Retrieves all Speech to Text batch report requests for the authenticated user
   *
   * @example
   * ```ts
   * const speechToTexts =
   *   await client.legacy.reporting.batchDetailRecords.speechToText.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<SpeechToTextListResponse> {
    return this._client.get('/legacy/reporting/batch_detail_records/speech_to_text', options);
  }

  /**
   * Deletes a specific Speech to Text batch report request by ID
   *
   * @example
   * ```ts
   * const speechToText =
   *   await client.legacy.reporting.batchDetailRecords.speechToText.delete(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<SpeechToTextDeleteResponse> {
    return this._client.delete(path`/legacy/reporting/batch_detail_records/speech_to_text/${id}`, options);
  }
}

export interface SttDetailReportResponse {
  /**
   * Identifies the resource
   */
  id?: string;

  created_at?: string;

  /**
   * URL to download the report
   */
  download_link?: string;

  end_date?: string;

  record_type?: string;

  start_date?: string;

  status?: 'PENDING' | 'COMPLETE' | 'FAILED' | 'EXPIRED';
}

export interface SpeechToTextCreateResponse {
  data?: SttDetailReportResponse;
}

export interface SpeechToTextRetrieveResponse {
  data?: SttDetailReportResponse;
}

export interface SpeechToTextListResponse {
  data?: Array<SttDetailReportResponse>;
}

export interface SpeechToTextDeleteResponse {
  data?: SttDetailReportResponse;
}

export interface SpeechToTextCreateParams {
  /**
   * End date in ISO format with timezone (date range must be up to one month)
   */
  end_date: string;

  /**
   * Start date in ISO format with timezone
   */
  start_date: string;
}

export declare namespace SpeechToText {
  export {
    type SttDetailReportResponse as SttDetailReportResponse,
    type SpeechToTextCreateResponse as SpeechToTextCreateResponse,
    type SpeechToTextRetrieveResponse as SpeechToTextRetrieveResponse,
    type SpeechToTextListResponse as SpeechToTextListResponse,
    type SpeechToTextDeleteResponse as SpeechToTextDeleteResponse,
    type SpeechToTextCreateParams as SpeechToTextCreateParams,
  };
}
