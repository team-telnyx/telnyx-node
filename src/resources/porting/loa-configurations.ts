// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class LoaConfigurations extends APIResource {
  /**
   * Create a LOA configuration.
   *
   * @example
   * ```ts
   * const loaConfiguration =
   *   await client.porting.loaConfigurations.create({
   *     address: {
   *       city: 'Austin',
   *       country_code: 'US',
   *       state: 'TX',
   *       street_address: '600 Congress Avenue',
   *       zip_code: '78701',
   *     },
   *     company_name: 'Telnyx',
   *     contact: {
   *       email: 'testing@telnyx.com',
   *       phone_number: '+12003270001',
   *     },
   *     logo: {
   *       document_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     },
   *     name: 'My LOA Configuration',
   *   });
   * ```
   */
  create(
    body: LoaConfigurationCreateParams,
    options?: RequestOptions,
  ): APIPromise<LoaConfigurationCreateResponse> {
    return this._client.post('/porting/loa_configurations', { body, ...options });
  }

  /**
   * Retrieve a specific LOA configuration.
   *
   * @example
   * ```ts
   * const loaConfiguration =
   *   await client.porting.loaConfigurations.retrieve(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<LoaConfigurationRetrieveResponse> {
    return this._client.get(path`/porting/loa_configurations/${id}`, options);
  }

  /**
   * Update a specific LOA configuration.
   *
   * @example
   * ```ts
   * const loaConfiguration =
   *   await client.porting.loaConfigurations.update(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       address: {
   *         city: 'Austin',
   *         country_code: 'US',
   *         state: 'TX',
   *         street_address: '600 Congress Avenue',
   *         zip_code: '78701',
   *       },
   *       company_name: 'Telnyx',
   *       contact: {
   *         email: 'testing@telnyx.com',
   *         phone_number: '+12003270001',
   *       },
   *       logo: {
   *         document_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *       },
   *       name: 'My LOA Configuration',
   *     },
   *   );
   * ```
   */
  update(
    id: string,
    body: LoaConfigurationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<LoaConfigurationUpdateResponse> {
    return this._client.patch(path`/porting/loa_configurations/${id}`, { body, ...options });
  }

  /**
   * List the LOA configurations.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const portingLoaConfiguration of client.porting.loaConfigurations.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: LoaConfigurationListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PortingLoaConfigurationsDefaultFlatPagination, PortingLoaConfiguration> {
    return this._client.getAPIList(
      '/porting/loa_configurations',
      DefaultFlatPagination<PortingLoaConfiguration>,
      { query, ...options },
    );
  }

  /**
   * Delete a specific LOA configuration.
   *
   * @example
   * ```ts
   * await client.porting.loaConfigurations.delete(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/porting/loa_configurations/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Preview the LOA template that would be generated without need to create LOA
   * configuration.
   *
   * @example
   * ```ts
   * const response =
   *   await client.porting.loaConfigurations.preview0({
   *     address: {
   *       city: 'Austin',
   *       country_code: 'US',
   *       state: 'TX',
   *       street_address: '600 Congress Avenue',
   *       zip_code: '78701',
   *     },
   *     company_name: 'Telnyx',
   *     contact: {
   *       email: 'testing@telnyx.com',
   *       phone_number: '+12003270001',
   *     },
   *     logo: {
   *       document_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     },
   *     name: 'My LOA Configuration',
   *   });
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  preview0(body: LoaConfigurationPreview0Params, options?: RequestOptions): APIPromise<Response> {
    return this._client.post('/porting/loa_configuration/preview', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: 'application/pdf' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Preview a specific LOA configuration.
   *
   * @example
   * ```ts
   * const response =
   *   await client.porting.loaConfigurations.preview1(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  preview1(id: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/porting/loa_configurations/${id}/preview`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/pdf' }, options?.headers]),
      __binaryResponse: true,
    });
  }
}

export type PortingLoaConfigurationsDefaultFlatPagination = DefaultFlatPagination<PortingLoaConfiguration>;

export interface PortingLoaConfiguration {
  /**
   * Uniquely identifies the LOA configuration.
   */
  id?: string;

  /**
   * The address of the company.
   */
  address?: PortingLoaConfiguration.Address;

  /**
   * The name of the company
   */
  company_name?: string;

  /**
   * The contact information of the company.
   */
  contact?: PortingLoaConfiguration.Contact;

  /**
   * ISO 8601 formatted date indicating when the resource was created.
   */
  created_at?: string;

  /**
   * The logo to be used in the LOA.
   */
  logo?: PortingLoaConfiguration.Logo;

  /**
   * The name of the LOA configuration
   */
  name?: string;

  /**
   * The organization that owns the LOA configuration
   */
  organization_id?: string;

  /**
   * Identifies the type of the resource.
   */
  record_type?: string;

  /**
   * ISO 8601 formatted date indicating when the resource was updated.
   */
  updated_at?: string;
}

export namespace PortingLoaConfiguration {
  /**
   * The address of the company.
   */
  export interface Address {
    /**
     * The locality of the company
     */
    city?: string;

    /**
     * The country code of the company
     */
    country_code?: string;

    /**
     * The extended address of the company
     */
    extended_address?: string;

    /**
     * The administrative area of the company
     */
    state?: string;

    /**
     * The street address of the company
     */
    street_address?: string;

    /**
     * The postal code of the company
     */
    zip_code?: string;
  }

  /**
   * The contact information of the company.
   */
  export interface Contact {
    /**
     * The email address of the contact
     */
    email?: string;

