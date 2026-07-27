// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Call Recordings operations.
 */
export class CustomStorageCredentials extends APIResource {
  /**
   * Deletes a stored custom credentials configuration.
   *
   * @example
   * ```ts
   * await client.customStorageCredentials.delete(
   *   'connection_id',
   * );
   * ```
   */
  delete(connectionID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/custom_storage_credentials/${connectionID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Returns the information about custom storage credentials.
   *
   * @example
   * ```ts
   * const credentialsResponse =
   *   await client.customStorageCredentials.retrieve(
   *     'connection_id',
   *   );
   * ```
   */
  retrieve(connectionID: string, options?: RequestOptions): APIPromise<CredentialsResponse> {
    return this._client.get(path`/custom_storage_credentials/${connectionID}`, options);
  }

  /**
   * Creates a custom storage credentials configuration.
   *
   * @example
   * ```ts
   * const credentialsResponse =
   *   await client.customStorageCredentials.create(
   *     'connection_id',
   *     {
   *       backend: 'gcs',
   *       configuration: { backend: 'gcs' },
   *     },
   *   );
   * ```
   */
  create(
    connectionID: string,
    body: CustomStorageCredentialCreateParams,
    options?: RequestOptions,
  ): APIPromise<CredentialsResponse> {
    return this._client.post(path`/custom_storage_credentials/${connectionID}`, { body, ...options });
  }

  /**
   * Updates a stored custom credentials configuration.
   *
   * @example
   * ```ts
   * const credentialsResponse =
   *   await client.customStorageCredentials.update(
   *     'connection_id',
   *     {
   *       backend: 'gcs',
   *       configuration: { backend: 'gcs' },
   *     },
   *   );
   * ```
   */
  update(
    connectionID: string,
    body: CustomStorageCredentialUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CredentialsResponse> {
    return this._client.put(path`/custom_storage_credentials/${connectionID}`, { body, ...options });
  }
}

export interface AzureConfigurationData {
  /**
   * Storage backend type
   */
  backend: 'azure';

  /**
   * Azure Blob Storage account key.
   */
  account_key?: string;

  /**
   * Azure Blob Storage account name.
   */
  account_name?: string;

  /**
   * Name of the bucket to be used to store recording files.
   */
  bucket?: string;
}

export interface CredentialsResponse {
  /**
   * Uniquely identifies a Telnyx application (Call Control, TeXML) or Sip connection
   * resource.
   */
  connection_id: string;

  data: CustomStorageConfiguration;

  /**
   * Identifies record type.
   */
  record_type: 'custom_storage_credentials';
}

export interface CustomStorageConfiguration {
  backend: 'gcs' | 's3' | 'azure';

  configuration: GcsConfigurationData | S3ConfigurationData | AzureConfigurationData;
}

export interface GcsConfigurationData {
  /**
   * Storage backend type
   */
  backend: 'gcs';

  /**
   * Name of the bucket to be used to store recording files.
   */
  bucket?: string;

  /**
   * Opaque credential token used to authenticate and authorize with storage
   * provider.
   */
  credentials?: string;
}

export interface S3ConfigurationData {
  /**
   * Storage backend type
   */
  backend: 's3';

  /**
   * AWS credentials access key id.
   */
  aws_access_key_id?: string;

  /**
   * AWS secret access key.
   */
  aws_secret_access_key?: string;

  /**
   * Name of the bucket to be used to store recording files.
   */
  bucket?: string;

  /**
   * Region where the bucket is located.
   */
  region?: string;
}

export interface CustomStorageCredentialCreateParams {
  backend: 'gcs' | 's3' | 'azure';

  configuration: GcsConfigurationData | S3ConfigurationData | AzureConfigurationData;
}

export interface CustomStorageCredentialUpdateParams {
  backend: 'gcs' | 's3' | 'azure';

  configuration: GcsConfigurationData | S3ConfigurationData | AzureConfigurationData;
}

export declare namespace CustomStorageCredentials {
  export {
    type AzureConfigurationData as AzureConfigurationData,
    type CredentialsResponse as CredentialsResponse,
    type CustomStorageConfiguration as CustomStorageConfiguration,
    type GcsConfigurationData as GcsConfigurationData,
    type S3ConfigurationData as S3ConfigurationData,
    type CustomStorageCredentialCreateParams as CustomStorageCredentialCreateParams,
    type CustomStorageCredentialUpdateParams as CustomStorageCredentialUpdateParams,
  };
}
