# Shared

Types:

- <code><a href="./src/resources/shared.ts">APIError</a></code>
- <code><a href="./src/resources/shared.ts">ConnectionsPaginationMeta</a></code>
- <code><a href="./src/resources/shared.ts">DocReqsRequirementType</a></code>
- <code><a href="./src/resources/shared.ts">HostedNumber</a></code>
- <code><a href="./src/resources/shared.ts">MessagingFeatureSet</a></code>
- <code><a href="./src/resources/shared.ts">MessagingHostedNumberOrder</a></code>
- <code><a href="./src/resources/shared.ts">Metadata</a></code>
- <code><a href="./src/resources/shared.ts">NumberHealthMetrics</a></code>
- <code><a href="./src/resources/shared.ts">PhoneNumberWithMessagingSettings</a></code>
- <code><a href="./src/resources/shared.ts">PortingOrderStatus</a></code>
- <code><a href="./src/resources/shared.ts">PortingOrdersExceptionType</a></code>
- <code><a href="./src/resources/shared.ts">RoomParticipant</a></code>
- <code><a href="./src/resources/shared.ts">ShortCode</a></code>
- <code><a href="./src/resources/shared.ts">SimCardStatus</a></code>
- <code><a href="./src/resources/shared.ts">SimpleSimCard</a></code>
- <code><a href="./src/resources/shared.ts">SubNumberOrderRegulatoryRequirementWithValue</a></code>

# Legacy

## Reporting

### BatchDetailRecords

Types:

- <code><a href="./src/resources/legacy/reporting/batch-detail-records/batch-detail-records.ts">Filter</a></code>

#### Messaging

Types:

- <code><a href="./src/resources/legacy/reporting/batch-detail-records/messaging.ts">MdrDetailReportResponse</a></code>
- <code><a href="./src/resources/legacy/reporting/batch-detail-records/messaging.ts">MessagingCreateResponse</a></code>
- <code><a href="./src/resources/legacy/reporting/batch-detail-records/messaging.ts">MessagingRetrieveResponse</a></code>
- <code><a href="./src/resources/legacy/reporting/batch-detail-records/messaging.ts">MessagingListResponse</a></code>
- <code><a href="./src/resources/legacy/reporting/batch-detail-records/messaging.ts">MessagingDeleteResponse</a></code>

Methods:

- <code title="post /legacy/reporting/batch_detail_records/messaging">client.legacy.reporting.batchDetailRecords.messaging.<a href="./src/resources/legacy/reporting/batch-detail-records/messaging.ts">create</a>({ ...params }) -> MessagingCreateResponse</code>
- <code title="get /legacy/reporting/batch_detail_records/messaging/{id}">client.legacy.reporting.batchDetailRecords.messaging.<a href="./src/resources/legacy/reporting/batch-detail-records/messaging.ts">retrieve</a>(id) -> MessagingRetrieveResponse</code>
- <code title="get /legacy/reporting/batch_detail_records/messaging">client.legacy.reporting.batchDetailRecords.messaging.<a href="./src/resources/legacy/reporting/batch-detail-records/messaging.ts">list</a>() -> MessagingListResponse</code>
- <code title="delete /legacy/reporting/batch_detail_records/messaging/{id}">client.legacy.reporting.batchDetailRecords.messaging.<a href="./src/resources/legacy/reporting/batch-detail-records/messaging.ts">delete</a>(id) -> MessagingDeleteResponse</code>

#### SpeechToText

Types:

- <code><a href="./src/resources/legacy/reporting/batch-detail-records/speech-to-text.ts">SttDetailReportResponse</a></code>
- <code><a href="./src/resources/legacy/reporting/batch-detail-records/speech-to-text.ts">SpeechToTextCreateResponse</a></code>
- <code><a href="./src/resources/legacy/reporting/batch-detail-records/speech-to-text.ts">SpeechToTextRetrieveResponse</a></code>
- <code><a href="./src/resources/legacy/reporting/batch-detail-records/speech-to-text.ts">SpeechToTextListResponse</a></code>
- <code><a href="./src/resources/legacy/reporting/batch-detail-records/speech-to-text.ts">SpeechToTextDeleteResponse</a></code>

Methods:

- <code title="post /legacy/reporting/batch_detail_records/speech_to_text">client.legacy.reporting.batchDetailRecords.speechToText.<a href="./src/resources/legacy/reporting/batch-detail-records/speech-to-text.ts">create</a>({ ...params }) -> SpeechToTextCreateResponse</code>
- <code title="get /legacy/reporting/batch_detail_records/speech_to_text/{id}">client.legacy.reporting.batchDetailRecords.speechToText.<a href="./src/resources/legacy/reporting/batch-detail-records/speech-to-text.ts">retrieve</a>(id) -> SpeechToTextRetrieveResponse</code>
- <code title="get /legacy/reporting/batch_detail_records/speech_to_text">client.legacy.reporting.batchDetailRecords.speechToText.<a href="./src/resources/legacy/reporting/batch-detail-records/speech-to-text.ts">list</a>() -> SpeechToTextListResponse</code>
- <code title="delete /legacy/reporting/batch_detail_records/speech_to_text/{id}">client.legacy.reporting.batchDetailRecords.speechToText.<a href="./src/resources/legacy/reporting/batch-detail-records/speech-to-text.ts">delete</a>(id) -> SpeechToTextDeleteResponse</code>

#### Voice

Types:

- <code><a href="./src/resources/legacy/reporting/batch-detail-records/voice.ts">CdrDetailedReqResponse</a></code>
- <code><a href="./src/resources/legacy/reporting/batch-detail-records/voice.ts">VoiceCreateResponse</a></code>
- <code><a href="./src/resources/legacy/reporting/batch-detail-records/voice.ts">VoiceRetrieveResponse</a></code>
- <code><a href="./src/resources/legacy/reporting/batch-detail-records/voice.ts">VoiceListResponse</a></code>
- <code><a href="./src/resources/legacy/reporting/batch-detail-records/voice.ts">VoiceDeleteResponse</a></code>
- <code><a href="./src/resources/legacy/reporting/batch-detail-records/voice.ts">VoiceRetrieveFieldsResponse</a></code>

Methods:

- <code title="post /legacy/reporting/batch_detail_records/voice">client.legacy.reporting.batchDetailRecords.voice.<a href="./src/resources/legacy/reporting/batch-detail-records/voice.ts">create</a>({ ...params }) -> VoiceCreateResponse</code>
- <code title="get /legacy/reporting/batch_detail_records/voice/{id}">client.legacy.reporting.batchDetailRecords.voice.<a href="./src/resources/legacy/reporting/batch-detail-records/voice.ts">retrieve</a>(id) -> VoiceRetrieveResponse</code>
- <code title="get /legacy/reporting/batch_detail_records/voice">client.legacy.reporting.batchDetailRecords.voice.<a href="./src/resources/legacy/reporting/batch-detail-records/voice.ts">list</a>() -> VoiceListResponse</code>
- <code title="delete /legacy/reporting/batch_detail_records/voice/{id}">client.legacy.reporting.batchDetailRecords.voice.<a href="./src/resources/legacy/reporting/batch-detail-records/voice.ts">delete</a>(id) -> VoiceDeleteResponse</code>
- <code title="get /legacy/reporting/batch_detail_records/voice/fields">client.legacy.reporting.batchDetailRecords.voice.<a href="./src/resources/legacy/reporting/batch-detail-records/voice.ts">retrieveFields</a>() -> VoiceRetrieveFieldsResponse</code>

### UsageReports

Types:

- <code><a href="./src/resources/legacy/reporting/usage-reports/usage-reports.ts">UsageReportRetrieveSpeechToTextResponse</a></code>

Methods:

- <code title="get /legacy/reporting/usage_reports/speech_to_text">client.legacy.reporting.usageReports.<a href="./src/resources/legacy/reporting/usage-reports/usage-reports.ts">retrieveSpeechToText</a>({ ...params }) -> UsageReportRetrieveSpeechToTextResponse</code>

#### Messaging

Types:

- <code><a href="./src/resources/legacy/reporting/usage-reports/messaging.ts">MdrUsageReportResponseLegacy</a></code>
- <code><a href="./src/resources/legacy/reporting/usage-reports/messaging.ts">MessagingCreateResponse</a></code>
- <code><a href="./src/resources/legacy/reporting/usage-reports/messaging.ts">MessagingRetrieveResponse</a></code>
- <code><a href="./src/resources/legacy/reporting/usage-reports/messaging.ts">MessagingListResponse</a></code>
- <code><a href="./src/resources/legacy/reporting/usage-reports/messaging.ts">MessagingDeleteResponse</a></code>

Methods:

- <code title="post /legacy/reporting/usage_reports/messaging">client.legacy.reporting.usageReports.messaging.<a href="./src/resources/legacy/reporting/usage-reports/messaging.ts">create</a>({ ...params }) -> MessagingCreateResponse</code>
- <code title="get /legacy/reporting/usage_reports/messaging/{id}">client.legacy.reporting.usageReports.messaging.<a href="./src/resources/legacy/reporting/usage-reports/messaging.ts">retrieve</a>(id) -> MessagingRetrieveResponse</code>
- <code title="get /legacy/reporting/usage_reports/messaging">client.legacy.reporting.usageReports.messaging.<a href="./src/resources/legacy/reporting/usage-reports/messaging.ts">list</a>({ ...params }) -> MessagingListResponse</code>
- <code title="delete /legacy/reporting/usage_reports/messaging/{id}">client.legacy.reporting.usageReports.messaging.<a href="./src/resources/legacy/reporting/usage-reports/messaging.ts">delete</a>(id) -> MessagingDeleteResponse</code>

#### NumberLookup

Methods:

- <code title="post /legacy/reporting/usage_reports/number_lookup">client.legacy.reporting.usageReports.numberLookup.<a href="./src/resources/legacy/reporting/usage-reports/number-lookup.ts">create</a>({ ...params }) -> void</code>
- <code title="get /legacy/reporting/usage_reports/number_lookup/{id}">client.legacy.reporting.usageReports.numberLookup.<a href="./src/resources/legacy/reporting/usage-reports/number-lookup.ts">retrieve</a>(id) -> void</code>
- <code title="get /legacy/reporting/usage_reports/number_lookup">client.legacy.reporting.usageReports.numberLookup.<a href="./src/resources/legacy/reporting/usage-reports/number-lookup.ts">list</a>({ ...params }) -> void</code>
- <code title="delete /legacy/reporting/usage_reports/number_lookup/{id}">client.legacy.reporting.usageReports.numberLookup.<a href="./src/resources/legacy/reporting/usage-reports/number-lookup.ts">delete</a>(id) -> void</code>

#### Voice

Types:

- <code><a href="./src/resources/legacy/reporting/usage-reports/voice.ts">CdrUsageReportResponseLegacy</a></code>
- <code><a href="./src/resources/legacy/reporting/usage-reports/voice.ts">VoiceCreateResponse</a></code>
- <code><a href="./src/resources/legacy/reporting/usage-reports/voice.ts">VoiceRetrieveResponse</a></code>
- <code><a href="./src/resources/legacy/reporting/usage-reports/voice.ts">VoiceListResponse</a></code>
- <code><a href="./src/resources/legacy/reporting/usage-reports/voice.ts">VoiceDeleteResponse</a></code>

Methods:

- <code title="post /legacy/reporting/usage_reports/voice">client.legacy.reporting.usageReports.voice.<a href="./src/resources/legacy/reporting/usage-reports/voice.ts">create</a>({ ...params }) -> VoiceCreateResponse</code>
- <code title="get /legacy/reporting/usage_reports/voice/{id}">client.legacy.reporting.usageReports.voice.<a href="./src/resources/legacy/reporting/usage-reports/voice.ts">retrieve</a>(id) -> VoiceRetrieveResponse</code>
- <code title="get /legacy/reporting/usage_reports/voice">client.legacy.reporting.usageReports.voice.<a href="./src/resources/legacy/reporting/usage-reports/voice.ts">list</a>({ ...params }) -> VoiceListResponse</code>
- <code title="delete /legacy/reporting/usage_reports/voice/{id}">client.legacy.reporting.usageReports.voice.<a href="./src/resources/legacy/reporting/usage-reports/voice.ts">delete</a>(id) -> VoiceDeleteResponse</code>

# OAuth

Types:

- <code><a href="./src/resources/oauth.ts">OAuthRetrieveResponse</a></code>
- <code><a href="./src/resources/oauth.ts">OAuthGrantsResponse</a></code>
- <code><a href="./src/resources/oauth.ts">OAuthIntrospectResponse</a></code>
- <code><a href="./src/resources/oauth.ts">OAuthRegisterResponse</a></code>
- <code><a href="./src/resources/oauth.ts">OAuthRetrieveJwksResponse</a></code>
- <code><a href="./src/resources/oauth.ts">OAuthTokenResponse</a></code>

Methods:

- <code title="get /oauth/consent/{consent_token}">client.oauth.<a href="./src/resources/oauth.ts">retrieve</a>(consentToken) -> OAuthRetrieveResponse</code>
- <code title="post /oauth/grants">client.oauth.<a href="./src/resources/oauth.ts">grants</a>({ ...params }) -> OAuthGrantsResponse</code>
- <code title="post /oauth/introspect">client.oauth.<a href="./src/resources/oauth.ts">introspect</a>({ ...params }) -> OAuthIntrospectResponse</code>
- <code title="post /oauth/register">client.oauth.<a href="./src/resources/oauth.ts">register</a>({ ...params }) -> OAuthRegisterResponse</code>
- <code title="get /oauth/authorize">client.oauth.<a href="./src/resources/oauth.ts">retrieveAuthorize</a>({ ...params }) -> void</code>
- <code title="get /oauth/jwks">client.oauth.<a href="./src/resources/oauth.ts">retrieveJwks</a>() -> OAuthRetrieveJwksResponse</code>
- <code title="post /oauth/token">client.oauth.<a href="./src/resources/oauth.ts">token</a>({ ...params }) -> OAuthTokenResponse</code>

# OAuthClients

Types:

- <code><a href="./src/resources/oauth-clients.ts">OAuthClient</a></code>
- <code><a href="./src/resources/oauth-clients.ts">OAuthClientCreateResponse</a></code>
- <code><a href="./src/resources/oauth-clients.ts">OAuthClientRetrieveResponse</a></code>
- <code><a href="./src/resources/oauth-clients.ts">OAuthClientUpdateResponse</a></code>
- <code><a href="./src/resources/oauth-clients.ts">OAuthClientListResponse</a></code>

Methods:

- <code title="post /oauth_clients">client.oauthClients.<a href="./src/resources/oauth-clients.ts">create</a>({ ...params }) -> OAuthClientCreateResponse</code>
- <code title="get /oauth_clients/{id}">client.oauthClients.<a href="./src/resources/oauth-clients.ts">retrieve</a>(id) -> OAuthClientRetrieveResponse</code>
- <code title="put /oauth_clients/{id}">client.oauthClients.<a href="./src/resources/oauth-clients.ts">update</a>(id, { ...params }) -> OAuthClientUpdateResponse</code>
- <code title="get /oauth_clients">client.oauthClients.<a href="./src/resources/oauth-clients.ts">list</a>({ ...params }) -> OAuthClientListResponse</code>
- <code title="delete /oauth_clients/{id}">client.oauthClients.<a href="./src/resources/oauth-clients.ts">delete</a>(id) -> void</code>

# OAuthGrants

Types:

- <code><a href="./src/resources/oauth-grants.ts">OAuthGrant</a></code>
- <code><a href="./src/resources/oauth-grants.ts">OAuthGrantRetrieveResponse</a></code>
- <code><a href="./src/resources/oauth-grants.ts">OAuthGrantListResponse</a></code>
- <code><a href="./src/resources/oauth-grants.ts">OAuthGrantDeleteResponse</a></code>

Methods:

- <code title="get /oauth_grants/{id}">client.oauthGrants.<a href="./src/resources/oauth-grants.ts">retrieve</a>(id) -> OAuthGrantRetrieveResponse</code>
- <code title="get /oauth_grants">client.oauthGrants.<a href="./src/resources/oauth-grants.ts">list</a>({ ...params }) -> OAuthGrantListResponse</code>
- <code title="delete /oauth_grants/{id}">client.oauthGrants.<a href="./src/resources/oauth-grants.ts">delete</a>(id) -> OAuthGrantDeleteResponse</code>

# Webhooks

Types:

- <code><a href="./src/resources/webhooks.ts">CallAIGatherEndedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">CallAIGatherMessageHistoryUpdatedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">CallAIGatherPartialResultsWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">CustomerServiceRecordStatusChangedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">CallAnsweredWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">CallBridgedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">CallConversationEndedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">CallConversationInsightsGeneratedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">CallDtmfReceivedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">CallEnqueuedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">CallForkStartedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">CallForkStoppedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">CallGatherEndedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">CallHangupWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">CallInitiatedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">CallLeftQueueWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">CallMachineDetectionEndedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">CallMachineGreetingEndedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">CallMachinePremiumDetectionEndedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">CallMachinePremiumGreetingEndedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">CallPlaybackEndedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">CallPlaybackStartedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">CallRecordingErrorWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">CallRecordingSavedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">CallRecordingTranscriptionSavedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">CallReferCompletedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">CallReferFailedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">CallReferStartedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">CallSiprecFailedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">CallSiprecStartedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">CallSiprecStoppedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">CallSpeakEndedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">CallSpeakStartedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">CallStreamingFailedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">CallStreamingStartedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">CallStreamingStoppedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">CampaignStatusUpdateWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">ConferenceCreatedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">ConferenceEndedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">ConferenceFloorChangedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">ConferenceParticipantJoinedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">ConferenceParticipantLeftWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">ConferenceParticipantPlaybackEndedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">ConferenceParticipantPlaybackStartedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">ConferenceParticipantSpeakEndedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">ConferenceParticipantSpeakStartedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">ConferencePlaybackEndedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">ConferencePlaybackStartedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">ConferenceRecordingSavedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">ConferenceSpeakEndedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">ConferenceSpeakStartedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">DeliveryUpdateWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">FaxDeliveredWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">FaxFailedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">FaxMediaProcessedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">FaxQueuedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">FaxSendingStartedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">InboundMessageWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">NumberOrderStatusUpdateWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">ReplacedLinkClickWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">StreamingFailedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">StreamingStartedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">StreamingStoppedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">TranscriptionWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">UnwrapWebhookEvent</a></code>

Methods:

- <code>client.webhooks.<a href="./src/resources/webhooks.ts">unwrap</a>(body) -> void</code>

# AccessIPAddress

Types:

- <code><a href="./src/resources/access-ip-address.ts">AccessIPAddressResponse</a></code>
- <code><a href="./src/resources/access-ip-address.ts">CloudflareSyncStatus</a></code>
- <code><a href="./src/resources/access-ip-address.ts">AccessIPAddressListResponse</a></code>

Methods:

- <code title="post /access_ip_address">client.accessIPAddress.<a href="./src/resources/access-ip-address.ts">create</a>({ ...params }) -> AccessIPAddressResponse</code>
- <code title="get /access_ip_address/{access_ip_address_id}">client.accessIPAddress.<a href="./src/resources/access-ip-address.ts">retrieve</a>(accessIPAddressID) -> AccessIPAddressResponse</code>
- <code title="get /access_ip_address">client.accessIPAddress.<a href="./src/resources/access-ip-address.ts">list</a>({ ...params }) -> AccessIPAddressListResponse</code>
- <code title="delete /access_ip_address/{access_ip_address_id}">client.accessIPAddress.<a href="./src/resources/access-ip-address.ts">delete</a>(accessIPAddressID) -> AccessIPAddressResponse</code>

# AccessIPRanges

Types:

- <code><a href="./src/resources/access-ip-ranges.ts">AccessIPRange</a></code>
- <code><a href="./src/resources/access-ip-ranges.ts">AccessIPRangeListResponse</a></code>

Methods:

- <code title="post /access_ip_ranges">client.accessIPRanges.<a href="./src/resources/access-ip-ranges.ts">create</a>({ ...params }) -> AccessIPRange</code>
- <code title="get /access_ip_ranges">client.accessIPRanges.<a href="./src/resources/access-ip-ranges.ts">list</a>({ ...params }) -> AccessIPRangeListResponse</code>
- <code title="delete /access_ip_ranges/{access_ip_range_id}">client.accessIPRanges.<a href="./src/resources/access-ip-ranges.ts">delete</a>(accessIPRangeID) -> AccessIPRange</code>

# Actions

## Purchase

Types:

- <code><a href="./src/resources/actions/purchase.ts">PurchaseCreateResponse</a></code>

Methods:

- <code title="post /actions/purchase/esims">client.actions.purchase.<a href="./src/resources/actions/purchase.ts">create</a>({ ...params }) -> PurchaseCreateResponse</code>

## Register

Types:

- <code><a href="./src/resources/actions/register.ts">RegisterCreateResponse</a></code>

Methods:

- <code title="post /actions/register/sim_cards">client.actions.register.<a href="./src/resources/actions/register.ts">create</a>({ ...params }) -> RegisterCreateResponse</code>

# Addresses

Types:

- <code><a href="./src/resources/addresses/addresses.ts">Address</a></code>
- <code><a href="./src/resources/addresses/addresses.ts">AddressCreateResponse</a></code>
- <code><a href="./src/resources/addresses/addresses.ts">AddressRetrieveResponse</a></code>
- <code><a href="./src/resources/addresses/addresses.ts">AddressListResponse</a></code>
- <code><a href="./src/resources/addresses/addresses.ts">AddressDeleteResponse</a></code>

Methods:

- <code title="post /addresses">client.addresses.<a href="./src/resources/addresses/addresses.ts">create</a>({ ...params }) -> AddressCreateResponse</code>
- <code title="get /addresses/{id}">client.addresses.<a href="./src/resources/addresses/addresses.ts">retrieve</a>(id) -> AddressRetrieveResponse</code>
- <code title="get /addresses">client.addresses.<a href="./src/resources/addresses/addresses.ts">list</a>({ ...params }) -> AddressListResponse</code>
- <code title="delete /addresses/{id}">client.addresses.<a href="./src/resources/addresses/addresses.ts">delete</a>(id) -> AddressDeleteResponse</code>

## Actions

Types:

- <code><a href="./src/resources/addresses/actions.ts">ActionAcceptSuggestionsResponse</a></code>
- <code><a href="./src/resources/addresses/actions.ts">ActionValidateResponse</a></code>

Methods:

- <code title="post /addresses/{id}/actions/accept_suggestions">client.addresses.actions.<a href="./src/resources/addresses/actions.ts">acceptSuggestions</a>(pathID, { ...params }) -> ActionAcceptSuggestionsResponse</code>
- <code title="post /addresses/actions/validate">client.addresses.actions.<a href="./src/resources/addresses/actions.ts">validate</a>({ ...params }) -> ActionValidateResponse</code>

# AdvancedOrders

Types:

- <code><a href="./src/resources/advanced-orders.ts">AdvancedOrderCreateResponse</a></code>
- <code><a href="./src/resources/advanced-orders.ts">AdvancedOrderRetrieveResponse</a></code>
- <code><a href="./src/resources/advanced-orders.ts">AdvancedOrderListResponse</a></code>
- <code><a href="./src/resources/advanced-orders.ts">AdvancedOrderUpdateRequirementGroupResponse</a></code>

Methods:

- <code title="post /advanced_orders">client.advancedOrders.<a href="./src/resources/advanced-orders.ts">create</a>({ ...params }) -> unknown</code>
- <code title="get /advanced_orders/{order_id}">client.advancedOrders.<a href="./src/resources/advanced-orders.ts">retrieve</a>(orderID) -> unknown</code>
- <code title="get /advanced_orders">client.advancedOrders.<a href="./src/resources/advanced-orders.ts">list</a>() -> unknown</code>
- <code title="patch /advanced_orders/{advanced-order-id}/requirement_group">client.advancedOrders.<a href="./src/resources/advanced-orders.ts">updateRequirementGroup</a>(advancedOrderID, { ...params }) -> unknown</code>

# AI

Types:

- <code><a href="./src/resources/ai/ai.ts">AIRetrieveModelsResponse</a></code>
- <code><a href="./src/resources/ai/ai.ts">AISummarizeResponse</a></code>

Methods:

- <code title="get /ai/models">client.ai.<a href="./src/resources/ai/ai.ts">retrieveModels</a>() -> AIRetrieveModelsResponse</code>
- <code title="post /ai/summarize">client.ai.<a href="./src/resources/ai/ai.ts">summarize</a>({ ...params }) -> AISummarizeResponse</code>

## Assistants

Types:

- <code><a href="./src/resources/ai/assistants/assistants.ts">Assistant</a></code>
- <code><a href="./src/resources/ai/assistants/assistants.ts">AssistantTool</a></code>
- <code><a href="./src/resources/ai/assistants/assistants.ts">AssistantsList</a></code>
- <code><a href="./src/resources/ai/assistants/assistants.ts">EnabledFeatures</a></code>
- <code><a href="./src/resources/ai/assistants/assistants.ts">HangupTool</a></code>
- <code><a href="./src/resources/ai/assistants/assistants.ts">HangupToolParams</a></code>
- <code><a href="./src/resources/ai/assistants/assistants.ts">ImportMetadata</a></code>
- <code><a href="./src/resources/ai/assistants/assistants.ts">InferenceEmbeddingBucketIDs</a></code>
- <code><a href="./src/resources/ai/assistants/assistants.ts">InferenceEmbeddingTransferToolParams</a></code>
- <code><a href="./src/resources/ai/assistants/assistants.ts">InferenceEmbeddingWebhookToolParams</a></code>
- <code><a href="./src/resources/ai/assistants/assistants.ts">InsightSettings</a></code>
- <code><a href="./src/resources/ai/assistants/assistants.ts">MessagingSettings</a></code>
- <code><a href="./src/resources/ai/assistants/assistants.ts">PrivacySettings</a></code>
- <code><a href="./src/resources/ai/assistants/assistants.ts">RetrievalTool</a></code>
- <code><a href="./src/resources/ai/assistants/assistants.ts">TelephonySettings</a></code>
- <code><a href="./src/resources/ai/assistants/assistants.ts">TranscriptionSettings</a></code>
- <code><a href="./src/resources/ai/assistants/assistants.ts">TransferTool</a></code>
- <code><a href="./src/resources/ai/assistants/assistants.ts">VoiceSettings</a></code>
- <code><a href="./src/resources/ai/assistants/assistants.ts">WebhookTool</a></code>
- <code><a href="./src/resources/ai/assistants/assistants.ts">AssistantCreateResponse</a></code>
- <code><a href="./src/resources/ai/assistants/assistants.ts">AssistantRetrieveResponse</a></code>
- <code><a href="./src/resources/ai/assistants/assistants.ts">AssistantUpdateResponse</a></code>
- <code><a href="./src/resources/ai/assistants/assistants.ts">AssistantDeleteResponse</a></code>
- <code><a href="./src/resources/ai/assistants/assistants.ts">AssistantChatResponse</a></code>
- <code><a href="./src/resources/ai/assistants/assistants.ts">AssistantCloneResponse</a></code>
- <code><a href="./src/resources/ai/assistants/assistants.ts">AssistantGetTexmlResponse</a></code>

Methods:

- <code title="post /ai/assistants">client.ai.assistants.<a href="./src/resources/ai/assistants/assistants.ts">create</a>({ ...params }) -> AssistantCreateResponse</code>
- <code title="get /ai/assistants/{assistant_id}">client.ai.assistants.<a href="./src/resources/ai/assistants/assistants.ts">retrieve</a>(assistantID, { ...params }) -> AssistantRetrieveResponse</code>
- <code title="post /ai/assistants/{assistant_id}">client.ai.assistants.<a href="./src/resources/ai/assistants/assistants.ts">update</a>(assistantID, { ...params }) -> unknown</code>
- <code title="get /ai/assistants">client.ai.assistants.<a href="./src/resources/ai/assistants/assistants.ts">list</a>() -> AssistantsList</code>
- <code title="delete /ai/assistants/{assistant_id}">client.ai.assistants.<a href="./src/resources/ai/assistants/assistants.ts">delete</a>(assistantID) -> AssistantDeleteResponse</code>
- <code title="post /ai/assistants/{assistant_id}/chat">client.ai.assistants.<a href="./src/resources/ai/assistants/assistants.ts">chat</a>(assistantID, { ...params }) -> AssistantChatResponse</code>
- <code title="post /ai/assistants/{assistant_id}/clone">client.ai.assistants.<a href="./src/resources/ai/assistants/assistants.ts">clone</a>(assistantID) -> AssistantCloneResponse</code>
- <code title="get /ai/assistants/{assistant_id}/texml">client.ai.assistants.<a href="./src/resources/ai/assistants/assistants.ts">getTexml</a>(assistantID) -> string</code>
- <code title="post /ai/assistants/import">client.ai.assistants.<a href="./src/resources/ai/assistants/assistants.ts">import</a>({ ...params }) -> AssistantsList</code>

### Tests

Types:

- <code><a href="./src/resources/ai/assistants/tests/tests.ts">AssistantTest</a></code>
- <code><a href="./src/resources/ai/assistants/tests/tests.ts">TelnyxConversationChannel</a></code>
- <code><a href="./src/resources/ai/assistants/tests/tests.ts">TestListResponse</a></code>
- <code><a href="./src/resources/ai/assistants/tests/tests.ts">TestDeleteResponse</a></code>

Methods:

- <code title="post /ai/assistants/tests">client.ai.assistants.tests.<a href="./src/resources/ai/assistants/tests/tests.ts">create</a>({ ...params }) -> AssistantTest</code>
- <code title="get /ai/assistants/tests/{test_id}">client.ai.assistants.tests.<a href="./src/resources/ai/assistants/tests/tests.ts">retrieve</a>(testID) -> AssistantTest</code>
- <code title="put /ai/assistants/tests/{test_id}">client.ai.assistants.tests.<a href="./src/resources/ai/assistants/tests/tests.ts">update</a>(testID, { ...params }) -> AssistantTest</code>
- <code title="get /ai/assistants/tests">client.ai.assistants.tests.<a href="./src/resources/ai/assistants/tests/tests.ts">list</a>({ ...params }) -> TestListResponse</code>
- <code title="delete /ai/assistants/tests/{test_id}">client.ai.assistants.tests.<a href="./src/resources/ai/assistants/tests/tests.ts">delete</a>(testID) -> unknown</code>

#### TestSuites

Types:

- <code><a href="./src/resources/ai/assistants/tests/test-suites/test-suites.ts">TestSuiteListResponse</a></code>

Methods:

- <code title="get /ai/assistants/tests/test-suites">client.ai.assistants.tests.testSuites.<a href="./src/resources/ai/assistants/tests/test-suites/test-suites.ts">list</a>() -> TestSuiteListResponse</code>

##### Runs

Types:

- <code><a href="./src/resources/ai/assistants/tests/test-suites/runs.ts">Meta</a></code>
- <code><a href="./src/resources/ai/assistants/tests/test-suites/runs.ts">PaginatedTestRunList</a></code>
- <code><a href="./src/resources/ai/assistants/tests/test-suites/runs.ts">RunTriggerResponse</a></code>

Methods:

- <code title="get /ai/assistants/tests/test-suites/{suite_name}/runs">client.ai.assistants.tests.testSuites.runs.<a href="./src/resources/ai/assistants/tests/test-suites/runs.ts">list</a>(suiteName, { ...params }) -> PaginatedTestRunList</code>
- <code title="post /ai/assistants/tests/test-suites/{suite_name}/runs">client.ai.assistants.tests.testSuites.runs.<a href="./src/resources/ai/assistants/tests/test-suites/runs.ts">trigger</a>(suiteName, { ...params }) -> RunTriggerResponse</code>

#### Runs

Types:

- <code><a href="./src/resources/ai/assistants/tests/runs.ts">TestRunResponse</a></code>
- <code><a href="./src/resources/ai/assistants/tests/runs.ts">TestStatus</a></code>

Methods:

- <code title="get /ai/assistants/tests/{test_id}/runs/{run_id}">client.ai.assistants.tests.runs.<a href="./src/resources/ai/assistants/tests/runs.ts">retrieve</a>(runID, { ...params }) -> TestRunResponse</code>
- <code title="get /ai/assistants/tests/{test_id}/runs">client.ai.assistants.tests.runs.<a href="./src/resources/ai/assistants/tests/runs.ts">list</a>(testID, { ...params }) -> PaginatedTestRunList</code>
- <code title="post /ai/assistants/tests/{test_id}/runs">client.ai.assistants.tests.runs.<a href="./src/resources/ai/assistants/tests/runs.ts">trigger</a>(testID, { ...params }) -> TestRunResponse</code>

### CanaryDeploys

Types:

- <code><a href="./src/resources/ai/assistants/canary-deploys.ts">CanaryDeploy</a></code>
- <code><a href="./src/resources/ai/assistants/canary-deploys.ts">CanaryDeployResponse</a></code>
- <code><a href="./src/resources/ai/assistants/canary-deploys.ts">VersionConfig</a></code>

Methods:

- <code title="post /ai/assistants/{assistant_id}/canary-deploys">client.ai.assistants.canaryDeploys.<a href="./src/resources/ai/assistants/canary-deploys.ts">create</a>(assistantID, { ...params }) -> CanaryDeployResponse</code>
- <code title="get /ai/assistants/{assistant_id}/canary-deploys">client.ai.assistants.canaryDeploys.<a href="./src/resources/ai/assistants/canary-deploys.ts">retrieve</a>(assistantID) -> CanaryDeployResponse</code>
- <code title="put /ai/assistants/{assistant_id}/canary-deploys">client.ai.assistants.canaryDeploys.<a href="./src/resources/ai/assistants/canary-deploys.ts">update</a>(assistantID, { ...params }) -> CanaryDeployResponse</code>
- <code title="delete /ai/assistants/{assistant_id}/canary-deploys">client.ai.assistants.canaryDeploys.<a href="./src/resources/ai/assistants/canary-deploys.ts">delete</a>(assistantID) -> void</code>

### ScheduledEvents

Types:

- <code><a href="./src/resources/ai/assistants/scheduled-events.ts">ConversationChannelType</a></code>
- <code><a href="./src/resources/ai/assistants/scheduled-events.ts">EventStatus</a></code>
- <code><a href="./src/resources/ai/assistants/scheduled-events.ts">ScheduledEventResponse</a></code>
- <code><a href="./src/resources/ai/assistants/scheduled-events.ts">ScheduledPhoneCallEventResponse</a></code>
- <code><a href="./src/resources/ai/assistants/scheduled-events.ts">ScheduledSMSEventResponse</a></code>
- <code><a href="./src/resources/ai/assistants/scheduled-events.ts">ScheduledEventListResponse</a></code>
- <code><a href="./src/resources/ai/assistants/scheduled-events.ts">ScheduledEventDeleteResponse</a></code>

Methods:

- <code title="post /ai/assistants/{assistant_id}/scheduled_events">client.ai.assistants.scheduledEvents.<a href="./src/resources/ai/assistants/scheduled-events.ts">create</a>(assistantID, { ...params }) -> ScheduledEventResponse</code>
- <code title="get /ai/assistants/{assistant_id}/scheduled_events/{event_id}">client.ai.assistants.scheduledEvents.<a href="./src/resources/ai/assistants/scheduled-events.ts">retrieve</a>(eventID, { ...params }) -> ScheduledEventResponse</code>
- <code title="get /ai/assistants/{assistant_id}/scheduled_events">client.ai.assistants.scheduledEvents.<a href="./src/resources/ai/assistants/scheduled-events.ts">list</a>(assistantID, { ...params }) -> ScheduledEventListResponse</code>
- <code title="delete /ai/assistants/{assistant_id}/scheduled_events/{event_id}">client.ai.assistants.scheduledEvents.<a href="./src/resources/ai/assistants/scheduled-events.ts">delete</a>(eventID, { ...params }) -> unknown</code>

### Tools

Types:

- <code><a href="./src/resources/ai/assistants/tools.ts">ToolTestResponse</a></code>

Methods:

- <code title="post /ai/assistants/{assistant_id}/tools/{tool_id}/test">client.ai.assistants.tools.<a href="./src/resources/ai/assistants/tools.ts">test</a>(toolID, { ...params }) -> ToolTestResponse</code>

### Versions

Types:

- <code><a href="./src/resources/ai/assistants/versions.ts">UpdateAssistant</a></code>
- <code><a href="./src/resources/ai/assistants/versions.ts">VersionRetrieveResponse</a></code>
- <code><a href="./src/resources/ai/assistants/versions.ts">VersionUpdateResponse</a></code>
- <code><a href="./src/resources/ai/assistants/versions.ts">VersionPromoteResponse</a></code>

Methods:

