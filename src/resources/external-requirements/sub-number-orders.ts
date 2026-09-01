// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Requirement Groups
 */
export class SubNumberOrders extends APIResource {
  /**
   * Returns the input fields an action requirement needs and the current requirement
   * action for a sub number order. Action requirements are fulfilled by an external
   * step rather than by uploading documents. Australia mobile ID verification is
   * currently the only action requirement. Once a verification link has been
   * generated, it is returned in `requirement_action.value`.
   *
   * @example
   * ```ts
   * const subNumberOrder =
   *   await client.externalRequirements.subNumberOrders.retrieve(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       regulatory_requirement_id:
   *         '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     },
   *   );
   * ```
   */
  retrieve(
    subNumberOrderID: string,
    params: SubNumberOrderRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<SubNumberOrderRetrieveResponse> {
    const { regulatory_requirement_id } = params;
    return this._client.get(
      path`/external_requirements/${regulatory_requirement_id}/sub_number_orders/${subNumberOrderID}`,
      options,
    );
  }

  /**
   * Submits the end user's details to the external verification provider and returns
   * the requirement action. Australia mobile ID verification is currently the only
   * action requirement. It generates a unique Onfido verification link, returned in
   * `requirement_action.value`, which you share with the end user. The end user's
   * `first_name` and `last_name` must be nested inside a `requirement` object;
   * sending them at the top level is rejected.
   *
   * @example
   * ```ts
   * const subNumberOrder =
   *   await client.externalRequirements.subNumberOrders.update(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       regulatory_requirement_id:
   *         '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *       requirement: { first_name: 'Jane', last_name: 'Doe' },
   *     },
   *   );
   * ```
   */
  update(
    subNumberOrderID: string,
    params: SubNumberOrderUpdateParams,
    options?: RequestOptions,
  ): APIPromise<SubNumberOrderUpdateResponse> {
    const { regulatory_requirement_id, ...body } = params;
    return this._client.post(
      path`/external_requirements/${regulatory_requirement_id}/sub_number_orders/${subNumberOrderID}`,
      { body, ...options },
    );
  }
}

export interface SubNumberOrderRetrieveResponse {
  data?: SubNumberOrderRetrieveResponse.Data;
}

export namespace SubNumberOrderRetrieveResponse {
  export interface Data {
    /**
     * The fields the end user must provide to fulfill this requirement.
     */
    fields_required?: Array<Data.FieldsRequired>;

    regulatory_requirement_id?: string;

    requirement_action?: Data.RequirementAction;
  }

  export namespace Data {
    export interface FieldsRequired {
      description?: string;

      /**
       * The field name to send inside the `requirement` object on the POST.
       */
      name?: string;

      type?: string;

      /**
       * The value already stored for this field, or null if not yet provided.
       */
      value?: string | null;
    }

    export interface RequirementAction {
      /**
       * The type of action the end user must complete.
       */
      type?: string;

      /**
       * The action value. For ID verification this is the verification link URL, or null
       * until it has been generated.
       */
      value?: string | null;
    }
  }
}

export interface SubNumberOrderUpdateResponse {
  data?: SubNumberOrderUpdateResponse.Data;
}

export namespace SubNumberOrderUpdateResponse {
  export interface Data {
    regulatory_requirement_id?: string;

    requirement_action?: Data.RequirementAction;

    sub_order_id?: string;
  }

  export namespace Data {
    export interface RequirementAction {
      type?: string;

      /**
       * For Australia mobile ID verification, the unique Onfido verification link to
       * share with the end user.
       */
      value?: string | null;
    }
  }
}

export interface SubNumberOrderRetrieveParams {
  /**
   * The ID of the regulatory (action) requirement. For Australia mobile ID
   * verification this is `b7c72fb8-fa08-4529-aaf6-b9117d3f3698`.
   */
  regulatory_requirement_id: string;
}

export interface SubNumberOrderUpdateParams {
  /**
   * Path param: The ID of the regulatory (action) requirement. For Australia mobile
   * ID verification this is `b7c72fb8-fa08-4529-aaf6-b9117d3f3698`.
   */
  regulatory_requirement_id: string;

  /**
   * Body param: The end user's identity details for the action requirement.
   * Australia mobile ID verification is currently the only action requirement. It
   * requires `first_name` and `last_name`, the same fields the corresponding GET
   * lists in `fields_required`.
   */
  requirement: SubNumberOrderUpdateParams.Requirement;
}

export namespace SubNumberOrderUpdateParams {
  /**
   * The end user's identity details for the action requirement. Australia mobile ID
   * verification is currently the only action requirement. It requires `first_name`
   * and `last_name`, the same fields the corresponding GET lists in
   * `fields_required`.
   */
  export interface Requirement {
    /**
     * The end user's first name.
     */
    first_name: string;

    /**
     * The end user's last name.
     */
    last_name: string;
  }
}

export declare namespace SubNumberOrders {
  export {
    type SubNumberOrderRetrieveResponse as SubNumberOrderRetrieveResponse,
    type SubNumberOrderUpdateResponse as SubNumberOrderUpdateResponse,
    type SubNumberOrderRetrieveParams as SubNumberOrderRetrieveParams,
    type SubNumberOrderUpdateParams as SubNumberOrderUpdateParams,
  };
}
