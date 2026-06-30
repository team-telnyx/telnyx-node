// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as VoiceSDKCallReportsAPI from './voice-sdk-call-reports';
import { APIPromise } from '../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Retrieve raw Voice SDK call report stats payloads for WebRTC call troubleshooting.
 */
export class VoiceSDKCallReports extends APIResource {
  /**
   * Returns raw call report stats JSON payloads stored for the authenticated user
   * and `call_id`. The user is derived from Telnyx authentication, not from request
   * parameters.
   */
  retrieve(callID: string, options?: RequestOptions): APIPromise<VoiceSDKCallReportRetrieveResponse> {
    return this._client.get(path`/voice_sdk_call_reports/${callID}`, options);
  }

  /**
   * Returns paginated raw call report stats JSON payloads stored for the
   * authenticated user. The user is derived from Telnyx authentication, not from
   * request parameters.
   */
  list(
    query: VoiceSDKCallReportListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<VoiceSDKCallReportListResponsesDefaultFlatPagination, VoiceSDKCallReportListResponse> {
    return this._client.getAPIList(
      '/voice_sdk_call_reports',
      DefaultFlatPagination<VoiceSDKCallReportListResponse>,
      { query, ...options },
    );
  }
}

export type VoiceSDKCallReportListResponsesDefaultFlatPagination =
  DefaultFlatPagination<VoiceSDKCallReportListResponse>;

/**
 * A raw Voice SDK log entry. Additional SDK-specific fields may be present.
 */
export interface VoiceSDKCallReportLogEntry {
  /**
   * Raw structured context attached to the log entry.
   */
  context?: { [key: string]: unknown };

  /**
   * Log level emitted by the SDK.
   */
  level?: 'debug' | 'info' | 'warn' | 'error';

  /**
   * Log message.
   */
  message?: string;

  /**
   * Time when the log entry was emitted.
   */
  timestamp?: string;

  [k: string]: unknown;
}

/**
 * Raw Voice SDK call report stats payloads as stored by voice-sdk-debug.
 */
export type VoiceSDKCallReportRetrieveResponse =
  Array<VoiceSDKCallReportRetrieveResponse.VoiceSDKCallReportRetrieveResponseItem>;

export namespace VoiceSDKCallReportRetrieveResponse {
  /**
   * A raw call report stats JSON payload. The schema is intentionally permissive
   * because Voice SDK clients can add fields over time.
   */
  export interface VoiceSDKCallReportRetrieveResponseItem {
    /**
     * Unique call identifier.
     */
    call_id?: string;

    /**
     * User-scoped storage grouping identifier derived from the authenticated user.
     * This is not a unique per-call report identifier and may be shared by multiple
     * calls for the same user.
     */
    call_report_id?: string;

    /**
     * Creation timestamp when present.
     */
    created_at?: string;

    /**
     * Reason the SDK flushed this stats report segment, for example an intermediate
     * socket-close flush.
     */
    flushReason?: { [key: string]: unknown };

    /**
     * Raw logs payload emitted by the Voice SDK and stored without normalization. Live
     * responses commonly return an array of log entries, but object-shaped log
     * payloads are also allowed for compatibility.
     */
    logs?:
      | Array<VoiceSDKCallReportsAPI.VoiceSDKCallReportLogEntry>
      | VoiceSDKCallReportRetrieveResponseItem.Entries;

    /**
     * Organization associated with the stored call report when provided by the Voice
     * SDK reporting path.
     */
    organization_id?: string;

    /**
     * Zero-based stats segment index when the SDK sends segmented or intermediate
     * reports.
     */
    segment?: number;

    /**
     * Raw stats payload emitted by the Voice SDK and stored without normalization. The
     * exact shape can vary by SDK platform and version. Live responses commonly return
     * an array of interval snapshots, but object-shaped stats payloads are also
     * allowed for compatibility.
     */
    stats?: Array<{ [key: string]: unknown }> | VoiceSDKCallReportRetrieveResponseItem.UnionMember1;