- <code title="get /ai/assistants/{assistant_id}/versions/{version_id}">client.ai.assistants.versions.<a href="./src/resources/ai/assistants/versions.ts">retrieve</a>(versionID, { ...params }) -> VersionRetrieveResponse</code>
- <code title="post /ai/assistants/{assistant_id}/versions/{version_id}">client.ai.assistants.versions.<a href="./src/resources/ai/assistants/versions.ts">update</a>(versionID, { ...params }) -> VersionUpdateResponse</code>
- <code title="get /ai/assistants/{assistant_id}/versions">client.ai.assistants.versions.<a href="./src/resources/ai/assistants/versions.ts">list</a>(assistantID) -> AssistantsList</code>
- <code title="delete /ai/assistants/{assistant_id}/versions/{version_id}">client.ai.assistants.versions.<a href="./src/resources/ai/assistants/versions.ts">delete</a>(versionID, { ...params }) -> void</code>
- <code title="post /ai/assistants/{assistant_id}/versions/{version_id}/promote">client.ai.assistants.versions.<a href="./src/resources/ai/assistants/versions.ts">promote</a>(versionID, { ...params }) -> VersionPromoteResponse</code>

## Audio

Types:

- <code><a href="./src/resources/ai/audio.ts">AudioTranscribeResponse</a></code>

Methods:

- <code title="post /ai/audio/transcriptions">client.ai.audio.<a href="./src/resources/ai/audio.ts">transcribe</a>({ ...params }) -> AudioTranscribeResponse</code>

## Chat

Types:

- <code><a href="./src/resources/ai/chat.ts">BucketIDs</a></code>
- <code><a href="./src/resources/ai/chat.ts">ChatCreateCompletionResponse</a></code>

Methods:

- <code title="post /ai/chat/completions">client.ai.chat.<a href="./src/resources/ai/chat.ts">createCompletion</a>({ ...params }) -> unknown</code>

## Clusters

Types:

- <code><a href="./src/resources/ai/clusters.ts">RecursiveCluster</a></code>
- <code><a href="./src/resources/ai/clusters.ts">ClusterRetrieveResponse</a></code>
- <code><a href="./src/resources/ai/clusters.ts">ClusterListResponse</a></code>
- <code><a href="./src/resources/ai/clusters.ts">ClusterComputeResponse</a></code>
- <code><a href="./src/resources/ai/clusters.ts">ClusterFetchGraphResponse</a></code>

Methods:

- <code title="get /ai/clusters/{task_id}">client.ai.clusters.<a href="./src/resources/ai/clusters.ts">retrieve</a>(taskID, { ...params }) -> ClusterRetrieveResponse</code>
- <code title="get /ai/clusters">client.ai.clusters.<a href="./src/resources/ai/clusters.ts">list</a>({ ...params }) -> ClusterListResponse</code>
- <code title="delete /ai/clusters/{task_id}">client.ai.clusters.<a href="./src/resources/ai/clusters.ts">delete</a>(taskID) -> void</code>
- <code title="post /ai/clusters">client.ai.clusters.<a href="./src/resources/ai/clusters.ts">compute</a>({ ...params }) -> ClusterComputeResponse</code>
- <code title="get /ai/clusters/{task_id}/graph">client.ai.clusters.<a href="./src/resources/ai/clusters.ts">fetchGraph</a>(taskID, { ...params }) -> unknown</code>

## Conversations

Types:

- <code><a href="./src/resources/ai/conversations/conversations.ts">Conversation</a></code>
- <code><a href="./src/resources/ai/conversations/conversations.ts">ConversationRetrieveResponse</a></code>
- <code><a href="./src/resources/ai/conversations/conversations.ts">ConversationUpdateResponse</a></code>
- <code><a href="./src/resources/ai/conversations/conversations.ts">ConversationListResponse</a></code>
- <code><a href="./src/resources/ai/conversations/conversations.ts">ConversationAddMessageResponse</a></code>
- <code><a href="./src/resources/ai/conversations/conversations.ts">ConversationRetrieveConversationsInsightsResponse</a></code>

Methods:

- <code title="post /ai/conversations">client.ai.conversations.<a href="./src/resources/ai/conversations/conversations.ts">create</a>({ ...params }) -> Conversation</code>
- <code title="get /ai/conversations/{conversation_id}">client.ai.conversations.<a href="./src/resources/ai/conversations/conversations.ts">retrieve</a>(conversationID) -> ConversationRetrieveResponse</code>
- <code title="put /ai/conversations/{conversation_id}">client.ai.conversations.<a href="./src/resources/ai/conversations/conversations.ts">update</a>(conversationID, { ...params }) -> ConversationUpdateResponse</code>
- <code title="get /ai/conversations">client.ai.conversations.<a href="./src/resources/ai/conversations/conversations.ts">list</a>({ ...params }) -> ConversationListResponse</code>
- <code title="delete /ai/conversations/{conversation_id}">client.ai.conversations.<a href="./src/resources/ai/conversations/conversations.ts">delete</a>(conversationID) -> void</code>
- <code title="post /ai/conversations/{conversation_id}/message">client.ai.conversations.<a href="./src/resources/ai/conversations/conversations.ts">addMessage</a>(conversationID, { ...params }) -> unknown</code>
- <code title="get /ai/conversations/{conversation_id}/conversations-insights">client.ai.conversations.<a href="./src/resources/ai/conversations/conversations.ts">retrieveConversationsInsights</a>(conversationID) -> ConversationRetrieveConversationsInsightsResponse</code>

### InsightGroups

Types:

- <code><a href="./src/resources/ai/conversations/insight-groups/insight-groups.ts">InsightTemplateGroup</a></code>
- <code><a href="./src/resources/ai/conversations/insight-groups/insight-groups.ts">InsightTemplateGroupDetail</a></code>
- <code><a href="./src/resources/ai/conversations/insight-groups/insight-groups.ts">InsightGroupDeleteResponse</a></code>
- <code><a href="./src/resources/ai/conversations/insight-groups/insight-groups.ts">InsightGroupRetrieveInsightGroupsResponse</a></code>

Methods:

- <code title="get /ai/conversations/insight-groups/{group_id}">client.ai.conversations.insightGroups.<a href="./src/resources/ai/conversations/insight-groups/insight-groups.ts">retrieve</a>(groupID) -> InsightTemplateGroupDetail</code>
- <code title="put /ai/conversations/insight-groups/{group_id}">client.ai.conversations.insightGroups.<a href="./src/resources/ai/conversations/insight-groups/insight-groups.ts">update</a>(groupID, { ...params }) -> InsightTemplateGroupDetail</code>
- <code title="delete /ai/conversations/insight-groups/{group_id}">client.ai.conversations.insightGroups.<a href="./src/resources/ai/conversations/insight-groups/insight-groups.ts">delete</a>(groupID) -> unknown</code>
- <code title="post /ai/conversations/insight-groups">client.ai.conversations.insightGroups.<a href="./src/resources/ai/conversations/insight-groups/insight-groups.ts">insightGroups</a>({ ...params }) -> InsightTemplateGroupDetail</code>
- <code title="get /ai/conversations/insight-groups">client.ai.conversations.insightGroups.<a href="./src/resources/ai/conversations/insight-groups/insight-groups.ts">retrieveInsightGroups</a>({ ...params }) -> InsightGroupRetrieveInsightGroupsResponse</code>

#### Insights

Types:

- <code><a href="./src/resources/ai/conversations/insight-groups/insights.ts">InsightAssignResponse</a></code>
- <code><a href="./src/resources/ai/conversations/insight-groups/insights.ts">InsightDeleteUnassignResponse</a></code>

Methods:

- <code title="post /ai/conversations/insight-groups/{group_id}/insights/{insight_id}/assign">client.ai.conversations.insightGroups.insights.<a href="./src/resources/ai/conversations/insight-groups/insights.ts">assign</a>(insightID, { ...params }) -> unknown</code>
- <code title="delete /ai/conversations/insight-groups/{group_id}/insights/{insight_id}/unassign">client.ai.conversations.insightGroups.insights.<a href="./src/resources/ai/conversations/insight-groups/insights.ts">deleteUnassign</a>(insightID, { ...params }) -> unknown</code>

### Insights

Types:

- <code><a href="./src/resources/ai/conversations/insights.ts">InsightTemplate</a></code>
- <code><a href="./src/resources/ai/conversations/insights.ts">InsightTemplateDetail</a></code>
- <code><a href="./src/resources/ai/conversations/insights.ts">InsightListResponse</a></code>
- <code><a href="./src/resources/ai/conversations/insights.ts">InsightDeleteResponse</a></code>

Methods:

- <code title="post /ai/conversations/insights">client.ai.conversations.insights.<a href="./src/resources/ai/conversations/insights.ts">create</a>({ ...params }) -> InsightTemplateDetail</code>
- <code title="get /ai/conversations/insights/{insight_id}">client.ai.conversations.insights.<a href="./src/resources/ai/conversations/insights.ts">retrieve</a>(insightID) -> InsightTemplateDetail</code>
- <code title="put /ai/conversations/insights/{insight_id}">client.ai.conversations.insights.<a href="./src/resources/ai/conversations/insights.ts">update</a>(insightID, { ...params }) -> InsightTemplateDetail</code>
- <code title="get /ai/conversations/insights">client.ai.conversations.insights.<a href="./src/resources/ai/conversations/insights.ts">list</a>({ ...params }) -> InsightListResponse</code>
- <code title="delete /ai/conversations/insights/{insight_id}">client.ai.conversations.insights.<a href="./src/resources/ai/conversations/insights.ts">delete</a>(insightID) -> unknown</code>

### Messages

Types:

- <code><a href="./src/resources/ai/conversations/messages.ts">MessageListResponse</a></code>

Methods:

- <code title="get /ai/conversations/{conversation_id}/messages">client.ai.conversations.messages.<a href="./src/resources/ai/conversations/messages.ts">list</a>(conversationID) -> MessageListResponse</code>

## Embeddings

Types:

- <code><a href="./src/resources/ai/embeddings/embeddings.ts">BackgroundTaskStatus</a></code>
- <code><a href="./src/resources/ai/embeddings/embeddings.ts">EmbeddingResponse</a></code>
- <code><a href="./src/resources/ai/embeddings/embeddings.ts">EmbeddingRetrieveResponse</a></code>
- <code><a href="./src/resources/ai/embeddings/embeddings.ts">EmbeddingListResponse</a></code>
- <code><a href="./src/resources/ai/embeddings/embeddings.ts">EmbeddingSimilaritySearchResponse</a></code>

Methods:

- <code title="post /ai/embeddings">client.ai.embeddings.<a href="./src/resources/ai/embeddings/embeddings.ts">create</a>({ ...params }) -> EmbeddingResponse</code>
- <code title="get /ai/embeddings/{task_id}">client.ai.embeddings.<a href="./src/resources/ai/embeddings/embeddings.ts">retrieve</a>(taskID) -> EmbeddingRetrieveResponse</code>
- <code title="get /ai/embeddings">client.ai.embeddings.<a href="./src/resources/ai/embeddings/embeddings.ts">list</a>({ ...params }) -> EmbeddingListResponse</code>
- <code title="post /ai/embeddings/similarity-search">client.ai.embeddings.<a href="./src/resources/ai/embeddings/embeddings.ts">similaritySearch</a>({ ...params }) -> EmbeddingSimilaritySearchResponse</code>
- <code title="post /ai/embeddings/url">client.ai.embeddings.<a href="./src/resources/ai/embeddings/embeddings.ts">url</a>({ ...params }) -> EmbeddingResponse</code>

### Buckets

Types:

- <code><a href="./src/resources/ai/embeddings/buckets.ts">BucketRetrieveResponse</a></code>
- <code><a href="./src/resources/ai/embeddings/buckets.ts">BucketListResponse</a></code>

Methods:

- <code title="get /ai/embeddings/buckets/{bucket_name}">client.ai.embeddings.buckets.<a href="./src/resources/ai/embeddings/buckets.ts">retrieve</a>(bucketName) -> BucketRetrieveResponse</code>
- <code title="get /ai/embeddings/buckets">client.ai.embeddings.buckets.<a href="./src/resources/ai/embeddings/buckets.ts">list</a>() -> BucketListResponse</code>
- <code title="delete /ai/embeddings/buckets/{bucket_name}">client.ai.embeddings.buckets.<a href="./src/resources/ai/embeddings/buckets.ts">delete</a>(bucketName) -> void</code>

## FineTuning

### Jobs

Types:

- <code><a href="./src/resources/ai/fine-tuning/jobs.ts">FineTuningJob</a></code>
- <code><a href="./src/resources/ai/fine-tuning/jobs.ts">JobListResponse</a></code>

Methods:

- <code title="post /ai/fine_tuning/jobs">client.ai.fineTuning.jobs.<a href="./src/resources/ai/fine-tuning/jobs.ts">create</a>({ ...params }) -> FineTuningJob</code>
- <code title="get /ai/fine_tuning/jobs/{job_id}">client.ai.fineTuning.jobs.<a href="./src/resources/ai/fine-tuning/jobs.ts">retrieve</a>(jobID) -> FineTuningJob</code>
- <code title="get /ai/fine_tuning/jobs">client.ai.fineTuning.jobs.<a href="./src/resources/ai/fine-tuning/jobs.ts">list</a>() -> JobListResponse</code>
- <code title="post /ai/fine_tuning/jobs/{job_id}/cancel">client.ai.fineTuning.jobs.<a href="./src/resources/ai/fine-tuning/jobs.ts">cancel</a>(jobID) -> FineTuningJob</code>

# AuditEvents

Types:

- <code><a href="./src/resources/audit-events.ts">AuditEventListResponse</a></code>

Methods:

- <code title="get /audit_events">client.auditEvents.<a href="./src/resources/audit-events.ts">list</a>({ ...params }) -> AuditEventListResponse</code>

# AuthenticationProviders

Types:

- <code><a href="./src/resources/authentication-providers.ts">AuthenticationProvider</a></code>
- <code><a href="./src/resources/authentication-providers.ts">PaginationMeta</a></code>
- <code><a href="./src/resources/authentication-providers.ts">Settings</a></code>
- <code><a href="./src/resources/authentication-providers.ts">AuthenticationProviderCreateResponse</a></code>
- <code><a href="./src/resources/authentication-providers.ts">AuthenticationProviderRetrieveResponse</a></code>
- <code><a href="./src/resources/authentication-providers.ts">AuthenticationProviderUpdateResponse</a></code>
- <code><a href="./src/resources/authentication-providers.ts">AuthenticationProviderListResponse</a></code>
- <code><a href="./src/resources/authentication-providers.ts">AuthenticationProviderDeleteResponse</a></code>

Methods:

- <code title="post /authentication_providers">client.authenticationProviders.<a href="./src/resources/authentication-providers.ts">create</a>({ ...params }) -> AuthenticationProviderCreateResponse</code>
- <code title="get /authentication_providers/{id}">client.authenticationProviders.<a href="./src/resources/authentication-providers.ts">retrieve</a>(id) -> AuthenticationProviderRetrieveResponse</code>
- <code title="patch /authentication_providers/{id}">client.authenticationProviders.<a href="./src/resources/authentication-providers.ts">update</a>(id, { ...params }) -> AuthenticationProviderUpdateResponse</code>
- <code title="get /authentication_providers">client.authenticationProviders.<a href="./src/resources/authentication-providers.ts">list</a>({ ...params }) -> AuthenticationProviderListResponse</code>
- <code title="delete /authentication_providers/{id}">client.authenticationProviders.<a href="./src/resources/authentication-providers.ts">delete</a>(id) -> AuthenticationProviderDeleteResponse</code>

# AvailablePhoneNumberBlocks

Types:

- <code><a href="./src/resources/available-phone-number-blocks.ts">AvailablePhoneNumberBlockListResponse</a></code>

Methods:

- <code title="get /available_phone_number_blocks">client.availablePhoneNumberBlocks.<a href="./src/resources/available-phone-number-blocks.ts">list</a>({ ...params }) -> AvailablePhoneNumberBlockListResponse</code>

# AvailablePhoneNumbers

Types:

- <code><a href="./src/resources/available-phone-numbers.ts">AvailablePhoneNumberListResponse</a></code>

Methods:

- <code title="get /available_phone_numbers">client.availablePhoneNumbers.<a href="./src/resources/available-phone-numbers.ts">list</a>({ ...params }) -> AvailablePhoneNumberListResponse</code>

# Balance

Types:

- <code><a href="./src/resources/balance.ts">BalanceRetrieveResponse</a></code>

Methods:

- <code title="get /balance">client.balance.<a href="./src/resources/balance.ts">retrieve</a>() -> BalanceRetrieveResponse</code>

# BillingGroups

Types:

- <code><a href="./src/resources/billing-groups.ts">BillingGroup</a></code>
- <code><a href="./src/resources/billing-groups.ts">BillingGroupCreateResponse</a></code>
- <code><a href="./src/resources/billing-groups.ts">BillingGroupRetrieveResponse</a></code>
- <code><a href="./src/resources/billing-groups.ts">BillingGroupUpdateResponse</a></code>
- <code><a href="./src/resources/billing-groups.ts">BillingGroupListResponse</a></code>
- <code><a href="./src/resources/billing-groups.ts">BillingGroupDeleteResponse</a></code>

Methods:

- <code title="post /billing_groups">client.billingGroups.<a href="./src/resources/billing-groups.ts">create</a>({ ...params }) -> BillingGroupCreateResponse</code>
- <code title="get /billing_groups/{id}">client.billingGroups.<a href="./src/resources/billing-groups.ts">retrieve</a>(id) -> BillingGroupRetrieveResponse</code>
- <code title="patch /billing_groups/{id}">client.billingGroups.<a href="./src/resources/billing-groups.ts">update</a>(id, { ...params }) -> BillingGroupUpdateResponse</code>
- <code title="get /billing_groups">client.billingGroups.<a href="./src/resources/billing-groups.ts">list</a>({ ...params }) -> BillingGroupListResponse</code>
- <code title="delete /billing_groups/{id}">client.billingGroups.<a href="./src/resources/billing-groups.ts">delete</a>(id) -> BillingGroupDeleteResponse</code>

# Brand

Types:

- <code><a href="./src/resources/brand/brand.ts">AltBusinessIDType</a></code>
- <code><a href="./src/resources/brand/brand.ts">BrandIdentityStatus</a></code>
- <code><a href="./src/resources/brand/brand.ts">EntityType</a></code>
- <code><a href="./src/resources/brand/brand.ts">StockExchange</a></code>
- <code><a href="./src/resources/brand/brand.ts">TelnyxBrand</a></code>
- <code><a href="./src/resources/brand/brand.ts">Vertical</a></code>
- <code><a href="./src/resources/brand/brand.ts">BrandRetrieveResponse</a></code>
- <code><a href="./src/resources/brand/brand.ts">BrandListResponse</a></code>
- <code><a href="./src/resources/brand/brand.ts">BrandDeleteResponse</a></code>
- <code><a href="./src/resources/brand/brand.ts">BrandGetFeedbackResponse</a></code>
- <code><a href="./src/resources/brand/brand.ts">BrandRevetResponse</a></code>

Methods:

- <code title="post /brand">client.brand.<a href="./src/resources/brand/brand.ts">create</a>({ ...params }) -> TelnyxBrand</code>
- <code title="get /brand/{brandId}">client.brand.<a href="./src/resources/brand/brand.ts">retrieve</a>(brandID) -> BrandRetrieveResponse</code>
- <code title="put /brand/{brandId}">client.brand.<a href="./src/resources/brand/brand.ts">update</a>(brandID, { ...params }) -> TelnyxBrand</code>
- <code title="get /brand">client.brand.<a href="./src/resources/brand/brand.ts">list</a>({ ...params }) -> BrandListResponse</code>
- <code title="delete /brand/{brandId}">client.brand.<a href="./src/resources/brand/brand.ts">delete</a>(brandID) -> unknown</code>
- <code title="get /brand/feedback/{brandId}">client.brand.<a href="./src/resources/brand/brand.ts">getFeedback</a>(brandID) -> BrandGetFeedbackResponse</code>
- <code title="post /brand/{brandId}/2faEmail">client.brand.<a href="./src/resources/brand/brand.ts">resend2faEmail</a>(brandID) -> void</code>
- <code title="put /brand/{brandId}/revet">client.brand.<a href="./src/resources/brand/brand.ts">revet</a>(brandID) -> unknown</code>

## ExternalVetting

Types:

- <code><a href="./src/resources/brand/external-vetting.ts">ExternalVettingListResponse</a></code>
- <code><a href="./src/resources/brand/external-vetting.ts">ExternalVettingImportResponse</a></code>
- <code><a href="./src/resources/brand/external-vetting.ts">ExternalVettingOrderResponse</a></code>

Methods:

- <code title="get /brand/{brandId}/externalVetting">client.brand.externalVetting.<a href="./src/resources/brand/external-vetting.ts">list</a>(brandID) -> unknown</code>
- <code title="put /brand/{brandId}/externalVetting">client.brand.externalVetting.<a href="./src/resources/brand/external-vetting.ts">import</a>(brandID, { ...params }) -> ExternalVettingImportResponse</code>
- <code title="post /brand/{brandId}/externalVetting">client.brand.externalVetting.<a href="./src/resources/brand/external-vetting.ts">order</a>(brandID, { ...params }) -> unknown</code>

# BulkSimCardActions

Types:

- <code><a href="./src/resources/bulk-sim-card-actions.ts">BulkSimCardActionRetrieveResponse</a></code>
- <code><a href="./src/resources/bulk-sim-card-actions.ts">BulkSimCardActionListResponse</a></code>

Methods:

- <code title="get /bulk_sim_card_actions/{id}">client.bulkSimCardActions.<a href="./src/resources/bulk-sim-card-actions.ts">retrieve</a>(id) -> BulkSimCardActionRetrieveResponse</code>
- <code title="get /bulk_sim_card_actions">client.bulkSimCardActions.<a href="./src/resources/bulk-sim-card-actions.ts">list</a>({ ...params }) -> BulkSimCardActionListResponse</code>

# BundlePricing

## BillingBundles

Types:

- <code><a href="./src/resources/bundle-pricing/billing-bundles.ts">BillingBundleSummary</a></code>
- <code><a href="./src/resources/bundle-pricing/billing-bundles.ts">PaginationResponse</a></code>
- <code><a href="./src/resources/bundle-pricing/billing-bundles.ts">BillingBundleRetrieveResponse</a></code>
- <code><a href="./src/resources/bundle-pricing/billing-bundles.ts">BillingBundleListResponse</a></code>

Methods:

- <code title="get /bundle_pricing/billing_bundles/{bundle_id}">client.bundlePricing.billingBundles.<a href="./src/resources/bundle-pricing/billing-bundles.ts">retrieve</a>(bundleID, { ...params }) -> BillingBundleRetrieveResponse</code>
- <code title="get /bundle_pricing/billing_bundles">client.bundlePricing.billingBundles.<a href="./src/resources/bundle-pricing/billing-bundles.ts">list</a>({ ...params }) -> BillingBundleListResponse</code>

## UserBundles

Types:

- <code><a href="./src/resources/bundle-pricing/user-bundles.ts">UserBundle</a></code>
- <code><a href="./src/resources/bundle-pricing/user-bundles.ts">UserBundleResource</a></code>
- <code><a href="./src/resources/bundle-pricing/user-bundles.ts">UserBundleCreateResponse</a></code>
- <code><a href="./src/resources/bundle-pricing/user-bundles.ts">UserBundleRetrieveResponse</a></code>
- <code><a href="./src/resources/bundle-pricing/user-bundles.ts">UserBundleListResponse</a></code>
- <code><a href="./src/resources/bundle-pricing/user-bundles.ts">UserBundleDeactivateResponse</a></code>
- <code><a href="./src/resources/bundle-pricing/user-bundles.ts">UserBundleListResourcesResponse</a></code>
- <code><a href="./src/resources/bundle-pricing/user-bundles.ts">UserBundleListUnusedResponse</a></code>

Methods:

- <code title="post /bundle_pricing/user_bundles/bulk">client.bundlePricing.userBundles.<a href="./src/resources/bundle-pricing/user-bundles.ts">create</a>({ ...params }) -> UserBundleCreateResponse</code>
- <code title="get /bundle_pricing/user_bundles/{user_bundle_id}">client.bundlePricing.userBundles.<a href="./src/resources/bundle-pricing/user-bundles.ts">retrieve</a>(userBundleID, { ...params }) -> UserBundleRetrieveResponse</code>
- <code title="get /bundle_pricing/user_bundles">client.bundlePricing.userBundles.<a href="./src/resources/bundle-pricing/user-bundles.ts">list</a>({ ...params }) -> UserBundleListResponse</code>
- <code title="delete /bundle_pricing/user_bundles/{user_bundle_id}">client.bundlePricing.userBundles.<a href="./src/resources/bundle-pricing/user-bundles.ts">deactivate</a>(userBundleID, { ...params }) -> UserBundleDeactivateResponse</code>
- <code title="get /bundle_pricing/user_bundles/{user_bundle_id}/resources">client.bundlePricing.userBundles.<a href="./src/resources/bundle-pricing/user-bundles.ts">listResources</a>(userBundleID, { ...params }) -> UserBundleListResourcesResponse</code>
- <code title="get /bundle_pricing/user_bundles/unused">client.bundlePricing.userBundles.<a href="./src/resources/bundle-pricing/user-bundles.ts">listUnused</a>({ ...params }) -> UserBundleListUnusedResponse</code>

# CallControlApplications

Types:

- <code><a href="./src/resources/call-control-applications.ts">CallControlApplication</a></code>
- <code><a href="./src/resources/call-control-applications.ts">CallControlApplicationInbound</a></code>
- <code><a href="./src/resources/call-control-applications.ts">CallControlApplicationOutbound</a></code>
- <code><a href="./src/resources/call-control-applications.ts">CallControlApplicationCreateResponse</a></code>
- <code><a href="./src/resources/call-control-applications.ts">CallControlApplicationRetrieveResponse</a></code>
- <code><a href="./src/resources/call-control-applications.ts">CallControlApplicationUpdateResponse</a></code>
- <code><a href="./src/resources/call-control-applications.ts">CallControlApplicationListResponse</a></code>
- <code><a href="./src/resources/call-control-applications.ts">CallControlApplicationDeleteResponse</a></code>

Methods:

- <code title="post /call_control_applications">client.callControlApplications.<a href="./src/resources/call-control-applications.ts">create</a>({ ...params }) -> CallControlApplicationCreateResponse</code>
- <code title="get /call_control_applications/{id}">client.callControlApplications.<a href="./src/resources/call-control-applications.ts">retrieve</a>(id) -> CallControlApplicationRetrieveResponse</code>
- <code title="patch /call_control_applications/{id}">client.callControlApplications.<a href="./src/resources/call-control-applications.ts">update</a>(id, { ...params }) -> CallControlApplicationUpdateResponse</code>
- <code title="get /call_control_applications">client.callControlApplications.<a href="./src/resources/call-control-applications.ts">list</a>({ ...params }) -> CallControlApplicationListResponse</code>
- <code title="delete /call_control_applications/{id}">client.callControlApplications.<a href="./src/resources/call-control-applications.ts">delete</a>(id) -> CallControlApplicationDeleteResponse</code>

# CallEvents

Types:

- <code><a href="./src/resources/call-events.ts">CallEventListResponse</a></code>

Methods:

- <code title="get /call_events">client.callEvents.<a href="./src/resources/call-events.ts">list</a>({ ...params }) -> CallEventListResponse</code>

# Calls

Types:

- <code><a href="./src/resources/calls/calls.ts">CustomSipHeader</a></code>
- <code><a href="./src/resources/calls/calls.ts">DialogflowConfig</a></code>
- <code><a href="./src/resources/calls/calls.ts">SipHeader</a></code>
- <code><a href="./src/resources/calls/calls.ts">SoundModifications</a></code>
- <code><a href="./src/resources/calls/calls.ts">StreamBidirectionalCodec</a></code>
- <code><a href="./src/resources/calls/calls.ts">StreamBidirectionalMode</a></code>
- <code><a href="./src/resources/calls/calls.ts">StreamBidirectionalTargetLegs</a></code>
- <code><a href="./src/resources/calls/calls.ts">StreamCodec</a></code>
- <code><a href="./src/resources/calls/calls.ts">CallDialResponse</a></code>
- <code><a href="./src/resources/calls/calls.ts">CallRetrieveStatusResponse</a></code>

Methods:

- <code title="post /calls">client.calls.<a href="./src/resources/calls/calls.ts">dial</a>({ ...params }) -> CallDialResponse</code>
- <code title="get /calls/{call_control_id}">client.calls.<a href="./src/resources/calls/calls.ts">retrieveStatus</a>(callControlID) -> CallRetrieveStatusResponse</code>

## Actions

Types:

- <code><a href="./src/resources/calls/actions.ts">AwsVoiceSettings</a></code>
- <code><a href="./src/resources/calls/actions.ts">CallControlCommandResult</a></code>
- <code><a href="./src/resources/calls/actions.ts">ElevenLabsVoiceSettings</a></code>
- <code><a href="./src/resources/calls/actions.ts">GoogleTranscriptionLanguage</a></code>
- <code><a href="./src/resources/calls/actions.ts">InterruptionSettings</a></code>
- <code><a href="./src/resources/calls/actions.ts">Loopcount</a></code>
- <code><a href="./src/resources/calls/actions.ts">StopRecordingRequest</a></code>
- <code><a href="./src/resources/calls/actions.ts">TelnyxVoiceSettings</a></code>
- <code><a href="./src/resources/calls/actions.ts">TranscriptionConfig</a></code>
- <code><a href="./src/resources/calls/actions.ts">TranscriptionEngineAConfig</a></code>
- <code><a href="./src/resources/calls/actions.ts">TranscriptionEngineBConfig</a></code>
- <code><a href="./src/resources/calls/actions.ts">TranscriptionStartRequest</a></code>
- <code><a href="./src/resources/calls/actions.ts">ActionAnswerResponse</a></code>
- <code><a href="./src/resources/calls/actions.ts">ActionBridgeResponse</a></code>
- <code><a href="./src/resources/calls/actions.ts">ActionEnqueueResponse</a></code>
- <code><a href="./src/resources/calls/actions.ts">ActionGatherResponse</a></code>
- <code><a href="./src/resources/calls/actions.ts">ActionGatherUsingAIResponse</a></code>
- <code><a href="./src/resources/calls/actions.ts">ActionGatherUsingAudioResponse</a></code>
- <code><a href="./src/resources/calls/actions.ts">ActionGatherUsingSpeakResponse</a></code>
- <code><a href="./src/resources/calls/actions.ts">ActionHangupResponse</a></code>
- <code><a href="./src/resources/calls/actions.ts">ActionLeaveQueueResponse</a></code>
- <code><a href="./src/resources/calls/actions.ts">ActionPauseRecordingResponse</a></code>
- <code><a href="./src/resources/calls/actions.ts">ActionReferResponse</a></code>
- <code><a href="./src/resources/calls/actions.ts">ActionRejectResponse</a></code>
- <code><a href="./src/resources/calls/actions.ts">ActionResumeRecordingResponse</a></code>
- <code><a href="./src/resources/calls/actions.ts">ActionSendDtmfResponse</a></code>
- <code><a href="./src/resources/calls/actions.ts">ActionSendSipInfoResponse</a></code>
- <code><a href="./src/resources/calls/actions.ts">ActionSpeakResponse</a></code>
- <code><a href="./src/resources/calls/actions.ts">ActionStartAIAssistantResponse</a></code>
- <code><a href="./src/resources/calls/actions.ts">ActionStartForkingResponse</a></code>
- <code><a href="./src/resources/calls/actions.ts">ActionStartNoiseSuppressionResponse</a></code>
- <code><a href="./src/resources/calls/actions.ts">ActionStartPlaybackResponse</a></code>
- <code><a href="./src/resources/calls/actions.ts">ActionStartRecordingResponse</a></code>
- <code><a href="./src/resources/calls/actions.ts">ActionStartSiprecResponse</a></code>
- <code><a href="./src/resources/calls/actions.ts">ActionStartStreamingResponse</a></code>
- <code><a href="./src/resources/calls/actions.ts">ActionStartTranscriptionResponse</a></code>
- <code><a href="./src/resources/calls/actions.ts">ActionStopAIAssistantResponse</a></code>
- <code><a href="./src/resources/calls/actions.ts">ActionStopForkingResponse</a></code>
- <code><a href="./src/resources/calls/actions.ts">ActionStopGatherResponse</a></code>
- <code><a href="./src/resources/calls/actions.ts">ActionStopNoiseSuppressionResponse</a></code>
- <code><a href="./src/resources/calls/actions.ts">ActionStopPlaybackResponse</a></code>
- <code><a href="./src/resources/calls/actions.ts">ActionStopRecordingResponse</a></code>
- <code><a href="./src/resources/calls/actions.ts">ActionStopSiprecResponse</a></code>
- <code><a href="./src/resources/calls/actions.ts">ActionStopStreamingResponse</a></code>
- <code><a href="./src/resources/calls/actions.ts">ActionStopTranscriptionResponse</a></code>
- <code><a href="./src/resources/calls/actions.ts">ActionSwitchSupervisorRoleResponse</a></code>
- <code><a href="./src/resources/calls/actions.ts">ActionTransferResponse</a></code>
- <code><a href="./src/resources/calls/actions.ts">ActionUpdateClientStateResponse</a></code>

Methods:

- <code title="post /calls/{call_control_id}/actions/answer">client.calls.actions.<a href="./src/resources/calls/actions.ts">answer</a>(callControlID, { ...params }) -> ActionAnswerResponse</code>
- <code title="post /calls/{call_control_id}/actions/bridge">client.calls.actions.<a href="./src/resources/calls/actions.ts">bridge</a>(callControlID, { ...params }) -> ActionBridgeResponse</code>
- <code title="post /calls/{call_control_id}/actions/enqueue">client.calls.actions.<a href="./src/resources/calls/actions.ts">enqueue</a>(callControlID, { ...params }) -> ActionEnqueueResponse</code>
- <code title="post /calls/{call_control_id}/actions/gather">client.calls.actions.<a href="./src/resources/calls/actions.ts">gather</a>(callControlID, { ...params }) -> ActionGatherResponse</code>
- <code title="post /calls/{call_control_id}/actions/gather_using_ai">client.calls.actions.<a href="./src/resources/calls/actions.ts">gatherUsingAI</a>(callControlID, { ...params }) -> ActionGatherUsingAIResponse</code>
- <code title="post /calls/{call_control_id}/actions/gather_using_audio">client.calls.actions.<a href="./src/resources/calls/actions.ts">gatherUsingAudio</a>(callControlID, { ...params }) -> ActionGatherUsingAudioResponse</code>
- <code title="post /calls/{call_control_id}/actions/gather_using_speak">client.calls.actions.<a href="./src/resources/calls/actions.ts">gatherUsingSpeak</a>(callControlID, { ...params }) -> ActionGatherUsingSpeakResponse</code>
- <code title="post /calls/{call_control_id}/actions/hangup">client.calls.actions.<a href="./src/resources/calls/actions.ts">hangup</a>(callControlID, { ...params }) -> ActionHangupResponse</code>
- <code title="post /calls/{call_control_id}/actions/leave_queue">client.calls.actions.<a href="./src/resources/calls/actions.ts">leaveQueue</a>(callControlID, { ...params }) -> ActionLeaveQueueResponse</code>
- <code title="post /calls/{call_control_id}/actions/record_pause">client.calls.actions.<a href="./src/resources/calls/actions.ts">pauseRecording</a>(callControlID, { ...params }) -> ActionPauseRecordingResponse</code>
- <code title="post /calls/{call_control_id}/actions/refer">client.calls.actions.<a href="./src/resources/calls/actions.ts">refer</a>(callControlID, { ...params }) -> ActionReferResponse</code>
- <code title="post /calls/{call_control_id}/actions/reject">client.calls.actions.<a href="./src/resources/calls/actions.ts">reject</a>(callControlID, { ...params }) -> ActionRejectResponse</code>
- <code title="post /calls/{call_control_id}/actions/record_resume">client.calls.actions.<a href="./src/resources/calls/actions.ts">resumeRecording</a>(callControlID, { ...params }) -> ActionResumeRecordingResponse</code>
- <code title="post /calls/{call_control_id}/actions/send_dtmf">client.calls.actions.<a href="./src/resources/calls/actions.ts">sendDtmf</a>(callControlID, { ...params }) -> ActionSendDtmfResponse</code>
- <code title="post /calls/{call_control_id}/actions/send_sip_info">client.calls.actions.<a href="./src/resources/calls/actions.ts">sendSipInfo</a>(callControlID, { ...params }) -> ActionSendSipInfoResponse</code>
- <code title="post /calls/{call_control_id}/actions/speak">client.calls.actions.<a href="./src/resources/calls/actions.ts">speak</a>(callControlID, { ...params }) -> ActionSpeakResponse</code>
- <code title="post /calls/{call_control_id}/actions/ai_assistant_start">client.calls.actions.<a href="./src/resources/calls/actions.ts">startAIAssistant</a>(callControlID, { ...params }) -> ActionStartAIAssistantResponse</code>
- <code title="post /calls/{call_control_id}/actions/fork_start">client.calls.actions.<a href="./src/resources/calls/actions.ts">startForking</a>(callControlID, { ...params }) -> ActionStartForkingResponse</code>
- <code title="post /calls/{call_control_id}/actions/suppression_start">client.calls.actions.<a href="./src/resources/calls/actions.ts">startNoiseSuppression</a>(callControlID, { ...params }) -> ActionStartNoiseSuppressionResponse</code>
- <code title="post /calls/{call_control_id}/actions/playback_start">client.calls.actions.<a href="./src/resources/calls/actions.ts">startPlayback</a>(callControlID, { ...params }) -> ActionStartPlaybackResponse</code>
- <code title="post /calls/{call_control_id}/actions/record_start">client.calls.actions.<a href="./src/resources/calls/actions.ts">startRecording</a>(callControlID, { ...params }) -> ActionStartRecordingResponse</code>
- <code title="post /calls/{call_control_id}/actions/siprec_start">client.calls.actions.<a href="./src/resources/calls/actions.ts">startSiprec</a>(callControlID, { ...params }) -> ActionStartSiprecResponse</code>
- <code title="post /calls/{call_control_id}/actions/streaming_start">client.calls.actions.<a href="./src/resources/calls/actions.ts">startStreaming</a>(callControlID, { ...params }) -> ActionStartStreamingResponse</code>
- <code title="post /calls/{call_control_id}/actions/transcription_start">client.calls.actions.<a href="./src/resources/calls/actions.ts">startTranscription</a>(callControlID, { ...params }) -> ActionStartTranscriptionResponse</code>
- <code title="post /calls/{call_control_id}/actions/ai_assistant_stop">client.calls.actions.<a href="./src/resources/calls/actions.ts">stopAIAssistant</a>(callControlID, { ...params }) -> ActionStopAIAssistantResponse</code>
- <code title="post /calls/{call_control_id}/actions/fork_stop">client.calls.actions.<a href="./src/resources/calls/actions.ts">stopForking</a>(callControlID, { ...params }) -> ActionStopForkingResponse</code>
- <code title="post /calls/{call_control_id}/actions/gather_stop">client.calls.actions.<a href="./src/resources/calls/actions.ts">stopGather</a>(callControlID, { ...params }) -> ActionStopGatherResponse</code>
- <code title="post /calls/{call_control_id}/actions/suppression_stop">client.calls.actions.<a href="./src/resources/calls/actions.ts">stopNoiseSuppression</a>(callControlID, { ...params }) -> ActionStopNoiseSuppressionResponse</code>
- <code title="post /calls/{call_control_id}/actions/playback_stop">client.calls.actions.<a href="./src/resources/calls/actions.ts">stopPlayback</a>(callControlID, { ...params }) -> ActionStopPlaybackResponse</code>
- <code title="post /calls/{call_control_id}/actions/record_stop">client.calls.actions.<a href="./src/resources/calls/actions.ts">stopRecording</a>(callControlID, { ...params }) -> ActionStopRecordingResponse</code>
- <code title="post /calls/{call_control_id}/actions/siprec_stop">client.calls.actions.<a href="./src/resources/calls/actions.ts">stopSiprec</a>(callControlID, { ...params }) -> ActionStopSiprecResponse</code>
- <code title="post /calls/{call_control_id}/actions/streaming_stop">client.calls.actions.<a href="./src/resources/calls/actions.ts">stopStreaming</a>(callControlID, { ...params }) -> ActionStopStreamingResponse</code>
- <code title="post /calls/{call_control_id}/actions/transcription_stop">client.calls.actions.<a href="./src/resources/calls/actions.ts">stopTranscription</a>(callControlID, { ...params }) -> ActionStopTranscriptionResponse</code>
- <code title="post /calls/{call_control_id}/actions/switch_supervisor_role">client.calls.actions.<a href="./src/resources/calls/actions.ts">switchSupervisorRole</a>(callControlID, { ...params }) -> ActionSwitchSupervisorRoleResponse</code>
- <code title="post /calls/{call_control_id}/actions/transfer">client.calls.actions.<a href="./src/resources/calls/actions.ts">transfer</a>(callControlID, { ...params }) -> ActionTransferResponse</code>
- <code title="put /calls/{call_control_id}/actions/client_state_update">client.calls.actions.<a href="./src/resources/calls/actions.ts">updateClientState</a>(callControlID, { ...params }) -> ActionUpdateClientStateResponse</code>

