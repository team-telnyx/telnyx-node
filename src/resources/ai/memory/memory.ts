// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as NamespacesAPI from './namespaces/namespaces';
import {
  Namespace,
  NamespaceCreateParams,
  NamespaceCreateResponse,
  NamespaceListResponse,
  NamespaceRetrieveParams,
  NamespaceRetrieveResponse,
  Namespaces,
} from './namespaces/namespaces';

export class Memory extends APIResource {
  namespaces: NamespacesAPI.Namespaces = new NamespacesAPI.Namespaces(this._client);
}

Memory.Namespaces = Namespaces;

export declare namespace Memory {
  export {
    Namespaces as Namespaces,
    type Namespace as Namespace,
    type NamespaceCreateResponse as NamespaceCreateResponse,
    type NamespaceRetrieveResponse as NamespaceRetrieveResponse,
    type NamespaceListResponse as NamespaceListResponse,
    type NamespaceRetrieveParams as NamespaceRetrieveParams,
    type NamespaceCreateParams as NamespaceCreateParams,
  };
}
