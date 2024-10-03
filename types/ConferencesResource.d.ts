import {paths} from './TelnyxAPI.js';

declare module 'telnyx' {
  namespace Telnyx {
    type ConferencesListParams =
      paths['/conferences']['get']['parameters']['query'];

    type ConferencesListResponse =
      paths['/conferences']['get']['responses']['200']['content']['application/json'];

    type ConferencesRetrieveId =
      paths['/conferences/{id}']['get']['parameters']['path']['id'];

    type ConferencesRetrieveParams =
      paths['/conferences/{id}']['get']['parameters']['query'];

    type ConferencesRetrieveResponse =
      paths['/conferences/{id}']['get']['responses']['200']['content']['application/json'];

    type ConferencesCreateParams =
      paths['/conferences']['post']['requestBody']['content']['application/json'];

    type ConferencesCreateResponse =
      paths['/conferences']['post']['responses']['200']['content']['application/json'];

    type ConferencesJoinParams =
      paths['/conferences/{id}/actions/join']['post']['requestBody']['content']['application/json'];
    type ConferencesMuteParams =
      paths['/conferences/{id}/actions/mute']['post']['responses']['200']['content']['application/json'];
    type ConferencesUnmuteParams =
      paths['/conferences/{id}/actions/unmute']['post']['responses']['200']['content']['application/json'];
    type ConferencesHoldParams =
      paths['/conferences/{id}/actions/hold']['post']['responses']['200']['content']['application/json'];
    type ConferencesUnholdParams =
      paths['/conferences/{id}/actions/unhold']['post']['responses']['200']['content']['application/json'];
    type ConferencesSpeakParams =
      paths['/conferences/{id}/actions/speak']['post']['responses']['200']['content']['application/json'];
    type ConferencesPlayParams =
      paths['/conferences/{id}/actions/play']['post']['responses']['200']['content']['application/json'];
    type ConferencesStopParams =
      paths['/conferences/{id}/actions/stop']['post']['responses']['200']['content']['application/json'];
    type ConferencesRecordStartParams =
      paths['/conferences/{id}/actions/record_start']['post']['responses']['200']['content']['application/json'];
    type ConferencesRecordStopParams =
      paths['/conferences/{id}/actions/record_stop']['post']['responses']['200']['content']['application/json'];
    type ConferencesRecordResumeParams =
      paths['/conferences/{id}/actions/record_resume']['post']['responses']['200']['content']['application/json'];
    type ConferencesRecordPauseParams =
      paths['/conferences/{id}/actions/record_pause']['post']['responses']['200']['content']['application/json'];
    type ConferencesUpdateParams =
      paths['/conferences/{id}/actions/update']['post']['responses']['200']['content']['application/json'];
    type ConferencesLeaveParams =
      paths['/conferences/{id}/actions/leave']['post']['responses']['200']['content']['application/json'];

    type ConferencesJoinResponse =
      paths['/conferences/{id}/actions/join']['post']['responses']['200']['content']['application/json'];
    type ConferencesMuteResponse =
      paths['/conferences/{id}/actions/mute']['post']['responses']['200']['content']['application/json'];
    type ConferencesUnmuteResponse =
      paths['/conferences/{id}/actions/unmute']['post']['responses']['200']['content']['application/json'];
    type ConferencesHoldResponse =
      paths['/conferences/{id}/actions/hold']['post']['responses']['200']['content']['application/json'];
    type ConferencesUnholdResponse =
      paths['/conferences/{id}/actions/unhold']['post']['responses']['200']['content']['application/json'];
    type ConferencesSpeakResponse =
      paths['/conferences/{id}/actions/speak']['post']['responses']['200']['content']['application/json'];
    type ConferencesPlayResponse =
      paths['/conferences/{id}/actions/play']['post']['responses']['200']['content']['application/json'];
    type ConferencesStopResponse =
      paths['/conferences/{id}/actions/stop']['post']['responses']['200']['content']['application/json'];
    type ConferencesRecordStartResponse =
      paths['/conferences/{id}/actions/record_start']['post']['responses']['200']['content']['application/json'];
    type ConferencesRecordStopResponse =
      paths['/conferences/{id}/actions/record_stop']['post']['responses']['200']['content']['application/json'];
    type ConferencesUpdateResponse =
      paths['/conferences/{id}/actions/update']['post']['responses']['200']['content']['application/json'];
    type ConferencesLeaveResponse =
      paths['/conferences/{id}/actions/leave']['post']['responses']['200']['content']['application/json'];
    type ConferencesRecordResumeResponse =
      paths['/conferences/{id}/actions/record_resume']['post']['responses']['200']['content']['application/json'];
    type ConferencesRecordPauseResponse =
      paths['/conferences/{id}/actions/record_pause']['post']['responses']['200']['content']['application/json'];

