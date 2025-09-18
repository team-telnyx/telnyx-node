// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CallsAPI from './calls';
import {
  CallInitiateParams,
  CallInitiateResponse,
  CallUpdateParams,
  CallUpdateResponse,
  Calls,
} from './calls';
import * as AccountsAPI from './accounts/accounts';
import {
  AccountRetrieveRecordingsJsonParams,
  AccountRetrieveRecordingsJsonResponse,
  AccountRetrieveTranscriptionsJsonParams,
  AccountRetrieveTranscriptionsJsonResponse,
  Accounts,
  TexmlGetCallRecordingResponseBody,
  TexmlRecordingSubresourcesUris,
} from './accounts/accounts';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Texml extends APIResource {
  accounts: AccountsAPI.Accounts = new AccountsAPI.Accounts(this._client);
  calls: CallsAPI.Calls = new CallsAPI.Calls(this._client);

  /**
   * Create a TeXML secret which can be later used as a Dynamic Parameter for TeXML
   * when using Mustache Templates in your TeXML. In your TeXML you will be able to
   * use your secret name, and this name will be replaced by the actual secret value
   * when processing the TeXML on Telnyx side. The secrets are not visible in any
   * logs.
   *
   * @example
   * ```ts
   * const response = await client.texml.secrets({
   *   name: 'My Secret Name',
   *   value: 'My Secret Value',
   * });
   * ```
   */
  secrets(body: TexmlSecretsParams, options?: RequestOptions): APIPromise<TexmlSecretsResponse> {
    return this._client.post('/texml/secrets', { body, ...options });
  }
}

export interface TexmlSecretsResponse {
  data?: TexmlSecretsResponse.Data;
}

export namespace TexmlSecretsResponse {
  export interface Data {
    name?: string;

    value?: 'REDACTED';
  }
}

export interface TexmlSecretsParams {
  /**
   * Name used as a reference for the secret, if the name already exists within the
   * account its value will be replaced
   */
  name: string;

  /**
   * Secret value which will be used when rendering the TeXML template
   */
  value: string;
}

Texml.Accounts = Accounts;
Texml.Calls = Calls;

export declare namespace Texml {
  export { type TexmlSecretsResponse as TexmlSecretsResponse, type TexmlSecretsParams as TexmlSecretsParams };

  export {
    Accounts as Accounts,
    type TexmlGetCallRecordingResponseBody as TexmlGetCallRecordingResponseBody,
    type TexmlRecordingSubresourcesUris as TexmlRecordingSubresourcesUris,
    type AccountRetrieveRecordingsJsonResponse as AccountRetrieveRecordingsJsonResponse,
    type AccountRetrieveTranscriptionsJsonResponse as AccountRetrieveTranscriptionsJsonResponse,
    type AccountRetrieveRecordingsJsonParams as AccountRetrieveRecordingsJsonParams,
    type AccountRetrieveTranscriptionsJsonParams as AccountRetrieveTranscriptionsJsonParams,
  };

  export {
    Calls as Calls,
    type CallUpdateResponse as CallUpdateResponse,
    type CallInitiateResponse as CallInitiateResponse,
    type CallUpdateParams as CallUpdateParams,
    type CallInitiateParams as CallInitiateParams,
  };
}
