// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as MessagingAPI from './messaging';
import {
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
} from './speech-to-text';
import * as VoiceAPI from './voice';
import {
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

BatchDetailRecords.Messaging = Messaging;
BatchDetailRecords.SpeechToText = SpeechToText;
BatchDetailRecords.Voice = Voice;

export declare namespace BatchDetailRecords {
  export {
    Messaging as Messaging,
    type MessagingCreateResponse as MessagingCreateResponse,
    type MessagingRetrieveResponse as MessagingRetrieveResponse,
    type MessagingListResponse as MessagingListResponse,
    type MessagingDeleteResponse as MessagingDeleteResponse,
    type MessagingCreateParams as MessagingCreateParams,
  };

  export {
    SpeechToText as SpeechToText,
    type SpeechToTextCreateResponse as SpeechToTextCreateResponse,
    type SpeechToTextRetrieveResponse as SpeechToTextRetrieveResponse,
    type SpeechToTextListResponse as SpeechToTextListResponse,
    type SpeechToTextDeleteResponse as SpeechToTextDeleteResponse,
    type SpeechToTextCreateParams as SpeechToTextCreateParams,
  };

  export {
    Voice as Voice,
    type VoiceCreateResponse as VoiceCreateResponse,
    type VoiceRetrieveResponse as VoiceRetrieveResponse,
    type VoiceListResponse as VoiceListResponse,
    type VoiceDeleteResponse as VoiceDeleteResponse,
    type VoiceRetrieveFieldsResponse as VoiceRetrieveFieldsResponse,
    type VoiceCreateParams as VoiceCreateParams,
  };
}
