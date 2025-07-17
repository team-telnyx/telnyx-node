import {paths} from './TelnyxAPI.js';

declare module 'telnyx' {
  namespace Telnyx {
    type CallsRetrieveId =
      paths['/calls/{call_control_id}']['get']['parameters']['path']['call_control_id'];

    type CallsRetrieveParams =
      paths['/calls/{call_control_id}']['get']['parameters']['query'];

    type CallsRetrieveResponse =
      paths['/calls/{call_control_id}']['get']['responses']['200']['content']['application/json'];

    type CallsCreateParams =
      paths['/calls']['post']['requestBody']['content']['application/json'];

    type CallsCreateResponse =
      paths['/calls']['post']['responses']['200']['content']['application/json'];

    type CallsAnswerId =
      paths['/calls/{call_control_id}/actions/answer']['post']['parameters']['path']['call_control_id'];
    type CallsAnswerParams =
      paths['/calls/{call_control_id}/actions/answer']['post']['requestBody']['content']['application/json'];
    type CallsRejectId =
      paths['/calls/{call_control_id}/actions/reject']['post']['parameters']['path']['call_control_id'];
    type CallsRejectParams =
      paths['/calls/{call_control_id}/actions/reject']['post']['requestBody']['content']['application/json'];
    type CallsHangupId =
      paths['/calls/{call_control_id}/actions/hangup']['post']['parameters']['path']['call_control_id'];
    type CallsHangupParams =
      paths['/calls/{call_control_id}/actions/hangup']['post']['requestBody']['content']['application/json'];
    type CallsBridgeId =
      paths['/calls/{call_control_id}/actions/bridge']['post']['parameters']['path']['call_control_id'];
    type CallsBridgeParams =
      paths['/calls/{call_control_id}/actions/bridge']['post']['requestBody']['content']['application/json'];
    type CallsSpeakId =
      paths['/calls/{call_control_id}/actions/speak']['post']['parameters']['path']['call_control_id'];
    type CallsSpeakParams =
      paths['/calls/{call_control_id}/actions/speak']['post']['requestBody']['content']['application/json'];
    type CallsForkStartId =
      paths['/calls/{call_control_id}/actions/fork_start']['post']['parameters']['path']['call_control_id'];
    type CallsForkStartParams =
      paths['/calls/{call_control_id}/actions/fork_start']['post']['requestBody']['content']['application/json'];
    type CallsForkStopId =
      paths['/calls/{call_control_id}/actions/fork_stop']['post']['parameters']['path']['call_control_id'];
    type CallsForkStopParams =
      paths['/calls/{call_control_id}/actions/fork_stop']['post']['requestBody']['content']['application/json'];
    type CallsGatherId =
      paths['/calls/{call_control_id}/actions/gather']['post']['parameters']['path']['call_control_id'];
    type CallsGatherParams =
      paths['/calls/{call_control_id}/actions/gather']['post']['requestBody']['content']['application/json'];
    type CallsGatherUsingAudioId =
      paths['/calls/{call_control_id}/actions/gather_using_audio']['post']['parameters']['path']['call_control_id'];
    type CallsGatherUsingAudioParams =
      paths['/calls/{call_control_id}/actions/gather_using_audio']['post']['requestBody']['content']['application/json'];
    type CallsGatherUsingSpeakId =
      paths['/calls/{call_control_id}/actions/gather_using_speak']['post']['parameters']['path']['call_control_id'];
    type CallsGatherUsingSpeakParams =
      paths['/calls/{call_control_id}/actions/gather_using_speak']['post']['requestBody']['content']['application/json'];
    type CallsGatherStopId =
      paths['/calls/{call_control_id}/actions/gather_stop']['post']['parameters']['path']['call_control_id'];
    type CallsGatherStopParams =
      paths['/calls/{call_control_id}/actions/gather_stop']['post']['requestBody']['content']['application/json'];
    type CallsPlaybackStartId =
      paths['/calls/{call_control_id}/actions/playback_start']['post']['parameters']['path']['call_control_id'];
    type CallsPlaybackStartParams =
      paths['/calls/{call_control_id}/actions/playback_start']['post']['requestBody']['content']['application/json'];
    type CallsPlaybackStopId =
      paths['/calls/{call_control_id}/actions/playback_stop']['post']['parameters']['path']['call_control_id'];
    type CallsPlaybackStopParams =
      paths['/calls/{call_control_id}/actions/playback_stop']['post']['requestBody']['content']['application/json'];
    type CallsRecordStartId =
      paths['/calls/{call_control_id}/actions/record_start']['post']['parameters']['path']['call_control_id'];
    type CallsRecordStartParams =
      paths['/calls/{call_control_id}/actions/record_start']['post']['requestBody']['content']['application/json'];
    type CallsRecordStopId =
      paths['/calls/{call_control_id}/actions/record_stop']['post']['parameters']['path']['call_control_id'];
    type CallsRecordStopParams =
      paths['/calls/{call_control_id}/actions/record_stop']['post']['requestBody']['content']['application/json'];
    type CallsRecordPauseId =
      paths['/calls/{call_control_id}/actions/record_pause']['post']['parameters']['path']['call_control_id'];
    type CallsRecordPauseParams =
      paths['/calls/{call_control_id}/actions/record_pause']['post']['requestBody']['content']['application/json'];
    type CallsRecordResumeId =
      paths['/calls/{call_control_id}/actions/record_resume']['post']['parameters']['path']['call_control_id'];
    type CallsRecordResumeParams =
      paths['/calls/{call_control_id}/actions/record_resume']['post']['requestBody']['content']['application/json'];
    type CallsReferId =
      paths['/calls/{call_control_id}/actions/refer']['post']['parameters']['path']['call_control_id'];
    type CallsReferParams =
      paths['/calls/{call_control_id}/actions/refer']['post']['requestBody']['content']['application/json'];
    type CallsSendDtmfId =
      paths['/calls/{call_control_id}/actions/send_dtmf']['post']['parameters']['path']['call_control_id'];
    type CallsSendDtmfParams =
      paths['/calls/{call_control_id}/actions/send_dtmf']['post']['requestBody']['content']['application/json'];
    type CallsStreamingStartId =
      paths['/calls/{call_control_id}/actions/streaming_start']['post']['parameters']['path']['call_control_id'];
    type CallsStreamingStartParams =
      paths['/calls/{call_control_id}/actions/streaming_start']['post']['requestBody']['content']['application/json'];
    type CallsStreamingStopId =
      paths['/calls/{call_control_id}/actions/streaming_stop']['post']['parameters']['path']['call_control_id'];
    type CallsStreamingStopParams =
      paths['/calls/{call_control_id}/actions/streaming_stop']['post']['requestBody']['content']['application/json'];
    type CallsSuppressionStartId =
      paths['/calls/{call_control_id}/actions/suppression_start']['post']['parameters']['path']['call_control_id'];
    type CallsSuppressionStartParams =
      paths['/calls/{call_control_id}/actions/suppression_start']['post']['requestBody']['content']['application/json'];
    type CallsSuppressionStopId =
      paths['/calls/{call_control_id}/actions/suppression_stop']['post']['parameters']['path']['call_control_id'];
    type CallsSuppressionStopParams =
      paths['/calls/{call_control_id}/actions/suppression_stop']['post']['requestBody']['content']['application/json'];
    type CallsTransferId =
      paths['/calls/{call_control_id}/actions/transfer']['post']['parameters']['path']['call_control_id'];
    type CallsTransferParams =
      paths['/calls/{call_control_id}/actions/transfer']['post']['requestBody']['content']['application/json'];
    type CallsTranscriptionStartId =
      paths['/calls/{call_control_id}/actions/transcription_start']['post']['parameters']['path']['call_control_id'];
    type CallsTranscriptionStartParams =
      paths['/calls/{call_control_id}/actions/transcription_start']['post']['requestBody']['content']['application/json'];
    type CallsTranscriptionStopId =
      paths['/calls/{call_control_id}/actions/transcription_stop']['post']['parameters']['path']['call_control_id'];
    type CallsTranscriptionStopParams =
      paths['/calls/{call_control_id}/actions/transcription_stop']['post']['requestBody']['content']['application/json'];
    type CallsEnqueueId =
      paths['/calls/{call_control_id}/actions/enqueue']['post']['parameters']['path']['call_control_id'];
    type CallsEnqueueParams =
      paths['/calls/{call_control_id}/actions/enqueue']['post']['requestBody']['content']['application/json'];
    type CallsLeaveQueueId =
      paths['/calls/{call_control_id}/actions/leave_queue']['post']['parameters']['path']['call_control_id'];
    type CallsLeaveQueueParams =
      paths['/calls/{call_control_id}/actions/leave_queue']['post']['requestBody']['content']['application/json'];
    type CallsClientStateUpdateId =
      paths['/calls/{call_control_id}/actions/client_state_update']['put']['parameters']['path']['call_control_id'];
    type CallsClientStateUpdateParams =
      paths['/calls/{call_control_id}/actions/client_state_update']['put']['requestBody']['content']['application/json'];