# Campaign

Types:

- <code><a href="./src/resources/campaign/campaign.ts">CampaignSharingStatus</a></code>
- <code><a href="./src/resources/campaign/campaign.ts">TelnyxCampaignCsp</a></code>
- <code><a href="./src/resources/campaign/campaign.ts">CampaignListResponse</a></code>
- <code><a href="./src/resources/campaign/campaign.ts">CampaignAcceptSharingResponse</a></code>
- <code><a href="./src/resources/campaign/campaign.ts">CampaignDeactivateResponse</a></code>
- <code><a href="./src/resources/campaign/campaign.ts">CampaignGetMnoMetadataResponse</a></code>
- <code><a href="./src/resources/campaign/campaign.ts">CampaignGetOperationStatusResponse</a></code>
- <code><a href="./src/resources/campaign/campaign.ts">CampaignGetSharingStatusResponse</a></code>
- <code><a href="./src/resources/campaign/campaign.ts">CampaignSubmitAppealResponse</a></code>

Methods:

- <code title="get /campaign/{campaignId}">client.campaign.<a href="./src/resources/campaign/campaign.ts">retrieve</a>(campaignID) -> TelnyxCampaignCsp</code>
- <code title="put /campaign/{campaignId}">client.campaign.<a href="./src/resources/campaign/campaign.ts">update</a>(campaignID, { ...params }) -> TelnyxCampaignCsp</code>
- <code title="get /campaign">client.campaign.<a href="./src/resources/campaign/campaign.ts">list</a>({ ...params }) -> CampaignListResponse</code>
- <code title="post /campaign/acceptSharing/{campaignId}">client.campaign.<a href="./src/resources/campaign/campaign.ts">acceptSharing</a>(campaignID) -> unknown</code>
- <code title="delete /campaign/{campaignId}">client.campaign.<a href="./src/resources/campaign/campaign.ts">deactivate</a>(campaignID) -> CampaignDeactivateResponse</code>
- <code title="get /campaign/{campaignId}/mnoMetadata">client.campaign.<a href="./src/resources/campaign/campaign.ts">getMnoMetadata</a>(campaignID) -> CampaignGetMnoMetadataResponse</code>
- <code title="get /campaign/{campaignId}/operationStatus">client.campaign.<a href="./src/resources/campaign/campaign.ts">getOperationStatus</a>(campaignID) -> unknown</code>
- <code title="get /campaign/{campaignId}/sharing">client.campaign.<a href="./src/resources/campaign/campaign.ts">getSharingStatus</a>(campaignID) -> CampaignGetSharingStatusResponse</code>
- <code title="post /campaign/{campaignId}/appeal">client.campaign.<a href="./src/resources/campaign/campaign.ts">submitAppeal</a>(campaignID, { ...params }) -> CampaignSubmitAppealResponse</code>

## Usecase

Types:

- <code><a href="./src/resources/campaign/usecase.ts">UsecaseGetCostResponse</a></code>

Methods:

- <code title="get /campaign/usecase/cost">client.campaign.usecase.<a href="./src/resources/campaign/usecase.ts">getCost</a>({ ...params }) -> UsecaseGetCostResponse</code>

## Osr

Types:

- <code><a href="./src/resources/campaign/osr.ts">OsrGetAttributesResponse</a></code>

Methods:

- <code title="get /campaign/{campaignId}/osr/attributes">client.campaign.osr.<a href="./src/resources/campaign/osr.ts">getAttributes</a>(campaignID) -> unknown</code>

# CampaignBuilder

Types:

- <code><a href="./src/resources/campaign-builder/campaign-builder.ts">CampaignBuilderCreateResponse</a></code>

Methods:

- <code title="post /campaignBuilder">client.campaignBuilder.<a href="./src/resources/campaign-builder/campaign-builder.ts">create</a>({ ...params }) -> CampaignBuilderCreateResponse</code>

## Brand

Types:

- <code><a href="./src/resources/campaign-builder/brand.ts">BrandQualifyByUsecaseResponse</a></code>

Methods:

- <code title="get /campaignBuilder/brand/{brandId}/usecase/{usecase}">client.campaignBuilder.brand.<a href="./src/resources/campaign-builder/brand.ts">qualifyByUsecase</a>(usecase, { ...params }) -> BrandQualifyByUsecaseResponse</code>

# ChannelZones

Types:

- <code><a href="./src/resources/channel-zones.ts">ChannelZoneUpdateResponse</a></code>
- <code><a href="./src/resources/channel-zones.ts">ChannelZoneListResponse</a></code>

Methods:

- <code title="put /channel_zones/{channel_zone_id}">client.channelZones.<a href="./src/resources/channel-zones.ts">update</a>(channelZoneID, { ...params }) -> ChannelZoneUpdateResponse</code>
- <code title="get /channel_zones">client.channelZones.<a href="./src/resources/channel-zones.ts">list</a>({ ...params }) -> ChannelZoneListResponse</code>

# ChargesBreakdown

Types:

- <code><a href="./src/resources/charges-breakdown.ts">ChargesBreakdownRetrieveResponse</a></code>

Methods:

- <code title="get /charges_breakdown">client.chargesBreakdown.<a href="./src/resources/charges-breakdown.ts">retrieve</a>({ ...params }) -> ChargesBreakdownRetrieveResponse</code>

# ChargesSummary

Types:

- <code><a href="./src/resources/charges-summary.ts">MonthDetail</a></code>
- <code><a href="./src/resources/charges-summary.ts">ChargesSummaryRetrieveResponse</a></code>

Methods:

- <code title="get /charges_summary">client.chargesSummary.<a href="./src/resources/charges-summary.ts">retrieve</a>({ ...params }) -> ChargesSummaryRetrieveResponse</code>

# Comments

Types:

- <code><a href="./src/resources/comments.ts">CommentCreateResponse</a></code>
- <code><a href="./src/resources/comments.ts">CommentRetrieveResponse</a></code>
- <code><a href="./src/resources/comments.ts">CommentListResponse</a></code>
- <code><a href="./src/resources/comments.ts">CommentMarkAsReadResponse</a></code>

Methods:

- <code title="post /comments">client.comments.<a href="./src/resources/comments.ts">create</a>({ ...params }) -> CommentCreateResponse</code>
- <code title="get /comments/{id}">client.comments.<a href="./src/resources/comments.ts">retrieve</a>(id) -> CommentRetrieveResponse</code>
- <code title="get /comments">client.comments.<a href="./src/resources/comments.ts">list</a>({ ...params }) -> CommentListResponse</code>
- <code title="patch /comments/{id}/read">client.comments.<a href="./src/resources/comments.ts">markAsRead</a>(id) -> CommentMarkAsReadResponse</code>

# Conferences

Types:

- <code><a href="./src/resources/conferences/conferences.ts">Conference</a></code>
- <code><a href="./src/resources/conferences/conferences.ts">ConferenceCreateResponse</a></code>
- <code><a href="./src/resources/conferences/conferences.ts">ConferenceRetrieveResponse</a></code>
- <code><a href="./src/resources/conferences/conferences.ts">ConferenceListResponse</a></code>
- <code><a href="./src/resources/conferences/conferences.ts">ConferenceListParticipantsResponse</a></code>

Methods:

- <code title="post /conferences">client.conferences.<a href="./src/resources/conferences/conferences.ts">create</a>({ ...params }) -> ConferenceCreateResponse</code>
- <code title="get /conferences/{id}">client.conferences.<a href="./src/resources/conferences/conferences.ts">retrieve</a>(id) -> ConferenceRetrieveResponse</code>
- <code title="get /conferences">client.conferences.<a href="./src/resources/conferences/conferences.ts">list</a>({ ...params }) -> ConferenceListResponse</code>
- <code title="get /conferences/{conference_id}/participants">client.conferences.<a href="./src/resources/conferences/conferences.ts">listParticipants</a>(conferenceID, { ...params }) -> ConferenceListParticipantsResponse</code>

## Actions

Types:

- <code><a href="./src/resources/conferences/actions.ts">ConferenceCommandResult</a></code>
- <code><a href="./src/resources/conferences/actions.ts">UpdateConference</a></code>
- <code><a href="./src/resources/conferences/actions.ts">ActionUpdateResponse</a></code>
- <code><a href="./src/resources/conferences/actions.ts">ActionHoldResponse</a></code>
- <code><a href="./src/resources/conferences/actions.ts">ActionJoinResponse</a></code>
- <code><a href="./src/resources/conferences/actions.ts">ActionLeaveResponse</a></code>
- <code><a href="./src/resources/conferences/actions.ts">ActionMuteResponse</a></code>
- <code><a href="./src/resources/conferences/actions.ts">ActionPlayResponse</a></code>
- <code><a href="./src/resources/conferences/actions.ts">ActionRecordPauseResponse</a></code>
- <code><a href="./src/resources/conferences/actions.ts">ActionRecordResumeResponse</a></code>
- <code><a href="./src/resources/conferences/actions.ts">ActionRecordStartResponse</a></code>
- <code><a href="./src/resources/conferences/actions.ts">ActionRecordStopResponse</a></code>
- <code><a href="./src/resources/conferences/actions.ts">ActionSpeakResponse</a></code>
- <code><a href="./src/resources/conferences/actions.ts">ActionStopResponse</a></code>
- <code><a href="./src/resources/conferences/actions.ts">ActionUnholdResponse</a></code>
- <code><a href="./src/resources/conferences/actions.ts">ActionUnmuteResponse</a></code>

Methods:

- <code title="post /conferences/{id}/actions/update">client.conferences.actions.<a href="./src/resources/conferences/actions.ts">update</a>(id, { ...params }) -> ActionUpdateResponse</code>
- <code title="post /conferences/{id}/actions/hold">client.conferences.actions.<a href="./src/resources/conferences/actions.ts">hold</a>(id, { ...params }) -> ActionHoldResponse</code>
- <code title="post /conferences/{id}/actions/join">client.conferences.actions.<a href="./src/resources/conferences/actions.ts">join</a>(id, { ...params }) -> ActionJoinResponse</code>
- <code title="post /conferences/{id}/actions/leave">client.conferences.actions.<a href="./src/resources/conferences/actions.ts">leave</a>(id, { ...params }) -> ActionLeaveResponse</code>
- <code title="post /conferences/{id}/actions/mute">client.conferences.actions.<a href="./src/resources/conferences/actions.ts">mute</a>(id, { ...params }) -> ActionMuteResponse</code>
- <code title="post /conferences/{id}/actions/play">client.conferences.actions.<a href="./src/resources/conferences/actions.ts">play</a>(id, { ...params }) -> ActionPlayResponse</code>
- <code title="post /conferences/{id}/actions/record_pause">client.conferences.actions.<a href="./src/resources/conferences/actions.ts">recordPause</a>(id, { ...params }) -> ActionRecordPauseResponse</code>
- <code title="post /conferences/{id}/actions/record_resume">client.conferences.actions.<a href="./src/resources/conferences/actions.ts">recordResume</a>(id, { ...params }) -> ActionRecordResumeResponse</code>
- <code title="post /conferences/{id}/actions/record_start">client.conferences.actions.<a href="./src/resources/conferences/actions.ts">recordStart</a>(id, { ...params }) -> ActionRecordStartResponse</code>
- <code title="post /conferences/{id}/actions/record_stop">client.conferences.actions.<a href="./src/resources/conferences/actions.ts">recordStop</a>(id, { ...params }) -> ActionRecordStopResponse</code>
- <code title="post /conferences/{id}/actions/speak">client.conferences.actions.<a href="./src/resources/conferences/actions.ts">speak</a>(id, { ...params }) -> ActionSpeakResponse</code>
- <code title="post /conferences/{id}/actions/stop">client.conferences.actions.<a href="./src/resources/conferences/actions.ts">stop</a>(id, { ...params }) -> ActionStopResponse</code>
- <code title="post /conferences/{id}/actions/unhold">client.conferences.actions.<a href="./src/resources/conferences/actions.ts">unhold</a>(id, { ...params }) -> ActionUnholdResponse</code>
- <code title="post /conferences/{id}/actions/unmute">client.conferences.actions.<a href="./src/resources/conferences/actions.ts">unmute</a>(id, { ...params }) -> ActionUnmuteResponse</code>

# Connections

Types:

- <code><a href="./src/resources/connections.ts">ConnectionRetrieveResponse</a></code>
- <code><a href="./src/resources/connections.ts">ConnectionListResponse</a></code>
- <code><a href="./src/resources/connections.ts">ConnectionListActiveCallsResponse</a></code>

Methods:

- <code title="get /connections/{id}">client.connections.<a href="./src/resources/connections.ts">retrieve</a>(id) -> ConnectionRetrieveResponse</code>
- <code title="get /connections">client.connections.<a href="./src/resources/connections.ts">list</a>({ ...params }) -> ConnectionListResponse</code>
- <code title="get /connections/{connection_id}/active_calls">client.connections.<a href="./src/resources/connections.ts">listActiveCalls</a>(connectionID, { ...params }) -> ConnectionListActiveCallsResponse</code>

# CountryCoverage

Types:

- <code><a href="./src/resources/country-coverage.ts">CountryCoverageRetrieveResponse</a></code>
- <code><a href="./src/resources/country-coverage.ts">CountryCoverageRetrieveCountryResponse</a></code>

Methods:

- <code title="get /country_coverage">client.countryCoverage.<a href="./src/resources/country-coverage.ts">retrieve</a>() -> CountryCoverageRetrieveResponse</code>
- <code title="get /country_coverage/countries/{country_code}">client.countryCoverage.<a href="./src/resources/country-coverage.ts">retrieveCountry</a>(countryCode) -> CountryCoverageRetrieveCountryResponse</code>

# CredentialConnections

Types:

- <code><a href="./src/resources/credential-connections/credential-connections.ts">AnchorsiteOverride</a></code>
- <code><a href="./src/resources/credential-connections/credential-connections.ts">ConnectionRtcpSettings</a></code>
- <code><a href="./src/resources/credential-connections/credential-connections.ts">CredentialConnection</a></code>
- <code><a href="./src/resources/credential-connections/credential-connections.ts">CredentialInbound</a></code>
- <code><a href="./src/resources/credential-connections/credential-connections.ts">CredentialOutbound</a></code>
- <code><a href="./src/resources/credential-connections/credential-connections.ts">DtmfType</a></code>
- <code><a href="./src/resources/credential-connections/credential-connections.ts">EncryptedMedia</a></code>
- <code><a href="./src/resources/credential-connections/credential-connections.ts">CredentialConnectionCreateResponse</a></code>
- <code><a href="./src/resources/credential-connections/credential-connections.ts">CredentialConnectionRetrieveResponse</a></code>
- <code><a href="./src/resources/credential-connections/credential-connections.ts">CredentialConnectionUpdateResponse</a></code>
- <code><a href="./src/resources/credential-connections/credential-connections.ts">CredentialConnectionListResponse</a></code>
- <code><a href="./src/resources/credential-connections/credential-connections.ts">CredentialConnectionDeleteResponse</a></code>

Methods:

- <code title="post /credential_connections">client.credentialConnections.<a href="./src/resources/credential-connections/credential-connections.ts">create</a>({ ...params }) -> CredentialConnectionCreateResponse</code>
- <code title="get /credential_connections/{id}">client.credentialConnections.<a href="./src/resources/credential-connections/credential-connections.ts">retrieve</a>(id) -> CredentialConnectionRetrieveResponse</code>
- <code title="patch /credential_connections/{id}">client.credentialConnections.<a href="./src/resources/credential-connections/credential-connections.ts">update</a>(id, { ...params }) -> CredentialConnectionUpdateResponse</code>
- <code title="get /credential_connections">client.credentialConnections.<a href="./src/resources/credential-connections/credential-connections.ts">list</a>({ ...params }) -> CredentialConnectionListResponse</code>
- <code title="delete /credential_connections/{id}">client.credentialConnections.<a href="./src/resources/credential-connections/credential-connections.ts">delete</a>(id) -> CredentialConnectionDeleteResponse</code>

## Actions

Types:

- <code><a href="./src/resources/credential-connections/actions.ts">ActionCheckRegistrationStatusResponse</a></code>

Methods:

- <code title="post /credential_connections/{id}/actions/check_registration_status">client.credentialConnections.actions.<a href="./src/resources/credential-connections/actions.ts">checkRegistrationStatus</a>(id) -> ActionCheckRegistrationStatusResponse</code>

# CustomStorageCredentials

Types:

- <code><a href="./src/resources/custom-storage-credentials.ts">AzureConfigurationData</a></code>
- <code><a href="./src/resources/custom-storage-credentials.ts">CustomStorageConfiguration</a></code>
- <code><a href="./src/resources/custom-storage-credentials.ts">GcsConfigurationData</a></code>
- <code><a href="./src/resources/custom-storage-credentials.ts">S3ConfigurationData</a></code>
- <code><a href="./src/resources/custom-storage-credentials.ts">CustomStorageCredentialCreateResponse</a></code>
- <code><a href="./src/resources/custom-storage-credentials.ts">CustomStorageCredentialRetrieveResponse</a></code>
- <code><a href="./src/resources/custom-storage-credentials.ts">CustomStorageCredentialUpdateResponse</a></code>

Methods:

- <code title="post /custom_storage_credentials/{connection_id}">client.customStorageCredentials.<a href="./src/resources/custom-storage-credentials.ts">create</a>(connectionID, { ...params }) -> CustomStorageCredentialCreateResponse</code>
- <code title="get /custom_storage_credentials/{connection_id}">client.customStorageCredentials.<a href="./src/resources/custom-storage-credentials.ts">retrieve</a>(connectionID) -> CustomStorageCredentialRetrieveResponse</code>
- <code title="put /custom_storage_credentials/{connection_id}">client.customStorageCredentials.<a href="./src/resources/custom-storage-credentials.ts">update</a>(connectionID, { ...params }) -> CustomStorageCredentialUpdateResponse</code>
- <code title="delete /custom_storage_credentials/{connection_id}">client.customStorageCredentials.<a href="./src/resources/custom-storage-credentials.ts">delete</a>(connectionID) -> void</code>

# CustomerServiceRecords

Types:

- <code><a href="./src/resources/customer-service-records.ts">CustomerServiceRecord</a></code>
- <code><a href="./src/resources/customer-service-records.ts">CustomerServiceRecordCreateResponse</a></code>
- <code><a href="./src/resources/customer-service-records.ts">CustomerServiceRecordRetrieveResponse</a></code>
- <code><a href="./src/resources/customer-service-records.ts">CustomerServiceRecordListResponse</a></code>
- <code><a href="./src/resources/customer-service-records.ts">CustomerServiceRecordVerifyPhoneNumberCoverageResponse</a></code>

Methods:

- <code title="post /customer_service_records">client.customerServiceRecords.<a href="./src/resources/customer-service-records.ts">create</a>({ ...params }) -> CustomerServiceRecordCreateResponse</code>
- <code title="get /customer_service_records/{customer_service_record_id}">client.customerServiceRecords.<a href="./src/resources/customer-service-records.ts">retrieve</a>(customerServiceRecordID) -> CustomerServiceRecordRetrieveResponse</code>
- <code title="get /customer_service_records">client.customerServiceRecords.<a href="./src/resources/customer-service-records.ts">list</a>({ ...params }) -> CustomerServiceRecordListResponse</code>
- <code title="post /customer_service_records/phone_number_coverages">client.customerServiceRecords.<a href="./src/resources/customer-service-records.ts">verifyPhoneNumberCoverage</a>({ ...params }) -> CustomerServiceRecordVerifyPhoneNumberCoverageResponse</code>

# DetailRecords

Types:

- <code><a href="./src/resources/detail-records.ts">DetailRecordListResponse</a></code>

Methods:

- <code title="get /detail_records">client.detailRecords.<a href="./src/resources/detail-records.ts">list</a>({ ...params }) -> DetailRecordListResponse</code>

# DialogflowConnections

Types:

- <code><a href="./src/resources/dialogflow-connections.ts">DialogflowConnectionCreateResponse</a></code>
- <code><a href="./src/resources/dialogflow-connections.ts">DialogflowConnectionRetrieveResponse</a></code>
- <code><a href="./src/resources/dialogflow-connections.ts">DialogflowConnectionUpdateResponse</a></code>

Methods:

- <code title="post /dialogflow_connections/{connection_id}">client.dialogflowConnections.<a href="./src/resources/dialogflow-connections.ts">create</a>(connectionID, { ...params }) -> DialogflowConnectionCreateResponse</code>
- <code title="get /dialogflow_connections/{connection_id}">client.dialogflowConnections.<a href="./src/resources/dialogflow-connections.ts">retrieve</a>(connectionID) -> DialogflowConnectionRetrieveResponse</code>
- <code title="put /dialogflow_connections/{connection_id}">client.dialogflowConnections.<a href="./src/resources/dialogflow-connections.ts">update</a>(connectionID, { ...params }) -> DialogflowConnectionUpdateResponse</code>
- <code title="delete /dialogflow_connections/{connection_id}">client.dialogflowConnections.<a href="./src/resources/dialogflow-connections.ts">delete</a>(connectionID) -> void</code>

# DocumentLinks

Types:

- <code><a href="./src/resources/document-links.ts">DocumentLinkListResponse</a></code>

Methods:

- <code title="get /document_links">client.documentLinks.<a href="./src/resources/document-links.ts">list</a>({ ...params }) -> DocumentLinkListResponse</code>

# Documents

Types:

- <code><a href="./src/resources/documents.ts">DocServiceDocument</a></code>
- <code><a href="./src/resources/documents.ts">DocumentRetrieveResponse</a></code>
- <code><a href="./src/resources/documents.ts">DocumentUpdateResponse</a></code>
- <code><a href="./src/resources/documents.ts">DocumentListResponse</a></code>
- <code><a href="./src/resources/documents.ts">DocumentDeleteResponse</a></code>
- <code><a href="./src/resources/documents.ts">DocumentGenerateDownloadLinkResponse</a></code>
- <code><a href="./src/resources/documents.ts">DocumentUploadResponse</a></code>

Methods:

- <code title="get /documents/{id}">client.documents.<a href="./src/resources/documents.ts">retrieve</a>(id) -> DocumentRetrieveResponse</code>
- <code title="patch /documents/{id}">client.documents.<a href="./src/resources/documents.ts">update</a>(id, { ...params }) -> DocumentUpdateResponse</code>
- <code title="get /documents">client.documents.<a href="./src/resources/documents.ts">list</a>({ ...params }) -> DocumentListResponse</code>
- <code title="delete /documents/{id}">client.documents.<a href="./src/resources/documents.ts">delete</a>(id) -> DocumentDeleteResponse</code>
- <code title="get /documents/{id}/download">client.documents.<a href="./src/resources/documents.ts">download</a>(id) -> Response</code>
- <code title="get /documents/{id}/download_link">client.documents.<a href="./src/resources/documents.ts">generateDownloadLink</a>(id) -> DocumentGenerateDownloadLinkResponse</code>
- <code title="post /documents">client.documents.<a href="./src/resources/documents.ts">upload</a>({ ...params }) -> DocumentUploadResponse</code>

# DynamicEmergencyAddresses

Types:

- <code><a href="./src/resources/dynamic-emergency-addresses.ts">DynamicEmergencyAddress</a></code>
- <code><a href="./src/resources/dynamic-emergency-addresses.ts">DynamicEmergencyAddressCreateResponse</a></code>
- <code><a href="./src/resources/dynamic-emergency-addresses.ts">DynamicEmergencyAddressRetrieveResponse</a></code>
- <code><a href="./src/resources/dynamic-emergency-addresses.ts">DynamicEmergencyAddressListResponse</a></code>
- <code><a href="./src/resources/dynamic-emergency-addresses.ts">DynamicEmergencyAddressDeleteResponse</a></code>

Methods:

- <code title="post /dynamic_emergency_addresses">client.dynamicEmergencyAddresses.<a href="./src/resources/dynamic-emergency-addresses.ts">create</a>({ ...params }) -> DynamicEmergencyAddressCreateResponse</code>
- <code title="get /dynamic_emergency_addresses/{id}">client.dynamicEmergencyAddresses.<a href="./src/resources/dynamic-emergency-addresses.ts">retrieve</a>(id) -> DynamicEmergencyAddressRetrieveResponse</code>
- <code title="get /dynamic_emergency_addresses">client.dynamicEmergencyAddresses.<a href="./src/resources/dynamic-emergency-addresses.ts">list</a>({ ...params }) -> DynamicEmergencyAddressListResponse</code>
- <code title="delete /dynamic_emergency_addresses/{id}">client.dynamicEmergencyAddresses.<a href="./src/resources/dynamic-emergency-addresses.ts">delete</a>(id) -> DynamicEmergencyAddressDeleteResponse</code>

# DynamicEmergencyEndpoints

Types:

- <code><a href="./src/resources/dynamic-emergency-endpoints.ts">DynamicEmergencyEndpoint</a></code>
- <code><a href="./src/resources/dynamic-emergency-endpoints.ts">DynamicEmergencyEndpointCreateResponse</a></code>
- <code><a href="./src/resources/dynamic-emergency-endpoints.ts">DynamicEmergencyEndpointRetrieveResponse</a></code>
- <code><a href="./src/resources/dynamic-emergency-endpoints.ts">DynamicEmergencyEndpointListResponse</a></code>
- <code><a href="./src/resources/dynamic-emergency-endpoints.ts">DynamicEmergencyEndpointDeleteResponse</a></code>

Methods:

- <code title="post /dynamic_emergency_endpoints">client.dynamicEmergencyEndpoints.<a href="./src/resources/dynamic-emergency-endpoints.ts">create</a>({ ...params }) -> DynamicEmergencyEndpointCreateResponse</code>
- <code title="get /dynamic_emergency_endpoints/{id}">client.dynamicEmergencyEndpoints.<a href="./src/resources/dynamic-emergency-endpoints.ts">retrieve</a>(id) -> DynamicEmergencyEndpointRetrieveResponse</code>
- <code title="get /dynamic_emergency_endpoints">client.dynamicEmergencyEndpoints.<a href="./src/resources/dynamic-emergency-endpoints.ts">list</a>({ ...params }) -> DynamicEmergencyEndpointListResponse</code>
- <code title="delete /dynamic_emergency_endpoints/{id}">client.dynamicEmergencyEndpoints.<a href="./src/resources/dynamic-emergency-endpoints.ts">delete</a>(id) -> DynamicEmergencyEndpointDeleteResponse</code>

# Enum

Types:

- <code><a href="./src/resources/enum.ts">EnumRetrieveResponse</a></code>

Methods:

- <code title="get /enum/{endpoint}">client.enum.<a href="./src/resources/enum.ts">retrieve</a>(endpoint) -> EnumRetrieveResponse</code>

# ExternalConnections

Types:

- <code><a href="./src/resources/external-connections/external-connections.ts">ExternalConnection</a></code>
- <code><a href="./src/resources/external-connections/external-connections.ts">ExternalVoiceIntegrationsPaginationMeta</a></code>
- <code><a href="./src/resources/external-connections/external-connections.ts">ExternalConnectionCreateResponse</a></code>
- <code><a href="./src/resources/external-connections/external-connections.ts">ExternalConnectionRetrieveResponse</a></code>
- <code><a href="./src/resources/external-connections/external-connections.ts">ExternalConnectionUpdateResponse</a></code>
- <code><a href="./src/resources/external-connections/external-connections.ts">ExternalConnectionListResponse</a></code>
- <code><a href="./src/resources/external-connections/external-connections.ts">ExternalConnectionDeleteResponse</a></code>
- <code><a href="./src/resources/external-connections/external-connections.ts">ExternalConnectionUpdateLocationResponse</a></code>

Methods:

- <code title="post /external_connections">client.externalConnections.<a href="./src/resources/external-connections/external-connections.ts">create</a>({ ...params }) -> ExternalConnectionCreateResponse</code>
- <code title="get /external_connections/{id}">client.externalConnections.<a href="./src/resources/external-connections/external-connections.ts">retrieve</a>(id) -> ExternalConnectionRetrieveResponse</code>
- <code title="patch /external_connections/{id}">client.externalConnections.<a href="./src/resources/external-connections/external-connections.ts">update</a>(id, { ...params }) -> ExternalConnectionUpdateResponse</code>
- <code title="get /external_connections">client.externalConnections.<a href="./src/resources/external-connections/external-connections.ts">list</a>({ ...params }) -> ExternalConnectionListResponse</code>
- <code title="delete /external_connections/{id}">client.externalConnections.<a href="./src/resources/external-connections/external-connections.ts">delete</a>(id) -> ExternalConnectionDeleteResponse</code>
- <code title="patch /external_connections/{id}/locations/{location_id}">client.externalConnections.<a href="./src/resources/external-connections/external-connections.ts">updateLocation</a>(locationID, { ...params }) -> ExternalConnectionUpdateLocationResponse</code>

## LogMessages

Types:

- <code><a href="./src/resources/external-connections/log-messages.ts">LogMessageRetrieveResponse</a></code>
- <code><a href="./src/resources/external-connections/log-messages.ts">LogMessageListResponse</a></code>
- <code><a href="./src/resources/external-connections/log-messages.ts">LogMessageDismissResponse</a></code>

Methods:

- <code title="get /external_connections/log_messages/{id}">client.externalConnections.logMessages.<a href="./src/resources/external-connections/log-messages.ts">retrieve</a>(id) -> LogMessageRetrieveResponse</code>
- <code title="get /external_connections/log_messages">client.externalConnections.logMessages.<a href="./src/resources/external-connections/log-messages.ts">list</a>({ ...params }) -> LogMessageListResponse</code>
- <code title="delete /external_connections/log_messages/{id}">client.externalConnections.logMessages.<a href="./src/resources/external-connections/log-messages.ts">dismiss</a>(id) -> LogMessageDismissResponse</code>

## CivicAddresses

Types:

- <code><a href="./src/resources/external-connections/civic-addresses.ts">CivicAddressRetrieveResponse</a></code>
- <code><a href="./src/resources/external-connections/civic-addresses.ts">CivicAddressListResponse</a></code>

Methods:

- <code title="get /external_connections/{id}/civic_addresses/{address_id}">client.externalConnections.civicAddresses.<a href="./src/resources/external-connections/civic-addresses.ts">retrieve</a>(addressID, { ...params }) -> CivicAddressRetrieveResponse</code>
- <code title="get /external_connections/{id}/civic_addresses">client.externalConnections.civicAddresses.<a href="./src/resources/external-connections/civic-addresses.ts">list</a>(id, { ...params }) -> CivicAddressListResponse</code>

## PhoneNumbers

Types:

- <code><a href="./src/resources/external-connections/phone-numbers.ts">ExternalConnectionPhoneNumber</a></code>
- <code><a href="./src/resources/external-connections/phone-numbers.ts">PhoneNumberRetrieveResponse</a></code>
- <code><a href="./src/resources/external-connections/phone-numbers.ts">PhoneNumberUpdateResponse</a></code>
- <code><a href="./src/resources/external-connections/phone-numbers.ts">PhoneNumberListResponse</a></code>

Methods:

- <code title="get /external_connections/{id}/phone_numbers/{phone_number_id}">client.externalConnections.phoneNumbers.<a href="./src/resources/external-connections/phone-numbers.ts">retrieve</a>(phoneNumberID, { ...params }) -> PhoneNumberRetrieveResponse</code>
- <code title="patch /external_connections/{id}/phone_numbers/{phone_number_id}">client.externalConnections.phoneNumbers.<a href="./src/resources/external-connections/phone-numbers.ts">update</a>(phoneNumberID, { ...params }) -> PhoneNumberUpdateResponse</code>
- <code title="get /external_connections/{id}/phone_numbers">client.externalConnections.phoneNumbers.<a href="./src/resources/external-connections/phone-numbers.ts">list</a>(id, { ...params }) -> PhoneNumberListResponse</code>

## Releases

Types:

- <code><a href="./src/resources/external-connections/releases.ts">ReleaseRetrieveResponse</a></code>
- <code><a href="./src/resources/external-connections/releases.ts">ReleaseListResponse</a></code>

Methods:

- <code title="get /external_connections/{id}/releases/{release_id}">client.externalConnections.releases.<a href="./src/resources/external-connections/releases.ts">retrieve</a>(releaseID, { ...params }) -> ReleaseRetrieveResponse</code>
- <code title="get /external_connections/{id}/releases">client.externalConnections.releases.<a href="./src/resources/external-connections/releases.ts">list</a>(id, { ...params }) -> ReleaseListResponse</code>

## Uploads

Types:

- <code><a href="./src/resources/external-connections/uploads.ts">TnUploadEntry</a></code>
- <code><a href="./src/resources/external-connections/uploads.ts">Upload</a></code>
- <code><a href="./src/resources/external-connections/uploads.ts">UploadCreateResponse</a></code>
- <code><a href="./src/resources/external-connections/uploads.ts">UploadRetrieveResponse</a></code>
- <code><a href="./src/resources/external-connections/uploads.ts">UploadListResponse</a></code>
- <code><a href="./src/resources/external-connections/uploads.ts">UploadPendingCountResponse</a></code>
- <code><a href="./src/resources/external-connections/uploads.ts">UploadRefreshStatusResponse</a></code>
- <code><a href="./src/resources/external-connections/uploads.ts">UploadRetryResponse</a></code>

