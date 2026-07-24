// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Manage Whatsapp phone numbers
 */
export class ConversationalComponents extends APIResource {
  /**
   * Get phone number conversational components
   *
   * @example
   * ```ts
   * const conversationalComponents =
   *   await client.whatsapp.phoneNumbers.conversationalComponents.list(
   *     'phone_number',
   *   );
   * ```
   */
  list(phoneNumber: string, options?: RequestOptions): APIPromise<ConversationalComponentListResponse> {
    return this._client.get(
      path`/v2/whatsapp/phone_numbers/${phoneNumber}/conversational_components`,
      options,
    );
  }

  /**
   * Update phone number conversational components
   *
   * @example
   * ```ts
   * const response =
   *   await client.whatsapp.phoneNumbers.conversationalComponents.patchAll(
   *     'phone_number',
   *   );
   * ```
   */
  patchAll(
    phoneNumber: string,
    body: ConversationalComponentPatchAllParams,
    options?: RequestOptions,
  ): APIPromise<ConversationalComponentPatchAllResponse> {
    return this._client.patch(path`/v2/whatsapp/phone_numbers/${phoneNumber}/conversational_components`, {
      body,
      ...options,
    });
  }
}

export interface ConversationalComponentListResponse {
  data?: ConversationalComponentListResponse.Data;
}

export namespace ConversationalComponentListResponse {
  export interface Data {
    /**
     * List of commands
     */
    commands?: Array<Data.Command>;

    /**
     * List of ice breakers
     */
    ice_breakers?: Array<string>;

    /**
     * Phone number in E164 format
     */
    phone_number?: string;

    record_type?: string;
  }

  export namespace Data {
    export interface Command {
      command?: string;

      description?: string;
    }
  }
}

export interface ConversationalComponentPatchAllResponse {
  data?: ConversationalComponentPatchAllResponse.Data;
}

export namespace ConversationalComponentPatchAllResponse {
  export interface Data {
    /**
     * List of commands
     */
    commands?: Array<Data.Command>;

    /**
     * List of ice breakers
     */
    ice_breakers?: Array<string>;

    /**
     * Phone number in E164 format
     */
    phone_number?: string;

    record_type?: string;
  }

  export namespace Data {
    export interface Command {
      command?: string;

      description?: string;
    }
  }
}

export interface ConversationalComponentPatchAllParams {
  /**
   * List of commands
   */
  commands?: Array<ConversationalComponentPatchAllParams.Command>;

  /**
   * List of ice breakers
   */
  ice_breakers?: Array<string>;
}

export namespace ConversationalComponentPatchAllParams {
  export interface Command {
    command?: string;

    description?: string;
  }
}

export declare namespace ConversationalComponents {
  export {
    type ConversationalComponentListResponse as ConversationalComponentListResponse,
    type ConversationalComponentPatchAllResponse as ConversationalComponentPatchAllResponse,
    type ConversationalComponentPatchAllParams as ConversationalComponentPatchAllParams,
  };
}
