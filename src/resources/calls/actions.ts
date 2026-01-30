// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CallsAPI from './calls';
import * as AssistantsAPI from '../ai/assistants/assistants';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Actions extends APIResource {
  /**
   * Add messages to the conversation started by an AI assistant on the call.
   *
   * @example
   * ```ts
   * const response =
   *   await client.calls.actions.addAIAssistantMessages(
   *     'call_control_id',
   *   );
   * ```
   */
  addAIAssistantMessages(
    callControlID: string,
    body: ActionAddAIAssistantMessagesParams,
    options?: RequestOptions,
  ): APIPromise<ActionAddAIAssistantMessagesResponse> {
    return this._client.post(path`/calls/${callControlID}/actions/ai_assistant_add_messages`, {
      body,
      ...options,
    });
  }

  /**
   * Answer an incoming call. You must issue this command before executing subsequent
   * commands on an incoming call.
   *
   * **Expected Webhooks:**
   *
   * - `call.answered`
   * - `streaming.started`, `streaming.stopped` or `streaming.failed` if `stream_url`
   *   was set
   *
   * When the `record` parameter is set to `record-from-answer`, the response will
   * include a `recording_id` field.
   *
   * @example
   * ```ts
   * const response = await client.calls.actions.answer(
   *   'call_control_id',
   * );
   * ```
   */
  answer(
    callControlID: string,
    body: ActionAnswerParams,
    options?: RequestOptions,
  ): APIPromise<ActionAnswerResponse> {
    return this._client.post(path`/calls/${callControlID}/actions/answer`, { body, ...options });
  }

  /**
   * Bridge two call control calls.
   *
   * **Expected Webhooks:**
   *
   * - `call.bridged` for Leg A
   * - `call.bridged` for Leg B
   *
   * @example
   * ```ts
   * const response = await client.calls.actions.bridge(
   *   'call_control_id',
   *   {
   *     call_control_id_to_bridge_with:
   *       'v3:MdI91X4lWFEs7IgbBEOT9M4AigoY08M0WWZFISt1Yw2axZ_IiE4pqg',
   *   },
   * );
   * ```
   */
  bridge(
    callControlIDToBridge: string,
    params: ActionBridgeParams,
    options?: RequestOptions,
  ): APIPromise<ActionBridgeResponse> {
    const { call_control_id_to_bridge_with, ...body } = params;
    return this._client.post(path`/calls/${callControlIDToBridge}/actions/bridge`, {
      body: { call_control_id: call_control_id_to_bridge_with, ...body },
      ...options,
    });
  }

  /**
   * Put the call in a queue.
   *
   * @example
   * ```ts
   * const response = await client.calls.actions.enqueue(
   *   'call_control_id',
   *   { queue_name: 'support' },
   * );
   * ```
   */
  enqueue(
    callControlID: string,
    body: ActionEnqueueParams,
    options?: RequestOptions,
  ): APIPromise<ActionEnqueueResponse> {
    return this._client.post(path`/calls/${callControlID}/actions/enqueue`, { body, ...options });
  }

  /**
   * Gather DTMF signals to build interactive menus.
   *
   * You can pass a list of valid digits. The `Answer` command must be issued before
   * the `gather` command.
   *
   * **Expected Webhooks:**
   *
   * - `call.dtmf.received` (you may receive many of these webhooks)
   * - `call.gather.ended`
   *
   * @example
   * ```ts
   * const response = await client.calls.actions.gather(
   *   'call_control_id',
   * );
   * ```
   */
  gather(
    callControlID: string,
    body: ActionGatherParams,
    options?: RequestOptions,
  ): APIPromise<ActionGatherResponse> {
    return this._client.post(path`/calls/${callControlID}/actions/gather`, { body, ...options });
  }

  /**
   * Gather parameters defined in the request payload using a voice assistant.
   *
   * You can pass parameters described as a JSON Schema object and the voice
   * assistant will attempt to gather these informations.
   *
   * **Expected Webhooks:**
   *
   * - `call.ai_gather.ended`
   * - `call.conversation.ended`
   * - `call.ai_gather.partial_results` (if `send_partial_results` is set to `true`)
   * - `call.ai_gather.message_history_updated` (if `send_message_history_updates` is
   *   set to `true`)
   *
   * @example
   * ```ts
   * const response = await client.calls.actions.gatherUsingAI(
   *   'call_control_id',
   *   {
   *     parameters: {
   *       properties: 'bar',
   *       required: 'bar',
   *       type: 'bar',
   *     },
   *   },
   * );
   * ```
   */
  gatherUsingAI(
    callControlID: string,
    body: ActionGatherUsingAIParams,
    options?: RequestOptions,
  ): APIPromise<ActionGatherUsingAIResponse> {
    return this._client.post(path`/calls/${callControlID}/actions/gather_using_ai`, { body, ...options });
  }

  /**
   * Play an audio file on the call until the required DTMF signals are gathered to
   * build interactive menus.
   *
   * You can pass a list of valid digits along with an 'invalid_audio_url', which
   * will be played back at the beginning of each prompt. Playback will be
   * interrupted when a DTMF signal is received. The
   * `Answer command must be issued before the `gather_using_audio` command.
   *
   * **Expected Webhooks:**
   *
   * - `call.playback.started`
   * - `call.playback.ended`
   * - `call.dtmf.received` (you may receive many of these webhooks)
   * - `call.gather.ended`
   *
   * @example
   * ```ts
   * const response =
   *   await client.calls.actions.gatherUsingAudio(
   *     'call_control_id',
   *   );
   * ```
   */
  gatherUsingAudio(
    callControlID: string,
    body: ActionGatherUsingAudioParams,
    options?: RequestOptions,
  ): APIPromise<ActionGatherUsingAudioResponse> {
    return this._client.post(path`/calls/${callControlID}/actions/gather_using_audio`, { body, ...options });
  }

  /**
   * Convert text to speech and play it on the call until the required DTMF signals
   * are gathered to build interactive menus.
   *
   * You can pass a list of valid digits along with an 'invalid_payload', which will
   * be played back at the beginning of each prompt. Speech will be interrupted when
   * a DTMF signal is received. The `Answer` command must be issued before the
   * `gather_using_speak` command.
   *
   * **Expected Webhooks:**
   *
   * - `call.dtmf.received` (you may receive many of these webhooks)
   * - `call.gather.ended`
   *
   * @example
   * ```ts
   * const response =
   *   await client.calls.actions.gatherUsingSpeak(
   *     'call_control_id',
   *     { payload: 'say this on call', voice: 'male' },
   *   );
   * ```
   */
  gatherUsingSpeak(
    callControlID: string,
    body: ActionGatherUsingSpeakParams,
    options?: RequestOptions,
  ): APIPromise<ActionGatherUsingSpeakResponse> {
    return this._client.post(path`/calls/${callControlID}/actions/gather_using_speak`, { body, ...options });
  }

  /**
   * Hang up the call.
   *
   * **Expected Webhooks:**
   *
   * - `call.hangup`
   * - `call.recording.saved`
   *
   * @example
   * ```ts
   * const response = await client.calls.actions.hangup(
   *   'call_control_id',
   * );
   * ```
   */
  hangup(
    callControlID: string,
    body: ActionHangupParams,
    options?: RequestOptions,
  ): APIPromise<ActionHangupResponse> {
    return this._client.post(path`/calls/${callControlID}/actions/hangup`, { body, ...options });
  }

  /**
   * Removes the call from a queue.
   *
   * @example
   * ```ts
   * const response = await client.calls.actions.leaveQueue(
   *   'call_control_id',
   * );
   * ```
   */
  leaveQueue(
    callControlID: string,
    body: ActionLeaveQueueParams,
    options?: RequestOptions,
  ): APIPromise<ActionLeaveQueueResponse> {
    return this._client.post(path`/calls/${callControlID}/actions/leave_queue`, { body, ...options });
  }

  /**
   * Pause recording the call. Recording can be resumed via Resume recording command.
   *
   * **Expected Webhooks:**
   *
   * There are no webhooks associated with this command.
   *
   * @example
   * ```ts
   * const response = await client.calls.actions.pauseRecording(
   *   'call_control_id',
   * );
   * ```
   */
  pauseRecording(
    callControlID: string,
    body: ActionPauseRecordingParams,
    options?: RequestOptions,
  ): APIPromise<ActionPauseRecordingResponse> {
    return this._client.post(path`/calls/${callControlID}/actions/record_pause`, { body, ...options });
  }

  /**
   * Initiate a SIP Refer on a Call Control call. You can initiate a SIP Refer at any
   * point in the duration of a call.
   *
   * **Expected Webhooks:**
   *
   * - `call.refer.started`
   * - `call.refer.completed`
   * - `call.refer.failed`
   *
   * @example
   * ```ts
   * const response = await client.calls.actions.refer(
   *   'call_control_id',
   *   {
   *     sip_address: 'sip:username@sip.non-telnyx-address.com',
   *   },
   * );
   * ```
   */
  refer(
    callControlID: string,
    body: ActionReferParams,
    options?: RequestOptions,
  ): APIPromise<ActionReferResponse> {
    return this._client.post(path`/calls/${callControlID}/actions/refer`, { body, ...options });
  }

  /**
   * Reject an incoming call.
   *
   * **Expected Webhooks:**
   *
   * - `call.hangup`
   *
   * @example
   * ```ts
   * const response = await client.calls.actions.reject(
   *   'call_control_id',
   *   { cause: 'USER_BUSY' },
   * );
   * ```
   */
  reject(
    callControlID: string,
    body: ActionRejectParams,
    options?: RequestOptions,
  ): APIPromise<ActionRejectResponse> {
    return this._client.post(path`/calls/${callControlID}/actions/reject`, { body, ...options });
  }

  /**
   * Resume recording the call.
   *
   * **Expected Webhooks:**
   *
   * There are no webhooks associated with this command.
   *
   * @example
   * ```ts
   * const response = await client.calls.actions.resumeRecording(
   *   'call_control_id',
   * );
   * ```
   */
  resumeRecording(
    callControlID: string,
    body: ActionResumeRecordingParams,
    options?: RequestOptions,
  ): APIPromise<ActionResumeRecordingResponse> {
    return this._client.post(path`/calls/${callControlID}/actions/record_resume`, { body, ...options });
  }

  /**
   * Sends DTMF tones from this leg. DTMF tones will be heard by the other end of the
   * call.
   *
   * **Expected Webhooks:**
   *
   * There are no webhooks associated with this command.
   *
   * @example
   * ```ts
   * const response = await client.calls.actions.sendDtmf(
   *   'call_control_id',
   *   { digits: '1www2WABCDw9' },
   * );
   * ```
   */
  sendDtmf(
    callControlID: string,
    body: ActionSendDtmfParams,
    options?: RequestOptions,
  ): APIPromise<ActionSendDtmfResponse> {
    return this._client.post(path`/calls/${callControlID}/actions/send_dtmf`, { body, ...options });
  }

  /**
   * Sends SIP info from this leg.
   *
   * **Expected Webhooks:**
   *
   * - `call.sip_info.received` (to be received on the target call leg)
   *
   * @example
   * ```ts
   * const response = await client.calls.actions.sendSipInfo(
   *   'call_control_id',
   *   {
   *     body: '{"key": "value", "numValue": 100}',
   *     content_type: 'application/json',
   *   },
   * );
   * ```
   */
  sendSipInfo(
    callControlID: string,
    body: ActionSendSipInfoParams,
    options?: RequestOptions,
  ): APIPromise<ActionSendSipInfoResponse> {
    return this._client.post(path`/calls/${callControlID}/actions/send_sip_info`, { body, ...options });
  }

  /**
   * Convert text to speech and play it back on the call. If multiple speak text
   * commands are issued consecutively, the audio files will be placed in a queue
   * awaiting playback.
   *
   * **Expected Webhooks:**
   *
   * - `call.speak.started`
   * - `call.speak.ended`
   *
   * @example
   * ```ts
   * const response = await client.calls.actions.speak(
   *   'call_control_id',
   *   { payload: 'Say this on the call', voice: 'female' },
   * );
   * ```
   */
  speak(
    callControlID: string,
    body: ActionSpeakParams,
    options?: RequestOptions,
  ): APIPromise<ActionSpeakResponse> {
    return this._client.post(path`/calls/${callControlID}/actions/speak`, { body, ...options });
  }

  /**
   * Start an AI assistant on the call.
   *
   * **Expected Webhooks:**
   *
   * - `call.conversation.ended`
   * - `call.conversation_insights.generated`
   *
   * @example
   * ```ts
   * const response =
   *   await client.calls.actions.startAIAssistant(
   *     'call_control_id',
   *   );
   * ```
   */
  startAIAssistant(
    callControlID: string,
    body: ActionStartAIAssistantParams,
    options?: RequestOptions,
  ): APIPromise<ActionStartAIAssistantResponse> {
    return this._client.post(path`/calls/${callControlID}/actions/ai_assistant_start`, { body, ...options });
  }

  /**
   * Call forking allows you to stream the media from a call to a specific target in
   * realtime. This stream can be used to enable realtime audio analysis to support a
   * variety of use cases, including fraud detection, or the creation of AI-generated
   * audio responses. Requests must specify either the `target` attribute or the `rx`
   * and `tx` attributes.
   *
   * **Expected Webhooks:**
   *
   * - `call.fork.started`
   * - `call.fork.stopped`
   *
   * @example
   * ```ts
   * const response = await client.calls.actions.startForking(
   *   'call_control_id',
   * );
   * ```
   */
  startForking(
    callControlID: string,
    body: ActionStartForkingParams,
    options?: RequestOptions,
  ): APIPromise<ActionStartForkingResponse> {
    return this._client.post(path`/calls/${callControlID}/actions/fork_start`, { body, ...options });
  }

  /**
   * Noise Suppression Start (BETA)
   *
   * @example
   * ```ts
   * const response =
   *   await client.calls.actions.startNoiseSuppression(
   *     'call_control_id',
   *   );
   * ```
   */
  startNoiseSuppression(
    callControlID: string,
    body: ActionStartNoiseSuppressionParams,
    options?: RequestOptions,
  ): APIPromise<ActionStartNoiseSuppressionResponse> {
    return this._client.post(path`/calls/${callControlID}/actions/suppression_start`, { body, ...options });
  }

  /**
   * Play an audio file on the call. If multiple play audio commands are issued
   * consecutively, the audio files will be placed in a queue awaiting playback.
   *
   * _Notes:_
   *
   * - When `overlay` is enabled, `target_legs` is limited to `self`.
   * - A customer cannot Play Audio with `overlay=true` unless there is a Play Audio
   *   with `overlay=false` actively playing.
   *
   * **Expected Webhooks:**
   *
   * - `call.playback.started`
   * - `call.playback.ended`
   *
   * @example
   * ```ts
   * const response = await client.calls.actions.startPlayback(
   *   'call_control_id',
   * );
   * ```
   */
  startPlayback(
    callControlID: string,
    body: ActionStartPlaybackParams,
    options?: RequestOptions,
  ): APIPromise<ActionStartPlaybackResponse> {
    return this._client.post(path`/calls/${callControlID}/actions/playback_start`, { body, ...options });
  }

  /**
   * Start recording the call. Recording will stop on call hang-up, or can be
   * initiated via the Stop Recording command.
   *
   * **Expected Webhooks:**
   *
   * - `call.recording.saved`
   * - `call.recording.transcription.saved`
   * - `call.recording.error`
   *
   * @example
   * ```ts
   * const response = await client.calls.actions.startRecording(
   *   'call_control_id',
   *   { channels: 'single', format: 'wav' },
   * );
   * ```
   */
  startRecording(
    callControlID: string,
    body: ActionStartRecordingParams,
    options?: RequestOptions,
  ): APIPromise<ActionStartRecordingResponse> {
    return this._client.post(path`/calls/${callControlID}/actions/record_start`, { body, ...options });
  }

  /**
   * Start siprec session to configured in SIPREC connector SRS.
   *
   * **Expected Webhooks:**
   *
   * - `siprec.started`
   * - `siprec.stopped`
   * - `siprec.failed`
   *
   * @example
   * ```ts
   * const response = await client.calls.actions.startSiprec(
   *   'call_control_id',
   * );
   * ```
   */
  startSiprec(
    callControlID: string,
    body: ActionStartSiprecParams,
    options?: RequestOptions,
  ): APIPromise<ActionStartSiprecResponse> {
    return this._client.post(path`/calls/${callControlID}/actions/siprec_start`, { body, ...options });
  }

  /**
   * Start streaming the media from a call to a specific WebSocket address or
   * Dialogflow connection in near-realtime. Audio will be delivered as
   * base64-encoded RTP payload (raw audio), wrapped in JSON payloads.
   *
   * Please find more details about media streaming messages specification under the
   * [link](https://developers.telnyx.com/docs/voice/programmable-voice/media-streaming).
   *
   * @example
   * ```ts
   * const response = await client.calls.actions.startStreaming(
   *   'call_control_id',
   * );
   * ```
   */
  startStreaming(
    callControlID: string,
    body: ActionStartStreamingParams,
    options?: RequestOptions,
  ): APIPromise<ActionStartStreamingResponse> {
    return this._client.post(path`/calls/${callControlID}/actions/streaming_start`, { body, ...options });
  }

  /**
   * Start real-time transcription. Transcription will stop on call hang-up, or can
   * be initiated via the Transcription stop command.
   *
   * **Expected Webhooks:**
   *
   * - `call.transcription`
   *
   * @example
   * ```ts
   * const response =
   *   await client.calls.actions.startTranscription(
   *     'call_control_id',
   *   );
   * ```
   */
  startTranscription(
    callControlID: string,
    body: ActionStartTranscriptionParams,
    options?: RequestOptions,
  ): APIPromise<ActionStartTranscriptionResponse> {
    return this._client.post(path`/calls/${callControlID}/actions/transcription_start`, { body, ...options });
  }

  /**
   * Stop an AI assistant on the call.
   *
   * @example
   * ```ts
   * const response = await client.calls.actions.stopAIAssistant(
   *   'call_control_id',
   * );
   * ```
   */
  stopAIAssistant(
    callControlID: string,
    body: ActionStopAIAssistantParams,
    options?: RequestOptions,
  ): APIPromise<ActionStopAIAssistantResponse> {
    return this._client.post(path`/calls/${callControlID}/actions/ai_assistant_stop`, { body, ...options });
  }

  /**
   * Stop forking a call.
   *
   * **Expected Webhooks:**
   *
   * - `call.fork.stopped`
   *
   * @example
   * ```ts
   * const response = await client.calls.actions.stopForking(
   *   'call_control_id',
   * );
   * ```
   */
  stopForking(
    callControlID: string,
    body: ActionStopForkingParams,
    options?: RequestOptions,
  ): APIPromise<ActionStopForkingResponse> {
    return this._client.post(path`/calls/${callControlID}/actions/fork_stop`, { body, ...options });
  }

  /**
   * Stop current gather.
   *
   * **Expected Webhooks:**
   *
   * - `call.gather.ended`
   *
   * @example
   * ```ts
   * const response = await client.calls.actions.stopGather(
   *   'call_control_id',
   * );
   * ```
   */
  stopGather(
    callControlID: string,
    body: ActionStopGatherParams,
    options?: RequestOptions,
  ): APIPromise<ActionStopGatherResponse> {
    return this._client.post(path`/calls/${callControlID}/actions/gather_stop`, { body, ...options });
  }

  /**
   * Noise Suppression Stop (BETA)
   *
   * @example
   * ```ts
   * const response =
   *   await client.calls.actions.stopNoiseSuppression(
   *     'call_control_id',
   *   );
   * ```
   */
  stopNoiseSuppression(
    callControlID: string,
    body: ActionStopNoiseSuppressionParams,
    options?: RequestOptions,
  ): APIPromise<ActionStopNoiseSuppressionResponse> {
    return this._client.post(path`/calls/${callControlID}/actions/suppression_stop`, { body, ...options });
  }

  /**
   * Stop audio being played on the call.
   *
   * **Expected Webhooks:**
   *
   * - `call.playback.ended` or `call.speak.ended`
   *
   * @example
   * ```ts
   * const response = await client.calls.actions.stopPlayback(
   *   'call_control_id',
   * );
   * ```
   */
  stopPlayback(
    callControlID: string,
    body: ActionStopPlaybackParams,
    options?: RequestOptions,
  ): APIPromise<ActionStopPlaybackResponse> {
    return this._client.post(path`/calls/${callControlID}/actions/playback_stop`, { body, ...options });
  }

  /**
   * Stop recording the call.
   *
   * **Expected Webhooks:**
   *
   * - `call.recording.saved`
   *
   * @example
   * ```ts
   * const response = await client.calls.actions.stopRecording(
   *   'call_control_id',
   * );
   * ```
   */
  stopRecording(
    callControlID: string,
    body: ActionStopRecordingParams,
    options?: RequestOptions,
  ): APIPromise<ActionStopRecordingResponse> {
    return this._client.post(path`/calls/${callControlID}/actions/record_stop`, { body, ...options });
  }

  /**
   * Stop SIPREC session.
   *
   * **Expected Webhooks:**
   *
   * - `siprec.stopped`
   *
   * @example
   * ```ts
   * const response = await client.calls.actions.stopSiprec(
   *   'call_control_id',
   * );
   * ```
   */
  stopSiprec(
    callControlID: string,
    body: ActionStopSiprecParams,
    options?: RequestOptions,
  ): APIPromise<ActionStopSiprecResponse> {
    return this._client.post(path`/calls/${callControlID}/actions/siprec_stop`, { body, ...options });
  }

  /**
   * Stop streaming a call to a WebSocket.
   *
   * **Expected Webhooks:**
   *
   * - `streaming.stopped`
   *
   * @example
   * ```ts
   * const response = await client.calls.actions.stopStreaming(
   *   'call_control_id',
   * );
   * ```
   */
  stopStreaming(
    callControlID: string,
    body: ActionStopStreamingParams,
    options?: RequestOptions,
  ): APIPromise<ActionStopStreamingResponse> {
    return this._client.post(path`/calls/${callControlID}/actions/streaming_stop`, { body, ...options });
  }

  /**
   * Stop real-time transcription.
   *
   * @example
   * ```ts
   * const response =
   *   await client.calls.actions.stopTranscription(
   *     'call_control_id',
   *   );
   * ```
   */
  stopTranscription(
    callControlID: string,
    body: ActionStopTranscriptionParams,
    options?: RequestOptions,
  ): APIPromise<ActionStopTranscriptionResponse> {
    return this._client.post(path`/calls/${callControlID}/actions/transcription_stop`, { body, ...options });
  }

  /**
   * Switch the supervisor role for a bridged call. This allows switching between
   * different supervisor modes during an active call
   *
   * @example
   * ```ts
   * const response =
   *   await client.calls.actions.switchSupervisorRole(
   *     'call_control_id',
   *     { role: 'barge' },
   *   );
   * ```
   */
  switchSupervisorRole(
    callControlID: string,
    body: ActionSwitchSupervisorRoleParams,
    options?: RequestOptions,
  ): APIPromise<ActionSwitchSupervisorRoleResponse> {
    return this._client.post(path`/calls/${callControlID}/actions/switch_supervisor_role`, {
      body,
      ...options,
    });
  }

  /**
   * Transfer a call to a new destination. If the transfer is unsuccessful, a
   * `call.hangup` webhook for the other call (Leg B) will be sent indicating that
   * the transfer could not be completed. The original call will remain active and
   * may be issued additional commands, potentially transfering the call to an
   * alternate destination.
   *
   * **Expected Webhooks:**
   *
   * - `call.initiated`
   * - `call.bridged` to Leg B
   * - `call.answered` or `call.hangup`
   * - `call.machine.detection.ended` if `answering_machine_detection` was requested
   * - `call.machine.greeting.ended` if `answering_machine_detection` was requested
   *   to detect the end of machine greeting
   * - `call.machine.premium.detection.ended` if
   *   `answering_machine_detection=premium` was requested
   * - `call.machine.premium.greeting.ended` if `answering_machine_detection=premium`
   *   was requested and a beep was detected
   *
   * @example
   * ```ts
   * const response = await client.calls.actions.transfer(
   *   'call_control_id',
   *   { to: '+18005550100 or sip:username@sip.telnyx.com' },
   * );
   * ```
   */
  transfer(
    callControlID: string,
    body: ActionTransferParams,
    options?: RequestOptions,
  ): APIPromise<ActionTransferResponse> {
    return this._client.post(path`/calls/${callControlID}/actions/transfer`, { body, ...options });
  }

  /**
   * Updates client state
   *
   * @example
   * ```ts
   * const response =
   *   await client.calls.actions.updateClientState(
   *     'call_control_id',
   *     { client_state: 'aGF2ZSBhIG5pY2UgZGF5ID1d' },
   *   );
   * ```
   */
  updateClientState(
    callControlID: string,
    body: ActionUpdateClientStateParams,
    options?: RequestOptions,
  ): APIPromise<ActionUpdateClientStateResponse> {
    return this._client.put(path`/calls/${callControlID}/actions/client_state_update`, { body, ...options });
  }
}

