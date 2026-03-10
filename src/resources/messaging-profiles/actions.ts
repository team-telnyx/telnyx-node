// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MessagingProfilesAPI from './messaging-profiles';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Actions extends APIResource {
  /**
   * Regenerate the v1 secret for a messaging profile.
   *
   * @example
   * ```ts
   * const response =
   *   await client.messagingProfiles.actions.regenerateSecret(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  regenerateSecret(id: string, options?: RequestOptions): APIPromise<ActionRegenerateSecretResponse> {
    return this._client.post(path`/messaging_profiles/${id}/actions/regenerate_secret`, options);
  }
}

export interface ActionRegenerateSecretResponse {
  data?: MessagingProfilesAPI.MessagingProfile;
}

export declare namespace Actions {
  export { type ActionRegenerateSecretResponse as ActionRegenerateSecretResponse };
}
