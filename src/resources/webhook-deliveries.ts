// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class WebhookDeliveries extends APIResource {
  /**
   * Provides webhook_delivery debug data, such as timestamps, delivery status and
   * attempts.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<WebhookDeliveryRetrieveResponse> {
    return this._client.get(path`/webhook_deliveries/${id}`, options);
  }

  /**
   * Lists webhook_deliveries for the authenticated user
   */
  list(
    query: WebhookDeliveryListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<WebhookDeliveryListResponsesDefaultFlatPagination, WebhookDeliveryListResponse> {
    return this._client.getAPIList(
      '/webhook_deliveries',
      DefaultFlatPagination<WebhookDeliveryListResponse>,
      { query, ...options },
    );
  }
}

export type WebhookDeliveryListResponsesDefaultFlatPagination =
  DefaultFlatPagination<WebhookDeliveryListResponse>;

export interface WebhookDeliveryRetrieveResponse {
  /**
   * Record of all attempts to deliver a webhook.
   */
  data?: WebhookDeliveryRetrieveResponse.Data;
}

export namespace WebhookDeliveryRetrieveResponse {
  /**
   * Record of all attempts to deliver a webhook.
   */
  export interface Data {
    /**
     * Uniquely identifies the webhook_delivery record.
     */
    id?: string;

    /**
     * Detailed delivery attempts, ordered by most recent.
     */
    attempts?: Array<Data.Attempt>;

    /**
     * ISO 8601 timestamp indicating when the last webhook response has been received.
     */
    finished_at?: string;

    /**
     * Identifies the type of the resource.
     */
    record_type?: string;

    /**
     * ISO 8601 timestamp indicating when the first request attempt was initiated.
     */
    started_at?: string;

    /**
     * Delivery status: 'delivered' when successfuly delivered or 'failed' if all
     * attempts have failed.
     */
    status?: 'delivered' | 'failed';

    /**
     * Uniquely identifies the user that owns the webhook_delivery record.
     */
    user_id?: string;

    /**
     * Original webhook JSON data. Payload fields vary according to event type.
     */
    webhook?: Data.Webhook;
  }

  export namespace Data {
    /**
     * Webhook delivery attempt details.
     */
    export interface Attempt {
      /**
       * Webhook delivery error codes.
       */
      errors?: Array<number>;

      /**
       * ISO 8601 timestamp indicating when the attempt has finished.
       */
      finished_at?: string;

      /**
       * HTTP request and response information.
       */
      http?: Attempt.HTTP;

      /**
       * ISO 8601 timestamp indicating when the attempt was initiated.
       */
      started_at?: string;

      status?: 'delivered' | 'failed';
    }

    export namespace Attempt {
      /**
       * HTTP request and response information.
       */
      export interface HTTP {
        /**
         * Request details.
         */
        request?: HTTP.Request;

        /**
         * Response details, optional.
         */
        response?: HTTP.Response;
      }

      export namespace HTTP {
        /**
         * Request details.
         */
        export interface Request {
          /**
           * List of headers, limited to 10kB.
           */
          headers?: Array<Array<string>>;

          url?: string;
        }

        /**
         * Response details, optional.
         */
        export interface Response {
          /**
           * Raw response body, limited to 10kB.
           */
          body?: string;

          /**
           * List of headers, limited to 10kB.
           */
          headers?: Array<Array<string>>;

          status?: number;
        }
      }
    }

    /**
     * Original webhook JSON data. Payload fields vary according to event type.
     */
    export interface Webhook {
      /**
       * Identifies the type of resource.
       */
      id?: string;

      /**
       * The type of event being delivered.
       */
      event_type?: string;

      /**
       * ISO 8601 datetime of when the event occurred.
       */
      occurred_at?: string;

      payload?: { [key: string]: unknown };

      /**
       * Identifies the type of the resource.
       */
      record_type?: 'event';
    }
  }
}

/**
 * Record of all attempts to deliver a webhook.
 */
export interface WebhookDeliveryListResponse {
  /**
   * Uniquely identifies the webhook_delivery record.
   */
  id?: string;

  /**
   * Detailed delivery attempts, ordered by most recent.
   */
  attempts?: Array<WebhookDeliveryListResponse.Attempt>;

  /**
   * ISO 8601 timestamp indicating when the last webhook response has been received.
   */
  finished_at?: string;

  /**
   * Identifies the type of the resource.
   */
  record_type?: string;