export interface AwsVoiceSettings {
  /**
   * Voice settings provider type
   */
  type: 'aws';

  [k: string]: unknown;
}

export interface CallControlCommandResult {
  result?: string;
}

export interface ElevenLabsVoiceSettings {
  /**
   * Voice settings provider type
   */
  type: 'elevenlabs';

  /**
   * The `identifier` for an integration secret
   * [/v2/integration_secrets](https://developers.telnyx.com/api/secrets-manager/integration-secrets/create-integration-secret)
   * that refers to your ElevenLabs API key. Warning: Free plans are unlikely to work
   * with this integration.
   */
  api_key_ref?: string;
}

/**
 * Language to use for speech recognition
 */
export type GoogleTranscriptionLanguage =
  | 'af'
  | 'sq'
  | 'am'
  | 'ar'
  | 'hy'
  | 'az'
  | 'eu'
  | 'bn'
  | 'bs'
  | 'bg'
  | 'my'
  | 'ca'
  | 'yue'
  | 'zh'
  | 'hr'
  | 'cs'
  | 'da'
  | 'nl'
  | 'en'
  | 'et'
  | 'fil'
  | 'fi'
  | 'fr'
  | 'gl'
  | 'ka'
  | 'de'
  | 'el'
  | 'gu'
  | 'iw'
  | 'hi'
  | 'hu'
  | 'is'
  | 'id'
  | 'it'
  | 'ja'
  | 'jv'
  | 'kn'
  | 'kk'
  | 'km'
  | 'ko'
  | 'lo'
  | 'lv'
  | 'lt'
  | 'mk'
  | 'ms'
  | 'ml'
  | 'mr'
  | 'mn'
  | 'ne'
  | 'no'
  | 'fa'
  | 'pl'
  | 'pt'
  | 'pa'
  | 'ro'
  | 'ru'
  | 'rw'
  | 'sr'
  | 'si'
  | 'sk'
  | 'sl'
  | 'ss'
  | 'st'
  | 'es'
  | 'su'
  | 'sw'
  | 'sv'
  | 'ta'
  | 'te'
  | 'th'
  | 'tn'
  | 'tr'
  | 'ts'
  | 'uk'
  | 'ur'
  | 'uz'
  | 've'
  | 'vi'
  | 'xh'
  | 'zu';

/**
 * Settings for handling user interruptions during assistant speech
 */
export interface InterruptionSettings {
  /**
   * When true, allows users to interrupt the assistant while speaking
   */
  enable?: boolean;
}

export type Loopcount = string | number;

export interface StopRecordingRequest {
  /**
   * Use this field to add state to every subsequent webhook. It must be a valid
   * Base-64 encoded string.
   */
  client_state?: string;

  /**
   * Use this field to avoid duplicate commands. Telnyx will ignore any command with
   * the same `command_id` for the same `call_control_id`.
   */
  command_id?: string;

  /**
   * Uniquely identifies the resource.
   */
  recording_id?: string;
}

/**
 * Language to use for speech recognition
 */
export type TelnyxTranscriptionLanguage =
  | 'en'
  | 'zh'
  | 'de'
  | 'es'
  | 'ru'
  | 'ko'
  | 'fr'
  | 'ja'
  | 'pt'
  | 'tr'
  | 'pl'
  | 'ca'
  | 'nl'
  | 'ar'
  | 'sv'
  | 'it'
  | 'id'
  | 'hi'
  | 'fi'
  | 'vi'
  | 'he'
  | 'uk'
  | 'el'
  | 'ms'
  | 'cs'
  | 'ro'
  | 'da'
  | 'hu'
  | 'ta'
  | 'no'
  | 'th'
  | 'ur'
  | 'hr'
  | 'bg'
  | 'lt'
  | 'la'
  | 'mi'
  | 'ml'
  | 'cy'
  | 'sk'
  | 'te'
  | 'fa'
  | 'lv'
  | 'bn'
  | 'sr'
  | 'az'
  | 'sl'
  | 'kn'
  | 'et'
  | 'mk'
  | 'br'
  | 'eu'
  | 'is'
  | 'hy'
  | 'ne'
  | 'mn'
  | 'bs'
  | 'kk'
  | 'sq'
  | 'sw'
  | 'gl'
  | 'mr'
  | 'pa'
  | 'si'
  | 'km'
  | 'sn'
  | 'yo'
  | 'so'
  | 'af'
  | 'oc'
  | 'ka'
  | 'be'
  | 'tg'
  | 'sd'
  | 'gu'
  | 'am'
  | 'yi'
  | 'lo'
  | 'uz'
  | 'fo'
  | 'ht'
  | 'ps'
  | 'tk'
  | 'nn'
  | 'mt'
  | 'sa'
  | 'lb'
  | 'my'
  | 'bo'
  | 'tl'
  | 'mg'
  | 'as'
  | 'tt'
  | 'haw'
  | 'ln'
  | 'ha'
  | 'ba'
  | 'jw'
  | 'su'
  | 'auto_detect';

export interface TelnyxVoiceSettings {
  /**
   * Voice settings provider type
   */
  type: 'telnyx';

  /**
   * The voice speed to be used for the voice. The voice speed must be between 0.1
   * and 2.0. Default value is 1.0.
   */
  voice_speed?: number;
}

/**
 * The settings associated with speech to text for the voice assistant. This is
 * only relevant if the assistant uses a text-to-text language model. Any assistant
 * using a model with native audio support (e.g. `fixie-ai/ultravox-v0_4`) will
 * ignore this field.
 */
