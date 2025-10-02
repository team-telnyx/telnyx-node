// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as MessagingAPI from './messaging';
import {
  Messaging,
  MessagingCreateParams,
  MessagingCreateResponse,
  MessagingDeleteResponse,
  MessagingListParams,
  MessagingListResponse,
  MessagingRetrieveResponse,
} from './messaging';
import * as NumberLookupAPI from './number-lookup';
import { NumberLookup, NumberLookupCreateParams, NumberLookupListParams } from './number-lookup';
import * as VoiceAPI from './voice';
import {
  Voice,
  VoiceCreateParams,
  VoiceCreateResponse,
  VoiceDeleteResponse,
  VoiceListParams,
  VoiceListResponse,
  VoiceRetrieveResponse,
} from './voice';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

export class UsageReports extends APIResource {
  messaging: MessagingAPI.Messaging = new MessagingAPI.Messaging(this._client);
  numberLookup: NumberLookupAPI.NumberLookup = new NumberLookupAPI.NumberLookup(this._client);
  voice: VoiceAPI.Voice = new VoiceAPI.Voice(this._client);

  /**
   * Generate and fetch speech to text usage report synchronously. This endpoint will
   * both generate and fetch the speech to text report over a specified time period.
   *
   * @example
   * ```ts
   * const response =
   *   await client.legacy.reporting.usageReports.retrieveSpeechToText();
   * ```
   */
  retrieveSpeechToText(
    query: UsageReportRetrieveSpeechToTextParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UsageReportRetrieveSpeechToTextResponse> {
    return this._client.get('/legacy/reporting/usage_reports/speech_to_text', { query, ...options });
  }
}

export interface UsageReportRetrieveSpeechToTextResponse {
  data?: unknown;
}

export interface UsageReportRetrieveSpeechToTextParams {
  end_date?: string;

  start_date?: string;
}

UsageReports.Messaging = Messaging;
UsageReports.NumberLookup = NumberLookup;
UsageReports.Voice = Voice;

export declare namespace UsageReports {
  export {
    type UsageReportRetrieveSpeechToTextResponse as UsageReportRetrieveSpeechToTextResponse,
    type UsageReportRetrieveSpeechToTextParams as UsageReportRetrieveSpeechToTextParams,
  };

  export {
    Messaging as Messaging,
    type MessagingCreateResponse as MessagingCreateResponse,
    type MessagingRetrieveResponse as MessagingRetrieveResponse,
    type MessagingListResponse as MessagingListResponse,
    type MessagingDeleteResponse as MessagingDeleteResponse,
    type MessagingCreateParams as MessagingCreateParams,
    type MessagingListParams as MessagingListParams,
  };

  export {
    NumberLookup as NumberLookup,
    type NumberLookupCreateParams as NumberLookupCreateParams,
    type NumberLookupListParams as NumberLookupListParams,
  };

  export {
    Voice as Voice,
    type VoiceCreateResponse as VoiceCreateResponse,
    type VoiceRetrieveResponse as VoiceRetrieveResponse,
    type VoiceListResponse as VoiceListResponse,
    type VoiceDeleteResponse as VoiceDeleteResponse,
    type VoiceCreateParams as VoiceCreateParams,
    type VoiceListParams as VoiceListParams,
  };
}
