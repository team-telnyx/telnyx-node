import {paths} from './TelnyxAPI.js';

declare module 'telnyx' {
  namespace Telnyx {
    type BrandsRetrieveId =
      paths['/brand/{brandId}']['get']['parameters']['path']['brandId'];

    type BrandsRetrieveParams =
      paths['/brand/{brandId}']['get']['parameters']['query'];

    type BrandsRetrieveResponse =
      paths['/brand/{brandId}']['get']['responses']['200']['content']['application/json'];

    type BrandsListParams = paths['/brand']['get']['parameters']['query'];

    type BrandsListResponse =
      paths['/brand']['get']['responses']['200']['content']['application/json'];

    type BrandsCreateParams =
      paths['/brand']['post']['requestBody']['content']['application/json'];

    type BrandsCreateResponse =
      paths['/brand']['post']['responses']['200']['content']['application/json'];

    type BrandsDelId =
      paths['/brand/{brandId}']['delete']['parameters']['path']['brandId'];

    type BrandsDelParams =
      paths['/brand/{brandId}']['delete']['parameters']['query'];

    type BrandsDelResponse =
      paths['/brand/{brandId}']['delete']['responses']['200']['content']['application/json'];

    type BrandsUpdateId =
      paths['/brand/{brandId}']['put']['parameters']['path']['brandId'];

    type BrandsUpdateParams =
      paths['/brand/{brandId}']['put']['requestBody']['content']['application/json'];

    type BrandsUpdateResponse =
      paths['/brand/{brandId}']['put']['responses']['200']['content']['application/json'];

    type BrandsResend2faEmailId =
      paths['/brand/{brandId}/2faEmail']['post']['parameters']['path']['brandId'];

    type BrandsResend2faEmailResponse =
      paths['/brand/{brandId}/2faEmail']['post']['responses']['200']['content'];

    type BrandsListExternalVettingsId =
      paths['/brand/{brandId}/externalVetting']['get']['parameters']['path']['brandId'];

    type BrandsListExternalVettingsResponse =
      paths['/brand/{brandId}/externalVetting']['get']['responses']['200']['content']['application/json'];

    type BrandsImportExternalVettingsId =
      paths['/brand/{brandId}/externalVetting']['put']['parameters']['path']['brandId'];

    type BrandsImportExternalVettingsParams =
      paths['/brand/{brandId}/externalVetting']['put']['requestBody']['content']['application/json'];

    type BrandsImportExternalVettingsResponse =
      paths['/brand/{brandId}/externalVetting']['put']['responses']['200']['content']['application/json'];

    type BrandsOrderExternalVettingsId =
      paths['/brand/{brandId}/externalVetting']['post']['parameters']['path']['brandId'];

    type BrandsOrderExternalVettingsParams =
      paths['/brand/{brandId}/externalVetting']['post']['requestBody']['content']['application/json'];

    type BrandsOrderExternalVettingsResponse =
      paths['/brand/{brandId}/externalVetting']['post']['responses']['200']['content']['application/json'];

    type BrandsRevetid =
      paths['/brand/{brandId}/revet']['put']['parameters']['path']['brandId'];

    type BrandsRevetParams =
      paths['/brand/{brandId}/externalVetting']['put']['requestBody']['content']['application/json'];

    type BrandsRevetResponse =
      paths['/brand/{brandId}/revet']['put']['responses']['200']['content']['application/json'];

    type BrandsFeedbackRetrieveId =
      paths['/brand/feedback/{brandId}']['get']['parameters']['path']['brandId'];

    type BrandsFeedbackRetrieveResponse =
      paths['/brand/feedback/{brandId}']['get']['responses']['200']['content']['application/json'];

    class BrandsResource {
      retrieve(
        id: BrandsRetrieveId,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.BrandsRetrieveResponse>>;

      list(
        params?: BrandsListParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.BrandsListResponse>>;

      create(
        params: BrandsCreateParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.BrandsCreateResponse>>;

      del(
        id: BrandsDelId,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.BrandsDelResponse>>;

      update(
        id: BrandsUpdateId,
        params: BrandsUpdateParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.BrandsUpdateResponse>>;

      resend2faEmail(
        id: BrandsResend2faEmailId,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.BrandsResend2faEmailResponse>>;

      listExternalVettings(
        id: BrandsListExternalVettingsId,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.BrandsListExternalVettingsResponse>>;

      importExternalVettings(
        id: BrandsImportExternalVettingsId,
        params: BrandsImportExternalVettingsParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.BrandsImportExternalVettingsResponse>>;

      orderExternalVettings(
        id: BrandsOrderExternalVettingsId,
        params: BrandsOrderExternalVettingsParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.BrandsOrderExternalVettingsResponse>>;

      revet(
        id: BrandsRevetid,
        params: BrandsRevetParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.BrandsRevetResponse>>;

      retrieveFeedback(
        id: BrandsFeedbackRetrieveId,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.BrandsFeedbackRetrieveResponse>>;
    }
  }
}