    /**
     * Time when the call report was stored.
     */
    stored_at?: string;

    /**
     * High-level call metadata.
     */
    summary?: { [key: string]: unknown };

    /**
     * Telnyx call leg identifier for correlating the report with call-control, SIP,
     * and media troubleshooting data.
     */
    telnyx_leg_id?: string;

    /**
     * Telnyx RTC session identifier for correlating the report with Voice SDK
     * signaling and media-session logs.
     */
    telnyx_session_id?: string;

    /**
     * Voice SDK user agent string reported by the client. This is the preferred
     * SDK/platform/version dimension when present.
     */
    user_agent?: string;

    /**
     * Authenticated user that owns the call report.
     */
    user_id?: string;

    /**
     * Legacy SDK version value when the client reports one separately from the user
     * agent.
     */
    version?: string;

    /**
     * Voice SDK instance identifier.
     */
    voice_sdk_id?: string;

    /**
     * Decoded Voice SDK identifier metadata emitted by voice-sdk-proxy when available.
     */
    voice_sdk_id_decoded?: { [key: string]: unknown };

    /**
     * Voice SDK session correlation identifier used to group stats segments for the
     * same SDK session.
     */
    voice_sdk_session_id?: string;

    [k: string]: unknown;
  }

  export namespace VoiceSDKCallReportRetrieveResponseItem {
    /**
     * Raw logs object emitted by the Voice SDK when logs are grouped under an entries
     * field.
     */
    export interface Entries {
      /**
       * Raw log entries when the SDK groups logs under an entries field.
       */
      entries?: Array<VoiceSDKCallReportsAPI.VoiceSDKCallReportLogEntry>;

      [k: string]: unknown;
    }

    /**
     * Raw stats object emitted by the Voice SDK.
     */
    export interface UnionMember1 {
      /**
       * Raw audio stats such as inbound/outbound packet, byte, jitter, packet-loss,
       * bitrate, and audio-level metrics.
       */
      audio?: { [key: string]: unknown };

      /**
       * Raw connection stats such as round-trip time, packets, and bytes sent or
       * received.
       */
      connection?: { [key: string]: unknown };

      /**
       * Raw ICE candidate-pair information, including selected pair, local/remote
       * candidates, state, and nomination data when provided by the SDK.
       */
      ice?: { [key: string]: unknown };

      /**
       * Raw transport stats such as ICE state, DTLS state, SRTP cipher, TLS version, and
       * selected-candidate-pair changes.
       */
      transport?: { [key: string]: unknown };

      [k: string]: unknown;
    }
  }
}

/**
 * A raw call report stats JSON payload. The schema is intentionally permissive
 * because Voice SDK clients can add fields over time.
 */
export interface VoiceSDKCallReportListResponse {
  /**
   * Unique call identifier.
   */
  call_id?: string;

  /**
   * User-scoped storage grouping identifier derived from the authenticated user.
   * This is not a unique per-call report identifier and may be shared by multiple
   * calls for the same user.
   */
  call_report_id?: string;

  /**
   * Creation timestamp when present.
   */
  created_at?: string;

  /**
   * Reason the SDK flushed this stats report segment, for example an intermediate
   * socket-close flush.
   */
  flushReason?: { [key: string]: unknown };

  /**
   * Raw logs payload emitted by the Voice SDK and stored without normalization. Live
   * responses commonly return an array of log entries, but object-shaped log
   * payloads are also allowed for compatibility.
   */
  logs?: Array<VoiceSDKCallReportLogEntry> | VoiceSDKCallReportListResponse.Entries;

  /**
   * Organization associated with the stored call report when provided by the Voice
   * SDK reporting path.
   */
  organization_id?: string;

  /**
   * Zero-based stats segment index when the SDK sends segmented or intermediate
   * reports.
   */
  segment?: number;

