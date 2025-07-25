import {components} from './TelnyxAPI.js';

declare module 'telnyx' {
  namespace Telnyx {
    namespace events {
      type CallAIGatherEndedEvent =
        components['schemas']['CallAIGatherEndedEvent'];
      type CallAnsweredEvent = components['schemas']['CallAnsweredEvent'];
      type CallBridgedEvent = components['schemas']['CallBridgedEvent'];
      type CallDtmfReceivedEvent =
        components['schemas']['CallDtmfReceivedEvent'];
      type CallEnqueuedEvent = components['schemas']['CallEnqueuedEvent'];
      type CallEvent = components['schemas']['CallEvent'];
      type CallForkStartedEvent = components['schemas']['CallForkStartedEvent'];
      type CallForkStoppedEvent = components['schemas']['CallForkStoppedEvent'];
      type CallGatherEndedEvent = components['schemas']['CallGatherEndedEvent'];
      type CallHangupEvent = components['schemas']['CallHangupEvent'];
      type CallInitiatedEvent = components['schemas']['CallInitiatedEvent'];
      type CallLeftQueueEvent = components['schemas']['CallLeftQueueEvent'];
      type CallMachineDetectionEndedEvent =
        components['schemas']['CallMachineDetectionEndedEvent'];
      type CallMachineGreetingEndedEvent =
        components['schemas']['CallMachineGreetingEndedEvent'];
      type CallMachinePremiumDetectionEndedEvent =
        components['schemas']['CallMachinePremiumDetectionEndedEvent'];
      type CallMachinePremiumGreetingEndedEvent =
        components['schemas']['CallMachinePremiumGreetingEndedEvent'];
      type CallPlaybackEndedEvent =
        components['schemas']['CallPlaybackEndedEvent'];
      type CallPlaybackStartedEvent =
        components['schemas']['CallPlaybackStartedEvent'];
      type CallRecordingErrorEvent =
        components['schemas']['callRecordingErrorEvent'];
      type CallRecordingSavedEvent =
        components['schemas']['CallRecordingSavedEvent'];
      type CallReferCompletedEvent =
        components['schemas']['CallReferCompletedEvent'];
      type CallReferFailedEvent = components['schemas']['CallReferFailedEvent'];
      type CallReferStartedEvent =
        components['schemas']['CallReferStartedEvent'];
      type CallSpeakEndedEvent = components['schemas']['CallSpeakEndedEvent'];
      type CallSpeakStartedEvent =
        components['schemas']['CallSpeakStartedEvent'];
      type CallStreamingFailedEvent =
        components['schemas']['CallStreamingFailedEvent'];
      type CallStreamingStartedEvent =
        components['schemas']['CallStreamingStartedEvent'];
      type CallStreamingStoppedEvent =
        components['schemas']['CallStreamingStoppedEvent'];
      type CampaignStatusUpdateEvent =
        components['schemas']['CampaignStatusUpdateEvent'];
      type CallSiprecFailedEvent =
        components['schemas']['CallSiprecFailedEvent'];
      type CallSiprecStartedEvent =
        components['schemas']['CallSiprecStartedEvent'];
      type CallSiprecStoppedEvent =
        components['schemas']['CallSiprecStoppedEvent'];
      type CallAIGatherMessageHistoryUpdatedEvent = 
        components['schemas']['CallAIGatherMessageHistoryUpdatedEvent'];
      type CallAIGatherPartialResultsEvent =
        components['schemas']['CallAIGatherPartialResultsEvent'];
      type CallConversationEndedEvent =
        components['schemas']['callConversationEndedEvent'];
      type CallConversationInsightsGeneratedEvent =
        components['schemas']['callConversationInsightsGeneratedEvent'];
      type CallRecordingTranscriptionSavedEvent =
        components['schemas']['callRecordingTranscriptionSavedEvent'];
      type ConferenceCreatedEvent =
        components['schemas']['ConferenceCreatedEvent'];
      type ConferenceEndedEvent = components['schemas']['ConferenceEndedEvent'];
      type ConferenceFloorChangedEvent =
        components['schemas']['ConferenceFloorChangedEvent'];
      type ConferenceParticipantJoinedEvent =
        components['schemas']['ConferenceParticipantJoinedEvent'];
      type ConferenceParticipantLeftEvent =
        components['schemas']['ConferenceParticipantLeftEvent'];
      type ConferenceParticipantPlaybackEndedEvent =
        components['schemas']['ConferenceParticipantPlaybackEndedEvent'];
      type ConferenceParticipantPlaybackStartedEvent =
        components['schemas']['ConferenceParticipantPlaybackStartedEvent'];
      type ConferenceParticipantSpeakEndedEvent =
        components['schemas']['ConferenceParticipantSpeakEndedEvent'];
      type ConferenceParticipantSpeakStartedEvent =
        components['schemas']['ConferenceParticipantSpeakStartedEvent'];
      type ConferencePlaybackEndedEvent =
        components['schemas']['ConferencePlaybackEndedEvent'];
      type ConferencePlaybackStartedEvent =
        components['schemas']['ConferencePlaybackStartedEvent'];
      type ConferenceRecordingSavedEvent =
        components['schemas']['ConferenceRecordingSavedEvent'];
      type ConferenceSpeakEndedEvent =
        components['schemas']['ConferenceSpeakEndedEvent'];
      type ConferenceSpeakStartedEvent =
        components['schemas']['ConferenceSpeakStartedEvent'];
      type CustomerServiceRecordStatusChangedEvent =
        components['schemas']['CustomerServiceRecordStatusChangedEvent'];
      type InboundMessageEvent = components['schemas']['InboundMessageEvent'];
      type NotificationEvent = components['schemas']['NotificationEvent'];
      type NumberOrderBlockEvent =
        components['schemas']['NumberOrderBlockEvent'];
      type OutboundMessageEvent = components['schemas']['OutboundMessageEvent'];
      type PortingEvent = components['schemas']['PortingEvent'];
      type PortoutEvent = components['schemas']['PortoutEvent'];
      type RCSEvent = components['schemas']['RCSEvent'];
      type ReplacedLinkClickEvent =
        components['schemas']['ReplacedLinkClickEvent'];
      type TranscriptionEvent = components['schemas']['TranscriptionEvent'];
    }
  }
}