export interface TranscriptionConfig {
  /**
   * The speech to text model to be used by the voice assistant.
   *
   * - `distil-whisper/distil-large-v2` is lower latency but English-only.
   * - `openai/whisper-large-v3-turbo` is multi-lingual with automatic language
   *   detection but slightly higher latency.
   * - `google` is a multi-lingual option, please describe the language in the
   *   `language` field.
   */
  model?: string;
}

export interface TranscriptionEngineAConfig {
  /**
   * Enables speaker diarization.
   */
  enable_speaker_diarization?: boolean;

  /**
   * Hints to improve transcription accuracy.
   */
  hints?: Array<string>;

  /**
   * Whether to send also interim results. If set to false, only final results will
   * be sent.
   */
  interim_results?: boolean;

  /**
   * Language to use for speech recognition
   */
  language?: GoogleTranscriptionLanguage;

  /**
   * Defines maximum number of speakers in the conversation.
   */
  max_speaker_count?: number;

  /**
   * Defines minimum number of speakers in the conversation.
   */
  min_speaker_count?: number;

  /**
   * The model to use for transcription.
   */
  model?:
    | 'latest_long'
    | 'latest_short'
    | 'command_and_search'
    | 'phone_call'
    | 'video'
    | 'default'
    | 'medical_conversation'
    | 'medical_dictation';

  /**
   * Enables profanity_filter.
   */
  profanity_filter?: boolean;

  /**
   * Speech context to improve transcription accuracy.
   */
  speech_context?: Array<TranscriptionEngineAConfig.SpeechContext>;

  /**
   * Engine identifier for Google transcription service
   */
  transcription_engine?: 'A';

  /**
   * Enables enhanced transcription, this works for models `phone_call` and `video`.
   */
  use_enhanced?: boolean;
}

export namespace TranscriptionEngineAConfig {
  export interface SpeechContext {
    /**
     * Boost factor for the speech context.
     */
    boost?: number;

    phrases?: Array<string>;
  }
}

export interface TranscriptionEngineAzureConfig {
  /**
   * Azure region to use for speech recognition
   */
  region: 'australiaeast' | 'centralindia' | 'eastus' | 'northcentralus' | 'westeurope' | 'westus2';

  /**
   * Engine identifier for Azure transcription service
   */
  transcription_engine: 'Azure';

  /**
   * Reference to the API key for authentication. See
   * [integration secrets documentation](https://developers.telnyx.com/api/secrets-manager/integration-secrets/create-integration-secret)
   * for details. The parameter is optional as defaults are available for some
   * regions.
   */
  api_key_ref?: string;

  /**
   * Language to use for speech recognition
   */
  language?:
    | 'af'
    | 'am'
    | 'ar'
    | 'bg'
    | 'bn'
    | 'bs'
    | 'ca'
    | 'cs'
    | 'cy'
    | 'da'
    | 'de'
    | 'el'
    | 'en'
    | 'es'
    | 'et'
    | 'eu'
    | 'fa'
    | 'fi'
    | 'fr'
    | 'ga'
    | 'gl'
    | 'gu'
    | 'he'
    | 'hi'
    | 'hr'
    | 'hu'
    | 'hy'
    | 'id'
    | 'is'
    | 'it'
    | 'ja'
    | 'ka'
    | 'kk'
    | 'km'
    | 'kn'
    | 'ko'
    | 'lo'
    | 'lt'
    | 'lv'
    | 'mk'
    | 'ml'
    | 'mn'
    | 'mr'
    | 'ms'
    | 'mt'
    | 'my'
    | 'nb'
    | 'ne'
    | 'nl'
    | 'pl'
    | 'ps'
    | 'pt'
    | 'ro'
    | 'ru'
    | 'si'
    | 'sk'
    | 'sl'
    | 'so'
    | 'sq'
    | 'sr'
    | 'sv'
    | 'sw'
    | 'ta'
    | 'te'
    | 'th'
    | 'tr'
    | 'uk'
    | 'ur'
    | 'uz'
    | 'vi'
    | 'wuu'
    | 'yue'
    | 'zh'
    | 'zu'
    | 'auto';
}

export interface TranscriptionEngineBConfig {
  /**
   * Language to use for speech recognition
   */
  language?: TelnyxTranscriptionLanguage;

  /**
   * Engine identifier for Telnyx transcription service
   */
  transcription_engine?: 'B';

  /**
   * The model to use for transcription.
   */
  transcription_model?: 'openai/whisper-tiny' | 'openai/whisper-large-v3-turbo';
}

export type TranscriptionEngineDeepgramConfig =
  | TranscriptionEngineDeepgramConfig.DeepgramNova2
  | TranscriptionEngineDeepgramConfig.DeepgramNova3;

export namespace TranscriptionEngineDeepgramConfig {
  export interface DeepgramNova2 {
    transcription_engine: 'Deepgram';

    transcription_model: 'deepgram/nova-2';

    /**
     * Keywords and their respective intensifiers (boosting values) to improve
     * transcription accuracy for specific words or phrases. The intensifier should be
     * a numeric value. Example: `{"snuffleupagus": 5, "systrom": 2, "krieger": 1}`.
     */
    keywords_boosting?: { [key: string]: number };

    /**
     * Language to use for speech recognition with nova-2 model
     */
    language?:
      | 'bg'
      | 'ca'
      | 'zh'
      | 'zh-CN'
      | 'zh-Hans'
      | 'zh-TW'
      | 'zh-Hant'
      | 'zh-HK'
      | 'cs'
      | 'da'
      | 'da-DK'
      | 'nl'
      | 'en'
      | 'en-US'
      | 'en-AU'
      | 'en-GB'
      | 'en-NZ'
      | 'en-IN'
      | 'et'
      | 'fi'
      | 'nl-BE'
      | 'fr'
      | 'fr-CA'
      | 'de'
      | 'de-CH'
      | 'el'
      | 'hi'
      | 'hu'
      | 'id'
      | 'it'
      | 'ja'
      | 'ko'
      | 'ko-KR'
      | 'lv'
      | 'lt'
      | 'ms'
      | 'no'
      | 'pl'
      | 'pt'
      | 'pt-BR'
      | 'pt-PT'
      | 'ro'
      | 'ru'
      | 'sk'
      | 'es'
      | 'es-419'
      | 'sv'
      | 'sv-SE'
      | 'th'
      | 'th-TH'
      | 'tr'
      | 'uk'
      | 'vi'
      | 'auto_detect';
  }

  export interface DeepgramNova3 {
    transcription_engine: 'Deepgram';

    transcription_model: 'deepgram/nova-3';

    /**
     * Keywords and their respective intensifiers (boosting values) to improve
     * transcription accuracy for specific words or phrases. The intensifier should be
     * a numeric value. Example: `{"snuffleupagus": 5, "systrom": 2, "krieger": 1}`.
     */
    keywords_boosting?: { [key: string]: number };

    /**
     * Language to use for speech recognition with nova-3 model
     */
    language?:
      | 'en'
      | 'en-US'
      | 'en-AU'
      | 'en-GB'
      | 'en-IN'
      | 'en-NZ'
      | 'de'
      | 'nl'
      | 'sv'
      | 'sv-SE'
      | 'da'
      | 'da-DK'
      | 'es'
      | 'es-419'
      | 'fr'
      | 'fr-CA'
      | 'pt'
      | 'pt-BR'
      | 'pt-PT'
      | 'auto_detect';
  }
}

export interface TranscriptionEngineGoogleConfig {
  /**
   * Enables speaker diarization.
   */
  enable_speaker_diarization?: boolean;

  /**
   * Hints to improve transcription accuracy.
   */
  hints?: Array<string>;

  /**
   * Whether to send also interim results. If set to false, only final results will
   * be sent.
   */
  interim_results?: boolean;

  /**
   * Language to use for speech recognition
   */
  language?: GoogleTranscriptionLanguage;

  /**
   * Defines maximum number of speakers in the conversation.
   */
  max_speaker_count?: number;

  /**
   * Defines minimum number of speakers in the conversation.
   */
  min_speaker_count?: number;

  /**
   * The model to use for transcription.
   */
  model?:
    | 'latest_long'
    | 'latest_short'
    | 'command_and_search'
    | 'phone_call'
    | 'video'
    | 'default'
    | 'medical_conversation'
    | 'medical_dictation';

  /**
   * Enables profanity_filter.
   */
  profanity_filter?: boolean;

  /**
   * Speech context to improve transcription accuracy.
   */
  speech_context?: Array<TranscriptionEngineGoogleConfig.SpeechContext>;

  /**
   * Engine identifier for Google transcription service
   */
  transcription_engine?: 'Google';

  /**
   * Enables enhanced transcription, this works for models `phone_call` and `video`.
   */
  use_enhanced?: boolean;
}

export namespace TranscriptionEngineGoogleConfig {
  export interface SpeechContext {
    /**
     * Boost factor for the speech context.
     */
    boost?: number;

    phrases?: Array<string>;
  }
}

export interface TranscriptionEngineTelnyxConfig {
  /**
   * Language to use for speech recognition
   */
  language?: TelnyxTranscriptionLanguage;

  /**
   * Engine identifier for Telnyx transcription service
   */
  transcription_engine?: 'Telnyx';

  /**
   * The model to use for transcription.
   */
  transcription_model?: 'openai/whisper-tiny' | 'openai/whisper-large-v3-turbo';
}

export interface TranscriptionStartRequest {
  /**
   * Use this field to add state to every subsequent webhook. It must be a valid
   * Base-64 encoded string.
   */
  client_state?: string;

  /**
   * Use this field to avoid duplicate commands. Telnyx will ignore any command with
   * the same `command_id` for the same `call_control_id`.
   */
  command_id?: string;

  /**
   * Engine to use for speech recognition. Legacy values `A` - `Google`, `B` -
   * `Telnyx` are supported for backward compatibility.
   */
  transcription_engine?: 'Google' | 'Telnyx' | 'Deepgram' | 'Azure' | 'A' | 'B';

  transcription_engine_config?:
    | TranscriptionEngineGoogleConfig
    | TranscriptionEngineTelnyxConfig
    | TranscriptionStartRequest.DeepgramNova2Config
    | TranscriptionStartRequest.DeepgramNova3Config
    | TranscriptionEngineAzureConfig
    | TranscriptionEngineAConfig
    | TranscriptionEngineBConfig;

  /**
   * Indicates which leg of the call will be transcribed. Use `inbound` for the leg
   * that requested the transcription, `outbound` for the other leg, and `both` for
   * both legs of the call. Will default to `inbound`.
   */
  transcription_tracks?: string;
}

export namespace TranscriptionStartRequest {
  export interface DeepgramNova2Config {
    transcription_engine: 'Deepgram';

    transcription_model: 'deepgram/nova-2';

    /**
     * Keywords and their respective intensifiers (boosting values) to improve
     * transcription accuracy for specific words or phrases. The intensifier should be
     * a numeric value. Example: `{"snuffleupagus": 5, "systrom": 2, "krieger": 1}`.
     */
    keywords_boosting?: { [key: string]: number };

    /**
     * Language to use for speech recognition with nova-2 model
     */
    language?:
      | 'bg'
      | 'ca'
      | 'zh'
      | 'zh-CN'
      | 'zh-Hans'
      | 'zh-TW'
      | 'zh-Hant'
      | 'zh-HK'
      | 'cs'
      | 'da'
      | 'da-DK'
      | 'nl'
      | 'en'
      | 'en-US'
      | 'en-AU'
      | 'en-GB'
      | 'en-NZ'
      | 'en-IN'
      | 'et'
      | 'fi'
      | 'nl-BE'
      | 'fr'
      | 'fr-CA'
      | 'de'
      | 'de-CH'
      | 'el'
      | 'hi'
      | 'hu'
      | 'id'
      | 'it'
      | 'ja'
      | 'ko'
      | 'ko-KR'
      | 'lv'
      | 'lt'
      | 'ms'
      | 'no'
      | 'pl'
      | 'pt'
      | 'pt-BR'
      | 'pt-PT'
      | 'ro'
      | 'ru'
      | 'sk'
      | 'es'
      | 'es-419'
      | 'sv'
      | 'sv-SE'
      | 'th'
      | 'th-TH'
      | 'tr'
      | 'uk'
      | 'vi'
      | 'auto_detect';
  }

  export interface DeepgramNova3Config {
    transcription_engine: 'Deepgram';

    transcription_model: 'deepgram/nova-3';

    /**
     * Keywords and their respective intensifiers (boosting values) to improve
     * transcription accuracy for specific words or phrases. The intensifier should be
     * a numeric value. Example: `{"snuffleupagus": 5, "systrom": 2, "krieger": 1}`.
     */
    keywords_boosting?: { [key: string]: number };

    /**
     * Language to use for speech recognition with nova-3 model
     */
    language?:
      | 'en'
      | 'en-US'
      | 'en-AU'
      | 'en-GB'
      | 'en-IN'
      | 'en-NZ'
      | 'de'
      | 'nl'
      | 'sv'
      | 'sv-SE'
      | 'da'
      | 'da-DK'
      | 'es'
      | 'es-419'
      | 'fr'
      | 'fr-CA'
      | 'pt'
      | 'pt-BR'
      | 'pt-PT'
      | 'auto_detect';
  }
}

export interface ActionAddAIAssistantMessagesResponse {
  data?: CallControlCommandResult;
}

export interface ActionAnswerResponse {
  data?: ActionAnswerResponse.Data;
}

export namespace ActionAnswerResponse {
  export interface Data {
    /**
     * The ID of the recording. Only present when the record parameter is set to
     * record-from-answer.
     */
    recording_id?: string;

    result?: string;
  }
}

export interface ActionBridgeResponse {
  data?: CallControlCommandResult;
}

export interface ActionEnqueueResponse {
  data?: CallControlCommandResult;
}

export interface ActionGatherResponse {
  data?: CallControlCommandResult;
}

export interface ActionGatherUsingAIResponse {
  data?: ActionGatherUsingAIResponse.Data;
}

export namespace ActionGatherUsingAIResponse {
  export interface Data {
    /**
     * The ID of the conversation created by the command.
     */
    conversation_id?: string;

    result?: string;
  }
}

export interface ActionGatherUsingAudioResponse {
  data?: CallControlCommandResult;
}

export interface ActionGatherUsingSpeakResponse {
  data?: CallControlCommandResult;
}

export interface ActionHangupResponse {
  data?: CallControlCommandResult;
}

export interface ActionLeaveQueueResponse {
  data?: CallControlCommandResult;
}

export interface ActionPauseRecordingResponse {
  data?: CallControlCommandResult;
}

export interface ActionReferResponse {
  data?: CallControlCommandResult;
}

export interface ActionRejectResponse {
  data?: CallControlCommandResult;
}

export interface ActionResumeRecordingResponse {
  data?: CallControlCommandResult;
}

export interface ActionSendDtmfResponse {
  data?: CallControlCommandResult;
}

export interface ActionSendSipInfoResponse {
  data?: CallControlCommandResult;
}

export interface ActionSpeakResponse {
  data?: CallControlCommandResult;
}

export interface ActionStartAIAssistantResponse {
  data?: ActionStartAIAssistantResponse.Data;
}

export namespace ActionStartAIAssistantResponse {
  export interface Data {
    /**
     * The ID of the conversation created by the command.
     */
    conversation_id?: string;

    result?: string;
  }
}

export interface ActionStartForkingResponse {
  data?: CallControlCommandResult;
}

export interface ActionStartNoiseSuppressionResponse {
  data?: CallControlCommandResult;
}

