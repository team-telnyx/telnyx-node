// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ExternalVerificationAPI from './external-verification';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Phone-number reputation monitoring (spam-score lookup and tracking).
 */
export class ExternalVerification extends APIResource {
  /**
   * Get the review status of the enterprise's ownership proof for phone numbers
   * hosted with another provider. Returns 404 when no proof has been submitted.
   *
   * @example
   * ```ts
   * const externalVerificationWrapped =
   *   await client.enterprises.reputation.externalVerification.list(
   *     '4a6192a4-573d-446d-b3ce-aff9117272a6',
   *   );
   * ```
   */
  list(enterpriseID: string, options?: RequestOptions): APIPromise<ExternalVerificationWrapped> {
    return this._client.get(path`/enterprises/${enterpriseID}/reputation/external_verification`, options);
  }

  /**
   * Request permission to add phone numbers that the enterprise owns but that are
   * hosted with another provider. Submit one or more uploaded documents proving
   * ownership, such as a carrier invoice or account statement. The request is
   * reviewed once per enterprise. While it is `pending` or `rejected` you can submit
   * again to replace the documents; once `approved` it cannot be changed.
   *
   * @example
   * ```ts
   * const externalVerificationWrapped =
   *   await client.enterprises.reputation.externalVerification.create(
   *     '4a6192a4-573d-446d-b3ce-aff9117272a6',
   *     {
   *       document_ids: [
   *         '2a7e8337-e803-4057-a4ae-26c40eb0bc6c',
   *       ],
   *     },
   *   );
   * ```
   */
  create(
    enterpriseID: string,
    body: ExternalVerificationCreateParams,
    options?: RequestOptions,
  ): APIPromise<ExternalVerificationWrapped> {
    return this._client.post(path`/enterprises/${enterpriseID}/reputation/external_verification`, {
      body,
      ...options,
    });
  }
}

/**
 * Review state of the ownership proof that allows adding phone numbers hosted with
 * another provider.
 */
export type ExternalVerificationStatus = 'pending' | 'approved' | 'rejected';

export interface ExternalVerificationWrapped {
  data: ExternalVerificationWrapped.Data;
}

export namespace ExternalVerificationWrapped {
  export interface Data {
    /**
     * The ownership-proof documents on file.
     */
    document_ids?: Array<string>;

    enterprise_id?: string;

    /**
     * The phone numbers you listed with the documents.
     */
    phone_numbers?: Array<string>;

    /**
     * Why the proof was rejected. Set only when `status` is `rejected`.
     */
    rejection_reason?: string | null;

    reviewed_at?: string | null;

    /**
     * Review state of the ownership proof that allows adding phone numbers hosted with
     * another provider.
     */
    status?: ExternalVerificationAPI.ExternalVerificationStatus;

    submitted_at?: string | null;
  }
}

export interface ExternalVerificationCreateParams {
  /**
   * Ids of uploaded documents (Documents API) proving the enterprise owns its phone
   * numbers hosted with another provider, for example a carrier invoice or account
   * statement.
   */
  document_ids: Array<string>;

  /**
   * Optional. The phone numbers hosted with another provider that the documents
   * cover, in E.164 format. Shown to the reviewer to match the documents to your
   * numbers; you can still add numbers that are not listed here, and each is checked
   * on its own.
   */
  phone_numbers?: Array<string>;
}

export declare namespace ExternalVerification {
  export {
    type ExternalVerificationStatus as ExternalVerificationStatus,
    type ExternalVerificationWrapped as ExternalVerificationWrapped,
    type ExternalVerificationCreateParams as ExternalVerificationCreateParams,
  };
}
