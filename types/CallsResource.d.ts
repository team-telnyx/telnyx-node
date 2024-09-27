import {paths} from './TelnyxAPI.js';

declare module 'telnyx' {
  namespace Telnyx {
    type CallsRetrieveId =
      paths['/calls/{call_control_id}']['get']['parameters']['path']['call_control_id'];

    type CallsRetrieveParams =
      paths['/calls/{call_control_id}']['get']['parameters']['query'];

    type CallsRetrieveResponse =
      paths['/calls/{call_control_id}']['get']['responses']['200']['content']['application/json']['data'];

    type CallsCreateParams =
      paths['/calls']['post']['requestBody']['content']['application/json'];

    type CallsCreateResponse =
      paths['/calls']['post']['responses']['200']['content']['application/json']['data'];

    type CallsAnswerParams =
      paths['/calls/{call_control_id}/actions/answer']['post']['requestBody']['content']['application/json'];
    type CallsRejectParams =
      paths['/calls/{call_control_id}/actions/reject']['post']['requestBody']['content']['application/json'];
    type CallsHangupParams =
      paths['/calls/{call_control_id}/actions/hangup']['post']['requestBody']['content']['application/json'];
    type CallsBridgeParams =
      paths['/calls/{call_control_id}/actions/bridge']['post']['requestBody']['content']['application/json'];
    type CallsSpeakParams =
      paths['/calls/{call_control_id}/actions/speak']['post']['requestBody']['content']['application/json'];
    type CallsForkStartParams =
      paths['/calls/{call_control_id}/actions/fork_start']['post']['requestBody']['content']['application/json'];
    type CallsForkStopParams =
      paths['/calls/{call_control_id}/actions/fork_stop']['post']['requestBody']['content']['application/json'];
    type CallsGatherParams =
      paths['/calls/{call_control_id}/actions/gather']['post']['requestBody']['content']['application/json'];
    type CallsGatherUsingAudioParams =
      paths['/calls/{call_control_id}/actions/gather_using_audio']['post']['requestBody']['content']['application/json'];
    type CallsGatherUsingSpeakParams =
      paths['/calls/{call_control_id}/actions/gather_using_speak']['post']['requestBody']['content']['application/json'];
    type CallsGatherStopParams =
      paths['/calls/{call_control_id}/actions/gather_stop']['post']['requestBody']['content']['application/json'];
    type CallsPlaybackStartParams =
      paths['/calls/{call_control_id}/actions/playback_start']['post']['requestBody']['content']['application/json'];
    type CallsPlaybackStopParams =
      paths['/calls/{call_control_id}/actions/playback_stop']['post']['requestBody']['content']['application/json'];
    type CallsRecordStartParams =
      paths['/calls/{call_control_id}/actions/record_start']['post']['requestBody']['content']['application/json'];
    type CallsRecordStopParams =
      paths['/calls/{call_control_id}/actions/record_stop']['post']['requestBody']['content']['application/json'];
    type CallsRecordPauseParams =
      paths['/calls/{call_control_id}/actions/record_pause']['post']['requestBody']['content']['application/json'];
    type CallsRecordResumeParams =
      paths['/calls/{call_control_id}/actions/record_resume']['post']['requestBody']['content']['application/json'];
    type CallsReferParams =
      paths['/calls/{call_control_id}/actions/refer']['post']['requestBody']['content']['application/json'];
    type CallsSendDtmfParams =
      paths['/calls/{call_control_id}/actions/send_dtmf']['post']['requestBody']['content']['application/json'];
    type CallsStreamingStartParams =
      paths['/calls/{call_control_id}/actions/streaming_start']['post']['requestBody']['content']['application/json'];
    type CallsStreamingStopParams =
      paths['/calls/{call_control_id}/actions/streaming_stop']['post']['requestBody']['content']['application/json'];
    type CallsSuppressionStartParams =
      paths['/calls/{call_control_id}/actions/suppression_start']['post']['requestBody']['content']['application/json'];
    type CallsSuppressionStopParams =
      paths['/calls/{call_control_id}/actions/suppression_stop']['post']['requestBody']['content']['application/json'];
    type CallsTransferParams =
      paths['/calls/{call_control_id}/actions/transfer']['post']['requestBody']['content']['application/json'];
    type CallsTranscriptionStartParams =
      paths['/calls/{call_control_id}/actions/transcription_start']['post']['requestBody']['content']['application/json'];
    type CallsTranscriptionStopParams =
      paths['/calls/{call_control_id}/actions/transcription_stop']['post']['requestBody']['content']['application/json'];
    type CallsEnqueueParams =
      paths['/calls/{call_control_id}/actions/enqueue']['post']['requestBody']['content']['application/json'];
    type CallsLeaveQueueParams =
      paths['/calls/{call_control_id}/actions/leave_queue']['post']['requestBody']['content']['application/json'];