export interface ActionStartPlaybackResponse {
  data?: CallControlCommandResult;
}

export interface ActionStartRecordingResponse {
  data?: CallControlCommandResult;
}

export interface ActionStartSiprecResponse {
  data?: CallControlCommandResult;
}

export interface ActionStartStreamingResponse {
  data?: CallControlCommandResult;
}

export interface ActionStartTranscriptionResponse {
  data?: CallControlCommandResult;
}

export interface ActionStopAIAssistantResponse {
  data?: CallControlCommandResult;
}

export interface ActionStopForkingResponse {
  data?: CallControlCommandResult;
}

export interface ActionStopGatherResponse {
  data?: CallControlCommandResult;
}

export interface ActionStopNoiseSuppressionResponse {
  data?: CallControlCommandResult;
}

export interface ActionStopPlaybackResponse {
  data?: CallControlCommandResult;
}

export interface ActionStopRecordingResponse {
  data?: CallControlCommandResult;
}

export interface ActionStopSiprecResponse {
  data?: CallControlCommandResult;
}

export interface ActionStopStreamingResponse {
  data?: CallControlCommandResult;
}

export interface ActionStopTranscriptionResponse {
  data?: CallControlCommandResult;
}

export interface ActionSwitchSupervisorRoleResponse {
  data?: CallControlCommandResult;
}

export interface ActionTransferResponse {
  data?: CallControlCommandResult;
}

export interface ActionUpdateClientStateResponse {
  data?: CallControlCommandResult;
}

export interface ActionAddAIAssistantMessagesParams {
  /**
   * Use this field to add state to every subsequent webhook. It must be a valid
   * Base-64 encoded string.
   */
  client_state?: string;

  /**
   * Use this field to avoid duplicate commands. Telnyx will ignore any command with
   * the same `command_id` for the same `call_control_id`.
   */
  command_id?: string;

  /**
   * The messages to add to the conversation.
   */
  messages?: Array<
    | ActionAddAIAssistantMessagesParams.UserMessage
    | ActionAddAIAssistantMessagesParams.AssistantMessage
    | ActionAddAIAssistantMessagesParams.ToolMessage
    | ActionAddAIAssistantMessagesParams.SystemMessage
    | ActionAddAIAssistantMessagesParams.DeveloperMessage
  >;
}

export namespace ActionAddAIAssistantMessagesParams {
  /**
   * Messages sent by an end user
   */
  export interface UserMessage {
    /**
     * The contents of the user message.
     */
    content: string;

    /**
     * The role of the messages author, in this case `user`.
     */
    role: 'user';

    /**
     * Metadata to add to the message
     */
    metadata?: unknown;
  }

  /**
   * Messages sent by the model in response to user messages.
   */
  export interface AssistantMessage {
    /**
     * The role of the messages author, in this case `assistant`.
     */
    role: 'assistant';

    /**
     * The contents of the assistant message. Required unless `tool_calls`
     */
    content?: string;

    /**
     * Metadata to add to the message
     */
    metadata?: unknown;

    /**
     * The tool calls generated by the model, such as function calls.
     */
    tool_calls?: Array<AssistantMessage.ToolCall>;
  }

  export namespace AssistantMessage {
    /**
     * A call to a function tool created by the model.
     */
    export interface ToolCall {
      /**
       * The ID of the tool call.
       */
      id: string;

      /**
       * The function that the model called.
       */
      function: ToolCall.Function;

      /**
       * The type of the tool. Currently, only `function` is supported.
       */
      type: 'function';
    }

    export namespace ToolCall {
      /**
       * The function that the model called.
       */
      export interface Function {
        /**
         * The name of the function to call.
         */
        name: string;
      }
    }
  }

  export interface ToolMessage {
    /**
     * The contents of the tool message.
     */
    content: string;

    /**
     * The role of the messages author, in this case `tool`.
     */
    role: 'tool';

    /**
     * Tool call that this message is responding to.
     */
    tool_call_id: string;

    /**
     * Metadata to add to the message
     */
    metadata?: unknown;
  }

  /**
   * Developer-provided instructions that the model should follow, regardless of
   * messages sent by the user.
   */
  export interface SystemMessage {
    /**
     * The contents of the system message.
     */
    content: string;

    /**
     * The role of the messages author, in this case `system`.
     */
    role: 'system';

    /**
     * Metadata to add to the message
     */
    metadata?: unknown;
  }

  /**
   * Developer-provided instructions that the model should follow, regardless of
   * messages sent by the user.
   */
  export interface DeveloperMessage {
    /**
     * The contents of the developer message.
     */
    content: string;

    /**
     * The role of the messages author, in this case developer.
     */
    role: 'developer';

    /**
     * Metadata to add to the message
     */
    metadata?: unknown;
  }
}

export interface ActionAnswerParams {
  /**
   * Use this field to set the Billing Group ID for the call. Must be a valid and
   * existing Billing Group ID.
   */
  billing_group_id?: string;

  /**
   * Use this field to add state to every subsequent webhook. It must be a valid
   * Base-64 encoded string.
   */
  client_state?: string;

  /**
   * Use this field to avoid duplicate commands. Telnyx will ignore any command with
   * the same `command_id` for the same `call_control_id`.
   */
  command_id?: string;

  /**
   * Custom headers to be added to the SIP INVITE response.
   */
  custom_headers?: Array<CallsAPI.CustomSipHeader>;

  /**
   * The list of comma-separated codecs in a preferred order for the forked media to
   * be received.
   */
  preferred_codecs?: 'G722,PCMU,PCMA,G729,OPUS,VP8,H264';

  /**
   * Start recording automatically after an event. Disabled by default.
   */
  record?: 'record-from-answer';

  /**
   * Defines which channel should be recorded ('single' or 'dual') when `record` is
   * specified.
   */
  record_channels?: 'single' | 'dual';

  /**
   * The custom recording file name to be used instead of the default `call_leg_id`.
   * Telnyx will still add a Unix timestamp suffix.
   */
  record_custom_file_name?: string;

  /**
   * Defines the format of the recording ('wav' or 'mp3') when `record` is specified.
   */
  record_format?: 'wav' | 'mp3';

  /**
   * Defines the maximum length for the recording in seconds when `record` is
   * specified. The minimum value is 0. The maximum value is 43200. The default value
   * is 0 (infinite).
   */
  record_max_length?: number;

  /**
   * The number of seconds that Telnyx will wait for the recording to be stopped if
   * silence is detected when `record` is specified. The timer only starts when the
   * speech is detected. Please note that call transcription is used to detect
   * silence and the related charge will be applied. The minimum value is 0. The
   * default value is 0 (infinite).
   */
  record_timeout_secs?: number;

  /**
   * The audio track to be recorded. Can be either `both`, `inbound` or `outbound`.
   * If only single track is specified (`inbound`, `outbound`), `channels`
   * configuration is ignored and it will be recorded as mono (single channel).
   */
  record_track?: 'both' | 'inbound' | 'outbound';

  /**
   * When set to `trim-silence`, silence will be removed from the beginning and end
   * of the recording.
   */
  record_trim?: 'trim-silence';

  /**
   * Generate silence RTP packets when no transmission available.
   */
  send_silence_when_idle?: boolean;

  /**
   * SIP headers to be added to the SIP INVITE response. Currently only User-to-User
   * header is supported.
   */
  sip_headers?: Array<CallsAPI.SipHeader>;

  /**
   * Use this field to modify sound effects, for example adjust the pitch.
   */
  sound_modifications?: CallsAPI.SoundModifications;

  /**
   * Indicates codec for bidirectional streaming RTP payloads. Used only with
   * stream_bidirectional_mode=rtp. Case sensitive.
   */
  stream_bidirectional_codec?: CallsAPI.StreamBidirectionalCodec;

  /**
   * Configures method of bidirectional streaming (mp3, rtp).
   */
  stream_bidirectional_mode?: CallsAPI.StreamBidirectionalMode;

  /**
   * Specifies which call legs should receive the bidirectional stream audio.
   */
  stream_bidirectional_target_legs?: CallsAPI.StreamBidirectionalTargetLegs;

  /**
   * Specifies the codec to be used for the streamed audio. When set to 'default' or
   * when transcoding is not possible, the codec from the call will be used.
   */
  stream_codec?: CallsAPI.StreamCodec;

  /**
   * Specifies which track should be streamed.
   */
  stream_track?: 'inbound_track' | 'outbound_track' | 'both_tracks';

  /**
   * The destination WebSocket address where the stream is going to be delivered.
   */
  stream_url?: string;

  /**
   * Enable transcription upon call answer. The default value is false.
   */
  transcription?: boolean;

  transcription_config?: TranscriptionStartRequest;

  /**
   * Use this field to override the URL for which Telnyx will send subsequent
   * webhooks to for this call.
   */
  webhook_url?: string;

  /**
   * HTTP request type used for `webhook_url`.
   */
  webhook_url_method?: 'POST' | 'GET';
}

export interface ActionBridgeParams {
  /**
   * The Call Control ID of the call you want to bridge with, can't be used together
   * with queue parameter or video_room_id parameter.
   */
  call_control_id_to_bridge_with: string;

  /**
   * Use this field to add state to every subsequent webhook. It must be a valid
   * Base-64 encoded string.
   */
  client_state?: string;

  /**
   * Use this field to avoid duplicate commands. Telnyx will ignore any command with
   * the same `command_id` for the same `call_control_id`.
   */
  command_id?: string;

  /**
   * When enabled, DTMF tones are not passed to the call participant. The webhooks
   * containing the DTMF information will be sent.
   */
  mute_dtmf?: 'none' | 'both' | 'self' | 'opposite';

  /**
   * Specifies behavior after the bridge ends (i.e. the opposite leg either hangs up
   * or is transferred). If supplied with the value `self`, the current leg will be
   * parked after unbridge. If not set, the default behavior is to hang up the leg.
   */
  park_after_unbridge?: string;

  /**
   * Specifies whether to play a ringtone if the call you want to bridge with has not
   * yet been answered.
   */
  play_ringtone?: boolean;

  /**
   * The name of the queue you want to bridge with, can't be used together with
   * call_control_id parameter or video_room_id parameter. Bridging with a queue
   * means bridging with the first call in the queue. The call will always be removed
   * from the queue regardless of whether bridging succeeds. Returns an error when
   * the queue is empty.
   */
  queue?: string;

  /**
   * Start recording automatically after an event. Disabled by default.
   */
  record?: 'record-from-answer';

  /**
   * Defines which channel should be recorded ('single' or 'dual') when `record` is
   * specified.
   */
  record_channels?: 'single' | 'dual';

  /**
   * The custom recording file name to be used instead of the default `call_leg_id`.
   * Telnyx will still add a Unix timestamp suffix.
   */
  record_custom_file_name?: string;

  /**
   * Defines the format of the recording ('wav' or 'mp3') when `record` is specified.
   */
  record_format?: 'wav' | 'mp3';

  /**
   * Defines the maximum length for the recording in seconds when `record` is
   * specified. The minimum value is 0. The maximum value is 43200. The default value
   * is 0 (infinite).
   */
  record_max_length?: number;

  /**
   * The number of seconds that Telnyx will wait for the recording to be stopped if
   * silence is detected when `record` is specified. The timer only starts when the
   * speech is detected. Please note that call transcription is used to detect
   * silence and the related charge will be applied. The minimum value is 0. The
   * default value is 0 (infinite).
   */
  record_timeout_secs?: number;

  /**
   * The audio track to be recorded. Can be either `both`, `inbound` or `outbound`.
   * If only single track is specified (`inbound`, `outbound`), `channels`
   * configuration is ignored and it will be recorded as mono (single channel).
   */
  record_track?: 'both' | 'inbound' | 'outbound';

  /**
   * When set to `trim-silence`, silence will be removed from the beginning and end
   * of the recording.
   */
  record_trim?: 'trim-silence';

  /**
   * Specifies which country ringtone to play when `play_ringtone` is set to `true`.
   * If not set, the US ringtone will be played.
   */
  ringtone?:
    | 'at'
    | 'au'
    | 'be'
    | 'bg'
    | 'br'
    | 'ch'
    | 'cl'
    | 'cn'
    | 'cz'
    | 'de'
    | 'dk'
    | 'ee'
    | 'es'
    | 'fi'
    | 'fr'
    | 'gr'
    | 'hu'
    | 'il'
    | 'in'
    | 'it'
    | 'jp'
    | 'lt'
    | 'mx'
    | 'my'
    | 'nl'
    | 'no'
    | 'nz'
    | 'ph'
    | 'pl'
    | 'pt'
    | 'ru'
    | 'se'
    | 'sg'
    | 'th'
    | 'tw'
    | 'uk'
    | 'us-old'
    | 'us'
    | 've'
    | 'za';

  /**
   * The additional parameter that will be passed to the video conference. It is a
   * text field and the user can decide how to use it. For example, you can set the
   * participant name or pass JSON text. It can be used only with video_room_id
   * parameter.
   */
  video_room_context?: string;

  /**
   * The ID of the video room you want to bridge with, can't be used together with
   * call_control_id parameter or queue parameter.
   */
  video_room_id?: string;
}

export interface ActionEnqueueParams {
  /**
   * The name of the queue the call should be put in. If a queue with a given name
   * doesn't exist yet it will be created.
   */
  queue_name: string;

  /**
   * Use this field to add state to every subsequent webhook. It must be a valid
   * Base-64 encoded string.
   */
  client_state?: string;

  /**
   * Use this field to avoid duplicate commands. Telnyx will ignore any command with
   * the same `command_id` for the same `call_control_id`.
   */
  command_id?: string;

  /**
   * If set to true, the call will remain in the queue after hangup. In this case
   * bridging to such call will fail with necessary information needed to
   * re-establish the call.
   */
  keep_after_hangup?: boolean;

  /**
   * The maximum number of calls allowed in the queue at a given time. Can't be
   * modified for an existing queue.
   */
  max_size?: number;

  /**
   * The number of seconds after which the call will be removed from the queue.
   */
  max_wait_time_secs?: number;
}

export interface ActionGatherParams {
  /**
   * Use this field to add state to every subsequent webhook. It must be a valid
   * Base-64 encoded string.
   */
  client_state?: string;

  /**
   * Use this field to avoid duplicate commands. Telnyx will ignore any command with
   * the same `command_id` for the same `call_control_id`.
   */
  command_id?: string;

  /**
   * An id that will be sent back in the corresponding `call.gather.ended` webhook.
   * Will be randomly generated if not specified.
   */
  gather_id?: string;

  /**
   * The number of milliseconds to wait for the first DTMF.
   */
  initial_timeout_millis?: number;

  /**
   * The number of milliseconds to wait for input between digits.
   */
  inter_digit_timeout_millis?: number;

  /**
   * The maximum number of digits to fetch. This parameter has a maximum value
   * of 128.
   */
  maximum_digits?: number;

  /**
   * The minimum number of digits to fetch. This parameter has a minimum value of 1.
   */
  minimum_digits?: number;

  /**
   * The digit used to terminate input if fewer than `maximum_digits` digits have
   * been gathered.
   */
  terminating_digit?: string;

  /**
   * The number of milliseconds to wait to complete the request.
   */
  timeout_millis?: number;

  /**
   * A list of all digits accepted as valid.
   */
  valid_digits?: string;
}