    type ConferencesParticipantsId =
      paths['/conferences/{conference_id}/participants']['get']['parameters']['path']['conference_id'];

    type ConferencesParticipantsParams =
      paths['/conferences/{conference_id}/participants']['get']['parameters']['query'];

    type ConferencesParticipantsResponse =
      paths['/conferences/{id}']['get']['responses']['200']['content']['application/json'];

    type ConferencesNestedMethods = {
      join: ConferencesResource['join'];
      mute: ConferencesResource['mute'];
      unmute: ConferencesResource['unmute'];
      hold: ConferencesResource['hold'];
      unhold: ConferencesResource['unhold'];
      speak: ConferencesResource['speak'];
      play: ConferencesResource['play'];
      stop: ConferencesResource['stop'];
      recordStart: ConferencesResource['recordStart'];
      recordStop: ConferencesResource['recordStop'];
      update: ConferencesResource['update'];
      leave: ConferencesResource['leave'];
      recordResume: ConferencesResource['recordResume'];
      recordPause: ConferencesResource['recordPause'];
    };

    class ConferencesResource {
      list(
        params?: ConferencesListParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.ConferencesListResponse>>;

      retrieve(
        id: ConferencesRetrieveId,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<Telnyx.ConferencesRetrieveResponse> &
          NestedResponseData<
            ConferencesRetrieveResponse['data'],
            ConferencesNestedMethods
          >
      >;

      create(
        params: ConferencesCreateParams,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<Telnyx.ConferencesCreateResponse> &
          NestedResponseData<
            ConferencesCreateResponse['data'],
            ConferencesNestedMethods
          >
      >;

      join(
        params: ConferencesJoinParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.ConferencesJoinResponse>>;
      mute(
        params: ConferencesMuteParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.ConferencesMuteResponse>>;
      unmute(
        params: ConferencesUnmuteParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.ConferencesUnmuteResponse>>;
      hold(
        params: ConferencesHoldParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.ConferencesHoldResponse>>;
      unhold(
        params: ConferencesUnholdParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.ConferencesUnholdResponse>>;
      speak(
        params: ConferencesSpeakParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.ConferencesSpeakResponse>>;
      play(
        params: ConferencesPlayParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.ConferencesPlayResponse>>;
      stop(
        params: ConferencesStopParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.ConferencesStopResponse>>;
      recordStart(
        params: ConferencesRecordStartParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.ConferencesRecordStartResponse>>;
      recordStop(
        params: ConferencesRecordStopParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.ConferencesRecordStopResponse>>;
      update(
        params: ConferencesUpdateParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.ConferencesUpdateResponse>>;
      leave(
        params: ConferencesLeaveParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.ConferencesLeaveResponse>>;
      recordResume(
        params: ConferencesRecordResumeParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.ConferencesRecordResumeResponse>>;
      recordPause(
        params: ConferencesRecordPauseParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.ConferencesRecordPauseResponse>>;

      participants(
        id: ConferencesParticipantsId,
        params: ConferencesParticipantsParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.ConferencesParticipantsResponse>>;
    }
  }
}
