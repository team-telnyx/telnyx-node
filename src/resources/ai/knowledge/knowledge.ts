// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CollectionsAPI from './collections';
import {
  CollectionRetrieveDocumentsParams,
  CollectionRetrieveDocumentsResponse,
  Collections,
} from './collections';

export class Knowledge extends APIResource {
  collections: CollectionsAPI.Collections = new CollectionsAPI.Collections(this._client);
}

Knowledge.Collections = Collections;

export declare namespace Knowledge {
  export {
    Collections as Collections,
    type CollectionRetrieveDocumentsResponse as CollectionRetrieveDocumentsResponse,
    type CollectionRetrieveDocumentsParams as CollectionRetrieveDocumentsParams,
  };
}
