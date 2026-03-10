// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as MessagingAPI from './messaging';
import {
  BatchCsvPaginationMeta,
  MdrDetailReportResponse,
  Messaging,
  MessagingCreateParams,
  MessagingCreateResponse,
  MessagingDeleteResponse,
  MessagingListResponse,
  MessagingRetrieveResponse,
} from './messaging';
import * as SpeechToTextAPI from './speech-to-text';
import {
  SpeechToText,
  SpeechToTextCreateParams,
  SpeechToTextCreateResponse,
  SpeechToTextDeleteResponse,
  SpeechToTextListResponse,
  SpeechToTextRetrieveResponse,
  SttDetailReportResponse,
} from './speech-to-text';
import * as VoiceAPI from './voice';
import {
  CdrDetailedReqResponse,
  Voice,
  VoiceCreateParams,
  VoiceCreateResponse,
  VoiceDeleteResponse,
  VoiceListResponse,
  VoiceRetrieveFieldsResponse,
  VoiceRetrieveResponse,
} from './voice';

export class BatchDetailRecords extends APIResource {
  messaging: MessagingAPI.Messaging = new MessagingAPI.Messaging(this._client);
  speechToText: SpeechToTextAPI.SpeechToText = new SpeechToTextAPI.SpeechToText(this._client);
  voice: VoiceAPI.Voice = new VoiceAPI.Voice(this._client);
}

/**
 * Query filter criteria. Note: The first filter object must specify filter_type as
 * 'and'. You cannot follow an 'or' with another 'and'.
 */
export interface Filter {
  /**
   * Billing group UUID to filter by
   */
  billing_group?: string;

  /**
   * Called line identification (destination number)
   */
  cld?: string;

  /**
   * Filter type for CLD matching
   */
  cld_filter?: 'contains' | 'starts_with' | 'ends_with';

  /**
   * Calling line identification (caller ID)
   */
  cli?: string;

  /**
   * Filter type for CLI matching
   */
  cli_filter?: 'contains' | 'starts_with' | 'ends_with';

  /**
   * Logical operator for combining filters
   */
  filter_type?: 'and' | 'or';

  /**
   * Tag name to filter by
   */
  tags_list?: string;
}

BatchDetailRecords.Messaging = Messaging;
BatchDetailRecords.SpeechToText = SpeechToText;
BatchDetailRecords.Voice = Voice;

export declare namespace BatchDetailRecords {
  export { type Filter as Filter };

  export {
    Messaging as Messaging,
    type BatchCsvPaginationMeta as BatchCsvPaginationMeta,
    type MdrDetailReportResponse as MdrDetailReportResponse,
    type MessagingCreateResponse as MessagingCreateResponse,
    type MessagingRetrieveResponse as MessagingRetrieveResponse,
    type MessagingListResponse as MessagingListResponse,
    type MessagingDeleteResponse as MessagingDeleteResponse,
    type MessagingCreateParams as MessagingCreateParams,
  };

  export {
    SpeechToText as SpeechToText,
    type SttDetailReportResponse as SttDetailReportResponse,
    type SpeechToTextCreateResponse as SpeechToTextCreateResponse,
    type SpeechToTextRetrieveResponse as SpeechToTextRetrieveResponse,
    type SpeechToTextListResponse as SpeechToTextListResponse,
    type SpeechToTextDeleteResponse as SpeechToTextDeleteResponse,
    type SpeechToTextCreateParams as SpeechToTextCreateParams,
  };

  export {
    Voice as Voice,
    type CdrDetailedReqResponse as CdrDetailedReqResponse,
    type VoiceCreateResponse as VoiceCreateResponse,
    type VoiceRetrieveResponse as VoiceRetrieveResponse,
    type VoiceListResponse as VoiceListResponse,
    type VoiceDeleteResponse as VoiceDeleteResponse,
    type VoiceRetrieveFieldsResponse as VoiceRetrieveFieldsResponse,
    type VoiceCreateParams as VoiceCreateParams,
  };
}