export interface ActionGatherUsingAIParams {
  /**
   * The parameters described as a JSON Schema object that needs to be gathered by
   * the voice assistant. See the
   * [JSON Schema reference](https://json-schema.org/understanding-json-schema) for
   * documentation about the format
   */
  parameters: { [key: string]: unknown };

  /**
   * Assistant configuration including choice of LLM, custom instructions, and tools.
   */
  assistant?: AssistantsAPI.Assistant;

  /**
   * Use this field to add state to every subsequent webhook. It must be a valid
   * Base-64 encoded string.
   */
  client_state?: string;

  /**
   * Use this field to avoid duplicate commands. Telnyx will ignore any command with
   * the same `command_id` for the same `call_control_id`.
   */
  command_id?: string;

  /**
   * Text that will be played when the gathering starts, if none then nothing will be
   * played when the gathering starts. The greeting can be text for any voice or SSML
   * for `AWS.Polly.<voice_id>` voices. There is a 3,000 character limit.
   */
  greeting?: string;

  /**
   * Settings for handling user interruptions during assistant speech
   */
  interruption_settings?: InterruptionSettings;

  /**
   * Language to use for speech recognition
   */
  language?: GoogleTranscriptionLanguage;

  /**
   * The message history you want the voice assistant to be aware of, this can be
   * useful to keep the context of the conversation, or to pass additional
   * information to the voice assistant.
   */
  message_history?: Array<ActionGatherUsingAIParams.MessageHistory>;

  /**
   * Default is `false`. If set to `true`, the voice assistant will send updates to
   * the message history via the `call.ai_gather.message_history_updated` callback in
   * real time as the message history is updated.
   */
  send_message_history_updates?: boolean;

  /**
   * Default is `false`. If set to `true`, the voice assistant will send partial
   * results via the `call.ai_gather.partial_results` callback in real time as
   * individual fields are gathered. If set to `false`, the voice assistant will only
   * send the final result via the `call.ai_gather.ended` callback.
   */
  send_partial_results?: boolean;

  /**
   * The settings associated with speech to text for the voice assistant. This is
   * only relevant if the assistant uses a text-to-text language model. Any assistant
   * using a model with native audio support (e.g. `fixie-ai/ultravox-v0_4`) will
   * ignore this field.
   */
  transcription?: TranscriptionConfig;

  /**
   * The number of milliseconds to wait for a user response before the voice
   * assistant times out and check if the user is still there.
   */
  user_response_timeout_ms?: number;

  /**
   * The voice to be used by the voice assistant. Currently we support ElevenLabs,
   * Telnyx and AWS voices.
   *
   * **Supported Providers:**
   *
   * - **AWS:** Use `AWS.Polly.<VoiceId>` (e.g., `AWS.Polly.Joanna`). For neural
   *   voices, which provide more realistic, human-like speech, append `-Neural` to
   *   the `VoiceId` (e.g., `AWS.Polly.Joanna-Neural`). Check the
   *   [available voices](https://docs.aws.amazon.com/polly/latest/dg/available-voices.html)
   *   for compatibility.
   * - **Azure:** Use `Azure.<VoiceId>. (e.g. Azure.en-CA-ClaraNeural,
   *   Azure.en-CA-LiamNeural, Azure.en-US-BrianMultilingualNeural,
   *   Azure.en-US-Ava:DragonHDLatestNeural. For a complete list of voices, go to
   *   [Azure Voice Gallery](https://speech.microsoft.com/portal/voicegallery).)
   * - **ElevenLabs:** Use `ElevenLabs.<ModelId>.<VoiceId>` (e.g.,
   *   `ElevenLabs.BaseModel.John`). The `ModelId` part is optional. To use
   *   ElevenLabs, you must provide your ElevenLabs API key as an integration secret
   *   under `"voice_settings": {"api_key_ref": "<secret_id>"}`. See
   *   [integration secrets documentation](https://developers.telnyx.com/api/secrets-manager/integration-secrets/create-integration-secret)
   *   for details. Check
   *   [available voices](https://elevenlabs.io/docs/api-reference/get-voices).
   * - **Telnyx:** Use `Telnyx.<model_id>.<voice_id>`
   */
  voice?: string;

  /**
   * The settings associated with the voice selected
   */
  voice_settings?: ElevenLabsVoiceSettings | TelnyxVoiceSettings | AwsVoiceSettings;
}

export namespace ActionGatherUsingAIParams {
  export interface MessageHistory {
    /**
     * The content of the message
     */
    content?: string;

    /**
     * The role of the message sender
     */
    role?: 'assistant' | 'user';
  }
}

export interface ActionGatherUsingAudioParams {
  /**
   * The URL of a file to be played back at the beginning of each prompt. The URL can
   * point to either a WAV or MP3 file. media_name and audio_url cannot be used
   * together in one request.
   */
  audio_url?: string;

  /**
   * Use this field to add state to every subsequent webhook. It must be a valid
   * Base-64 encoded string.
   */
  client_state?: string;

  /**
   * Use this field to avoid duplicate commands. Telnyx will ignore any command with
   * the same `command_id` for the same `call_control_id`.
   */
  command_id?: string;

  /**
   * The number of milliseconds to wait for input between digits.
   */
  inter_digit_timeout_millis?: number;

  /**
   * The URL of a file to play when digits don't match the `valid_digits` parameter
   * or the number of digits is not between `min` and `max`. The URL can point to
   * either a WAV or MP3 file. invalid_media_name and invalid_audio_url cannot be
   * used together in one request.
   */
  invalid_audio_url?: string;

  /**
   * The media_name of a file to be played back when digits don't match the
   * `valid_digits` parameter or the number of digits is not between `min` and `max`.
   * The media_name must point to a file previously uploaded to
   * api.telnyx.com/v2/media by the same user/organization. The file must either be a
   * WAV or MP3 file.
   */
  invalid_media_name?: string;

  /**
   * The maximum number of digits to fetch. This parameter has a maximum value
   * of 128.
   */
  maximum_digits?: number;

  /**
   * The maximum number of times the file should be played if there is no input from
   * the user on the call.
   */
  maximum_tries?: number;

  /**
   * The media_name of a file to be played back at the beginning of each prompt. The
   * media_name must point to a file previously uploaded to api.telnyx.com/v2/media
   * by the same user/organization. The file must either be a WAV or MP3 file.
   */
  media_name?: string;

  /**
   * The minimum number of digits to fetch. This parameter has a minimum value of 1.
   */
  minimum_digits?: number;

  /**
   * The digit used to terminate input if fewer than `maximum_digits` digits have
   * been gathered.
   */
  terminating_digit?: string;

  /**
   * The number of milliseconds to wait for a DTMF response after file playback ends
   * before a replaying the sound file.
   */
  timeout_millis?: number;

  /**
   * A list of all digits accepted as valid.
   */
  valid_digits?: string;
}

export interface ActionGatherUsingSpeakParams {
  /**
   * The text or SSML to be converted into speech. There is a 3,000 character limit.
   */
  payload: string;

  /**
   * Specifies the voice used in speech synthesis.
   *
   * - Define voices using the format `<Provider>.<Model>.<VoiceId>`. Specifying only
   *   the provider will give default values for voice_id and model_id.
   *
   *   **Supported Providers:**
   *
   * - **AWS:** Use `AWS.Polly.<VoiceId>` (e.g., `AWS.Polly.Joanna`). For neural
   *   voices, which provide more realistic, human-like speech, append `-Neural` to
   *   the `VoiceId` (e.g., `AWS.Polly.Joanna-Neural`). Check the
   *   [available voices](https://docs.aws.amazon.com/polly/latest/dg/available-voices.html)
   *   for compatibility.
   * - **Azure:** Use `Azure.<VoiceId>. (e.g. Azure.en-CA-ClaraNeural,
   *   Azure.en-CA-LiamNeural, Azure.en-US-BrianMultilingualNeural,
   *   Azure.en-US-Ava:DragonHDLatestNeural. For a complete list of voices, go to
   *   [Azure Voice Gallery](https://speech.microsoft.com/portal/voicegallery).)
   * - **ElevenLabs:** Use `ElevenLabs.<ModelId>.<VoiceId>` (e.g.,
   *   `ElevenLabs.eleven_multilingual_v2.21m00Tcm4TlvDq8ikWAM`). The `ModelId` part
   *   is optional. To use ElevenLabs, you must provide your ElevenLabs API key as an
   *   integration identifier secret in
   *   `"voice_settings": {"api_key_ref": "<secret_identifier>"}`. See
   *   [integration secrets documentation](https://developers.telnyx.com/api/secrets-manager/integration-secrets/create-integration-secret)
   *   for details. Check
   *   [available voices](https://elevenlabs.io/docs/api-reference/get-voices).
   * - **Telnyx:** Use `Telnyx.<model_id>.<voice_id>`
   *
   * For service_level basic, you may define the gender of the speaker (male or
   * female).
   */
  voice: string;

  /**
   * Use this field to add state to every subsequent webhook. It must be a valid
   * Base-64 encoded string.
   */
  client_state?: string;

  /**
   * Use this field to avoid duplicate commands. Telnyx will ignore any command with
   * the same `command_id` for the same `call_control_id`.
   */
  command_id?: string;

  /**
   * The number of milliseconds to wait for input between digits.
   */
  inter_digit_timeout_millis?: number;

  /**
   * The text or SSML to be converted into speech when digits don't match the
   * `valid_digits` parameter or the number of digits is not between `min` and `max`.
   * There is a 3,000 character limit.
   */
  invalid_payload?: string;

  /**
   * The language you want spoken. This parameter is ignored when a `Polly.*` voice
   * is specified.
   */
  language?:
    | 'arb'
    | 'cmn-CN'
    | 'cy-GB'
    | 'da-DK'
    | 'de-DE'
    | 'en-AU'
    | 'en-GB'
    | 'en-GB-WLS'
    | 'en-IN'
    | 'en-US'
    | 'es-ES'
    | 'es-MX'
    | 'es-US'
    | 'fr-CA'
    | 'fr-FR'
    | 'hi-IN'
    | 'is-IS'
    | 'it-IT'
    | 'ja-JP'
    | 'ko-KR'
    | 'nb-NO'
    | 'nl-NL'
    | 'pl-PL'
    | 'pt-BR'
    | 'pt-PT'
    | 'ro-RO'
    | 'ru-RU'
    | 'sv-SE'
    | 'tr-TR';

  /**
   * The maximum number of digits to fetch. This parameter has a maximum value
   * of 128.
   */
  maximum_digits?: number;

  /**
   * The maximum number of times that a file should be played back if there is no
   * input from the user on the call.
   */
  maximum_tries?: number;

  /**
   * The minimum number of digits to fetch. This parameter has a minimum value of 1.
   */
  minimum_digits?: number;

  /**
   * The type of the provided payload. The payload can either be plain text, or
   * Speech Synthesis Markup Language (SSML).
   */
  payload_type?: 'text' | 'ssml';

  /**
   * This parameter impacts speech quality, language options and payload types. When
   * using `basic`, only the `en-US` language and payload type `text` are allowed.
   */
  service_level?: 'basic' | 'premium';

  /**
   * The digit used to terminate input if fewer than `maximum_digits` digits have
   * been gathered.
   */
  terminating_digit?: string;

  /**
   * The number of milliseconds to wait for a DTMF response after speak ends before a
   * replaying the sound file.
   */
  timeout_millis?: number;

  /**
   * A list of all digits accepted as valid.
   */
  valid_digits?: string;

  /**
   * The settings associated with the voice selected
   */
  voice_settings?: ElevenLabsVoiceSettings | TelnyxVoiceSettings | AwsVoiceSettings;
}

export interface ActionHangupParams {
  /**
   * Use this field to add state to every subsequent webhook. It must be a valid
   * Base-64 encoded string.
   */
  client_state?: string;

  /**
   * Use this field to avoid duplicate commands. Telnyx will ignore any command with
   * the same `command_id` for the same `call_control_id`.
   */
  command_id?: string;
}

export interface ActionLeaveQueueParams {
  /**
   * Use this field to add state to every subsequent webhook. It must be a valid
   * Base-64 encoded string.
   */
  client_state?: string;

  /**
   * Use this field to avoid duplicate commands. Telnyx will ignore any command with
   * the same `command_id` for the same `call_control_id`.
   */
  command_id?: string;
}

export interface ActionPauseRecordingParams {
  /**
   * Use this field to add state to every subsequent webhook. It must be a valid
   * Base-64 encoded string.
   */
  client_state?: string;

  /**
   * Use this field to avoid duplicate commands. Telnyx will ignore any command with
   * the same `command_id` for the same `call_control_id`.
   */
  command_id?: string;

  /**
   * Uniquely identifies the resource.
   */
  recording_id?: string;
}

export interface ActionReferParams {
  /**
   * The SIP URI to which the call will be referred to.
   */
  sip_address: string;

  /**
   * Use this field to add state to every subsequent webhook. It must be a valid
   * Base-64 encoded string.
   */
  client_state?: string;

  /**
   * Use this field to avoid execution of duplicate commands. Telnyx will ignore
   * subsequent commands with the same `command_id` as one that has already been
   * executed.
   */
  command_id?: string;

  /**
   * Custom headers to be added to the SIP INVITE.
   */
  custom_headers?: Array<CallsAPI.CustomSipHeader>;

  /**
   * SIP Authentication password used for SIP challenges.
   */
  sip_auth_password?: string;

  /**
   * SIP Authentication username used for SIP challenges.
   */
  sip_auth_username?: string;

  /**
   * SIP headers to be added to the request. Currently only User-to-User header is
   * supported.
   */
  sip_headers?: Array<CallsAPI.SipHeader>;
}

export interface ActionRejectParams {
  /**
   * Cause for call rejection.
   */
  cause: 'CALL_REJECTED' | 'USER_BUSY';

  /**
   * Use this field to add state to every subsequent webhook. It must be a valid
   * Base-64 encoded string.
   */
  client_state?: string;

  /**
   * Use this field to avoid duplicate commands. Telnyx will ignore any command with
   * the same `command_id` for the same `call_control_id`.
   */
  command_id?: string;
}

export interface ActionResumeRecordingParams {
  /**
   * Use this field to add state to every subsequent webhook. It must be a valid
   * Base-64 encoded string.
   */
  client_state?: string;

  /**
   * Use this field to avoid duplicate commands. Telnyx will ignore any command with
   * the same `command_id` for the same `call_control_id`.
   */
  command_id?: string;

  /**
   * Uniquely identifies the resource.
   */
  recording_id?: string;
}

export interface ActionSendDtmfParams {
  /**
   * DTMF digits to send. Valid digits are 0-9, A-D, \*, and #. Pauses can be added
   * using w (0.5s) and W (1s).
   */
  digits: string;

  /**
   * Use this field to add state to every subsequent webhook. It must be a valid
   * Base-64 encoded string.
   */
  client_state?: string;

  /**
   * Use this field to avoid duplicate commands. Telnyx will ignore any command with
   * the same `command_id` for the same `call_control_id`.
   */
  command_id?: string;

  /**
   * Specifies for how many milliseconds each digit will be played in the audio
   * stream. Ranges from 100 to 500ms
   */
  duration_millis?: number;
}

export interface ActionSendSipInfoParams {
  /**
   * Content of the SIP INFO
   */
  body: string;

  /**
   * Content type of the INFO body. Must be MIME type compliant. There is a 1,400
   * bytes limit
   */
  content_type: string;

  /**
   * Use this field to add state to every subsequent webhook. It must be a valid
   * Base-64 encoded string.
   */
  client_state?: string;