Methods:

- <code title="post /external_connections/{id}/uploads">client.externalConnections.uploads.<a href="./src/resources/external-connections/uploads.ts">create</a>(id, { ...params }) -> UploadCreateResponse</code>
- <code title="get /external_connections/{id}/uploads/{ticket_id}">client.externalConnections.uploads.<a href="./src/resources/external-connections/uploads.ts">retrieve</a>(ticketID, { ...params }) -> UploadRetrieveResponse</code>
- <code title="get /external_connections/{id}/uploads">client.externalConnections.uploads.<a href="./src/resources/external-connections/uploads.ts">list</a>(id, { ...params }) -> UploadListResponse</code>
- <code title="get /external_connections/{id}/uploads/status">client.externalConnections.uploads.<a href="./src/resources/external-connections/uploads.ts">pendingCount</a>(id) -> UploadPendingCountResponse</code>
- <code title="post /external_connections/{id}/uploads/refresh">client.externalConnections.uploads.<a href="./src/resources/external-connections/uploads.ts">refreshStatus</a>(id) -> UploadRefreshStatusResponse</code>
- <code title="post /external_connections/{id}/uploads/{ticket_id}/retry">client.externalConnections.uploads.<a href="./src/resources/external-connections/uploads.ts">retry</a>(ticketID, { ...params }) -> UploadRetryResponse</code>

# FaxApplications

Types:

- <code><a href="./src/resources/fax-applications.ts">FaxApplication</a></code>
- <code><a href="./src/resources/fax-applications.ts">FaxApplicationCreateResponse</a></code>
- <code><a href="./src/resources/fax-applications.ts">FaxApplicationRetrieveResponse</a></code>
- <code><a href="./src/resources/fax-applications.ts">FaxApplicationUpdateResponse</a></code>
- <code><a href="./src/resources/fax-applications.ts">FaxApplicationListResponse</a></code>
- <code><a href="./src/resources/fax-applications.ts">FaxApplicationDeleteResponse</a></code>

Methods:

- <code title="post /fax_applications">client.faxApplications.<a href="./src/resources/fax-applications.ts">create</a>({ ...params }) -> FaxApplicationCreateResponse</code>
- <code title="get /fax_applications/{id}">client.faxApplications.<a href="./src/resources/fax-applications.ts">retrieve</a>(id) -> FaxApplicationRetrieveResponse</code>
- <code title="patch /fax_applications/{id}">client.faxApplications.<a href="./src/resources/fax-applications.ts">update</a>(id, { ...params }) -> FaxApplicationUpdateResponse</code>
- <code title="get /fax_applications">client.faxApplications.<a href="./src/resources/fax-applications.ts">list</a>({ ...params }) -> FaxApplicationListResponse</code>
- <code title="delete /fax_applications/{id}">client.faxApplications.<a href="./src/resources/fax-applications.ts">delete</a>(id) -> FaxApplicationDeleteResponse</code>

# Faxes

Types:

- <code><a href="./src/resources/faxes/faxes.ts">Fax</a></code>
- <code><a href="./src/resources/faxes/faxes.ts">FaxCreateResponse</a></code>
- <code><a href="./src/resources/faxes/faxes.ts">FaxRetrieveResponse</a></code>
- <code><a href="./src/resources/faxes/faxes.ts">FaxListResponse</a></code>

Methods:

- <code title="post /faxes">client.faxes.<a href="./src/resources/faxes/faxes.ts">create</a>({ ...params }) -> FaxCreateResponse</code>
- <code title="get /faxes/{id}">client.faxes.<a href="./src/resources/faxes/faxes.ts">retrieve</a>(id) -> FaxRetrieveResponse</code>
- <code title="get /faxes">client.faxes.<a href="./src/resources/faxes/faxes.ts">list</a>({ ...params }) -> FaxListResponse</code>
- <code title="delete /faxes/{id}">client.faxes.<a href="./src/resources/faxes/faxes.ts">delete</a>(id) -> void</code>

## Actions

Types:

- <code><a href="./src/resources/faxes/actions.ts">ActionCancelResponse</a></code>
- <code><a href="./src/resources/faxes/actions.ts">ActionRefreshResponse</a></code>

Methods:

- <code title="post /faxes/{id}/actions/cancel">client.faxes.actions.<a href="./src/resources/faxes/actions.ts">cancel</a>(id) -> ActionCancelResponse</code>
- <code title="post /faxes/{id}/actions/refresh">client.faxes.actions.<a href="./src/resources/faxes/actions.ts">refresh</a>(id) -> ActionRefreshResponse</code>

# FqdnConnections

Types:

- <code><a href="./src/resources/fqdn-connections.ts">FqdnConnection</a></code>
- <code><a href="./src/resources/fqdn-connections.ts">InboundFqdn</a></code>
- <code><a href="./src/resources/fqdn-connections.ts">OutboundFqdn</a></code>
- <code><a href="./src/resources/fqdn-connections.ts">TransportProtocol</a></code>
- <code><a href="./src/resources/fqdn-connections.ts">WebhookAPIVersion</a></code>
- <code><a href="./src/resources/fqdn-connections.ts">FqdnConnectionCreateResponse</a></code>
- <code><a href="./src/resources/fqdn-connections.ts">FqdnConnectionRetrieveResponse</a></code>
- <code><a href="./src/resources/fqdn-connections.ts">FqdnConnectionUpdateResponse</a></code>
- <code><a href="./src/resources/fqdn-connections.ts">FqdnConnectionListResponse</a></code>
- <code><a href="./src/resources/fqdn-connections.ts">FqdnConnectionDeleteResponse</a></code>

Methods:

- <code title="post /fqdn_connections">client.fqdnConnections.<a href="./src/resources/fqdn-connections.ts">create</a>({ ...params }) -> FqdnConnectionCreateResponse</code>
- <code title="get /fqdn_connections/{id}">client.fqdnConnections.<a href="./src/resources/fqdn-connections.ts">retrieve</a>(id) -> FqdnConnectionRetrieveResponse</code>
- <code title="patch /fqdn_connections/{id}">client.fqdnConnections.<a href="./src/resources/fqdn-connections.ts">update</a>(id, { ...params }) -> FqdnConnectionUpdateResponse</code>
- <code title="get /fqdn_connections">client.fqdnConnections.<a href="./src/resources/fqdn-connections.ts">list</a>({ ...params }) -> FqdnConnectionListResponse</code>
- <code title="delete /fqdn_connections/{id}">client.fqdnConnections.<a href="./src/resources/fqdn-connections.ts">delete</a>(id) -> FqdnConnectionDeleteResponse</code>

# Fqdns

Types:

- <code><a href="./src/resources/fqdns.ts">Fqdn</a></code>
- <code><a href="./src/resources/fqdns.ts">FqdnCreateResponse</a></code>
- <code><a href="./src/resources/fqdns.ts">FqdnRetrieveResponse</a></code>
- <code><a href="./src/resources/fqdns.ts">FqdnUpdateResponse</a></code>
- <code><a href="./src/resources/fqdns.ts">FqdnListResponse</a></code>
- <code><a href="./src/resources/fqdns.ts">FqdnDeleteResponse</a></code>

Methods:

- <code title="post /fqdns">client.fqdns.<a href="./src/resources/fqdns.ts">create</a>({ ...params }) -> FqdnCreateResponse</code>
- <code title="get /fqdns/{id}">client.fqdns.<a href="./src/resources/fqdns.ts">retrieve</a>(id) -> FqdnRetrieveResponse</code>
- <code title="patch /fqdns/{id}">client.fqdns.<a href="./src/resources/fqdns.ts">update</a>(id, { ...params }) -> FqdnUpdateResponse</code>
- <code title="get /fqdns">client.fqdns.<a href="./src/resources/fqdns.ts">list</a>({ ...params }) -> FqdnListResponse</code>
- <code title="delete /fqdns/{id}">client.fqdns.<a href="./src/resources/fqdns.ts">delete</a>(id) -> FqdnDeleteResponse</code>

# GlobalIPAllowedPorts

Types:

- <code><a href="./src/resources/global-ip-allowed-ports.ts">GlobalIPAllowedPortListResponse</a></code>

Methods:

- <code title="get /global_ip_allowed_ports">client.globalIPAllowedPorts.<a href="./src/resources/global-ip-allowed-ports.ts">list</a>() -> GlobalIPAllowedPortListResponse</code>

# GlobalIPAssignmentHealth

Types:

- <code><a href="./src/resources/global-ip-assignment-health.ts">GlobalIPAssignmentHealthRetrieveResponse</a></code>

Methods:

- <code title="get /global_ip_assignment_health">client.globalIPAssignmentHealth.<a href="./src/resources/global-ip-assignment-health.ts">retrieve</a>({ ...params }) -> GlobalIPAssignmentHealthRetrieveResponse</code>

# GlobalIPAssignments

Types:

- <code><a href="./src/resources/global-ip-assignments.ts">GlobalIPAssignment</a></code>
- <code><a href="./src/resources/global-ip-assignments.ts">Record</a></code>
- <code><a href="./src/resources/global-ip-assignments.ts">GlobalIPAssignmentCreateResponse</a></code>
- <code><a href="./src/resources/global-ip-assignments.ts">GlobalIPAssignmentRetrieveResponse</a></code>
- <code><a href="./src/resources/global-ip-assignments.ts">GlobalIPAssignmentUpdateResponse</a></code>
- <code><a href="./src/resources/global-ip-assignments.ts">GlobalIPAssignmentListResponse</a></code>
- <code><a href="./src/resources/global-ip-assignments.ts">GlobalIPAssignmentDeleteResponse</a></code>

Methods:

- <code title="post /global_ip_assignments">client.globalIPAssignments.<a href="./src/resources/global-ip-assignments.ts">create</a>({ ...params }) -> GlobalIPAssignmentCreateResponse</code>
- <code title="get /global_ip_assignments/{id}">client.globalIPAssignments.<a href="./src/resources/global-ip-assignments.ts">retrieve</a>(id) -> GlobalIPAssignmentRetrieveResponse</code>
- <code title="patch /global_ip_assignments/{id}">client.globalIPAssignments.<a href="./src/resources/global-ip-assignments.ts">update</a>(id, { ...params }) -> GlobalIPAssignmentUpdateResponse</code>
- <code title="get /global_ip_assignments">client.globalIPAssignments.<a href="./src/resources/global-ip-assignments.ts">list</a>({ ...params }) -> GlobalIPAssignmentListResponse</code>
- <code title="delete /global_ip_assignments/{id}">client.globalIPAssignments.<a href="./src/resources/global-ip-assignments.ts">delete</a>(id) -> GlobalIPAssignmentDeleteResponse</code>

# GlobalIPAssignmentsUsage

Types:

- <code><a href="./src/resources/global-ip-assignments-usage.ts">GlobalIPAssignmentsUsageRetrieveResponse</a></code>

Methods:

- <code title="get /global_ip_assignments_usage">client.globalIPAssignmentsUsage.<a href="./src/resources/global-ip-assignments-usage.ts">retrieve</a>({ ...params }) -> GlobalIPAssignmentsUsageRetrieveResponse</code>

# GlobalIPHealthCheckTypes

Types:

- <code><a href="./src/resources/global-ip-health-check-types.ts">GlobalIPHealthCheckTypeListResponse</a></code>

Methods:

- <code title="get /global_ip_health_check_types">client.globalIPHealthCheckTypes.<a href="./src/resources/global-ip-health-check-types.ts">list</a>() -> GlobalIPHealthCheckTypeListResponse</code>

# GlobalIPHealthChecks

Types:

- <code><a href="./src/resources/global-ip-health-checks.ts">GlobalIPHealthCheckCreateResponse</a></code>
- <code><a href="./src/resources/global-ip-health-checks.ts">GlobalIPHealthCheckRetrieveResponse</a></code>
- <code><a href="./src/resources/global-ip-health-checks.ts">GlobalIPHealthCheckListResponse</a></code>
- <code><a href="./src/resources/global-ip-health-checks.ts">GlobalIPHealthCheckDeleteResponse</a></code>

Methods:

- <code title="post /global_ip_health_checks">client.globalIPHealthChecks.<a href="./src/resources/global-ip-health-checks.ts">create</a>({ ...params }) -> GlobalIPHealthCheckCreateResponse</code>
- <code title="get /global_ip_health_checks/{id}">client.globalIPHealthChecks.<a href="./src/resources/global-ip-health-checks.ts">retrieve</a>(id) -> GlobalIPHealthCheckRetrieveResponse</code>
- <code title="get /global_ip_health_checks">client.globalIPHealthChecks.<a href="./src/resources/global-ip-health-checks.ts">list</a>({ ...params }) -> GlobalIPHealthCheckListResponse</code>
- <code title="delete /global_ip_health_checks/{id}">client.globalIPHealthChecks.<a href="./src/resources/global-ip-health-checks.ts">delete</a>(id) -> GlobalIPHealthCheckDeleteResponse</code>

# GlobalIPLatency

Types:

- <code><a href="./src/resources/global-ip-latency.ts">GlobalIPLatencyRetrieveResponse</a></code>

Methods:

- <code title="get /global_ip_latency">client.globalIPLatency.<a href="./src/resources/global-ip-latency.ts">retrieve</a>({ ...params }) -> GlobalIPLatencyRetrieveResponse</code>

# GlobalIPProtocols

Types:

- <code><a href="./src/resources/global-ip-protocols.ts">GlobalIPProtocolListResponse</a></code>

Methods:

- <code title="get /global_ip_protocols">client.globalIPProtocols.<a href="./src/resources/global-ip-protocols.ts">list</a>() -> GlobalIPProtocolListResponse</code>

# GlobalIPUsage

Types:

- <code><a href="./src/resources/global-ip-usage.ts">GlobalIPUsageRetrieveResponse</a></code>

Methods:

- <code title="get /global_ip_usage">client.globalIPUsage.<a href="./src/resources/global-ip-usage.ts">retrieve</a>({ ...params }) -> GlobalIPUsageRetrieveResponse</code>

# GlobalIPs

Types:

- <code><a href="./src/resources/global-ips.ts">GlobalIPCreateResponse</a></code>
- <code><a href="./src/resources/global-ips.ts">GlobalIPRetrieveResponse</a></code>
- <code><a href="./src/resources/global-ips.ts">GlobalIPListResponse</a></code>
- <code><a href="./src/resources/global-ips.ts">GlobalIPDeleteResponse</a></code>

Methods:

- <code title="post /global_ips">client.globalIPs.<a href="./src/resources/global-ips.ts">create</a>({ ...params }) -> GlobalIPCreateResponse</code>
- <code title="get /global_ips/{id}">client.globalIPs.<a href="./src/resources/global-ips.ts">retrieve</a>(id) -> GlobalIPRetrieveResponse</code>
- <code title="get /global_ips">client.globalIPs.<a href="./src/resources/global-ips.ts">list</a>({ ...params }) -> GlobalIPListResponse</code>
- <code title="delete /global_ips/{id}">client.globalIPs.<a href="./src/resources/global-ips.ts">delete</a>(id) -> GlobalIPDeleteResponse</code>

# InboundChannels

Types:

- <code><a href="./src/resources/inbound-channels.ts">InboundChannelUpdateResponse</a></code>
- <code><a href="./src/resources/inbound-channels.ts">InboundChannelListResponse</a></code>

Methods:

- <code title="patch /inbound_channels">client.inboundChannels.<a href="./src/resources/inbound-channels.ts">update</a>({ ...params }) -> InboundChannelUpdateResponse</code>
- <code title="get /inbound_channels">client.inboundChannels.<a href="./src/resources/inbound-channels.ts">list</a>() -> InboundChannelListResponse</code>

# IntegrationSecrets

Types:

- <code><a href="./src/resources/integration-secrets.ts">IntegrationSecret</a></code>
- <code><a href="./src/resources/integration-secrets.ts">IntegrationSecretCreateResponse</a></code>
- <code><a href="./src/resources/integration-secrets.ts">IntegrationSecretListResponse</a></code>

Methods:

- <code title="post /integration_secrets">client.integrationSecrets.<a href="./src/resources/integration-secrets.ts">create</a>({ ...params }) -> IntegrationSecretCreateResponse</code>
- <code title="get /integration_secrets">client.integrationSecrets.<a href="./src/resources/integration-secrets.ts">list</a>({ ...params }) -> IntegrationSecretListResponse</code>
- <code title="delete /integration_secrets/{id}">client.integrationSecrets.<a href="./src/resources/integration-secrets.ts">delete</a>(id) -> void</code>

# InventoryCoverage

Types:

- <code><a href="./src/resources/inventory-coverage.ts">InventoryCoverageListResponse</a></code>

Methods:

- <code title="get /inventory_coverage">client.inventoryCoverage.<a href="./src/resources/inventory-coverage.ts">list</a>({ ...params }) -> InventoryCoverageListResponse</code>

# Invoices

Types:

- <code><a href="./src/resources/invoices.ts">InvoiceRetrieveResponse</a></code>
- <code><a href="./src/resources/invoices.ts">InvoiceListResponse</a></code>

Methods:

- <code title="get /invoices/{id}">client.invoices.<a href="./src/resources/invoices.ts">retrieve</a>(id, { ...params }) -> InvoiceRetrieveResponse</code>
- <code title="get /invoices">client.invoices.<a href="./src/resources/invoices.ts">list</a>({ ...params }) -> InvoiceListResponse</code>

# IPConnections

Types:

- <code><a href="./src/resources/ip-connections.ts">InboundIP</a></code>
- <code><a href="./src/resources/ip-connections.ts">IPConnection</a></code>
- <code><a href="./src/resources/ip-connections.ts">OutboundIP</a></code>
- <code><a href="./src/resources/ip-connections.ts">IPConnectionCreateResponse</a></code>
- <code><a href="./src/resources/ip-connections.ts">IPConnectionRetrieveResponse</a></code>
- <code><a href="./src/resources/ip-connections.ts">IPConnectionUpdateResponse</a></code>
- <code><a href="./src/resources/ip-connections.ts">IPConnectionListResponse</a></code>
- <code><a href="./src/resources/ip-connections.ts">IPConnectionDeleteResponse</a></code>

Methods:

- <code title="post /ip_connections">client.ipConnections.<a href="./src/resources/ip-connections.ts">create</a>({ ...params }) -> IPConnectionCreateResponse</code>
- <code title="get /ip_connections/{id}">client.ipConnections.<a href="./src/resources/ip-connections.ts">retrieve</a>(id) -> IPConnectionRetrieveResponse</code>
- <code title="patch /ip_connections/{id}">client.ipConnections.<a href="./src/resources/ip-connections.ts">update</a>(id, { ...params }) -> IPConnectionUpdateResponse</code>
- <code title="get /ip_connections">client.ipConnections.<a href="./src/resources/ip-connections.ts">list</a>({ ...params }) -> IPConnectionListResponse</code>
- <code title="delete /ip_connections/{id}">client.ipConnections.<a href="./src/resources/ip-connections.ts">delete</a>(id) -> IPConnectionDeleteResponse</code>

# IPs

Types:

- <code><a href="./src/resources/ips.ts">IP</a></code>
- <code><a href="./src/resources/ips.ts">IPCreateResponse</a></code>
- <code><a href="./src/resources/ips.ts">IPRetrieveResponse</a></code>
- <code><a href="./src/resources/ips.ts">IPUpdateResponse</a></code>
- <code><a href="./src/resources/ips.ts">IPListResponse</a></code>
- <code><a href="./src/resources/ips.ts">IPDeleteResponse</a></code>

Methods:

- <code title="post /ips">client.ips.<a href="./src/resources/ips.ts">create</a>({ ...params }) -> IPCreateResponse</code>
- <code title="get /ips/{id}">client.ips.<a href="./src/resources/ips.ts">retrieve</a>(id) -> IPRetrieveResponse</code>
- <code title="patch /ips/{id}">client.ips.<a href="./src/resources/ips.ts">update</a>(id, { ...params }) -> IPUpdateResponse</code>
- <code title="get /ips">client.ips.<a href="./src/resources/ips.ts">list</a>({ ...params }) -> IPListResponse</code>
- <code title="delete /ips/{id}">client.ips.<a href="./src/resources/ips.ts">delete</a>(id) -> IPDeleteResponse</code>

# LedgerBillingGroupReports

Types:

- <code><a href="./src/resources/ledger-billing-group-reports.ts">LedgerBillingGroupReport</a></code>
- <code><a href="./src/resources/ledger-billing-group-reports.ts">LedgerBillingGroupReportCreateResponse</a></code>
- <code><a href="./src/resources/ledger-billing-group-reports.ts">LedgerBillingGroupReportRetrieveResponse</a></code>

Methods:

- <code title="post /ledger_billing_group_reports">client.ledgerBillingGroupReports.<a href="./src/resources/ledger-billing-group-reports.ts">create</a>({ ...params }) -> LedgerBillingGroupReportCreateResponse</code>
- <code title="get /ledger_billing_group_reports/{id}">client.ledgerBillingGroupReports.<a href="./src/resources/ledger-billing-group-reports.ts">retrieve</a>(id) -> LedgerBillingGroupReportRetrieveResponse</code>

# List

Types:

- <code><a href="./src/resources/list.ts">ListRetrieveAllResponse</a></code>
- <code><a href="./src/resources/list.ts">ListRetrieveByZoneResponse</a></code>

Methods:

- <code title="get /list">client.list.<a href="./src/resources/list.ts">retrieveAll</a>() -> ListRetrieveAllResponse</code>
- <code title="get /list/{channel_zone_id}">client.list.<a href="./src/resources/list.ts">retrieveByZone</a>(channelZoneID) -> ListRetrieveByZoneResponse</code>

# ManagedAccounts

Types:

- <code><a href="./src/resources/managed-accounts/managed-accounts.ts">ManagedAccount</a></code>
- <code><a href="./src/resources/managed-accounts/managed-accounts.ts">ManagedAccountBalance</a></code>
- <code><a href="./src/resources/managed-accounts/managed-accounts.ts">ManagedAccountCreateResponse</a></code>
- <code><a href="./src/resources/managed-accounts/managed-accounts.ts">ManagedAccountRetrieveResponse</a></code>
- <code><a href="./src/resources/managed-accounts/managed-accounts.ts">ManagedAccountUpdateResponse</a></code>
- <code><a href="./src/resources/managed-accounts/managed-accounts.ts">ManagedAccountListResponse</a></code>
- <code><a href="./src/resources/managed-accounts/managed-accounts.ts">ManagedAccountGetAllocatableGlobalOutboundChannelsResponse</a></code>
- <code><a href="./src/resources/managed-accounts/managed-accounts.ts">ManagedAccountUpdateGlobalChannelLimitResponse</a></code>

Methods:

- <code title="post /managed_accounts">client.managedAccounts.<a href="./src/resources/managed-accounts/managed-accounts.ts">create</a>({ ...params }) -> ManagedAccountCreateResponse</code>
- <code title="get /managed_accounts/{id}">client.managedAccounts.<a href="./src/resources/managed-accounts/managed-accounts.ts">retrieve</a>(id) -> ManagedAccountRetrieveResponse</code>
- <code title="patch /managed_accounts/{id}">client.managedAccounts.<a href="./src/resources/managed-accounts/managed-accounts.ts">update</a>(id, { ...params }) -> ManagedAccountUpdateResponse</code>
- <code title="get /managed_accounts">client.managedAccounts.<a href="./src/resources/managed-accounts/managed-accounts.ts">list</a>({ ...params }) -> ManagedAccountListResponse</code>
- <code title="get /managed_accounts/allocatable_global_outbound_channels">client.managedAccounts.<a href="./src/resources/managed-accounts/managed-accounts.ts">getAllocatableGlobalOutboundChannels</a>() -> ManagedAccountGetAllocatableGlobalOutboundChannelsResponse</code>
- <code title="patch /managed_accounts/{id}/update_global_channel_limit">client.managedAccounts.<a href="./src/resources/managed-accounts/managed-accounts.ts">updateGlobalChannelLimit</a>(id, { ...params }) -> ManagedAccountUpdateGlobalChannelLimitResponse</code>

## Actions

Types:

- <code><a href="./src/resources/managed-accounts/actions.ts">ActionDisableResponse</a></code>
- <code><a href="./src/resources/managed-accounts/actions.ts">ActionEnableResponse</a></code>

Methods:

- <code title="post /managed_accounts/{id}/actions/disable">client.managedAccounts.actions.<a href="./src/resources/managed-accounts/actions.ts">disable</a>(id) -> ActionDisableResponse</code>
- <code title="post /managed_accounts/{id}/actions/enable">client.managedAccounts.actions.<a href="./src/resources/managed-accounts/actions.ts">enable</a>(id, { ...params }) -> ActionEnableResponse</code>

# Media

Types:

- <code><a href="./src/resources/media.ts">MediaResource</a></code>
- <code><a href="./src/resources/media.ts">MediaRetrieveResponse</a></code>
- <code><a href="./src/resources/media.ts">MediaUpdateResponse</a></code>
- <code><a href="./src/resources/media.ts">MediaListResponse</a></code>
- <code><a href="./src/resources/media.ts">MediaUploadResponse</a></code>

Methods:

- <code title="get /media/{media_name}">client.media.<a href="./src/resources/media.ts">retrieve</a>(mediaName) -> MediaRetrieveResponse</code>
- <code title="put /media/{media_name}">client.media.<a href="./src/resources/media.ts">update</a>(mediaName, { ...params }) -> MediaUpdateResponse</code>
- <code title="get /media">client.media.<a href="./src/resources/media.ts">list</a>({ ...params }) -> MediaListResponse</code>
- <code title="delete /media/{media_name}">client.media.<a href="./src/resources/media.ts">delete</a>(mediaName) -> void</code>
- <code title="get /media/{media_name}/download">client.media.<a href="./src/resources/media.ts">download</a>(mediaName) -> Response</code>
- <code title="post /media">client.media.<a href="./src/resources/media.ts">upload</a>({ ...params }) -> MediaUploadResponse</code>

# Messages

Types:

- <code><a href="./src/resources/messages/messages.ts">MessagingError</a></code>
- <code><a href="./src/resources/messages/messages.ts">OutboundMessagePayload</a></code>
- <code><a href="./src/resources/messages/messages.ts">MessageRetrieveResponse</a></code>
- <code><a href="./src/resources/messages/messages.ts">MessageCancelScheduledResponse</a></code>
- <code><a href="./src/resources/messages/messages.ts">MessageScheduleResponse</a></code>
- <code><a href="./src/resources/messages/messages.ts">MessageSendResponse</a></code>
- <code><a href="./src/resources/messages/messages.ts">MessageSendGroupMmsResponse</a></code>
- <code><a href="./src/resources/messages/messages.ts">MessageSendLongCodeResponse</a></code>
- <code><a href="./src/resources/messages/messages.ts">MessageSendNumberPoolResponse</a></code>
- <code><a href="./src/resources/messages/messages.ts">MessageSendShortCodeResponse</a></code>

Methods:

- <code title="get /messages/{id}">client.messages.<a href="./src/resources/messages/messages.ts">retrieve</a>(id) -> MessageRetrieveResponse</code>
- <code title="delete /messages/{id}">client.messages.<a href="./src/resources/messages/messages.ts">cancelScheduled</a>(id) -> MessageCancelScheduledResponse</code>
- <code title="post /messages/schedule">client.messages.<a href="./src/resources/messages/messages.ts">schedule</a>({ ...params }) -> MessageScheduleResponse</code>
- <code title="post /messages">client.messages.<a href="./src/resources/messages/messages.ts">send</a>({ ...params }) -> MessageSendResponse</code>
- <code title="post /messages/group_mms">client.messages.<a href="./src/resources/messages/messages.ts">sendGroupMms</a>({ ...params }) -> MessageSendGroupMmsResponse</code>
- <code title="post /messages/long_code">client.messages.<a href="./src/resources/messages/messages.ts">sendLongCode</a>({ ...params }) -> MessageSendLongCodeResponse</code>
- <code title="post /messages/number_pool">client.messages.<a href="./src/resources/messages/messages.ts">sendNumberPool</a>({ ...params }) -> MessageSendNumberPoolResponse</code>
- <code title="post /messages/short_code">client.messages.<a href="./src/resources/messages/messages.ts">sendShortCode</a>({ ...params }) -> MessageSendShortCodeResponse</code>

## Rcs

Types:

- <code><a href="./src/resources/messages/rcs.ts">RcGenerateDeeplinkResponse</a></code>

Methods:

- <code title="get /messages/rcs/deeplinks/{agent_id}">client.messages.rcs.<a href="./src/resources/messages/rcs.ts">generateDeeplink</a>(agentID, { ...params }) -> RcGenerateDeeplinkResponse</code>

# Messaging

## Rcs

Types:

- <code><a href="./src/resources/messaging/rcs/rcs.ts">RcsCapabilities</a></code>
- <code><a href="./src/resources/messaging/rcs/rcs.ts">RcInviteTestNumberResponse</a></code>
- <code><a href="./src/resources/messaging/rcs/rcs.ts">RcListBulkCapabilitiesResponse</a></code>
- <code><a href="./src/resources/messaging/rcs/rcs.ts">RcRetrieveCapabilitiesResponse</a></code>

Methods:

- <code title="put /messaging/rcs/test_number_invite/{id}/{phone_number}">client.messaging.rcs.<a href="./src/resources/messaging/rcs/rcs.ts">inviteTestNumber</a>(phoneNumber, { ...params }) -> RcInviteTestNumberResponse</code>
- <code title="post /messaging/rcs/bulk_capabilities">client.messaging.rcs.<a href="./src/resources/messaging/rcs/rcs.ts">listBulkCapabilities</a>({ ...params }) -> RcListBulkCapabilitiesResponse</code>
- <code title="get /messaging/rcs/capabilities/{agent_id}/{phone_number}">client.messaging.rcs.<a href="./src/resources/messaging/rcs/rcs.ts">retrieveCapabilities</a>(phoneNumber, { ...params }) -> RcRetrieveCapabilitiesResponse</code>

### Agents

Types:

- <code><a href="./src/resources/messaging/rcs/agents.ts">AgentListResponse</a></code>

Methods:

- <code title="get /messaging/rcs/agents/{id}">client.messaging.rcs.agents.<a href="./src/resources/messaging/rcs/agents.ts">retrieve</a>(id) -> RcsAgentResponse</code>
- <code title="patch /messaging/rcs/agents/{id}">client.messaging.rcs.agents.<a href="./src/resources/messaging/rcs/agents.ts">update</a>(id, { ...params }) -> RcsAgentResponse</code>
- <code title="get /messaging/rcs/agents">client.messaging.rcs.agents.<a href="./src/resources/messaging/rcs/agents.ts">list</a>({ ...params }) -> AgentListResponse</code>

# MessagingHostedNumberOrders

Types:

- <code><a href="./src/resources/messaging-hosted-number-orders/messaging-hosted-number-orders.ts">MessagingHostedNumberOrderCreateResponse</a></code>
- <code><a href="./src/resources/messaging-hosted-number-orders/messaging-hosted-number-orders.ts">MessagingHostedNumberOrderRetrieveResponse</a></code>
- <code><a href="./src/resources/messaging-hosted-number-orders/messaging-hosted-number-orders.ts">MessagingHostedNumberOrderListResponse</a></code>
- <code><a href="./src/resources/messaging-hosted-number-orders/messaging-hosted-number-orders.ts">MessagingHostedNumberOrderDeleteResponse</a></code>
- <code><a href="./src/resources/messaging-hosted-number-orders/messaging-hosted-number-orders.ts">MessagingHostedNumberOrderCheckEligibilityResponse</a></code>
- <code><a href="./src/resources/messaging-hosted-number-orders/messaging-hosted-number-orders.ts">MessagingHostedNumberOrderCreateVerificationCodesResponse</a></code>
- <code><a href="./src/resources/messaging-hosted-number-orders/messaging-hosted-number-orders.ts">MessagingHostedNumberOrderValidateCodesResponse</a></code>

Methods:

- <code title="post /messaging_hosted_number_orders">client.messagingHostedNumberOrders.<a href="./src/resources/messaging-hosted-number-orders/messaging-hosted-number-orders.ts">create</a>({ ...params }) -> MessagingHostedNumberOrderCreateResponse</code>
- <code title="get /messaging_hosted_number_orders/{id}">client.messagingHostedNumberOrders.<a href="./src/resources/messaging-hosted-number-orders/messaging-hosted-number-orders.ts">retrieve</a>(id) -> MessagingHostedNumberOrderRetrieveResponse</code>
- <code title="get /messaging_hosted_number_orders">client.messagingHostedNumberOrders.<a href="./src/resources/messaging-hosted-number-orders/messaging-hosted-number-orders.ts">list</a>({ ...params }) -> MessagingHostedNumberOrderListResponse</code>
- <code title="delete /messaging_hosted_number_orders/{id}">client.messagingHostedNumberOrders.<a href="./src/resources/messaging-hosted-number-orders/messaging-hosted-number-orders.ts">delete</a>(id) -> MessagingHostedNumberOrderDeleteResponse</code>
- <code title="post /messaging_hosted_number_orders/eligibility_numbers_check">client.messagingHostedNumberOrders.<a href="./src/resources/messaging-hosted-number-orders/messaging-hosted-number-orders.ts">checkEligibility</a>({ ...params }) -> MessagingHostedNumberOrderCheckEligibilityResponse</code>
- <code title="post /messaging_hosted_number_orders/{id}/verification_codes">client.messagingHostedNumberOrders.<a href="./src/resources/messaging-hosted-number-orders/messaging-hosted-number-orders.ts">createVerificationCodes</a>(id, { ...params }) -> MessagingHostedNumberOrderCreateVerificationCodesResponse</code>
- <code title="post /messaging_hosted_number_orders/{id}/validation_codes">client.messagingHostedNumberOrders.<a href="./src/resources/messaging-hosted-number-orders/messaging-hosted-number-orders.ts">validateCodes</a>(id, { ...params }) -> MessagingHostedNumberOrderValidateCodesResponse</code>

## Actions

Types:

- <code><a href="./src/resources/messaging-hosted-number-orders/actions.ts">ActionUploadFileResponse</a></code>

Methods:

- <code title="post /messaging_hosted_number_orders/{id}/actions/file_upload">client.messagingHostedNumberOrders.actions.<a href="./src/resources/messaging-hosted-number-orders/actions.ts">uploadFile</a>(id, { ...params }) -> ActionUploadFileResponse</code>

# MessagingHostedNumbers

Types:

- <code><a href="./src/resources/messaging-hosted-numbers.ts">MessagingHostedNumberDeleteResponse</a></code>

Methods:

- <code title="delete /messaging_hosted_numbers/{id}">client.messagingHostedNumbers.<a href="./src/resources/messaging-hosted-numbers.ts">delete</a>(id) -> MessagingHostedNumberDeleteResponse</code>

# MessagingNumbersBulkUpdates

Types:

- <code><a href="./src/resources/messaging-numbers-bulk-updates.ts">MessagingNumbersBulkUpdateCreateResponse</a></code>
- <code><a href="./src/resources/messaging-numbers-bulk-updates.ts">MessagingNumbersBulkUpdateRetrieveResponse</a></code>

Methods:

- <code title="post /messaging_numbers_bulk_updates">client.messagingNumbersBulkUpdates.<a href="./src/resources/messaging-numbers-bulk-updates.ts">create</a>({ ...params }) -> MessagingNumbersBulkUpdateCreateResponse</code>
- <code title="get /messaging_numbers_bulk_updates/{order_id}">client.messagingNumbersBulkUpdates.<a href="./src/resources/messaging-numbers-bulk-updates.ts">retrieve</a>(orderID) -> MessagingNumbersBulkUpdateRetrieveResponse</code>

# MessagingOptouts

Types:

- <code><a href="./src/resources/messaging-optouts.ts">MessagingOptoutListResponse</a></code>

Methods:

- <code title="get /messaging_optouts">client.messagingOptouts.<a href="./src/resources/messaging-optouts.ts">list</a>({ ...params }) -> MessagingOptoutListResponse</code>

# MessagingProfiles

Types:

- <code><a href="./src/resources/messaging-profiles/messaging-profiles.ts">MessagingProfile</a></code>
- <code><a href="./src/resources/messaging-profiles/messaging-profiles.ts">NumberPoolSettings</a></code>
- <code><a href="./src/resources/messaging-profiles/messaging-profiles.ts">URLShortenerSettings</a></code>
- <code><a href="./src/resources/messaging-profiles/messaging-profiles.ts">MessagingProfileCreateResponse</a></code>
- <code><a href="./src/resources/messaging-profiles/messaging-profiles.ts">MessagingProfileRetrieveResponse</a></code>
- <code><a href="./src/resources/messaging-profiles/messaging-profiles.ts">MessagingProfileUpdateResponse</a></code>
- <code><a href="./src/resources/messaging-profiles/messaging-profiles.ts">MessagingProfileListResponse</a></code>
- <code><a href="./src/resources/messaging-profiles/messaging-profiles.ts">MessagingProfileDeleteResponse</a></code>
- <code><a href="./src/resources/messaging-profiles/messaging-profiles.ts">MessagingProfileListPhoneNumbersResponse</a></code>
- <code><a href="./src/resources/messaging-profiles/messaging-profiles.ts">MessagingProfileListShortCodesResponse</a></code>

