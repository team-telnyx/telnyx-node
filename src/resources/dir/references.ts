// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Submit and manage the two business references and one financial reference that vouch for a DIR. References are contacted to confirm the business identity during vetting.
 */
export class References extends APIResource {
  /**
   * List the business and financial references submitted for a DIR.
   *
   * Returns the two business references (slots 1 and 2) followed by the single
   * financial reference. Each entry carries its `ref_type` and `slot`, which
   * together address the reference when updating it, alongside the details supplied
   * when it was submitted (name, title, organization, relationship, phone, email,
   * timezone). No internal identifiers are exposed. Returns an empty list when no
   * references were submitted.
   *
   * @example
   * ```ts
   * const referenceList = await client.dir.references.list(
   *   '16635d38-75a6-4481-82e8-69af60e05011',
   * );
   * ```
   */
  list(dirID: string, options?: RequestOptions): APIPromise<ReferenceList> {
    return this._client.get(path`/dir/${dirID}/references`, options);
  }

  /**
   * Submit the two business references and one financial reference for a DIR.
   *
   * The DIR's authorizer email must be verified first (see the email-verification
   * endpoint). Until it is, this returns `409` and no references are stored.
   *
   * The request body carries exactly two business references plus one financial
   * reference. The first submission stores them and returns `201`. Resubmitting
   * returns `200`: identical values are simply confirmed and nothing is written,
   * while changed values replace those references.
   *
   * Replacing a reference is allowed only while the DIR itself is still editable,
   * the same window in which a single reference may be updated; once the DIR has
   * been submitted for vetting this returns `400`. A replaced reference's pending
   * verification call is cancelled and its dial-in code stops working, and the
   * replacement contact is emailed fresh scheduling details. References whose
   * details did not change keep their existing call, code, and the notice already
   * sent to them.
   *
   * The response always echoes the stored references in the same shape as the GET.
   *
   * Who qualifies: the two business references confirm the company's reputation and
   * operations. Each should be a senior contact at an organization the business
   * works with, such as a vendor, partner, or client: a C-suite executive (CEO, CFO,
   * CTO, COO), an owner or founder as reflected in the company's corporate records,
   * or a senior manager, director, or executive. The financial reference confirms
   * the company pays its bills and should be a licensed certified public accountant
   * (CPA) the company uses, a contact at a bank or financial institution that has a
   * relationship with the company, or a reasonable alternative banking or financial
   * reference.
   *
   * @example
   * ```ts
   * const referenceList = await client.dir.references.create(
   *   '16635d38-75a6-4481-82e8-69af60e05011',
   *   {
   *     business_references: [
   *       {
   *         email: 'dana.reyes@example.com',
   *         full_name: 'Dana Reyes',
   *         phone_e164: '+14155550123',
   *         timezone: 'America/New_York',
   *       },
   *       {
   *         email: 'dana.reyes@example.com',
   *         full_name: 'Dana Reyes',
   *         phone_e164: '+14155550123',
   *         timezone: 'America/New_York',
   *       },
   *     ],
   *     financial_reference: {
   *       email: 'dana.reyes@example.com',
   *       full_name: 'Dana Reyes',
   *       phone_e164: '+14155550123',
   *       timezone: 'America/New_York',
   *     },
   *   },
   * );
   * ```
   */
  create(dirID: string, body: ReferenceCreateParams, options?: RequestOptions): APIPromise<ReferenceList> {
    return this._client.post(path`/dir/${dirID}/references`, { body, ...options });
  }

  /**
   * Partially update one reference, addressed by the DIR id plus the reference's
   * type (business or financial) and slot.
   *
   * Cosmetic fields (full name, job title, organization, relationship, email) are
   * always editable. The phone number and timezone may only be changed while a
   * scheduled call has not yet been dialed; if a call is in progress or all attempts
   * are complete, those fields are locked. Changing the timezone reschedules any
   * pending call into the new local calling window.
   *
   * @example
   * ```ts
   * const reference = await client.dir.references.update(1, {
   *   dir_id: '16635d38-75a6-4481-82e8-69af60e05011',
   *   ref_type: 'business',
   * });
   * ```
   */
  update(
    slot: number,
    params: ReferenceUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ReferenceUpdateResponse> {
    const { dir_id, ref_type, ...body } = params;
    return this._client.patch(path`/dir/${dir_id}/references/${ref_type}/${slot}`, { body, ...options });
  }
}

/**
 * A reference (business or financial) on a DIR, in the customer-facing shape. No
 * internal identifiers are exposed.
 */
export interface Reference {
  /**
   * Full name of the reference contact.
   */
  full_name: string;

