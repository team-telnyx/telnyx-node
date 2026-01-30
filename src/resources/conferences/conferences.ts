// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActionsAPI from './actions';
import {
  ActionHoldParams,
  ActionHoldResponse,
  ActionJoinParams,
  ActionJoinResponse,
  ActionLeaveParams,
  ActionLeaveResponse,
  ActionMuteParams,
  ActionMuteResponse,
  ActionPlayParams,
  ActionPlayResponse,
  ActionRecordPauseParams,
  ActionRecordPauseResponse,
  ActionRecordResumeParams,
  ActionRecordResumeResponse,
  ActionRecordStartParams,
  ActionRecordStartResponse,
  ActionRecordStopParams,
  ActionRecordStopResponse,
  ActionSpeakParams,
  ActionSpeakResponse,
  ActionStopParams,
  ActionStopResponse,
  ActionUnholdParams,
  ActionUnholdResponse,
  ActionUnmuteParams,
  ActionUnmuteResponse,
  ActionUpdateParams,
  ActionUpdateResponse,
  Actions,
  ConferenceCommandResult,
  UpdateConference,
} from './actions';
import { APIPromise } from '../../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Conferences extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Create a conference from an existing call leg using a `call_control_id` and a
   * conference name. Upon creating the conference, the call will be automatically
   * bridged to the conference. Conferences will expire after all participants have
   * left the conference or after 4 hours regardless of the number of active
   * participants.
   *
   * **Expected Webhooks:**
   *
   * - `conference.created`
   * - `conference.participant.joined`
   * - `conference.participant.left`
   * - `conference.ended`
   * - `conference.recording.saved`
   * - `conference.floor.changed`
   *
   * @example
   * ```ts
   * const conference = await client.conferences.create({
   *   call_control_id:
   *     'v3:MdI91X4lWFEs7IgbBEOT9M4AigoY08M0WWZFISt1Yw2axZ_IiE4pqg',
   *   name: 'Business',
   * });
   * ```
   */
  create(body: ConferenceCreateParams, options?: RequestOptions): APIPromise<ConferenceCreateResponse> {
    return this._client.post('/conferences', { body, ...options });
  }

  /**
   * Retrieve an existing conference
   *
   * @example
   * ```ts
   * const conference = await client.conferences.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: ConferenceRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ConferenceRetrieveResponse> {
    return this._client.get(path`/conferences/${id}`, { query, ...options });
  }

  /**
   * Lists conferences. Conferences are created on demand, and will expire after all
   * participants have left the conference or after 4 hours regardless of the number
   * of active participants. Conferences are listed in descending order by
   * `expires_at`.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const conference of client.conferences.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: ConferenceListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ConferencesDefaultFlatPagination, Conference> {
    return this._client.getAPIList('/conferences', DefaultFlatPagination<Conference>, { query, ...options });
  }

  /**
   * Lists conference participants
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const conferenceListParticipantsResponse of client.conferences.listParticipants(
   *   'conference_id',
   * )) {
   *   // ...
   * }
   * ```
   */
  listParticipants(
    conferenceID: string,
    query: ConferenceListParticipantsParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<
    ConferenceListParticipantsResponsesDefaultFlatPagination,
    ConferenceListParticipantsResponse
  > {
    return this._client.getAPIList(
      path`/conferences/${conferenceID}/participants`,
      DefaultFlatPagination<ConferenceListParticipantsResponse>,
      { query, ...options },
    );
  }
}

export type ConferencesDefaultFlatPagination = DefaultFlatPagination<Conference>;

export type ConferenceListParticipantsResponsesDefaultFlatPagination =
  DefaultFlatPagination<ConferenceListParticipantsResponse>;

export interface Conference {
  /**
   * Uniquely identifies the conference
   */
  id: string;

  /**
   * ISO 8601 formatted date of when the conference was created
   */
  created_at: string;

  /**
   * ISO 8601 formatted date of when the conference will expire
   */
  expires_at: string;

  /**
   * Name of the conference
   */
  name: string;

  record_type: 'conference';

  /**
   * Identifies the connection associated with the conference
   */
  connection_id?: string;

  /**
   * Reason why the conference ended
   */
  end_reason?: 'all_left' | 'ended_via_api' | 'host_left' | 'time_exceeded';

  /**
   * IDs related to who ended the conference. It is expected for them to all be there
   * or all be null
   */
  ended_by?: Conference.EndedBy;

  /**
   * Region where the conference is hosted
   */
  region?: string;

  /**
   * Status of the conference
   */
  status?: 'init' | 'in_progress' | 'completed';

  /**
   * ISO 8601 formatted date of when the conference was last updated
   */
  updated_at?: string;
}

export namespace Conference {
  /**
   * IDs related to who ended the conference. It is expected for them to all be there
   * or all be null
   */
  export interface EndedBy {
    /**
     * Call Control ID which ended the conference
     */
    call_control_id?: string;

    /**
     * Call Session ID which ended the conference
     */
    call_session_id?: string;
  }
}

export interface ConferenceCreateResponse {
  data?: Conference;
}

export interface ConferenceRetrieveResponse {
  data?: Conference;
}

