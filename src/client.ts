// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { RequestInit, RequestInfo, BodyInit } from './internal/builtin-types';
import type { HTTPMethod, PromiseOrValue, MergedRequestInit, FinalizedRequestInit } from './internal/types';
import { uuid4 } from './internal/utils/uuid';
import { validatePositiveInteger, isAbsoluteURL, safeJSON } from './internal/utils/values';
import { sleep } from './internal/utils/sleep';
export type { Logger, LogLevel } from './internal/utils/log';
import { castToError, isAbortError } from './internal/errors';
import type { APIResponseProps } from './internal/parse';
import { getPlatformHeaders } from './internal/detect-platform';
import * as Shims from './internal/shims';
import * as Opts from './internal/request-options';
import * as qs from './internal/qs';
import { VERSION } from './version';
import * as Errors from './core/error';
import * as Pagination from './core/pagination';
import {
  AbstractPage,
  type DefaultFlatPaginationForInexplicitNumberOrdersParams,
  DefaultFlatPaginationForInexplicitNumberOrdersResponse,
  type DefaultFlatPaginationParams,
  DefaultFlatPaginationResponse,
  type DefaultFlatPaginationTopLevelArrayParams,
  DefaultFlatPaginationTopLevelArrayResponse,
  type DefaultPaginationForLogMessagesParams,
  DefaultPaginationForLogMessagesResponse,
  type DefaultPaginationForMessagingTollfreeParams,
  DefaultPaginationForMessagingTollfreeResponse,
  type DefaultPaginationForQueuesParams,
  DefaultPaginationForQueuesResponse,
  type PerPagePaginationParams,
  PerPagePaginationResponse,
  type PerPagePaginationV2Params,
  PerPagePaginationV2Response,
} from './core/pagination';
import * as Uploads from './core/uploads';
import * as API from './resources/index';
import { APIPromise } from './core/api-promise';
import {
  AccessIPAddress,
  AccessIPAddressCreateParams,
  AccessIPAddressListParams,
  AccessIPAddressResponse,
  AccessIPAddressResponsesDefaultFlatPagination,
  CloudflareSyncStatus,
  PaginationMetaCloudflareIPListSync,
} from './resources/access-ip-address';
import {
  AccessIPRange,
  AccessIPRangeCreateParams,
  AccessIPRangeListParams,
  AccessIPRanges,
  AccessIPRangesDefaultFlatPagination,
} from './resources/access-ip-ranges';
import {
  AdvancedOrder,
  AdvancedOrderCreateParams,
  AdvancedOrderCreateResponse,
  AdvancedOrderListResponse,
  AdvancedOrderRetrieveResponse,
  AdvancedOrderUpdateRequirementGroupParams,
  AdvancedOrderUpdateRequirementGroupResponse,
  AdvancedOrders,
} from './resources/advanced-orders';
import {
  AuditEventListParams,
  AuditEventListResponse,
  AuditEventListResponsesDefaultFlatPagination,
  AuditEvents,
} from './resources/audit-events';
import {
  AuthenticationProvider,
  AuthenticationProviderCreateParams,
  AuthenticationProviderCreateResponse,
  AuthenticationProviderDeleteResponse,
  AuthenticationProviderListParams,
  AuthenticationProviderRetrieveResponse,
  AuthenticationProviderUpdateParams,
  AuthenticationProviderUpdateResponse,
  AuthenticationProviders,
  AuthenticationProvidersDefaultFlatPagination,
  PaginationMeta,
  Settings,
} from './resources/authentication-providers';
import {
  AvailablePhoneNumberBlockListParams,
  AvailablePhoneNumberBlockListResponse,
  AvailablePhoneNumberBlocks,
} from './resources/available-phone-number-blocks';
import {
  AvailablePhoneNumberListParams,
  AvailablePhoneNumberListResponse,
  AvailablePhoneNumbers,
} from './resources/available-phone-numbers';
import { Balance, BalanceRetrieveResponse } from './resources/balance';
import {
  BillingGroup,
  BillingGroupCreateParams,
  BillingGroupCreateResponse,
  BillingGroupDeleteResponse,
  BillingGroupListParams,
  BillingGroupRetrieveResponse,
  BillingGroupUpdateParams,
  BillingGroupUpdateResponse,
  BillingGroups,
  BillingGroupsDefaultFlatPagination,
} from './resources/billing-groups';
import {
  BulkSimCardActionListParams,
  BulkSimCardActionListResponse,
  BulkSimCardActionListResponsesDefaultFlatPagination,
  BulkSimCardActionRetrieveResponse,
  BulkSimCardActions,
} from './resources/bulk-sim-card-actions';
import {
  CallControlApplication,
  CallControlApplicationCreateParams,
  CallControlApplicationCreateResponse,
  CallControlApplicationDeleteResponse,
  CallControlApplicationInbound,
  CallControlApplicationListParams,
  CallControlApplicationOutbound,
  CallControlApplicationRetrieveResponse,
  CallControlApplicationUpdateParams,
  CallControlApplicationUpdateResponse,
  CallControlApplications,
  CallControlApplicationsDefaultFlatPagination,
} from './resources/call-control-applications';
import {
  CallEventListParams,
  CallEventListResponse,
  CallEventListResponsesDefaultFlatPagination,
  CallEvents,
} from './resources/call-events';
import {
  ChannelZoneListParams,
  ChannelZoneListResponse,
  ChannelZoneListResponsesDefaultFlatPagination,
  ChannelZoneUpdateParams,
  ChannelZoneUpdateResponse,
  ChannelZones,
} from './resources/channel-zones';
import {
  ChargesBreakdown,
  ChargesBreakdownRetrieveParams,
  ChargesBreakdownRetrieveResponse,
} from './resources/charges-breakdown';
import {
  ChargesSummary,
  ChargesSummaryRetrieveParams,
  ChargesSummaryRetrieveResponse,
  MonthDetail,
} from './resources/charges-summary';
import {
  CommentCreateParams,
  CommentCreateResponse,
  CommentListParams,
  CommentListResponse,
  CommentMarkAsReadResponse,
  CommentRetrieveResponse,
  Comments,
} from './resources/comments';
import {
  ConnectionListActiveCallsParams,
  ConnectionListActiveCallsResponse,
  ConnectionListActiveCallsResponsesDefaultFlatPagination,
  ConnectionListParams,
  ConnectionListResponse,
  ConnectionListResponsesDefaultFlatPagination,
  ConnectionRetrieveResponse,
  Connections,
} from './resources/connections';
import {
  CountryCoverage,
  CountryCoverageRetrieveCountryResponse,
  CountryCoverageRetrieveResponse,
} from './resources/country-coverage';
import {
  AzureConfigurationData,
  CustomStorageConfiguration,
  CustomStorageCredentialCreateParams,
  CustomStorageCredentialCreateResponse,
  CustomStorageCredentialRetrieveResponse,
  CustomStorageCredentialUpdateParams,
  CustomStorageCredentialUpdateResponse,
  CustomStorageCredentials,
  GcsConfigurationData,
  S3ConfigurationData,
} from './resources/custom-storage-credentials';
import {
  CustomerServiceRecord,
  CustomerServiceRecordCreateParams,
  CustomerServiceRecordCreateResponse,
  CustomerServiceRecordListParams,
  CustomerServiceRecordRetrieveResponse,
  CustomerServiceRecordVerifyPhoneNumberCoverageParams,
  CustomerServiceRecordVerifyPhoneNumberCoverageResponse,
  CustomerServiceRecords,
  CustomerServiceRecordsDefaultFlatPagination,
} from './resources/customer-service-records';
import {
  DetailRecordListParams,
  DetailRecordListResponse,
  DetailRecordListResponsesDefaultFlatPagination,
  DetailRecords,
} from './resources/detail-records';
import {
  DialogflowConnectionCreateParams,
  DialogflowConnectionCreateResponse,
  DialogflowConnectionRetrieveResponse,
  DialogflowConnectionUpdateParams,
  DialogflowConnectionUpdateResponse,
  DialogflowConnections,
} from './resources/dialogflow-connections';
import {
  DocumentLinkListParams,
  DocumentLinkListResponse,
  DocumentLinkListResponsesDefaultFlatPagination,
  DocumentLinks,
} from './resources/document-links';
import {
  DocServiceDocument,
  DocServiceDocumentsDefaultFlatPagination,
  DocumentDeleteResponse,
  DocumentGenerateDownloadLinkResponse,
  DocumentListParams,
  DocumentRetrieveResponse,
  DocumentUpdateParams,
  DocumentUpdateResponse,
  DocumentUploadJsonParams,
  DocumentUploadJsonResponse,
  DocumentUploadParams,
  DocumentUploadResponse,
  Documents,
} from './resources/documents';
import {
  DynamicEmergencyAddress,
  DynamicEmergencyAddressCreateParams,
  DynamicEmergencyAddressCreateResponse,
  DynamicEmergencyAddressDeleteResponse,
  DynamicEmergencyAddressListParams,
  DynamicEmergencyAddressRetrieveResponse,
  DynamicEmergencyAddresses,
  DynamicEmergencyAddressesDefaultFlatPagination,
} from './resources/dynamic-emergency-addresses';
import {
  DynamicEmergencyEndpoint,
  DynamicEmergencyEndpointCreateParams,
  DynamicEmergencyEndpointCreateResponse,
  DynamicEmergencyEndpointDeleteResponse,
  DynamicEmergencyEndpointListParams,
  DynamicEmergencyEndpointRetrieveResponse,
  DynamicEmergencyEndpoints,
  DynamicEmergencyEndpointsDefaultFlatPagination,
} from './resources/dynamic-emergency-endpoints';
import {
  FaxApplication,
  FaxApplicationCreateParams,
  FaxApplicationCreateResponse,
  FaxApplicationDeleteResponse,
  FaxApplicationListParams,
  FaxApplicationRetrieveResponse,
  FaxApplicationUpdateParams,
  FaxApplicationUpdateResponse,
  FaxApplications,
  FaxApplicationsDefaultFlatPagination,
} from './resources/fax-applications';
import {
  FqdnConnection,
  FqdnConnectionCreateParams,
  FqdnConnectionCreateResponse,
  FqdnConnectionDeleteResponse,
  FqdnConnectionListParams,
  FqdnConnectionRetrieveResponse,
  FqdnConnectionUpdateParams,
  FqdnConnectionUpdateResponse,
  FqdnConnections,
  FqdnConnectionsDefaultFlatPagination,
  InboundFqdn,
  OutboundFqdn,
  TransportProtocol,
  WebhookAPIVersion,
} from './resources/fqdn-connections';
import {
  Fqdn,
  FqdnCreateParams,
  FqdnCreateResponse,
  FqdnDeleteResponse,
  FqdnListParams,
  FqdnRetrieveResponse,
  FqdnUpdateParams,
  FqdnUpdateResponse,
  Fqdns,
  FqdnsDefaultFlatPagination,
} from './resources/fqdns';
import { GlobalIPAllowedPortListResponse, GlobalIPAllowedPorts } from './resources/global-ip-allowed-ports';
import {
  GlobalIPAssignmentHealth,
  GlobalIPAssignmentHealthRetrieveParams,
  GlobalIPAssignmentHealthRetrieveResponse,
} from './resources/global-ip-assignment-health';
import {
  GlobalIPAssignment,
  GlobalIPAssignmentCreateParams,
  GlobalIPAssignmentCreateResponse,
  GlobalIPAssignmentDeleteResponse,
  GlobalIPAssignmentListParams,
  GlobalIPAssignmentRetrieveResponse,
  GlobalIPAssignmentUpdateParams,
  GlobalIPAssignmentUpdateResponse,
  GlobalIPAssignments,
  GlobalIPAssignmentsDefaultFlatPagination,
  Record,
} from './resources/global-ip-assignments';
import {
  GlobalIPAssignmentsUsage,
  GlobalIPAssignmentsUsageRetrieveParams,
  GlobalIPAssignmentsUsageRetrieveResponse,
} from './resources/global-ip-assignments-usage';
import {
  GlobalIPHealthCheckTypeListResponse,
  GlobalIPHealthCheckTypes,
} from './resources/global-ip-health-check-types';
import {
  GlobalIPHealthCheckCreateParams,
  GlobalIPHealthCheckCreateResponse,
  GlobalIPHealthCheckDeleteResponse,
  GlobalIPHealthCheckListParams,
  GlobalIPHealthCheckListResponse,
  GlobalIPHealthCheckListResponsesDefaultFlatPagination,
  GlobalIPHealthCheckRetrieveResponse,
  GlobalIPHealthChecks,
} from './resources/global-ip-health-checks';
import {
  GlobalIPLatency,
  GlobalIPLatencyRetrieveParams,
  GlobalIPLatencyRetrieveResponse,
} from './resources/global-ip-latency';
import { GlobalIPProtocolListResponse, GlobalIPProtocols } from './resources/global-ip-protocols';
import {
  GlobalIPUsage,
  GlobalIPUsageRetrieveParams,
  GlobalIPUsageRetrieveResponse,
} from './resources/global-ip-usage';
import {
  GlobalIPCreateParams,
  GlobalIPCreateResponse,
  GlobalIPDeleteResponse,
  GlobalIPListParams,
  GlobalIPListResponse,
  GlobalIPListResponsesDefaultFlatPagination,
  GlobalIPRetrieveResponse,
  GlobalIPs,
} from './resources/global-ips';
import {
  InboundChannelListResponse,
  InboundChannelUpdateParams,
  InboundChannelUpdateResponse,
  InboundChannels,
} from './resources/inbound-channels';
import {
  InexplicitNumberOrderCreateParams,
  InexplicitNumberOrderCreateResponse,
  InexplicitNumberOrderListParams,
  InexplicitNumberOrderResponse,
  InexplicitNumberOrderResponsesDefaultFlatPaginationForInexplicitNumberOrders,
  InexplicitNumberOrderRetrieveResponse,
  InexplicitNumberOrders,
} from './resources/inexplicit-number-orders';
import {
  IntegrationSecret,
  IntegrationSecretCreateParams,
  IntegrationSecretCreateResponse,
  IntegrationSecretListParams,
  IntegrationSecrets,
  IntegrationSecretsDefaultFlatPagination,
} from './resources/integration-secrets';
import {
  InventoryCoverage,
  InventoryCoverageListParams,
  InventoryCoverageListResponse,
} from './resources/inventory-coverage';
import {
  InvoiceListParams,
  InvoiceListResponse,
  InvoiceListResponsesDefaultFlatPagination,
  InvoiceRetrieveParams,
  InvoiceRetrieveResponse,
  Invoices,
} from './resources/invoices';
import {
  IPConnection,
  IPConnectionCreateParams,
  IPConnectionCreateResponse,
  IPConnectionDeleteResponse,
  IPConnectionListParams,
  IPConnectionRetrieveResponse,
  IPConnectionUpdateParams,
  IPConnectionUpdateResponse,
  IPConnections,
  IPConnectionsDefaultFlatPagination,
  InboundIP,
  OutboundIP,
} from './resources/ip-connections';
import {
  IP,
  IPCreateParams,
  IPCreateResponse,
  IPDeleteResponse,
  IPListParams,
  IPRetrieveResponse,
  IPUpdateParams,
  IPUpdateResponse,
  IPs,
  IPsDefaultFlatPagination,
} from './resources/ips';
import {
  LedgerBillingGroupReport,
  LedgerBillingGroupReportCreateParams,
  LedgerBillingGroupReportCreateResponse,
  LedgerBillingGroupReportRetrieveResponse,
  LedgerBillingGroupReports,
} from './resources/ledger-billing-group-reports';
import { List, ListRetrieveAllResponse, ListRetrieveByZoneResponse } from './resources/list';
import {
  Media,
  MediaListParams,
  MediaListResponse,
  MediaResource,
  MediaRetrieveResponse,
  MediaUpdateParams,
  MediaUpdateResponse,
  MediaUploadParams,
  MediaUploadResponse,
} from './resources/media';
import {
  MessagingHostedNumberDeleteResponse,
  MessagingHostedNumbers,
} from './resources/messaging-hosted-numbers';
import {
  MessagingNumbersBulkUpdateCreateParams,
  MessagingNumbersBulkUpdateCreateResponse,
  MessagingNumbersBulkUpdateRetrieveResponse,
  MessagingNumbersBulkUpdates,
} from './resources/messaging-numbers-bulk-updates';
import {
  MessagingOptoutListParams,
  MessagingOptoutListResponse,
  MessagingOptoutListResponsesDefaultFlatPagination,
  MessagingOptouts,
} from './resources/messaging-optouts';
import {
  MessagingURLDomainListParams,
  MessagingURLDomainListResponse,
  MessagingURLDomainListResponsesDefaultFlatPagination,
  MessagingURLDomains,
} from './resources/messaging-url-domains';
import {
  MobileNetworkOperatorListParams,
  MobileNetworkOperatorListResponse,
  MobileNetworkOperatorListResponsesDefaultFlatPagination,
  MobileNetworkOperators,
} from './resources/mobile-network-operators';
import {
  MobilePushCredentialCreateParams,
  MobilePushCredentialListParams,
  MobilePushCredentials,
  PushCredential,
  PushCredentialResponse,
  PushCredentialsDefaultFlatPagination,
} from './resources/mobile-push-credentials';
import {
  MobileVoiceConnection,
  MobileVoiceConnectionCreateParams,
  MobileVoiceConnectionCreateResponse,
  MobileVoiceConnectionDeleteResponse,
  MobileVoiceConnectionListParams,
  MobileVoiceConnectionRetrieveResponse,
  MobileVoiceConnectionUpdateParams,
  MobileVoiceConnectionUpdateResponse,
  MobileVoiceConnections,
  MobileVoiceConnectionsDefaultFlatPagination,
} from './resources/mobile-voice-connections';
import {
  AvailableService,
  NetworkCoverage,
  NetworkCoverageListParams,
  NetworkCoverageListResponse,
  NetworkCoverageListResponsesDefaultFlatPagination,
} from './resources/network-coverage';
import {
  NotificationChannel,
  NotificationChannelCreateParams,
  NotificationChannelCreateResponse,
  NotificationChannelDeleteResponse,
  NotificationChannelListParams,
  NotificationChannelRetrieveResponse,
  NotificationChannelUpdateParams,
  NotificationChannelUpdateResponse,
  NotificationChannels,
  NotificationChannelsDefaultFlatPagination,
} from './resources/notification-channels';
import {
  NotificationEventConditionListParams,
  NotificationEventConditionListResponse,
  NotificationEventConditionListResponsesDefaultFlatPagination,
  NotificationEventConditions,
} from './resources/notification-event-conditions';
import {
  NotificationEventListParams,
  NotificationEventListResponse,
  NotificationEventListResponsesDefaultFlatPagination,
  NotificationEvents,
} from './resources/notification-events';
import {
  NotificationProfile,
  NotificationProfileCreateParams,
  NotificationProfileCreateResponse,
  NotificationProfileDeleteResponse,
  NotificationProfileListParams,
  NotificationProfileRetrieveResponse,
  NotificationProfileUpdateParams,
  NotificationProfileUpdateResponse,
  NotificationProfiles,
  NotificationProfilesDefaultFlatPagination,
} from './resources/notification-profiles';
import {
  NotificationSetting,
  NotificationSettingCreateParams,
  NotificationSettingCreateResponse,
  NotificationSettingDeleteResponse,
  NotificationSettingListParams,
  NotificationSettingRetrieveResponse,
  NotificationSettings,
  NotificationSettingsDefaultFlatPagination,
} from './resources/notification-settings';
import {
  NumberBlockOrder,
  NumberBlockOrderCreateParams,
  NumberBlockOrderCreateResponse,
  NumberBlockOrderListParams,
  NumberBlockOrderRetrieveResponse,
  NumberBlockOrders,
  NumberBlockOrdersDefaultFlatPagination,
} from './resources/number-block-orders';
import {
  NumberLookup,
  NumberLookupRetrieveParams,
  NumberLookupRetrieveResponse,
} from './resources/number-lookup';
import {
  NumberOrderPhoneNumber,
  NumberOrderPhoneNumberListParams,
  NumberOrderPhoneNumberListResponse,
  NumberOrderPhoneNumberRetrieveResponse,
  NumberOrderPhoneNumberUpdateRequirementGroupParams,
  NumberOrderPhoneNumberUpdateRequirementGroupResponse,
  NumberOrderPhoneNumberUpdateRequirementsParams,
  NumberOrderPhoneNumberUpdateRequirementsResponse,
  NumberOrderPhoneNumbers,
  UpdateRegulatoryRequirement,
} from './resources/number-order-phone-numbers';
import {
  NumberOrderCreateParams,
  NumberOrderCreateResponse,
  NumberOrderListParams,
  NumberOrderListResponse,
  NumberOrderListResponsesDefaultFlatPagination,
  NumberOrderRetrieveResponse,
  NumberOrderUpdateParams,
  NumberOrderUpdateResponse,
  NumberOrderWithPhoneNumbers,
  NumberOrders,
  PhoneNumber,
} from './resources/number-orders';
import {
  NumbersFeatureCreateParams,
  NumbersFeatureCreateResponse,
  NumbersFeatures,
} from './resources/numbers-features';
import {
  OAuth,
  OAuthGrantsParams,
  OAuthGrantsResponse,
  OAuthIntrospectParams,
  OAuthIntrospectResponse,
  OAuthRegisterParams,
  OAuthRegisterResponse,
  OAuthRetrieveAuthorizeParams,
  OAuthRetrieveJwksResponse,
  OAuthRetrieveResponse,
  OAuthTokenParams,
  OAuthTokenResponse,
} from './resources/oauth';
import {
  OAuthClient,
  OAuthClientCreateParams,
  OAuthClientCreateResponse,
  OAuthClientListParams,
  OAuthClientRetrieveResponse,
  OAuthClientUpdateParams,
  OAuthClientUpdateResponse,
  OAuthClients,
  OAuthClientsDefaultFlatPagination,
  PaginationMetaOAuth,
} from './resources/oauth-clients';
import {
  OAuthGrant,
  OAuthGrantDeleteResponse,
  OAuthGrantListParams,
  OAuthGrantRetrieveResponse,
  OAuthGrants,
  OAuthGrantsDefaultFlatPagination,
} from './resources/oauth-grants';
import {
  OtaUpdateListParams,
  OtaUpdateListResponse,
  OtaUpdateListResponsesDefaultFlatPagination,
  OtaUpdateRetrieveResponse,
  OtaUpdates,
} from './resources/ota-updates';
import {
  OutboundCallRecording,
  OutboundVoiceProfile,
  OutboundVoiceProfileCreateParams,
  OutboundVoiceProfileCreateResponse,
  OutboundVoiceProfileDeleteResponse,
  OutboundVoiceProfileListParams,
  OutboundVoiceProfileRetrieveResponse,
  OutboundVoiceProfileUpdateParams,
  OutboundVoiceProfileUpdateResponse,
  OutboundVoiceProfiles,
  OutboundVoiceProfilesDefaultFlatPagination,
  ServicePlan,
  TrafficType,
  UsagePaymentMethod,
} from './resources/outbound-voice-profiles';
import {
  PhoneNumbersRegulatoryRequirementRetrieveParams,
  PhoneNumbersRegulatoryRequirementRetrieveResponse,
  PhoneNumbersRegulatoryRequirements,
} from './resources/phone-numbers-regulatory-requirements';
import {
  PortabilityCheckRunParams,
  PortabilityCheckRunResponse,
  PortabilityChecks,
} from './resources/portability-checks';
import {
  PortingPhoneNumberListParams,
  PortingPhoneNumberListResponse,
  PortingPhoneNumberListResponsesDefaultFlatPagination,
  PortingPhoneNumbers,
} from './resources/porting-phone-numbers';
import {
  PrivateWirelessGateway,
  PrivateWirelessGatewayCreateParams,
  PrivateWirelessGatewayCreateResponse,
  PrivateWirelessGatewayDeleteResponse,
  PrivateWirelessGatewayListParams,
  PrivateWirelessGatewayRetrieveResponse,
  PrivateWirelessGatewayStatus,
  PrivateWirelessGateways,
  PrivateWirelessGatewaysDefaultFlatPagination,
  PwgAssignedResourcesSummary,
} from './resources/private-wireless-gateways';
import {
  NetworkInterface,
  NetworkInterfaceRegion,
  PublicInternetGatewayCreateParams,
  PublicInternetGatewayCreateResponse,
  PublicInternetGatewayDeleteResponse,
  PublicInternetGatewayListParams,
  PublicInternetGatewayListResponse,
  PublicInternetGatewayListResponsesDefaultFlatPagination,
  PublicInternetGatewayRetrieveResponse,
  PublicInternetGateways,
} from './resources/public-internet-gateways';
import { RcsAgent, RcsAgentResponse, RcsAgents } from './resources/rcs-agents';
import {
  RecordingTranscription,
  RecordingTranscriptionDeleteResponse,
  RecordingTranscriptionListResponse,
  RecordingTranscriptionRetrieveResponse,
  RecordingTranscriptions,
} from './resources/recording-transcriptions';
import { RegionListResponse, Regions } from './resources/regions';
import {
  RegulatoryRequirementRetrieveParams,
  RegulatoryRequirementRetrieveResponse,
  RegulatoryRequirements,
} from './resources/regulatory-requirements';
import {
  RequirementGroup,
  RequirementGroupCreateParams,
  RequirementGroupListParams,
  RequirementGroupListResponse,
  RequirementGroupUpdateParams,
  RequirementGroups,
} from './resources/requirement-groups';
import {
  RequirementTypeListParams,
  RequirementTypeListResponse,
  RequirementTypeRetrieveResponse,
  RequirementTypes,
} from './resources/requirement-types';
import {
  RequirementListParams,
  RequirementListResponse,
  RequirementListResponsesDefaultFlatPagination,
  RequirementRetrieveResponse,
  Requirements,
} from './resources/requirements';
import {
  RoomComposition,
  RoomCompositionCreateParams,
  RoomCompositionCreateResponse,
  RoomCompositionListParams,
  RoomCompositionRetrieveResponse,
  RoomCompositions,
  RoomCompositionsDefaultFlatPagination,
  VideoRegion,
} from './resources/room-compositions';
import {
  RoomParticipantListParams,
  RoomParticipantRetrieveResponse,
  RoomParticipants,
} from './resources/room-participants';
import {
  RoomRecordingDeleteBulkParams,
  RoomRecordingDeleteBulkResponse,
  RoomRecordingListParams,
  RoomRecordingListResponse,
  RoomRecordingListResponsesDefaultFlatPagination,
  RoomRecordingRetrieveResponse,
  RoomRecordings,
} from './resources/room-recordings';
import {
  Seti,
  SetiRetrieveBlackBoxTestResultsParams,
  SetiRetrieveBlackBoxTestResultsResponse,
} from './resources/seti';
import {
  ShortCodeListParams,
  ShortCodeRetrieveResponse,
  ShortCodeUpdateParams,
  ShortCodeUpdateResponse,
  ShortCodes,
} from './resources/short-codes';
import {
  SimCardDataUsageNotification,
  SimCardDataUsageNotificationCreateParams,
  SimCardDataUsageNotificationCreateResponse,
  SimCardDataUsageNotificationDeleteResponse,
  SimCardDataUsageNotificationListParams,
  SimCardDataUsageNotificationRetrieveResponse,
  SimCardDataUsageNotificationUpdateParams,
  SimCardDataUsageNotificationUpdateResponse,
  SimCardDataUsageNotifications,
  SimCardDataUsageNotificationsDefaultFlatPagination,
} from './resources/sim-card-data-usage-notifications';
import {
  SimCardOrderPreview,
  SimCardOrderPreviewPreviewParams,
  SimCardOrderPreviewPreviewResponse,
} from './resources/sim-card-order-preview';
import {
  SimCardOrder,
  SimCardOrderCreateParams,
  SimCardOrderCreateResponse,
  SimCardOrderListParams,
  SimCardOrderRetrieveResponse,
  SimCardOrders,
  SimCardOrdersDefaultFlatPagination,
} from './resources/sim-card-orders';
import {
  SiprecConnectorCreateParams,
  SiprecConnectorCreateResponse,
  SiprecConnectorRetrieveResponse,
  SiprecConnectorUpdateParams,
  SiprecConnectorUpdateResponse,
  SiprecConnectors,
} from './resources/siprec-connectors';
import { SpeechToText, SpeechToTextTranscribeParams } from './resources/speech-to-text';
import {
  SubNumberOrder,
  SubNumberOrderCancelResponse,
  SubNumberOrderListParams,
  SubNumberOrderListResponse,
  SubNumberOrderRegulatoryRequirement,
  SubNumberOrderRetrieveParams,
  SubNumberOrderRetrieveResponse,
  SubNumberOrderUpdateParams,
  SubNumberOrderUpdateRequirementGroupParams,
  SubNumberOrderUpdateRequirementGroupResponse,
  SubNumberOrderUpdateResponse,
  SubNumberOrders,
} from './resources/sub-number-orders';
import {
  SubNumberOrdersReport,
  SubNumberOrdersReportCreateParams,
  SubNumberOrdersReportCreateResponse,
  SubNumberOrdersReportDownloadResponse,
  SubNumberOrdersReportRetrieveResponse,
} from './resources/sub-number-orders-report';
import {
  TelephonyCredential,
  TelephonyCredentialCreateParams,
  TelephonyCredentialCreateResponse,
  TelephonyCredentialCreateTokenResponse,
  TelephonyCredentialDeleteResponse,
  TelephonyCredentialListParams,
  TelephonyCredentialRetrieveResponse,
  TelephonyCredentialUpdateParams,
  TelephonyCredentialUpdateResponse,
  TelephonyCredentials,
  TelephonyCredentialsDefaultFlatPagination,
} from './resources/telephony-credentials';
import {
  TexmlApplication,
  TexmlApplicationCreateParams,
  TexmlApplicationCreateResponse,
  TexmlApplicationDeleteResponse,
  TexmlApplicationListParams,
  TexmlApplicationRetrieveResponse,
  TexmlApplicationUpdateParams,
  TexmlApplicationUpdateResponse,
  TexmlApplications,
  TexmlApplicationsDefaultFlatPagination,
} from './resources/texml-applications';
import {
  TextToSpeech,
  TextToSpeechGenerateSpeechParams,
  TextToSpeechListVoicesParams,
  TextToSpeechListVoicesResponse,
} from './resources/text-to-speech';
import {
  UsageReportGetOptionsParams,
  UsageReportGetOptionsResponse,
  UsageReportListParams,
  UsageReportListResponse,
  UsageReportListResponsesDefaultFlatPagination,
  UsageReports,
} from './resources/usage-reports';
import {
  UserAddress,
  UserAddressCreateParams,
  UserAddressCreateResponse,
  UserAddressListParams,
  UserAddressRetrieveResponse,
  UserAddresses,
  UserAddressesDefaultFlatPagination,
} from './resources/user-addresses';
import { UserTagListParams, UserTagListResponse, UserTags } from './resources/user-tags';
import {
  MessageTemplate,
  VerifyProfile,
  VerifyProfileCreateParams,
  VerifyProfileCreateTemplateParams,
  VerifyProfileData,
  VerifyProfileListParams,
  VerifyProfileMessageTemplateResponse,
  VerifyProfileRetrieveTemplatesResponse,
  VerifyProfileUpdateParams,
  VerifyProfileUpdateTemplateParams,
  VerifyProfiles,
  VerifyProfilesDefaultFlatPagination,
} from './resources/verify-profiles';
import {
  VirtualCrossConnectCreateParams,
  VirtualCrossConnectCreateResponse,
  VirtualCrossConnectDeleteResponse,
  VirtualCrossConnectListParams,
  VirtualCrossConnectListResponse,
  VirtualCrossConnectListResponsesDefaultFlatPagination,
  VirtualCrossConnectRetrieveResponse,
  VirtualCrossConnectUpdateParams,
  VirtualCrossConnectUpdateResponse,
  VirtualCrossConnects,
} from './resources/virtual-cross-connects';
import {
  VirtualCrossConnectsCoverage,
  VirtualCrossConnectsCoverageListParams,
  VirtualCrossConnectsCoverageListResponse,
  VirtualCrossConnectsCoverageListResponsesDefaultFlatPagination,
} from './resources/virtual-cross-connects-coverage';
import {
  WebhookDeliveries,
  WebhookDeliveryListParams,
  WebhookDeliveryListResponse,
  WebhookDeliveryListResponsesDefaultFlatPagination,
  WebhookDeliveryRetrieveResponse,
} from './resources/webhook-deliveries';
import {
  CallAIGatherEndedWebhookEvent,
  CallAIGatherMessageHistoryUpdatedWebhookEvent,
  CallAIGatherPartialResultsWebhookEvent,
  CallAnsweredWebhookEvent,
  CallBridgedWebhookEvent,
  CallConversationEndedWebhookEvent,
  CallConversationInsightsGeneratedWebhookEvent,
  CallDtmfReceivedWebhookEvent,
  CallEnqueuedWebhookEvent,
  CallForkStartedWebhookEvent,
  CallForkStoppedWebhookEvent,
  CallGatherEndedWebhookEvent,
  CallHangupWebhookEvent,
  CallInitiatedWebhookEvent,
  CallLeftQueueWebhookEvent,
  CallMachineDetectionEndedWebhookEvent,
  CallMachineGreetingEndedWebhookEvent,
  CallMachinePremiumDetectionEndedWebhookEvent,
  CallMachinePremiumGreetingEndedWebhookEvent,
  CallPlaybackEndedWebhookEvent,
  CallPlaybackStartedWebhookEvent,
  CallRecordingErrorWebhookEvent,
  CallRecordingSavedWebhookEvent,
  CallRecordingTranscriptionSavedWebhookEvent,
  CallReferCompletedWebhookEvent,
  CallReferFailedWebhookEvent,
  CallReferStartedWebhookEvent,
  CallSiprecFailedWebhookEvent,
  CallSiprecStartedWebhookEvent,
  CallSiprecStoppedWebhookEvent,
  CallSpeakEndedWebhookEvent,
  CallSpeakStartedWebhookEvent,
  CallStreamingFailed,
  CallStreamingFailedWebhookEvent,
  CallStreamingStarted,
  CallStreamingStartedWebhookEvent,
  CallStreamingStopped,
  CallStreamingStoppedWebhookEvent,
  CampaignStatusUpdateWebhookEvent,
  ConferenceCreatedWebhookEvent,
  ConferenceEndedWebhookEvent,
  ConferenceFloorChangedWebhookEvent,
  ConferenceParticipantJoinedWebhookEvent,
  ConferenceParticipantLeftWebhookEvent,
  ConferenceParticipantPlaybackEndedWebhookEvent,
  ConferenceParticipantPlaybackStartedWebhookEvent,
  ConferenceParticipantSpeakEndedWebhookEvent,
  ConferenceParticipantSpeakStartedWebhookEvent,
  ConferencePlaybackEndedWebhookEvent,
  ConferencePlaybackStartedWebhookEvent,
  ConferenceRecordingSavedWebhookEvent,
  ConferenceSpeakEndedWebhookEvent,
  ConferenceSpeakStartedWebhookEvent,
  DeliveryUpdateWebhookEvent,
  FaxDeliveredWebhookEvent,
  FaxFailedWebhookEvent,
  FaxMediaProcessedWebhookEvent,
  FaxQueuedWebhookEvent,
  FaxSendingStartedWebhookEvent,
  InboundMessageWebhookEvent,
  NumberOrderStatusUpdateWebhookEvent,
  ReplacedLinkClickWebhookEvent,
  TranscriptionWebhookEvent,
  UnsafeUnwrapWebhookEvent,
  UnwrapWebhookEvent,
  Webhooks,
} from './resources/webhooks';
import {
  WellKnown,
  WellKnownRetrieveAuthorizationServerMetadataResponse,
  WellKnownRetrieveProtectedResourceMetadataResponse,
} from './resources/well-known';
import {
  WireguardInterfaceCreateParams,
  WireguardInterfaceCreateResponse,
  WireguardInterfaceDeleteResponse,
  WireguardInterfaceListParams,
  WireguardInterfaceListResponse,
  WireguardInterfaceListResponsesDefaultFlatPagination,
  WireguardInterfaceRetrieveResponse,
  WireguardInterfaces,
} from './resources/wireguard-interfaces';
import {
  WireguardPeerCreateParams,
  WireguardPeerCreateResponse,
  WireguardPeerDeleteResponse,
  WireguardPeerListParams,
  WireguardPeerListResponse,
  WireguardPeerListResponsesDefaultFlatPagination,
  WireguardPeerPatch,
  WireguardPeerRetrieveConfigResponse,
  WireguardPeerRetrieveResponse,
  WireguardPeerUpdateParams,
  WireguardPeerUpdateResponse,
  WireguardPeers,
} from './resources/wireguard-peers';
import {
  WirelessBlocklistValueListParams,
  WirelessBlocklistValueListResponse,
  WirelessBlocklistValues,
} from './resources/wireless-blocklist-values';
import {
  WirelessBlocklist,
  WirelessBlocklistCreateParams,
  WirelessBlocklistCreateResponse,
  WirelessBlocklistDeleteResponse,
  WirelessBlocklistListParams,
  WirelessBlocklistRetrieveResponse,
  WirelessBlocklistUpdateParams,
  WirelessBlocklistUpdateResponse,
  WirelessBlocklists,
  WirelessBlocklistsDefaultFlatPagination,
} from './resources/wireless-blocklists';
import { Actions } from './resources/actions/actions';
import {
  Address,
  AddressCreateParams,
  AddressCreateResponse,
  AddressDeleteResponse,
  AddressListParams,
  AddressRetrieveResponse,
  Addresses,
  AddressesDefaultFlatPagination,
} from './resources/addresses/addresses';
import { AI, AIRetrieveModelsResponse, AISummarizeParams, AISummarizeResponse } from './resources/ai/ai';
import { BundlePricing } from './resources/bundle-pricing/bundle-pricing';
import {
  CallDialParams,
  CallDialResponse,
  CallRetrieveStatusResponse,
  Calls,
  CustomSipHeader,
  DialogflowConfig,
  SipHeader,
  SoundModifications,
  StreamBidirectionalCodec,
  StreamBidirectionalMode,
  StreamBidirectionalSamplingRate,
  StreamBidirectionalTargetLegs,
  StreamCodec,
} from './resources/calls/calls';
import {
  Conference,
  ConferenceCreateParams,
  ConferenceCreateResponse,
  ConferenceListParams,
  ConferenceListParticipantsParams,
  ConferenceListParticipantsResponse,
  ConferenceListParticipantsResponsesDefaultFlatPagination,
  ConferenceRetrieveParams,
  ConferenceRetrieveResponse,
  Conferences,
  ConferencesDefaultFlatPagination,
} from './resources/conferences/conferences';
import {
  AnchorsiteOverride,
  ConnectionRtcpSettings,
  CredentialConnection,
  CredentialConnectionCreateParams,
  CredentialConnectionCreateResponse,
  CredentialConnectionDeleteResponse,
  CredentialConnectionListParams,
  CredentialConnectionRetrieveResponse,
  CredentialConnectionUpdateParams,
  CredentialConnectionUpdateResponse,
  CredentialConnections,
  CredentialConnectionsDefaultFlatPagination,
  CredentialInbound,
  CredentialOutbound,
  DtmfType,
  EncryptedMedia,
} from './resources/credential-connections/credential-connections';
import {
  ExternalConnection,
  ExternalConnectionCreateParams,
  ExternalConnectionCreateResponse,
  ExternalConnectionDeleteResponse,
  ExternalConnectionListParams,
  ExternalConnectionRetrieveResponse,
  ExternalConnectionUpdateLocationParams,
  ExternalConnectionUpdateLocationResponse,
  ExternalConnectionUpdateParams,
  ExternalConnectionUpdateResponse,
  ExternalConnections,
  ExternalConnectionsDefaultFlatPagination,
  ExternalVoiceIntegrationsPaginationMeta,
} from './resources/external-connections/external-connections';
import {
  Fax,
  FaxCreateParams,
  FaxCreateResponse,
  FaxListParams,
  FaxRetrieveResponse,
  Faxes,
  FaxesDefaultFlatPagination,
} from './resources/faxes/faxes';
import { Legacy } from './resources/legacy/legacy';
import {
  ManagedAccount,
  ManagedAccountBalance,
  ManagedAccountCreateParams,
  ManagedAccountCreateResponse,
  ManagedAccountGetAllocatableGlobalOutboundChannelsResponse,
  ManagedAccountListParams,
  ManagedAccountListResponse,
  ManagedAccountListResponsesDefaultFlatPagination,
  ManagedAccountRetrieveResponse,
  ManagedAccountUpdateGlobalChannelLimitParams,
  ManagedAccountUpdateGlobalChannelLimitResponse,
  ManagedAccountUpdateParams,
  ManagedAccountUpdateResponse,
  ManagedAccounts,
} from './resources/managed-accounts/managed-accounts';
import {
  MessageCancelScheduledResponse,
  MessageRetrieveResponse,
  MessageScheduleParams,
  MessageScheduleResponse,
  MessageSendGroupMmsParams,
  MessageSendGroupMmsResponse,
  MessageSendLongCodeParams,
  MessageSendLongCodeResponse,
  MessageSendNumberPoolParams,
  MessageSendNumberPoolResponse,
  MessageSendParams,
  MessageSendResponse,
  MessageSendShortCodeParams,
  MessageSendShortCodeResponse,
  MessageSendWhatsappParams,
  MessageSendWhatsappResponse,
  Messages,
  MessagingError,
  OutboundMessagePayload,
  RcsAgentMessage,
  RcsCardContent,
  RcsContentInfo,
  RcsSuggestion,
  WhatsappMedia,
} from './resources/messages/messages';
import { Messaging10dlc, Messaging10dlcGetEnumResponse } from './resources/messaging-10dlc/messaging-10dlc';
import {
  MessagingHostedNumberOrderCheckEligibilityParams,
  MessagingHostedNumberOrderCheckEligibilityResponse,
  MessagingHostedNumberOrderCreateParams,
  MessagingHostedNumberOrderCreateResponse,
  MessagingHostedNumberOrderCreateVerificationCodesParams,
  MessagingHostedNumberOrderCreateVerificationCodesResponse,
  MessagingHostedNumberOrderDeleteResponse,
  MessagingHostedNumberOrderListParams,
  MessagingHostedNumberOrderRetrieveResponse,
  MessagingHostedNumberOrderValidateCodesParams,
  MessagingHostedNumberOrderValidateCodesResponse,
  MessagingHostedNumberOrders,
} from './resources/messaging-hosted-number-orders/messaging-hosted-number-orders';
import {
  MessagingProfile,
  MessagingProfileCreateParams,
  MessagingProfileCreateResponse,
  MessagingProfileDeleteResponse,
  MessagingProfileListParams,
  MessagingProfileListPhoneNumbersParams,
  MessagingProfileListShortCodesParams,
  MessagingProfileRetrieveResponse,
  MessagingProfileUpdateParams,
  MessagingProfileUpdateResponse,
  MessagingProfiles,
  MessagingProfilesDefaultFlatPagination,
  NumberPoolSettings,
  URLShortenerSettings,
} from './resources/messaging-profiles/messaging-profiles';
import { MessagingTollfree } from './resources/messaging-tollfree/messaging-tollfree';
import { Messaging } from './resources/messaging/messaging';
import {
  MobilePhoneNumber,
  MobilePhoneNumberListParams,
  MobilePhoneNumberRetrieveResponse,
  MobilePhoneNumberUpdateParams,
  MobilePhoneNumberUpdateResponse,
  MobilePhoneNumbers,
  MobilePhoneNumbersDefaultFlatPagination,
} from './resources/mobile-phone-numbers/mobile-phone-numbers';
import {
  InterfaceStatus,
  NetworkCreate,
  NetworkCreateParams,
  NetworkCreateResponse,
  NetworkDeleteResponse,
  NetworkListInterfacesParams,
  NetworkListInterfacesResponse,
  NetworkListInterfacesResponsesDefaultFlatPagination,
  NetworkListParams,
  NetworkListResponse,
  NetworkListResponsesDefaultFlatPagination,
  NetworkRetrieveResponse,
  NetworkUpdateParams,
  NetworkUpdateResponse,
  Networks,
} from './resources/networks/networks';
import {
  NumberReservation,
  NumberReservationCreateParams,
  NumberReservationCreateResponse,
  NumberReservationListParams,
  NumberReservationRetrieveResponse,
  NumberReservations,
  NumberReservationsDefaultFlatPagination,
  ReservedPhoneNumber,
} from './resources/number-reservations/number-reservations';
import { OperatorConnect } from './resources/operator-connect/operator-connect';
import { Organizations } from './resources/organizations/organizations';
import { Payment } from './resources/payment/payment';
import { PhoneNumberBlocks } from './resources/phone-number-blocks/phone-number-blocks';
import {
  PhoneNumberDeleteResponse,
  PhoneNumberDetailed,
  PhoneNumberDetailedsDefaultFlatPagination,
  PhoneNumberListParams,
  PhoneNumberRetrieveResponse,
  PhoneNumberSlimListParams,
  PhoneNumberSlimListResponse,
  PhoneNumberSlimListResponsesDefaultFlatPagination,
  PhoneNumberUpdateParams,
  PhoneNumberUpdateResponse,
  PhoneNumbers,
} from './resources/phone-numbers/phone-numbers';
import {
  PortingOrder,
  PortingOrderActivationSettings,
  PortingOrderCreateParams,
  PortingOrderCreateResponse,
  PortingOrderDocuments,
  PortingOrderEndUser,
  PortingOrderEndUserAdmin,
  PortingOrderEndUserLocation,
  PortingOrderListParams,
  PortingOrderMessaging,
  PortingOrderMisc,
  PortingOrderPhoneNumberConfiguration,
  PortingOrderRequirement,
  PortingOrderRetrieveAllowedFocWindowsResponse,
  PortingOrderRetrieveExceptionTypesResponse,
  PortingOrderRetrieveLoaTemplateParams,
  PortingOrderRetrieveParams,
  PortingOrderRetrieveRequirementsParams,
  PortingOrderRetrieveRequirementsResponse,
  PortingOrderRetrieveRequirementsResponsesDefaultFlatPagination,
  PortingOrderRetrieveResponse,
  PortingOrderRetrieveSubRequestResponse,
  PortingOrderType,
  PortingOrderUpdateParams,
  PortingOrderUpdateResponse,
  PortingOrderUserFeedback,
  PortingOrders,
  PortingOrdersActivationJob,
  PortingOrdersDefaultFlatPagination,
} from './resources/porting-orders/porting-orders';
import { Porting, PortingListUkCarriersResponse } from './resources/porting/porting';
import {
  PortoutDetails,
  PortoutDetailsDefaultFlatPagination,
  PortoutListParams,
  PortoutListRejectionCodesParams,
  PortoutListRejectionCodesResponse,
  PortoutRetrieveResponse,
  PortoutUpdateStatusParams,
  PortoutUpdateStatusResponse,
  Portouts,
} from './resources/portouts/portouts';
import { QueueRetrieveResponse, Queues } from './resources/queues/queues';
import {
  RecordingDeleteResponse,
  RecordingListParams,
  RecordingResponseData,
  RecordingResponseDataDefaultFlatPagination,
  RecordingRetrieveResponse,
  Recordings,
} from './resources/recordings/recordings';
import {
  ReportListMdrsParams,
  ReportListMdrsResponse,
  ReportListWdrsParams,
  ReportListWdrsResponse,
  ReportListWdrsResponsesDefaultFlatPagination,
  Reports,
} from './resources/reports/reports';
import {
  Room,
  RoomCreateParams,
  RoomCreateResponse,
  RoomListParams,
  RoomRetrieveParams,
  RoomRetrieveResponse,
  RoomSession,
  RoomUpdateParams,
  RoomUpdateResponse,
  Rooms,
  RoomsDefaultFlatPagination,
} from './resources/rooms/rooms';
import {
  ConsumedData,
  SimCardGroup,
  SimCardGroupCreateParams,
  SimCardGroupCreateResponse,
  SimCardGroupDeleteResponse,
  SimCardGroupListParams,
  SimCardGroupListResponse,
  SimCardGroupListResponsesDefaultFlatPagination,
  SimCardGroupRetrieveParams,
  SimCardGroupRetrieveResponse,
  SimCardGroupUpdateParams,
  SimCardGroupUpdateResponse,
  SimCardGroups,
} from './resources/sim-card-groups/sim-card-groups';
import {
  SimCard,
  SimCardDeleteParams,
  SimCardDeleteResponse,
  SimCardGetActivationCodeResponse,
  SimCardGetDeviceDetailsResponse,
  SimCardGetPublicIPResponse,
  SimCardListParams,
  SimCardListWirelessConnectivityLogsParams,
  SimCardListWirelessConnectivityLogsResponse,
  SimCardListWirelessConnectivityLogsResponsesDefaultFlatPagination,
  SimCardRetrieveParams,
  SimCardRetrieveResponse,
  SimCardUpdateParams,
  SimCardUpdateResponse,
  SimCards,
} from './resources/sim-cards/sim-cards';
import { Storage, StorageListMigrationSourceCoverageResponse } from './resources/storage/storage';
import { Texml, TexmlSecretsParams, TexmlSecretsResponse } from './resources/texml/texml';
import {
  CreateVerificationResponse,
  Verification,
  VerificationRetrieveResponse,
  VerificationTriggerCallParams,
  VerificationTriggerFlashcallParams,
  VerificationTriggerSMSParams,
  Verifications,
} from './resources/verifications/verifications';
import {
  VerifiedNumber,
  VerifiedNumberCreateParams,
  VerifiedNumberCreateResponse,
  VerifiedNumberDataWrapper,
  VerifiedNumberListParams,
  VerifiedNumbers,
  VerifiedNumbersDefaultFlatPagination,
} from './resources/verified-numbers/verified-numbers';
import {
  Wireless,
  WirelessRetrieveRegionsParams,
  WirelessRetrieveRegionsResponse,
} from './resources/wireless/wireless';
import { type Fetch, type Record as BuiltinRecord } from './internal/builtin-types';
import { HeadersLike, NullableHeaders, buildHeaders } from './internal/headers';
import { FinalRequestOptions, RequestOptions } from './internal/request-options';
import { toBase64 } from './internal/utils/base64';
import { readEnv } from './internal/utils/env';
import {
  type LogLevel,
  type Logger,
  formatRequestDetails,
  loggerFor,
  parseLogLevel,
} from './internal/utils/log';
import { isEmptyObj } from './internal/utils/values';