Methods:

- <code title="post /messaging_profiles">client.messagingProfiles.<a href="./src/resources/messaging-profiles/messaging-profiles.ts">create</a>({ ...params }) -> MessagingProfileCreateResponse</code>
- <code title="get /messaging_profiles/{id}">client.messagingProfiles.<a href="./src/resources/messaging-profiles/messaging-profiles.ts">retrieve</a>(id) -> MessagingProfileRetrieveResponse</code>
- <code title="patch /messaging_profiles/{id}">client.messagingProfiles.<a href="./src/resources/messaging-profiles/messaging-profiles.ts">update</a>(id, { ...params }) -> MessagingProfileUpdateResponse</code>
- <code title="get /messaging_profiles">client.messagingProfiles.<a href="./src/resources/messaging-profiles/messaging-profiles.ts">list</a>({ ...params }) -> MessagingProfileListResponse</code>
- <code title="delete /messaging_profiles/{id}">client.messagingProfiles.<a href="./src/resources/messaging-profiles/messaging-profiles.ts">delete</a>(id) -> MessagingProfileDeleteResponse</code>
- <code title="get /messaging_profiles/{id}/phone_numbers">client.messagingProfiles.<a href="./src/resources/messaging-profiles/messaging-profiles.ts">listPhoneNumbers</a>(id, { ...params }) -> MessagingProfileListPhoneNumbersResponse</code>
- <code title="get /messaging_profiles/{id}/short_codes">client.messagingProfiles.<a href="./src/resources/messaging-profiles/messaging-profiles.ts">listShortCodes</a>(id, { ...params }) -> MessagingProfileListShortCodesResponse</code>

## AutorespConfigs

Types:

- <code><a href="./src/resources/messaging-profiles/autoresp-configs.ts">AutoRespConfig</a></code>
- <code><a href="./src/resources/messaging-profiles/autoresp-configs.ts">AutoRespConfigCreate</a></code>
- <code><a href="./src/resources/messaging-profiles/autoresp-configs.ts">AutoRespConfigResponse</a></code>
- <code><a href="./src/resources/messaging-profiles/autoresp-configs.ts">AutorespConfigListResponse</a></code>
- <code><a href="./src/resources/messaging-profiles/autoresp-configs.ts">AutorespConfigDeleteResponse</a></code>

Methods:

- <code title="post /messaging_profiles/{profile_id}/autoresp_configs">client.messagingProfiles.autorespConfigs.<a href="./src/resources/messaging-profiles/autoresp-configs.ts">create</a>(profileID, { ...params }) -> AutoRespConfigResponse</code>
- <code title="get /messaging_profiles/{profile_id}/autoresp_configs/{autoresp_cfg_id}">client.messagingProfiles.autorespConfigs.<a href="./src/resources/messaging-profiles/autoresp-configs.ts">retrieve</a>(autorespCfgID, { ...params }) -> AutoRespConfigResponse</code>
- <code title="put /messaging_profiles/{profile_id}/autoresp_configs/{autoresp_cfg_id}">client.messagingProfiles.autorespConfigs.<a href="./src/resources/messaging-profiles/autoresp-configs.ts">update</a>(autorespCfgID, { ...params }) -> AutoRespConfigResponse</code>
- <code title="get /messaging_profiles/{profile_id}/autoresp_configs">client.messagingProfiles.autorespConfigs.<a href="./src/resources/messaging-profiles/autoresp-configs.ts">list</a>(profileID, { ...params }) -> AutorespConfigListResponse</code>
- <code title="delete /messaging_profiles/{profile_id}/autoresp_configs/{autoresp_cfg_id}">client.messagingProfiles.autorespConfigs.<a href="./src/resources/messaging-profiles/autoresp-configs.ts">delete</a>(autorespCfgID, { ...params }) -> unknown</code>

# MessagingTollfree

## Verification

### Requests

Types:

- <code><a href="./src/resources/messaging-tollfree/verification/requests.ts">TfPhoneNumber</a></code>
- <code><a href="./src/resources/messaging-tollfree/verification/requests.ts">TfVerificationRequest</a></code>
- <code><a href="./src/resources/messaging-tollfree/verification/requests.ts">TfVerificationStatus</a></code>
- <code><a href="./src/resources/messaging-tollfree/verification/requests.ts">URL</a></code>
- <code><a href="./src/resources/messaging-tollfree/verification/requests.ts">UseCaseCategories</a></code>
- <code><a href="./src/resources/messaging-tollfree/verification/requests.ts">VerificationRequestEgress</a></code>
- <code><a href="./src/resources/messaging-tollfree/verification/requests.ts">VerificationRequestStatus</a></code>
- <code><a href="./src/resources/messaging-tollfree/verification/requests.ts">Volume</a></code>
- <code><a href="./src/resources/messaging-tollfree/verification/requests.ts">RequestListResponse</a></code>
- <code><a href="./src/resources/messaging-tollfree/verification/requests.ts">RequestDeleteResponse</a></code>

Methods:

- <code title="post /messaging_tollfree/verification/requests">client.messagingTollfree.verification.requests.<a href="./src/resources/messaging-tollfree/verification/requests.ts">create</a>({ ...params }) -> VerificationRequestEgress</code>
- <code title="get /messaging_tollfree/verification/requests/{id}">client.messagingTollfree.verification.requests.<a href="./src/resources/messaging-tollfree/verification/requests.ts">retrieve</a>(id) -> VerificationRequestStatus</code>
- <code title="patch /messaging_tollfree/verification/requests/{id}">client.messagingTollfree.verification.requests.<a href="./src/resources/messaging-tollfree/verification/requests.ts">update</a>(id, { ...params }) -> VerificationRequestEgress</code>
- <code title="get /messaging_tollfree/verification/requests">client.messagingTollfree.verification.requests.<a href="./src/resources/messaging-tollfree/verification/requests.ts">list</a>({ ...params }) -> RequestListResponse</code>
- <code title="delete /messaging_tollfree/verification/requests/{id}">client.messagingTollfree.verification.requests.<a href="./src/resources/messaging-tollfree/verification/requests.ts">delete</a>(id) -> unknown</code>

# MessagingURLDomains

Types:

- <code><a href="./src/resources/messaging-url-domains.ts">MessagingURLDomainListResponse</a></code>

Methods:

- <code title="get /messaging_url_domains">client.messagingURLDomains.<a href="./src/resources/messaging-url-domains.ts">list</a>({ ...params }) -> MessagingURLDomainListResponse</code>

# Messsages

Types:

- <code><a href="./src/resources/messsages.ts">RcsAgentMessage</a></code>
- <code><a href="./src/resources/messsages.ts">RcsCardContent</a></code>
- <code><a href="./src/resources/messsages.ts">RcsContentInfo</a></code>
- <code><a href="./src/resources/messsages.ts">RcsSuggestion</a></code>
- <code><a href="./src/resources/messsages.ts">MesssageRcsResponse</a></code>

Methods:

- <code title="post /messsages/rcs">client.messsages.<a href="./src/resources/messsages.ts">rcs</a>({ ...params }) -> MesssageRcsResponse</code>

# MobileNetworkOperators

Types:

- <code><a href="./src/resources/mobile-network-operators.ts">MobileNetworkOperatorListResponse</a></code>

Methods:

- <code title="get /mobile_network_operators">client.mobileNetworkOperators.<a href="./src/resources/mobile-network-operators.ts">list</a>({ ...params }) -> MobileNetworkOperatorListResponse</code>

# MobilePushCredentials

Types:

- <code><a href="./src/resources/mobile-push-credentials.ts">PushCredential</a></code>
- <code><a href="./src/resources/mobile-push-credentials.ts">PushCredentialResponse</a></code>
- <code><a href="./src/resources/mobile-push-credentials.ts">MobilePushCredentialListResponse</a></code>

Methods:

- <code title="post /mobile_push_credentials">client.mobilePushCredentials.<a href="./src/resources/mobile-push-credentials.ts">create</a>({ ...params }) -> PushCredentialResponse</code>
- <code title="get /mobile_push_credentials/{push_credential_id}">client.mobilePushCredentials.<a href="./src/resources/mobile-push-credentials.ts">retrieve</a>(pushCredentialID) -> PushCredentialResponse</code>
- <code title="get /mobile_push_credentials">client.mobilePushCredentials.<a href="./src/resources/mobile-push-credentials.ts">list</a>({ ...params }) -> MobilePushCredentialListResponse</code>
- <code title="delete /mobile_push_credentials/{push_credential_id}">client.mobilePushCredentials.<a href="./src/resources/mobile-push-credentials.ts">delete</a>(pushCredentialID) -> void</code>

# NetworkCoverage

Types:

- <code><a href="./src/resources/network-coverage.ts">AvailableService</a></code>
- <code><a href="./src/resources/network-coverage.ts">NetworkCoverageListResponse</a></code>

Methods:

- <code title="get /network_coverage">client.networkCoverage.<a href="./src/resources/network-coverage.ts">list</a>({ ...params }) -> NetworkCoverageListResponse</code>

# Networks

Types:

- <code><a href="./src/resources/networks/networks.ts">InterfaceStatus</a></code>
- <code><a href="./src/resources/networks/networks.ts">NetworkCreate</a></code>
- <code><a href="./src/resources/networks/networks.ts">NetworkCreateResponse</a></code>
- <code><a href="./src/resources/networks/networks.ts">NetworkRetrieveResponse</a></code>
- <code><a href="./src/resources/networks/networks.ts">NetworkUpdateResponse</a></code>
- <code><a href="./src/resources/networks/networks.ts">NetworkListResponse</a></code>
- <code><a href="./src/resources/networks/networks.ts">NetworkDeleteResponse</a></code>
- <code><a href="./src/resources/networks/networks.ts">NetworkListInterfacesResponse</a></code>

Methods:

- <code title="post /networks">client.networks.<a href="./src/resources/networks/networks.ts">create</a>({ ...params }) -> NetworkCreateResponse</code>
- <code title="get /networks/{id}">client.networks.<a href="./src/resources/networks/networks.ts">retrieve</a>(id) -> NetworkRetrieveResponse</code>
- <code title="patch /networks/{id}">client.networks.<a href="./src/resources/networks/networks.ts">update</a>(id, { ...params }) -> NetworkUpdateResponse</code>
- <code title="get /networks">client.networks.<a href="./src/resources/networks/networks.ts">list</a>({ ...params }) -> NetworkListResponse</code>
- <code title="delete /networks/{id}">client.networks.<a href="./src/resources/networks/networks.ts">delete</a>(id) -> NetworkDeleteResponse</code>
- <code title="get /networks/{id}/network_interfaces">client.networks.<a href="./src/resources/networks/networks.ts">listInterfaces</a>(id, { ...params }) -> NetworkListInterfacesResponse</code>

## DefaultGateway

Types:

- <code><a href="./src/resources/networks/default-gateway.ts">DefaultGatewayCreateResponse</a></code>
- <code><a href="./src/resources/networks/default-gateway.ts">DefaultGatewayRetrieveResponse</a></code>
- <code><a href="./src/resources/networks/default-gateway.ts">DefaultGatewayDeleteResponse</a></code>

Methods:

- <code title="post /networks/{id}/default_gateway">client.networks.defaultGateway.<a href="./src/resources/networks/default-gateway.ts">create</a>(id, { ...params }) -> DefaultGatewayCreateResponse</code>
- <code title="get /networks/{id}/default_gateway">client.networks.defaultGateway.<a href="./src/resources/networks/default-gateway.ts">retrieve</a>(id) -> DefaultGatewayRetrieveResponse</code>
- <code title="delete /networks/{id}/default_gateway">client.networks.defaultGateway.<a href="./src/resources/networks/default-gateway.ts">delete</a>(id) -> DefaultGatewayDeleteResponse</code>

# NotificationChannels

Types:

- <code><a href="./src/resources/notification-channels.ts">NotificationChannel</a></code>
- <code><a href="./src/resources/notification-channels.ts">NotificationChannelCreateResponse</a></code>
- <code><a href="./src/resources/notification-channels.ts">NotificationChannelRetrieveResponse</a></code>
- <code><a href="./src/resources/notification-channels.ts">NotificationChannelUpdateResponse</a></code>
- <code><a href="./src/resources/notification-channels.ts">NotificationChannelListResponse</a></code>
- <code><a href="./src/resources/notification-channels.ts">NotificationChannelDeleteResponse</a></code>

Methods:

- <code title="post /notification_channels">client.notificationChannels.<a href="./src/resources/notification-channels.ts">create</a>({ ...params }) -> NotificationChannelCreateResponse</code>
- <code title="get /notification_channels/{id}">client.notificationChannels.<a href="./src/resources/notification-channels.ts">retrieve</a>(id) -> NotificationChannelRetrieveResponse</code>
- <code title="patch /notification_channels/{id}">client.notificationChannels.<a href="./src/resources/notification-channels.ts">update</a>(id, { ...params }) -> NotificationChannelUpdateResponse</code>
- <code title="get /notification_channels">client.notificationChannels.<a href="./src/resources/notification-channels.ts">list</a>({ ...params }) -> NotificationChannelListResponse</code>
- <code title="delete /notification_channels/{id}">client.notificationChannels.<a href="./src/resources/notification-channels.ts">delete</a>(id) -> NotificationChannelDeleteResponse</code>

# NotificationEventConditions

Types:

- <code><a href="./src/resources/notification-event-conditions.ts">NotificationEventConditionListResponse</a></code>

Methods:

- <code title="get /notification_event_conditions">client.notificationEventConditions.<a href="./src/resources/notification-event-conditions.ts">list</a>({ ...params }) -> NotificationEventConditionListResponse</code>

# NotificationEvents

Types:

- <code><a href="./src/resources/notification-events.ts">NotificationEventListResponse</a></code>

Methods:

- <code title="get /notification_events">client.notificationEvents.<a href="./src/resources/notification-events.ts">list</a>({ ...params }) -> NotificationEventListResponse</code>

# NotificationProfiles

Types:

- <code><a href="./src/resources/notification-profiles.ts">NotificationProfile</a></code>
- <code><a href="./src/resources/notification-profiles.ts">NotificationProfileCreateResponse</a></code>
- <code><a href="./src/resources/notification-profiles.ts">NotificationProfileRetrieveResponse</a></code>
- <code><a href="./src/resources/notification-profiles.ts">NotificationProfileUpdateResponse</a></code>
- <code><a href="./src/resources/notification-profiles.ts">NotificationProfileListResponse</a></code>
- <code><a href="./src/resources/notification-profiles.ts">NotificationProfileDeleteResponse</a></code>

Methods:

- <code title="post /notification_profiles">client.notificationProfiles.<a href="./src/resources/notification-profiles.ts">create</a>({ ...params }) -> NotificationProfileCreateResponse</code>
- <code title="get /notification_profiles/{id}">client.notificationProfiles.<a href="./src/resources/notification-profiles.ts">retrieve</a>(id) -> NotificationProfileRetrieveResponse</code>
- <code title="patch /notification_profiles/{id}">client.notificationProfiles.<a href="./src/resources/notification-profiles.ts">update</a>(id, { ...params }) -> NotificationProfileUpdateResponse</code>
- <code title="get /notification_profiles">client.notificationProfiles.<a href="./src/resources/notification-profiles.ts">list</a>({ ...params }) -> NotificationProfileListResponse</code>
- <code title="delete /notification_profiles/{id}">client.notificationProfiles.<a href="./src/resources/notification-profiles.ts">delete</a>(id) -> NotificationProfileDeleteResponse</code>

# NotificationSettings

Types:

- <code><a href="./src/resources/notification-settings.ts">NotificationSetting</a></code>
- <code><a href="./src/resources/notification-settings.ts">NotificationSettingCreateResponse</a></code>
- <code><a href="./src/resources/notification-settings.ts">NotificationSettingRetrieveResponse</a></code>
- <code><a href="./src/resources/notification-settings.ts">NotificationSettingListResponse</a></code>
- <code><a href="./src/resources/notification-settings.ts">NotificationSettingDeleteResponse</a></code>

Methods:

- <code title="post /notification_settings">client.notificationSettings.<a href="./src/resources/notification-settings.ts">create</a>({ ...params }) -> NotificationSettingCreateResponse</code>
- <code title="get /notification_settings/{id}">client.notificationSettings.<a href="./src/resources/notification-settings.ts">retrieve</a>(id) -> NotificationSettingRetrieveResponse</code>
- <code title="get /notification_settings">client.notificationSettings.<a href="./src/resources/notification-settings.ts">list</a>({ ...params }) -> NotificationSettingListResponse</code>
- <code title="delete /notification_settings/{id}">client.notificationSettings.<a href="./src/resources/notification-settings.ts">delete</a>(id) -> NotificationSettingDeleteResponse</code>

# NumberBlockOrders

Types:

- <code><a href="./src/resources/number-block-orders.ts">NumberBlockOrder</a></code>
- <code><a href="./src/resources/number-block-orders.ts">NumberBlockOrderCreateResponse</a></code>
- <code><a href="./src/resources/number-block-orders.ts">NumberBlockOrderRetrieveResponse</a></code>
- <code><a href="./src/resources/number-block-orders.ts">NumberBlockOrderListResponse</a></code>

Methods:

- <code title="post /number_block_orders">client.numberBlockOrders.<a href="./src/resources/number-block-orders.ts">create</a>({ ...params }) -> NumberBlockOrderCreateResponse</code>
- <code title="get /number_block_orders/{number_block_order_id}">client.numberBlockOrders.<a href="./src/resources/number-block-orders.ts">retrieve</a>(numberBlockOrderID) -> NumberBlockOrderRetrieveResponse</code>
- <code title="get /number_block_orders">client.numberBlockOrders.<a href="./src/resources/number-block-orders.ts">list</a>({ ...params }) -> NumberBlockOrderListResponse</code>

# NumberLookup

Types:

- <code><a href="./src/resources/number-lookup.ts">NumberLookupRetrieveResponse</a></code>

Methods:

- <code title="get /number_lookup/{phone_number}">client.numberLookup.<a href="./src/resources/number-lookup.ts">retrieve</a>(phoneNumber, { ...params }) -> NumberLookupRetrieveResponse</code>

# NumberOrderPhoneNumbers

Types:

- <code><a href="./src/resources/number-order-phone-numbers.ts">NumberOrderPhoneNumber</a></code>
- <code><a href="./src/resources/number-order-phone-numbers.ts">UpdateRegulatoryRequirement</a></code>
- <code><a href="./src/resources/number-order-phone-numbers.ts">NumberOrderPhoneNumberRetrieveResponse</a></code>
- <code><a href="./src/resources/number-order-phone-numbers.ts">NumberOrderPhoneNumberListResponse</a></code>
- <code><a href="./src/resources/number-order-phone-numbers.ts">NumberOrderPhoneNumberUpdateRequirementGroupResponse</a></code>
- <code><a href="./src/resources/number-order-phone-numbers.ts">NumberOrderPhoneNumberUpdateRequirementsResponse</a></code>

Methods:

- <code title="get /number_order_phone_numbers/{number_order_phone_number_id}">client.numberOrderPhoneNumbers.<a href="./src/resources/number-order-phone-numbers.ts">retrieve</a>(numberOrderPhoneNumberID) -> NumberOrderPhoneNumberRetrieveResponse</code>
- <code title="get /number_order_phone_numbers">client.numberOrderPhoneNumbers.<a href="./src/resources/number-order-phone-numbers.ts">list</a>({ ...params }) -> NumberOrderPhoneNumberListResponse</code>
- <code title="post /number_order_phone_numbers/{id}/requirement_group">client.numberOrderPhoneNumbers.<a href="./src/resources/number-order-phone-numbers.ts">updateRequirementGroup</a>(id, { ...params }) -> NumberOrderPhoneNumberUpdateRequirementGroupResponse</code>
- <code title="patch /number_order_phone_numbers/{number_order_phone_number_id}">client.numberOrderPhoneNumbers.<a href="./src/resources/number-order-phone-numbers.ts">updateRequirements</a>(numberOrderPhoneNumberID, { ...params }) -> NumberOrderPhoneNumberUpdateRequirementsResponse</code>

# NumberOrders

Types:

- <code><a href="./src/resources/number-orders.ts">NumberOrderWithPhoneNumbers</a></code>
- <code><a href="./src/resources/number-orders.ts">PhoneNumber</a></code>
- <code><a href="./src/resources/number-orders.ts">NumberOrderCreateResponse</a></code>
- <code><a href="./src/resources/number-orders.ts">NumberOrderRetrieveResponse</a></code>
- <code><a href="./src/resources/number-orders.ts">NumberOrderUpdateResponse</a></code>
- <code><a href="./src/resources/number-orders.ts">NumberOrderListResponse</a></code>

Methods:

- <code title="post /number_orders">client.numberOrders.<a href="./src/resources/number-orders.ts">create</a>({ ...params }) -> NumberOrderCreateResponse</code>
- <code title="get /number_orders/{number_order_id}">client.numberOrders.<a href="./src/resources/number-orders.ts">retrieve</a>(numberOrderID) -> NumberOrderRetrieveResponse</code>
- <code title="patch /number_orders/{number_order_id}">client.numberOrders.<a href="./src/resources/number-orders.ts">update</a>(numberOrderID, { ...params }) -> NumberOrderUpdateResponse</code>
- <code title="get /number_orders">client.numberOrders.<a href="./src/resources/number-orders.ts">list</a>({ ...params }) -> NumberOrderListResponse</code>

# NumberReservations

Types:

- <code><a href="./src/resources/number-reservations/number-reservations.ts">NumberReservation</a></code>
- <code><a href="./src/resources/number-reservations/number-reservations.ts">ReservedPhoneNumber</a></code>
- <code><a href="./src/resources/number-reservations/number-reservations.ts">NumberReservationCreateResponse</a></code>
- <code><a href="./src/resources/number-reservations/number-reservations.ts">NumberReservationRetrieveResponse</a></code>
- <code><a href="./src/resources/number-reservations/number-reservations.ts">NumberReservationListResponse</a></code>

Methods:

- <code title="post /number_reservations">client.numberReservations.<a href="./src/resources/number-reservations/number-reservations.ts">create</a>({ ...params }) -> NumberReservationCreateResponse</code>
- <code title="get /number_reservations/{number_reservation_id}">client.numberReservations.<a href="./src/resources/number-reservations/number-reservations.ts">retrieve</a>(numberReservationID) -> NumberReservationRetrieveResponse</code>
- <code title="get /number_reservations">client.numberReservations.<a href="./src/resources/number-reservations/number-reservations.ts">list</a>({ ...params }) -> NumberReservationListResponse</code>

## Actions

Types:

- <code><a href="./src/resources/number-reservations/actions.ts">ActionExtendResponse</a></code>

Methods:

- <code title="post /number_reservations/{number_reservation_id}/actions/extend">client.numberReservations.actions.<a href="./src/resources/number-reservations/actions.ts">extend</a>(numberReservationID) -> ActionExtendResponse</code>

# NumbersFeatures

Types:

- <code><a href="./src/resources/numbers-features.ts">NumbersFeatureCreateResponse</a></code>

Methods:

- <code title="post /numbers_features">client.numbersFeatures.<a href="./src/resources/numbers-features.ts">create</a>({ ...params }) -> NumbersFeatureCreateResponse</code>

# OperatorConnect

## Actions

Types:

- <code><a href="./src/resources/operator-connect/actions.ts">ActionRefreshResponse</a></code>

Methods:

- <code title="post /operator_connect/actions/refresh">client.operatorConnect.actions.<a href="./src/resources/operator-connect/actions.ts">refresh</a>() -> ActionRefreshResponse</code>

# OtaUpdates

Types:

- <code><a href="./src/resources/ota-updates.ts">OtaUpdateRetrieveResponse</a></code>
- <code><a href="./src/resources/ota-updates.ts">OtaUpdateListResponse</a></code>

Methods:

- <code title="get /ota_updates/{id}">client.otaUpdates.<a href="./src/resources/ota-updates.ts">retrieve</a>(id) -> OtaUpdateRetrieveResponse</code>
- <code title="get /ota_updates">client.otaUpdates.<a href="./src/resources/ota-updates.ts">list</a>({ ...params }) -> OtaUpdateListResponse</code>

# OutboundVoiceProfiles

Types:

- <code><a href="./src/resources/outbound-voice-profiles.ts">OutboundCallRecording</a></code>
- <code><a href="./src/resources/outbound-voice-profiles.ts">OutboundVoiceProfile</a></code>
- <code><a href="./src/resources/outbound-voice-profiles.ts">ServicePlan</a></code>
- <code><a href="./src/resources/outbound-voice-profiles.ts">TrafficType</a></code>
- <code><a href="./src/resources/outbound-voice-profiles.ts">UsagePaymentMethod</a></code>
- <code><a href="./src/resources/outbound-voice-profiles.ts">OutboundVoiceProfileCreateResponse</a></code>
- <code><a href="./src/resources/outbound-voice-profiles.ts">OutboundVoiceProfileRetrieveResponse</a></code>
- <code><a href="./src/resources/outbound-voice-profiles.ts">OutboundVoiceProfileUpdateResponse</a></code>
- <code><a href="./src/resources/outbound-voice-profiles.ts">OutboundVoiceProfileListResponse</a></code>
- <code><a href="./src/resources/outbound-voice-profiles.ts">OutboundVoiceProfileDeleteResponse</a></code>

Methods:

- <code title="post /outbound_voice_profiles">client.outboundVoiceProfiles.<a href="./src/resources/outbound-voice-profiles.ts">create</a>({ ...params }) -> OutboundVoiceProfileCreateResponse</code>
- <code title="get /outbound_voice_profiles/{id}">client.outboundVoiceProfiles.<a href="./src/resources/outbound-voice-profiles.ts">retrieve</a>(id) -> OutboundVoiceProfileRetrieveResponse</code>
- <code title="patch /outbound_voice_profiles/{id}">client.outboundVoiceProfiles.<a href="./src/resources/outbound-voice-profiles.ts">update</a>(id, { ...params }) -> OutboundVoiceProfileUpdateResponse</code>
- <code title="get /outbound_voice_profiles">client.outboundVoiceProfiles.<a href="./src/resources/outbound-voice-profiles.ts">list</a>({ ...params }) -> OutboundVoiceProfileListResponse</code>
- <code title="delete /outbound_voice_profiles/{id}">client.outboundVoiceProfiles.<a href="./src/resources/outbound-voice-profiles.ts">delete</a>(id) -> OutboundVoiceProfileDeleteResponse</code>

# Payment

## AutoRechargePrefs

Types:

- <code><a href="./src/resources/payment/auto-recharge-prefs.ts">AutoRechargePrefUpdateResponse</a></code>
- <code><a href="./src/resources/payment/auto-recharge-prefs.ts">AutoRechargePrefListResponse</a></code>

Methods:

- <code title="patch /payment/auto_recharge_prefs">client.payment.autoRechargePrefs.<a href="./src/resources/payment/auto-recharge-prefs.ts">update</a>({ ...params }) -> AutoRechargePrefUpdateResponse</code>
- <code title="get /payment/auto_recharge_prefs">client.payment.autoRechargePrefs.<a href="./src/resources/payment/auto-recharge-prefs.ts">list</a>() -> AutoRechargePrefListResponse</code>

# PhoneNumberAssignmentByProfile

Types:

- <code><a href="./src/resources/phone-number-assignment-by-profile.ts">TaskStatus</a></code>
- <code><a href="./src/resources/phone-number-assignment-by-profile.ts">PhoneNumberAssignmentByProfileAssignResponse</a></code>
- <code><a href="./src/resources/phone-number-assignment-by-profile.ts">PhoneNumberAssignmentByProfileRetrievePhoneNumberStatusResponse</a></code>
- <code><a href="./src/resources/phone-number-assignment-by-profile.ts">PhoneNumberAssignmentByProfileRetrieveStatusResponse</a></code>

Methods:

- <code title="post /phoneNumberAssignmentByProfile">client.phoneNumberAssignmentByProfile.<a href="./src/resources/phone-number-assignment-by-profile.ts">assign</a>({ ...params }) -> PhoneNumberAssignmentByProfileAssignResponse</code>
- <code title="get /phoneNumberAssignmentByProfile/{taskId}/phoneNumbers">client.phoneNumberAssignmentByProfile.<a href="./src/resources/phone-number-assignment-by-profile.ts">retrievePhoneNumberStatus</a>(taskID, { ...params }) -> PhoneNumberAssignmentByProfileRetrievePhoneNumberStatusResponse</code>
- <code title="get /phoneNumberAssignmentByProfile/{taskId}">client.phoneNumberAssignmentByProfile.<a href="./src/resources/phone-number-assignment-by-profile.ts">retrieveStatus</a>(taskID) -> PhoneNumberAssignmentByProfileRetrieveStatusResponse</code>

# PhoneNumberBlocks

## Jobs

Types:

- <code><a href="./src/resources/phone-number-blocks/jobs.ts">Job</a></code>
- <code><a href="./src/resources/phone-number-blocks/jobs.ts">JobRetrieveResponse</a></code>
- <code><a href="./src/resources/phone-number-blocks/jobs.ts">JobListResponse</a></code>
- <code><a href="./src/resources/phone-number-blocks/jobs.ts">JobDeletePhoneNumberBlockResponse</a></code>

Methods:

- <code title="get /phone_number_blocks/jobs/{id}">client.phoneNumberBlocks.jobs.<a href="./src/resources/phone-number-blocks/jobs.ts">retrieve</a>(id) -> JobRetrieveResponse</code>
- <code title="get /phone_number_blocks/jobs">client.phoneNumberBlocks.jobs.<a href="./src/resources/phone-number-blocks/jobs.ts">list</a>({ ...params }) -> JobListResponse</code>
- <code title="post /phone_number_blocks/jobs/delete_phone_number_block">client.phoneNumberBlocks.jobs.<a href="./src/resources/phone-number-blocks/jobs.ts">deletePhoneNumberBlock</a>({ ...params }) -> JobDeletePhoneNumberBlockResponse</code>

# PhoneNumberCampaigns

Types:

- <code><a href="./src/resources/phone-number-campaigns.ts">PhoneNumberCampaign</a></code>
- <code><a href="./src/resources/phone-number-campaigns.ts">PhoneNumberCampaignCreate</a></code>
- <code><a href="./src/resources/phone-number-campaigns.ts">PhoneNumberCampaignListResponse</a></code>

Methods:

- <code title="post /phone_number_campaigns">client.phoneNumberCampaigns.<a href="./src/resources/phone-number-campaigns.ts">create</a>({ ...params }) -> PhoneNumberCampaign</code>
- <code title="get /phone_number_campaigns/{phoneNumber}">client.phoneNumberCampaigns.<a href="./src/resources/phone-number-campaigns.ts">retrieve</a>(phoneNumber) -> PhoneNumberCampaign</code>
- <code title="put /phone_number_campaigns/{phoneNumber}">client.phoneNumberCampaigns.<a href="./src/resources/phone-number-campaigns.ts">update</a>(pathPhoneNumber, { ...params }) -> PhoneNumberCampaign</code>
- <code title="get /phone_number_campaigns">client.phoneNumberCampaigns.<a href="./src/resources/phone-number-campaigns.ts">list</a>({ ...params }) -> PhoneNumberCampaignListResponse</code>
- <code title="delete /phone_number_campaigns/{phoneNumber}">client.phoneNumberCampaigns.<a href="./src/resources/phone-number-campaigns.ts">delete</a>(phoneNumber) -> PhoneNumberCampaign</code>

# PhoneNumbers

Types:

- <code><a href="./src/resources/phone-numbers/phone-numbers.ts">PhoneNumberDetailed</a></code>
- <code><a href="./src/resources/phone-numbers/phone-numbers.ts">PhoneNumberRetrieveResponse</a></code>
- <code><a href="./src/resources/phone-numbers/phone-numbers.ts">PhoneNumberUpdateResponse</a></code>
- <code><a href="./src/resources/phone-numbers/phone-numbers.ts">PhoneNumberListResponse</a></code>
- <code><a href="./src/resources/phone-numbers/phone-numbers.ts">PhoneNumberDeleteResponse</a></code>
- <code><a href="./src/resources/phone-numbers/phone-numbers.ts">PhoneNumberSlimListResponse</a></code>

Methods:

- <code title="get /phone_numbers/{id}">client.phoneNumbers.<a href="./src/resources/phone-numbers/phone-numbers.ts">retrieve</a>(id) -> PhoneNumberRetrieveResponse</code>
- <code title="patch /phone_numbers/{id}">client.phoneNumbers.<a href="./src/resources/phone-numbers/phone-numbers.ts">update</a>(id, { ...params }) -> PhoneNumberUpdateResponse</code>
- <code title="get /phone_numbers">client.phoneNumbers.<a href="./src/resources/phone-numbers/phone-numbers.ts">list</a>({ ...params }) -> PhoneNumberListResponse</code>
- <code title="delete /phone_numbers/{id}">client.phoneNumbers.<a href="./src/resources/phone-numbers/phone-numbers.ts">delete</a>(id) -> PhoneNumberDeleteResponse</code>
- <code title="get /phone_numbers/slim">client.phoneNumbers.<a href="./src/resources/phone-numbers/phone-numbers.ts">slimList</a>({ ...params }) -> PhoneNumberSlimListResponse</code>

## Actions

Types:

- <code><a href="./src/resources/phone-numbers/actions.ts">PhoneNumberWithVoiceSettings</a></code>
- <code><a href="./src/resources/phone-numbers/actions.ts">ActionChangeBundleStatusResponse</a></code>
- <code><a href="./src/resources/phone-numbers/actions.ts">ActionEnableEmergencyResponse</a></code>
- <code><a href="./src/resources/phone-numbers/actions.ts">ActionVerifyOwnershipResponse</a></code>

Methods:

- <code title="patch /phone_numbers/{id}/actions/bundle_status_change">client.phoneNumbers.actions.<a href="./src/resources/phone-numbers/actions.ts">changeBundleStatus</a>(id, { ...params }) -> ActionChangeBundleStatusResponse</code>
- <code title="post /phone_numbers/{id}/actions/enable_emergency">client.phoneNumbers.actions.<a href="./src/resources/phone-numbers/actions.ts">enableEmergency</a>(id, { ...params }) -> ActionEnableEmergencyResponse</code>
- <code title="post /phone_numbers/actions/verify_ownership">client.phoneNumbers.actions.<a href="./src/resources/phone-numbers/actions.ts">verifyOwnership</a>({ ...params }) -> ActionVerifyOwnershipResponse</code>

## CsvDownloads

Types:

- <code><a href="./src/resources/phone-numbers/csv-downloads.ts">CsvDownload</a></code>
- <code><a href="./src/resources/phone-numbers/csv-downloads.ts">CsvDownloadCreateResponse</a></code>
- <code><a href="./src/resources/phone-numbers/csv-downloads.ts">CsvDownloadRetrieveResponse</a></code>
- <code><a href="./src/resources/phone-numbers/csv-downloads.ts">CsvDownloadListResponse</a></code>

Methods:

- <code title="post /phone_numbers/csv_downloads">client.phoneNumbers.csvDownloads.<a href="./src/resources/phone-numbers/csv-downloads.ts">create</a>({ ...params }) -> CsvDownloadCreateResponse</code>
- <code title="get /phone_numbers/csv_downloads/{id}">client.phoneNumbers.csvDownloads.<a href="./src/resources/phone-numbers/csv-downloads.ts">retrieve</a>(id) -> CsvDownloadRetrieveResponse</code>
- <code title="get /phone_numbers/csv_downloads">client.phoneNumbers.csvDownloads.<a href="./src/resources/phone-numbers/csv-downloads.ts">list</a>({ ...params }) -> CsvDownloadListResponse</code>

## Jobs

Types:

- <code><a href="./src/resources/phone-numbers/jobs.ts">PhoneNumbersJob</a></code>
- <code><a href="./src/resources/phone-numbers/jobs.ts">JobRetrieveResponse</a></code>
- <code><a href="./src/resources/phone-numbers/jobs.ts">JobListResponse</a></code>
- <code><a href="./src/resources/phone-numbers/jobs.ts">JobDeleteBatchResponse</a></code>
- <code><a href="./src/resources/phone-numbers/jobs.ts">JobUpdateBatchResponse</a></code>
- <code><a href="./src/resources/phone-numbers/jobs.ts">JobUpdateEmergencySettingsBatchResponse</a></code>

Methods:

- <code title="get /phone_numbers/jobs/{id}">client.phoneNumbers.jobs.<a href="./src/resources/phone-numbers/jobs.ts">retrieve</a>(id) -> JobRetrieveResponse</code>
- <code title="get /phone_numbers/jobs">client.phoneNumbers.jobs.<a href="./src/resources/phone-numbers/jobs.ts">list</a>({ ...params }) -> JobListResponse</code>
- <code title="post /phone_numbers/jobs/delete_phone_numbers">client.phoneNumbers.jobs.<a href="./src/resources/phone-numbers/jobs.ts">deleteBatch</a>({ ...params }) -> JobDeleteBatchResponse</code>
- <code title="post /phone_numbers/jobs/update_phone_numbers">client.phoneNumbers.jobs.<a href="./src/resources/phone-numbers/jobs.ts">updateBatch</a>({ ...params }) -> JobUpdateBatchResponse</code>
- <code title="post /phone_numbers/jobs/update_emergency_settings">client.phoneNumbers.jobs.<a href="./src/resources/phone-numbers/jobs.ts">updateEmergencySettingsBatch</a>({ ...params }) -> JobUpdateEmergencySettingsBatchResponse</code>

## Messaging

Types:

- <code><a href="./src/resources/phone-numbers/messaging.ts">MessagingRetrieveResponse</a></code>
- <code><a href="./src/resources/phone-numbers/messaging.ts">MessagingUpdateResponse</a></code>
- <code><a href="./src/resources/phone-numbers/messaging.ts">MessagingListResponse</a></code>

Methods:

- <code title="get /phone_numbers/{id}/messaging">client.phoneNumbers.messaging.<a href="./src/resources/phone-numbers/messaging.ts">retrieve</a>(id) -> MessagingRetrieveResponse</code>
- <code title="patch /phone_numbers/{id}/messaging">client.phoneNumbers.messaging.<a href="./src/resources/phone-numbers/messaging.ts">update</a>(id, { ...params }) -> MessagingUpdateResponse</code>
- <code title="get /phone_numbers/messaging">client.phoneNumbers.messaging.<a href="./src/resources/phone-numbers/messaging.ts">list</a>({ ...params }) -> MessagingListResponse</code>

## Voice

Types:

- <code><a href="./src/resources/phone-numbers/voice.ts">CallForwarding</a></code>
- <code><a href="./src/resources/phone-numbers/voice.ts">CallRecording</a></code>
- <code><a href="./src/resources/phone-numbers/voice.ts">CnamListing</a></code>
- <code><a href="./src/resources/phone-numbers/voice.ts">MediaFeatures</a></code>
- <code><a href="./src/resources/phone-numbers/voice.ts">UpdateVoiceSettings</a></code>
- <code><a href="./src/resources/phone-numbers/voice.ts">VoiceRetrieveResponse</a></code>
- <code><a href="./src/resources/phone-numbers/voice.ts">VoiceUpdateResponse</a></code>
- <code><a href="./src/resources/phone-numbers/voice.ts">VoiceListResponse</a></code>

Methods:

- <code title="get /phone_numbers/{id}/voice">client.phoneNumbers.voice.<a href="./src/resources/phone-numbers/voice.ts">retrieve</a>(id) -> VoiceRetrieveResponse</code>
- <code title="patch /phone_numbers/{id}/voice">client.phoneNumbers.voice.<a href="./src/resources/phone-numbers/voice.ts">update</a>(id, { ...params }) -> VoiceUpdateResponse</code>
- <code title="get /phone_numbers/voice">client.phoneNumbers.voice.<a href="./src/resources/phone-numbers/voice.ts">list</a>({ ...params }) -> VoiceListResponse</code>

## Voicemail

Types:

- <code><a href="./src/resources/phone-numbers/voicemail.ts">VoicemailPrefResponse</a></code>
- <code><a href="./src/resources/phone-numbers/voicemail.ts">VoicemailRequest</a></code>
- <code><a href="./src/resources/phone-numbers/voicemail.ts">VoicemailCreateResponse</a></code>
- <code><a href="./src/resources/phone-numbers/voicemail.ts">VoicemailRetrieveResponse</a></code>
- <code><a href="./src/resources/phone-numbers/voicemail.ts">VoicemailUpdateResponse</a></code>

Methods:

- <code title="post /phone_numbers/{phone_number_id}/voicemail">client.phoneNumbers.voicemail.<a href="./src/resources/phone-numbers/voicemail.ts">create</a>(phoneNumberID, { ...params }) -> VoicemailCreateResponse</code>
- <code title="get /phone_numbers/{phone_number_id}/voicemail">client.phoneNumbers.voicemail.<a href="./src/resources/phone-numbers/voicemail.ts">retrieve</a>(phoneNumberID) -> VoicemailRetrieveResponse</code>
- <code title="patch /phone_numbers/{phone_number_id}/voicemail">client.phoneNumbers.voicemail.<a href="./src/resources/phone-numbers/voicemail.ts">update</a>(phoneNumberID, { ...params }) -> VoicemailUpdateResponse</code>

# PhoneNumbersRegulatoryRequirements

Types:

- <code><a href="./src/resources/phone-numbers-regulatory-requirements.ts">PhoneNumbersRegulatoryRequirementRetrieveResponse</a></code>

Methods:

- <code title="get /phone_numbers_regulatory_requirements">client.phoneNumbersRegulatoryRequirements.<a href="./src/resources/phone-numbers-regulatory-requirements.ts">retrieve</a>({ ...params }) -> PhoneNumbersRegulatoryRequirementRetrieveResponse</code>

# PortabilityChecks

Types:

- <code><a href="./src/resources/portability-checks.ts">PortabilityCheckRunResponse</a></code>

Methods:

- <code title="post /portability_checks">client.portabilityChecks.<a href="./src/resources/portability-checks.ts">run</a>({ ...params }) -> PortabilityCheckRunResponse</code>

# Porting

Types:

- <code><a href="./src/resources/porting/porting.ts">PortingListUkCarriersResponse</a></code>

Methods:

- <code title="get /porting/uk_carriers">client.porting.<a href="./src/resources/porting/porting.ts">listUkCarriers</a>() -> PortingListUkCarriersResponse</code>

## Events

Types:

- <code><a href="./src/resources/porting/events.ts">EventRetrieveResponse</a></code>
- <code><a href="./src/resources/porting/events.ts">EventListResponse</a></code>

Methods:

- <code title="get /porting/events/{id}">client.porting.events.<a href="./src/resources/porting/events.ts">retrieve</a>(id) -> EventRetrieveResponse</code>
- <code title="get /porting/events">client.porting.events.<a href="./src/resources/porting/events.ts">list</a>({ ...params }) -> EventListResponse</code>
- <code title="post /porting/events/{id}/republish">client.porting.events.<a href="./src/resources/porting/events.ts">republish</a>(id) -> void</code>

## Reports

Types:

- <code><a href="./src/resources/porting/reports.ts">ExportPortingOrdersCsvReport</a></code>
- <code><a href="./src/resources/porting/reports.ts">PortingReport</a></code>
- <code><a href="./src/resources/porting/reports.ts">ReportCreateResponse</a></code>
- <code><a href="./src/resources/porting/reports.ts">ReportRetrieveResponse</a></code>
- <code><a href="./src/resources/porting/reports.ts">ReportListResponse</a></code>

Methods:

- <code title="post /porting/reports">client.porting.reports.<a href="./src/resources/porting/reports.ts">create</a>({ ...params }) -> ReportCreateResponse</code>
- <code title="get /porting/reports/{id}">client.porting.reports.<a href="./src/resources/porting/reports.ts">retrieve</a>(id) -> ReportRetrieveResponse</code>
- <code title="get /porting/reports">client.porting.reports.<a href="./src/resources/porting/reports.ts">list</a>({ ...params }) -> ReportListResponse</code>

## LoaConfigurations

Types:

- <code><a href="./src/resources/porting/loa-configurations.ts">PortingLoaConfiguration</a></code>
- <code><a href="./src/resources/porting/loa-configurations.ts">LoaConfigurationCreateResponse</a></code>
- <code><a href="./src/resources/porting/loa-configurations.ts">LoaConfigurationRetrieveResponse</a></code>
- <code><a href="./src/resources/porting/loa-configurations.ts">LoaConfigurationUpdateResponse</a></code>
- <code><a href="./src/resources/porting/loa-configurations.ts">LoaConfigurationListResponse</a></code>

Methods:

- <code title="post /porting/loa_configurations">client.porting.loaConfigurations.<a href="./src/resources/porting/loa-configurations.ts">create</a>({ ...params }) -> LoaConfigurationCreateResponse</code>
- <code title="get /porting/loa_configurations/{id}">client.porting.loaConfigurations.<a href="./src/resources/porting/loa-configurations.ts">retrieve</a>(id) -> LoaConfigurationRetrieveResponse</code>
- <code title="patch /porting/loa_configurations/{id}">client.porting.loaConfigurations.<a href="./src/resources/porting/loa-configurations.ts">update</a>(id, { ...params }) -> LoaConfigurationUpdateResponse</code>
- <code title="get /porting/loa_configurations">client.porting.loaConfigurations.<a href="./src/resources/porting/loa-configurations.ts">list</a>({ ...params }) -> LoaConfigurationListResponse</code>
- <code title="delete /porting/loa_configurations/{id}">client.porting.loaConfigurations.<a href="./src/resources/porting/loa-configurations.ts">delete</a>(id) -> void</code>
- <code title="post /porting/loa_configuration/preview">client.porting.loaConfigurations.<a href="./src/resources/porting/loa-configurations.ts">preview0</a>({ ...params }) -> Response</code>
- <code title="get /porting/loa_configurations/{id}/preview">client.porting.loaConfigurations.<a href="./src/resources/porting/loa-configurations.ts">preview1</a>(id) -> Response</code>

# PortingOrders

Types:

- <code><a href="./src/resources/porting-orders/porting-orders.ts">PortingOrder</a></code>
- <code><a href="./src/resources/porting-orders/porting-orders.ts">PortingOrderActivationSettings</a></code>
- <code><a href="./src/resources/porting-orders/porting-orders.ts">PortingOrderDocuments</a></code>
- <code><a href="./src/resources/porting-orders/porting-orders.ts">PortingOrderEndUser</a></code>
- <code><a href="./src/resources/porting-orders/porting-orders.ts">PortingOrderEndUserAdmin</a></code>
- <code><a href="./src/resources/porting-orders/porting-orders.ts">PortingOrderEndUserLocation</a></code>
- <code><a href="./src/resources/porting-orders/porting-orders.ts">PortingOrderMessaging</a></code>
- <code><a href="./src/resources/porting-orders/porting-orders.ts">PortingOrderMisc</a></code>
- <code><a href="./src/resources/porting-orders/porting-orders.ts">PortingOrderPhoneNumberConfiguration</a></code>
- <code><a href="./src/resources/porting-orders/porting-orders.ts">PortingOrderRequirement</a></code>
- <code><a href="./src/resources/porting-orders/porting-orders.ts">PortingOrderType</a></code>
- <code><a href="./src/resources/porting-orders/porting-orders.ts">PortingOrderUserFeedback</a></code>
- <code><a href="./src/resources/porting-orders/porting-orders.ts">PortingOrdersActivationJob</a></code>
- <code><a href="./src/resources/porting-orders/porting-orders.ts">PortingOrderCreateResponse</a></code>
- <code><a href="./src/resources/porting-orders/porting-orders.ts">PortingOrderRetrieveResponse</a></code>
- <code><a href="./src/resources/porting-orders/porting-orders.ts">PortingOrderUpdateResponse</a></code>
- <code><a href="./src/resources/porting-orders/porting-orders.ts">PortingOrderListResponse</a></code>
- <code><a href="./src/resources/porting-orders/porting-orders.ts">PortingOrderRetrieveAllowedFocWindowsResponse</a></code>
- <code><a href="./src/resources/porting-orders/porting-orders.ts">PortingOrderRetrieveExceptionTypesResponse</a></code>
- <code><a href="./src/resources/porting-orders/porting-orders.ts">PortingOrderRetrieveRequirementsResponse</a></code>
- <code><a href="./src/resources/porting-orders/porting-orders.ts">PortingOrderRetrieveSubRequestResponse</a></code>

Methods:

- <code title="post /porting_orders">client.portingOrders.<a href="./src/resources/porting-orders/porting-orders.ts">create</a>({ ...params }) -> PortingOrderCreateResponse</code>
- <code title="get /porting_orders/{id}">client.portingOrders.<a href="./src/resources/porting-orders/porting-orders.ts">retrieve</a>(id, { ...params }) -> PortingOrderRetrieveResponse</code>
- <code title="patch /porting_orders/{id}">client.portingOrders.<a href="./src/resources/porting-orders/porting-orders.ts">update</a>(id, { ...params }) -> PortingOrderUpdateResponse</code>
- <code title="get /porting_orders">client.portingOrders.<a href="./src/resources/porting-orders/porting-orders.ts">list</a>({ ...params }) -> PortingOrderListResponse</code>
- <code title="delete /porting_orders/{id}">client.portingOrders.<a href="./src/resources/porting-orders/porting-orders.ts">delete</a>(id) -> void</code>
- <code title="get /porting_orders/{id}/allowed_foc_windows">client.portingOrders.<a href="./src/resources/porting-orders/porting-orders.ts">retrieveAllowedFocWindows</a>(id) -> PortingOrderRetrieveAllowedFocWindowsResponse</code>
- <code title="get /porting_orders/exception_types">client.portingOrders.<a href="./src/resources/porting-orders/porting-orders.ts">retrieveExceptionTypes</a>() -> PortingOrderRetrieveExceptionTypesResponse</code>
- <code title="get /porting_orders/{id}/loa_template">client.portingOrders.<a href="./src/resources/porting-orders/porting-orders.ts">retrieveLoaTemplate</a>(id, { ...params }) -> Response</code>
- <code title="get /porting_orders/{id}/requirements">client.portingOrders.<a href="./src/resources/porting-orders/porting-orders.ts">retrieveRequirements</a>(id, { ...params }) -> PortingOrderRetrieveRequirementsResponse</code>
- <code title="get /porting_orders/{id}/sub_request">client.portingOrders.<a href="./src/resources/porting-orders/porting-orders.ts">retrieveSubRequest</a>(id) -> PortingOrderRetrieveSubRequestResponse</code>

## PhoneNumberConfigurations

Types:

- <code><a href="./src/resources/porting-orders/phone-number-configurations.ts">PhoneNumberConfigurationCreateResponse</a></code>
- <code><a href="./src/resources/porting-orders/phone-number-configurations.ts">PhoneNumberConfigurationListResponse</a></code>

Methods:

- <code title="post /porting_orders/phone_number_configurations">client.portingOrders.phoneNumberConfigurations.<a href="./src/resources/porting-orders/phone-number-configurations.ts">create</a>({ ...params }) -> PhoneNumberConfigurationCreateResponse</code>
- <code title="get /porting_orders/phone_number_configurations">client.portingOrders.phoneNumberConfigurations.<a href="./src/resources/porting-orders/phone-number-configurations.ts">list</a>({ ...params }) -> PhoneNumberConfigurationListResponse</code>

## Actions

Types:

- <code><a href="./src/resources/porting-orders/actions.ts">ActionActivateResponse</a></code>
- <code><a href="./src/resources/porting-orders/actions.ts">ActionCancelResponse</a></code>
- <code><a href="./src/resources/porting-orders/actions.ts">ActionConfirmResponse</a></code>
- <code><a href="./src/resources/porting-orders/actions.ts">ActionShareResponse</a></code>

Methods:

- <code title="post /porting_orders/{id}/actions/activate">client.portingOrders.actions.<a href="./src/resources/porting-orders/actions.ts">activate</a>(id) -> ActionActivateResponse</code>
- <code title="post /porting_orders/{id}/actions/cancel">client.portingOrders.actions.<a href="./src/resources/porting-orders/actions.ts">cancel</a>(id) -> ActionCancelResponse</code>
- <code title="post /porting_orders/{id}/actions/confirm">client.portingOrders.actions.<a href="./src/resources/porting-orders/actions.ts">confirm</a>(id) -> ActionConfirmResponse</code>
- <code title="post /porting_orders/{id}/actions/share">client.portingOrders.actions.<a href="./src/resources/porting-orders/actions.ts">share</a>(id, { ...params }) -> ActionShareResponse</code>

## ActivationJobs

Types:

- <code><a href="./src/resources/porting-orders/activation-jobs.ts">ActivationJobRetrieveResponse</a></code>
- <code><a href="./src/resources/porting-orders/activation-jobs.ts">ActivationJobUpdateResponse</a></code>
- <code><a href="./src/resources/porting-orders/activation-jobs.ts">ActivationJobListResponse</a></code>

Methods:

- <code title="get /porting_orders/{id}/activation_jobs/{activationJobId}">client.portingOrders.activationJobs.<a href="./src/resources/porting-orders/activation-jobs.ts">retrieve</a>(activationJobID, { ...params }) -> ActivationJobRetrieveResponse</code>
- <code title="patch /porting_orders/{id}/activation_jobs/{activationJobId}">client.portingOrders.activationJobs.<a href="./src/resources/porting-orders/activation-jobs.ts">update</a>(activationJobID, { ...params }) -> ActivationJobUpdateResponse</code>
- <code title="get /porting_orders/{id}/activation_jobs">client.portingOrders.activationJobs.<a href="./src/resources/porting-orders/activation-jobs.ts">list</a>(id, { ...params }) -> ActivationJobListResponse</code>

## AdditionalDocuments

Types:

- <code><a href="./src/resources/porting-orders/additional-documents.ts">AdditionalDocumentCreateResponse</a></code>
- <code><a href="./src/resources/porting-orders/additional-documents.ts">AdditionalDocumentListResponse</a></code>

Methods:

- <code title="post /porting_orders/{id}/additional_documents">client.portingOrders.additionalDocuments.<a href="./src/resources/porting-orders/additional-documents.ts">create</a>(id, { ...params }) -> AdditionalDocumentCreateResponse</code>
- <code title="get /porting_orders/{id}/additional_documents">client.portingOrders.additionalDocuments.<a href="./src/resources/porting-orders/additional-documents.ts">list</a>(id, { ...params }) -> AdditionalDocumentListResponse</code>
- <code title="delete /porting_orders/{id}/additional_documents/{additional_document_id}">client.portingOrders.additionalDocuments.<a href="./src/resources/porting-orders/additional-documents.ts">delete</a>(additionalDocumentID, { ...params }) -> void</code>

## Comments

Types:

- <code><a href="./src/resources/porting-orders/comments.ts">CommentCreateResponse</a></code>
- <code><a href="./src/resources/porting-orders/comments.ts">CommentListResponse</a></code>

Methods:

- <code title="post /porting_orders/{id}/comments">client.portingOrders.comments.<a href="./src/resources/porting-orders/comments.ts">create</a>(id, { ...params }) -> CommentCreateResponse</code>
- <code title="get /porting_orders/{id}/comments">client.portingOrders.comments.<a href="./src/resources/porting-orders/comments.ts">list</a>(id, { ...params }) -> CommentListResponse</code>

## VerificationCodes

Types:

- <code><a href="./src/resources/porting-orders/verification-codes.ts">VerificationCodeListResponse</a></code>
- <code><a href="./src/resources/porting-orders/verification-codes.ts">VerificationCodeVerifyResponse</a></code>

Methods:

- <code title="get /porting_orders/{id}/verification_codes">client.portingOrders.verificationCodes.<a href="./src/resources/porting-orders/verification-codes.ts">list</a>(id, { ...params }) -> VerificationCodeListResponse</code>
- <code title="post /porting_orders/{id}/verification_codes/send">client.portingOrders.verificationCodes.<a href="./src/resources/porting-orders/verification-codes.ts">send</a>(id, { ...params }) -> void</code>
- <code title="post /porting_orders/{id}/verification_codes/verify">client.portingOrders.verificationCodes.<a href="./src/resources/porting-orders/verification-codes.ts">verify</a>(id, { ...params }) -> VerificationCodeVerifyResponse</code>

## ActionRequirements

Types:

- <code><a href="./src/resources/porting-orders/action-requirements.ts">ActionRequirementListResponse</a></code>
- <code><a href="./src/resources/porting-orders/action-requirements.ts">ActionRequirementInitiateResponse</a></code>

Methods:

- <code title="get /porting_orders/{porting_order_id}/action_requirements">client.portingOrders.actionRequirements.<a href="./src/resources/porting-orders/action-requirements.ts">list</a>(portingOrderID, { ...params }) -> ActionRequirementListResponse</code>
- <code title="post /porting_orders/{porting_order_id}/action_requirements/{id}/initiate">client.portingOrders.actionRequirements.<a href="./src/resources/porting-orders/action-requirements.ts">initiate</a>(id, { ...params }) -> ActionRequirementInitiateResponse</code>

## AssociatedPhoneNumbers

Types:

- <code><a href="./src/resources/porting-orders/associated-phone-numbers.ts">PortingAssociatedPhoneNumber</a></code>
- <code><a href="./src/resources/porting-orders/associated-phone-numbers.ts">AssociatedPhoneNumberCreateResponse</a></code>
- <code><a href="./src/resources/porting-orders/associated-phone-numbers.ts">AssociatedPhoneNumberListResponse</a></code>
- <code><a href="./src/resources/porting-orders/associated-phone-numbers.ts">AssociatedPhoneNumberDeleteResponse</a></code>

Methods:

- <code title="post /porting_orders/{porting_order_id}/associated_phone_numbers">client.portingOrders.associatedPhoneNumbers.<a href="./src/resources/porting-orders/associated-phone-numbers.ts">create</a>(portingOrderID, { ...params }) -> AssociatedPhoneNumberCreateResponse</code>
- <code title="get /porting_orders/{porting_order_id}/associated_phone_numbers">client.portingOrders.associatedPhoneNumbers.<a href="./src/resources/porting-orders/associated-phone-numbers.ts">list</a>(portingOrderID, { ...params }) -> AssociatedPhoneNumberListResponse</code>
- <code title="delete /porting_orders/{porting_order_id}/associated_phone_numbers/{id}">client.portingOrders.associatedPhoneNumbers.<a href="./src/resources/porting-orders/associated-phone-numbers.ts">delete</a>(id, { ...params }) -> AssociatedPhoneNumberDeleteResponse</code>

## PhoneNumberBlocks

Types:

- <code><a href="./src/resources/porting-orders/phone-number-blocks.ts">PortingPhoneNumberBlock</a></code>
- <code><a href="./src/resources/porting-orders/phone-number-blocks.ts">PhoneNumberBlockCreateResponse</a></code>
- <code><a href="./src/resources/porting-orders/phone-number-blocks.ts">PhoneNumberBlockListResponse</a></code>
- <code><a href="./src/resources/porting-orders/phone-number-blocks.ts">PhoneNumberBlockDeleteResponse</a></code>

Methods:

- <code title="post /porting_orders/{porting_order_id}/phone_number_blocks">client.portingOrders.phoneNumberBlocks.<a href="./src/resources/porting-orders/phone-number-blocks.ts">create</a>(portingOrderID, { ...params }) -> PhoneNumberBlockCreateResponse</code>
- <code title="get /porting_orders/{porting_order_id}/phone_number_blocks">client.portingOrders.phoneNumberBlocks.<a href="./src/resources/porting-orders/phone-number-blocks.ts">list</a>(portingOrderID, { ...params }) -> PhoneNumberBlockListResponse</code>
- <code title="delete /porting_orders/{porting_order_id}/phone_number_blocks/{id}">client.portingOrders.phoneNumberBlocks.<a href="./src/resources/porting-orders/phone-number-blocks.ts">delete</a>(id, { ...params }) -> PhoneNumberBlockDeleteResponse</code>

## PhoneNumberExtensions

Types:

- <code><a href="./src/resources/porting-orders/phone-number-extensions.ts">PortingPhoneNumberExtension</a></code>
- <code><a href="./src/resources/porting-orders/phone-number-extensions.ts">PhoneNumberExtensionCreateResponse</a></code>
- <code><a href="./src/resources/porting-orders/phone-number-extensions.ts">PhoneNumberExtensionListResponse</a></code>
- <code><a href="./src/resources/porting-orders/phone-number-extensions.ts">PhoneNumberExtensionDeleteResponse</a></code>

Methods:

- <code title="post /porting_orders/{porting_order_id}/phone_number_extensions">client.portingOrders.phoneNumberExtensions.<a href="./src/resources/porting-orders/phone-number-extensions.ts">create</a>(portingOrderID, { ...params }) -> PhoneNumberExtensionCreateResponse</code>
- <code title="get /porting_orders/{porting_order_id}/phone_number_extensions">client.portingOrders.phoneNumberExtensions.<a href="./src/resources/porting-orders/phone-number-extensions.ts">list</a>(portingOrderID, { ...params }) -> PhoneNumberExtensionListResponse</code>
- <code title="delete /porting_orders/{porting_order_id}/phone_number_extensions/{id}">client.portingOrders.phoneNumberExtensions.<a href="./src/resources/porting-orders/phone-number-extensions.ts">delete</a>(id, { ...params }) -> PhoneNumberExtensionDeleteResponse</code>

# PortingPhoneNumbers

Types:

- <code><a href="./src/resources/porting-phone-numbers.ts">PortingPhoneNumberListResponse</a></code>

Methods:

- <code title="get /porting_phone_numbers">client.portingPhoneNumbers.<a href="./src/resources/porting-phone-numbers.ts">list</a>({ ...params }) -> PortingPhoneNumberListResponse</code>

# Portouts

Types:

- <code><a href="./src/resources/portouts/portouts.ts">PortoutDetails</a></code>
- <code><a href="./src/resources/portouts/portouts.ts">PortoutRetrieveResponse</a></code>
- <code><a href="./src/resources/portouts/portouts.ts">PortoutListResponse</a></code>
- <code><a href="./src/resources/portouts/portouts.ts">PortoutListRejectionCodesResponse</a></code>
- <code><a href="./src/resources/portouts/portouts.ts">PortoutUpdateStatusResponse</a></code>

Methods:

- <code title="get /portouts/{id}">client.portouts.<a href="./src/resources/portouts/portouts.ts">retrieve</a>(id) -> PortoutRetrieveResponse</code>
- <code title="get /portouts">client.portouts.<a href="./src/resources/portouts/portouts.ts">list</a>({ ...params }) -> PortoutListResponse</code>
- <code title="get /portouts/rejections/{portout_id}">client.portouts.<a href="./src/resources/portouts/portouts.ts">listRejectionCodes</a>(portoutID, { ...params }) -> PortoutListRejectionCodesResponse</code>
- <code title="patch /portouts/{id}/{status}">client.portouts.<a href="./src/resources/portouts/portouts.ts">updateStatus</a>(status, { ...params }) -> PortoutUpdateStatusResponse</code>

## Events

Types:

- <code><a href="./src/resources/portouts/events.ts">EventRetrieveResponse</a></code>
- <code><a href="./src/resources/portouts/events.ts">EventListResponse</a></code>

Methods:

- <code title="get /portouts/events/{id}">client.portouts.events.<a href="./src/resources/portouts/events.ts">retrieve</a>(id) -> EventRetrieveResponse</code>
- <code title="get /portouts/events">client.portouts.events.<a href="./src/resources/portouts/events.ts">list</a>({ ...params }) -> EventListResponse</code>
- <code title="post /portouts/events/{id}/republish">client.portouts.events.<a href="./src/resources/portouts/events.ts">republish</a>(id) -> void</code>

## Reports

Types:

- <code><a href="./src/resources/portouts/reports.ts">ExportPortoutsCsvReport</a></code>
- <code><a href="./src/resources/portouts/reports.ts">PortoutReport</a></code>
- <code><a href="./src/resources/portouts/reports.ts">ReportCreateResponse</a></code>
- <code><a href="./src/resources/portouts/reports.ts">ReportRetrieveResponse</a></code>
- <code><a href="./src/resources/portouts/reports.ts">ReportListResponse</a></code>

Methods:

- <code title="post /portouts/reports">client.portouts.reports.<a href="./src/resources/portouts/reports.ts">create</a>({ ...params }) -> ReportCreateResponse</code>
- <code title="get /portouts/reports/{id}">client.portouts.reports.<a href="./src/resources/portouts/reports.ts">retrieve</a>(id) -> ReportRetrieveResponse</code>
- <code title="get /portouts/reports">client.portouts.reports.<a href="./src/resources/portouts/reports.ts">list</a>({ ...params }) -> ReportListResponse</code>

## Comments

Types:

- <code><a href="./src/resources/portouts/comments.ts">CommentCreateResponse</a></code>
- <code><a href="./src/resources/portouts/comments.ts">CommentListResponse</a></code>

Methods:

- <code title="post /portouts/{id}/comments">client.portouts.comments.<a href="./src/resources/portouts/comments.ts">create</a>(id, { ...params }) -> CommentCreateResponse</code>
- <code title="get /portouts/{id}/comments">client.portouts.comments.<a href="./src/resources/portouts/comments.ts">list</a>(id) -> CommentListResponse</code>

## SupportingDocuments

Types:

- <code><a href="./src/resources/portouts/supporting-documents.ts">SupportingDocumentCreateResponse</a></code>
- <code><a href="./src/resources/portouts/supporting-documents.ts">SupportingDocumentListResponse</a></code>

Methods:

- <code title="post /portouts/{id}/supporting_documents">client.portouts.supportingDocuments.<a href="./src/resources/portouts/supporting-documents.ts">create</a>(id, { ...params }) -> SupportingDocumentCreateResponse</code>
- <code title="get /portouts/{id}/supporting_documents">client.portouts.supportingDocuments.<a href="./src/resources/portouts/supporting-documents.ts">list</a>(id) -> SupportingDocumentListResponse</code>

# PrivateWirelessGateways

Types:

- <code><a href="./src/resources/private-wireless-gateways.ts">PrivateWirelessGateway</a></code>
- <code><a href="./src/resources/private-wireless-gateways.ts">PrivateWirelessGatewayStatus</a></code>
- <code><a href="./src/resources/private-wireless-gateways.ts">PwgAssignedResourcesSummary</a></code>
- <code><a href="./src/resources/private-wireless-gateways.ts">PrivateWirelessGatewayCreateResponse</a></code>
- <code><a href="./src/resources/private-wireless-gateways.ts">PrivateWirelessGatewayRetrieveResponse</a></code>
- <code><a href="./src/resources/private-wireless-gateways.ts">PrivateWirelessGatewayListResponse</a></code>
- <code><a href="./src/resources/private-wireless-gateways.ts">PrivateWirelessGatewayDeleteResponse</a></code>

Methods:

- <code title="post /private_wireless_gateways">client.privateWirelessGateways.<a href="./src/resources/private-wireless-gateways.ts">create</a>({ ...params }) -> PrivateWirelessGatewayCreateResponse</code>
- <code title="get /private_wireless_gateways/{id}">client.privateWirelessGateways.<a href="./src/resources/private-wireless-gateways.ts">retrieve</a>(id) -> PrivateWirelessGatewayRetrieveResponse</code>
- <code title="get /private_wireless_gateways">client.privateWirelessGateways.<a href="./src/resources/private-wireless-gateways.ts">list</a>({ ...params }) -> PrivateWirelessGatewayListResponse</code>
- <code title="delete /private_wireless_gateways/{id}">client.privateWirelessGateways.<a href="./src/resources/private-wireless-gateways.ts">delete</a>(id) -> PrivateWirelessGatewayDeleteResponse</code>

# PublicInternetGateways

Types:

- <code><a href="./src/resources/public-internet-gateways.ts">Interface</a></code>
- <code><a href="./src/resources/public-internet-gateways.ts">RegionIn</a></code>
- <code><a href="./src/resources/public-internet-gateways.ts">PublicInternetGatewayCreateResponse</a></code>
- <code><a href="./src/resources/public-internet-gateways.ts">PublicInternetGatewayRetrieveResponse</a></code>
- <code><a href="./src/resources/public-internet-gateways.ts">PublicInternetGatewayListResponse</a></code>
- <code><a href="./src/resources/public-internet-gateways.ts">PublicInternetGatewayDeleteResponse</a></code>

Methods:

- <code title="post /public_internet_gateways">client.publicInternetGateways.<a href="./src/resources/public-internet-gateways.ts">create</a>({ ...params }) -> PublicInternetGatewayCreateResponse</code>
- <code title="get /public_internet_gateways/{id}">client.publicInternetGateways.<a href="./src/resources/public-internet-gateways.ts">retrieve</a>(id) -> PublicInternetGatewayRetrieveResponse</code>
- <code title="get /public_internet_gateways">client.publicInternetGateways.<a href="./src/resources/public-internet-gateways.ts">list</a>({ ...params }) -> PublicInternetGatewayListResponse</code>
- <code title="delete /public_internet_gateways/{id}">client.publicInternetGateways.<a href="./src/resources/public-internet-gateways.ts">delete</a>(id) -> PublicInternetGatewayDeleteResponse</code>

# Queues

Types:

- <code><a href="./src/resources/queues/queues.ts">QueueRetrieveResponse</a></code>

Methods:

- <code title="get /queues/{queue_name}">client.queues.<a href="./src/resources/queues/queues.ts">retrieve</a>(queueName) -> QueueRetrieveResponse</code>

## Calls

Types:

- <code><a href="./src/resources/queues/calls.ts">CallRetrieveResponse</a></code>
- <code><a href="./src/resources/queues/calls.ts">CallListResponse</a></code>

Methods:

- <code title="get /queues/{queue_name}/calls/{call_control_id}">client.queues.calls.<a href="./src/resources/queues/calls.ts">retrieve</a>(callControlID, { ...params }) -> CallRetrieveResponse</code>
- <code title="get /queues/{queue_name}/calls">client.queues.calls.<a href="./src/resources/queues/calls.ts">list</a>(queueName, { ...params }) -> CallListResponse</code>

# RcsAgents

Types:

- <code><a href="./src/resources/rcs-agents.ts">RcsAgent</a></code>
- <code><a href="./src/resources/rcs-agents.ts">RcsAgentResponse</a></code>

# RecordingTranscriptions

Types:

- <code><a href="./src/resources/recording-transcriptions.ts">RecordingTranscription</a></code>
- <code><a href="./src/resources/recording-transcriptions.ts">RecordingTranscriptionRetrieveResponse</a></code>
- <code><a href="./src/resources/recording-transcriptions.ts">RecordingTranscriptionListResponse</a></code>
- <code><a href="./src/resources/recording-transcriptions.ts">RecordingTranscriptionDeleteResponse</a></code>

Methods:

- <code title="get /recording_transcriptions/{recording_transcription_id}">client.recordingTranscriptions.<a href="./src/resources/recording-transcriptions.ts">retrieve</a>(recordingTranscriptionID) -> RecordingTranscriptionRetrieveResponse</code>
- <code title="get /recording_transcriptions">client.recordingTranscriptions.<a href="./src/resources/recording-transcriptions.ts">list</a>() -> RecordingTranscriptionListResponse</code>
- <code title="delete /recording_transcriptions/{recording_transcription_id}">client.recordingTranscriptions.<a href="./src/resources/recording-transcriptions.ts">delete</a>(recordingTranscriptionID) -> RecordingTranscriptionDeleteResponse</code>

# Recordings

Types:

- <code><a href="./src/resources/recordings/recordings.ts">RecordingResponseData</a></code>
- <code><a href="./src/resources/recordings/recordings.ts">RecordingRetrieveResponse</a></code>
- <code><a href="./src/resources/recordings/recordings.ts">RecordingListResponse</a></code>
- <code><a href="./src/resources/recordings/recordings.ts">RecordingDeleteResponse</a></code>

Methods:

- <code title="get /recordings/{recording_id}">client.recordings.<a href="./src/resources/recordings/recordings.ts">retrieve</a>(recordingID) -> RecordingRetrieveResponse</code>
- <code title="get /recordings">client.recordings.<a href="./src/resources/recordings/recordings.ts">list</a>({ ...params }) -> RecordingListResponse</code>
- <code title="delete /recordings/{recording_id}">client.recordings.<a href="./src/resources/recordings/recordings.ts">delete</a>(recordingID) -> RecordingDeleteResponse</code>

## Actions

Methods:

- <code title="post /recordings/actions/delete">client.recordings.actions.<a href="./src/resources/recordings/actions.ts">delete</a>({ ...params }) -> void</code>

# Regions

Types:

- <code><a href="./src/resources/regions.ts">RegionListResponse</a></code>

Methods:

- <code title="get /regions">client.regions.<a href="./src/resources/regions.ts">list</a>() -> RegionListResponse</code>

# RegulatoryRequirements

Types:

- <code><a href="./src/resources/regulatory-requirements.ts">RegulatoryRequirementRetrieveResponse</a></code>

Methods:

- <code title="get /regulatory_requirements">client.regulatoryRequirements.<a href="./src/resources/regulatory-requirements.ts">retrieve</a>({ ...params }) -> RegulatoryRequirementRetrieveResponse</code>

# Reports

Types:

- <code><a href="./src/resources/reports/reports.ts">ReportListMdrsResponse</a></code>
- <code><a href="./src/resources/reports/reports.ts">ReportListWdrsResponse</a></code>

Methods:

- <code title="get /reports/mdrs">client.reports.<a href="./src/resources/reports/reports.ts">listMdrs</a>({ ...params }) -> ReportListMdrsResponse</code>
- <code title="get /reports/wdrs">client.reports.<a href="./src/resources/reports/reports.ts">listWdrs</a>({ ...params }) -> ReportListWdrsResponse</code>