    /**
     * The phone number of the contact
     */
    phone_number?: string;
  }

  /**
   * The logo to be used in the LOA.
   */
  export interface Logo {
    /**
     * The content type of the logo.
     */
    content_type?: 'image/png';

    /**
     * Identifies the document that contains the logo.
     */
    document_id?: string;
  }
}

export interface LoaConfigurationCreateResponse {
  data?: PortingLoaConfiguration;
}

export interface LoaConfigurationRetrieveResponse {
  data?: PortingLoaConfiguration;
}

export interface LoaConfigurationUpdateResponse {
  data?: PortingLoaConfiguration;
}

export interface LoaConfigurationCreateParams {
  /**
   * The address of the company.
   */
  address: LoaConfigurationCreateParams.Address;

  /**
   * The name of the company
   */
  company_name: string;

  /**
   * The contact information of the company.
   */
  contact: LoaConfigurationCreateParams.Contact;

  /**
   * The logo of the LOA configuration
   */
  logo: LoaConfigurationCreateParams.Logo;

  /**
   * The name of the LOA configuration
   */
  name: string;
}

export namespace LoaConfigurationCreateParams {
  /**
   * The address of the company.
   */
  export interface Address {
    /**
     * The locality of the company
     */
    city: string;

    /**
     * The country code of the company
     */
    country_code: string;

    /**
     * The administrative area of the company
     */
    state: string;

    /**
     * The street address of the company
     */
    street_address: string;

    /**
     * The postal code of the company
     */
    zip_code: string;

    /**
     * The extended address of the company
     */
    extended_address?: string;
  }

  /**
   * The contact information of the company.
   */
  export interface Contact {
    /**
     * The email address of the contact
     */
    email: string;

    /**
     * The phone number of the contact
     */
    phone_number: string;
  }

  /**
   * The logo of the LOA configuration
   */
  export interface Logo {
    /**
     * The document identification
     */
    document_id: string;
  }
}

export interface LoaConfigurationUpdateParams {
  /**
   * The address of the company.
   */
  address: LoaConfigurationUpdateParams.Address;

  /**
   * The name of the company
   */
  company_name: string;

  /**
   * The contact information of the company.
   */
  contact: LoaConfigurationUpdateParams.Contact;

  /**
   * The logo of the LOA configuration
   */
  logo: LoaConfigurationUpdateParams.Logo;

  /**
   * The name of the LOA configuration
   */
  name: string;
}

export namespace LoaConfigurationUpdateParams {
  /**
   * The address of the company.
   */
  export interface Address {
    /**
     * The locality of the company
     */
    city: string;

    /**
     * The country code of the company
     */
    country_code: string;

    /**
     * The administrative area of the company
     */
    state: string;

    /**
     * The street address of the company
     */
    street_address: string;

    /**
     * The postal code of the company
     */
    zip_code: string;

    /**
     * The extended address of the company
     */
    extended_address?: string;
  }

  /**
   * The contact information of the company.
   */
  export interface Contact {
    /**
     * The email address of the contact
     */
    email: string;

    /**
     * The phone number of the contact
     */
    phone_number: string;
  }

  /**
   * The logo of the LOA configuration
   */
  export interface Logo {
    /**
     * The document identification
     */
    document_id: string;
  }
}

export interface LoaConfigurationListParams extends DefaultFlatPaginationParams {}

export interface LoaConfigurationPreview0Params {
  /**
   * The address of the company.
   */
  address: LoaConfigurationPreview0Params.Address;

  /**
   * The name of the company
   */
  company_name: string;

  /**
   * The contact information of the company.
   */
  contact: LoaConfigurationPreview0Params.Contact;

  /**
   * The logo of the LOA configuration
   */
  logo: LoaConfigurationPreview0Params.Logo;

  /**
   * The name of the LOA configuration
   */
  name: string;
}

export namespace LoaConfigurationPreview0Params {
  /**
   * The address of the company.
   */
  export interface Address {
    /**
     * The locality of the company
     */
    city: string;

    /**
     * The country code of the company
     */
    country_code: string;

    /**
     * The administrative area of the company
     */
    state: string;

    /**
     * The street address of the company
     */
    street_address: string;

    /**
     * The postal code of the company
     */
    zip_code: string;

    /**
     * The extended address of the company
     */
    extended_address?: string;
  }

  /**
   * The contact information of the company.
   */
  export interface Contact {
    /**
     * The email address of the contact
     */
    email: string;

    /**
     * The phone number of the contact
     */
    phone_number: string;
  }

  /**
   * The logo of the LOA configuration
   */
  export interface Logo {
    /**
     * The document identification
     */
    document_id: string;
  }
}

export declare namespace LoaConfigurations {
  export {
    type PortingLoaConfiguration as PortingLoaConfiguration,
    type LoaConfigurationCreateResponse as LoaConfigurationCreateResponse,
    type LoaConfigurationRetrieveResponse as LoaConfigurationRetrieveResponse,
    type LoaConfigurationUpdateResponse as LoaConfigurationUpdateResponse,
    type PortingLoaConfigurationsDefaultFlatPagination as PortingLoaConfigurationsDefaultFlatPagination,
    type LoaConfigurationCreateParams as LoaConfigurationCreateParams,
    type LoaConfigurationUpdateParams as LoaConfigurationUpdateParams,
    type LoaConfigurationListParams as LoaConfigurationListParams,
    type LoaConfigurationPreview0Params as LoaConfigurationPreview0Params,
  };
}