    type CallsAnswerResponse =
      paths['/calls/{call_control_id}/actions/answer']['post']['responses']['200']['content']['application/json'];
    type CallsRejectResponse =
      paths['/calls/{call_control_id}/actions/reject']['post']['responses']['200']['content']['application/json'];
    type CallsHangupResponse =
      paths['/calls/{call_control_id}/actions/hangup']['post']['responses']['200']['content']['application/json'];
    type CallsBridgeResponse =
      paths['/calls/{call_control_id}/actions/bridge']['post']['responses']['200']['content']['application/json'];
    type CallsSpeakResponse =
      paths['/calls/{call_control_id}/actions/speak']['post']['responses']['200']['content']['application/json'];
    type CallsForkStartResponse =
      paths['/calls/{call_control_id}/actions/fork_start']['post']['responses']['200']['content']['application/json'];
    type CallsForkStopResponse =
      paths['/calls/{call_control_id}/actions/fork_stop']['post']['responses']['200']['content']['application/json'];
    type CallsGatherResponse =
      paths['/calls/{call_control_id}/actions/gather']['post']['responses']['200']['content']['application/json'];
    type CallsGatherUsingAudioResponse =
      paths['/calls/{call_control_id}/actions/gather_using_audio']['post']['responses']['200']['content']['application/json'];
    type CallsGatherUsingSpeakResponse =
      paths['/calls/{call_control_id}/actions/gather_using_speak']['post']['responses']['200']['content']['application/json'];
    type CallsGatherStopResponse =
      paths['/calls/{call_control_id}/actions/gather_stop']['post']['responses']['200']['content']['application/json'];
    type CallsPlaybackStartResponse =
      paths['/calls/{call_control_id}/actions/playback_start']['post']['responses']['200']['content']['application/json'];
    type CallsPlaybackStopResponse =
      paths['/calls/{call_control_id}/actions/playback_stop']['post']['responses']['200']['content']['application/json'];
    type CallsRecordStartResponse =
      paths['/calls/{call_control_id}/actions/record_start']['post']['responses']['200']['content']['application/json'];
    type CallsRecordStopResponse =
      paths['/calls/{call_control_id}/actions/record_stop']['post']['responses']['200']['content']['application/json'];
    type CallsRecordPauseResponse =
      paths['/calls/{call_control_id}/actions/record_pause']['post']['responses']['200']['content']['application/json'];
    type CallsRecordResumeResponse =
      paths['/calls/{call_control_id}/actions/record_resume']['post']['responses']['200']['content']['application/json'];
    type CallsReferResponse =
      paths['/calls/{call_control_id}/actions/refer']['post']['responses']['200']['content']['application/json'];
    type CallsSendDtmfResponse =
      paths['/calls/{call_control_id}/actions/send_dtmf']['post']['responses']['200']['content']['application/json'];
    type CallsStreamingStartResponse =
      paths['/calls/{call_control_id}/actions/streaming_start']['post']['responses']['200']['content']['application/json'];
    type CallsStreamingStopResponse =
      paths['/calls/{call_control_id}/actions/streaming_stop']['post']['responses']['200']['content']['application/json'];
    type CallsSuppressionStartResponse =
      paths['/calls/{call_control_id}/actions/suppression_start']['post']['responses']['200']['content']['application/json'];
    type CallsSuppressionStopResponse =
      paths['/calls/{call_control_id}/actions/suppression_stop']['post']['responses']['200']['content']['application/json'];
    type CallsTransferResponse =
      paths['/calls/{call_control_id}/actions/transfer']['post']['responses']['200']['content']['application/json'];
    type CallsTranscriptionStartResponse =
      paths['/calls/{call_control_id}/actions/transcription_start']['post']['responses']['200']['content']['application/json'];
    type CallsTranscriptionStopResponse =
      paths['/calls/{call_control_id}/actions/transcription_stop']['post']['responses']['200']['content']['application/json'];
    type CallsEnqueueResponse =
      paths['/calls/{call_control_id}/actions/enqueue']['post']['responses']['200']['content']['application/json'];
    type CallsLeaveQueueResponse =
      paths['/calls/{call_control_id}/actions/leave_queue']['post']['responses']['200']['content']['application/json'];
    type CallsClientStateUpdateResponse =
      paths['/calls/{call_control_id}/actions/client_state_update']['put']['responses']['200']['content']['application/json'];

