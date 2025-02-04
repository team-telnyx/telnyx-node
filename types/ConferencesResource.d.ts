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

    type ConferencesJoinId =
      paths['/conferences/{id}/actions/join']['post']['parameters']['path']['id'];
    type ConferencesJoinParams =
      paths['/conferences/{id}/actions/join']['post']['requestBody']['content']['application/json'];
    type ConferencesMuteId =
      paths['/conferences/{id}/actions/mute']['post']['parameters']['path']['id'];
    type ConferencesMuteParams =
      paths['/conferences/{id}/actions/mute']['post']['responses']['200']['content']['application/json'];
    type ConferencesUnmuteId =
      paths['/conferences/{id}/actions/unmute']['post']['parameters']['path']['id'];
    type ConferencesUnmuteParams =
      paths['/conferences/{id}/actions/unmute']['post']['responses']['200']['content']['application/json'];
    type ConferencesHoldId =
      paths['/conferences/{id}/actions/hold']['post']['parameters']['path']['id'];
    type ConferencesHoldParams =
      paths['/conferences/{id}/actions/hold']['post']['responses']['200']['content']['application/json'];
    type ConferencesUnholdId =
      paths['/conferences/{id}/actions/unhold']['post']['parameters']['path']['id'];
    type ConferencesUnholdParams =
      paths['/conferences/{id}/actions/unhold']['post']['responses']['200']['content']['application/json'];
    type ConferencesSpeakId =
      paths['/conferences/{id}/actions/speak']['post']['parameters']['path']['id'];
    type ConferencesSpeakParams =
      paths['/conferences/{id}/actions/speak']['post']['responses']['200']['content']['application/json'];
    type ConferencesPlayId =
      paths['/conferences/{id}/actions/play']['post']['parameters']['path']['id'];
    type ConferencesPlayParams =
      paths['/conferences/{id}/actions/play']['post']['responses']['200']['content']['application/json'];
    type ConferencesStopId =
      paths['/conferences/{id}/actions/stop']['post']['parameters']['path']['id'];
    type ConferencesStopParams =
      paths['/conferences/{id}/actions/stop']['post']['responses']['200']['content']['application/json'];
    type ConferencesRecordStartId =
      paths['/conferences/{id}/actions/record_start']['post']['parameters']['path']['id'];
    type ConferencesRecordStartParams =
      paths['/conferences/{id}/actions/record_start']['post']['responses']['200']['content']['application/json'];
    type ConferencesRecordStopId =
      paths['/conferences/{id}/actions/record_stop']['post']['parameters']['path']['id'];
    type ConferencesRecordStopParams =
      paths['/conferences/{id}/actions/record_stop']['post']['responses']['200']['content']['application/json'];
    type ConferencesRecordResumeId =
      paths['/conferences/{id}/actions/record_resume']['post']['parameters']['path']['id'];
    type ConferencesRecordResumeParams =
      paths['/conferences/{id}/actions/record_resume']['post']['responses']['200']['content']['application/json'];
    type ConferencesRecordPauseId =
      paths['/conferences/{id}/actions/record_pause']['post']['parameters']['path']['id'];
    type ConferencesRecordPauseParams =
      paths['/conferences/{id}/actions/record_pause']['post']['responses']['200']['content']['application/json'];
    type ConferencesUpdateId =
      paths['/conferences/{id}/actions/update']['post']['parameters']['path']['id'];
    type ConferencesUpdateParams =
      paths['/conferences/{id}/actions/update']['post']['responses']['200']['content']['application/json'];
    type ConferencesLeaveId =
      paths['/conferences/{id}/actions/leave']['post']['parameters']['path']['id'];
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
      listParticipants(
        params: ConferencesParticipantsParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.ConferencesParticipantsResponse>>;
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
        Telnyx.Response<
          Telnyx.ConferencesRetrieveResponse &
            NestedResponseData<
              ConferencesRetrieveResponse['data'],
              ConferencesNestedMethods
            >
        >
      >;

      create(
        params: ConferencesCreateParams,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<
          Telnyx.ConferencesCreateResponse &
            NestedResponseData<
              ConferencesCreateResponse['data'],
              ConferencesNestedMethods
            >
        >
      >;

      join(
        id: ConferencesJoinId,
        params: ConferencesJoinParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.ConferencesJoinResponse>>;
      mute(
        id: ConferencesMuteId,
        params: ConferencesMuteParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.ConferencesMuteResponse>>;
      unmute(
        id: ConferencesUnmuteId,
        params: ConferencesUnmuteParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.ConferencesUnmuteResponse>>;
      hold(
        id: ConferencesHoldId,
        params: ConferencesHoldParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.ConferencesHoldResponse>>;
      unhold(
        id: ConferencesUnholdId,
        params: ConferencesUnholdParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.ConferencesUnholdResponse>>;
      speak(
        id: ConferencesSpeakId,
        params: ConferencesSpeakParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.ConferencesSpeakResponse>>;
      play(
        id: ConferencesPlayId,
        params: ConferencesPlayParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.ConferencesPlayResponse>>;
      stop(
        id: ConferencesStopId,
        params: ConferencesStopParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.ConferencesStopResponse>>;
      recordStart(
        id: ConferencesRecordStartId,
        params: ConferencesRecordStartParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.ConferencesRecordStartResponse>>;
      recordStop(
        id: ConferencesRecordStopId,
        params: ConferencesRecordStopParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.ConferencesRecordStopResponse>>;
      update(
        id: ConferencesUpdateId,
        params: ConferencesUpdateParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.ConferencesUpdateResponse>>;
      leave(
        id: ConferencesLeaveId,
        params: ConferencesLeaveParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.ConferencesLeaveResponse>>;
      recordResume(
        id: ConferencesRecordResumeId,
        params: ConferencesRecordResumeParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.ConferencesRecordResumeResponse>>;
      recordPause(
        id: ConferencesRecordPauseId,
        params: ConferencesRecordPauseParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.ConferencesRecordPauseResponse>>;

      listParticipants(
        id: ConferencesParticipantsId,
        params: ConferencesParticipantsParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.ConferencesParticipantsResponse>>;
    }
  }
}