export interface ConferenceListParticipantsResponse {
  /**
   * Uniquely identifies the participant
   */
  id: string;

  /**
   * Call Control ID associated with the partiipant of the conference
   */
  call_control_id: string;

  /**
   * Uniquely identifies the call leg associated with the participant
   */
  call_leg_id: string;

  /**
   * Info about the conference that the participant is in
   */
  conference: ConferenceListParticipantsResponse.Conference;

  /**
   * ISO 8601 formatted date of when the participant was created
   */
  created_at: string;

  /**
   * Whether the conference will end and all remaining participants be hung up after
   * the participant leaves the conference.
   */
  end_conference_on_exit: boolean;

  /**
   * Whether the participant is muted.
   */
  muted: boolean;

  /**
   * Whether the participant is put on_hold.
   */
  on_hold: boolean;

  record_type: 'participant';

  /**
   * Whether the conference will end after the participant leaves the conference.
   */
  soft_end_conference_on_exit: boolean;

  /**
   * The status of the participant with respect to the lifecycle within the
   * conference
   */
  status: 'joining' | 'joined' | 'left';

  /**
   * ISO 8601 formatted date of when the participant was last updated
   */
  updated_at: string;

  /**
   * Array of unique call_control_ids the participant can whisper to..
   */
  whisper_call_control_ids: Array<string>;
}

export namespace ConferenceListParticipantsResponse {
  /**
   * Info about the conference that the participant is in
   */
  export interface Conference {
    /**
     * Uniquely identifies the conference
     */
    id?: string;

    /**
     * Name of the conference
     */
    name?: string;
  }
}

export interface ConferenceCreateParams {
  /**
   * Unique identifier and token for controlling the call
   */
  call_control_id: string;

  /**
   * Name of the conference
   */
  name: string;

  /**
   * Whether a beep sound should be played when participants join and/or leave the
   * conference.
   */
  beep_enabled?: 'always' | 'never' | 'on_enter' | 'on_exit';

  /**
   * Use this field to add state to every subsequent webhook. It must be a valid
   * Base-64 encoded string. The client_state will be updated for the creator call
   * leg and will be used for all webhooks related to the created conference.
   */
  client_state?: string;

  /**
   * Toggle background comfort noise.
   */
  comfort_noise?: boolean;

  /**
   * Use this field to avoid execution of duplicate commands. Telnyx will ignore
   * subsequent commands with the same `command_id` as one that has already been
   * executed.
   */
  command_id?: string;

  /**
   * Time length (minutes) after which the conference will end.
   */
  duration_minutes?: number;

  /**
   * The URL of a file to be played to participants joining the conference. The URL
   * can point to either a WAV or MP3 file. hold_media_name and hold_audio_url cannot
   * be used together in one request. Takes effect only when
   * "start_conference_on_create" is set to "false".
   */
  hold_audio_url?: string;

  /**
   * The media_name of a file to be played to participants joining the conference.
   * The media_name must point to a file previously uploaded to
   * api.telnyx.com/v2/media by the same user/organization. The file must either be a
   * WAV or MP3 file. Takes effect only when "start_conference_on_create" is set to
   * "false".
   */
  hold_media_name?: string;

  /**
   * The maximum number of active conference participants to allow. Must be between 2
   * and 800. Defaults to 250
   */
  max_participants?: number;

  /**
   * Sets the region where the conference data will be hosted. Defaults to the region
   * defined in user's data locality settings (Europe or US).
   */
  region?: 'Australia' | 'Europe' | 'Middle East' | 'US';

  /**
   * Whether the conference should be started on creation. If the conference isn't
   * started all participants that join are automatically put on hold. Defaults to
   * "true".
   */
  start_conference_on_create?: boolean;
}

export interface ConferenceRetrieveParams {
  /**
   * Region where the conference data is located
   */
  region?: 'Australia' | 'Europe' | 'Middle East' | 'US';
}

export interface ConferenceListParams extends DefaultFlatPaginationParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[application_name][contains], filter[outbound.outbound_voice_profile_id],
   * filter[leg_id], filter[application_session_id], filter[connection_id],
   * filter[product], filter[failed], filter[from], filter[to], filter[name],
   * filter[type], filter[occurred_at][eq/gt/gte/lt/lte], filter[status]
   */
  filter?: ConferenceListParams.Filter;

  /**
   * Region where the conference data is located
   */
  region?: 'Australia' | 'Europe' | 'Middle East' | 'US';
}

