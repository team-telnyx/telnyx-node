// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MessagesAPI from './messages';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Rcs extends APIResource {
  /**
   * Generate a deeplink URL that can be used to start an RCS conversation with a
   * specific agent.
   *
   * @example
   * ```ts
   * const response = await client.messages.rcs.generateDeeplink(
   *   'agent_id',
   * );
   * ```
   */
  generateDeeplink(
    agentID: string,
    query: RcGenerateDeeplinkParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RcGenerateDeeplinkResponse> {
    return this._client.get(path`/messages/rcs/deeplinks/${agentID}`, { query, ...options });
  }

  /**
   * Send an RCS message
   *
   * @example
   * ```ts
   * const response = await client.messages.rcs.send({
   *   agent_id: 'Agent007',
   *   agent_message: {},
   *   messaging_profile_id: 'messaging_profile_id',
   *   to: '+13125551234',
   * });
   * ```
   */
  send(body: RcSendParams, options?: RequestOptions): APIPromise<RcSendResponse> {
    return this._client.post('/messages/rcs', { body, ...options });
  }
}

export interface RcGenerateDeeplinkResponse {
  data: RcGenerateDeeplinkResponse.Data;
}

export namespace RcGenerateDeeplinkResponse {
  export interface Data {
    /**
     * The generated deeplink URL
     */
    url: string;
  }
}

export interface RcSendResponse {
  data?: RcSendResponse.Data;
}

export namespace RcSendResponse {
  export interface Data {
    /**
     * message ID
     */
    id?: string;

    body?: MessagesAPI.RcsAgentMessage;

    direction?: string;

    encoding?: string;

    from?: Data.From;

    messaging_profile_id?: string;

    organization_id?: string;

    received_at?: string;

    record_type?: string;

    to?: Array<Data.To>;

    type?: string;
  }

  export namespace Data {
    export interface From {
      /**
       * agent ID
       */
      agent_id?: string;

      agent_name?: string;

      carrier?: string;
    }

    export interface To {
      carrier?: string;

      line_type?: string;

      phone_number?: string;

      status?: string;
    }
  }
}

export interface RcGenerateDeeplinkParams {
  /**
   * Pre-filled message body (URL encoded)
   */
  body?: string;

  /**
   * Phone number in E164 format (URL encoded)
   */
  phone_number?: string;
}

export interface RcSendParams {
  /**
   * RCS Agent ID
   */
  agent_id: string;

  agent_message: MessagesAPI.RcsAgentMessage;

  /**
   * A valid messaging profile ID
   */
  messaging_profile_id: string;

  /**
   * Phone number in +E.164 format
   */
  to: string;

  mms_fallback?: RcSendParams.MmsFallback;

  sms_fallback?: RcSendParams.SMSFallback;

  /**
   * Message type - must be set to "RCS"
   */
  type?: 'RCS';

  /**
   * The URL where webhooks related to this message will be sent.
   */
  webhook_url?: string;
}

export namespace RcSendParams {
  export interface MmsFallback {
    /**
     * Phone number in +E.164 format
     */
    from?: string;

    /**
     * List of media URLs
     */
    media_urls?: Array<string>;

    /**
     * Subject of the message
     */
    subject?: string;

    /**
     * Text
     */
    text?: string;
  }

  export interface SMSFallback {
    /**
     * Phone number in +E.164 format
     */
    from?: string;

    /**
     * Text (maximum 3072 characters)
     */
    text?: string;
  }
}

export declare namespace Rcs {
  export {
    type RcGenerateDeeplinkResponse as RcGenerateDeeplinkResponse,
    type RcSendResponse as RcSendResponse,
    type RcGenerateDeeplinkParams as RcGenerateDeeplinkParams,
    type RcSendParams as RcSendParams,
  };
}