  /**
   * Use this field to avoid duplicate commands. Telnyx will ignore any command with
   * the same `command_id` for the same `call_control_id`.
   */
  command_id?: string;
}

export interface ActionSpeakParams {
  /**
   * The text or SSML to be converted into speech. There is a 3,000 character limit.
   */
  payload: string;

  /**
   * Specifies the voice used in speech synthesis.
   *
   * - Define voices using the format `<Provider>.<Model>.<VoiceId>`. Specifying only
   *   the provider will give default values for voice_id and model_id.
   *
   *   **Supported Providers:**
   *
   * - **AWS:** Use `AWS.Polly.<VoiceId>` (e.g., `AWS.Polly.Joanna`). For neural
   *   voices, which provide more realistic, human-like speech, append `-Neural` to
   *   the `VoiceId` (e.g., `AWS.Polly.Joanna-Neural`). Check the
   *   [available voices](https://docs.aws.amazon.com/polly/latest/dg/available-voices.html)
   *   for compatibility.
   * - **Azure:** Use `Azure.<VoiceId>. (e.g. Azure.en-CA-ClaraNeural,
   *   Azure.en-CA-LiamNeural, Azure.en-US-BrianMultilingualNeural,
   *   Azure.en-US-Ava:DragonHDLatestNeural. For a complete list of voices, go to
   *   [Azure Voice Gallery](https://speech.microsoft.com/portal/voicegallery).)
   * - **ElevenLabs:** Use `ElevenLabs.<ModelId>.<VoiceId>` (e.g.,
   *   `ElevenLabs.eleven_multilingual_v2.21m00Tcm4TlvDq8ikWAM`). The `ModelId` part
   *   is optional. To use ElevenLabs, you must provide your ElevenLabs API key as an
   *   integration identifier secret in
   *   `"voice_settings": {"api_key_ref": "<secret_identifier>"}`. See
   *   [integration secrets documentation](https://developers.telnyx.com/api/secrets-manager/integration-secrets/create-integration-secret)
   *   for details. Check
   *   [available voices](https://elevenlabs.io/docs/api-reference/get-voices).
   * - **Telnyx:** Use `Telnyx.<model_id>.<voice_id>`
   *
   * For service_level basic, you may define the gender of the speaker (male or
   * female).
   */
  voice: string;

  /**
   * Use this field to add state to every subsequent webhook. It must be a valid
   * Base-64 encoded string.
   */
  client_state?: string;

  /**
   * Use this field to avoid duplicate commands. Telnyx will ignore any command with
   * the same `command_id` for the same `call_control_id`.
   */
  command_id?: string;

  /**
   * The language you want spoken. This parameter is ignored when a `Polly.*` voice
   * is specified.
   */
  language?:
    | 'arb'
    | 'cmn-CN'
    | 'cy-GB'
    | 'da-DK'
    | 'de-DE'
    | 'en-AU'
    | 'en-GB'
    | 'en-GB-WLS'
    | 'en-IN'
    | 'en-US'
    | 'es-ES'
    | 'es-MX'
    | 'es-US'
    | 'fr-CA'
    | 'fr-FR'
    | 'hi-IN'
    | 'is-IS'
    | 'it-IT'
    | 'ja-JP'
    | 'ko-KR'
    | 'nb-NO'
    | 'nl-NL'
    | 'pl-PL'
    | 'pt-BR'
    | 'pt-PT'
    | 'ro-RO'
    | 'ru-RU'
    | 'sv-SE'
    | 'tr-TR';

  /**
   * The type of the provided payload. The payload can either be plain text, or
   * Speech Synthesis Markup Language (SSML).
   */
  payload_type?: 'text' | 'ssml';

  /**
   * This parameter impacts speech quality, language options and payload types. When
   * using `basic`, only the `en-US` language and payload type `text` are allowed.
   */
  service_level?: 'basic' | 'premium';

  /**
   * When specified, it stops the current audio being played. Specify `current` to
   * stop the current audio being played, and to play the next file in the queue.
   * Specify `all` to stop the current audio file being played and to also clear all
   * audio files from the queue.
   */
  stop?: string;

  /**
   * The settings associated with the voice selected
   */
  voice_settings?: ElevenLabsVoiceSettings | TelnyxVoiceSettings | AwsVoiceSettings;
}

export interface ActionStartAIAssistantParams {
  /**
   * AI Assistant configuration
   */
  assistant?: ActionStartAIAssistantParams.Assistant;

  /**
   * Use this field to add state to every subsequent webhook. It must be a valid
   * Base-64 encoded string.
   */
  client_state?: string;

  /**
   * Use this field to avoid duplicate commands. Telnyx will ignore any command with
   * the same `command_id` for the same `call_control_id`.
   */
  command_id?: string;

  /**
   * Text that will be played when the assistant starts, if none then nothing will be
   * played when the assistant starts. The greeting can be text for any voice or SSML
   * for `AWS.Polly.<voice_id>` voices. There is a 3,000 character limit.
   */
  greeting?: string;

  /**
   * Settings for handling user interruptions during assistant speech
   */
  interruption_settings?: InterruptionSettings;

  /**
   * The settings associated with speech to text for the voice assistant. This is
   * only relevant if the assistant uses a text-to-text language model. Any assistant
   * using a model with native audio support (e.g. `fixie-ai/ultravox-v0_4`) will
   * ignore this field.
   */
  transcription?: TranscriptionConfig;

  /**
   * The voice to be used by the voice assistant. Currently we support ElevenLabs,
   * Telnyx and AWS voices.
   *
   * **Supported Providers:**
   *
   * - **AWS:** Use `AWS.Polly.<VoiceId>` (e.g., `AWS.Polly.Joanna`). For neural
   *   voices, which provide more realistic, human-like speech, append `-Neural` to
   *   the `VoiceId` (e.g., `AWS.Polly.Joanna-Neural`). Check the
   *   [available voices](https://docs.aws.amazon.com/polly/latest/dg/available-voices.html)
   *   for compatibility.
   * - **Azure:** Use `Azure.<VoiceId>. (e.g. Azure.en-CA-ClaraNeural,
   *   Azure.en-CA-LiamNeural, Azure.en-US-BrianMultilingualNeural,
   *   Azure.en-US-Ava:DragonHDLatestNeural. For a complete list of voices, go to
   *   [Azure Voice Gallery](https://speech.microsoft.com/portal/voicegallery).)
   * - **ElevenLabs:** Use `ElevenLabs.<ModelId>.<VoiceId>` (e.g.,
   *   `ElevenLabs.BaseModel.John`). The `ModelId` part is optional. To use
   *   ElevenLabs, you must provide your ElevenLabs API key as an integration secret
   *   under `"voice_settings": {"api_key_ref": "<secret_id>"}`. See
   *   [integration secrets documentation](https://developers.telnyx.com/api/secrets-manager/integration-secrets/create-integration-secret)
   *   for details. Check
   *   [available voices](https://elevenlabs.io/docs/api-reference/get-voices).
   * - **Telnyx:** Use `Telnyx.<model_id>.<voice_id>`
   */
  voice?: string;

  /**
   * The settings associated with the voice selected
   */
  voice_settings?: ElevenLabsVoiceSettings | TelnyxVoiceSettings | AwsVoiceSettings;
}

export namespace ActionStartAIAssistantParams {
  /**
   * AI Assistant configuration
   */
  export interface Assistant {
    /**
     * The identifier of the AI assistant to use
     */
    id?: string;

    /**
     * The system instructions that the voice assistant uses during the start assistant
     * command. This will overwrite the instructions set in the assistant
     * configuration.
     */
    instructions?: string;

    /**
     * Reference to the OpenAI API key. Required only when using OpenAI models
     */
    openai_api_key_ref?: string;
  }
}

export interface ActionStartForkingParams {
  /**
   * Use this field to add state to every subsequent webhook. It must be a valid
   * Base-64 encoded string.
   */
  client_state?: string;

  /**
   * Use this field to avoid duplicate commands. Telnyx will ignore any command with
   * the same `command_id` for the same `call_control_id`.
   */
  command_id?: string;

  /**
   * The network target, <udp:ip_address:port>, where the call's incoming RTP media
   * packets should be forwarded.
   */
  rx?: string;

  /**
   * Optionally specify a media type to stream. If `decrypted` selected, Telnyx will
   * decrypt incoming SIP media before forking to the target. `rx` and `tx` are
   * required fields if `decrypted` selected.
   */
  stream_type?: 'decrypted';

  /**
   * The network target, <udp:ip_address:port>, where the call's outgoing RTP media
   * packets should be forwarded.
   */
  tx?: string;
}

export interface ActionStartNoiseSuppressionParams {
  /**
   * Use this field to add state to every subsequent webhook. It must be a valid
   * Base-64 encoded string.
   */
  client_state?: string;

  /**
   * Use this field to avoid duplicate commands. Telnyx will ignore any command with
   * the same `command_id` for the same `call_control_id`.
   */
  command_id?: string;

  /**
   * The direction of the audio stream to be noise suppressed.
   */
  direction?: 'inbound' | 'outbound' | 'both';

  /**
   * The engine to use for noise suppression. For backward compatibility, engines A,
   * B, and C are also supported, but are deprecated: A - Denoiser B - DeepFilterNet
   * C - Krisp
   */
  noise_suppression_engine?: 'Denoiser' | 'DeepFilterNet' | 'Krisp';

  /**
   * Configuration parameters for noise suppression engines.
   */
  noise_suppression_engine_config?: ActionStartNoiseSuppressionParams.NoiseSuppressionEngineConfig;
}

export namespace ActionStartNoiseSuppressionParams {
  /**
   * Configuration parameters for noise suppression engines.
   */
  export interface NoiseSuppressionEngineConfig {
    /**
     * The attenuation limit for noise suppression (0-100). Only applicable for
     * DeepFilterNet.
     */
    attenuation_limit?: number;
  }
}

export interface ActionStartPlaybackParams {
  /**
   * Specifies the type of audio provided in `audio_url` or `playback_content`.
   */
  audio_type?: 'mp3' | 'wav';

  /**
   * The URL of a file to be played back on the call. The URL can point to either a
   * WAV or MP3 file. media_name and audio_url cannot be used together in one
   * request.
   */
  audio_url?: string;

  /**
   * Caches the audio file. Useful when playing the same audio file multiple times
   * during the call.
   */
  cache_audio?: boolean;

  /**
   * Use this field to add state to every subsequent webhook. It must be a valid
   * Base-64 encoded string.
   */
  client_state?: string;

  /**
   * Use this field to avoid duplicate commands. Telnyx will ignore any command with
   * the same `command_id` for the same `call_control_id`.
   */
  command_id?: string;

  /**
   * The number of times the audio file should be played. If supplied, the value must
   * be an integer between 1 and 100, or the special string `infinity` for an endless
   * loop.
   */
  loop?: Loopcount;

  /**
   * The media_name of a file to be played back on the call. The media_name must
   * point to a file previously uploaded to api.telnyx.com/v2/media by the same
   * user/organization. The file must either be a WAV or MP3 file.
   */
  media_name?: string;

  /**
   * When enabled, audio will be mixed on top of any other audio that is actively
   * being played back. Note that `overlay: true` will only work if there is another
   * audio file already being played on the call.
   */
  overlay?: boolean;

  /**
   * Allows a user to provide base64 encoded mp3 or wav. Note: when using this
   * parameter, `media_url` and `media_name` in the `playback_started` and
   * `playback_ended` webhooks will be empty
   */
  playback_content?: string;

  /**
   * When specified, it stops the current audio being played. Specify `current` to
   * stop the current audio being played, and to play the next file in the queue.
   * Specify `all` to stop the current audio file being played and to also clear all
   * audio files from the queue.
   */
  stop?: string;

  /**
   * Specifies the leg or legs on which audio will be played. If supplied, the value
   * must be either `self`, `opposite` or `both`.
   */
  target_legs?: string;
}

export interface ActionStartRecordingParams {
  /**
   * When `dual`, final audio file will be stereo recorded with the first leg on
   * channel A, and the rest on channel B.
   */
  channels: 'single' | 'dual';

  /**
   * The audio file format used when storing the call recording. Can be either `mp3`
   * or `wav`.
   */
  format: 'wav' | 'mp3';

  /**
   * Use this field to add state to every subsequent webhook. It must be a valid
   * Base-64 encoded string.
   */
  client_state?: string;

  /**
   * Use this field to avoid duplicate commands. Telnyx will ignore any command with
   * the same `command_id` for the same `call_control_id`.
   */
  command_id?: string;

  /**
   * The custom recording file name to be used instead of the default `call_leg_id`.
   * Telnyx will still add a Unix timestamp suffix.
   */
  custom_file_name?: string;

  /**
   * Defines the maximum length for the recording in seconds. The minimum value is 0.
   * The maximum value is 14400. The default value is 0 (infinite)
   */
  max_length?: number;

  /**
   * If enabled, a beep sound will be played at the start of a recording.
   */
  play_beep?: boolean;

  /**
   * The audio track to be recorded. Can be either `both`, `inbound` or `outbound`.
   * If only single track is specified (`inbound`, `outbound`), `channels`
   * configuration is ignored and it will be recorded as mono (single channel).
   */
  recording_track?: 'both' | 'inbound' | 'outbound';

  /**
   * The number of seconds that Telnyx will wait for the recording to be stopped if
   * silence is detected. The timer only starts when the speech is detected. Please
   * note that call transcription is used to detect silence and the related charge
   * will be applied. The minimum value is 0. The default value is 0 (infinite)
   */
  timeout_secs?: number;

  /**
   * Enable post recording transcription. The default value is false.
   */
  transcription?: boolean;

  /**
   * Engine to use for speech recognition. `A` - `Google`, `B` - `Telnyx`,
   * `deepgram/nova-3` - `Deepgram Nova-3`. Note: `deepgram/nova-3` supports only
   * `en` and `en-{Region}` languages.
   */
  transcription_engine?: 'A' | 'B' | 'deepgram/nova-3';