export interface ClientOptions {
  /**
   * Defaults to process.env['TELNYX_API_KEY'].
   */
  apiKey?: string | null | undefined;

  /**
   * Defaults to process.env['TELNYX_PUBLIC_KEY'].
   */
  publicKey?: string | null | undefined;

  /**
   * Defaults to process.env['TELNYX_CLIENT_ID'].
   */
  clientID?: string | null | undefined;

  /**
   * Defaults to process.env['TELNYX_CLIENT_SECRET'].
   */
  clientSecret?: string | null | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['TELNYX_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   *
   * @unit milliseconds
   */
  timeout?: number | undefined;
  /**
   * Additional `RequestInit` options to be passed to `fetch` calls.
   * Properties will be overridden by per-request `fetchOptions`.
   */
  fetchOptions?: MergedRequestInit | undefined;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we expect that `fetch` is defined globally.
   */
  fetch?: Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number | undefined;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `null` in request options.
   */
  defaultHeaders?: HeadersLike | undefined;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: BuiltinRecord<string, string | undefined> | undefined;

  /**
   * Set the log level.
   *
   * Defaults to process.env['TELNYX_LOG'] or 'warn' if it isn't set.
   */
  logLevel?: LogLevel | undefined;

  /**
   * Set the logger.
   *
   * Defaults to globalThis.console.
   */
  logger?: Logger | undefined;
}

/**
 * API Client for interfacing with the Telnyx API.
 */
export class Telnyx {
  apiKey: string | null;
  publicKey: string | null;
  clientID: string | null;
  clientSecret: string | null;