  /**
   * ISO 8601 timestamp indicating when the first request attempt was initiated.
   */
  started_at?: string;

  /**
   * Delivery status: 'delivered' when successfuly delivered or 'failed' if all
   * attempts have failed.
   */
  status?: 'delivered' | 'failed';

  /**
   * Uniquely identifies the user that owns the webhook_delivery record.
   */
  user_id?: string;

  /**
   * Original webhook JSON data. Payload fields vary according to event type.
   */
  webhook?: WebhookDeliveryListResponse.Webhook;
}

export namespace WebhookDeliveryListResponse {
  /**
   * Webhook delivery attempt details.
   */
  export interface Attempt {
    /**
     * Webhook delivery error codes.
     */
    errors?: Array<number>;

    /**
     * ISO 8601 timestamp indicating when the attempt has finished.
     */
    finished_at?: string;

    /**
     * HTTP request and response information.
     */
    http?: Attempt.HTTP;

    /**
     * ISO 8601 timestamp indicating when the attempt was initiated.
     */
    started_at?: string;

    status?: 'delivered' | 'failed';
  }

  export namespace Attempt {
    /**
     * HTTP request and response information.
     */
    export interface HTTP {
      /**
       * Request details.
       */
      request?: HTTP.Request;

      /**
       * Response details, optional.
       */
      response?: HTTP.Response;
    }

    export namespace HTTP {
      /**
       * Request details.
       */
      export interface Request {
        /**
         * List of headers, limited to 10kB.
         */
        headers?: Array<Array<string>>;

        url?: string;
      }

      /**
       * Response details, optional.
       */
      export interface Response {
        /**
         * Raw response body, limited to 10kB.
         */
        body?: string;

        /**
         * List of headers, limited to 10kB.
         */
        headers?: Array<Array<string>>;

        status?: number;
      }
    }
  }

  /**
   * Original webhook JSON data. Payload fields vary according to event type.
   */
  export interface Webhook {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: string;

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: { [key: string]: unknown };

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }
}

export interface WebhookDeliveryListParams extends DefaultFlatPaginationParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[status][eq], filter[event_type], filter[webhook][contains],
   * filter[attempts][contains], filter[started_at][gte], filter[started_at][lte],
   * filter[finished_at][gte], filter[finished_at][lte]
   */
  filter?: WebhookDeliveryListParams.Filter;
}

export namespace WebhookDeliveryListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[status][eq], filter[event_type], filter[webhook][contains],
   * filter[attempts][contains], filter[started_at][gte], filter[started_at][lte],
   * filter[finished_at][gte], filter[finished_at][lte]
   */
  export interface Filter {
    attempts?: Filter.Attempts;

    /**
     * Return only webhook_deliveries matching the given value of `event_type`. Accepts
     * multiple values separated by a `,`.
     */
    event_type?: string;

    finished_at?: Filter.FinishedAt;

    started_at?: Filter.StartedAt;

    status?: Filter.Status;

    webhook?: Filter.Webhook;
  }

  export namespace Filter {
    export interface Attempts {
      /**
       * Return only webhook_deliveries whose `attempts` component contains the given
       * text
       */
      contains?: string;
    }

    export interface FinishedAt {
      /**
       * Return only webhook_deliveries whose delivery finished later than or at given
       * ISO 8601 datetime
       */
      gte?: string;

      /**
       * Return only webhook_deliveries whose delivery finished earlier than or at given
       * ISO 8601 datetime
       */
      lte?: string;
    }

    export interface StartedAt {
      /**
       * Return only webhook_deliveries whose delivery started later than or at given ISO
       * 8601 datetime
       */
      gte?: string;

      /**
       * Return only webhook_deliveries whose delivery started earlier than or at given
       * ISO 8601 datetime
       */
      lte?: string;
    }

    export interface Status {
      /**
       * Return only webhook_deliveries matching the given `status`
       */
      eq?: 'delivered' | 'failed';
    }

    export interface Webhook {
      /**
       * Return only webhook deliveries whose `webhook` component contains the given text
       */
      contains?: string;
    }
  }
}

export declare namespace WebhookDeliveries {
  export {
    type WebhookDeliveryRetrieveResponse as WebhookDeliveryRetrieveResponse,
    type WebhookDeliveryListResponse as WebhookDeliveryListResponse,
    type WebhookDeliveryListResponsesDefaultFlatPagination as WebhookDeliveryListResponsesDefaultFlatPagination,
    type WebhookDeliveryListParams as WebhookDeliveryListParams,
  };
}