    type CallsAnswerResponse =
      paths['/calls/{call_control_id}/actions/answer']['post']['responses']['200']['content']['application/json']['data'];
    type CallsRejectResponse =
      paths['/calls/{call_control_id}/actions/reject']['post']['responses']['200']['content']['application/json']['data'];
    type CallsHangupResponse =
      paths['/calls/{call_control_id}/actions/hangup']['post']['responses']['200']['content']['application/json']['data'];
    type CallsBridgeResponse =
      paths['/calls/{call_control_id}/actions/bridge']['post']['responses']['200']['content']['application/json']['data'];
    type CallsSpeakResponse =
      paths['/calls/{call_control_id}/actions/speak']['post']['responses']['200']['content']['application/json']['data'];
    type CallsForkStartResponse =
      paths['/calls/{call_control_id}/actions/fork_start']['post']['responses']['200']['content']['application/json']['data'];
    type CallsForkStopResponse =
      paths['/calls/{call_control_id}/actions/fork_stop']['post']['responses']['200']['content']['application/json']['data'];
    type CallsGatherResponse =
      paths['/calls/{call_control_id}/actions/gather']['post']['responses']['200']['content']['application/json']['data'];
    type CallsGatherUsingAudioResponse =
      paths['/calls/{call_control_id}/actions/gather_using_audio']['post']['responses']['200']['content']['application/json']['data'];
    type CallsGatherUsingSpeakResponse =
      paths['/calls/{call_control_id}/actions/gather_using_speak']['post']['responses']['200']['content']['application/json']['data'];
    type CallsGatherStopResponse =
      paths['/calls/{call_control_id}/actions/gather_stop']['post']['responses']['200']['content']['application/json']['data'];
    type CallsPlaybackStartResponse =
      paths['/calls/{call_control_id}/actions/playback_start']['post']['responses']['200']['content']['application/json']['data'];
    type CallsPlaybackStopResponse =
      paths['/calls/{call_control_id}/actions/playback_stop']['post']['responses']['200']['content']['application/json']['data'];
    type CallsRecordStartResponse =
      paths['/calls/{call_control_id}/actions/record_start']['post']['responses']['200']['content']['application/json']['data'];
    type CallsRecordStopResponse =
      paths['/calls/{call_control_id}/actions/record_stop']['post']['responses']['200']['content']['application/json']['data'];
    type CallsRecordPauseResponse =
      paths['/calls/{call_control_id}/actions/record_pause']['post']['responses']['200']['content']['application/json']['data'];
    type CallsRecordResumeResponse =
      paths['/calls/{call_control_id}/actions/record_resume']['post']['responses']['200']['content']['application/json']['data'];
    type CallsReferResponse =
      paths['/calls/{call_control_id}/actions/refer']['post']['responses']['200']['content']['application/json']['data'];
    type CallsSendDtmfResponse =
      paths['/calls/{call_control_id}/actions/send_dtmf']['post']['responses']['200']['content']['application/json']['data'];
    type CallsStreamingStartResponse =
      paths['/calls/{call_control_id}/actions/streaming_start']['post']['responses']['200']['content']['application/json']['data'];
    type CallsStreamingStopResponse =
      paths['/calls/{call_control_id}/actions/streaming_stop']['post']['responses']['200']['content']['application/json']['data'];
    type CallsSuppressionStartResponse =
      paths['/calls/{call_control_id}/actions/suppression_start']['post']['responses']['200']['content']['application/json']['data'];
    type CallsSuppressionStopResponse =
      paths['/calls/{call_control_id}/actions/suppression_stop']['post']['responses']['200']['content']['application/json']['data'];
    type CallsTransferResponse =
      paths['/calls/{call_control_id}/actions/transfer']['post']['responses']['200']['content']['application/json']['data'];
    type CallsTranscriptionStartResponse =
      paths['/calls/{call_control_id}/actions/transcription_start']['post']['responses']['200']['content']['application/json']['data'];
    type CallsTranscriptionStopResponse =
      paths['/calls/{call_control_id}/actions/transcription_stop']['post']['responses']['200']['content']['application/json']['data'];
    type CallsEnqueueResponse =
      paths['/calls/{call_control_id}/actions/enqueue']['post']['responses']['200']['content']['application/json']['data'];
    type CallsLeaveQueueResponse =
      paths['/calls/{call_control_id}/actions/leave_queue']['post']['responses']['200']['content']['application/json']['data'];

    type CallsNestedMethods = {
      answer: CallsResource['answer'];
      reject: CallsResource['reject'];
      hangup: CallsResource['hangup'];
      bridge: CallsResource['bridge'];
      speak: CallsResource['speak'];
      forkStart: CallsResource['forkStart'];
      forkStop: CallsResource['forkStop'];
      gather: CallsResource['gather'];
      gatherUsingAudio: CallsResource['gatherUsingAudio'];
      gatherUsingSpeak: CallsResource['gatherUsingSpeak'];
      gatherStop: CallsResource['gatherStop'];
      playbackStart: CallsResource['playbackStart'];
      playbackStop: CallsResource['playbackStop'];
      recordStart: CallsResource['recordStart'];
      recordStop: CallsResource['recordStop'];
      recordPause: CallsResource['recordPause'];
      recordResume: CallsResource['recordResume'];
      refer: CallsResource['refer'];
      sendDtmf: CallsResource['sendDtmf'];
      streamingStart: CallsResource['streamingStart'];
      streamingStop: CallsResource['streamingStop'];
      suppressionStart: CallsResource['suppressionStart'];
      suppressionStop: CallsResource['suppressionStop'];
      transfer: CallsResource['transfer'];
      transcriptionStart: CallsResource['transcriptionStart'];
      transcriptionStop: CallsResource['transcriptionStop'];
      enqueue: CallsResource['enqueue'];
      leaveQueue: CallsResource['leaveQueue'];
    };

    class CallsResource {
      retrieve(
        id: CallsRetrieveId,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CallsRetrieveResponse>>;

      Create(
        params: CallsCreateParams,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<Telnyx.CallsCreateResponse & CallsNestedMethods>
      >;

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
    }
  }
}
