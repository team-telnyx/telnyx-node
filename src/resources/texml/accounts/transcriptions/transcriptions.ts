// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as JsonAPI from './json';
import {
  Json,
  JsonDeleteRecordingTranscriptionSidJsonParams,
  JsonRetrieveRecordingTranscriptionSidJsonParams,
  JsonRetrieveRecordingTranscriptionSidJsonResponse,
} from './json';

export class Transcriptions extends APIResource {
  json: JsonAPI.Json = new JsonAPI.Json(this._client);
}

Transcriptions.Json = Json;

export declare namespace Transcriptions {
  export {
    Json as Json,
    type JsonRetrieveRecordingTranscriptionSidJsonResponse as JsonRetrieveRecordingTranscriptionSidJsonResponse,
    type JsonDeleteRecordingTranscriptionSidJsonParams as JsonDeleteRecordingTranscriptionSidJsonParams,
    type JsonRetrieveRecordingTranscriptionSidJsonParams as JsonRetrieveRecordingTranscriptionSidJsonParams,
  };
}