  baseURL: string;
  maxRetries: number;
  timeout: number;
  logger: Logger;
  logLevel: LogLevel | undefined;
  fetchOptions: MergedRequestInit | undefined;
  private fetch: Fetch;
  #encoder: Opts.RequestEncoder;
  protected idempotencyHeader?: string;
  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Telnyx API.
   *
   * @param {string | null | undefined} [opts.apiKey=process.env['TELNYX_API_KEY'] ?? null]
   * @param {string | null | undefined} [opts.publicKey=process.env['TELNYX_PUBLIC_KEY'] ?? null]
   * @param {string | null | undefined} [opts.clientID=process.env['TELNYX_CLIENT_ID'] ?? null]
   * @param {string | null | undefined} [opts.clientSecret=process.env['TELNYX_CLIENT_SECRET'] ?? null]
   * @param {string} [opts.baseURL=process.env['TELNYX_BASE_URL'] ?? https://api.telnyx.com/v2] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {MergedRequestInit} [opts.fetchOptions] - Additional `RequestInit` options to be passed to `fetch` calls.
   * @param {Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {HeadersLike} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {BuiltinRecord<string, string | undefined>} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = readEnv('TELNYX_BASE_URL'),
    apiKey = readEnv('TELNYX_API_KEY') ?? null,
    publicKey = readEnv('TELNYX_PUBLIC_KEY') ?? null,
    clientID = readEnv('TELNYX_CLIENT_ID') ?? null,
    clientSecret = readEnv('TELNYX_CLIENT_SECRET') ?? null,
    ...opts
  }: ClientOptions = {}) {
    const options: ClientOptions = {
      apiKey,
      publicKey,
      clientID,
      clientSecret,
      ...opts,
      baseURL: baseURL || `https://api.telnyx.com/v2`,
    };

    this.baseURL = options.baseURL!;
    this.timeout = options.timeout ?? Telnyx.DEFAULT_TIMEOUT /* 1 minute */;
    this.logger = options.logger ?? console;
    const defaultLogLevel = 'warn';
    // Set default logLevel early so that we can log a warning in parseLogLevel.
    this.logLevel = defaultLogLevel;
    this.logLevel =
      parseLogLevel(options.logLevel, 'ClientOptions.logLevel', this) ??
      parseLogLevel(readEnv('TELNYX_LOG'), "process.env['TELNYX_LOG']", this) ??
      defaultLogLevel;
    this.fetchOptions = options.fetchOptions;
    this.maxRetries = options.maxRetries ?? 2;
    this.fetch = options.fetch ?? Shims.getDefaultFetch();
    this.#encoder = Opts.FallbackEncoder;

    this._options = options;

    this.apiKey = apiKey;
    this.publicKey = publicKey;
    this.clientID = clientID;
    this.clientSecret = clientSecret;
  }

  /**
   * Create a new client instance re-using the same options given to the current client with optional overriding.
   */
  withOptions(options: Partial<ClientOptions>): this {
    const client = new (this.constructor as any as new (props: ClientOptions) => typeof this)({
      ...this._options,
      baseURL: this.baseURL,
      maxRetries: this.maxRetries,
      timeout: this.timeout,
      logger: this.logger,
      logLevel: this.logLevel,
      fetch: this.fetch,
      fetchOptions: this.fetchOptions,
      apiKey: this.apiKey,
      publicKey: this.publicKey,
      clientID: this.clientID,
      clientSecret: this.clientSecret,
      ...options,
    });
    client.oauthClientAuthState = this.oauthClientAuthState;
    return client;
  }

  /**
   * Check whether the base URL is set to its default.
   */
  #baseURLOverridden(): boolean {
    return this.baseURL !== 'https://api.telnyx.com/v2';
  }

  protected defaultQuery(): BuiltinRecord<string, string | undefined> | undefined {
    return this._options.defaultQuery;
  }

  protected validateHeaders({ values, nulls }: NullableHeaders) {
    return;
  }

  protected async authHeaders(opts: FinalRequestOptions): Promise<NullableHeaders | undefined> {
    return buildHeaders([await this.bearerAuth(opts), await this.oauthClientAuth(opts)]);
  }

  protected async bearerAuth(opts: FinalRequestOptions): Promise<NullableHeaders | undefined> {
    if (this.apiKey == null) {
      return undefined;
    }
    return buildHeaders([{ Authorization: `Bearer ${this.apiKey}` }]);
  }