export namespace ConferenceListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[application_name][contains], filter[outbound.outbound_voice_profile_id],
   * filter[leg_id], filter[application_session_id], filter[connection_id],
   * filter[product], filter[failed], filter[from], filter[to], filter[name],
   * filter[type], filter[occurred_at][eq/gt/gte/lt/lte], filter[status]
   */
  export interface Filter {
    /**
     * Application name filters
     */
    application_name?: Filter.ApplicationName;

    /**
     * The unique identifier of the call session. A session may include multiple call
     * leg events.
     */
    application_session_id?: string;

    /**
     * The unique identifier of the conection.
     */
    connection_id?: string;

    /**
     * Delivery failed or not.
     */
    failed?: boolean;

    /**
     * Filter by From number.
     */
    from?: string;

    /**
     * The unique identifier of an individual call leg.
     */
    leg_id?: string;

    /**
     * If present, conferences will be filtered to those with a matching `name`
     * attribute. Matching is case-sensitive
     */
    name?: string;

    /**
     * Event occurred_at filters
     */
    occurred_at?: Filter.OccurredAt;

    /**
     * Identifies the associated outbound voice profile.
     */
    'outbound.outbound_voice_profile_id'?: string;

    /**
     * Filter by product.
     */
    product?: 'call_control' | 'fax' | 'texml';

    /**
     * If present, conferences will be filtered by status.
     */
    status?: 'init' | 'in_progress' | 'completed';

    /**
     * Filter by To number.
     */
    to?: string;

    /**
     * Event type
     */
    type?: 'command' | 'webhook';
  }

  export namespace Filter {
    /**
     * Application name filters
     */
    export interface ApplicationName {
      /**
       * If present, applications with <code>application_name</code> containing the given
       * value will be returned. Matching is not case-sensitive. Requires at least three
       * characters.
       */
      contains?: string;
    }

    /**
     * Event occurred_at filters
     */
    export interface OccurredAt {
      /**
       * Event occurred_at: equal
       */
      eq?: string;

      /**
       * Event occurred_at: greater than
       */
      gt?: string;

      /**
       * Event occurred_at: greater than or equal
       */
      gte?: string;

      /**
       * Event occurred_at: lower than
       */
      lt?: string;

      /**
       * Event occurred_at: lower than or equal
       */
      lte?: string;
    }
  }
}

export interface ConferenceListParticipantsParams extends DefaultFlatPaginationParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally: filter[muted],
   * filter[on_hold], filter[whispering]
   */
  filter?: ConferenceListParticipantsParams.Filter;

  /**
   * Region where the conference data is located
   */
  region?: 'Australia' | 'Europe' | 'Middle East' | 'US';
}

export namespace ConferenceListParticipantsParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally: filter[muted],
   * filter[on_hold], filter[whispering]
   */
  export interface Filter {
    /**
     * If present, participants will be filtered to those who are/are not muted
     */
    muted?: boolean;

    /**
     * If present, participants will be filtered to those who are/are not put on hold
     */
    on_hold?: boolean;

    /**
     * If present, participants will be filtered to those who are whispering or are not
     */
    whispering?: boolean;
  }
}

Conferences.Actions = Actions;

export declare namespace Conferences {
  export {
    type Conference as Conference,
    type ConferenceCreateResponse as ConferenceCreateResponse,
    type ConferenceRetrieveResponse as ConferenceRetrieveResponse,
    type ConferenceListParticipantsResponse as ConferenceListParticipantsResponse,
    type ConferencesDefaultFlatPagination as ConferencesDefaultFlatPagination,
    type ConferenceListParticipantsResponsesDefaultFlatPagination as ConferenceListParticipantsResponsesDefaultFlatPagination,
    type ConferenceCreateParams as ConferenceCreateParams,
    type ConferenceRetrieveParams as ConferenceRetrieveParams,
    type ConferenceListParams as ConferenceListParams,
    type ConferenceListParticipantsParams as ConferenceListParticipantsParams,
  };

  export {
    Actions as Actions,
    type ConferenceCommandResult as ConferenceCommandResult,
    type UpdateConference as UpdateConference,
    type ActionUpdateResponse as ActionUpdateResponse,
    type ActionHoldResponse as ActionHoldResponse,
    type ActionJoinResponse as ActionJoinResponse,
    type ActionLeaveResponse as ActionLeaveResponse,
    type ActionMuteResponse as ActionMuteResponse,
    type ActionPlayResponse as ActionPlayResponse,
    type ActionRecordPauseResponse as ActionRecordPauseResponse,
    type ActionRecordResumeResponse as ActionRecordResumeResponse,
    type ActionRecordStartResponse as ActionRecordStartResponse,
    type ActionRecordStopResponse as ActionRecordStopResponse,
    type ActionSpeakResponse as ActionSpeakResponse,
    type ActionStopResponse as ActionStopResponse,
    type ActionUnholdResponse as ActionUnholdResponse,
    type ActionUnmuteResponse as ActionUnmuteResponse,
    type ActionUpdateParams as ActionUpdateParams,
    type ActionHoldParams as ActionHoldParams,
    type ActionJoinParams as ActionJoinParams,
    type ActionLeaveParams as ActionLeaveParams,
    type ActionMuteParams as ActionMuteParams,
    type ActionPlayParams as ActionPlayParams,
    type ActionRecordPauseParams as ActionRecordPauseParams,
    type ActionRecordResumeParams as ActionRecordResumeParams,
    type ActionRecordStartParams as ActionRecordStartParams,
    type ActionRecordStopParams as ActionRecordStopParams,
    type ActionSpeakParams as ActionSpeakParams,
    type ActionStopParams as ActionStopParams,
    type ActionUnholdParams as ActionUnholdParams,
    type ActionUnmuteParams as ActionUnmuteParams,
  };
}