    type CallsNestedMethods = {
      answer(
        params: CallsAnswerParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CallsAnswerResponse>>;
      reject(
        params: CallsRejectParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CallsRejectResponse>>;
      hangup(
        params: CallsHangupParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CallsHangupResponse>>;
      bridge(
        params: CallsBridgeParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CallsBridgeResponse>>;
      speak(
        params: CallsSpeakParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CallsSpeakResponse>>;
      forkStart(
        params: CallsForkStartParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CallsForkStartResponse>>;
      forkStop(
        params: CallsForkStopParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CallsForkStopResponse>>;
      gather(
        params: CallsGatherParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CallsGatherResponse>>;
      gatherUsingAudio(
        params: CallsGatherUsingAudioParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CallsGatherUsingAudioResponse>>;
      gatherUsingSpeak(
        params: CallsGatherUsingSpeakParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CallsGatherUsingSpeakResponse>>;
      gatherStop(
        params: CallsGatherStopParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CallsGatherStopResponse>>;
      playbackStart(
        params: CallsPlaybackStartParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CallsPlaybackStartResponse>>;
      playbackStop(
        params: CallsPlaybackStopParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CallsPlaybackStopResponse>>;
      recordStart(
        params: CallsRecordStartParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CallsRecordStartResponse>>;
      recordStop(
        params: CallsRecordStopParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CallsRecordStopResponse>>;
      recordPause(
        params: CallsRecordPauseParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CallsRecordPauseResponse>>;
      recordResume(
        params: CallsRecordResumeParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CallsRecordResumeResponse>>;
      refer(
        params: CallsReferParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CallsReferResponse>>;
      sendDtmf(
        params: CallsSendDtmfParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CallsSendDtmfResponse>>;
      streamingStart(
        params: CallsStreamingStartParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CallsStreamingStartResponse>>;
      streamingStop(
        params: CallsStreamingStopParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CallsStreamingStopResponse>>;
      suppressionStart(
        params: CallsSuppressionStartParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CallsSuppressionStartResponse>>;
      suppressionStop(
        params: CallsSuppressionStopParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CallsSuppressionStopResponse>>;
      transfer(
        params: CallsTransferParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CallsTransferResponse>>;
      transcriptionStart(
        params: CallsTranscriptionStartParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CallsTranscriptionStartResponse>>;
      transcriptionStop(
        params: CallsTranscriptionStopParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CallsTranscriptionStopResponse>>;
      enqueue(
        params: CallsEnqueueParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CallsEnqueueResponse>>;
      leaveQueue(
        params: CallsLeaveQueueParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CallsLeaveQueueResponse>>;
      clientStateUpdate(
        params: CallsClientStateUpdateParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CallsClientStateUpdateResponse>>;
    };

    class CallsResource {
      retrieve(
        id: CallsRetrieveId,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CallsRetrieveResponse>>;

      create(
        params: CallsCreateParams,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<
          Telnyx.CallsCreateResponse &
            NestedResponseData<CallsCreateResponse['data'], CallsNestedMethods>
        >
      >;

      dial(
        params: CallsCreateParams,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<
          Telnyx.CallsCreateResponse &
            NestedResponseData<CallsCreateResponse['data'], CallsNestedMethods>
        >
      >;

      answer(
        id: CallsAnswerId,
        params: CallsAnswerParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CallsAnswerResponse>>;
      reject(
        id: CallsRejectId,
        params: CallsRejectParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CallsRejectResponse>>;
      hangup(
        id: CallsHangupId,
        params: CallsHangupParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CallsHangupResponse>>;
      bridge(
        id: CallsBridgeId,
        params: CallsBridgeParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CallsBridgeResponse>>;
      speak(
        id: CallsSpeakId,
        params: CallsSpeakParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CallsSpeakResponse>>;
      forkStart(
        id: CallsForkStartId,
        params: CallsForkStartParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CallsForkStartResponse>>;
      forkStop(
        id: CallsForkStopId,
        params: CallsForkStopParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CallsForkStopResponse>>;
      gather(
        id: CallsGatherId,
        params: CallsGatherParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CallsGatherResponse>>;
      gatherUsingAudio(
        id: CallsGatherUsingAudioId,
        params: CallsGatherUsingAudioParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CallsGatherUsingAudioResponse>>;
      gatherUsingSpeak(
        id: CallsGatherUsingSpeakId,
        params: CallsGatherUsingSpeakParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CallsGatherUsingSpeakResponse>>;
      gatherStop(
        id: CallsGatherStopId,
        params: CallsGatherStopParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CallsGatherStopResponse>>;
      playbackStart(
        id: CallsPlaybackStartId,
        params: CallsPlaybackStartParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CallsPlaybackStartResponse>>;
      playbackStop(
        id: CallsPlaybackStopId,
        params: CallsPlaybackStopParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CallsPlaybackStopResponse>>;
      recordStart(
        id: CallsRecordStartId,
        params: CallsRecordStartParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CallsRecordStartResponse>>;
      recordStop(
        id: CallsRecordStopId,
        params: CallsRecordStopParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CallsRecordStopResponse>>;
      recordPause(
        id: CallsRecordPauseId,
        params: CallsRecordPauseParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CallsRecordPauseResponse>>;
      recordResume(
        id: CallsRecordResumeId,
        params: CallsRecordResumeParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CallsRecordResumeResponse>>;
      refer(
        id: CallsReferId,
        params: CallsReferParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CallsReferResponse>>;
      sendDtmf(
        id: CallsSendDtmfId,
        params: CallsSendDtmfParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CallsSendDtmfResponse>>;
      streamingStart(
        id: CallsStreamingStartId,
        params: CallsStreamingStartParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CallsStreamingStartResponse>>;
      streamingStop(
        id: CallsStreamingStopId,
        params: CallsStreamingStopParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CallsStreamingStopResponse>>;
      suppressionStart(
        id: CallsSuppressionStartId,
        params: CallsSuppressionStartParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CallsSuppressionStartResponse>>;
      suppressionStop(
        id: CallsSuppressionStopId,
        params: CallsSuppressionStopParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CallsSuppressionStopResponse>>;
      transfer(
        id: CallsTransferId,
        params: CallsTransferParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CallsTransferResponse>>;
      transcriptionStart(
        id: CallsTranscriptionStartId,
        params: CallsTranscriptionStartParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CallsTranscriptionStartResponse>>;
      transcriptionStop(
        id: CallsTranscriptionStopId,
        params: CallsTranscriptionStopParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CallsTranscriptionStopResponse>>;
      enqueue(
        id: CallsEnqueueId,
        params: CallsEnqueueParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CallsEnqueueResponse>>;
      leaveQueue(
        id: CallsLeaveQueueId,
        params: CallsLeaveQueueParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CallsLeaveQueueResponse>>;
      clientStateUpdate(
        id: CallsClientStateUpdateId,
        params: CallsClientStateUpdateParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CallsClientStateUpdateResponse>>;
    }
  }
}
