// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as JsonAPI from './json';
import { Json, JsonDeleteRecordingSidJsonParams, JsonRetrieveRecordingSidJsonParams } from './json';

export class Recordings extends APIResource {
  json: JsonAPI.Json = new JsonAPI.Json(this._client);
}

Recordings.Json = Json;

export declare namespace Recordings {
  export {
    Json as Json,
    type JsonDeleteRecordingSidJsonParams as JsonDeleteRecordingSidJsonParams,
    type JsonRetrieveRecordingSidJsonParams as JsonRetrieveRecordingSidJsonParams,
  };
}