  transcription_language?:
    | 'af-ZA'
    | 'am-ET'
    | 'ar-AE'
    | 'ar-BH'
    | 'ar-DZ'
    | 'ar-EG'
    | 'ar-IL'
    | 'ar-IQ'
    | 'ar-JO'
    | 'ar-KW'
    | 'ar-LB'
    | 'ar-MA'
    | 'ar-MR'
    | 'ar-OM'
    | 'ar-PS'
    | 'ar-QA'
    | 'ar-SA'
    | 'ar-TN'
    | 'ar-YE'
    | 'az-AZ'
    | 'bg-BG'
    | 'bn-BD'
    | 'bn-IN'
    | 'bs-BA'
    | 'ca-ES'
    | 'cs-CZ'
    | 'da-DK'
    | 'de-AT'
    | 'de-CH'
    | 'de-DE'
    | 'el-GR'
    | 'en-AU'
    | 'en-CA'
    | 'en-GB'
    | 'en-GH'
    | 'en-HK'
    | 'en-IE'
    | 'en-IN'
    | 'en-KE'
    | 'en-NG'
    | 'en-NZ'
    | 'en-PH'
    | 'en-PK'
    | 'en-SG'
    | 'en-TZ'
    | 'en-US'
    | 'en-ZA'
    | 'es-AR'
    | 'es-BO'
    | 'es-CL'
    | 'es-CO'
    | 'es-CR'
    | 'es-DO'
    | 'es-EC'
    | 'es-ES'
    | 'es-GT'
    | 'es-HN'
    | 'es-MX'
    | 'es-NI'
    | 'es-PA'
    | 'es-PE'
    | 'es-PR'
    | 'es-PY'
    | 'es-SV'
    | 'es-US'
    | 'es-UY'
    | 'es-VE'
    | 'et-EE'
    | 'eu-ES'
    | 'fa-IR'
    | 'fi-FI'
    | 'fil-PH'
    | 'fr-BE'
    | 'fr-CA'
    | 'fr-CH'
    | 'fr-FR'
    | 'gl-ES'
    | 'gu-IN'
    | 'hi-IN'
    | 'hr-HR'
    | 'hu-HU'
    | 'hy-AM'
    | 'id-ID'
    | 'is-IS'
    | 'it-CH'
    | 'it-IT'
    | 'iw-IL'
    | 'ja-JP'
    | 'jv-ID'
    | 'ka-GE'
    | 'kk-KZ'
    | 'km-KH'
    | 'kn-IN'
    | 'ko-KR'
    | 'lo-LA'
    | 'lt-LT'
    | 'lv-LV'
    | 'mk-MK'
    | 'ml-IN'
    | 'mn-MN'
    | 'mr-IN'
    | 'ms-MY'
    | 'my-MM'
    | 'ne-NP'
    | 'nl-BE'
    | 'nl-NL'
    | 'no-NO'
    | 'pa-Guru-IN'
    | 'pl-PL'
    | 'pt-BR'
    | 'pt-PT'
    | 'ro-RO'
    | 'ru-RU'
    | 'rw-RW'
    | 'si-LK'
    | 'sk-SK'
    | 'sl-SI'
    | 'sq-AL'
    | 'sr-RS'
    | 'ss-latn-za'
    | 'st-ZA'
    | 'su-ID'
    | 'sv-SE'
    | 'sw-KE'
    | 'sw-TZ'
    | 'ta-IN'
    | 'ta-LK'
    | 'ta-MY'
    | 'ta-SG'
    | 'te-IN'
    | 'th-TH'
    | 'tn-latn-za'
    | 'tr-TR'
    | 'ts-ZA'
    | 'uk-UA'
    | 'ur-IN'
    | 'ur-PK'
    | 'uz-UZ'
    | 've-ZA'
    | 'vi-VN'
    | 'xh-ZA'
    | 'yue-Hant-HK'
    | 'zh'
    | 'zh-TW'
    | 'zu-ZA'
    | 'en'
    | 'de'
    | 'es'
    | 'ru'
    | 'ko'
    | 'fr'
    | 'ja'
    | 'pt'
    | 'tr'
    | 'pl'
    | 'ca'
    | 'nl'
    | 'ar'
    | 'sv'
    | 'it'
    | 'id'
    | 'hi'
    | 'fi'
    | 'vi'
    | 'he'
    | 'uk'
    | 'el'
    | 'ms'
    | 'cs'
    | 'ro'
    | 'da'
    | 'hu'
    | 'ta'
    | 'no'
    | 'th'
    | 'ur'
    | 'hr'
    | 'bg'
    | 'lt'
    | 'la'
    | 'mi'
    | 'ml'
    | 'cy'
    | 'sk'
    | 'te'
    | 'fa'
    | 'lv'
    | 'bn'
    | 'sr'
    | 'az'
    | 'sl'
    | 'kn'
    | 'et'
    | 'mk'
    | 'br'
    | 'eu'
    | 'is'
    | 'hy'
    | 'ne'
    | 'mn'
    | 'bs'
    | 'kk'
    | 'sq'
    | 'sw'
    | 'gl'
    | 'mr'
    | 'pa'
    | 'si'
    | 'km'
    | 'sn'
    | 'yo'
    | 'so'
    | 'af'
    | 'oc'
    | 'ka'
    | 'be'
    | 'tg'
    | 'sd'
    | 'gu'
    | 'am'
    | 'yi'
    | 'lo'
    | 'uz'
    | 'fo'
    | 'ht'
    | 'ps'
    | 'tk'
    | 'nn'
    | 'mt'
    | 'sa'
    | 'lb'
    | 'my'
    | 'bo'
    | 'tl'
    | 'mg'
    | 'as'
    | 'tt'
    | 'haw'
    | 'ln'
    | 'ha'
    | 'ba'
    | 'jw'
    | 'su'
    | 'auto_detect'
    | 'es-419';

  /**
   * Defines maximum number of speakers in the conversation. Applies to `google`
   * engine only.
   */
  transcription_max_speaker_count?: number;

  /**
   * Defines minimum number of speakers in the conversation. Applies to `google`
   * engine only.
   */
  transcription_min_speaker_count?: number;

  /**
   * Enables profanity_filter. Applies to `google` engine only.
   */
  transcription_profanity_filter?: boolean;

  /**
   * Enables speaker diarization. Applies to `google` engine only.
   */
  transcription_speaker_diarization?: boolean;

  /**
   * When set to `trim-silence`, silence will be removed from the beginning and end
   * of the recording.
   */
  trim?: 'trim-silence';
}

export interface ActionStartSiprecParams {
  /**
   * Use this field to add state to every subsequent webhook. It must be a valid
   * Base-64 encoded string.
   */
  client_state?: string;

  /**
   * Name of configured SIPREC connector to be used.
   */
  connector_name?: string;

  /**
   * When set, custom parameters will be added as metadata
   * (recording.session.ExtensionParameters). Otherwise, they’ll be added to sip
   * headers.
   */
  include_metadata_custom_headers?: true | false;

  /**
   * Controls whether to encrypt media sent to your SRS using SRTP and TLS. When set
   * you need to configure SRS port in your connector to 5061.
   */
  secure?: true | false;

  /**
   * Sets `Session-Expires` header to the INVITE. A reinvite is sent every half the
   * value set. Usefull for session keep alive. Minimum value is 90, set to 0 to
   * disable.
   */
  session_timeout_secs?: number;

  /**
   * Specifies SIP transport protocol.
   */
  sip_transport?: 'udp' | 'tcp' | 'tls';

  /**
   * Specifies which track should be sent on siprec session.
   */
  siprec_track?: 'inbound_track' | 'outbound_track' | 'both_tracks';
}

export interface ActionStartStreamingParams {
  /**
   * Use this field to add state to every subsequent webhook. It must be a valid
   * Base-64 encoded string.
   */
  client_state?: string;

  /**
   * Use this field to avoid duplicate commands. Telnyx will ignore any command with
   * the same `command_id` for the same `call_control_id`.
   */
  command_id?: string;

  dialogflow_config?: CallsAPI.DialogflowConfig;

  /**
   * Enables Dialogflow for the current call. The default value is false.
   */
  enable_dialogflow?: boolean;

  /**
   * Indicates codec for bidirectional streaming RTP payloads. Used only with
   * stream_bidirectional_mode=rtp. Case sensitive.
   */
  stream_bidirectional_codec?: CallsAPI.StreamBidirectionalCodec;

  /**
   * Configures method of bidirectional streaming (mp3, rtp).
   */
  stream_bidirectional_mode?: CallsAPI.StreamBidirectionalMode;

  /**
   * Audio sampling rate.
   */
  stream_bidirectional_sampling_rate?: CallsAPI.StreamBidirectionalSamplingRate;

  /**
   * Specifies which call legs should receive the bidirectional stream audio.
   */
  stream_bidirectional_target_legs?: CallsAPI.StreamBidirectionalTargetLegs;

  /**
   * Specifies the codec to be used for the streamed audio. When set to 'default' or
   * when transcoding is not possible, the codec from the call will be used.
   */
  stream_codec?: CallsAPI.StreamCodec;

  /**
   * Specifies which track should be streamed.
   */
  stream_track?: 'inbound_track' | 'outbound_track' | 'both_tracks';

  /**
   * The destination WebSocket address where the stream is going to be delivered.
   */
  stream_url?: string;
}

export interface ActionStartTranscriptionParams {
  /**
   * Use this field to add state to every subsequent webhook. It must be a valid
   * Base-64 encoded string.
   */
  client_state?: string;

  /**
   * Use this field to avoid duplicate commands. Telnyx will ignore any command with
   * the same `command_id` for the same `call_control_id`.
   */
  command_id?: string;

  /**
   * Engine to use for speech recognition. Legacy values `A` - `Google`, `B` -
   * `Telnyx` are supported for backward compatibility.
   */
  transcription_engine?: 'Google' | 'Telnyx' | 'Deepgram' | 'Azure' | 'A' | 'B';

  transcription_engine_config?:
    | TranscriptionEngineGoogleConfig
    | TranscriptionEngineTelnyxConfig
    | ActionStartTranscriptionParams.DeepgramNova2Config
    | ActionStartTranscriptionParams.DeepgramNova3Config
    | TranscriptionEngineAzureConfig
    | TranscriptionEngineAConfig
    | TranscriptionEngineBConfig;

  /**
   * Indicates which leg of the call will be transcribed. Use `inbound` for the leg
   * that requested the transcription, `outbound` for the other leg, and `both` for
   * both legs of the call. Will default to `inbound`.
   */
  transcription_tracks?: string;
}

export namespace ActionStartTranscriptionParams {
  export interface DeepgramNova2Config {
    transcription_engine: 'Deepgram';

    transcription_model: 'deepgram/nova-2';

    /**
     * Keywords and their respective intensifiers (boosting values) to improve
     * transcription accuracy for specific words or phrases. The intensifier should be
     * a numeric value. Example: `{"snuffleupagus": 5, "systrom": 2, "krieger": 1}`.
     */
    keywords_boosting?: { [key: string]: number };

    /**
     * Language to use for speech recognition with nova-2 model
     */
    language?:
      | 'bg'
      | 'ca'
      | 'zh'
      | 'zh-CN'
      | 'zh-Hans'
      | 'zh-TW'
      | 'zh-Hant'
      | 'zh-HK'
      | 'cs'
      | 'da'
      | 'da-DK'
      | 'nl'
      | 'en'
      | 'en-US'
      | 'en-AU'
      | 'en-GB'
      | 'en-NZ'
      | 'en-IN'
      | 'et'
      | 'fi'
      | 'nl-BE'
      | 'fr'
      | 'fr-CA'
      | 'de'
      | 'de-CH'
      | 'el'
      | 'hi'
      | 'hu'
      | 'id'
      | 'it'
      | 'ja'
      | 'ko'
      | 'ko-KR'
      | 'lv'
      | 'lt'
      | 'ms'
      | 'no'
      | 'pl'
      | 'pt'
      | 'pt-BR'
      | 'pt-PT'
      | 'ro'
      | 'ru'
      | 'sk'
      | 'es'
      | 'es-419'
      | 'sv'
      | 'sv-SE'
      | 'th'
      | 'th-TH'
      | 'tr'
      | 'uk'
      | 'vi'
      | 'auto_detect';
  }

  export interface DeepgramNova3Config {
    transcription_engine: 'Deepgram';

    transcription_model: 'deepgram/nova-3';

    /**
     * Keywords and their respective intensifiers (boosting values) to improve
     * transcription accuracy for specific words or phrases. The intensifier should be
     * a numeric value. Example: `{"snuffleupagus": 5, "systrom": 2, "krieger": 1}`.
     */
    keywords_boosting?: { [key: string]: number };

    /**
     * Language to use for speech recognition with nova-3 model
     */
    language?:
      | 'en'
      | 'en-US'
      | 'en-AU'
      | 'en-GB'
      | 'en-IN'
      | 'en-NZ'
      | 'de'
      | 'nl'
      | 'sv'
      | 'sv-SE'
      | 'da'
      | 'da-DK'
      | 'es'
      | 'es-419'
      | 'fr'
      | 'fr-CA'
      | 'pt'
      | 'pt-BR'
      | 'pt-PT'
      | 'auto_detect';
  }
}

export interface ActionStopAIAssistantParams {
  /**
   * Use this field to add state to every subsequent webhook. It must be a valid
   * Base-64 encoded string.
   */
  client_state?: string;

  /**
   * Use this field to avoid duplicate commands. Telnyx will ignore any command with
   * the same `command_id` for the same `call_control_id`.
   */
  command_id?: string;
}

export interface ActionStopForkingParams {
  /**
   * Use this field to add state to every subsequent webhook. It must be a valid
   * Base-64 encoded string.
   */
  client_state?: string;

  /**
   * Use this field to avoid duplicate commands. Telnyx will ignore any command with
   * the same `command_id` for the same `call_control_id`.
   */
  command_id?: string;

  /**
   * Optionally specify a `stream_type`. This should match the `stream_type` that was
   * used in `fork_start` command to properly stop the fork.
   */
  stream_type?: 'raw' | 'decrypted';
}

export interface ActionStopGatherParams {
  /**
   * Use this field to add state to every subsequent webhook. It must be a valid
   * Base-64 encoded string.
   */
  client_state?: string;

  /**
   * Use this field to avoid duplicate commands. Telnyx will ignore any command with
   * the same `command_id` for the same `call_control_id`.
   */
  command_id?: string;
}

export interface ActionStopNoiseSuppressionParams {
  /**
   * Use this field to add state to every subsequent webhook. It must be a valid
   * Base-64 encoded string.
   */
  client_state?: string;

  /**
   * Use this field to avoid duplicate commands. Telnyx will ignore any command with
   * the same `command_id` for the same `call_control_id`.
   */
  command_id?: string;
}

export interface ActionStopPlaybackParams {
  /**
   * Use this field to add state to every subsequent webhook. It must be a valid
   * Base-64 encoded string.
   */
  client_state?: string;

  /**
   * Use this field to avoid duplicate commands. Telnyx will ignore any command with
   * the same `command_id` for the same `call_control_id`.
   */
  command_id?: string;

  /**
   * When enabled, it stops the audio being played in the overlay queue.
   */
  overlay?: boolean;

  /**
   * Use `current` to stop the current audio being played. Use `all` to stop the
   * current audio file being played and clear all audio files from the queue.
   */
  stop?: string;
}

export interface ActionStopRecordingParams {
  /**
   * Use this field to add state to every subsequent webhook. It must be a valid
   * Base-64 encoded string.
   */
  client_state?: string;

  /**
   * Use this field to avoid duplicate commands. Telnyx will ignore any command with
   * the same `command_id` for the same `call_control_id`.
   */
  command_id?: string;

  /**
   * Uniquely identifies the resource.
   */
  recording_id?: string;
}

export interface ActionStopSiprecParams {
  /**
   * Use this field to add state to every subsequent webhook. It must be a valid
   * Base-64 encoded string.
   */
  client_state?: string;

  /**
   * Use this field to avoid duplicate commands. Telnyx will ignore any command with
   * the same `command_id` for the same `call_control_id`.
   */
  command_id?: string;
}

export interface ActionStopStreamingParams {
  /**
   * Use this field to add state to every subsequent webhook. It must be a valid
   * Base-64 encoded string.
   */
  client_state?: string;

  /**
   * Use this field to avoid duplicate commands. Telnyx will ignore any command with
   * the same `command_id` for the same `call_control_id`.
   */
  command_id?: string;

  /**
   * Identifies the stream. If the `stream_id` is not provided the command stops all
   * streams associated with a given `call_control_id`.
   */
  stream_id?: string;
}

export interface ActionStopTranscriptionParams {
  /**
   * Use this field to add state to every subsequent webhook. It must be a valid
   * Base-64 encoded string.
   */
  client_state?: string;