  private oauthClientAuthState:
    | {
        promise: Promise<{
          access_token: string;
          token_type: string;
          expires_in: number;
          expires_at: Date;
          refresh_token?: string;
        }>;
        clientID: string;
        clientSecret: string;
      }
    | undefined;
  protected async oauthClientAuth(opts: FinalRequestOptions): Promise<NullableHeaders | undefined> {
    if (!this.clientID || !this.clientSecret) {
      return undefined;
    }

    // Invalidate the cache if the token is expired
    if (this.oauthClientAuthState && +(await this.oauthClientAuthState.promise).expires_at < Date.now()) {
      this.oauthClientAuthState = undefined;
    }

    // Invalidate the cache if the relevant state has been changed
    if (
      this.oauthClientAuthState &&
      this.oauthClientAuthState.clientID !== this.clientID &&
      this.oauthClientAuthState.clientSecret !== this.clientSecret
    ) {
      this.oauthClientAuthState = undefined;
    }

    if (!this.oauthClientAuthState) {
      this.oauthClientAuthState = {
        promise: this.fetch(this.buildURL('https://api.telnyx.com/v2/oauth/token', {}), {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Basic ${toBase64(`${this.clientID}:${this.clientSecret}`)}`,
          },
          body: 'grant_type=client_credentials',
        }).then(async (res) => {
          if (!res.ok) {
            const errText = await res.text().catch(() => '');
            const errJSON = errText ? safeJSON(errText) : undefined;
            const errMessage = errJSON ? undefined : errText;
            throw this.makeStatusError(res.status, errJSON, errMessage, res.headers);
          }
          const json = (await res.json()) as {
            access_token: string;
            token_type: string;
            expires_in: number;
            refresh_token?: string;
          };
          const now = new Date();
          now.setSeconds(now.getSeconds() + json.expires_in);
          return { ...json, expires_at: now };
        }),
        clientID: this.clientID,
        clientSecret: this.clientSecret,
      };
    }

    const token = await this.oauthClientAuthState.promise;

    return buildHeaders([{ Authorization: `Bearer ${token.access_token}` }]);
  }

  protected stringifyQuery(query: BuiltinRecord<string, unknown>): string {
    return qs.stringify(query, { arrayFormat: 'comma' });
  }

  private getUserAgent(): string {
    return `${this.constructor.name}/JS ${VERSION}`;
  }

  protected defaultIdempotencyKey(): string {
    return `stainless-node-retry-${uuid4()}`;
  }

  protected makeStatusError(
    status: number,
    error: Object,
    message: string | undefined,
    headers: Headers,
  ): Errors.APIError {
    return Errors.APIError.generate(status, error, message, headers);
  }

  buildURL(
    path: string,
    query: BuiltinRecord<string, unknown> | null | undefined,
    defaultBaseURL?: string | undefined,
  ): string {
    const baseURL = (!this.#baseURLOverridden() && defaultBaseURL) || this.baseURL;
    const url =
      isAbsoluteURL(path) ?
        new URL(path)
      : new URL(baseURL + (baseURL.endsWith('/') && path.startsWith('/') ? path.slice(1) : path));

    const defaultQuery = this.defaultQuery();
    if (!isEmptyObj(defaultQuery)) {
      query = { ...defaultQuery, ...query };
    }

    if (typeof query === 'object' && query && !Array.isArray(query)) {
      url.search = this.stringifyQuery(query as BuiltinRecord<string, unknown>);
    }

    return url.toString();
  }

  /**
   * Used as a callback for mutating the given `FinalRequestOptions` object.
   */
  protected async prepareOptions(options: FinalRequestOptions): Promise<void> {}

  /**
   * Used as a callback for mutating the given `RequestInit` object.
   *
   * This is useful for cases where you want to add certain headers based off of
   * the request properties, e.g. `method` or `url`.
   */
  protected async prepareRequest(
    request: RequestInit,
    { url, options }: { url: string; options: FinalRequestOptions },
  ): Promise<void> {}

  get<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('get', path, opts);
  }

  post<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('post', path, opts);
  }

  patch<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('patch', path, opts);
  }

  put<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('put', path, opts);
  }

  delete<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('delete', path, opts);
  }

  private methodRequest<Rsp>(
    method: HTTPMethod,
    path: string,
    opts?: PromiseOrValue<RequestOptions>,
  ): APIPromise<Rsp> {
    return this.request(
      Promise.resolve(opts).then((opts) => {
        return { method, path, ...opts };
      }),
    );
  }

  request<Rsp>(
    options: PromiseOrValue<FinalRequestOptions>,
    remainingRetries: number | null = null,
  ): APIPromise<Rsp> {
    return new APIPromise(this, this.makeRequest(options, remainingRetries, undefined));
  }

  private async makeRequest(
    optionsInput: PromiseOrValue<FinalRequestOptions>,
    retriesRemaining: number | null,
    retryOfRequestLogID: string | undefined,
  ): Promise<APIResponseProps> {
    const options = await optionsInput;
    const maxRetries = options.maxRetries ?? this.maxRetries;
    if (retriesRemaining == null) {
      retriesRemaining = maxRetries;
    }

    await this.prepareOptions(options);

    const { req, url, timeout } = await this.buildRequest(options, {
      retryCount: maxRetries - retriesRemaining,
    });

    await this.prepareRequest(req, { url, options });

    /** Not an API request ID, just for correlating local log entries. */
    const requestLogID = 'log_' + ((Math.random() * (1 << 24)) | 0).toString(16).padStart(6, '0');
    const retryLogStr = retryOfRequestLogID === undefined ? '' : `, retryOf: ${retryOfRequestLogID}`;
    const startTime = Date.now();

    loggerFor(this).debug(
      `[${requestLogID}] sending request`,
      formatRequestDetails({
        retryOfRequestLogID,
        method: options.method,
        url,
        options,
        headers: req.headers,
      }),
    );

    if (options.signal?.aborted) {
      throw new Errors.APIUserAbortError();
    }

    const controller = new AbortController();
    const response = await this.fetchWithTimeout(url, req, timeout, controller).catch(castToError);
    const headersTime = Date.now();

    if (response instanceof globalThis.Error) {
      const retryMessage = `retrying, ${retriesRemaining} attempts remaining`;
      if (options.signal?.aborted) {
        throw new Errors.APIUserAbortError();
      }
      // detect native connection timeout errors
      // deno throws "TypeError: error sending request for url (https://example/): client error (Connect): tcp connect error: Operation timed out (os error 60): Operation timed out (os error 60)"
      // undici throws "TypeError: fetch failed" with cause "ConnectTimeoutError: Connect Timeout Error (attempted address: example:443, timeout: 1ms)"
      // others do not provide enough information to distinguish timeouts from other connection errors
      const isTimeout =
        isAbortError(response) ||
        /timed? ?out/i.test(String(response) + ('cause' in response ? String(response.cause) : ''));
      if (retriesRemaining) {
        loggerFor(this).info(
          `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} - ${retryMessage}`,
        );
        loggerFor(this).debug(
          `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} (${retryMessage})`,
          formatRequestDetails({
            retryOfRequestLogID,
            url,
            durationMs: headersTime - startTime,
            message: response.message,
          }),
        );
        return this.retryRequest(options, retriesRemaining, retryOfRequestLogID ?? requestLogID);
      }
      loggerFor(this).info(
        `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} - error; no more retries left`,
      );
      loggerFor(this).debug(
        `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} (error; no more retries left)`,
        formatRequestDetails({
          retryOfRequestLogID,
          url,
          durationMs: headersTime - startTime,
          message: response.message,
        }),
      );
      if (isTimeout) {
        throw new Errors.APIConnectionTimeoutError();
      }
      throw new Errors.APIConnectionError({ cause: response });
    }

    const responseInfo = `[${requestLogID}${retryLogStr}] ${req.method} ${url} ${
      response.ok ? 'succeeded' : 'failed'
    } with status ${response.status} in ${headersTime - startTime}ms`;

    if (!response.ok) {
      const shouldRetry = await this.shouldRetry(response);
      if (retriesRemaining && shouldRetry) {
        const retryMessage = `retrying, ${retriesRemaining} attempts remaining`;

        // We don't need the body of this response.
        await Shims.CancelReadableStream(response.body);
        loggerFor(this).info(`${responseInfo} - ${retryMessage}`);
        loggerFor(this).debug(
          `[${requestLogID}] response error (${retryMessage})`,
          formatRequestDetails({
            retryOfRequestLogID,
            url: response.url,
            status: response.status,
            headers: response.headers,
            durationMs: headersTime - startTime,
          }),
        );
        return this.retryRequest(
          options,
          retriesRemaining,
          retryOfRequestLogID ?? requestLogID,
          response.headers,
        );
      }

      const retryMessage = shouldRetry ? `error; no more retries left` : `error; not retryable`;

      loggerFor(this).info(`${responseInfo} - ${retryMessage}`);

      const errText = await response.text().catch((err: any) => castToError(err).message);
      const errJSON = safeJSON(errText);
      const errMessage = errJSON ? undefined : errText;

      loggerFor(this).debug(
        `[${requestLogID}] response error (${retryMessage})`,
        formatRequestDetails({
          retryOfRequestLogID,
          url: response.url,
          status: response.status,
          headers: response.headers,
          message: errMessage,
          durationMs: Date.now() - startTime,
        }),
      );

      const err = this.makeStatusError(response.status, errJSON, errMessage, response.headers);
      throw err;
    }

    loggerFor(this).info(responseInfo);
    loggerFor(this).debug(
      `[${requestLogID}] response start`,
      formatRequestDetails({
        retryOfRequestLogID,
        url: response.url,
        status: response.status,
        headers: response.headers,
        durationMs: headersTime - startTime,
      }),
    );

    return { response, options, controller, requestLogID, retryOfRequestLogID, startTime };
  }

  getAPIList<Item, PageClass extends Pagination.AbstractPage<Item> = Pagination.AbstractPage<Item>>(
    path: string,
    Page: new (...args: any[]) => PageClass,
    opts?: RequestOptions,
  ): Pagination.PagePromise<PageClass, Item> {
    return this.requestAPIList(Page, { method: 'get', path, ...opts });
  }

  requestAPIList<
    Item = unknown,
    PageClass extends Pagination.AbstractPage<Item> = Pagination.AbstractPage<Item>,
  >(
    Page: new (...args: ConstructorParameters<typeof Pagination.AbstractPage>) => PageClass,
    options: FinalRequestOptions,
  ): Pagination.PagePromise<PageClass, Item> {
    const request = this.makeRequest(options, null, undefined);
    return new Pagination.PagePromise<PageClass, Item>(this as any as Telnyx, request, Page);
  }

  async fetchWithTimeout(
    url: RequestInfo,
    init: RequestInit | undefined,
    ms: number,
    controller: AbortController,
  ): Promise<Response> {
    const { signal, method, ...options } = init || {};
    const abort = controller.abort.bind(controller);
    if (signal) signal.addEventListener('abort', abort, { once: true });

    const timeout = setTimeout(abort, ms);

    const isReadableBody =
      ((globalThis as any).ReadableStream && options.body instanceof (globalThis as any).ReadableStream) ||
      (typeof options.body === 'object' && options.body !== null && Symbol.asyncIterator in options.body);

    const fetchOptions: RequestInit = {
      signal: controller.signal as any,
      ...(isReadableBody ? { duplex: 'half' } : {}),
      method: 'GET',
      ...options,
    };
    if (method) {
      // Custom methods like 'patch' need to be uppercased
      // See https://github.com/nodejs/undici/issues/2294
      fetchOptions.method = method.toUpperCase();
    }

    try {
      // use undefined this binding; fetch errors if bound to something else in browser/cloudflare
      return await this.fetch.call(undefined, url, fetchOptions);
    } finally {
      clearTimeout(timeout);
    }
  }

  private async shouldRetry(response: Response): Promise<boolean> {
    // Note this is not a standard header.
    const shouldRetryHeader = response.headers.get('x-should-retry');

    // If the server explicitly says whether or not to retry, obey.
    if (shouldRetryHeader === 'true') return true;
    if (shouldRetryHeader === 'false') return false;

    // Retry if the token has expired
    const oauthClientAuth = await this.oauthClientAuthState?.promise;
    if (response.status === 401 && oauthClientAuth && +oauthClientAuth.expires_at - Date.now() < 10 * 1000) {
      this.oauthClientAuthState = undefined;
      return true;
    }

    // Retry on request timeouts.
    if (response.status === 408) return true;

    // Retry on lock timeouts.
    if (response.status === 409) return true;

    // Retry on rate limits.
    if (response.status === 429) return true;

    // Retry internal errors.
    if (response.status >= 500) return true;

    return false;
  }

  private async retryRequest(
    options: FinalRequestOptions,
    retriesRemaining: number,
    requestLogID: string,
    responseHeaders?: Headers | undefined,
  ): Promise<APIResponseProps> {
    let timeoutMillis: number | undefined;

    // Note the `retry-after-ms` header may not be standard, but is a good idea and we'd like proactive support for it.
    const retryAfterMillisHeader = responseHeaders?.get('retry-after-ms');
    if (retryAfterMillisHeader) {
      const timeoutMs = parseFloat(retryAfterMillisHeader);
      if (!Number.isNaN(timeoutMs)) {
        timeoutMillis = timeoutMs;
      }
    }

    // About the Retry-After header: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After
    const retryAfterHeader = responseHeaders?.get('retry-after');
    if (retryAfterHeader && !timeoutMillis) {
      const timeoutSeconds = parseFloat(retryAfterHeader);
      if (!Number.isNaN(timeoutSeconds)) {
        timeoutMillis = timeoutSeconds * 1000;
      } else {
        timeoutMillis = Date.parse(retryAfterHeader) - Date.now();
      }
    }

    // If the API asks us to wait a certain amount of time (and it's a reasonable amount),
    // just do what it says, but otherwise calculate a default
    if (!(timeoutMillis && 0 <= timeoutMillis && timeoutMillis < 60 * 1000)) {
      const maxRetries = options.maxRetries ?? this.maxRetries;
      timeoutMillis = this.calculateDefaultRetryTimeoutMillis(retriesRemaining, maxRetries);
    }
    await sleep(timeoutMillis);

    return this.makeRequest(options, retriesRemaining - 1, requestLogID);
  }

  private calculateDefaultRetryTimeoutMillis(retriesRemaining: number, maxRetries: number): number {
    const initialRetryDelay = 0.5;
    const maxRetryDelay = 8.0;

    const numRetries = maxRetries - retriesRemaining;

    // Apply exponential backoff, but not more than the max.
    const sleepSeconds = Math.min(initialRetryDelay * Math.pow(2, numRetries), maxRetryDelay);

    // Apply some jitter, take up to at most 25 percent of the retry time.
    const jitter = 1 - Math.random() * 0.25;

    return sleepSeconds * jitter * 1000;
  }

  async buildRequest(
    inputOptions: FinalRequestOptions,
    { retryCount = 0 }: { retryCount?: number } = {},
  ): Promise<{ req: FinalizedRequestInit; url: string; timeout: number }> {
    const options = { ...inputOptions };
    const { method, path, query, defaultBaseURL } = options;

    const url = this.buildURL(path!, query as BuiltinRecord<string, unknown>, defaultBaseURL);
    if ('timeout' in options) validatePositiveInteger('timeout', options.timeout);
    options.timeout = options.timeout ?? this.timeout;
    const { bodyHeaders, body } = this.buildBody({ options });
    const reqHeaders = await this.buildHeaders({ options: inputOptions, method, bodyHeaders, retryCount });

    const req: FinalizedRequestInit = {
      method,
      headers: reqHeaders,
      ...(options.signal && { signal: options.signal }),
      ...((globalThis as any).ReadableStream &&
        body instanceof (globalThis as any).ReadableStream && { duplex: 'half' }),
      ...(body && { body }),
      ...((this.fetchOptions as any) ?? {}),
      ...((options.fetchOptions as any) ?? {}),
    };

    return { req, url, timeout: options.timeout };
  }

  private async buildHeaders({
    options,
    method,
    bodyHeaders,
    retryCount,
  }: {
    options: FinalRequestOptions;
    method: HTTPMethod;
    bodyHeaders: HeadersLike;
    retryCount: number;
  }): Promise<Headers> {
    let idempotencyHeaders: HeadersLike = {};
    if (this.idempotencyHeader && method !== 'get') {
      if (!options.idempotencyKey) options.idempotencyKey = this.defaultIdempotencyKey();
      idempotencyHeaders[this.idempotencyHeader] = options.idempotencyKey;
    }

    const headers = buildHeaders([
      idempotencyHeaders,
      {
        Accept: 'application/json',
        'User-Agent': this.getUserAgent(),
        'X-Stainless-Retry-Count': String(retryCount),
        ...(options.timeout ? { 'X-Stainless-Timeout': String(Math.trunc(options.timeout / 1000)) } : {}),
        ...getPlatformHeaders(),
      },
      await this.authHeaders(options),
      this._options.defaultHeaders,
      bodyHeaders,
      options.headers,
    ]);

    this.validateHeaders(headers);

    return headers.values;
  }

  private buildBody({ options: { body, headers: rawHeaders } }: { options: FinalRequestOptions }): {
    bodyHeaders: HeadersLike;
    body: BodyInit | undefined;
  } {
    if (!body) {
      return { bodyHeaders: undefined, body: undefined };
    }
    const headers = buildHeaders([rawHeaders]);
    if (
      // Pass raw type verbatim
      ArrayBuffer.isView(body) ||
      body instanceof ArrayBuffer ||
      body instanceof DataView ||
      (typeof body === 'string' &&
        // Preserve legacy string encoding behavior for now
        headers.values.has('content-type')) ||
      // `Blob` is superset of `File`
      ((globalThis as any).Blob && body instanceof (globalThis as any).Blob) ||
      // `FormData` -> `multipart/form-data`
      body instanceof FormData ||
      // `URLSearchParams` -> `application/x-www-form-urlencoded`
      body instanceof URLSearchParams ||
      // Send chunked stream (each chunk has own `length`)
      ((globalThis as any).ReadableStream && body instanceof (globalThis as any).ReadableStream)
    ) {
      return { bodyHeaders: undefined, body: body as BodyInit };
    } else if (
      typeof body === 'object' &&
      (Symbol.asyncIterator in body ||
        (Symbol.iterator in body && 'next' in body && typeof body.next === 'function'))
    ) {
      return { bodyHeaders: undefined, body: Shims.ReadableStreamFrom(body as AsyncIterable<Uint8Array>) };
    } else {
      return this.#encoder({ body, headers });
    }
  }

  static Telnyx = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static TelnyxError = Errors.TelnyxError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;

  legacy: API.Legacy = new API.Legacy(this);
  oauth: API.OAuth = new API.OAuth(this);
  oauthClients: API.OAuthClients = new API.OAuthClients(this);
  oauthGrants: API.OAuthGrants = new API.OAuthGrants(this);
  webhooks: API.Webhooks = new API.Webhooks(this);
  accessIPAddress: API.AccessIPAddress = new API.AccessIPAddress(this);
  accessIPRanges: API.AccessIPRanges = new API.AccessIPRanges(this);
  actions: API.Actions = new API.Actions(this);
  addresses: API.Addresses = new API.Addresses(this);
  advancedOrders: API.AdvancedOrders = new API.AdvancedOrders(this);
  ai: API.AI = new API.AI(this);
  auditEvents: API.AuditEvents = new API.AuditEvents(this);
  authenticationProviders: API.AuthenticationProviders = new API.AuthenticationProviders(this);
  availablePhoneNumberBlocks: API.AvailablePhoneNumberBlocks = new API.AvailablePhoneNumberBlocks(this);
  availablePhoneNumbers: API.AvailablePhoneNumbers = new API.AvailablePhoneNumbers(this);
  balance: API.Balance = new API.Balance(this);
  billingGroups: API.BillingGroups = new API.BillingGroups(this);
  bulkSimCardActions: API.BulkSimCardActions = new API.BulkSimCardActions(this);
  bundlePricing: API.BundlePricing = new API.BundlePricing(this);
  callControlApplications: API.CallControlApplications = new API.CallControlApplications(this);
  callEvents: API.CallEvents = new API.CallEvents(this);
  calls: API.Calls = new API.Calls(this);
  channelZones: API.ChannelZones = new API.ChannelZones(this);
  chargesBreakdown: API.ChargesBreakdown = new API.ChargesBreakdown(this);
  chargesSummary: API.ChargesSummary = new API.ChargesSummary(this);
  comments: API.Comments = new API.Comments(this);
  conferences: API.Conferences = new API.Conferences(this);
  connections: API.Connections = new API.Connections(this);
  countryCoverage: API.CountryCoverage = new API.CountryCoverage(this);
  credentialConnections: API.CredentialConnections = new API.CredentialConnections(this);
  customStorageCredentials: API.CustomStorageCredentials = new API.CustomStorageCredentials(this);
  customerServiceRecords: API.CustomerServiceRecords = new API.CustomerServiceRecords(this);
  detailRecords: API.DetailRecords = new API.DetailRecords(this);
  dialogflowConnections: API.DialogflowConnections = new API.DialogflowConnections(this);
  documentLinks: API.DocumentLinks = new API.DocumentLinks(this);
  documents: API.Documents = new API.Documents(this);
  dynamicEmergencyAddresses: API.DynamicEmergencyAddresses = new API.DynamicEmergencyAddresses(this);
  dynamicEmergencyEndpoints: API.DynamicEmergencyEndpoints = new API.DynamicEmergencyEndpoints(this);
  externalConnections: API.ExternalConnections = new API.ExternalConnections(this);
  faxApplications: API.FaxApplications = new API.FaxApplications(this);
  faxes: API.Faxes = new API.Faxes(this);
  fqdnConnections: API.FqdnConnections = new API.FqdnConnections(this);
  fqdns: API.Fqdns = new API.Fqdns(this);
  globalIPAllowedPorts: API.GlobalIPAllowedPorts = new API.GlobalIPAllowedPorts(this);
  globalIPAssignmentHealth: API.GlobalIPAssignmentHealth = new API.GlobalIPAssignmentHealth(this);
  globalIPAssignments: API.GlobalIPAssignments = new API.GlobalIPAssignments(this);
  globalIPAssignmentsUsage: API.GlobalIPAssignmentsUsage = new API.GlobalIPAssignmentsUsage(this);
  globalIPHealthCheckTypes: API.GlobalIPHealthCheckTypes = new API.GlobalIPHealthCheckTypes(this);
  globalIPHealthChecks: API.GlobalIPHealthChecks = new API.GlobalIPHealthChecks(this);
  globalIPLatency: API.GlobalIPLatency = new API.GlobalIPLatency(this);
  globalIPProtocols: API.GlobalIPProtocols = new API.GlobalIPProtocols(this);
  globalIPUsage: API.GlobalIPUsage = new API.GlobalIPUsage(this);
  globalIPs: API.GlobalIPs = new API.GlobalIPs(this);
  inboundChannels: API.InboundChannels = new API.InboundChannels(this);
  integrationSecrets: API.IntegrationSecrets = new API.IntegrationSecrets(this);
  inventoryCoverage: API.InventoryCoverage = new API.InventoryCoverage(this);
  invoices: API.Invoices = new API.Invoices(this);
  ipConnections: API.IPConnections = new API.IPConnections(this);
  ips: API.IPs = new API.IPs(this);
  ledgerBillingGroupReports: API.LedgerBillingGroupReports = new API.LedgerBillingGroupReports(this);
  list: API.List = new API.List(this);
  managedAccounts: API.ManagedAccounts = new API.ManagedAccounts(this);
  media: API.Media = new API.Media(this);
  messages: API.Messages = new API.Messages(this);
  messaging: API.Messaging = new API.Messaging(this);
  messagingHostedNumberOrders: API.MessagingHostedNumberOrders = new API.MessagingHostedNumberOrders(this);
  messagingHostedNumbers: API.MessagingHostedNumbers = new API.MessagingHostedNumbers(this);
  messagingNumbersBulkUpdates: API.MessagingNumbersBulkUpdates = new API.MessagingNumbersBulkUpdates(this);
  messagingOptouts: API.MessagingOptouts = new API.MessagingOptouts(this);
  messagingProfiles: API.MessagingProfiles = new API.MessagingProfiles(this);
  messagingTollfree: API.MessagingTollfree = new API.MessagingTollfree(this);
  messagingURLDomains: API.MessagingURLDomains = new API.MessagingURLDomains(this);
  mobileNetworkOperators: API.MobileNetworkOperators = new API.MobileNetworkOperators(this);
  mobilePushCredentials: API.MobilePushCredentials = new API.MobilePushCredentials(this);
  networkCoverage: API.NetworkCoverage = new API.NetworkCoverage(this);
  networks: API.Networks = new API.Networks(this);
  notificationChannels: API.NotificationChannels = new API.NotificationChannels(this);
  notificationEventConditions: API.NotificationEventConditions = new API.NotificationEventConditions(this);
  notificationEvents: API.NotificationEvents = new API.NotificationEvents(this);
  notificationProfiles: API.NotificationProfiles = new API.NotificationProfiles(this);
  notificationSettings: API.NotificationSettings = new API.NotificationSettings(this);
  numberBlockOrders: API.NumberBlockOrders = new API.NumberBlockOrders(this);
  numberLookup: API.NumberLookup = new API.NumberLookup(this);
  numberOrderPhoneNumbers: API.NumberOrderPhoneNumbers = new API.NumberOrderPhoneNumbers(this);
  numberOrders: API.NumberOrders = new API.NumberOrders(this);
  numberReservations: API.NumberReservations = new API.NumberReservations(this);
  numbersFeatures: API.NumbersFeatures = new API.NumbersFeatures(this);
  operatorConnect: API.OperatorConnect = new API.OperatorConnect(this);
  otaUpdates: API.OtaUpdates = new API.OtaUpdates(this);
  outboundVoiceProfiles: API.OutboundVoiceProfiles = new API.OutboundVoiceProfiles(this);
  payment: API.Payment = new API.Payment(this);
  phoneNumberBlocks: API.PhoneNumberBlocks = new API.PhoneNumberBlocks(this);
  phoneNumbers: API.PhoneNumbers = new API.PhoneNumbers(this);
  phoneNumbersRegulatoryRequirements: API.PhoneNumbersRegulatoryRequirements =
    new API.PhoneNumbersRegulatoryRequirements(this);
  portabilityChecks: API.PortabilityChecks = new API.PortabilityChecks(this);
  porting: API.Porting = new API.Porting(this);
  portingOrders: API.PortingOrders = new API.PortingOrders(this);
  portingPhoneNumbers: API.PortingPhoneNumbers = new API.PortingPhoneNumbers(this);
  portouts: API.Portouts = new API.Portouts(this);
  privateWirelessGateways: API.PrivateWirelessGateways = new API.PrivateWirelessGateways(this);
  publicInternetGateways: API.PublicInternetGateways = new API.PublicInternetGateways(this);
  queues: API.Queues = new API.Queues(this);
  rcsAgents: API.RcsAgents = new API.RcsAgents(this);
  recordingTranscriptions: API.RecordingTranscriptions = new API.RecordingTranscriptions(this);
  recordings: API.Recordings = new API.Recordings(this);
  regions: API.Regions = new API.Regions(this);
  regulatoryRequirements: API.RegulatoryRequirements = new API.RegulatoryRequirements(this);
  reports: API.Reports = new API.Reports(this);
  requirementGroups: API.RequirementGroups = new API.RequirementGroups(this);
  requirementTypes: API.RequirementTypes = new API.RequirementTypes(this);
  requirements: API.Requirements = new API.Requirements(this);
  roomCompositions: API.RoomCompositions = new API.RoomCompositions(this);
  roomParticipants: API.RoomParticipants = new API.RoomParticipants(this);
  roomRecordings: API.RoomRecordings = new API.RoomRecordings(this);
  rooms: API.Rooms = new API.Rooms(this);
  seti: API.Seti = new API.Seti(this);
  shortCodes: API.ShortCodes = new API.ShortCodes(this);
  simCardDataUsageNotifications: API.SimCardDataUsageNotifications = new API.SimCardDataUsageNotifications(
    this,
  );
  simCardGroups: API.SimCardGroups = new API.SimCardGroups(this);
  simCardOrderPreview: API.SimCardOrderPreview = new API.SimCardOrderPreview(this);
  simCardOrders: API.SimCardOrders = new API.SimCardOrders(this);
  simCards: API.SimCards = new API.SimCards(this);
  siprecConnectors: API.SiprecConnectors = new API.SiprecConnectors(this);
  storage: API.Storage = new API.Storage(this);
  subNumberOrders: API.SubNumberOrders = new API.SubNumberOrders(this);
  subNumberOrdersReport: API.SubNumberOrdersReport = new API.SubNumberOrdersReport(this);
  telephonyCredentials: API.TelephonyCredentials = new API.TelephonyCredentials(this);
  texml: API.Texml = new API.Texml(this);
  texmlApplications: API.TexmlApplications = new API.TexmlApplications(this);
  textToSpeech: API.TextToSpeech = new API.TextToSpeech(this);
  usageReports: API.UsageReports = new API.UsageReports(this);
  userAddresses: API.UserAddresses = new API.UserAddresses(this);
  userTags: API.UserTags = new API.UserTags(this);
  verifications: API.Verifications = new API.Verifications(this);
  verifiedNumbers: API.VerifiedNumbers = new API.VerifiedNumbers(this);
  verifyProfiles: API.VerifyProfiles = new API.VerifyProfiles(this);
  virtualCrossConnects: API.VirtualCrossConnects = new API.VirtualCrossConnects(this);
  virtualCrossConnectsCoverage: API.VirtualCrossConnectsCoverage = new API.VirtualCrossConnectsCoverage(this);
  webhookDeliveries: API.WebhookDeliveries = new API.WebhookDeliveries(this);
  wireguardInterfaces: API.WireguardInterfaces = new API.WireguardInterfaces(this);
  wireguardPeers: API.WireguardPeers = new API.WireguardPeers(this);
  wireless: API.Wireless = new API.Wireless(this);
  wirelessBlocklistValues: API.WirelessBlocklistValues = new API.WirelessBlocklistValues(this);
  wirelessBlocklists: API.WirelessBlocklists = new API.WirelessBlocklists(this);
  wellKnown: API.WellKnown = new API.WellKnown(this);
  inexplicitNumberOrders: API.InexplicitNumberOrders = new API.InexplicitNumberOrders(this);
  mobilePhoneNumbers: API.MobilePhoneNumbers = new API.MobilePhoneNumbers(this);
  mobileVoiceConnections: API.MobileVoiceConnections = new API.MobileVoiceConnections(this);
  messaging10dlc: API.Messaging10dlc = new API.Messaging10dlc(this);
  speechToText: API.SpeechToText = new API.SpeechToText(this);
  organizations: API.Organizations = new API.Organizations(this);
}

Telnyx.Legacy = Legacy;
Telnyx.OAuth = OAuth;
Telnyx.OAuthClients = OAuthClients;
Telnyx.OAuthGrants = OAuthGrants;
Telnyx.Webhooks = Webhooks;
Telnyx.AccessIPAddress = AccessIPAddress;
Telnyx.AccessIPRanges = AccessIPRanges;
Telnyx.Actions = Actions;
Telnyx.Addresses = Addresses;
Telnyx.AdvancedOrders = AdvancedOrders;
Telnyx.AI = AI;
Telnyx.AuditEvents = AuditEvents;
Telnyx.AuthenticationProviders = AuthenticationProviders;
Telnyx.AvailablePhoneNumberBlocks = AvailablePhoneNumberBlocks;
Telnyx.AvailablePhoneNumbers = AvailablePhoneNumbers;
Telnyx.Balance = Balance;
Telnyx.BillingGroups = BillingGroups;
Telnyx.BulkSimCardActions = BulkSimCardActions;
Telnyx.BundlePricing = BundlePricing;
Telnyx.CallControlApplications = CallControlApplications;
Telnyx.CallEvents = CallEvents;
Telnyx.Calls = Calls;
Telnyx.ChannelZones = ChannelZones;
Telnyx.ChargesBreakdown = ChargesBreakdown;
Telnyx.ChargesSummary = ChargesSummary;
Telnyx.Comments = Comments;
Telnyx.Conferences = Conferences;
Telnyx.Connections = Connections;
Telnyx.CountryCoverage = CountryCoverage;
Telnyx.CredentialConnections = CredentialConnections;
Telnyx.CustomStorageCredentials = CustomStorageCredentials;
Telnyx.CustomerServiceRecords = CustomerServiceRecords;
Telnyx.DetailRecords = DetailRecords;
Telnyx.DialogflowConnections = DialogflowConnections;
Telnyx.DocumentLinks = DocumentLinks;
Telnyx.Documents = Documents;
Telnyx.DynamicEmergencyAddresses = DynamicEmergencyAddresses;
Telnyx.DynamicEmergencyEndpoints = DynamicEmergencyEndpoints;
Telnyx.ExternalConnections = ExternalConnections;
Telnyx.FaxApplications = FaxApplications;
Telnyx.Faxes = Faxes;
Telnyx.FqdnConnections = FqdnConnections;
Telnyx.Fqdns = Fqdns;
Telnyx.GlobalIPAllowedPorts = GlobalIPAllowedPorts;
Telnyx.GlobalIPAssignmentHealth = GlobalIPAssignmentHealth;
Telnyx.GlobalIPAssignments = GlobalIPAssignments;
Telnyx.GlobalIPAssignmentsUsage = GlobalIPAssignmentsUsage;
Telnyx.GlobalIPHealthCheckTypes = GlobalIPHealthCheckTypes;
Telnyx.GlobalIPHealthChecks = GlobalIPHealthChecks;
Telnyx.GlobalIPLatency = GlobalIPLatency;
Telnyx.GlobalIPProtocols = GlobalIPProtocols;
Telnyx.GlobalIPUsage = GlobalIPUsage;
Telnyx.GlobalIPs = GlobalIPs;
Telnyx.InboundChannels = InboundChannels;
Telnyx.IntegrationSecrets = IntegrationSecrets;
Telnyx.InventoryCoverage = InventoryCoverage;
Telnyx.Invoices = Invoices;
Telnyx.IPConnections = IPConnections;
Telnyx.IPs = IPs;
Telnyx.LedgerBillingGroupReports = LedgerBillingGroupReports;
Telnyx.List = List;
Telnyx.ManagedAccounts = ManagedAccounts;
Telnyx.Media = Media;
Telnyx.Messages = Messages;
Telnyx.Messaging = Messaging;
Telnyx.MessagingHostedNumberOrders = MessagingHostedNumberOrders;
Telnyx.MessagingHostedNumbers = MessagingHostedNumbers;
Telnyx.MessagingNumbersBulkUpdates = MessagingNumbersBulkUpdates;
Telnyx.MessagingOptouts = MessagingOptouts;
Telnyx.MessagingProfiles = MessagingProfiles;
Telnyx.MessagingTollfree = MessagingTollfree;
Telnyx.MessagingURLDomains = MessagingURLDomains;
Telnyx.MobileNetworkOperators = MobileNetworkOperators;
Telnyx.MobilePushCredentials = MobilePushCredentials;
Telnyx.NetworkCoverage = NetworkCoverage;
Telnyx.Networks = Networks;
Telnyx.NotificationChannels = NotificationChannels;
Telnyx.NotificationEventConditions = NotificationEventConditions;
Telnyx.NotificationEvents = NotificationEvents;
Telnyx.NotificationProfiles = NotificationProfiles;
Telnyx.NotificationSettings = NotificationSettings;
Telnyx.NumberBlockOrders = NumberBlockOrders;
Telnyx.NumberLookup = NumberLookup;
Telnyx.NumberOrderPhoneNumbers = NumberOrderPhoneNumbers;
Telnyx.NumberOrders = NumberOrders;
Telnyx.NumberReservations = NumberReservations;
Telnyx.NumbersFeatures = NumbersFeatures;
Telnyx.OperatorConnect = OperatorConnect;
Telnyx.OtaUpdates = OtaUpdates;
Telnyx.OutboundVoiceProfiles = OutboundVoiceProfiles;
Telnyx.Payment = Payment;
Telnyx.PhoneNumberBlocks = PhoneNumberBlocks;
Telnyx.PhoneNumbers = PhoneNumbers;
Telnyx.PhoneNumbersRegulatoryRequirements = PhoneNumbersRegulatoryRequirements;
Telnyx.PortabilityChecks = PortabilityChecks;
Telnyx.Porting = Porting;
Telnyx.PortingOrders = PortingOrders;
Telnyx.PortingPhoneNumbers = PortingPhoneNumbers;
Telnyx.Portouts = Portouts;
Telnyx.PrivateWirelessGateways = PrivateWirelessGateways;
Telnyx.PublicInternetGateways = PublicInternetGateways;
Telnyx.Queues = Queues;
Telnyx.RcsAgents = RcsAgents;
Telnyx.RecordingTranscriptions = RecordingTranscriptions;
Telnyx.Recordings = Recordings;
Telnyx.Regions = Regions;
Telnyx.RegulatoryRequirements = RegulatoryRequirements;
Telnyx.Reports = Reports;
Telnyx.RequirementGroups = RequirementGroups;
Telnyx.RequirementTypes = RequirementTypes;
Telnyx.Requirements = Requirements;
Telnyx.RoomCompositions = RoomCompositions;
Telnyx.RoomParticipants = RoomParticipants;
Telnyx.RoomRecordings = RoomRecordings;
Telnyx.Rooms = Rooms;
Telnyx.Seti = Seti;
Telnyx.ShortCodes = ShortCodes;
Telnyx.SimCardDataUsageNotifications = SimCardDataUsageNotifications;
Telnyx.SimCardGroups = SimCardGroups;
Telnyx.SimCardOrderPreview = SimCardOrderPreview;
Telnyx.SimCardOrders = SimCardOrders;
Telnyx.SimCards = SimCards;
Telnyx.SiprecConnectors = SiprecConnectors;
Telnyx.Storage = Storage;
Telnyx.SubNumberOrders = SubNumberOrders;
Telnyx.SubNumberOrdersReport = SubNumberOrdersReport;
Telnyx.TelephonyCredentials = TelephonyCredentials;
Telnyx.Texml = Texml;
Telnyx.TexmlApplications = TexmlApplications;
Telnyx.TextToSpeech = TextToSpeech;
Telnyx.UsageReports = UsageReports;
Telnyx.UserAddresses = UserAddresses;
Telnyx.UserTags = UserTags;
Telnyx.Verifications = Verifications;
Telnyx.VerifiedNumbers = VerifiedNumbers;
Telnyx.VerifyProfiles = VerifyProfiles;
Telnyx.VirtualCrossConnects = VirtualCrossConnects;
Telnyx.VirtualCrossConnectsCoverage = VirtualCrossConnectsCoverage;
Telnyx.WebhookDeliveries = WebhookDeliveries;
Telnyx.WireguardInterfaces = WireguardInterfaces;
Telnyx.WireguardPeers = WireguardPeers;
Telnyx.Wireless = Wireless;
Telnyx.WirelessBlocklistValues = WirelessBlocklistValues;
Telnyx.WirelessBlocklists = WirelessBlocklists;
Telnyx.WellKnown = WellKnown;
Telnyx.InexplicitNumberOrders = InexplicitNumberOrders;
Telnyx.MobilePhoneNumbers = MobilePhoneNumbers;
Telnyx.MobileVoiceConnections = MobileVoiceConnections;
Telnyx.Messaging10dlc = Messaging10dlc;
Telnyx.SpeechToText = SpeechToText;
Telnyx.Organizations = Organizations;

export declare namespace Telnyx {
  export type RequestOptions = Opts.RequestOptions;

  export import DefaultFlatPagination = Pagination.DefaultFlatPagination;
  export {
    type DefaultFlatPaginationParams as DefaultFlatPaginationParams,
    type DefaultFlatPaginationResponse as DefaultFlatPaginationResponse,
  };

  export import DefaultFlatPaginationTopLevelArray = Pagination.DefaultFlatPaginationTopLevelArray;
  export {
    type DefaultFlatPaginationTopLevelArrayParams as DefaultFlatPaginationTopLevelArrayParams,
    type DefaultFlatPaginationTopLevelArrayResponse as DefaultFlatPaginationTopLevelArrayResponse,
  };

  export import DefaultPaginationForLogMessages = Pagination.DefaultPaginationForLogMessages;
  export {
    type DefaultPaginationForLogMessagesParams as DefaultPaginationForLogMessagesParams,
    type DefaultPaginationForLogMessagesResponse as DefaultPaginationForLogMessagesResponse,
  };

  export import DefaultPaginationForMessagingTollfree = Pagination.DefaultPaginationForMessagingTollfree;
  export {
    type DefaultPaginationForMessagingTollfreeParams as DefaultPaginationForMessagingTollfreeParams,
    type DefaultPaginationForMessagingTollfreeResponse as DefaultPaginationForMessagingTollfreeResponse,
  };

  export import DefaultPaginationForQueues = Pagination.DefaultPaginationForQueues;
  export {
    type DefaultPaginationForQueuesParams as DefaultPaginationForQueuesParams,
    type DefaultPaginationForQueuesResponse as DefaultPaginationForQueuesResponse,
  };

  export import DefaultFlatPaginationForInexplicitNumberOrders = Pagination.DefaultFlatPaginationForInexplicitNumberOrders;
  export {
    type DefaultFlatPaginationForInexplicitNumberOrdersParams as DefaultFlatPaginationForInexplicitNumberOrdersParams,
    type DefaultFlatPaginationForInexplicitNumberOrdersResponse as DefaultFlatPaginationForInexplicitNumberOrdersResponse,
  };

  export import PerPagePagination = Pagination.PerPagePagination;
  export {
    type PerPagePaginationParams as PerPagePaginationParams,
    type PerPagePaginationResponse as PerPagePaginationResponse,
  };

  export import PerPagePaginationV2 = Pagination.PerPagePaginationV2;
  export {
    type PerPagePaginationV2Params as PerPagePaginationV2Params,
    type PerPagePaginationV2Response as PerPagePaginationV2Response,
  };

  export { Legacy as Legacy };

  export {
    OAuth as OAuth,
    type OAuthRetrieveResponse as OAuthRetrieveResponse,
    type OAuthGrantsResponse as OAuthGrantsResponse,
    type OAuthIntrospectResponse as OAuthIntrospectResponse,
    type OAuthRegisterResponse as OAuthRegisterResponse,
    type OAuthRetrieveJwksResponse as OAuthRetrieveJwksResponse,
    type OAuthTokenResponse as OAuthTokenResponse,
    type OAuthGrantsParams as OAuthGrantsParams,
    type OAuthIntrospectParams as OAuthIntrospectParams,
    type OAuthRegisterParams as OAuthRegisterParams,
    type OAuthRetrieveAuthorizeParams as OAuthRetrieveAuthorizeParams,
    type OAuthTokenParams as OAuthTokenParams,
  };

  export {
    OAuthClients as OAuthClients,
    type OAuthClient as OAuthClient,
    type PaginationMetaOAuth as PaginationMetaOAuth,
    type OAuthClientCreateResponse as OAuthClientCreateResponse,
    type OAuthClientRetrieveResponse as OAuthClientRetrieveResponse,
    type OAuthClientUpdateResponse as OAuthClientUpdateResponse,
    type OAuthClientsDefaultFlatPagination as OAuthClientsDefaultFlatPagination,
    type OAuthClientCreateParams as OAuthClientCreateParams,
    type OAuthClientUpdateParams as OAuthClientUpdateParams,
    type OAuthClientListParams as OAuthClientListParams,
  };

  export {
    OAuthGrants as OAuthGrants,
    type OAuthGrant as OAuthGrant,
    type OAuthGrantRetrieveResponse as OAuthGrantRetrieveResponse,
    type OAuthGrantDeleteResponse as OAuthGrantDeleteResponse,
    type OAuthGrantsDefaultFlatPagination as OAuthGrantsDefaultFlatPagination,
    type OAuthGrantListParams as OAuthGrantListParams,
  };

  export {
    Webhooks as Webhooks,
    type CallStreamingFailed as CallStreamingFailed,
    type CallStreamingStarted as CallStreamingStarted,
    type CallStreamingStopped as CallStreamingStopped,
    type CallAIGatherEndedWebhookEvent as CallAIGatherEndedWebhookEvent,
    type CallAIGatherMessageHistoryUpdatedWebhookEvent as CallAIGatherMessageHistoryUpdatedWebhookEvent,
    type CallAIGatherPartialResultsWebhookEvent as CallAIGatherPartialResultsWebhookEvent,
    type CallAnsweredWebhookEvent as CallAnsweredWebhookEvent,
    type CallBridgedWebhookEvent as CallBridgedWebhookEvent,
    type CallConversationEndedWebhookEvent as CallConversationEndedWebhookEvent,
    type CallConversationInsightsGeneratedWebhookEvent as CallConversationInsightsGeneratedWebhookEvent,
    type CallDtmfReceivedWebhookEvent as CallDtmfReceivedWebhookEvent,
    type CallEnqueuedWebhookEvent as CallEnqueuedWebhookEvent,
    type CallForkStartedWebhookEvent as CallForkStartedWebhookEvent,
    type CallForkStoppedWebhookEvent as CallForkStoppedWebhookEvent,
    type CallGatherEndedWebhookEvent as CallGatherEndedWebhookEvent,
    type CallHangupWebhookEvent as CallHangupWebhookEvent,
    type CallInitiatedWebhookEvent as CallInitiatedWebhookEvent,
    type CallLeftQueueWebhookEvent as CallLeftQueueWebhookEvent,
    type CallMachineDetectionEndedWebhookEvent as CallMachineDetectionEndedWebhookEvent,
    type CallMachineGreetingEndedWebhookEvent as CallMachineGreetingEndedWebhookEvent,
    type CallMachinePremiumDetectionEndedWebhookEvent as CallMachinePremiumDetectionEndedWebhookEvent,
    type CallMachinePremiumGreetingEndedWebhookEvent as CallMachinePremiumGreetingEndedWebhookEvent,
    type CallPlaybackEndedWebhookEvent as CallPlaybackEndedWebhookEvent,
    type CallPlaybackStartedWebhookEvent as CallPlaybackStartedWebhookEvent,
    type CallRecordingErrorWebhookEvent as CallRecordingErrorWebhookEvent,
    type CallRecordingSavedWebhookEvent as CallRecordingSavedWebhookEvent,
    type CallRecordingTranscriptionSavedWebhookEvent as CallRecordingTranscriptionSavedWebhookEvent,
    type CallReferCompletedWebhookEvent as CallReferCompletedWebhookEvent,
    type CallReferFailedWebhookEvent as CallReferFailedWebhookEvent,
    type CallReferStartedWebhookEvent as CallReferStartedWebhookEvent,
    type CallSiprecFailedWebhookEvent as CallSiprecFailedWebhookEvent,
    type CallSiprecStartedWebhookEvent as CallSiprecStartedWebhookEvent,
    type CallSiprecStoppedWebhookEvent as CallSiprecStoppedWebhookEvent,
    type CallSpeakEndedWebhookEvent as CallSpeakEndedWebhookEvent,
    type CallSpeakStartedWebhookEvent as CallSpeakStartedWebhookEvent,
    type CallStreamingFailedWebhookEvent as CallStreamingFailedWebhookEvent,
    type CallStreamingStartedWebhookEvent as CallStreamingStartedWebhookEvent,
    type CallStreamingStoppedWebhookEvent as CallStreamingStoppedWebhookEvent,
    type CampaignStatusUpdateWebhookEvent as CampaignStatusUpdateWebhookEvent,
    type ConferenceCreatedWebhookEvent as ConferenceCreatedWebhookEvent,
    type ConferenceEndedWebhookEvent as ConferenceEndedWebhookEvent,
    type ConferenceFloorChangedWebhookEvent as ConferenceFloorChangedWebhookEvent,
    type ConferenceParticipantJoinedWebhookEvent as ConferenceParticipantJoinedWebhookEvent,
    type ConferenceParticipantLeftWebhookEvent as ConferenceParticipantLeftWebhookEvent,
    type ConferenceParticipantPlaybackEndedWebhookEvent as ConferenceParticipantPlaybackEndedWebhookEvent,
    type ConferenceParticipantPlaybackStartedWebhookEvent as ConferenceParticipantPlaybackStartedWebhookEvent,
    type ConferenceParticipantSpeakEndedWebhookEvent as ConferenceParticipantSpeakEndedWebhookEvent,
    type ConferenceParticipantSpeakStartedWebhookEvent as ConferenceParticipantSpeakStartedWebhookEvent,
    type ConferencePlaybackEndedWebhookEvent as ConferencePlaybackEndedWebhookEvent,
    type ConferencePlaybackStartedWebhookEvent as ConferencePlaybackStartedWebhookEvent,
    type ConferenceRecordingSavedWebhookEvent as ConferenceRecordingSavedWebhookEvent,
    type ConferenceSpeakEndedWebhookEvent as ConferenceSpeakEndedWebhookEvent,
    type ConferenceSpeakStartedWebhookEvent as ConferenceSpeakStartedWebhookEvent,
    type DeliveryUpdateWebhookEvent as DeliveryUpdateWebhookEvent,
    type FaxDeliveredWebhookEvent as FaxDeliveredWebhookEvent,
    type FaxFailedWebhookEvent as FaxFailedWebhookEvent,
    type FaxMediaProcessedWebhookEvent as FaxMediaProcessedWebhookEvent,
    type FaxQueuedWebhookEvent as FaxQueuedWebhookEvent,
    type FaxSendingStartedWebhookEvent as FaxSendingStartedWebhookEvent,
    type InboundMessageWebhookEvent as InboundMessageWebhookEvent,
    type NumberOrderStatusUpdateWebhookEvent as NumberOrderStatusUpdateWebhookEvent,
    type ReplacedLinkClickWebhookEvent as ReplacedLinkClickWebhookEvent,
    type TranscriptionWebhookEvent as TranscriptionWebhookEvent,
    type UnsafeUnwrapWebhookEvent as UnsafeUnwrapWebhookEvent,
    type UnwrapWebhookEvent as UnwrapWebhookEvent,
  };

  export {
    AccessIPAddress as AccessIPAddress,
    type AccessIPAddressResponse as AccessIPAddressResponse,
    type CloudflareSyncStatus as CloudflareSyncStatus,
    type PaginationMetaCloudflareIPListSync as PaginationMetaCloudflareIPListSync,
    type AccessIPAddressResponsesDefaultFlatPagination as AccessIPAddressResponsesDefaultFlatPagination,
    type AccessIPAddressCreateParams as AccessIPAddressCreateParams,
    type AccessIPAddressListParams as AccessIPAddressListParams,
  };

  export {
    AccessIPRanges as AccessIPRanges,
    type AccessIPRange as AccessIPRange,
    type AccessIPRangesDefaultFlatPagination as AccessIPRangesDefaultFlatPagination,
    type AccessIPRangeCreateParams as AccessIPRangeCreateParams,
    type AccessIPRangeListParams as AccessIPRangeListParams,
  };

  export { Actions as Actions };

  export {
    Addresses as Addresses,
    type Address as Address,
    type AddressCreateResponse as AddressCreateResponse,
    type AddressRetrieveResponse as AddressRetrieveResponse,
    type AddressDeleteResponse as AddressDeleteResponse,
    type AddressesDefaultFlatPagination as AddressesDefaultFlatPagination,
    type AddressCreateParams as AddressCreateParams,
    type AddressListParams as AddressListParams,
  };

  export {
    AdvancedOrders as AdvancedOrders,
    type AdvancedOrder as AdvancedOrder,
    type AdvancedOrderCreateResponse as AdvancedOrderCreateResponse,
    type AdvancedOrderRetrieveResponse as AdvancedOrderRetrieveResponse,
    type AdvancedOrderListResponse as AdvancedOrderListResponse,
    type AdvancedOrderUpdateRequirementGroupResponse as AdvancedOrderUpdateRequirementGroupResponse,
    type AdvancedOrderCreateParams as AdvancedOrderCreateParams,
    type AdvancedOrderUpdateRequirementGroupParams as AdvancedOrderUpdateRequirementGroupParams,
  };

  export {
    AI as AI,
    type AIRetrieveModelsResponse as AIRetrieveModelsResponse,
    type AISummarizeResponse as AISummarizeResponse,
    type AISummarizeParams as AISummarizeParams,
  };

  export {
    AuditEvents as AuditEvents,
    type AuditEventListResponse as AuditEventListResponse,
    type AuditEventListResponsesDefaultFlatPagination as AuditEventListResponsesDefaultFlatPagination,
    type AuditEventListParams as AuditEventListParams,
  };

  export {
    AuthenticationProviders as AuthenticationProviders,
    type AuthenticationProvider as AuthenticationProvider,
    type PaginationMeta as PaginationMeta,
    type Settings as Settings,
    type AuthenticationProviderCreateResponse as AuthenticationProviderCreateResponse,
    type AuthenticationProviderRetrieveResponse as AuthenticationProviderRetrieveResponse,
    type AuthenticationProviderUpdateResponse as AuthenticationProviderUpdateResponse,
    type AuthenticationProviderDeleteResponse as AuthenticationProviderDeleteResponse,
    type AuthenticationProvidersDefaultFlatPagination as AuthenticationProvidersDefaultFlatPagination,
    type AuthenticationProviderCreateParams as AuthenticationProviderCreateParams,
    type AuthenticationProviderUpdateParams as AuthenticationProviderUpdateParams,
    type AuthenticationProviderListParams as AuthenticationProviderListParams,
  };

  export {
    AvailablePhoneNumberBlocks as AvailablePhoneNumberBlocks,
    type AvailablePhoneNumberBlockListResponse as AvailablePhoneNumberBlockListResponse,
    type AvailablePhoneNumberBlockListParams as AvailablePhoneNumberBlockListParams,
  };

  export {
    AvailablePhoneNumbers as AvailablePhoneNumbers,
    type AvailablePhoneNumberListResponse as AvailablePhoneNumberListResponse,
    type AvailablePhoneNumberListParams as AvailablePhoneNumberListParams,
  };

  export { Balance as Balance, type BalanceRetrieveResponse as BalanceRetrieveResponse };

  export {
    BillingGroups as BillingGroups,
    type BillingGroup as BillingGroup,
    type BillingGroupCreateResponse as BillingGroupCreateResponse,
    type BillingGroupRetrieveResponse as BillingGroupRetrieveResponse,
    type BillingGroupUpdateResponse as BillingGroupUpdateResponse,
    type BillingGroupDeleteResponse as BillingGroupDeleteResponse,
    type BillingGroupsDefaultFlatPagination as BillingGroupsDefaultFlatPagination,
    type BillingGroupCreateParams as BillingGroupCreateParams,
    type BillingGroupUpdateParams as BillingGroupUpdateParams,
    type BillingGroupListParams as BillingGroupListParams,
  };

  export {
    BulkSimCardActions as BulkSimCardActions,
    type BulkSimCardActionRetrieveResponse as BulkSimCardActionRetrieveResponse,
    type BulkSimCardActionListResponse as BulkSimCardActionListResponse,
    type BulkSimCardActionListResponsesDefaultFlatPagination as BulkSimCardActionListResponsesDefaultFlatPagination,
    type BulkSimCardActionListParams as BulkSimCardActionListParams,
  };

  export { BundlePricing as BundlePricing };

  export {
    CallControlApplications as CallControlApplications,
    type CallControlApplication as CallControlApplication,
    type CallControlApplicationInbound as CallControlApplicationInbound,
    type CallControlApplicationOutbound as CallControlApplicationOutbound,
    type CallControlApplicationCreateResponse as CallControlApplicationCreateResponse,
    type CallControlApplicationRetrieveResponse as CallControlApplicationRetrieveResponse,
    type CallControlApplicationUpdateResponse as CallControlApplicationUpdateResponse,
    type CallControlApplicationDeleteResponse as CallControlApplicationDeleteResponse,
    type CallControlApplicationsDefaultFlatPagination as CallControlApplicationsDefaultFlatPagination,
    type CallControlApplicationCreateParams as CallControlApplicationCreateParams,
    type CallControlApplicationUpdateParams as CallControlApplicationUpdateParams,
    type CallControlApplicationListParams as CallControlApplicationListParams,
  };

  export {
    CallEvents as CallEvents,
    type CallEventListResponse as CallEventListResponse,
    type CallEventListResponsesDefaultFlatPagination as CallEventListResponsesDefaultFlatPagination,
    type CallEventListParams as CallEventListParams,
  };

  export {
    Calls as Calls,
    type CustomSipHeader as CustomSipHeader,
    type DialogflowConfig as DialogflowConfig,
    type SipHeader as SipHeader,
    type SoundModifications as SoundModifications,
    type StreamBidirectionalCodec as StreamBidirectionalCodec,
    type StreamBidirectionalMode as StreamBidirectionalMode,
    type StreamBidirectionalSamplingRate as StreamBidirectionalSamplingRate,
    type StreamBidirectionalTargetLegs as StreamBidirectionalTargetLegs,
    type StreamCodec as StreamCodec,
    type CallDialResponse as CallDialResponse,
    type CallRetrieveStatusResponse as CallRetrieveStatusResponse,
    type CallDialParams as CallDialParams,
  };

  export {
    ChannelZones as ChannelZones,
    type ChannelZoneUpdateResponse as ChannelZoneUpdateResponse,
    type ChannelZoneListResponse as ChannelZoneListResponse,
    type ChannelZoneListResponsesDefaultFlatPagination as ChannelZoneListResponsesDefaultFlatPagination,
    type ChannelZoneUpdateParams as ChannelZoneUpdateParams,
    type ChannelZoneListParams as ChannelZoneListParams,
  };

  export {
    ChargesBreakdown as ChargesBreakdown,
    type ChargesBreakdownRetrieveResponse as ChargesBreakdownRetrieveResponse,
    type ChargesBreakdownRetrieveParams as ChargesBreakdownRetrieveParams,
  };

  export {
    ChargesSummary as ChargesSummary,
    type MonthDetail as MonthDetail,
    type ChargesSummaryRetrieveResponse as ChargesSummaryRetrieveResponse,
    type ChargesSummaryRetrieveParams as ChargesSummaryRetrieveParams,
  };

  export {
    Comments as Comments,
    type CommentCreateResponse as CommentCreateResponse,
    type CommentRetrieveResponse as CommentRetrieveResponse,
    type CommentListResponse as CommentListResponse,
    type CommentMarkAsReadResponse as CommentMarkAsReadResponse,
    type CommentCreateParams as CommentCreateParams,
    type CommentListParams as CommentListParams,
  };

  export {
    Conferences as Conferences,
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
    Connections as Connections,
    type ConnectionRetrieveResponse as ConnectionRetrieveResponse,
    type ConnectionListResponse as ConnectionListResponse,
    type ConnectionListActiveCallsResponse as ConnectionListActiveCallsResponse,
    type ConnectionListResponsesDefaultFlatPagination as ConnectionListResponsesDefaultFlatPagination,
    type ConnectionListActiveCallsResponsesDefaultFlatPagination as ConnectionListActiveCallsResponsesDefaultFlatPagination,
    type ConnectionListParams as ConnectionListParams,
    type ConnectionListActiveCallsParams as ConnectionListActiveCallsParams,
  };

  export {
    CountryCoverage as CountryCoverage,
    type CountryCoverageRetrieveResponse as CountryCoverageRetrieveResponse,
    type CountryCoverageRetrieveCountryResponse as CountryCoverageRetrieveCountryResponse,
  };

  export {
    CredentialConnections as CredentialConnections,
    type AnchorsiteOverride as AnchorsiteOverride,
    type ConnectionRtcpSettings as ConnectionRtcpSettings,
    type CredentialConnection as CredentialConnection,
    type CredentialInbound as CredentialInbound,
    type CredentialOutbound as CredentialOutbound,
    type DtmfType as DtmfType,
    type EncryptedMedia as EncryptedMedia,
    type CredentialConnectionCreateResponse as CredentialConnectionCreateResponse,
    type CredentialConnectionRetrieveResponse as CredentialConnectionRetrieveResponse,
    type CredentialConnectionUpdateResponse as CredentialConnectionUpdateResponse,
    type CredentialConnectionDeleteResponse as CredentialConnectionDeleteResponse,
    type CredentialConnectionsDefaultFlatPagination as CredentialConnectionsDefaultFlatPagination,
    type CredentialConnectionCreateParams as CredentialConnectionCreateParams,
    type CredentialConnectionUpdateParams as CredentialConnectionUpdateParams,
    type CredentialConnectionListParams as CredentialConnectionListParams,
  };

  export {
    CustomStorageCredentials as CustomStorageCredentials,
    type AzureConfigurationData as AzureConfigurationData,
    type CustomStorageConfiguration as CustomStorageConfiguration,
    type GcsConfigurationData as GcsConfigurationData,
    type S3ConfigurationData as S3ConfigurationData,
    type CustomStorageCredentialCreateResponse as CustomStorageCredentialCreateResponse,
    type CustomStorageCredentialRetrieveResponse as CustomStorageCredentialRetrieveResponse,
    type CustomStorageCredentialUpdateResponse as CustomStorageCredentialUpdateResponse,
    type CustomStorageCredentialCreateParams as CustomStorageCredentialCreateParams,
    type CustomStorageCredentialUpdateParams as CustomStorageCredentialUpdateParams,
  };

  export {
    CustomerServiceRecords as CustomerServiceRecords,
    type CustomerServiceRecord as CustomerServiceRecord,
    type CustomerServiceRecordCreateResponse as CustomerServiceRecordCreateResponse,
    type CustomerServiceRecordRetrieveResponse as CustomerServiceRecordRetrieveResponse,
    type CustomerServiceRecordVerifyPhoneNumberCoverageResponse as CustomerServiceRecordVerifyPhoneNumberCoverageResponse,
    type CustomerServiceRecordsDefaultFlatPagination as CustomerServiceRecordsDefaultFlatPagination,
    type CustomerServiceRecordCreateParams as CustomerServiceRecordCreateParams,
    type CustomerServiceRecordListParams as CustomerServiceRecordListParams,
    type CustomerServiceRecordVerifyPhoneNumberCoverageParams as CustomerServiceRecordVerifyPhoneNumberCoverageParams,
  };

  export {
    DetailRecords as DetailRecords,
    type DetailRecordListResponse as DetailRecordListResponse,
    type DetailRecordListResponsesDefaultFlatPagination as DetailRecordListResponsesDefaultFlatPagination,
    type DetailRecordListParams as DetailRecordListParams,
  };

  export {
    DialogflowConnections as DialogflowConnections,
    type DialogflowConnectionCreateResponse as DialogflowConnectionCreateResponse,
    type DialogflowConnectionRetrieveResponse as DialogflowConnectionRetrieveResponse,
    type DialogflowConnectionUpdateResponse as DialogflowConnectionUpdateResponse,
    type DialogflowConnectionCreateParams as DialogflowConnectionCreateParams,
    type DialogflowConnectionUpdateParams as DialogflowConnectionUpdateParams,
  };

  export {
    DocumentLinks as DocumentLinks,
    type DocumentLinkListResponse as DocumentLinkListResponse,
    type DocumentLinkListResponsesDefaultFlatPagination as DocumentLinkListResponsesDefaultFlatPagination,
    type DocumentLinkListParams as DocumentLinkListParams,
  };

  export {
    Documents as Documents,
    type DocServiceDocument as DocServiceDocument,
    type DocumentRetrieveResponse as DocumentRetrieveResponse,
    type DocumentUpdateResponse as DocumentUpdateResponse,
    type DocumentDeleteResponse as DocumentDeleteResponse,
    type DocumentGenerateDownloadLinkResponse as DocumentGenerateDownloadLinkResponse,
    type DocumentUploadResponse as DocumentUploadResponse,
    type DocumentUploadJsonResponse as DocumentUploadJsonResponse,
    type DocServiceDocumentsDefaultFlatPagination as DocServiceDocumentsDefaultFlatPagination,
    type DocumentUpdateParams as DocumentUpdateParams,
    type DocumentListParams as DocumentListParams,
    type DocumentUploadParams as DocumentUploadParams,
    type DocumentUploadJsonParams as DocumentUploadJsonParams,
  };

  export {
    DynamicEmergencyAddresses as DynamicEmergencyAddresses,
    type DynamicEmergencyAddress as DynamicEmergencyAddress,
    type DynamicEmergencyAddressCreateResponse as DynamicEmergencyAddressCreateResponse,
    type DynamicEmergencyAddressRetrieveResponse as DynamicEmergencyAddressRetrieveResponse,
    type DynamicEmergencyAddressDeleteResponse as DynamicEmergencyAddressDeleteResponse,
    type DynamicEmergencyAddressesDefaultFlatPagination as DynamicEmergencyAddressesDefaultFlatPagination,
    type DynamicEmergencyAddressCreateParams as DynamicEmergencyAddressCreateParams,
    type DynamicEmergencyAddressListParams as DynamicEmergencyAddressListParams,
  };

  export {
    DynamicEmergencyEndpoints as DynamicEmergencyEndpoints,
    type DynamicEmergencyEndpoint as DynamicEmergencyEndpoint,
    type DynamicEmergencyEndpointCreateResponse as DynamicEmergencyEndpointCreateResponse,
    type DynamicEmergencyEndpointRetrieveResponse as DynamicEmergencyEndpointRetrieveResponse,
    type DynamicEmergencyEndpointDeleteResponse as DynamicEmergencyEndpointDeleteResponse,
    type DynamicEmergencyEndpointsDefaultFlatPagination as DynamicEmergencyEndpointsDefaultFlatPagination,
    type DynamicEmergencyEndpointCreateParams as DynamicEmergencyEndpointCreateParams,
    type DynamicEmergencyEndpointListParams as DynamicEmergencyEndpointListParams,
  };

  export {
    ExternalConnections as ExternalConnections,
    type ExternalConnection as ExternalConnection,
    type ExternalVoiceIntegrationsPaginationMeta as ExternalVoiceIntegrationsPaginationMeta,
    type ExternalConnectionCreateResponse as ExternalConnectionCreateResponse,
    type ExternalConnectionRetrieveResponse as ExternalConnectionRetrieveResponse,
    type ExternalConnectionUpdateResponse as ExternalConnectionUpdateResponse,
    type ExternalConnectionDeleteResponse as ExternalConnectionDeleteResponse,
    type ExternalConnectionUpdateLocationResponse as ExternalConnectionUpdateLocationResponse,
    type ExternalConnectionsDefaultFlatPagination as ExternalConnectionsDefaultFlatPagination,
    type ExternalConnectionCreateParams as ExternalConnectionCreateParams,
    type ExternalConnectionUpdateParams as ExternalConnectionUpdateParams,
    type ExternalConnectionListParams as ExternalConnectionListParams,
    type ExternalConnectionUpdateLocationParams as ExternalConnectionUpdateLocationParams,
  };

  export {
    FaxApplications as FaxApplications,
    type FaxApplication as FaxApplication,
    type FaxApplicationCreateResponse as FaxApplicationCreateResponse,
    type FaxApplicationRetrieveResponse as FaxApplicationRetrieveResponse,
    type FaxApplicationUpdateResponse as FaxApplicationUpdateResponse,
    type FaxApplicationDeleteResponse as FaxApplicationDeleteResponse,
    type FaxApplicationsDefaultFlatPagination as FaxApplicationsDefaultFlatPagination,
    type FaxApplicationCreateParams as FaxApplicationCreateParams,
    type FaxApplicationUpdateParams as FaxApplicationUpdateParams,
    type FaxApplicationListParams as FaxApplicationListParams,
  };

  export {
    Faxes as Faxes,
    type Fax as Fax,
    type FaxCreateResponse as FaxCreateResponse,
    type FaxRetrieveResponse as FaxRetrieveResponse,
    type FaxesDefaultFlatPagination as FaxesDefaultFlatPagination,
    type FaxCreateParams as FaxCreateParams,
    type FaxListParams as FaxListParams,
  };

  export {
    FqdnConnections as FqdnConnections,
    type FqdnConnection as FqdnConnection,
    type InboundFqdn as InboundFqdn,
    type OutboundFqdn as OutboundFqdn,
    type TransportProtocol as TransportProtocol,
    type WebhookAPIVersion as WebhookAPIVersion,
    type FqdnConnectionCreateResponse as FqdnConnectionCreateResponse,
    type FqdnConnectionRetrieveResponse as FqdnConnectionRetrieveResponse,
    type FqdnConnectionUpdateResponse as FqdnConnectionUpdateResponse,
    type FqdnConnectionDeleteResponse as FqdnConnectionDeleteResponse,
    type FqdnConnectionsDefaultFlatPagination as FqdnConnectionsDefaultFlatPagination,
    type FqdnConnectionCreateParams as FqdnConnectionCreateParams,
    type FqdnConnectionUpdateParams as FqdnConnectionUpdateParams,
    type FqdnConnectionListParams as FqdnConnectionListParams,
  };

  export {
    Fqdns as Fqdns,
    type Fqdn as Fqdn,
    type FqdnCreateResponse as FqdnCreateResponse,
    type FqdnRetrieveResponse as FqdnRetrieveResponse,
    type FqdnUpdateResponse as FqdnUpdateResponse,
    type FqdnDeleteResponse as FqdnDeleteResponse,
    type FqdnsDefaultFlatPagination as FqdnsDefaultFlatPagination,
    type FqdnCreateParams as FqdnCreateParams,
    type FqdnUpdateParams as FqdnUpdateParams,
    type FqdnListParams as FqdnListParams,
  };

  export {
    GlobalIPAllowedPorts as GlobalIPAllowedPorts,
    type GlobalIPAllowedPortListResponse as GlobalIPAllowedPortListResponse,
  };

  export {
    GlobalIPAssignmentHealth as GlobalIPAssignmentHealth,
    type GlobalIPAssignmentHealthRetrieveResponse as GlobalIPAssignmentHealthRetrieveResponse,
    type GlobalIPAssignmentHealthRetrieveParams as GlobalIPAssignmentHealthRetrieveParams,
  };

  export {
    GlobalIPAssignments as GlobalIPAssignments,
    type GlobalIPAssignment as GlobalIPAssignment,
    type Record as Record,
    type GlobalIPAssignmentCreateResponse as GlobalIPAssignmentCreateResponse,
    type GlobalIPAssignmentRetrieveResponse as GlobalIPAssignmentRetrieveResponse,
    type GlobalIPAssignmentUpdateResponse as GlobalIPAssignmentUpdateResponse,
    type GlobalIPAssignmentDeleteResponse as GlobalIPAssignmentDeleteResponse,
    type GlobalIPAssignmentsDefaultFlatPagination as GlobalIPAssignmentsDefaultFlatPagination,
    type GlobalIPAssignmentCreateParams as GlobalIPAssignmentCreateParams,
    type GlobalIPAssignmentUpdateParams as GlobalIPAssignmentUpdateParams,
    type GlobalIPAssignmentListParams as GlobalIPAssignmentListParams,
  };

  export {
    GlobalIPAssignmentsUsage as GlobalIPAssignmentsUsage,
    type GlobalIPAssignmentsUsageRetrieveResponse as GlobalIPAssignmentsUsageRetrieveResponse,
    type GlobalIPAssignmentsUsageRetrieveParams as GlobalIPAssignmentsUsageRetrieveParams,
  };

  export {
    GlobalIPHealthCheckTypes as GlobalIPHealthCheckTypes,
    type GlobalIPHealthCheckTypeListResponse as GlobalIPHealthCheckTypeListResponse,
  };

  export {
    GlobalIPHealthChecks as GlobalIPHealthChecks,
    type GlobalIPHealthCheckCreateResponse as GlobalIPHealthCheckCreateResponse,
    type GlobalIPHealthCheckRetrieveResponse as GlobalIPHealthCheckRetrieveResponse,
    type GlobalIPHealthCheckListResponse as GlobalIPHealthCheckListResponse,
    type GlobalIPHealthCheckDeleteResponse as GlobalIPHealthCheckDeleteResponse,
    type GlobalIPHealthCheckListResponsesDefaultFlatPagination as GlobalIPHealthCheckListResponsesDefaultFlatPagination,
    type GlobalIPHealthCheckCreateParams as GlobalIPHealthCheckCreateParams,
    type GlobalIPHealthCheckListParams as GlobalIPHealthCheckListParams,
  };

  export {
    GlobalIPLatency as GlobalIPLatency,
    type GlobalIPLatencyRetrieveResponse as GlobalIPLatencyRetrieveResponse,
    type GlobalIPLatencyRetrieveParams as GlobalIPLatencyRetrieveParams,
  };

  export {
    GlobalIPProtocols as GlobalIPProtocols,
    type GlobalIPProtocolListResponse as GlobalIPProtocolListResponse,
  };

  export {
    GlobalIPUsage as GlobalIPUsage,
    type GlobalIPUsageRetrieveResponse as GlobalIPUsageRetrieveResponse,
    type GlobalIPUsageRetrieveParams as GlobalIPUsageRetrieveParams,
  };

  export {
    GlobalIPs as GlobalIPs,
    type GlobalIPCreateResponse as GlobalIPCreateResponse,
    type GlobalIPRetrieveResponse as GlobalIPRetrieveResponse,
    type GlobalIPListResponse as GlobalIPListResponse,
    type GlobalIPDeleteResponse as GlobalIPDeleteResponse,
    type GlobalIPListResponsesDefaultFlatPagination as GlobalIPListResponsesDefaultFlatPagination,
    type GlobalIPCreateParams as GlobalIPCreateParams,
    type GlobalIPListParams as GlobalIPListParams,
  };

  export {
    InboundChannels as InboundChannels,
    type InboundChannelUpdateResponse as InboundChannelUpdateResponse,
    type InboundChannelListResponse as InboundChannelListResponse,
    type InboundChannelUpdateParams as InboundChannelUpdateParams,
  };

  export {
    IntegrationSecrets as IntegrationSecrets,
    type IntegrationSecret as IntegrationSecret,
    type IntegrationSecretCreateResponse as IntegrationSecretCreateResponse,
    type IntegrationSecretsDefaultFlatPagination as IntegrationSecretsDefaultFlatPagination,
    type IntegrationSecretCreateParams as IntegrationSecretCreateParams,
    type IntegrationSecretListParams as IntegrationSecretListParams,
  };

  export {
    InventoryCoverage as InventoryCoverage,
    type InventoryCoverageListResponse as InventoryCoverageListResponse,
    type InventoryCoverageListParams as InventoryCoverageListParams,
  };

  export {
    Invoices as Invoices,
    type InvoiceRetrieveResponse as InvoiceRetrieveResponse,
    type InvoiceListResponse as InvoiceListResponse,
    type InvoiceListResponsesDefaultFlatPagination as InvoiceListResponsesDefaultFlatPagination,
    type InvoiceRetrieveParams as InvoiceRetrieveParams,
    type InvoiceListParams as InvoiceListParams,
  };

  export {
    IPConnections as IPConnections,
    type InboundIP as InboundIP,
    type IPConnection as IPConnection,
    type OutboundIP as OutboundIP,
    type IPConnectionCreateResponse as IPConnectionCreateResponse,
    type IPConnectionRetrieveResponse as IPConnectionRetrieveResponse,
    type IPConnectionUpdateResponse as IPConnectionUpdateResponse,
    type IPConnectionDeleteResponse as IPConnectionDeleteResponse,
    type IPConnectionsDefaultFlatPagination as IPConnectionsDefaultFlatPagination,
    type IPConnectionCreateParams as IPConnectionCreateParams,
    type IPConnectionUpdateParams as IPConnectionUpdateParams,
    type IPConnectionListParams as IPConnectionListParams,
  };

  export {
    IPs as IPs,
    type IP as IP,
    type IPCreateResponse as IPCreateResponse,
    type IPRetrieveResponse as IPRetrieveResponse,
    type IPUpdateResponse as IPUpdateResponse,
    type IPDeleteResponse as IPDeleteResponse,
    type IPsDefaultFlatPagination as IPsDefaultFlatPagination,
    type IPCreateParams as IPCreateParams,
    type IPUpdateParams as IPUpdateParams,
    type IPListParams as IPListParams,
  };

  export {
    LedgerBillingGroupReports as LedgerBillingGroupReports,
    type LedgerBillingGroupReport as LedgerBillingGroupReport,
    type LedgerBillingGroupReportCreateResponse as LedgerBillingGroupReportCreateResponse,
    type LedgerBillingGroupReportRetrieveResponse as LedgerBillingGroupReportRetrieveResponse,
    type LedgerBillingGroupReportCreateParams as LedgerBillingGroupReportCreateParams,
  };

  export {
    List as List,
    type ListRetrieveAllResponse as ListRetrieveAllResponse,
    type ListRetrieveByZoneResponse as ListRetrieveByZoneResponse,
  };

  export {
    ManagedAccounts as ManagedAccounts,
    type ManagedAccount as ManagedAccount,
    type ManagedAccountBalance as ManagedAccountBalance,
    type ManagedAccountCreateResponse as ManagedAccountCreateResponse,
    type ManagedAccountRetrieveResponse as ManagedAccountRetrieveResponse,
    type ManagedAccountUpdateResponse as ManagedAccountUpdateResponse,
    type ManagedAccountListResponse as ManagedAccountListResponse,
    type ManagedAccountGetAllocatableGlobalOutboundChannelsResponse as ManagedAccountGetAllocatableGlobalOutboundChannelsResponse,
    type ManagedAccountUpdateGlobalChannelLimitResponse as ManagedAccountUpdateGlobalChannelLimitResponse,
    type ManagedAccountListResponsesDefaultFlatPagination as ManagedAccountListResponsesDefaultFlatPagination,
    type ManagedAccountCreateParams as ManagedAccountCreateParams,
    type ManagedAccountUpdateParams as ManagedAccountUpdateParams,
    type ManagedAccountListParams as ManagedAccountListParams,
    type ManagedAccountUpdateGlobalChannelLimitParams as ManagedAccountUpdateGlobalChannelLimitParams,
  };

  export {
    Media as Media,
    type MediaResource as MediaResource,
    type MediaRetrieveResponse as MediaRetrieveResponse,
    type MediaUpdateResponse as MediaUpdateResponse,
    type MediaListResponse as MediaListResponse,
    type MediaUploadResponse as MediaUploadResponse,
    type MediaUpdateParams as MediaUpdateParams,
    type MediaListParams as MediaListParams,
    type MediaUploadParams as MediaUploadParams,
  };

  export {
    Messages as Messages,
    type MessagingError as MessagingError,
    type OutboundMessagePayload as OutboundMessagePayload,
    type RcsAgentMessage as RcsAgentMessage,
    type RcsCardContent as RcsCardContent,
    type RcsContentInfo as RcsContentInfo,
    type RcsSuggestion as RcsSuggestion,
    type WhatsappMedia as WhatsappMedia,
    type MessageRetrieveResponse as MessageRetrieveResponse,
    type MessageCancelScheduledResponse as MessageCancelScheduledResponse,
    type MessageScheduleResponse as MessageScheduleResponse,
    type MessageSendResponse as MessageSendResponse,
    type MessageSendGroupMmsResponse as MessageSendGroupMmsResponse,
    type MessageSendLongCodeResponse as MessageSendLongCodeResponse,
    type MessageSendNumberPoolResponse as MessageSendNumberPoolResponse,
    type MessageSendShortCodeResponse as MessageSendShortCodeResponse,
    type MessageSendWhatsappResponse as MessageSendWhatsappResponse,
    type MessageScheduleParams as MessageScheduleParams,
    type MessageSendParams as MessageSendParams,
    type MessageSendGroupMmsParams as MessageSendGroupMmsParams,
    type MessageSendLongCodeParams as MessageSendLongCodeParams,
    type MessageSendNumberPoolParams as MessageSendNumberPoolParams,
    type MessageSendShortCodeParams as MessageSendShortCodeParams,
    type MessageSendWhatsappParams as MessageSendWhatsappParams,
  };

  export { Messaging as Messaging };

  export {
    MessagingHostedNumberOrders as MessagingHostedNumberOrders,
    type MessagingHostedNumberOrderCreateResponse as MessagingHostedNumberOrderCreateResponse,
    type MessagingHostedNumberOrderRetrieveResponse as MessagingHostedNumberOrderRetrieveResponse,
    type MessagingHostedNumberOrderDeleteResponse as MessagingHostedNumberOrderDeleteResponse,
    type MessagingHostedNumberOrderCheckEligibilityResponse as MessagingHostedNumberOrderCheckEligibilityResponse,
    type MessagingHostedNumberOrderCreateVerificationCodesResponse as MessagingHostedNumberOrderCreateVerificationCodesResponse,
    type MessagingHostedNumberOrderValidateCodesResponse as MessagingHostedNumberOrderValidateCodesResponse,
    type MessagingHostedNumberOrderCreateParams as MessagingHostedNumberOrderCreateParams,
    type MessagingHostedNumberOrderListParams as MessagingHostedNumberOrderListParams,
    type MessagingHostedNumberOrderCheckEligibilityParams as MessagingHostedNumberOrderCheckEligibilityParams,
    type MessagingHostedNumberOrderCreateVerificationCodesParams as MessagingHostedNumberOrderCreateVerificationCodesParams,
    type MessagingHostedNumberOrderValidateCodesParams as MessagingHostedNumberOrderValidateCodesParams,
  };

  export {
    MessagingHostedNumbers as MessagingHostedNumbers,
    type MessagingHostedNumberDeleteResponse as MessagingHostedNumberDeleteResponse,
  };

  export {
    MessagingNumbersBulkUpdates as MessagingNumbersBulkUpdates,
    type MessagingNumbersBulkUpdateCreateResponse as MessagingNumbersBulkUpdateCreateResponse,
    type MessagingNumbersBulkUpdateRetrieveResponse as MessagingNumbersBulkUpdateRetrieveResponse,
    type MessagingNumbersBulkUpdateCreateParams as MessagingNumbersBulkUpdateCreateParams,
  };

  export {
    MessagingOptouts as MessagingOptouts,
    type MessagingOptoutListResponse as MessagingOptoutListResponse,
    type MessagingOptoutListResponsesDefaultFlatPagination as MessagingOptoutListResponsesDefaultFlatPagination,
    type MessagingOptoutListParams as MessagingOptoutListParams,
  };

  export {
    MessagingProfiles as MessagingProfiles,
    type MessagingProfile as MessagingProfile,
    type NumberPoolSettings as NumberPoolSettings,
    type URLShortenerSettings as URLShortenerSettings,
    type MessagingProfileCreateResponse as MessagingProfileCreateResponse,
    type MessagingProfileRetrieveResponse as MessagingProfileRetrieveResponse,
    type MessagingProfileUpdateResponse as MessagingProfileUpdateResponse,
    type MessagingProfileDeleteResponse as MessagingProfileDeleteResponse,
    type MessagingProfilesDefaultFlatPagination as MessagingProfilesDefaultFlatPagination,
    type MessagingProfileCreateParams as MessagingProfileCreateParams,
    type MessagingProfileUpdateParams as MessagingProfileUpdateParams,
    type MessagingProfileListParams as MessagingProfileListParams,
    type MessagingProfileListPhoneNumbersParams as MessagingProfileListPhoneNumbersParams,
    type MessagingProfileListShortCodesParams as MessagingProfileListShortCodesParams,
  };

  export { MessagingTollfree as MessagingTollfree };

  export {
    MessagingURLDomains as MessagingURLDomains,
    type MessagingURLDomainListResponse as MessagingURLDomainListResponse,
    type MessagingURLDomainListResponsesDefaultFlatPagination as MessagingURLDomainListResponsesDefaultFlatPagination,
    type MessagingURLDomainListParams as MessagingURLDomainListParams,
  };

  export {
    MobileNetworkOperators as MobileNetworkOperators,
    type MobileNetworkOperatorListResponse as MobileNetworkOperatorListResponse,
    type MobileNetworkOperatorListResponsesDefaultFlatPagination as MobileNetworkOperatorListResponsesDefaultFlatPagination,
    type MobileNetworkOperatorListParams as MobileNetworkOperatorListParams,
  };

  export {
    MobilePushCredentials as MobilePushCredentials,
    type PushCredential as PushCredential,
    type PushCredentialResponse as PushCredentialResponse,
    type PushCredentialsDefaultFlatPagination as PushCredentialsDefaultFlatPagination,
    type MobilePushCredentialCreateParams as MobilePushCredentialCreateParams,
    type MobilePushCredentialListParams as MobilePushCredentialListParams,
  };

  export {
    NetworkCoverage as NetworkCoverage,
    type AvailableService as AvailableService,
    type NetworkCoverageListResponse as NetworkCoverageListResponse,
    type NetworkCoverageListResponsesDefaultFlatPagination as NetworkCoverageListResponsesDefaultFlatPagination,
    type NetworkCoverageListParams as NetworkCoverageListParams,
  };

  export {
    Networks as Networks,
    type InterfaceStatus as InterfaceStatus,
    type NetworkCreate as NetworkCreate,
    type NetworkCreateResponse as NetworkCreateResponse,
    type NetworkRetrieveResponse as NetworkRetrieveResponse,
    type NetworkUpdateResponse as NetworkUpdateResponse,
    type NetworkListResponse as NetworkListResponse,
    type NetworkDeleteResponse as NetworkDeleteResponse,
    type NetworkListInterfacesResponse as NetworkListInterfacesResponse,
    type NetworkListResponsesDefaultFlatPagination as NetworkListResponsesDefaultFlatPagination,
    type NetworkListInterfacesResponsesDefaultFlatPagination as NetworkListInterfacesResponsesDefaultFlatPagination,
    type NetworkCreateParams as NetworkCreateParams,
    type NetworkUpdateParams as NetworkUpdateParams,
    type NetworkListParams as NetworkListParams,
    type NetworkListInterfacesParams as NetworkListInterfacesParams,
  };

  export {
    NotificationChannels as NotificationChannels,
    type NotificationChannel as NotificationChannel,
    type NotificationChannelCreateResponse as NotificationChannelCreateResponse,
    type NotificationChannelRetrieveResponse as NotificationChannelRetrieveResponse,
    type NotificationChannelUpdateResponse as NotificationChannelUpdateResponse,
    type NotificationChannelDeleteResponse as NotificationChannelDeleteResponse,
    type NotificationChannelsDefaultFlatPagination as NotificationChannelsDefaultFlatPagination,
    type NotificationChannelCreateParams as NotificationChannelCreateParams,
    type NotificationChannelUpdateParams as NotificationChannelUpdateParams,
    type NotificationChannelListParams as NotificationChannelListParams,
  };

  export {
    NotificationEventConditions as NotificationEventConditions,
    type NotificationEventConditionListResponse as NotificationEventConditionListResponse,
    type NotificationEventConditionListResponsesDefaultFlatPagination as NotificationEventConditionListResponsesDefaultFlatPagination,
    type NotificationEventConditionListParams as NotificationEventConditionListParams,
  };

  export {
    NotificationEvents as NotificationEvents,
    type NotificationEventListResponse as NotificationEventListResponse,
    type NotificationEventListResponsesDefaultFlatPagination as NotificationEventListResponsesDefaultFlatPagination,
    type NotificationEventListParams as NotificationEventListParams,
  };

  export {
    NotificationProfiles as NotificationProfiles,
    type NotificationProfile as NotificationProfile,
    type NotificationProfileCreateResponse as NotificationProfileCreateResponse,
    type NotificationProfileRetrieveResponse as NotificationProfileRetrieveResponse,
    type NotificationProfileUpdateResponse as NotificationProfileUpdateResponse,
    type NotificationProfileDeleteResponse as NotificationProfileDeleteResponse,
    type NotificationProfilesDefaultFlatPagination as NotificationProfilesDefaultFlatPagination,
    type NotificationProfileCreateParams as NotificationProfileCreateParams,
    type NotificationProfileUpdateParams as NotificationProfileUpdateParams,
    type NotificationProfileListParams as NotificationProfileListParams,
  };

  export {
    NotificationSettings as NotificationSettings,
    type NotificationSetting as NotificationSetting,
    type NotificationSettingCreateResponse as NotificationSettingCreateResponse,
    type NotificationSettingRetrieveResponse as NotificationSettingRetrieveResponse,
    type NotificationSettingDeleteResponse as NotificationSettingDeleteResponse,
    type NotificationSettingsDefaultFlatPagination as NotificationSettingsDefaultFlatPagination,
    type NotificationSettingCreateParams as NotificationSettingCreateParams,
    type NotificationSettingListParams as NotificationSettingListParams,
  };

  export {
    NumberBlockOrders as NumberBlockOrders,
    type NumberBlockOrder as NumberBlockOrder,
    type NumberBlockOrderCreateResponse as NumberBlockOrderCreateResponse,
    type NumberBlockOrderRetrieveResponse as NumberBlockOrderRetrieveResponse,
    type NumberBlockOrdersDefaultFlatPagination as NumberBlockOrdersDefaultFlatPagination,
    type NumberBlockOrderCreateParams as NumberBlockOrderCreateParams,
    type NumberBlockOrderListParams as NumberBlockOrderListParams,
  };

  export {
    NumberLookup as NumberLookup,
    type NumberLookupRetrieveResponse as NumberLookupRetrieveResponse,
    type NumberLookupRetrieveParams as NumberLookupRetrieveParams,
  };

  export {
    NumberOrderPhoneNumbers as NumberOrderPhoneNumbers,
    type NumberOrderPhoneNumber as NumberOrderPhoneNumber,
    type UpdateRegulatoryRequirement as UpdateRegulatoryRequirement,
    type NumberOrderPhoneNumberRetrieveResponse as NumberOrderPhoneNumberRetrieveResponse,
    type NumberOrderPhoneNumberListResponse as NumberOrderPhoneNumberListResponse,
    type NumberOrderPhoneNumberUpdateRequirementGroupResponse as NumberOrderPhoneNumberUpdateRequirementGroupResponse,
    type NumberOrderPhoneNumberUpdateRequirementsResponse as NumberOrderPhoneNumberUpdateRequirementsResponse,
    type NumberOrderPhoneNumberListParams as NumberOrderPhoneNumberListParams,
    type NumberOrderPhoneNumberUpdateRequirementGroupParams as NumberOrderPhoneNumberUpdateRequirementGroupParams,
    type NumberOrderPhoneNumberUpdateRequirementsParams as NumberOrderPhoneNumberUpdateRequirementsParams,
  };

  export {
    NumberOrders as NumberOrders,
    type NumberOrderWithPhoneNumbers as NumberOrderWithPhoneNumbers,
    type PhoneNumber as PhoneNumber,
    type NumberOrderCreateResponse as NumberOrderCreateResponse,
    type NumberOrderRetrieveResponse as NumberOrderRetrieveResponse,
    type NumberOrderUpdateResponse as NumberOrderUpdateResponse,
    type NumberOrderListResponse as NumberOrderListResponse,
    type NumberOrderListResponsesDefaultFlatPagination as NumberOrderListResponsesDefaultFlatPagination,
    type NumberOrderCreateParams as NumberOrderCreateParams,
    type NumberOrderUpdateParams as NumberOrderUpdateParams,
    type NumberOrderListParams as NumberOrderListParams,
  };

  export {
    NumberReservations as NumberReservations,
    type NumberReservation as NumberReservation,
    type ReservedPhoneNumber as ReservedPhoneNumber,
    type NumberReservationCreateResponse as NumberReservationCreateResponse,
    type NumberReservationRetrieveResponse as NumberReservationRetrieveResponse,
    type NumberReservationsDefaultFlatPagination as NumberReservationsDefaultFlatPagination,
    type NumberReservationCreateParams as NumberReservationCreateParams,
    type NumberReservationListParams as NumberReservationListParams,
  };

  export {
    NumbersFeatures as NumbersFeatures,
    type NumbersFeatureCreateResponse as NumbersFeatureCreateResponse,
    type NumbersFeatureCreateParams as NumbersFeatureCreateParams,
  };

  export { OperatorConnect as OperatorConnect };

  export {
    OtaUpdates as OtaUpdates,
    type OtaUpdateRetrieveResponse as OtaUpdateRetrieveResponse,
    type OtaUpdateListResponse as OtaUpdateListResponse,
    type OtaUpdateListResponsesDefaultFlatPagination as OtaUpdateListResponsesDefaultFlatPagination,
    type OtaUpdateListParams as OtaUpdateListParams,
  };

  export {
    OutboundVoiceProfiles as OutboundVoiceProfiles,
    type OutboundCallRecording as OutboundCallRecording,
    type OutboundVoiceProfile as OutboundVoiceProfile,
    type ServicePlan as ServicePlan,
    type TrafficType as TrafficType,
    type UsagePaymentMethod as UsagePaymentMethod,
    type OutboundVoiceProfileCreateResponse as OutboundVoiceProfileCreateResponse,
    type OutboundVoiceProfileRetrieveResponse as OutboundVoiceProfileRetrieveResponse,
    type OutboundVoiceProfileUpdateResponse as OutboundVoiceProfileUpdateResponse,
    type OutboundVoiceProfileDeleteResponse as OutboundVoiceProfileDeleteResponse,
    type OutboundVoiceProfilesDefaultFlatPagination as OutboundVoiceProfilesDefaultFlatPagination,
    type OutboundVoiceProfileCreateParams as OutboundVoiceProfileCreateParams,
    type OutboundVoiceProfileUpdateParams as OutboundVoiceProfileUpdateParams,
    type OutboundVoiceProfileListParams as OutboundVoiceProfileListParams,
  };

  export { Payment as Payment };

  export { PhoneNumberBlocks as PhoneNumberBlocks };

  export {
    PhoneNumbers as PhoneNumbers,
    type PhoneNumberDetailed as PhoneNumberDetailed,
    type PhoneNumberRetrieveResponse as PhoneNumberRetrieveResponse,
    type PhoneNumberUpdateResponse as PhoneNumberUpdateResponse,
    type PhoneNumberDeleteResponse as PhoneNumberDeleteResponse,
    type PhoneNumberSlimListResponse as PhoneNumberSlimListResponse,
    type PhoneNumberDetailedsDefaultFlatPagination as PhoneNumberDetailedsDefaultFlatPagination,
    type PhoneNumberSlimListResponsesDefaultFlatPagination as PhoneNumberSlimListResponsesDefaultFlatPagination,
    type PhoneNumberUpdateParams as PhoneNumberUpdateParams,
    type PhoneNumberListParams as PhoneNumberListParams,
    type PhoneNumberSlimListParams as PhoneNumberSlimListParams,
  };

  export {
    PhoneNumbersRegulatoryRequirements as PhoneNumbersRegulatoryRequirements,
    type PhoneNumbersRegulatoryRequirementRetrieveResponse as PhoneNumbersRegulatoryRequirementRetrieveResponse,
    type PhoneNumbersRegulatoryRequirementRetrieveParams as PhoneNumbersRegulatoryRequirementRetrieveParams,
  };

  export {
    PortabilityChecks as PortabilityChecks,
    type PortabilityCheckRunResponse as PortabilityCheckRunResponse,
    type PortabilityCheckRunParams as PortabilityCheckRunParams,
  };

  export { Porting as Porting, type PortingListUkCarriersResponse as PortingListUkCarriersResponse };

  export {
    PortingOrders as PortingOrders,
    type PortingOrder as PortingOrder,
    type PortingOrderActivationSettings as PortingOrderActivationSettings,
    type PortingOrderDocuments as PortingOrderDocuments,
    type PortingOrderEndUser as PortingOrderEndUser,
    type PortingOrderEndUserAdmin as PortingOrderEndUserAdmin,
    type PortingOrderEndUserLocation as PortingOrderEndUserLocation,
    type PortingOrderMessaging as PortingOrderMessaging,
    type PortingOrderMisc as PortingOrderMisc,
    type PortingOrderPhoneNumberConfiguration as PortingOrderPhoneNumberConfiguration,
    type PortingOrderRequirement as PortingOrderRequirement,
    type PortingOrderType as PortingOrderType,
    type PortingOrderUserFeedback as PortingOrderUserFeedback,
    type PortingOrdersActivationJob as PortingOrdersActivationJob,
    type PortingOrderCreateResponse as PortingOrderCreateResponse,
    type PortingOrderRetrieveResponse as PortingOrderRetrieveResponse,
    type PortingOrderUpdateResponse as PortingOrderUpdateResponse,
    type PortingOrderRetrieveAllowedFocWindowsResponse as PortingOrderRetrieveAllowedFocWindowsResponse,
    type PortingOrderRetrieveExceptionTypesResponse as PortingOrderRetrieveExceptionTypesResponse,
    type PortingOrderRetrieveRequirementsResponse as PortingOrderRetrieveRequirementsResponse,
    type PortingOrderRetrieveSubRequestResponse as PortingOrderRetrieveSubRequestResponse,
    type PortingOrdersDefaultFlatPagination as PortingOrdersDefaultFlatPagination,
    type PortingOrderRetrieveRequirementsResponsesDefaultFlatPagination as PortingOrderRetrieveRequirementsResponsesDefaultFlatPagination,
    type PortingOrderCreateParams as PortingOrderCreateParams,
    type PortingOrderRetrieveParams as PortingOrderRetrieveParams,
    type PortingOrderUpdateParams as PortingOrderUpdateParams,
    type PortingOrderListParams as PortingOrderListParams,
    type PortingOrderRetrieveLoaTemplateParams as PortingOrderRetrieveLoaTemplateParams,
    type PortingOrderRetrieveRequirementsParams as PortingOrderRetrieveRequirementsParams,
  };

  export {
    PortingPhoneNumbers as PortingPhoneNumbers,
    type PortingPhoneNumberListResponse as PortingPhoneNumberListResponse,
    type PortingPhoneNumberListResponsesDefaultFlatPagination as PortingPhoneNumberListResponsesDefaultFlatPagination,
    type PortingPhoneNumberListParams as PortingPhoneNumberListParams,
  };

  export {
    Portouts as Portouts,
    type PortoutDetails as PortoutDetails,
    type PortoutRetrieveResponse as PortoutRetrieveResponse,
    type PortoutListRejectionCodesResponse as PortoutListRejectionCodesResponse,
    type PortoutUpdateStatusResponse as PortoutUpdateStatusResponse,
    type PortoutDetailsDefaultFlatPagination as PortoutDetailsDefaultFlatPagination,
    type PortoutListParams as PortoutListParams,
    type PortoutListRejectionCodesParams as PortoutListRejectionCodesParams,
    type PortoutUpdateStatusParams as PortoutUpdateStatusParams,
  };

  export {
    PrivateWirelessGateways as PrivateWirelessGateways,
    type PrivateWirelessGateway as PrivateWirelessGateway,
    type PrivateWirelessGatewayStatus as PrivateWirelessGatewayStatus,
    type PwgAssignedResourcesSummary as PwgAssignedResourcesSummary,
    type PrivateWirelessGatewayCreateResponse as PrivateWirelessGatewayCreateResponse,
    type PrivateWirelessGatewayRetrieveResponse as PrivateWirelessGatewayRetrieveResponse,
    type PrivateWirelessGatewayDeleteResponse as PrivateWirelessGatewayDeleteResponse,
    type PrivateWirelessGatewaysDefaultFlatPagination as PrivateWirelessGatewaysDefaultFlatPagination,
    type PrivateWirelessGatewayCreateParams as PrivateWirelessGatewayCreateParams,
    type PrivateWirelessGatewayListParams as PrivateWirelessGatewayListParams,
  };

  export {
    PublicInternetGateways as PublicInternetGateways,
    type NetworkInterface as NetworkInterface,
    type NetworkInterfaceRegion as NetworkInterfaceRegion,
    type PublicInternetGatewayCreateResponse as PublicInternetGatewayCreateResponse,
    type PublicInternetGatewayRetrieveResponse as PublicInternetGatewayRetrieveResponse,
    type PublicInternetGatewayListResponse as PublicInternetGatewayListResponse,
    type PublicInternetGatewayDeleteResponse as PublicInternetGatewayDeleteResponse,
    type PublicInternetGatewayListResponsesDefaultFlatPagination as PublicInternetGatewayListResponsesDefaultFlatPagination,
    type PublicInternetGatewayCreateParams as PublicInternetGatewayCreateParams,
    type PublicInternetGatewayListParams as PublicInternetGatewayListParams,
  };

  export { Queues as Queues, type QueueRetrieveResponse as QueueRetrieveResponse };

  export { RcsAgents as RcsAgents, type RcsAgent as RcsAgent, type RcsAgentResponse as RcsAgentResponse };

  export {
    RecordingTranscriptions as RecordingTranscriptions,
    type RecordingTranscription as RecordingTranscription,
    type RecordingTranscriptionRetrieveResponse as RecordingTranscriptionRetrieveResponse,
    type RecordingTranscriptionListResponse as RecordingTranscriptionListResponse,
    type RecordingTranscriptionDeleteResponse as RecordingTranscriptionDeleteResponse,
  };

  export {
    Recordings as Recordings,
    type RecordingResponseData as RecordingResponseData,
    type RecordingRetrieveResponse as RecordingRetrieveResponse,
    type RecordingDeleteResponse as RecordingDeleteResponse,
    type RecordingResponseDataDefaultFlatPagination as RecordingResponseDataDefaultFlatPagination,
    type RecordingListParams as RecordingListParams,
  };

  export { Regions as Regions, type RegionListResponse as RegionListResponse };

  export {
    RegulatoryRequirements as RegulatoryRequirements,
    type RegulatoryRequirementRetrieveResponse as RegulatoryRequirementRetrieveResponse,
    type RegulatoryRequirementRetrieveParams as RegulatoryRequirementRetrieveParams,
  };

  export {
    Reports as Reports,
    type ReportListMdrsResponse as ReportListMdrsResponse,
    type ReportListWdrsResponse as ReportListWdrsResponse,
    type ReportListWdrsResponsesDefaultFlatPagination as ReportListWdrsResponsesDefaultFlatPagination,
    type ReportListMdrsParams as ReportListMdrsParams,
    type ReportListWdrsParams as ReportListWdrsParams,
  };

  export {
    RequirementGroups as RequirementGroups,
    type RequirementGroup as RequirementGroup,
    type RequirementGroupListResponse as RequirementGroupListResponse,
    type RequirementGroupCreateParams as RequirementGroupCreateParams,
    type RequirementGroupUpdateParams as RequirementGroupUpdateParams,
    type RequirementGroupListParams as RequirementGroupListParams,
  };

  export {
    RequirementTypes as RequirementTypes,
    type RequirementTypeRetrieveResponse as RequirementTypeRetrieveResponse,
    type RequirementTypeListResponse as RequirementTypeListResponse,
    type RequirementTypeListParams as RequirementTypeListParams,
  };

  export {
    Requirements as Requirements,
    type RequirementRetrieveResponse as RequirementRetrieveResponse,
    type RequirementListResponse as RequirementListResponse,
    type RequirementListResponsesDefaultFlatPagination as RequirementListResponsesDefaultFlatPagination,
    type RequirementListParams as RequirementListParams,
  };

  export {
    RoomCompositions as RoomCompositions,
    type RoomComposition as RoomComposition,
    type VideoRegion as VideoRegion,
    type RoomCompositionCreateResponse as RoomCompositionCreateResponse,
    type RoomCompositionRetrieveResponse as RoomCompositionRetrieveResponse,
    type RoomCompositionsDefaultFlatPagination as RoomCompositionsDefaultFlatPagination,
    type RoomCompositionCreateParams as RoomCompositionCreateParams,
    type RoomCompositionListParams as RoomCompositionListParams,
  };

  export {
    RoomParticipants as RoomParticipants,
    type RoomParticipantRetrieveResponse as RoomParticipantRetrieveResponse,
    type RoomParticipantListParams as RoomParticipantListParams,
  };

  export {
    RoomRecordings as RoomRecordings,
    type RoomRecordingRetrieveResponse as RoomRecordingRetrieveResponse,
    type RoomRecordingListResponse as RoomRecordingListResponse,
    type RoomRecordingDeleteBulkResponse as RoomRecordingDeleteBulkResponse,
    type RoomRecordingListResponsesDefaultFlatPagination as RoomRecordingListResponsesDefaultFlatPagination,
    type RoomRecordingListParams as RoomRecordingListParams,
    type RoomRecordingDeleteBulkParams as RoomRecordingDeleteBulkParams,
  };

  export {
    Rooms as Rooms,
    type Room as Room,
    type RoomSession as RoomSession,
    type RoomCreateResponse as RoomCreateResponse,
    type RoomRetrieveResponse as RoomRetrieveResponse,
    type RoomUpdateResponse as RoomUpdateResponse,
    type RoomsDefaultFlatPagination as RoomsDefaultFlatPagination,
    type RoomCreateParams as RoomCreateParams,
    type RoomRetrieveParams as RoomRetrieveParams,
    type RoomUpdateParams as RoomUpdateParams,
    type RoomListParams as RoomListParams,
  };

  export {
    Seti as Seti,
    type SetiRetrieveBlackBoxTestResultsResponse as SetiRetrieveBlackBoxTestResultsResponse,
    type SetiRetrieveBlackBoxTestResultsParams as SetiRetrieveBlackBoxTestResultsParams,
  };

  export {
    ShortCodes as ShortCodes,
    type ShortCodeRetrieveResponse as ShortCodeRetrieveResponse,
    type ShortCodeUpdateResponse as ShortCodeUpdateResponse,
    type ShortCodeUpdateParams as ShortCodeUpdateParams,
    type ShortCodeListParams as ShortCodeListParams,
  };

  export {
    SimCardDataUsageNotifications as SimCardDataUsageNotifications,
    type SimCardDataUsageNotification as SimCardDataUsageNotification,
    type SimCardDataUsageNotificationCreateResponse as SimCardDataUsageNotificationCreateResponse,
    type SimCardDataUsageNotificationRetrieveResponse as SimCardDataUsageNotificationRetrieveResponse,
    type SimCardDataUsageNotificationUpdateResponse as SimCardDataUsageNotificationUpdateResponse,
    type SimCardDataUsageNotificationDeleteResponse as SimCardDataUsageNotificationDeleteResponse,
    type SimCardDataUsageNotificationsDefaultFlatPagination as SimCardDataUsageNotificationsDefaultFlatPagination,
    type SimCardDataUsageNotificationCreateParams as SimCardDataUsageNotificationCreateParams,
    type SimCardDataUsageNotificationUpdateParams as SimCardDataUsageNotificationUpdateParams,
    type SimCardDataUsageNotificationListParams as SimCardDataUsageNotificationListParams,
  };

  export {
    SimCardGroups as SimCardGroups,
    type ConsumedData as ConsumedData,
    type SimCardGroup as SimCardGroup,
    type SimCardGroupCreateResponse as SimCardGroupCreateResponse,
    type SimCardGroupRetrieveResponse as SimCardGroupRetrieveResponse,
    type SimCardGroupUpdateResponse as SimCardGroupUpdateResponse,
    type SimCardGroupListResponse as SimCardGroupListResponse,
    type SimCardGroupDeleteResponse as SimCardGroupDeleteResponse,
    type SimCardGroupListResponsesDefaultFlatPagination as SimCardGroupListResponsesDefaultFlatPagination,
    type SimCardGroupCreateParams as SimCardGroupCreateParams,
    type SimCardGroupRetrieveParams as SimCardGroupRetrieveParams,
    type SimCardGroupUpdateParams as SimCardGroupUpdateParams,
    type SimCardGroupListParams as SimCardGroupListParams,
  };

  export {
    SimCardOrderPreview as SimCardOrderPreview,
    type SimCardOrderPreviewPreviewResponse as SimCardOrderPreviewPreviewResponse,
    type SimCardOrderPreviewPreviewParams as SimCardOrderPreviewPreviewParams,
  };

  export {
    SimCardOrders as SimCardOrders,
    type SimCardOrder as SimCardOrder,
    type SimCardOrderCreateResponse as SimCardOrderCreateResponse,
    type SimCardOrderRetrieveResponse as SimCardOrderRetrieveResponse,
    type SimCardOrdersDefaultFlatPagination as SimCardOrdersDefaultFlatPagination,
    type SimCardOrderCreateParams as SimCardOrderCreateParams,
    type SimCardOrderListParams as SimCardOrderListParams,
  };

  export {
    SimCards as SimCards,
    type SimCard as SimCard,
    type SimCardRetrieveResponse as SimCardRetrieveResponse,
    type SimCardUpdateResponse as SimCardUpdateResponse,
    type SimCardDeleteResponse as SimCardDeleteResponse,
    type SimCardGetActivationCodeResponse as SimCardGetActivationCodeResponse,
    type SimCardGetDeviceDetailsResponse as SimCardGetDeviceDetailsResponse,
    type SimCardGetPublicIPResponse as SimCardGetPublicIPResponse,
    type SimCardListWirelessConnectivityLogsResponse as SimCardListWirelessConnectivityLogsResponse,
    type SimCardListWirelessConnectivityLogsResponsesDefaultFlatPagination as SimCardListWirelessConnectivityLogsResponsesDefaultFlatPagination,
    type SimCardRetrieveParams as SimCardRetrieveParams,
    type SimCardUpdateParams as SimCardUpdateParams,
    type SimCardListParams as SimCardListParams,
    type SimCardDeleteParams as SimCardDeleteParams,
    type SimCardListWirelessConnectivityLogsParams as SimCardListWirelessConnectivityLogsParams,
  };

  export {
    SiprecConnectors as SiprecConnectors,
    type SiprecConnectorCreateResponse as SiprecConnectorCreateResponse,
    type SiprecConnectorRetrieveResponse as SiprecConnectorRetrieveResponse,
    type SiprecConnectorUpdateResponse as SiprecConnectorUpdateResponse,
    type SiprecConnectorCreateParams as SiprecConnectorCreateParams,
    type SiprecConnectorUpdateParams as SiprecConnectorUpdateParams,
  };

  export {
    Storage as Storage,
    type StorageListMigrationSourceCoverageResponse as StorageListMigrationSourceCoverageResponse,
  };

  export {
    SubNumberOrders as SubNumberOrders,
    type SubNumberOrder as SubNumberOrder,
    type SubNumberOrderRegulatoryRequirement as SubNumberOrderRegulatoryRequirement,
    type SubNumberOrderRetrieveResponse as SubNumberOrderRetrieveResponse,
    type SubNumberOrderUpdateResponse as SubNumberOrderUpdateResponse,
    type SubNumberOrderListResponse as SubNumberOrderListResponse,
    type SubNumberOrderCancelResponse as SubNumberOrderCancelResponse,
    type SubNumberOrderUpdateRequirementGroupResponse as SubNumberOrderUpdateRequirementGroupResponse,
    type SubNumberOrderRetrieveParams as SubNumberOrderRetrieveParams,
    type SubNumberOrderUpdateParams as SubNumberOrderUpdateParams,
    type SubNumberOrderListParams as SubNumberOrderListParams,
    type SubNumberOrderUpdateRequirementGroupParams as SubNumberOrderUpdateRequirementGroupParams,
  };

  export {
    SubNumberOrdersReport as SubNumberOrdersReport,
    type SubNumberOrdersReportCreateResponse as SubNumberOrdersReportCreateResponse,
    type SubNumberOrdersReportRetrieveResponse as SubNumberOrdersReportRetrieveResponse,
    type SubNumberOrdersReportDownloadResponse as SubNumberOrdersReportDownloadResponse,
    type SubNumberOrdersReportCreateParams as SubNumberOrdersReportCreateParams,
  };

  export {
    TelephonyCredentials as TelephonyCredentials,
    type TelephonyCredential as TelephonyCredential,
    type TelephonyCredentialCreateResponse as TelephonyCredentialCreateResponse,
    type TelephonyCredentialRetrieveResponse as TelephonyCredentialRetrieveResponse,
    type TelephonyCredentialUpdateResponse as TelephonyCredentialUpdateResponse,
    type TelephonyCredentialDeleteResponse as TelephonyCredentialDeleteResponse,
    type TelephonyCredentialCreateTokenResponse as TelephonyCredentialCreateTokenResponse,
    type TelephonyCredentialsDefaultFlatPagination as TelephonyCredentialsDefaultFlatPagination,
    type TelephonyCredentialCreateParams as TelephonyCredentialCreateParams,
    type TelephonyCredentialUpdateParams as TelephonyCredentialUpdateParams,
    type TelephonyCredentialListParams as TelephonyCredentialListParams,
  };

  export {
    Texml as Texml,
    type TexmlSecretsResponse as TexmlSecretsResponse,
    type TexmlSecretsParams as TexmlSecretsParams,
  };

  export {
    TexmlApplications as TexmlApplications,
    type TexmlApplication as TexmlApplication,
    type TexmlApplicationCreateResponse as TexmlApplicationCreateResponse,
    type TexmlApplicationRetrieveResponse as TexmlApplicationRetrieveResponse,
    type TexmlApplicationUpdateResponse as TexmlApplicationUpdateResponse,
    type TexmlApplicationDeleteResponse as TexmlApplicationDeleteResponse,
    type TexmlApplicationsDefaultFlatPagination as TexmlApplicationsDefaultFlatPagination,
    type TexmlApplicationCreateParams as TexmlApplicationCreateParams,
    type TexmlApplicationUpdateParams as TexmlApplicationUpdateParams,
    type TexmlApplicationListParams as TexmlApplicationListParams,
  };

  export {
    TextToSpeech as TextToSpeech,
    type TextToSpeechListVoicesResponse as TextToSpeechListVoicesResponse,
    type TextToSpeechGenerateSpeechParams as TextToSpeechGenerateSpeechParams,
    type TextToSpeechListVoicesParams as TextToSpeechListVoicesParams,
  };

  export {
    UsageReports as UsageReports,
    type UsageReportListResponse as UsageReportListResponse,
    type UsageReportGetOptionsResponse as UsageReportGetOptionsResponse,
    type UsageReportListResponsesDefaultFlatPagination as UsageReportListResponsesDefaultFlatPagination,
    type UsageReportListParams as UsageReportListParams,
    type UsageReportGetOptionsParams as UsageReportGetOptionsParams,
  };

  export {
    UserAddresses as UserAddresses,
    type UserAddress as UserAddress,
    type UserAddressCreateResponse as UserAddressCreateResponse,
    type UserAddressRetrieveResponse as UserAddressRetrieveResponse,
    type UserAddressesDefaultFlatPagination as UserAddressesDefaultFlatPagination,
    type UserAddressCreateParams as UserAddressCreateParams,
    type UserAddressListParams as UserAddressListParams,
  };

  export {
    UserTags as UserTags,
    type UserTagListResponse as UserTagListResponse,
    type UserTagListParams as UserTagListParams,
  };

  export {
    Verifications as Verifications,
    type CreateVerificationResponse as CreateVerificationResponse,
    type Verification as Verification,
    type VerificationRetrieveResponse as VerificationRetrieveResponse,
    type VerificationTriggerCallParams as VerificationTriggerCallParams,
    type VerificationTriggerFlashcallParams as VerificationTriggerFlashcallParams,
    type VerificationTriggerSMSParams as VerificationTriggerSMSParams,
  };

  export {
    VerifiedNumbers as VerifiedNumbers,
    type VerifiedNumber as VerifiedNumber,
    type VerifiedNumberDataWrapper as VerifiedNumberDataWrapper,
    type VerifiedNumberCreateResponse as VerifiedNumberCreateResponse,
    type VerifiedNumbersDefaultFlatPagination as VerifiedNumbersDefaultFlatPagination,
    type VerifiedNumberCreateParams as VerifiedNumberCreateParams,
    type VerifiedNumberListParams as VerifiedNumberListParams,
  };

  export {
    VerifyProfiles as VerifyProfiles,
    type MessageTemplate as MessageTemplate,
    type VerifyProfile as VerifyProfile,
    type VerifyProfileData as VerifyProfileData,
    type VerifyProfileMessageTemplateResponse as VerifyProfileMessageTemplateResponse,
    type VerifyProfileRetrieveTemplatesResponse as VerifyProfileRetrieveTemplatesResponse,
    type VerifyProfilesDefaultFlatPagination as VerifyProfilesDefaultFlatPagination,
    type VerifyProfileCreateParams as VerifyProfileCreateParams,
    type VerifyProfileUpdateParams as VerifyProfileUpdateParams,
    type VerifyProfileListParams as VerifyProfileListParams,
    type VerifyProfileCreateTemplateParams as VerifyProfileCreateTemplateParams,
    type VerifyProfileUpdateTemplateParams as VerifyProfileUpdateTemplateParams,
  };

  export {
    VirtualCrossConnects as VirtualCrossConnects,
    type VirtualCrossConnectCreateResponse as VirtualCrossConnectCreateResponse,
    type VirtualCrossConnectRetrieveResponse as VirtualCrossConnectRetrieveResponse,
    type VirtualCrossConnectUpdateResponse as VirtualCrossConnectUpdateResponse,
    type VirtualCrossConnectListResponse as VirtualCrossConnectListResponse,
    type VirtualCrossConnectDeleteResponse as VirtualCrossConnectDeleteResponse,
    type VirtualCrossConnectListResponsesDefaultFlatPagination as VirtualCrossConnectListResponsesDefaultFlatPagination,
    type VirtualCrossConnectCreateParams as VirtualCrossConnectCreateParams,
    type VirtualCrossConnectUpdateParams as VirtualCrossConnectUpdateParams,
    type VirtualCrossConnectListParams as VirtualCrossConnectListParams,
  };

  export {
    VirtualCrossConnectsCoverage as VirtualCrossConnectsCoverage,
    type VirtualCrossConnectsCoverageListResponse as VirtualCrossConnectsCoverageListResponse,
    type VirtualCrossConnectsCoverageListResponsesDefaultFlatPagination as VirtualCrossConnectsCoverageListResponsesDefaultFlatPagination,
    type VirtualCrossConnectsCoverageListParams as VirtualCrossConnectsCoverageListParams,
  };

  export {
    WebhookDeliveries as WebhookDeliveries,
    type WebhookDeliveryRetrieveResponse as WebhookDeliveryRetrieveResponse,
    type WebhookDeliveryListResponse as WebhookDeliveryListResponse,
    type WebhookDeliveryListResponsesDefaultFlatPagination as WebhookDeliveryListResponsesDefaultFlatPagination,
    type WebhookDeliveryListParams as WebhookDeliveryListParams,
  };

  export {
    WireguardInterfaces as WireguardInterfaces,
    type WireguardInterfaceCreateResponse as WireguardInterfaceCreateResponse,
    type WireguardInterfaceRetrieveResponse as WireguardInterfaceRetrieveResponse,
    type WireguardInterfaceListResponse as WireguardInterfaceListResponse,
    type WireguardInterfaceDeleteResponse as WireguardInterfaceDeleteResponse,
    type WireguardInterfaceListResponsesDefaultFlatPagination as WireguardInterfaceListResponsesDefaultFlatPagination,
    type WireguardInterfaceCreateParams as WireguardInterfaceCreateParams,
    type WireguardInterfaceListParams as WireguardInterfaceListParams,
  };

  export {
    WireguardPeers as WireguardPeers,
    type WireguardPeerPatch as WireguardPeerPatch,
    type WireguardPeerCreateResponse as WireguardPeerCreateResponse,
    type WireguardPeerRetrieveResponse as WireguardPeerRetrieveResponse,
    type WireguardPeerUpdateResponse as WireguardPeerUpdateResponse,
    type WireguardPeerListResponse as WireguardPeerListResponse,
    type WireguardPeerDeleteResponse as WireguardPeerDeleteResponse,
    type WireguardPeerRetrieveConfigResponse as WireguardPeerRetrieveConfigResponse,
    type WireguardPeerListResponsesDefaultFlatPagination as WireguardPeerListResponsesDefaultFlatPagination,
    type WireguardPeerCreateParams as WireguardPeerCreateParams,
    type WireguardPeerUpdateParams as WireguardPeerUpdateParams,
    type WireguardPeerListParams as WireguardPeerListParams,
  };

  export {
    Wireless as Wireless,
    type WirelessRetrieveRegionsResponse as WirelessRetrieveRegionsResponse,
    type WirelessRetrieveRegionsParams as WirelessRetrieveRegionsParams,
  };

  export {
    WirelessBlocklistValues as WirelessBlocklistValues,
    type WirelessBlocklistValueListResponse as WirelessBlocklistValueListResponse,
    type WirelessBlocklistValueListParams as WirelessBlocklistValueListParams,
  };

  export {
    WirelessBlocklists as WirelessBlocklists,
    type WirelessBlocklist as WirelessBlocklist,
    type WirelessBlocklistCreateResponse as WirelessBlocklistCreateResponse,
    type WirelessBlocklistRetrieveResponse as WirelessBlocklistRetrieveResponse,
    type WirelessBlocklistUpdateResponse as WirelessBlocklistUpdateResponse,
    type WirelessBlocklistDeleteResponse as WirelessBlocklistDeleteResponse,
    type WirelessBlocklistsDefaultFlatPagination as WirelessBlocklistsDefaultFlatPagination,
    type WirelessBlocklistCreateParams as WirelessBlocklistCreateParams,
    type WirelessBlocklistUpdateParams as WirelessBlocklistUpdateParams,
    type WirelessBlocklistListParams as WirelessBlocklistListParams,
  };

  export {
    WellKnown as WellKnown,
    type WellKnownRetrieveAuthorizationServerMetadataResponse as WellKnownRetrieveAuthorizationServerMetadataResponse,
    type WellKnownRetrieveProtectedResourceMetadataResponse as WellKnownRetrieveProtectedResourceMetadataResponse,
  };

  export {
    InexplicitNumberOrders as InexplicitNumberOrders,
    type InexplicitNumberOrderResponse as InexplicitNumberOrderResponse,
    type InexplicitNumberOrderCreateResponse as InexplicitNumberOrderCreateResponse,
    type InexplicitNumberOrderRetrieveResponse as InexplicitNumberOrderRetrieveResponse,
    type InexplicitNumberOrderResponsesDefaultFlatPaginationForInexplicitNumberOrders as InexplicitNumberOrderResponsesDefaultFlatPaginationForInexplicitNumberOrders,
    type InexplicitNumberOrderCreateParams as InexplicitNumberOrderCreateParams,
    type InexplicitNumberOrderListParams as InexplicitNumberOrderListParams,
  };

  export {
    MobilePhoneNumbers as MobilePhoneNumbers,
    type MobilePhoneNumber as MobilePhoneNumber,
    type MobilePhoneNumberRetrieveResponse as MobilePhoneNumberRetrieveResponse,
    type MobilePhoneNumberUpdateResponse as MobilePhoneNumberUpdateResponse,
    type MobilePhoneNumbersDefaultFlatPagination as MobilePhoneNumbersDefaultFlatPagination,
    type MobilePhoneNumberUpdateParams as MobilePhoneNumberUpdateParams,
    type MobilePhoneNumberListParams as MobilePhoneNumberListParams,
  };

  export {
    MobileVoiceConnections as MobileVoiceConnections,
    type MobileVoiceConnection as MobileVoiceConnection,
    type MobileVoiceConnectionCreateResponse as MobileVoiceConnectionCreateResponse,
    type MobileVoiceConnectionRetrieveResponse as MobileVoiceConnectionRetrieveResponse,
    type MobileVoiceConnectionUpdateResponse as MobileVoiceConnectionUpdateResponse,
    type MobileVoiceConnectionDeleteResponse as MobileVoiceConnectionDeleteResponse,
    type MobileVoiceConnectionsDefaultFlatPagination as MobileVoiceConnectionsDefaultFlatPagination,
    type MobileVoiceConnectionCreateParams as MobileVoiceConnectionCreateParams,
    type MobileVoiceConnectionUpdateParams as MobileVoiceConnectionUpdateParams,
    type MobileVoiceConnectionListParams as MobileVoiceConnectionListParams,
  };

  export {
    Messaging10dlc as Messaging10dlc,
    type Messaging10dlcGetEnumResponse as Messaging10dlcGetEnumResponse,
  };

  export { SpeechToText as SpeechToText, type SpeechToTextTranscribeParams as SpeechToTextTranscribeParams };

  export { Organizations as Organizations };

  export type APIError = API.APIError;
  export type AvailablePhoneNumbersMetadata = API.AvailablePhoneNumbersMetadata;
  export type ConnectionNoiseSuppressionDetails = API.ConnectionNoiseSuppressionDetails;
  export type ConnectionsPaginationMeta = API.ConnectionsPaginationMeta;
  export type DocReqsRequirementType = API.DocReqsRequirementType;
  export type HostedNumber = API.HostedNumber;
  export type InboundMessagePayload = API.InboundMessagePayload;
  export type MessagingFeatureSet = API.MessagingFeatureSet;
  export type MessagingHostedNumberOrder = API.MessagingHostedNumberOrder;
  export type MessagingPaginationMeta = API.MessagingPaginationMeta;
  export type Metadata = API.Metadata;
  export type NumberHealthMetrics = API.NumberHealthMetrics;
  export type PhoneNumberWithMessagingSettings = API.PhoneNumberWithMessagingSettings;
  export type PortingOrderStatus = API.PortingOrderStatus;
  export type PortingOrdersExceptionType = API.PortingOrdersExceptionType;
  export type RoomParticipant = API.RoomParticipant;
  export type ShortCode = API.ShortCode;
  export type SimCardStatus = API.SimCardStatus;
  export type SimpleSimCard = API.SimpleSimCard;
  export type SubNumberOrderRegulatoryRequirementWithValue = API.SubNumberOrderRegulatoryRequirementWithValue;
}
