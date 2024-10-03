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

    type BrandsResend2faEmailPathParams =
      paths['/brand/{brandId}/2faEmail']['post']['parameters']['path'];

    type BrandsResend2faEmailResponse =
      paths['/brand/{brandId}/2faEmail']['post']['responses']['200']['content'];

    type BrandsListExternalVettingsPathParams =
      paths['/brand/{brandId}/externalVetting']['get']['parameters']['path'];

    type BrandsListExternalVettingsResponse =
      paths['/brand/{brandId}/externalVetting']['get']['responses']['200']['content']['application/json'];

    type BrandsExportExternalVettingsPathParams =
      paths['/brand/{brandId}/externalVetting']['put']['parameters']['path'];

    type BrandsExportExternalVettingsParams =
      paths['/brand/{brandId}/externalVetting']['put']['requestBody']['content']['application/json'];

    type BrandsExportExternalVettingsResponse =
      paths['/brand/{brandId}/externalVetting']['put']['responses']['200']['content']['application/json'];

    type BrandsOrderExternalVettingsPathParams =
      paths['/brand/{brandId}/externalVetting']['post']['parameters']['path'];

    type BrandsOrderExternalVettingsParams =
      paths['/brand/{brandId}/externalVetting']['post']['requestBody']['content']['application/json'];

    type BrandsOrderExternalVettingsResponse =
      paths['/brand/{brandId}/externalVetting']['post']['responses']['200']['content']['application/json'];

    type BrandsRevetPathParams =
      paths['/brand/{brandId}/revet']['put']['parameters']['path'];

    type BrandsRevetParams =
      paths['/brand/{brandId}/externalVetting']['put']['requestBody']['content']['application/json'];

    type BrandsRevetResponse =
      paths['/brand/{brandId}/revet']['put']['responses']['200']['content']['application/json'];

    type BrandsFeedbackPathParams =
      paths['/brand/feedback/{brandId}']['get']['parameters']['path'];

    type BrandsFeedbackResponse =
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
        pathParams: BrandsResend2faEmailPathParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.BrandsResend2faEmailResponse>>;

      listExternalVettings(
        pathParams: BrandsListExternalVettingsPathParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.BrandsListExternalVettingsResponse>>;

      exportExternalVettings(
        pathParams: BrandsExportExternalVettingsPathParams,
        params: BrandsExportExternalVettingsParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.BrandsExportExternalVettingsResponse>>;

      orderExternalVettings(
        pathParams: BrandsOrderExternalVettingsPathParams,
        params: BrandsOrderExternalVettingsParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.BrandsOrderExternalVettingsResponse>>;

      revet(
        pathParams: BrandsRevetPathParams,
        params: BrandsRevetParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.BrandsRevetResponse>>;

      feedback(
        pathParams: BrandsFeedbackPathParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.BrandsFeedbackResponse>>;
    }
  }
}
