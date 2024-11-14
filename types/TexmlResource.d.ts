import {paths} from './TelnyxAPI.js';

declare module 'telnyx' {
  namespace Telnyx {
    type TexmlCreateSecretParams =
      paths['/texml/secrets']['post']['requestBody']['content']['application/json'];

    type TexmlCreateSecretResponse =
      paths['/texml/secrets']['post']['responses']['201']['content']['application/json'];

    type TexmlCreateCallApplicationId =
      paths['/texml/calls/{application_id}']['post']['parameters']['path']['application_id'];

    type TexmlCreateCallParams =
      paths['/texml/calls/{application_id}']['post']['requestBody']['content']['application/json'];

    type TexmlCreateCallResponse =
      paths['/texml/calls/{application_id}']['post']['responses']['200']['content']['application/json'];

    type TexmlUpdateCallCallSid =
      paths['/texml/calls/{call_sid}/update']['post']['parameters']['path']['call_sid'];

    type TexmlUpdateCallParams =
      paths['/texml/calls/{call_sid}/update']['post']['requestBody']['content']['application/json'];

    type TexmlUpdateCallResponse =
      paths['/texml/calls/{call_sid}/update']['post']['responses']['200']['content']['application/json'];

    class TexmlResource {
      createSecret(
        params: TexmlCreateSecretParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.TexmlCreateSecretResponse>>;

      createCall(
        applicationId: TexmlCreateCallApplicationId,
        params: TexmlCreateCallParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.TexmlCreateSecretResponse>>;

      updateCall(
        callSid: TexmlUpdateCallCallSid,
        params: TexmlUpdateCallParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.TexmlUpdateCallResponse>>;
    }
  }
}
