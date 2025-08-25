// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Telnyx } from '../client';

export abstract class APIResource {
  protected _client: Telnyx;

  constructor(client: Telnyx) {
    this._client = client;
  }
}
