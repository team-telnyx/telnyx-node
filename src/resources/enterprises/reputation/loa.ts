// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ReputationAPI from './reputation';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Phone-number reputation monitoring (spam-score lookup and tracking).
 */
export class Loa extends APIResource {
  /**
   * Point the enterprise's reputation settings at a new signed LOA document. This
   * resets LOA approval to `pending`; the new document must be approved before
   * additional phone numbers can be added.
   *
   * @example
   * ```ts
   * const enterpriseReputationPublicWrapped =
   *   await client.enterprises.reputation.loa.update(
   *     '4a6192a4-573d-446d-b3ce-aff9117272a6',
   *     {
   *       loa_document_id:
   *         '2a7e8337-e803-4057-a4ae-26c40eb0bc6c',
   *     },
   *   );
   * ```
   */
  update(
    enterpriseID: string,
    body: LoaUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ReputationAPI.EnterpriseReputationPublicWrapped> {
    return this._client.patch(path`/enterprises/${enterpriseID}/reputation/loa`, { body, ...options });
  }

  /**
   * Render the LOA for this enterprise as a PDF. The enterprise identity, address,
   * and authorized-representative contact are taken from the enterprise record; the
   * optional `agent` block is supplied only when a third-party partner manages the
   * numbers. The response is the PDF itself (unsigned unless a `signature` is
   * provided). Sign it and upload it to the Telnyx Documents API
   * (`POST /v2/documents`, see https://developers.telnyx.com/api/documents) to
   * obtain the `loa_document_id` required by `POST .../reputation`.
   *
   * @example
   * ```ts
   * const response =
   *   await client.enterprises.reputation.loa.render(
   *     '4a6192a4-573d-446d-b3ce-aff9117272a6',
   *   );
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  render(
    enterpriseID: string,
    body: LoaRenderParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Response> {
    return this._client.post(path`/enterprises/${enterpriseID}/reputation/loa`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: 'application/pdf' }, options?.headers]),
      __binaryResponse: true,
    });
  }
}

/**
 * Third-party reseller / partner managing the enterprise's phone numbers. Omit
 * when the enterprise works directly with Telnyx.
 */
export interface AgentInput {
  administrative_area: string;

  city: string;

  contact_email: string;

  contact_name: string;

  contact_phone: string;

  contact_title: string;

  country: string;

  legal_name: string;

  postal_code: string;

  street_address: string;

  dba?: string | null;

  extended_address?: string | null;
}

export interface LoaUpdateParams {
  /**
   * Id of the new signed LOA document (from the Telnyx Documents API). Changing it
   * resets LOA approval; the new document must be approved before more numbers can
   * be added.
   */
  loa_document_id: string;
}

export interface LoaRenderParams {
  /**
   * Third-party reseller / partner managing the enterprise's phone numbers. Omit
   * when the enterprise works directly with Telnyx.
   */
  agent?: AgentInput;

  /**
   * Optional signature embedded in the rendered PDF. When omitted the PDF is
   * returned unsigned for the customer to sign and upload.
   */
  signature?: LoaRenderParams.Signature;
}

export namespace LoaRenderParams {
  /**
   * Optional signature embedded in the rendered PDF. When omitted the PDF is
   * returned unsigned for the customer to sign and upload.
   */
  export interface Signature {
    /**
     * Base64-encoded signature image.
     */
    image_base64: string;

    signer_name?: string | null;
  }
}

export declare namespace Loa {
  export {
    type AgentInput as AgentInput,
    type LoaUpdateParams as LoaUpdateParams,
    type LoaRenderParams as LoaRenderParams,
  };
}
