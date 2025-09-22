// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as WellKnownAPI from './well-known';
import {
  WellKnown,
  WellKnownRetrieveAuthorizationServerMetadataResponse,
  WellKnownRetrieveProtectedResourceMetadataResponse,
} from './well-known';

export class Client extends APIResource {
  wellKnown: WellKnownAPI.WellKnown = new WellKnownAPI.WellKnown(this._client);
}

Client.WellKnown = WellKnown;

export declare namespace Client {
  export {
    WellKnown as WellKnown,
    type WellKnownRetrieveAuthorizationServerMetadataResponse as WellKnownRetrieveAuthorizationServerMetadataResponse,
    type WellKnownRetrieveProtectedResourceMetadataResponse as WellKnownRetrieveProtectedResourceMetadataResponse,
  };
}