  /**
   * Reference phone number in E.164 format.
   */
  phone_e164: string;

  /**
   * Always `dir_reference`.
   */
  record_type: 'dir_reference';

  /**
   * Whether this is a business reference or the financial reference.
   */
  ref_type: 'business' | 'financial';

  /**
   * Position within the reference type, counting from 1. Business references occupy
   * slots 1 and 2, in the order they were sent in the `business_references` array;
   * the financial reference occupies slot 1. Use this value together with `ref_type`
   * to address the reference when updating it.
   */
  slot: number;

  /**
   * IANA timezone id for the reference. Calls are only placed within the reference's
   * local 8am-9pm window.
   */
  timezone: string;

  /**
   * Reference contact email address.
   */
  email?: string | null;

  /**
   * Job title of the reference contact.
   */
  job_title?: string | null;

  /**
   * Organization the reference contact belongs to.
   */
  organization?: string | null;

  /**
   * How the reference contact is related to the registering business.
   */
  relationship_to_registrant?: string | null;
}

/**
 * One reference supplied at submit. The reference type is implied by the field
 * that carries it (business_references vs financial_reference).
 */
export interface ReferenceInput {
  /**
   * Reference contact email address. Required: the reference is emailed scheduling
   * and dial-in notices.
   */
  email: string;

  /**
   * Full name of the reference contact.
   */
  full_name: string;

  /**
   * Reference phone number in E.164 format, e.g. +14155550123.
   */
  phone_e164: string;

  /**
   * IANA timezone id for the reference (e.g. America/New_York). Required: calls are
   * only placed within the reference's local 8am-9pm window.
   */
  timezone: string;

  /**
   * Job title of the reference contact.
   */
  job_title?: string | null;

  /**
   * Organization the reference contact belongs to.
   */
  organization?: string | null;

  /**
   * How the reference contact is related to the registering business.
   */
  relationship_to_registrant?: string | null;
}

export interface ReferenceList {
  data: Array<Reference>;
}

export interface ReferenceUpdateResponse {
  /**
   * A reference (business or financial) on a DIR, in the customer-facing shape. No
   * internal identifiers are exposed.
   */
  data: Reference;
}

export interface ReferenceCreateParams {
  /**
   * Exactly two business references. Array order determines each one's slot: the
   * first entry becomes slot 1 and the second becomes slot 2. Those slots are what
   * you pass when updating a single reference later. Each should be a senior contact
   * who can speak to your company's reputation and operations: a C-suite executive
   * (CEO, CFO, CTO, COO), an owner or founder as reflected in your corporate
   * records, or a senior manager, director, or executive at an organization you work
   * with, such as a vendor, partner, or client.
   */
  business_references: Array<ReferenceInput>;

  /**
   * One reference supplied at submit. The reference type is implied by the field
   * that carries it (business_references vs financial_reference).
   */
  financial_reference: ReferenceInput;
}

export interface ReferenceUpdateParams {
  /**
   * Path param: The DIR id. Lowercase UUID.
   */
  dir_id: string;

  /**
   * Path param: Reference type to address.
   */
  ref_type: 'business' | 'financial';

  /**
   * Body param: Reference contact email address.
   */
  email?: string;

  /**
   * Body param: Full name of the reference contact.
   */
  full_name?: string;

  /**
   * Body param: Job title of the reference contact.
   */
  job_title?: string | null;

  /**
   * Body param: Organization the reference contact belongs to.
   */
  organization?: string | null;

  /**
   * Body param: Reference phone number in E.164 format.
   */
  phone_e164?: string;

  /**
   * Body param: How the reference contact is related to the registering business.
   */
  relationship_to_registrant?: string | null;

  /**
   * Body param: IANA timezone id for the reference.
   */
  timezone?: string;
}

export declare namespace References {
  export {
    type Reference as Reference,
    type ReferenceInput as ReferenceInput,
    type ReferenceList as ReferenceList,
    type ReferenceUpdateResponse as ReferenceUpdateResponse,
    type ReferenceCreateParams as ReferenceCreateParams,
    type ReferenceUpdateParams as ReferenceUpdateParams,
  };
}