## CdrUsageReports

Types:

- <code><a href="./src/resources/reports/cdr-usage-reports.ts">CdrUsageReportFetchSyncResponse</a></code>

Methods:

- <code title="get /reports/cdr_usage_reports/sync">client.reports.cdrUsageReports.<a href="./src/resources/reports/cdr-usage-reports.ts">fetchSync</a>({ ...params }) -> CdrUsageReportFetchSyncResponse</code>

## MdrUsageReports

Types:

- <code><a href="./src/resources/reports/mdr-usage-reports.ts">MdrUsageReport</a></code>
- <code><a href="./src/resources/reports/mdr-usage-reports.ts">MdrUsageReportCreateResponse</a></code>
- <code><a href="./src/resources/reports/mdr-usage-reports.ts">MdrUsageReportRetrieveResponse</a></code>
- <code><a href="./src/resources/reports/mdr-usage-reports.ts">MdrUsageReportListResponse</a></code>
- <code><a href="./src/resources/reports/mdr-usage-reports.ts">MdrUsageReportDeleteResponse</a></code>
- <code><a href="./src/resources/reports/mdr-usage-reports.ts">MdrUsageReportFetchSyncResponse</a></code>

Methods:

- <code title="post /reports/mdr_usage_reports">client.reports.mdrUsageReports.<a href="./src/resources/reports/mdr-usage-reports.ts">create</a>({ ...params }) -> MdrUsageReportCreateResponse</code>
- <code title="get /reports/mdr_usage_reports/{id}">client.reports.mdrUsageReports.<a href="./src/resources/reports/mdr-usage-reports.ts">retrieve</a>(id) -> MdrUsageReportRetrieveResponse</code>
- <code title="get /reports/mdr_usage_reports">client.reports.mdrUsageReports.<a href="./src/resources/reports/mdr-usage-reports.ts">list</a>({ ...params }) -> MdrUsageReportListResponse</code>
- <code title="delete /reports/mdr_usage_reports/{id}">client.reports.mdrUsageReports.<a href="./src/resources/reports/mdr-usage-reports.ts">delete</a>(id) -> MdrUsageReportDeleteResponse</code>
- <code title="get /reports/mdr_usage_reports/sync">client.reports.mdrUsageReports.<a href="./src/resources/reports/mdr-usage-reports.ts">fetchSync</a>({ ...params }) -> MdrUsageReportFetchSyncResponse</code>

# RequirementGroups

Types:

- <code><a href="./src/resources/requirement-groups.ts">RequirementGroup</a></code>
- <code><a href="./src/resources/requirement-groups.ts">RequirementGroupListResponse</a></code>

Methods:

- <code title="post /requirement_groups">client.requirementGroups.<a href="./src/resources/requirement-groups.ts">create</a>({ ...params }) -> RequirementGroup</code>
- <code title="get /requirement_groups/{id}">client.requirementGroups.<a href="./src/resources/requirement-groups.ts">retrieve</a>(id) -> RequirementGroup</code>
- <code title="patch /requirement_groups/{id}">client.requirementGroups.<a href="./src/resources/requirement-groups.ts">update</a>(id, { ...params }) -> RequirementGroup</code>
- <code title="get /requirement_groups">client.requirementGroups.<a href="./src/resources/requirement-groups.ts">list</a>({ ...params }) -> RequirementGroupListResponse</code>
- <code title="delete /requirement_groups/{id}">client.requirementGroups.<a href="./src/resources/requirement-groups.ts">delete</a>(id) -> RequirementGroup</code>
- <code title="post /requirement_groups/{id}/submit_for_approval">client.requirementGroups.<a href="./src/resources/requirement-groups.ts">submitForApproval</a>(id) -> RequirementGroup</code>

# RequirementTypes

Types:

- <code><a href="./src/resources/requirement-types.ts">RequirementTypeRetrieveResponse</a></code>
- <code><a href="./src/resources/requirement-types.ts">RequirementTypeListResponse</a></code>

Methods:

- <code title="get /requirement_types/{id}">client.requirementTypes.<a href="./src/resources/requirement-types.ts">retrieve</a>(id) -> RequirementTypeRetrieveResponse</code>
- <code title="get /requirement_types">client.requirementTypes.<a href="./src/resources/requirement-types.ts">list</a>({ ...params }) -> RequirementTypeListResponse</code>

# Requirements

Types:

- <code><a href="./src/resources/requirements.ts">RequirementRetrieveResponse</a></code>
- <code><a href="./src/resources/requirements.ts">RequirementListResponse</a></code>

Methods:

- <code title="get /requirements/{id}">client.requirements.<a href="./src/resources/requirements.ts">retrieve</a>(id) -> RequirementRetrieveResponse</code>
- <code title="get /requirements">client.requirements.<a href="./src/resources/requirements.ts">list</a>({ ...params }) -> RequirementListResponse</code>

# RoomCompositions

Types:

- <code><a href="./src/resources/room-compositions.ts">RoomComposition</a></code>
- <code><a href="./src/resources/room-compositions.ts">VideoRegion</a></code>
- <code><a href="./src/resources/room-compositions.ts">RoomCompositionCreateResponse</a></code>
- <code><a href="./src/resources/room-compositions.ts">RoomCompositionRetrieveResponse</a></code>
- <code><a href="./src/resources/room-compositions.ts">RoomCompositionListResponse</a></code>

Methods:

- <code title="post /room_compositions">client.roomCompositions.<a href="./src/resources/room-compositions.ts">create</a>({ ...params }) -> RoomCompositionCreateResponse</code>
- <code title="get /room_compositions/{room_composition_id}">client.roomCompositions.<a href="./src/resources/room-compositions.ts">retrieve</a>(roomCompositionID) -> RoomCompositionRetrieveResponse</code>
- <code title="get /room_compositions">client.roomCompositions.<a href="./src/resources/room-compositions.ts">list</a>({ ...params }) -> RoomCompositionListResponse</code>
- <code title="delete /room_compositions/{room_composition_id}">client.roomCompositions.<a href="./src/resources/room-compositions.ts">delete</a>(roomCompositionID) -> void</code>

# RoomParticipants

Types:

- <code><a href="./src/resources/room-participants.ts">RoomParticipantRetrieveResponse</a></code>
- <code><a href="./src/resources/room-participants.ts">RoomParticipantListResponse</a></code>

Methods:

- <code title="get /room_participants/{room_participant_id}">client.roomParticipants.<a href="./src/resources/room-participants.ts">retrieve</a>(roomParticipantID) -> RoomParticipantRetrieveResponse</code>
- <code title="get /room_participants">client.roomParticipants.<a href="./src/resources/room-participants.ts">list</a>({ ...params }) -> RoomParticipantListResponse</code>

# RoomRecordings

Types:

- <code><a href="./src/resources/room-recordings.ts">RoomRecordingRetrieveResponse</a></code>
- <code><a href="./src/resources/room-recordings.ts">RoomRecordingListResponse</a></code>
- <code><a href="./src/resources/room-recordings.ts">RoomRecordingDeleteBulkResponse</a></code>

Methods:

- <code title="get /room_recordings/{room_recording_id}">client.roomRecordings.<a href="./src/resources/room-recordings.ts">retrieve</a>(roomRecordingID) -> RoomRecordingRetrieveResponse</code>
- <code title="get /room_recordings">client.roomRecordings.<a href="./src/resources/room-recordings.ts">list</a>({ ...params }) -> RoomRecordingListResponse</code>
- <code title="delete /room_recordings/{room_recording_id}">client.roomRecordings.<a href="./src/resources/room-recordings.ts">delete</a>(roomRecordingID) -> void</code>
- <code title="delete /room_recordings">client.roomRecordings.<a href="./src/resources/room-recordings.ts">deleteBulk</a>({ ...params }) -> RoomRecordingDeleteBulkResponse</code>

# Rooms

Types:

- <code><a href="./src/resources/rooms/rooms.ts">Room</a></code>
- <code><a href="./src/resources/rooms/rooms.ts">RoomSession</a></code>
- <code><a href="./src/resources/rooms/rooms.ts">RoomCreateResponse</a></code>
- <code><a href="./src/resources/rooms/rooms.ts">RoomRetrieveResponse</a></code>
- <code><a href="./src/resources/rooms/rooms.ts">RoomUpdateResponse</a></code>
- <code><a href="./src/resources/rooms/rooms.ts">RoomListResponse</a></code>

Methods:

- <code title="post /rooms">client.rooms.<a href="./src/resources/rooms/rooms.ts">create</a>({ ...params }) -> RoomCreateResponse</code>
- <code title="get /rooms/{room_id}">client.rooms.<a href="./src/resources/rooms/rooms.ts">retrieve</a>(roomID, { ...params }) -> RoomRetrieveResponse</code>
- <code title="patch /rooms/{room_id}">client.rooms.<a href="./src/resources/rooms/rooms.ts">update</a>(roomID, { ...params }) -> RoomUpdateResponse</code>
- <code title="get /rooms">client.rooms.<a href="./src/resources/rooms/rooms.ts">list</a>({ ...params }) -> RoomListResponse</code>
- <code title="delete /rooms/{room_id}">client.rooms.<a href="./src/resources/rooms/rooms.ts">delete</a>(roomID) -> void</code>

## Actions

Types:

- <code><a href="./src/resources/rooms/actions.ts">ActionGenerateJoinClientTokenResponse</a></code>
- <code><a href="./src/resources/rooms/actions.ts">ActionRefreshClientTokenResponse</a></code>

Methods:

- <code title="post /rooms/{room_id}/actions/generate_join_client_token">client.rooms.actions.<a href="./src/resources/rooms/actions.ts">generateJoinClientToken</a>(roomID, { ...params }) -> ActionGenerateJoinClientTokenResponse</code>
- <code title="post /rooms/{room_id}/actions/refresh_client_token">client.rooms.actions.<a href="./src/resources/rooms/actions.ts">refreshClientToken</a>(roomID, { ...params }) -> ActionRefreshClientTokenResponse</code>

## Sessions

Types:

- <code><a href="./src/resources/rooms/sessions/sessions.ts">SessionRetrieveResponse</a></code>
- <code><a href="./src/resources/rooms/sessions/sessions.ts">SessionList0Response</a></code>
- <code><a href="./src/resources/rooms/sessions/sessions.ts">SessionList1Response</a></code>
- <code><a href="./src/resources/rooms/sessions/sessions.ts">SessionRetrieveParticipantsResponse</a></code>

Methods:

- <code title="get /room_sessions/{room_session_id}">client.rooms.sessions.<a href="./src/resources/rooms/sessions/sessions.ts">retrieve</a>(roomSessionID, { ...params }) -> SessionRetrieveResponse</code>
- <code title="get /room_sessions">client.rooms.sessions.<a href="./src/resources/rooms/sessions/sessions.ts">list0</a>({ ...params }) -> SessionList0Response</code>
- <code title="get /rooms/{room_id}/sessions">client.rooms.sessions.<a href="./src/resources/rooms/sessions/sessions.ts">list1</a>(roomID, { ...params }) -> SessionList1Response</code>
- <code title="get /room_sessions/{room_session_id}/participants">client.rooms.sessions.<a href="./src/resources/rooms/sessions/sessions.ts">retrieveParticipants</a>(roomSessionID, { ...params }) -> SessionRetrieveParticipantsResponse</code>

### Actions

Types:

- <code><a href="./src/resources/rooms/sessions/actions.ts">ActionsParticipantsRequest</a></code>
- <code><a href="./src/resources/rooms/sessions/actions.ts">ActionEndResponse</a></code>
- <code><a href="./src/resources/rooms/sessions/actions.ts">ActionKickResponse</a></code>
- <code><a href="./src/resources/rooms/sessions/actions.ts">ActionMuteResponse</a></code>
- <code><a href="./src/resources/rooms/sessions/actions.ts">ActionUnmuteResponse</a></code>

Methods:

- <code title="post /room_sessions/{room_session_id}/actions/end">client.rooms.sessions.actions.<a href="./src/resources/rooms/sessions/actions.ts">end</a>(roomSessionID) -> ActionEndResponse</code>
- <code title="post /room_sessions/{room_session_id}/actions/kick">client.rooms.sessions.actions.<a href="./src/resources/rooms/sessions/actions.ts">kick</a>(roomSessionID, { ...params }) -> ActionKickResponse</code>
- <code title="post /room_sessions/{room_session_id}/actions/mute">client.rooms.sessions.actions.<a href="./src/resources/rooms/sessions/actions.ts">mute</a>(roomSessionID, { ...params }) -> ActionMuteResponse</code>
- <code title="post /room_sessions/{room_session_id}/actions/unmute">client.rooms.sessions.actions.<a href="./src/resources/rooms/sessions/actions.ts">unmute</a>(roomSessionID, { ...params }) -> ActionUnmuteResponse</code>

# Seti

Types:

- <code><a href="./src/resources/seti.ts">SetiRetrieveBlackBoxTestResultsResponse</a></code>

Methods:

- <code title="get /seti/black_box_test_results">client.seti.<a href="./src/resources/seti.ts">retrieveBlackBoxTestResults</a>({ ...params }) -> SetiRetrieveBlackBoxTestResultsResponse</code>

# ShortCodes

Types:

- <code><a href="./src/resources/short-codes.ts">ShortCodeRetrieveResponse</a></code>
- <code><a href="./src/resources/short-codes.ts">ShortCodeUpdateResponse</a></code>
- <code><a href="./src/resources/short-codes.ts">ShortCodeListResponse</a></code>

Methods:

- <code title="get /short_codes/{id}">client.shortCodes.<a href="./src/resources/short-codes.ts">retrieve</a>(id) -> ShortCodeRetrieveResponse</code>
- <code title="patch /short_codes/{id}">client.shortCodes.<a href="./src/resources/short-codes.ts">update</a>(id, { ...params }) -> ShortCodeUpdateResponse</code>
- <code title="get /short_codes">client.shortCodes.<a href="./src/resources/short-codes.ts">list</a>({ ...params }) -> ShortCodeListResponse</code>

# SimCardDataUsageNotifications

Types:

- <code><a href="./src/resources/sim-card-data-usage-notifications.ts">SimCardDataUsageNotification</a></code>
- <code><a href="./src/resources/sim-card-data-usage-notifications.ts">SimCardDataUsageNotificationCreateResponse</a></code>
- <code><a href="./src/resources/sim-card-data-usage-notifications.ts">SimCardDataUsageNotificationRetrieveResponse</a></code>
- <code><a href="./src/resources/sim-card-data-usage-notifications.ts">SimCardDataUsageNotificationUpdateResponse</a></code>
- <code><a href="./src/resources/sim-card-data-usage-notifications.ts">SimCardDataUsageNotificationListResponse</a></code>
- <code><a href="./src/resources/sim-card-data-usage-notifications.ts">SimCardDataUsageNotificationDeleteResponse</a></code>

Methods:

- <code title="post /sim_card_data_usage_notifications">client.simCardDataUsageNotifications.<a href="./src/resources/sim-card-data-usage-notifications.ts">create</a>({ ...params }) -> SimCardDataUsageNotificationCreateResponse</code>
- <code title="get /sim_card_data_usage_notifications/{id}">client.simCardDataUsageNotifications.<a href="./src/resources/sim-card-data-usage-notifications.ts">retrieve</a>(id) -> SimCardDataUsageNotificationRetrieveResponse</code>
- <code title="patch /sim_card_data_usage_notifications/{id}">client.simCardDataUsageNotifications.<a href="./src/resources/sim-card-data-usage-notifications.ts">update</a>(id, { ...params }) -> SimCardDataUsageNotificationUpdateResponse</code>
- <code title="get /sim_card_data_usage_notifications">client.simCardDataUsageNotifications.<a href="./src/resources/sim-card-data-usage-notifications.ts">list</a>({ ...params }) -> SimCardDataUsageNotificationListResponse</code>
- <code title="delete /sim_card_data_usage_notifications/{id}">client.simCardDataUsageNotifications.<a href="./src/resources/sim-card-data-usage-notifications.ts">delete</a>(id) -> SimCardDataUsageNotificationDeleteResponse</code>

# SimCardGroups

Types:

- <code><a href="./src/resources/sim-card-groups/sim-card-groups.ts">ConsumedData</a></code>
- <code><a href="./src/resources/sim-card-groups/sim-card-groups.ts">SimCardGroup</a></code>
- <code><a href="./src/resources/sim-card-groups/sim-card-groups.ts">SimCardGroupCreateResponse</a></code>
- <code><a href="./src/resources/sim-card-groups/sim-card-groups.ts">SimCardGroupRetrieveResponse</a></code>
- <code><a href="./src/resources/sim-card-groups/sim-card-groups.ts">SimCardGroupUpdateResponse</a></code>
- <code><a href="./src/resources/sim-card-groups/sim-card-groups.ts">SimCardGroupListResponse</a></code>
- <code><a href="./src/resources/sim-card-groups/sim-card-groups.ts">SimCardGroupDeleteResponse</a></code>

Methods:

- <code title="post /sim_card_groups">client.simCardGroups.<a href="./src/resources/sim-card-groups/sim-card-groups.ts">create</a>({ ...params }) -> SimCardGroupCreateResponse</code>
- <code title="get /sim_card_groups/{id}">client.simCardGroups.<a href="./src/resources/sim-card-groups/sim-card-groups.ts">retrieve</a>(id, { ...params }) -> SimCardGroupRetrieveResponse</code>
- <code title="patch /sim_card_groups/{id}">client.simCardGroups.<a href="./src/resources/sim-card-groups/sim-card-groups.ts">update</a>(id, { ...params }) -> SimCardGroupUpdateResponse</code>
- <code title="get /sim_card_groups">client.simCardGroups.<a href="./src/resources/sim-card-groups/sim-card-groups.ts">list</a>({ ...params }) -> SimCardGroupListResponse</code>
- <code title="delete /sim_card_groups/{id}">client.simCardGroups.<a href="./src/resources/sim-card-groups/sim-card-groups.ts">delete</a>(id) -> SimCardGroupDeleteResponse</code>

## Actions

Types:

- <code><a href="./src/resources/sim-card-groups/actions.ts">SimCardGroupAction</a></code>
- <code><a href="./src/resources/sim-card-groups/actions.ts">ActionRetrieveResponse</a></code>
- <code><a href="./src/resources/sim-card-groups/actions.ts">ActionListResponse</a></code>
- <code><a href="./src/resources/sim-card-groups/actions.ts">ActionRemovePrivateWirelessGatewayResponse</a></code>
- <code><a href="./src/resources/sim-card-groups/actions.ts">ActionRemoveWirelessBlocklistResponse</a></code>
- <code><a href="./src/resources/sim-card-groups/actions.ts">ActionSetPrivateWirelessGatewayResponse</a></code>
- <code><a href="./src/resources/sim-card-groups/actions.ts">ActionSetWirelessBlocklistResponse</a></code>

Methods:

- <code title="get /sim_card_group_actions/{id}">client.simCardGroups.actions.<a href="./src/resources/sim-card-groups/actions.ts">retrieve</a>(id) -> ActionRetrieveResponse</code>
- <code title="get /sim_card_group_actions">client.simCardGroups.actions.<a href="./src/resources/sim-card-groups/actions.ts">list</a>({ ...params }) -> ActionListResponse</code>
- <code title="post /sim_card_groups/{id}/actions/remove_private_wireless_gateway">client.simCardGroups.actions.<a href="./src/resources/sim-card-groups/actions.ts">removePrivateWirelessGateway</a>(id) -> ActionRemovePrivateWirelessGatewayResponse</code>
- <code title="post /sim_card_groups/{id}/actions/remove_wireless_blocklist">client.simCardGroups.actions.<a href="./src/resources/sim-card-groups/actions.ts">removeWirelessBlocklist</a>(id) -> ActionRemoveWirelessBlocklistResponse</code>
- <code title="post /sim_card_groups/{id}/actions/set_private_wireless_gateway">client.simCardGroups.actions.<a href="./src/resources/sim-card-groups/actions.ts">setPrivateWirelessGateway</a>(id, { ...params }) -> ActionSetPrivateWirelessGatewayResponse</code>
- <code title="post /sim_card_groups/{id}/actions/set_wireless_blocklist">client.simCardGroups.actions.<a href="./src/resources/sim-card-groups/actions.ts">setWirelessBlocklist</a>(id, { ...params }) -> ActionSetWirelessBlocklistResponse</code>

# SimCardOrderPreview

Types:

- <code><a href="./src/resources/sim-card-order-preview.ts">SimCardOrderPreviewPreviewResponse</a></code>

Methods:

- <code title="post /sim_card_order_preview">client.simCardOrderPreview.<a href="./src/resources/sim-card-order-preview.ts">preview</a>({ ...params }) -> SimCardOrderPreviewPreviewResponse</code>

# SimCardOrders

Types:

- <code><a href="./src/resources/sim-card-orders.ts">SimCardOrder</a></code>
- <code><a href="./src/resources/sim-card-orders.ts">SimCardOrderCreateResponse</a></code>
- <code><a href="./src/resources/sim-card-orders.ts">SimCardOrderRetrieveResponse</a></code>
- <code><a href="./src/resources/sim-card-orders.ts">SimCardOrderListResponse</a></code>

Methods:

- <code title="post /sim_card_orders">client.simCardOrders.<a href="./src/resources/sim-card-orders.ts">create</a>({ ...params }) -> SimCardOrderCreateResponse</code>
- <code title="get /sim_card_orders/{id}">client.simCardOrders.<a href="./src/resources/sim-card-orders.ts">retrieve</a>(id) -> SimCardOrderRetrieveResponse</code>
- <code title="get /sim_card_orders">client.simCardOrders.<a href="./src/resources/sim-card-orders.ts">list</a>({ ...params }) -> SimCardOrderListResponse</code>

# SimCards

Types:

- <code><a href="./src/resources/sim-cards/sim-cards.ts">SimCard</a></code>
- <code><a href="./src/resources/sim-cards/sim-cards.ts">SimCardRetrieveResponse</a></code>
- <code><a href="./src/resources/sim-cards/sim-cards.ts">SimCardUpdateResponse</a></code>
- <code><a href="./src/resources/sim-cards/sim-cards.ts">SimCardListResponse</a></code>
- <code><a href="./src/resources/sim-cards/sim-cards.ts">SimCardDeleteResponse</a></code>
- <code><a href="./src/resources/sim-cards/sim-cards.ts">SimCardGetActivationCodeResponse</a></code>
- <code><a href="./src/resources/sim-cards/sim-cards.ts">SimCardGetDeviceDetailsResponse</a></code>
- <code><a href="./src/resources/sim-cards/sim-cards.ts">SimCardGetPublicIPResponse</a></code>
- <code><a href="./src/resources/sim-cards/sim-cards.ts">SimCardListWirelessConnectivityLogsResponse</a></code>

Methods:

- <code title="get /sim_cards/{id}">client.simCards.<a href="./src/resources/sim-cards/sim-cards.ts">retrieve</a>(id, { ...params }) -> SimCardRetrieveResponse</code>
- <code title="patch /sim_cards/{id}">client.simCards.<a href="./src/resources/sim-cards/sim-cards.ts">update</a>(id, { ...params }) -> SimCardUpdateResponse</code>
- <code title="get /sim_cards">client.simCards.<a href="./src/resources/sim-cards/sim-cards.ts">list</a>({ ...params }) -> SimCardListResponse</code>
- <code title="delete /sim_cards/{id}">client.simCards.<a href="./src/resources/sim-cards/sim-cards.ts">delete</a>(id, { ...params }) -> SimCardDeleteResponse</code>
- <code title="get /sim_cards/{id}/activation_code">client.simCards.<a href="./src/resources/sim-cards/sim-cards.ts">getActivationCode</a>(id) -> SimCardGetActivationCodeResponse</code>
- <code title="get /sim_cards/{id}/device_details">client.simCards.<a href="./src/resources/sim-cards/sim-cards.ts">getDeviceDetails</a>(id) -> SimCardGetDeviceDetailsResponse</code>
- <code title="get /sim_cards/{id}/public_ip">client.simCards.<a href="./src/resources/sim-cards/sim-cards.ts">getPublicIP</a>(id) -> SimCardGetPublicIPResponse</code>
- <code title="get /sim_cards/{id}/wireless_connectivity_logs">client.simCards.<a href="./src/resources/sim-cards/sim-cards.ts">listWirelessConnectivityLogs</a>(id, { ...params }) -> SimCardListWirelessConnectivityLogsResponse</code>

## Actions

Types:

- <code><a href="./src/resources/sim-cards/actions.ts">SimCardAction</a></code>
- <code><a href="./src/resources/sim-cards/actions.ts">ActionRetrieveResponse</a></code>
- <code><a href="./src/resources/sim-cards/actions.ts">ActionListResponse</a></code>
- <code><a href="./src/resources/sim-cards/actions.ts">ActionBulkSetPublicIPsResponse</a></code>
- <code><a href="./src/resources/sim-cards/actions.ts">ActionDisableResponse</a></code>
- <code><a href="./src/resources/sim-cards/actions.ts">ActionEnableResponse</a></code>
- <code><a href="./src/resources/sim-cards/actions.ts">ActionRemovePublicIPResponse</a></code>
- <code><a href="./src/resources/sim-cards/actions.ts">ActionSetPublicIPResponse</a></code>
- <code><a href="./src/resources/sim-cards/actions.ts">ActionSetStandbyResponse</a></code>
- <code><a href="./src/resources/sim-cards/actions.ts">ActionValidateRegistrationCodesResponse</a></code>

Methods:

- <code title="get /sim_card_actions/{id}">client.simCards.actions.<a href="./src/resources/sim-cards/actions.ts">retrieve</a>(id) -> ActionRetrieveResponse</code>
- <code title="get /sim_card_actions">client.simCards.actions.<a href="./src/resources/sim-cards/actions.ts">list</a>({ ...params }) -> ActionListResponse</code>
- <code title="post /sim_cards/actions/bulk_set_public_ips">client.simCards.actions.<a href="./src/resources/sim-cards/actions.ts">bulkSetPublicIPs</a>({ ...params }) -> ActionBulkSetPublicIPsResponse</code>
- <code title="post /sim_cards/{id}/actions/disable">client.simCards.actions.<a href="./src/resources/sim-cards/actions.ts">disable</a>(id) -> ActionDisableResponse</code>
- <code title="post /sim_cards/{id}/actions/enable">client.simCards.actions.<a href="./src/resources/sim-cards/actions.ts">enable</a>(id) -> ActionEnableResponse</code>
- <code title="post /sim_cards/{id}/actions/remove_public_ip">client.simCards.actions.<a href="./src/resources/sim-cards/actions.ts">removePublicIP</a>(id) -> ActionRemovePublicIPResponse</code>
- <code title="post /sim_cards/{id}/actions/set_public_ip">client.simCards.actions.<a href="./src/resources/sim-cards/actions.ts">setPublicIP</a>(id, { ...params }) -> ActionSetPublicIPResponse</code>
- <code title="post /sim_cards/{id}/actions/set_standby">client.simCards.actions.<a href="./src/resources/sim-cards/actions.ts">setStandby</a>(id) -> ActionSetStandbyResponse</code>
- <code title="post /sim_cards/actions/validate_registration_codes">client.simCards.actions.<a href="./src/resources/sim-cards/actions.ts">validateRegistrationCodes</a>({ ...params }) -> ActionValidateRegistrationCodesResponse</code>

# SiprecConnectors

Types:

- <code><a href="./src/resources/siprec-connectors.ts">SiprecConnectorCreateResponse</a></code>
- <code><a href="./src/resources/siprec-connectors.ts">SiprecConnectorRetrieveResponse</a></code>
- <code><a href="./src/resources/siprec-connectors.ts">SiprecConnectorUpdateResponse</a></code>

Methods:

- <code title="post /siprec_connectors">client.siprecConnectors.<a href="./src/resources/siprec-connectors.ts">create</a>({ ...params }) -> SiprecConnectorCreateResponse</code>
- <code title="get /siprec_connectors/{connector_name}">client.siprecConnectors.<a href="./src/resources/siprec-connectors.ts">retrieve</a>(connectorName) -> SiprecConnectorRetrieveResponse</code>
- <code title="put /siprec_connectors/{connector_name}">client.siprecConnectors.<a href="./src/resources/siprec-connectors.ts">update</a>(connectorName, { ...params }) -> SiprecConnectorUpdateResponse</code>
- <code title="delete /siprec_connectors/{connector_name}">client.siprecConnectors.<a href="./src/resources/siprec-connectors.ts">delete</a>(connectorName) -> void</code>

# Storage

Types:

- <code><a href="./src/resources/storage/storage.ts">StorageListMigrationSourceCoverageResponse</a></code>

Methods:

- <code title="get /storage/migration_source_coverage">client.storage.<a href="./src/resources/storage/storage.ts">listMigrationSourceCoverage</a>() -> StorageListMigrationSourceCoverageResponse</code>

## Buckets

Types:

- <code><a href="./src/resources/storage/buckets/buckets.ts">BucketCreatePresignedURLResponse</a></code>

Methods:

- <code title="post /storage/buckets/{bucketName}/{objectName}/presigned_url">client.storage.buckets.<a href="./src/resources/storage/buckets/buckets.ts">createPresignedURL</a>(objectName, { ...params }) -> BucketCreatePresignedURLResponse</code>

### SslCertificate

Types:

- <code><a href="./src/resources/storage/buckets/ssl-certificate.ts">SslCertificate</a></code>
- <code><a href="./src/resources/storage/buckets/ssl-certificate.ts">SslCertificateCreateResponse</a></code>
- <code><a href="./src/resources/storage/buckets/ssl-certificate.ts">SslCertificateRetrieveResponse</a></code>
- <code><a href="./src/resources/storage/buckets/ssl-certificate.ts">SslCertificateDeleteResponse</a></code>

Methods:

- <code title="put /storage/buckets/{bucketName}/ssl_certificate">client.storage.buckets.sslCertificate.<a href="./src/resources/storage/buckets/ssl-certificate.ts">create</a>(bucketName, { ...params }) -> SslCertificateCreateResponse</code>
- <code title="get /storage/buckets/{bucketName}/ssl_certificate">client.storage.buckets.sslCertificate.<a href="./src/resources/storage/buckets/ssl-certificate.ts">retrieve</a>(bucketName) -> SslCertificateRetrieveResponse</code>
- <code title="delete /storage/buckets/{bucketName}/ssl_certificate">client.storage.buckets.sslCertificate.<a href="./src/resources/storage/buckets/ssl-certificate.ts">delete</a>(bucketName) -> SslCertificateDeleteResponse</code>

### Usage

Types:

- <code><a href="./src/resources/storage/buckets/usage.ts">PaginationMetaSimple</a></code>
- <code><a href="./src/resources/storage/buckets/usage.ts">UsageGetAPIUsageResponse</a></code>
- <code><a href="./src/resources/storage/buckets/usage.ts">UsageGetBucketUsageResponse</a></code>

Methods:

- <code title="get /storage/buckets/{bucketName}/usage/api">client.storage.buckets.usage.<a href="./src/resources/storage/buckets/usage.ts">getAPIUsage</a>(bucketName, { ...params }) -> UsageGetAPIUsageResponse</code>
- <code title="get /storage/buckets/{bucketName}/usage/storage">client.storage.buckets.usage.<a href="./src/resources/storage/buckets/usage.ts">getBucketUsage</a>(bucketName) -> UsageGetBucketUsageResponse</code>

## MigrationSources

Types:

- <code><a href="./src/resources/storage/migration-sources.ts">MigrationSourceParams</a></code>
- <code><a href="./src/resources/storage/migration-sources.ts">MigrationSourceCreateResponse</a></code>
- <code><a href="./src/resources/storage/migration-sources.ts">MigrationSourceRetrieveResponse</a></code>
- <code><a href="./src/resources/storage/migration-sources.ts">MigrationSourceListResponse</a></code>
- <code><a href="./src/resources/storage/migration-sources.ts">MigrationSourceDeleteResponse</a></code>

Methods:

- <code title="post /storage/migration_sources">client.storage.migrationSources.<a href="./src/resources/storage/migration-sources.ts">create</a>({ ...params }) -> MigrationSourceCreateResponse</code>
- <code title="get /storage/migration_sources/{id}">client.storage.migrationSources.<a href="./src/resources/storage/migration-sources.ts">retrieve</a>(id) -> MigrationSourceRetrieveResponse</code>
- <code title="get /storage/migration_sources">client.storage.migrationSources.<a href="./src/resources/storage/migration-sources.ts">list</a>() -> MigrationSourceListResponse</code>
- <code title="delete /storage/migration_sources/{id}">client.storage.migrationSources.<a href="./src/resources/storage/migration-sources.ts">delete</a>(id) -> MigrationSourceDeleteResponse</code>

## Migrations

Types:

- <code><a href="./src/resources/storage/migrations/migrations.ts">MigrationParams</a></code>
- <code><a href="./src/resources/storage/migrations/migrations.ts">MigrationCreateResponse</a></code>
- <code><a href="./src/resources/storage/migrations/migrations.ts">MigrationRetrieveResponse</a></code>
- <code><a href="./src/resources/storage/migrations/migrations.ts">MigrationListResponse</a></code>

Methods:

- <code title="post /storage/migrations">client.storage.migrations.<a href="./src/resources/storage/migrations/migrations.ts">create</a>({ ...params }) -> MigrationCreateResponse</code>
- <code title="get /storage/migrations/{id}">client.storage.migrations.<a href="./src/resources/storage/migrations/migrations.ts">retrieve</a>(id) -> MigrationRetrieveResponse</code>
- <code title="get /storage/migrations">client.storage.migrations.<a href="./src/resources/storage/migrations/migrations.ts">list</a>() -> MigrationListResponse</code>

### Actions

Types:

- <code><a href="./src/resources/storage/migrations/actions.ts">ActionStopResponse</a></code>

Methods:

- <code title="post /storage/migrations/{id}/actions/stop">client.storage.migrations.actions.<a href="./src/resources/storage/migrations/actions.ts">stop</a>(id) -> ActionStopResponse</code>

# SubNumberOrders

Types:

- <code><a href="./src/resources/sub-number-orders.ts">SubNumberOrder</a></code>
- <code><a href="./src/resources/sub-number-orders.ts">SubNumberOrderRegulatoryRequirement</a></code>
- <code><a href="./src/resources/sub-number-orders.ts">SubNumberOrderRetrieveResponse</a></code>
- <code><a href="./src/resources/sub-number-orders.ts">SubNumberOrderUpdateResponse</a></code>
- <code><a href="./src/resources/sub-number-orders.ts">SubNumberOrderListResponse</a></code>
- <code><a href="./src/resources/sub-number-orders.ts">SubNumberOrderCancelResponse</a></code>
- <code><a href="./src/resources/sub-number-orders.ts">SubNumberOrderUpdateRequirementGroupResponse</a></code>

Methods:

- <code title="get /sub_number_orders/{sub_number_order_id}">client.subNumberOrders.<a href="./src/resources/sub-number-orders.ts">retrieve</a>(subNumberOrderID, { ...params }) -> SubNumberOrderRetrieveResponse</code>
- <code title="patch /sub_number_orders/{sub_number_order_id}">client.subNumberOrders.<a href="./src/resources/sub-number-orders.ts">update</a>(subNumberOrderID, { ...params }) -> SubNumberOrderUpdateResponse</code>
- <code title="get /sub_number_orders">client.subNumberOrders.<a href="./src/resources/sub-number-orders.ts">list</a>({ ...params }) -> SubNumberOrderListResponse</code>
- <code title="patch /sub_number_orders/{sub_number_order_id}/cancel">client.subNumberOrders.<a href="./src/resources/sub-number-orders.ts">cancel</a>(subNumberOrderID) -> SubNumberOrderCancelResponse</code>
- <code title="post /sub_number_orders/{id}/requirement_group">client.subNumberOrders.<a href="./src/resources/sub-number-orders.ts">updateRequirementGroup</a>(id, { ...params }) -> SubNumberOrderUpdateRequirementGroupResponse</code>

# SubNumberOrdersReport

Types:

- <code><a href="./src/resources/sub-number-orders-report.ts">SubNumberOrdersReportCreateResponse</a></code>
- <code><a href="./src/resources/sub-number-orders-report.ts">SubNumberOrdersReportRetrieveResponse</a></code>
- <code><a href="./src/resources/sub-number-orders-report.ts">SubNumberOrdersReportDownloadResponse</a></code>

Methods:

- <code title="post /sub_number_orders_report">client.subNumberOrdersReport.<a href="./src/resources/sub-number-orders-report.ts">create</a>({ ...params }) -> SubNumberOrdersReportCreateResponse</code>
- <code title="get /sub_number_orders_report/{report_id}">client.subNumberOrdersReport.<a href="./src/resources/sub-number-orders-report.ts">retrieve</a>(reportID) -> SubNumberOrdersReportRetrieveResponse</code>
- <code title="get /sub_number_orders_report/{report_id}/download">client.subNumberOrdersReport.<a href="./src/resources/sub-number-orders-report.ts">download</a>(reportID) -> string</code>