  /**
   * Raw stats payload emitted by the Voice SDK and stored without normalization. The
   * exact shape can vary by SDK platform and version. Live responses commonly return
   * an array of interval snapshots, but object-shaped stats payloads are also
   * allowed for compatibility.
   */
  stats?: Array<{ [key: string]: unknown }> | VoiceSDKCallReportListResponse.UnionMember1;

  /**
   * Time when the call report was stored.
   */
  stored_at?: string;

  /**
   * High-level call metadata.
   */
  summary?: { [key: string]: unknown };

  /**
   * Telnyx call leg identifier for correlating the report with call-control, SIP,
   * and media troubleshooting data.
   */
  telnyx_leg_id?: string;

  /**
   * Telnyx RTC session identifier for correlating the report with Voice SDK
   * signaling and media-session logs.
   */
  telnyx_session_id?: string;

  /**
   * Voice SDK user agent string reported by the client. This is the preferred
   * SDK/platform/version dimension when present.
   */
  user_agent?: string;

  /**
   * Authenticated user that owns the call report.
   */
  user_id?: string;

  /**
   * Legacy SDK version value when the client reports one separately from the user
   * agent.
   */
  version?: string;

  /**
   * Voice SDK instance identifier.
   */
  voice_sdk_id?: string;

  /**
   * Decoded Voice SDK identifier metadata emitted by voice-sdk-proxy when available.
   */
  voice_sdk_id_decoded?: { [key: string]: unknown };

  /**
   * Voice SDK session correlation identifier used to group stats segments for the
   * same SDK session.
   */
  voice_sdk_session_id?: string;

  [k: string]: unknown;
}

export namespace VoiceSDKCallReportListResponse {
  /**
   * Raw logs object emitted by the Voice SDK when logs are grouped under an entries
   * field.
   */
  export interface Entries {
    /**
     * Raw log entries when the SDK groups logs under an entries field.
     */
    entries?: Array<VoiceSDKCallReportsAPI.VoiceSDKCallReportLogEntry>;

    [k: string]: unknown;
  }

  /**
   * Raw stats object emitted by the Voice SDK.
   */
  export interface UnionMember1 {
    /**
     * Raw audio stats such as inbound/outbound packet, byte, jitter, packet-loss,
     * bitrate, and audio-level metrics.
     */
    audio?: { [key: string]: unknown };

    /**
     * Raw connection stats such as round-trip time, packets, and bytes sent or
     * received.
     */
    connection?: { [key: string]: unknown };

    /**
     * Raw ICE candidate-pair information, including selected pair, local/remote
     * candidates, state, and nomination data when provided by the SDK.
     */
    ice?: { [key: string]: unknown };

    /**
     * Raw transport stats such as ICE state, DTLS state, SRTP cipher, TLS version, and
     * selected-candidate-pair changes.
     */
    transport?: { [key: string]: unknown };

    [k: string]: unknown;
  }
}

export interface VoiceSDKCallReportListParams extends DefaultFlatPaginationParams {
  /**
   * Set the order of the results by creation date. `asc` and `created_at` sort
   * oldest reports first; `desc` and `-created_at` sort newest reports first. If not
   * given, results are sorted by creation date in descending order.
   */
  sort?: 'asc' | 'desc' | 'created_at' | '-created_at';
}

export declare namespace VoiceSDKCallReports {
  export {
    type VoiceSDKCallReportLogEntry as VoiceSDKCallReportLogEntry,
    type VoiceSDKCallReportRetrieveResponse as VoiceSDKCallReportRetrieveResponse,
    type VoiceSDKCallReportListResponse as VoiceSDKCallReportListResponse,
    type VoiceSDKCallReportListResponsesDefaultFlatPagination as VoiceSDKCallReportListResponsesDefaultFlatPagination,
    type VoiceSDKCallReportListParams as VoiceSDKCallReportListParams,
  };
}
