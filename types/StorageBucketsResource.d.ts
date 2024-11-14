import {paths} from './TelnyxAPI.js';

declare module 'telnyx' {
  namespace Telnyx {
    type StorageBucketsUsageName =
      paths['/storage/buckets/{bucketName}/usage/storage']['get']['parameters']['path']['bucketName'];

    type StorageBucketsUsageResponse =
      paths['/storage/buckets/{bucketName}/usage/storage']['get']['responses']['200']['content']['application/json'];

    type StorageBucketsAPIUsageName =
      paths['/storage/buckets/{bucketName}/usage/api']['get']['parameters']['path']['bucketName'];

    type StorageBucketsAPIUsageResponse =
      paths['/storage/buckets/{bucketName}/usage/api']['get']['responses']['200']['content']['application/json'];

    type StorageBucketsSSLCertificateName =
      paths['/storage/buckets/{bucketName}/ssl_certificate']['get']['parameters']['path']['bucketName'];

    type StorageBucketsAddSSLCertificateName =
      paths['/storage/buckets/{bucketName}/ssl_certificate']['put']['parameters']['path']['bucketName'];

    type StorageBucketsDelSSLCertificateName =
      paths['/storage/buckets/{bucketName}/ssl_certificate']['delete']['parameters']['path']['bucketName'];

    type StorageBucketsAddSSLCertificateOptionalParams = NonNullable<
      paths['/storage/buckets/{bucketName}/ssl_certificate']['put']['requestBody']
    >['content']['multipart/form-data'];

    type StorageBucketsAddSSLCertificateParams =
      | StorageBucketsAddSSLCertificateOptionalParams
      | Record<string, never>;

    type StorageBucketsSSLCertificateResponse =
      paths['/storage/buckets/{bucketName}/ssl_certificate']['get']['responses']['200']['content']['application/json'];

    type StorageBucketsAddSSLCertificateResponse =
      paths['/storage/buckets/{bucketName}/ssl_certificate']['put']['responses']['200']['content']['application/json'];

    type StorageBucketsDelSSLCertificateResponse =
      paths['/storage/buckets/{bucketName}/ssl_certificate']['delete']['responses']['200']['content']['application/json'];

    class StorageBucketsResource {
      usage(
        bucketName: StorageBucketsUsageName,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.StorageBucketsUsageResponse>>;

      apiUsage(
        bucketName: StorageBucketsAPIUsageName,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.StorageBucketsAPIUsageResponse>>;

      sslCertificate(
        bucketName: StorageBucketsSSLCertificateName,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.StorageBucketsSSLCertificateResponse>>;

      addSslCertificate(
        bucketName: StorageBucketsSSLCertificateName,
        params: StorageBucketsAddSSLCertificateParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.StorageBucketsSSLCertificateResponse>>;

      delSslCertificate(
        bucketName: StorageBucketsSSLCertificateName,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.StorageBucketsSSLCertificateResponse>>;
    }
  }
}