# TelephonyCredentials

Types:

- <code><a href="./src/resources/telephony-credentials.ts">TelephonyCredential</a></code>
- <code><a href="./src/resources/telephony-credentials.ts">TelephonyCredentialCreateResponse</a></code>
- <code><a href="./src/resources/telephony-credentials.ts">TelephonyCredentialRetrieveResponse</a></code>
- <code><a href="./src/resources/telephony-credentials.ts">TelephonyCredentialUpdateResponse</a></code>
- <code><a href="./src/resources/telephony-credentials.ts">TelephonyCredentialListResponse</a></code>
- <code><a href="./src/resources/telephony-credentials.ts">TelephonyCredentialDeleteResponse</a></code>
- <code><a href="./src/resources/telephony-credentials.ts">TelephonyCredentialCreateTokenResponse</a></code>

Methods:

- <code title="post /telephony_credentials">client.telephonyCredentials.<a href="./src/resources/telephony-credentials.ts">create</a>({ ...params }) -> TelephonyCredentialCreateResponse</code>
- <code title="get /telephony_credentials/{id}">client.telephonyCredentials.<a href="./src/resources/telephony-credentials.ts">retrieve</a>(id) -> TelephonyCredentialRetrieveResponse</code>
- <code title="patch /telephony_credentials/{id}">client.telephonyCredentials.<a href="./src/resources/telephony-credentials.ts">update</a>(id, { ...params }) -> TelephonyCredentialUpdateResponse</code>
- <code title="get /telephony_credentials">client.telephonyCredentials.<a href="./src/resources/telephony-credentials.ts">list</a>({ ...params }) -> TelephonyCredentialListResponse</code>
- <code title="delete /telephony_credentials/{id}">client.telephonyCredentials.<a href="./src/resources/telephony-credentials.ts">delete</a>(id) -> TelephonyCredentialDeleteResponse</code>
- <code title="post /telephony_credentials/{id}/token">client.telephonyCredentials.<a href="./src/resources/telephony-credentials.ts">createToken</a>(id) -> string</code>

# Texml

Types:

- <code><a href="./src/resources/texml/texml.ts">TexmlSecretsResponse</a></code>

Methods:

- <code title="post /texml/secrets">client.texml.<a href="./src/resources/texml/texml.ts">secrets</a>({ ...params }) -> TexmlSecretsResponse</code>

## Accounts

Types:

- <code><a href="./src/resources/texml/accounts/accounts.ts">TexmlGetCallRecordingResponseBody</a></code>
- <code><a href="./src/resources/texml/accounts/accounts.ts">TexmlRecordingSubresourcesUris</a></code>
- <code><a href="./src/resources/texml/accounts/accounts.ts">AccountRetrieveRecordingsJsonResponse</a></code>
- <code><a href="./src/resources/texml/accounts/accounts.ts">AccountRetrieveTranscriptionsJsonResponse</a></code>

Methods:

- <code title="get /texml/Accounts/{account_sid}/Recordings.json">client.texml.accounts.<a href="./src/resources/texml/accounts/accounts.ts">retrieveRecordingsJson</a>(accountSid, { ...params }) -> AccountRetrieveRecordingsJsonResponse</code>
- <code title="get /texml/Accounts/{account_sid}/Transcriptions.json">client.texml.accounts.<a href="./src/resources/texml/accounts/accounts.ts">retrieveTranscriptionsJson</a>(accountSid, { ...params }) -> AccountRetrieveTranscriptionsJsonResponse</code>

### Calls

Types:

- <code><a href="./src/resources/texml/accounts/calls/calls.ts">UpdateCall</a></code>
- <code><a href="./src/resources/texml/accounts/calls/calls.ts">CallRetrieveResponse</a></code>
- <code><a href="./src/resources/texml/accounts/calls/calls.ts">CallUpdateResponse</a></code>
- <code><a href="./src/resources/texml/accounts/calls/calls.ts">CallCallsResponse</a></code>
- <code><a href="./src/resources/texml/accounts/calls/calls.ts">CallRetrieveCallsResponse</a></code>
- <code><a href="./src/resources/texml/accounts/calls/calls.ts">CallSiprecJsonResponse</a></code>
- <code><a href="./src/resources/texml/accounts/calls/calls.ts">CallStreamsJsonResponse</a></code>

Methods:

- <code title="get /texml/Accounts/{account_sid}/Calls/{call_sid}">client.texml.accounts.calls.<a href="./src/resources/texml/accounts/calls/calls.ts">retrieve</a>(callSid, { ...params }) -> CallRetrieveResponse</code>
- <code title="post /texml/Accounts/{account_sid}/Calls/{call_sid}">client.texml.accounts.calls.<a href="./src/resources/texml/accounts/calls/calls.ts">update</a>(callSid, { ...params }) -> CallUpdateResponse</code>
- <code title="post /texml/Accounts/{account_sid}/Calls">client.texml.accounts.calls.<a href="./src/resources/texml/accounts/calls/calls.ts">calls</a>(accountSid, { ...params }) -> CallCallsResponse</code>
- <code title="get /texml/Accounts/{account_sid}/Calls">client.texml.accounts.calls.<a href="./src/resources/texml/accounts/calls/calls.ts">retrieveCalls</a>(accountSid, { ...params }) -> CallRetrieveCallsResponse</code>
- <code title="post /texml/Accounts/{account_sid}/Calls/{call_sid}/Siprec.json">client.texml.accounts.calls.<a href="./src/resources/texml/accounts/calls/calls.ts">siprecJson</a>(callSid, { ...params }) -> CallSiprecJsonResponse</code>
- <code title="post /texml/Accounts/{account_sid}/Calls/{call_sid}/Streams.json">client.texml.accounts.calls.<a href="./src/resources/texml/accounts/calls/calls.ts">streamsJson</a>(callSid, { ...params }) -> CallStreamsJsonResponse</code>

#### RecordingsJson

Types:

- <code><a href="./src/resources/texml/accounts/calls/recordings-json.ts">RecordingsJsonRecordingsJsonResponse</a></code>
- <code><a href="./src/resources/texml/accounts/calls/recordings-json.ts">RecordingsJsonRetrieveRecordingsJsonResponse</a></code>

Methods:

- <code title="post /texml/Accounts/{account_sid}/Calls/{call_sid}/Recordings.json">client.texml.accounts.calls.recordingsJson.<a href="./src/resources/texml/accounts/calls/recordings-json.ts">recordingsJson</a>(callSid, { ...params }) -> RecordingsJsonRecordingsJsonResponse</code>
- <code title="get /texml/Accounts/{account_sid}/Calls/{call_sid}/Recordings.json">client.texml.accounts.calls.recordingsJson.<a href="./src/resources/texml/accounts/calls/recordings-json.ts">retrieveRecordingsJson</a>(callSid, { ...params }) -> RecordingsJsonRetrieveRecordingsJsonResponse</code>

#### Recordings

Types:

- <code><a href="./src/resources/texml/accounts/calls/recordings.ts">RecordingRecordingSidJsonResponse</a></code>

Methods:

- <code title="post /texml/Accounts/{account_sid}/Calls/{call_sid}/Recordings/{recording_sid}.json">client.texml.accounts.calls.recordings.<a href="./src/resources/texml/accounts/calls/recordings.ts">recordingSidJson</a>(recordingSid, { ...params }) -> RecordingRecordingSidJsonResponse</code>

#### Siprec

Types:

- <code><a href="./src/resources/texml/accounts/calls/siprec.ts">SiprecSiprecSidJsonResponse</a></code>

Methods:

- <code title="post /texml/Accounts/{account_sid}/Calls/{call_sid}/Siprec/{siprec_sid}.json">client.texml.accounts.calls.siprec.<a href="./src/resources/texml/accounts/calls/siprec.ts">siprecSidJson</a>(siprecSid, { ...params }) -> SiprecSiprecSidJsonResponse</code>

#### Streams

Types:

- <code><a href="./src/resources/texml/accounts/calls/streams.ts">StreamStreamingSidJsonResponse</a></code>

Methods:

- <code title="post /texml/Accounts/{account_sid}/Calls/{call_sid}/Streams/{streaming_sid}.json">client.texml.accounts.calls.streams.<a href="./src/resources/texml/accounts/calls/streams.ts">streamingSidJson</a>(streamingSid, { ...params }) -> StreamStreamingSidJsonResponse</code>

### Conferences

Types:

- <code><a href="./src/resources/texml/accounts/conferences/conferences.ts">ConferenceRetrieveResponse</a></code>
- <code><a href="./src/resources/texml/accounts/conferences/conferences.ts">ConferenceUpdateResponse</a></code>
- <code><a href="./src/resources/texml/accounts/conferences/conferences.ts">ConferenceRetrieveConferencesResponse</a></code>
- <code><a href="./src/resources/texml/accounts/conferences/conferences.ts">ConferenceRetrieveRecordingsResponse</a></code>
- <code><a href="./src/resources/texml/accounts/conferences/conferences.ts">ConferenceRetrieveRecordingsJsonResponse</a></code>

Methods:

- <code title="get /texml/Accounts/{account_sid}/Conferences/{conference_sid}">client.texml.accounts.conferences.<a href="./src/resources/texml/accounts/conferences/conferences.ts">retrieve</a>(conferenceSid, { ...params }) -> ConferenceRetrieveResponse</code>
- <code title="post /texml/Accounts/{account_sid}/Conferences/{conference_sid}">client.texml.accounts.conferences.<a href="./src/resources/texml/accounts/conferences/conferences.ts">update</a>(conferenceSid, { ...params }) -> ConferenceUpdateResponse</code>
- <code title="get /texml/Accounts/{account_sid}/Conferences">client.texml.accounts.conferences.<a href="./src/resources/texml/accounts/conferences/conferences.ts">retrieveConferences</a>(accountSid, { ...params }) -> ConferenceRetrieveConferencesResponse</code>
- <code title="get /texml/Accounts/{account_sid}/Conferences/{conference_sid}/Recordings">client.texml.accounts.conferences.<a href="./src/resources/texml/accounts/conferences/conferences.ts">retrieveRecordings</a>(conferenceSid, { ...params }) -> ConferenceRetrieveRecordingsResponse</code>
- <code title="get /texml/Accounts/{account_sid}/Conferences/{conference_sid}/Recordings.json">client.texml.accounts.conferences.<a href="./src/resources/texml/accounts/conferences/conferences.ts">retrieveRecordingsJson</a>(conferenceSid, { ...params }) -> ConferenceRetrieveRecordingsJsonResponse</code>

#### Participants

Types:

- <code><a href="./src/resources/texml/accounts/conferences/participants.ts">ParticipantRetrieveResponse</a></code>
- <code><a href="./src/resources/texml/accounts/conferences/participants.ts">ParticipantUpdateResponse</a></code>
- <code><a href="./src/resources/texml/accounts/conferences/participants.ts">ParticipantParticipantsResponse</a></code>
- <code><a href="./src/resources/texml/accounts/conferences/participants.ts">ParticipantRetrieveParticipantsResponse</a></code>

Methods:

- <code title="get /texml/Accounts/{account_sid}/Conferences/{conference_sid}/Participants/{call_sid_or_participant_label}">client.texml.accounts.conferences.participants.<a href="./src/resources/texml/accounts/conferences/participants.ts">retrieve</a>(callSidOrParticipantLabel, { ...params }) -> ParticipantRetrieveResponse</code>
- <code title="post /texml/Accounts/{account_sid}/Conferences/{conference_sid}/Participants/{call_sid_or_participant_label}">client.texml.accounts.conferences.participants.<a href="./src/resources/texml/accounts/conferences/participants.ts">update</a>(callSidOrParticipantLabel, { ...params }) -> ParticipantUpdateResponse</code>
- <code title="delete /texml/Accounts/{account_sid}/Conferences/{conference_sid}/Participants/{call_sid_or_participant_label}">client.texml.accounts.conferences.participants.<a href="./src/resources/texml/accounts/conferences/participants.ts">delete</a>(callSidOrParticipantLabel, { ...params }) -> void</code>
- <code title="post /texml/Accounts/{account_sid}/Conferences/{conference_sid}/Participants">client.texml.accounts.conferences.participants.<a href="./src/resources/texml/accounts/conferences/participants.ts">participants</a>(conferenceSid, { ...params }) -> ParticipantParticipantsResponse</code>
- <code title="get /texml/Accounts/{account_sid}/Conferences/{conference_sid}/Participants">client.texml.accounts.conferences.participants.<a href="./src/resources/texml/accounts/conferences/participants.ts">retrieveParticipants</a>(conferenceSid, { ...params }) -> ParticipantRetrieveParticipantsResponse</code>

### Recordings

#### Json

Methods:

- <code title="delete /texml/Accounts/{account_sid}/Recordings/{recording_sid}.json">client.texml.accounts.recordings.json.<a href="./src/resources/texml/accounts/recordings/json.ts">deleteRecordingSidJson</a>(recordingSid, { ...params }) -> void</code>
- <code title="get /texml/Accounts/{account_sid}/Recordings/{recording_sid}.json">client.texml.accounts.recordings.json.<a href="./src/resources/texml/accounts/recordings/json.ts">retrieveRecordingSidJson</a>(recordingSid, { ...params }) -> TexmlGetCallRecordingResponseBody</code>

### Transcriptions

#### Json

Types:

- <code><a href="./src/resources/texml/accounts/transcriptions/json.ts">JsonRetrieveRecordingTranscriptionSidJsonResponse</a></code>

Methods:

- <code title="delete /texml/Accounts/{account_sid}/Transcriptions/{recording_transcription_sid}.json">client.texml.accounts.transcriptions.json.<a href="./src/resources/texml/accounts/transcriptions/json.ts">deleteRecordingTranscriptionSidJson</a>(recordingTranscriptionSid, { ...params }) -> void</code>
- <code title="get /texml/Accounts/{account_sid}/Transcriptions/{recording_transcription_sid}.json">client.texml.accounts.transcriptions.json.<a href="./src/resources/texml/accounts/transcriptions/json.ts">retrieveRecordingTranscriptionSidJson</a>(recordingTranscriptionSid, { ...params }) -> JsonRetrieveRecordingTranscriptionSidJsonResponse</code>

## Calls

Types:

- <code><a href="./src/resources/texml/calls.ts">CallUpdateResponse</a></code>
- <code><a href="./src/resources/texml/calls.ts">CallInitiateResponse</a></code>

Methods:

- <code title="post /texml/calls/{call_sid}/update">client.texml.calls.<a href="./src/resources/texml/calls.ts">update</a>(callSid, { ...params }) -> CallUpdateResponse</code>
- <code title="post /texml/calls/{application_id}">client.texml.calls.<a href="./src/resources/texml/calls.ts">initiate</a>(applicationID, { ...params }) -> CallInitiateResponse</code>

# TexmlApplications

Types:

- <code><a href="./src/resources/texml-applications.ts">TexmlApplication</a></code>
- <code><a href="./src/resources/texml-applications.ts">TexmlApplicationCreateResponse</a></code>
- <code><a href="./src/resources/texml-applications.ts">TexmlApplicationRetrieveResponse</a></code>
- <code><a href="./src/resources/texml-applications.ts">TexmlApplicationUpdateResponse</a></code>
- <code><a href="./src/resources/texml-applications.ts">TexmlApplicationListResponse</a></code>
- <code><a href="./src/resources/texml-applications.ts">TexmlApplicationDeleteResponse</a></code>

Methods:

- <code title="post /texml_applications">client.texmlApplications.<a href="./src/resources/texml-applications.ts">create</a>({ ...params }) -> TexmlApplicationCreateResponse</code>
- <code title="get /texml_applications/{id}">client.texmlApplications.<a href="./src/resources/texml-applications.ts">retrieve</a>(id) -> TexmlApplicationRetrieveResponse</code>
- <code title="patch /texml_applications/{id}">client.texmlApplications.<a href="./src/resources/texml-applications.ts">update</a>(id, { ...params }) -> TexmlApplicationUpdateResponse</code>
- <code title="get /texml_applications">client.texmlApplications.<a href="./src/resources/texml-applications.ts">list</a>({ ...params }) -> TexmlApplicationListResponse</code>
- <code title="delete /texml_applications/{id}">client.texmlApplications.<a href="./src/resources/texml-applications.ts">delete</a>(id) -> TexmlApplicationDeleteResponse</code>

# TextToSpeech

Types:

- <code><a href="./src/resources/text-to-speech.ts">TextToSpeechListVoicesResponse</a></code>

Methods:

- <code title="post /text-to-speech/speech">client.textToSpeech.<a href="./src/resources/text-to-speech.ts">generateSpeech</a>({ ...params }) -> Response</code>
- <code title="get /text-to-speech/voices">client.textToSpeech.<a href="./src/resources/text-to-speech.ts">listVoices</a>({ ...params }) -> TextToSpeechListVoicesResponse</code>

# UsageReports

Types:

- <code><a href="./src/resources/usage-reports.ts">UsageReportListResponse</a></code>
- <code><a href="./src/resources/usage-reports.ts">UsageReportGetOptionsResponse</a></code>

Methods:

- <code title="get /usage_reports">client.usageReports.<a href="./src/resources/usage-reports.ts">list</a>({ ...params }) -> UsageReportListResponse</code>
- <code title="get /usage_reports/options">client.usageReports.<a href="./src/resources/usage-reports.ts">getOptions</a>({ ...params }) -> UsageReportGetOptionsResponse</code>

# UserAddresses

Types:

- <code><a href="./src/resources/user-addresses.ts">UserAddress</a></code>
- <code><a href="./src/resources/user-addresses.ts">UserAddressCreateResponse</a></code>
- <code><a href="./src/resources/user-addresses.ts">UserAddressRetrieveResponse</a></code>
- <code><a href="./src/resources/user-addresses.ts">UserAddressListResponse</a></code>

Methods:

- <code title="post /user_addresses">client.userAddresses.<a href="./src/resources/user-addresses.ts">create</a>({ ...params }) -> UserAddressCreateResponse</code>
- <code title="get /user_addresses/{id}">client.userAddresses.<a href="./src/resources/user-addresses.ts">retrieve</a>(id) -> UserAddressRetrieveResponse</code>
- <code title="get /user_addresses">client.userAddresses.<a href="./src/resources/user-addresses.ts">list</a>({ ...params }) -> UserAddressListResponse</code>

# UserTags

Types:

- <code><a href="./src/resources/user-tags.ts">UserTagListResponse</a></code>

Methods:

- <code title="get /user_tags">client.userTags.<a href="./src/resources/user-tags.ts">list</a>({ ...params }) -> UserTagListResponse</code>

# Verifications

Types:

- <code><a href="./src/resources/verifications/verifications.ts">CreateVerificationResponse</a></code>
- <code><a href="./src/resources/verifications/verifications.ts">Verification</a></code>
- <code><a href="./src/resources/verifications/verifications.ts">VerificationRetrieveResponse</a></code>

Methods:

- <code title="get /verifications/{verification_id}">client.verifications.<a href="./src/resources/verifications/verifications.ts">retrieve</a>(verificationID) -> VerificationRetrieveResponse</code>
- <code title="post /verifications/call">client.verifications.<a href="./src/resources/verifications/verifications.ts">triggerCall</a>({ ...params }) -> CreateVerificationResponse</code>
- <code title="post /verifications/flashcall">client.verifications.<a href="./src/resources/verifications/verifications.ts">triggerFlashcall</a>({ ...params }) -> CreateVerificationResponse</code>
- <code title="post /verifications/sms">client.verifications.<a href="./src/resources/verifications/verifications.ts">triggerSMS</a>({ ...params }) -> CreateVerificationResponse</code>

## ByPhoneNumber

Types:

- <code><a href="./src/resources/verifications/by-phone-number/by-phone-number.ts">ByPhoneNumberListResponse</a></code>

Methods:

- <code title="get /verifications/by_phone_number/{phone_number}">client.verifications.byPhoneNumber.<a href="./src/resources/verifications/by-phone-number/by-phone-number.ts">list</a>(phoneNumber) -> ByPhoneNumberListResponse</code>

### Actions

Types:

- <code><a href="./src/resources/verifications/by-phone-number/actions.ts">VerifyVerificationCodeResponse</a></code>

Methods:

- <code title="post /verifications/by_phone_number/{phone_number}/actions/verify">client.verifications.byPhoneNumber.actions.<a href="./src/resources/verifications/by-phone-number/actions.ts">verify</a>(phoneNumber, { ...params }) -> VerifyVerificationCodeResponse</code>

## Actions

Methods:

- <code title="post /verifications/{verification_id}/actions/verify">client.verifications.actions.<a href="./src/resources/verifications/actions.ts">verify</a>(verificationID, { ...params }) -> VerifyVerificationCodeResponse</code>

# VerifiedNumbers

Types:

- <code><a href="./src/resources/verified-numbers/verified-numbers.ts">VerifiedNumber</a></code>
- <code><a href="./src/resources/verified-numbers/verified-numbers.ts">VerifiedNumberDataWrapper</a></code>
- <code><a href="./src/resources/verified-numbers/verified-numbers.ts">VerifiedNumberCreateResponse</a></code>
- <code><a href="./src/resources/verified-numbers/verified-numbers.ts">VerifiedNumberListResponse</a></code>

Methods:

- <code title="post /verified_numbers">client.verifiedNumbers.<a href="./src/resources/verified-numbers/verified-numbers.ts">create</a>({ ...params }) -> VerifiedNumberCreateResponse</code>
- <code title="get /verified_numbers/{phone_number}">client.verifiedNumbers.<a href="./src/resources/verified-numbers/verified-numbers.ts">retrieve</a>(phoneNumber) -> VerifiedNumberDataWrapper</code>
- <code title="get /verified_numbers">client.verifiedNumbers.<a href="./src/resources/verified-numbers/verified-numbers.ts">list</a>({ ...params }) -> VerifiedNumberListResponse</code>
- <code title="delete /verified_numbers/{phone_number}">client.verifiedNumbers.<a href="./src/resources/verified-numbers/verified-numbers.ts">delete</a>(phoneNumber) -> VerifiedNumberDataWrapper</code>

## Actions

Methods:

- <code title="post /verified_numbers/{phone_number}/actions/verify">client.verifiedNumbers.actions.<a href="./src/resources/verified-numbers/actions.ts">submitVerificationCode</a>(phoneNumber, { ...params }) -> VerifiedNumberDataWrapper</code>

# VerifyProfiles

Types:

- <code><a href="./src/resources/verify-profiles.ts">VerifyProfile</a></code>
- <code><a href="./src/resources/verify-profiles.ts">VerifyProfileData</a></code>
- <code><a href="./src/resources/verify-profiles.ts">VerifyProfileMessageTemplateResponse</a></code>
- <code><a href="./src/resources/verify-profiles.ts">VerifyProfileListResponse</a></code>
- <code><a href="./src/resources/verify-profiles.ts">VerifyProfileCreateTemplateResponse</a></code>
- <code><a href="./src/resources/verify-profiles.ts">VerifyProfileRetrieveTemplatesResponse</a></code>
- <code><a href="./src/resources/verify-profiles.ts">VerifyProfileUpdateTemplateResponse</a></code>

Methods:

- <code title="post /verify_profiles">client.verifyProfiles.<a href="./src/resources/verify-profiles.ts">create</a>({ ...params }) -> VerifyProfileData</code>
- <code title="get /verify_profiles/{verify_profile_id}">client.verifyProfiles.<a href="./src/resources/verify-profiles.ts">retrieve</a>(verifyProfileID) -> VerifyProfileData</code>
- <code title="patch /verify_profiles/{verify_profile_id}">client.verifyProfiles.<a href="./src/resources/verify-profiles.ts">update</a>(verifyProfileID, { ...params }) -> VerifyProfileData</code>
- <code title="get /verify_profiles">client.verifyProfiles.<a href="./src/resources/verify-profiles.ts">list</a>({ ...params }) -> VerifyProfileListResponse</code>
- <code title="delete /verify_profiles/{verify_profile_id}">client.verifyProfiles.<a href="./src/resources/verify-profiles.ts">delete</a>(verifyProfileID) -> VerifyProfileData</code>
- <code title="post /verify_profiles/templates">client.verifyProfiles.<a href="./src/resources/verify-profiles.ts">createTemplate</a>({ ...params }) -> VerifyProfileCreateTemplateResponse</code>
- <code title="get /verify_profiles/templates">client.verifyProfiles.<a href="./src/resources/verify-profiles.ts">retrieveTemplates</a>() -> VerifyProfileRetrieveTemplatesResponse</code>
- <code title="patch /verify_profiles/templates/{template_id}">client.verifyProfiles.<a href="./src/resources/verify-profiles.ts">updateTemplate</a>(templateID, { ...params }) -> VerifyProfileUpdateTemplateResponse</code>

# VirtualCrossConnects

Types:

- <code><a href="./src/resources/virtual-cross-connects.ts">VirtualCrossConnectCreateResponse</a></code>
- <code><a href="./src/resources/virtual-cross-connects.ts">VirtualCrossConnectRetrieveResponse</a></code>
- <code><a href="./src/resources/virtual-cross-connects.ts">VirtualCrossConnectUpdateResponse</a></code>
- <code><a href="./src/resources/virtual-cross-connects.ts">VirtualCrossConnectListResponse</a></code>
- <code><a href="./src/resources/virtual-cross-connects.ts">VirtualCrossConnectDeleteResponse</a></code>

Methods:

- <code title="post /virtual_cross_connects">client.virtualCrossConnects.<a href="./src/resources/virtual-cross-connects.ts">create</a>({ ...params }) -> VirtualCrossConnectCreateResponse</code>
- <code title="get /virtual_cross_connects/{id}">client.virtualCrossConnects.<a href="./src/resources/virtual-cross-connects.ts">retrieve</a>(id) -> VirtualCrossConnectRetrieveResponse</code>
- <code title="patch /virtual_cross_connects/{id}">client.virtualCrossConnects.<a href="./src/resources/virtual-cross-connects.ts">update</a>(id, { ...params }) -> VirtualCrossConnectUpdateResponse</code>
- <code title="get /virtual_cross_connects">client.virtualCrossConnects.<a href="./src/resources/virtual-cross-connects.ts">list</a>({ ...params }) -> VirtualCrossConnectListResponse</code>
- <code title="delete /virtual_cross_connects/{id}">client.virtualCrossConnects.<a href="./src/resources/virtual-cross-connects.ts">delete</a>(id) -> VirtualCrossConnectDeleteResponse</code>

# VirtualCrossConnectsCoverage

Types:

- <code><a href="./src/resources/virtual-cross-connects-coverage.ts">VirtualCrossConnectsCoverageListResponse</a></code>

Methods:

- <code title="get /virtual_cross_connects_coverage">client.virtualCrossConnectsCoverage.<a href="./src/resources/virtual-cross-connects-coverage.ts">list</a>({ ...params }) -> VirtualCrossConnectsCoverageListResponse</code>

# WebhookDeliveries

Types:

- <code><a href="./src/resources/webhook-deliveries.ts">WebhookDeliveryRetrieveResponse</a></code>
- <code><a href="./src/resources/webhook-deliveries.ts">WebhookDeliveryListResponse</a></code>

Methods:

- <code title="get /webhook_deliveries/{id}">client.webhookDeliveries.<a href="./src/resources/webhook-deliveries.ts">retrieve</a>(id) -> WebhookDeliveryRetrieveResponse</code>
- <code title="get /webhook_deliveries">client.webhookDeliveries.<a href="./src/resources/webhook-deliveries.ts">list</a>({ ...params }) -> WebhookDeliveryListResponse</code>

# WireguardInterfaces

Types:

- <code><a href="./src/resources/wireguard-interfaces.ts">WireguardInterfaceCreateResponse</a></code>
- <code><a href="./src/resources/wireguard-interfaces.ts">WireguardInterfaceRetrieveResponse</a></code>
- <code><a href="./src/resources/wireguard-interfaces.ts">WireguardInterfaceListResponse</a></code>
- <code><a href="./src/resources/wireguard-interfaces.ts">WireguardInterfaceDeleteResponse</a></code>

Methods:

- <code title="post /wireguard_interfaces">client.wireguardInterfaces.<a href="./src/resources/wireguard-interfaces.ts">create</a>({ ...params }) -> WireguardInterfaceCreateResponse</code>
- <code title="get /wireguard_interfaces/{id}">client.wireguardInterfaces.<a href="./src/resources/wireguard-interfaces.ts">retrieve</a>(id) -> WireguardInterfaceRetrieveResponse</code>
- <code title="get /wireguard_interfaces">client.wireguardInterfaces.<a href="./src/resources/wireguard-interfaces.ts">list</a>({ ...params }) -> WireguardInterfaceListResponse</code>
- <code title="delete /wireguard_interfaces/{id}">client.wireguardInterfaces.<a href="./src/resources/wireguard-interfaces.ts">delete</a>(id) -> WireguardInterfaceDeleteResponse</code>

# WireguardPeers

Types:

- <code><a href="./src/resources/wireguard-peers.ts">WireguardPeerPatch</a></code>
- <code><a href="./src/resources/wireguard-peers.ts">WireguardPeerCreateResponse</a></code>
- <code><a href="./src/resources/wireguard-peers.ts">WireguardPeerRetrieveResponse</a></code>
- <code><a href="./src/resources/wireguard-peers.ts">WireguardPeerUpdateResponse</a></code>
- <code><a href="./src/resources/wireguard-peers.ts">WireguardPeerListResponse</a></code>
- <code><a href="./src/resources/wireguard-peers.ts">WireguardPeerDeleteResponse</a></code>
- <code><a href="./src/resources/wireguard-peers.ts">WireguardPeerRetrieveConfigResponse</a></code>

Methods:

- <code title="post /wireguard_peers">client.wireguardPeers.<a href="./src/resources/wireguard-peers.ts">create</a>({ ...params }) -> WireguardPeerCreateResponse</code>
- <code title="get /wireguard_peers/{id}">client.wireguardPeers.<a href="./src/resources/wireguard-peers.ts">retrieve</a>(id) -> WireguardPeerRetrieveResponse</code>
- <code title="patch /wireguard_peers/{id}">client.wireguardPeers.<a href="./src/resources/wireguard-peers.ts">update</a>(id, { ...params }) -> WireguardPeerUpdateResponse</code>
- <code title="get /wireguard_peers">client.wireguardPeers.<a href="./src/resources/wireguard-peers.ts">list</a>({ ...params }) -> WireguardPeerListResponse</code>
- <code title="delete /wireguard_peers/{id}">client.wireguardPeers.<a href="./src/resources/wireguard-peers.ts">delete</a>(id) -> WireguardPeerDeleteResponse</code>
- <code title="get /wireguard_peers/{id}/config">client.wireguardPeers.<a href="./src/resources/wireguard-peers.ts">retrieveConfig</a>(id) -> string</code>

# Wireless

Types:

- <code><a href="./src/resources/wireless/wireless.ts">WirelessRetrieveRegionsResponse</a></code>

Methods:

- <code title="get /wireless/regions">client.wireless.<a href="./src/resources/wireless/wireless.ts">retrieveRegions</a>({ ...params }) -> WirelessRetrieveRegionsResponse</code>

## DetailRecordsReports

Types:

- <code><a href="./src/resources/wireless/detail-records-reports.ts">WdrReport</a></code>
- <code><a href="./src/resources/wireless/detail-records-reports.ts">DetailRecordsReportCreateResponse</a></code>
- <code><a href="./src/resources/wireless/detail-records-reports.ts">DetailRecordsReportRetrieveResponse</a></code>
- <code><a href="./src/resources/wireless/detail-records-reports.ts">DetailRecordsReportListResponse</a></code>
- <code><a href="./src/resources/wireless/detail-records-reports.ts">DetailRecordsReportDeleteResponse</a></code>

Methods:

- <code title="post /wireless/detail_records_reports">client.wireless.detailRecordsReports.<a href="./src/resources/wireless/detail-records-reports.ts">create</a>({ ...params }) -> DetailRecordsReportCreateResponse</code>
- <code title="get /wireless/detail_records_reports/{id}">client.wireless.detailRecordsReports.<a href="./src/resources/wireless/detail-records-reports.ts">retrieve</a>(id) -> DetailRecordsReportRetrieveResponse</code>
- <code title="get /wireless/detail_records_reports">client.wireless.detailRecordsReports.<a href="./src/resources/wireless/detail-records-reports.ts">list</a>({ ...params }) -> DetailRecordsReportListResponse</code>
- <code title="delete /wireless/detail_records_reports/{id}">client.wireless.detailRecordsReports.<a href="./src/resources/wireless/detail-records-reports.ts">delete</a>(id) -> DetailRecordsReportDeleteResponse</code>

# WirelessBlocklistValues

Types:

- <code><a href="./src/resources/wireless-blocklist-values.ts">WirelessBlocklistValueListResponse</a></code>

Methods:

- <code title="get /wireless_blocklist_values">client.wirelessBlocklistValues.<a href="./src/resources/wireless-blocklist-values.ts">list</a>({ ...params }) -> WirelessBlocklistValueListResponse</code>

# WirelessBlocklists

Types:

- <code><a href="./src/resources/wireless-blocklists.ts">WirelessBlocklist</a></code>
- <code><a href="./src/resources/wireless-blocklists.ts">WirelessBlocklistCreateResponse</a></code>
- <code><a href="./src/resources/wireless-blocklists.ts">WirelessBlocklistRetrieveResponse</a></code>
- <code><a href="./src/resources/wireless-blocklists.ts">WirelessBlocklistUpdateResponse</a></code>
- <code><a href="./src/resources/wireless-blocklists.ts">WirelessBlocklistListResponse</a></code>
- <code><a href="./src/resources/wireless-blocklists.ts">WirelessBlocklistDeleteResponse</a></code>

Methods:

- <code title="post /wireless_blocklists">client.wirelessBlocklists.<a href="./src/resources/wireless-blocklists.ts">create</a>({ ...params }) -> WirelessBlocklistCreateResponse</code>
- <code title="get /wireless_blocklists/{id}">client.wirelessBlocklists.<a href="./src/resources/wireless-blocklists.ts">retrieve</a>(id) -> WirelessBlocklistRetrieveResponse</code>
- <code title="patch /wireless_blocklists">client.wirelessBlocklists.<a href="./src/resources/wireless-blocklists.ts">update</a>({ ...params }) -> WirelessBlocklistUpdateResponse</code>
- <code title="get /wireless_blocklists">client.wirelessBlocklists.<a href="./src/resources/wireless-blocklists.ts">list</a>({ ...params }) -> WirelessBlocklistListResponse</code>
- <code title="delete /wireless_blocklists/{id}">client.wirelessBlocklists.<a href="./src/resources/wireless-blocklists.ts">delete</a>(id) -> WirelessBlocklistDeleteResponse</code>

# PartnerCampaigns

Types:

- <code><a href="./src/resources/partner-campaigns.ts">TelnyxDownstreamCampaign</a></code>
- <code><a href="./src/resources/partner-campaigns.ts">PartnerCampaignListResponse</a></code>
- <code><a href="./src/resources/partner-campaigns.ts">PartnerCampaignListSharedByMeResponse</a></code>
- <code><a href="./src/resources/partner-campaigns.ts">PartnerCampaignRetrieveSharingStatusResponse</a></code>

Methods:

- <code title="get /partner_campaigns/{campaignId}">client.partnerCampaigns.<a href="./src/resources/partner-campaigns.ts">retrieve</a>(campaignID) -> TelnyxDownstreamCampaign</code>
- <code title="patch /partner_campaigns/{campaignId}">client.partnerCampaigns.<a href="./src/resources/partner-campaigns.ts">update</a>(campaignID, { ...params }) -> TelnyxDownstreamCampaign</code>
- <code title="get /partner_campaigns">client.partnerCampaigns.<a href="./src/resources/partner-campaigns.ts">list</a>({ ...params }) -> PartnerCampaignListResponse</code>
- <code title="get /partnerCampaign/sharedByMe">client.partnerCampaigns.<a href="./src/resources/partner-campaigns.ts">listSharedByMe</a>({ ...params }) -> PartnerCampaignListSharedByMeResponse</code>
- <code title="get /partnerCampaign/{campaignId}/sharing">client.partnerCampaigns.<a href="./src/resources/partner-campaigns.ts">retrieveSharingStatus</a>(campaignID) -> PartnerCampaignRetrieveSharingStatusResponse</code>

# WellKnown

Types:

- <code><a href="./src/resources/well-known.ts">WellKnownRetrieveAuthorizationServerMetadataResponse</a></code>
- <code><a href="./src/resources/well-known.ts">WellKnownRetrieveProtectedResourceMetadataResponse</a></code>

Methods:

- <code title="get /.well-known/oauth-authorization-server">client.wellKnown.<a href="./src/resources/well-known.ts">retrieveAuthorizationServerMetadata</a>() -> WellKnownRetrieveAuthorizationServerMetadataResponse</code>
- <code title="get /.well-known/oauth-protected-resource">client.wellKnown.<a href="./src/resources/well-known.ts">retrieveProtectedResourceMetadata</a>() -> WellKnownRetrieveProtectedResourceMetadataResponse</code>