  /**
   * Use this field to avoid duplicate commands. Telnyx will ignore any command with
   * the same `command_id` for the same `call_control_id`.
   */
  command_id?: string;
}

export interface ActionSwitchSupervisorRoleParams {
  /**
   * The supervisor role to switch to. 'barge' allows speaking to both parties,
   * 'whisper' allows speaking to caller only, 'monitor' allows listening only.
   */
  role: 'barge' | 'whisper' | 'monitor';
}

export interface ActionTransferParams {
  /**
   * The DID or SIP URI to dial out to.
   */
  to: string;

  /**
   * Enables Answering Machine Detection. When a call is answered, Telnyx runs
   * real-time detection to determine if it was picked up by a human or a machine and
   * sends an `call.machine.detection.ended` webhook with the analysis result. If
   * 'greeting_end' or 'detect_words' is used and a 'machine' is detected, you will
   * receive another 'call.machine.greeting.ended' webhook when the answering machine
   * greeting ends with a beep or silence. If `detect_beep` is used, you will only
   * receive 'call.machine.greeting.ended' if a beep is detected.
   */
  answering_machine_detection?:
    | 'premium'
    | 'detect'
    | 'detect_beep'
    | 'detect_words'
    | 'greeting_end'
    | 'disabled';

  /**
   * Optional configuration parameters to modify 'answering_machine_detection'
   * performance.
   */
  answering_machine_detection_config?: ActionTransferParams.AnsweringMachineDetectionConfig;

  /**
   * The URL of a file to be played back when the transfer destination answers before
   * bridging the call. The URL can point to either a WAV or MP3 file. media_name and
   * audio_url cannot be used together in one request.
   */
  audio_url?: string;

  /**
   * Use this field to add state to every subsequent webhook. It must be a valid
   * Base-64 encoded string.
   */
  client_state?: string;

  /**
   * Use this field to avoid duplicate commands. Telnyx will ignore any command with
   * the same `command_id` for the same `call_control_id`.
   */
  command_id?: string;

  /**
   * Custom headers to be added to the SIP INVITE.
   */
  custom_headers?: Array<CallsAPI.CustomSipHeader>;

  /**
   * If set to false, early media will not be passed to the originating leg.
   */
  early_media?: boolean;

  /**
   * The `from` number to be used as the caller id presented to the destination (`to`
   * number). The number should be in +E164 format. This attribute will default to
   * the `to` number of the original call if omitted.
   */
  from?: string;

  /**
   * The `from_display_name` string to be used as the caller id name (SIP From
   * Display Name) presented to the destination (`to` number). The string should have
   * a maximum of 128 characters, containing only letters, numbers, spaces, and
   * -\_~!.+ special characters. If ommited, the display name will be the same as the
   * number in the `from` field.
   */
  from_display_name?: string;

  /**
   * Defines whether media should be encrypted on the new call leg.
   */
  media_encryption?: 'disabled' | 'SRTP' | 'DTLS';

  /**
   * The media_name of a file to be played back when the transfer destination answers
   * before bridging the call. The media_name must point to a file previously
   * uploaded to api.telnyx.com/v2/media by the same user/organization. The file must
   * either be a WAV or MP3 file.
   */
  media_name?: string;

  /**
   * When enabled, DTMF tones are not passed to the call participant. The webhooks
   * containing the DTMF information will be sent.
   */
  mute_dtmf?: 'none' | 'both' | 'self' | 'opposite';

  /**
   * Specifies behavior after the bridge ends (i.e. the opposite leg either hangs up
   * or is transferred). If supplied with the value `self`, the current leg will be
   * parked after unbridge. If not set, the default behavior is to hang up the leg.
   */
  park_after_unbridge?: string;

  /**
   * Start recording automatically after an event. Disabled by default.
   */
  record?: 'record-from-answer';

  /**
   * Defines which channel should be recorded ('single' or 'dual') when `record` is
   * specified.
   */
  record_channels?: 'single' | 'dual';

  /**
   * The custom recording file name to be used instead of the default `call_leg_id`.
   * Telnyx will still add a Unix timestamp suffix.
   */
  record_custom_file_name?: string;

  /**
   * Defines the format of the recording ('wav' or 'mp3') when `record` is specified.
   */
  record_format?: 'wav' | 'mp3';

  /**
   * Defines the maximum length for the recording in seconds when `record` is
   * specified. The minimum value is 0. The maximum value is 43200. The default value
   * is 0 (infinite).
   */
  record_max_length?: number;

  /**
   * The number of seconds that Telnyx will wait for the recording to be stopped if
   * silence is detected when `record` is specified. The timer only starts when the
   * speech is detected. Please note that call transcription is used to detect
   * silence and the related charge will be applied. The minimum value is 0. The
   * default value is 0 (infinite).
   */
  record_timeout_secs?: number;

  /**
   * The audio track to be recorded. Can be either `both`, `inbound` or `outbound`.
   * If only single track is specified (`inbound`, `outbound`), `channels`
   * configuration is ignored and it will be recorded as mono (single channel).
   */
  record_track?: 'both' | 'inbound' | 'outbound';

  /**
   * When set to `trim-silence`, silence will be removed from the beginning and end
   * of the recording.
   */
  record_trim?: 'trim-silence';

  /**
   * SIP Authentication password used for SIP challenges.
   */
  sip_auth_password?: string;

  /**
   * SIP Authentication username used for SIP challenges.
   */
  sip_auth_username?: string;

  /**
   * SIP headers to be added to the SIP INVITE. Currently only User-to-User header is
   * supported.
   */
  sip_headers?: Array<CallsAPI.SipHeader>;

  /**
   * Defines the SIP region to be used for the call.
   */
  sip_region?: 'US' | 'Europe' | 'Canada' | 'Australia' | 'Middle East';

  /**
   * Defines SIP transport protocol to be used on the call.
   */
  sip_transport_protocol?: 'UDP' | 'TCP' | 'TLS';

  /**
   * Use this field to modify sound effects, for example adjust the pitch.
   */
  sound_modifications?: CallsAPI.SoundModifications;

  /**
   * Use this field to add state to every subsequent webhook for the new leg. It must
   * be a valid Base-64 encoded string.
   */
  target_leg_client_state?: string;

  /**
   * Sets the maximum duration of a Call Control Leg in seconds. If the time limit is
   * reached, the call will hangup and a `call.hangup` webhook with a `hangup_cause`
   * of `time_limit` will be sent. For example, by setting a time limit of 120
   * seconds, a Call Leg will be automatically terminated two minutes after being
   * answered. The default time limit is 14400 seconds or 4 hours and this is also
   * the maximum allowed call length.
   */
  time_limit_secs?: number;

  /**
   * The number of seconds that Telnyx will wait for the call to be answered by the
   * destination to which it is being transferred. If the timeout is reached before
   * an answer is received, the call will hangup and a `call.hangup` webhook with a
   * `hangup_cause` of `timeout` will be sent. Minimum value is 5 seconds. Maximum
   * value is 600 seconds.
   */
  timeout_secs?: number;

  /**
   * Use this field to override the URL for which Telnyx will send subsequent
   * webhooks to for this call.
   */
  webhook_url?: string;

  /**
   * HTTP request type used for `webhook_url`.
   */
  webhook_url_method?: 'POST' | 'GET';
}

export namespace ActionTransferParams {
  /**
   * Optional configuration parameters to modify 'answering_machine_detection'
   * performance.
   */
  export interface AnsweringMachineDetectionConfig {
    /**
     * Silence duration threshold after a greeting message or voice for it be
     * considered human.
     */
    after_greeting_silence_millis?: number;

    /**
     * Maximum threshold for silence between words.
     */
    between_words_silence_millis?: number;

    /**
     * Maximum threshold of a human greeting. If greeting longer than this value,
     * considered machine.
     */
    greeting_duration_millis?: number;

    /**
     * If machine already detected, maximum threshold for silence between words. If
     * exceeded, the greeting is considered ended.
     */
    greeting_silence_duration_millis?: number;

    /**
     * If machine already detected, maximum timeout threshold to determine the end of
     * the machine greeting.
     */
    greeting_total_analysis_time_millis?: number;

    /**
     * If initial silence duration is greater than this value, consider it a machine.
     */
    initial_silence_millis?: number;

    /**
     * If number of detected words is greater than this value, consder it a machine.
     */
    maximum_number_of_words?: number;

    /**
     * If a single word lasts longer than this threshold, consider it a machine.
     */
    maximum_word_length_millis?: number;

    /**
     * Minimum noise threshold for any analysis.
     */
    silence_threshold?: number;

    /**
     * Maximum timeout threshold for overall detection.
     */
    total_analysis_time_millis?: number;
  }
}

export interface ActionUpdateClientStateParams {
  /**
   * Use this field to add state to every subsequent webhook. It must be a valid
   * Base-64 encoded string.
   */
  client_state: string;
}

export declare namespace Actions {
  export {
    type AwsVoiceSettings as AwsVoiceSettings,
    type CallControlCommandResult as CallControlCommandResult,
    type ElevenLabsVoiceSettings as ElevenLabsVoiceSettings,
    type GoogleTranscriptionLanguage as GoogleTranscriptionLanguage,
    type InterruptionSettings as InterruptionSettings,
    type Loopcount as Loopcount,
    type StopRecordingRequest as StopRecordingRequest,
    type TelnyxTranscriptionLanguage as TelnyxTranscriptionLanguage,
    type TelnyxVoiceSettings as TelnyxVoiceSettings,
    type TranscriptionConfig as TranscriptionConfig,
    type TranscriptionEngineAConfig as TranscriptionEngineAConfig,
    type TranscriptionEngineAzureConfig as TranscriptionEngineAzureConfig,
    type TranscriptionEngineBConfig as TranscriptionEngineBConfig,
    type TranscriptionEngineDeepgramConfig as TranscriptionEngineDeepgramConfig,
    type TranscriptionEngineGoogleConfig as TranscriptionEngineGoogleConfig,
    type TranscriptionEngineTelnyxConfig as TranscriptionEngineTelnyxConfig,
    type TranscriptionStartRequest as TranscriptionStartRequest,
    type ActionAddAIAssistantMessagesResponse as ActionAddAIAssistantMessagesResponse,
    type ActionAnswerResponse as ActionAnswerResponse,
    type ActionBridgeResponse as ActionBridgeResponse,
    type ActionEnqueueResponse as ActionEnqueueResponse,
    type ActionGatherResponse as ActionGatherResponse,
    type ActionGatherUsingAIResponse as ActionGatherUsingAIResponse,
    type ActionGatherUsingAudioResponse as ActionGatherUsingAudioResponse,
    type ActionGatherUsingSpeakResponse as ActionGatherUsingSpeakResponse,
    type ActionHangupResponse as ActionHangupResponse,
    type ActionLeaveQueueResponse as ActionLeaveQueueResponse,
    type ActionPauseRecordingResponse as ActionPauseRecordingResponse,
    type ActionReferResponse as ActionReferResponse,
    type ActionRejectResponse as ActionRejectResponse,
    type ActionResumeRecordingResponse as ActionResumeRecordingResponse,
    type ActionSendDtmfResponse as ActionSendDtmfResponse,
    type ActionSendSipInfoResponse as ActionSendSipInfoResponse,
    type ActionSpeakResponse as ActionSpeakResponse,
    type ActionStartAIAssistantResponse as ActionStartAIAssistantResponse,
    type ActionStartForkingResponse as ActionStartForkingResponse,
    type ActionStartNoiseSuppressionResponse as ActionStartNoiseSuppressionResponse,
    type ActionStartPlaybackResponse as ActionStartPlaybackResponse,
    type ActionStartRecordingResponse as ActionStartRecordingResponse,
    type ActionStartSiprecResponse as ActionStartSiprecResponse,
    type ActionStartStreamingResponse as ActionStartStreamingResponse,
    type ActionStartTranscriptionResponse as ActionStartTranscriptionResponse,
    type ActionStopAIAssistantResponse as ActionStopAIAssistantResponse,
    type ActionStopForkingResponse as ActionStopForkingResponse,
    type ActionStopGatherResponse as ActionStopGatherResponse,
    type ActionStopNoiseSuppressionResponse as ActionStopNoiseSuppressionResponse,
    type ActionStopPlaybackResponse as ActionStopPlaybackResponse,
    type ActionStopRecordingResponse as ActionStopRecordingResponse,
    type ActionStopSiprecResponse as ActionStopSiprecResponse,
    type ActionStopStreamingResponse as ActionStopStreamingResponse,
    type ActionStopTranscriptionResponse as ActionStopTranscriptionResponse,
    type ActionSwitchSupervisorRoleResponse as ActionSwitchSupervisorRoleResponse,
    type ActionTransferResponse as ActionTransferResponse,
    type ActionUpdateClientStateResponse as ActionUpdateClientStateResponse,
    type ActionAddAIAssistantMessagesParams as ActionAddAIAssistantMessagesParams,
    type ActionAnswerParams as ActionAnswerParams,
    type ActionBridgeParams as ActionBridgeParams,
    type ActionEnqueueParams as ActionEnqueueParams,
    type ActionGatherParams as ActionGatherParams,
    type ActionGatherUsingAIParams as ActionGatherUsingAIParams,
    type ActionGatherUsingAudioParams as ActionGatherUsingAudioParams,
    type ActionGatherUsingSpeakParams as ActionGatherUsingSpeakParams,
    type ActionHangupParams as ActionHangupParams,
    type ActionLeaveQueueParams as ActionLeaveQueueParams,
    type ActionPauseRecordingParams as ActionPauseRecordingParams,
    type ActionReferParams as ActionReferParams,
    type ActionRejectParams as ActionRejectParams,
    type ActionResumeRecordingParams as ActionResumeRecordingParams,
    type ActionSendDtmfParams as ActionSendDtmfParams,
    type ActionSendSipInfoParams as ActionSendSipInfoParams,
    type ActionSpeakParams as ActionSpeakParams,
    type ActionStartAIAssistantParams as ActionStartAIAssistantParams,
    type ActionStartForkingParams as ActionStartForkingParams,
    type ActionStartNoiseSuppressionParams as ActionStartNoiseSuppressionParams,
    type ActionStartPlaybackParams as ActionStartPlaybackParams,
    type ActionStartRecordingParams as ActionStartRecordingParams,
    type ActionStartSiprecParams as ActionStartSiprecParams,
    type ActionStartStreamingParams as ActionStartStreamingParams,
    type ActionStartTranscriptionParams as ActionStartTranscriptionParams,
    type ActionStopAIAssistantParams as ActionStopAIAssistantParams,
    type ActionStopForkingParams as ActionStopForkingParams,
    type ActionStopGatherParams as ActionStopGatherParams,
    type ActionStopNoiseSuppressionParams as ActionStopNoiseSuppressionParams,
    type ActionStopPlaybackParams as ActionStopPlaybackParams,
    type ActionStopRecordingParams as ActionStopRecordingParams,
    type ActionStopSiprecParams as ActionStopSiprecParams,
    type ActionStopStreamingParams as ActionStopStreamingParams,
    type ActionStopTranscriptionParams as ActionStopTranscriptionParams,
    type ActionSwitchSupervisorRoleParams as ActionSwitchSupervisorRoleParams,
    type ActionTransferParams as ActionTransferParams,
    type ActionUpdateClientStateParams as ActionUpdateClientStateParams,
  };
}
